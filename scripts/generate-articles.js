const axios = require('axios');
const fs = require('fs');
const path = require('path');
const Parser = require('rss-parser');

// --- CONFIGURATION ---
const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
const GEMINI_API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent`;

const ARTICLES_DIR = path.join(__dirname, '../../content/posts');
const LOGS_DIR = path.join(__dirname, '../../content/logs');

const FEEDS = [
  'https://www.theverge.com/rss/index.xml',
  'https://techcrunch.com/feed/',
  'https://www.wired.com/feed/rss',
  'https://www.engadget.com/rss.xml',
  'https://www.androidauthority.com/feed/',
  'https://www.gsmarena.com/rss-news-reviews.php3',
  'https://www.techradar.com/rss',
  'https://arstechnica.com/feed/',
  'https://www.theverge.com/rss/rss.xml'
];

const KEYWORDS = [
  'ai','artificial intelligence','machine learning','llm','chatgpt','gemini','openai','deepmind',
  'smartphone','android','iphone','ios','samsung','xiaomi','oneplus','huawei','pixel',
  'wearable','smartwatch','apple watch','fitbit','garmin',
  'headphones','earbuds','audio','bluetooth','speaker',
  'windows','macos','linux','laptop','pc','desktop','cpu','gpu','nvidia','intel','amd',
  'google','chrome','youtube','gmail','microsoft','app','application','software','update',
  'ev','electric vehicle','tesla','charging','battery','mobility',
  'science','research','innovation','space','nasa','esa',
  'gaming','game','playstation','xbox','nintendo','steam','entertainment',
  'startup','technology','tech','security','privacy'
];

const BATCH_SIZE = 10;

// --- HELPER FUNCTIONS ---

function ensureDirExists(dir) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

function log(message, level = 'INFO') {
  console.log(`[${level}] ${message}`);
}

function slugify(text) {
  return text
    .toString()
    .normalize('NFD')
    .replace(/[̀-ͤ]/g, '')
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]+/g, '')
    .replace(/--+/g, '-');
}

function getExistingArticles() {
  if (!fs.existsSync(ARTICLES_DIR)) return new Set();
  const files = fs.readdirSync(ARTICLES_DIR);
  const existingSlugs = new Set();
  const existingUrls = new Set();

  for (const file of files) {
    if (file.endsWith('.md')) {
      const content = fs.readFileSync(path.join(ARTICLES_DIR, file), 'utf8');
      const slugMatch = content.match(/^slug:\s*(.*)/m);
      if (slugMatch) existingSlugs.add(slugMatch[1]);
      const urlMatch = content.match(/^source_url:\s*(.*)/m);
      if (urlMatch) existingUrls.add(urlMatch[1]);
    }
  }
  return { existingSlugs, existingUrls };
}

async function callGemini(prompt) {
  try {
    const resp = await axios.post(
      `${GEMINI_API_URL}?key=${GEMINI_API_KEY}`,
      {
        contents: [{ role: 'user', parts: [{ text: prompt }] }],
        generationConfig: { maxOutputTokens: 2048, temperature: 0.5 },
      },
      { timeout: 120000, headers: { 'Content-Type': 'application/json' } }
    );
    return resp.data.candidates?.[0]?.content?.parts?.[0]?.text;
  } catch (err) {
    log(`Gemini API error: ${err.message}`, 'ERROR');
    if (err.response?.data) {
      log(`Gemini response data: ${JSON.stringify(err.response.data)}`, 'ERROR');
    }
    return null;
  }
}

function saveArticle(slug, frontMatter, content) {
  const filePath = path.join(ARTICLES_DIR, `${slug}.md`);
  const markdownContent = `${frontMatter}\n\n${content}`;
  fs.writeFileSync(filePath, markdownContent, 'utf8');
  log(`Article saved to ${filePath}`);
}

// --- MAIN LOGIC ---

async function fetchAndFilterFeeds() {
  let allItems = [];
  const parser = new Parser();
  
  for (const feedUrl of FEEDS) {
    try {
      const feed = await parser.parseURL(feedUrl);
      log(`Fetched ${feed.items.length} items from ${feedUrl}`);
      allItems.push(...feed.items.map(item => ({ ...item, feedTitle: feed.title })));
    } catch (error) {
      log(`Failed to fetch feed ${feedUrl}: ${error.message}`, 'WARN');
    }
  }

  allItems.sort((a, b) => new Date(b.isoDate) - new Date(a.isoDate));

  const { existingSlugs, existingUrls } = getExistingArticles();

  const relevantItems = allItems.filter(item => {
    if (existingUrls.has(item.link)) return false;

    const title = item.title?.toLowerCase() || '';
    const content = item.contentSnippet?.toLowerCase() || item.content?.toLowerCase() || '';
    return KEYWORDS.some(keyword => title.includes(keyword) || content.includes(keyword));
  });

  log(`Found ${relevantItems.length} relevant items across all feeds.`);

  if (relevantItems.length === 0) {
    log('No relevant articles found. Falling back to the 3 most recent articles.', 'WARN');
    return allItems.slice(0, 3).map(item => ({...item, needsReview: true}));
  }

  return relevantItems.slice(0, BATCH_SIZE).map(item => ({...item, needsReview: false}));
}

async function generateAndSaveArticle(item) {
  const { title, link, contentSnippet, isoDate, needsReview } = item;
  
  const prompt = `
  Analyze the following article content and generate a new, original news article in Portuguese (pt-PT) for a technology news website called NEXORA News.
  The tone should be simple, light, and informative.

  Original Article Title: "${title}"
  Original Article Snippet: "${contentSnippet}"

  Based on this, provide a JSON object with the following structure. Do not include the JSON in a markdown block.
  {
    "title": "A compelling and clear title in Portuguese",
    "description": "A concise summary of the article in Portuguese (1-2 sentences)",
    "category": "Choose the most relevant category from this list: Smartphones, Wearables, Audio, Computadores, Internet & Apps, Mobilidade, Ciência, Entretenimento / Gaming, AI / Futuro",
    "imageUrl": "https://picsum.photos/seed/${Math.floor(Math.random() * 1000)}/1000/600",
    "content": "The full article content in well-structured markdown format (pt-PT). Use headings, paragraphs, and lists. The content must be original and based on the provided snippet, but not a direct translation."
  }
  `;

  const geminiResponse = await callGemini(prompt);
  if (!geminiResponse) {
    log(`Failed to generate article for "${title}"`, 'ERROR');
    return { status: 'failed', title };
  }

  let articleData;
  try {
    articleData = JSON.parse(geminiResponse.replace(/```json/g, '').replace(/```/g, ''));
  } catch (e) {
    log(`Failed to parse JSON for article "${title}": ${e.message}`, 'ERROR');
    log(`Raw Gemini response: ${geminiResponse}`, 'ERROR');
    return { status: 'failed', title };
  }

  if (!articleData.title || !articleData.content) {
    log(`Generated data for "${title}" is missing title or content.`, 'ERROR');
    return { status: 'failed', title };
  }
  
  let finalTitle = needsReview ? `[SUGGESTED] ${articleData.title}` : articleData.title;
  const slug = slugify(finalTitle);

  const { existingSlugs } = getExistingArticles();
  if (existingSlugs.has(slug)) {
    log(`Article with slug "${slug}" already exists. Skipping.`, 'WARN');
    return { status: 'skipped', title: finalTitle };
  }

  const frontMatter = `---
slug: "${slug}"
title: "${finalTitle.replace(/