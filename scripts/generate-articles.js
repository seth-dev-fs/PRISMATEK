const { GoogleGenerativeAI } = require("@google/generative-ai");
const fs = require('fs');
const path = require('path');

const axios = require('axios');
const cheerio = require('cheerio');
const { fetchFeed } = require('./helpers/fetchFeed');
const { log } = require('./helpers/logger');

// --- CONFIGURATION ---
const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
if (!GEMINI_API_KEY) {
  console.error("CRITICAL: GEMINI_API_KEY environment variable is not set.");
  process.exit(1);
}

const REVALIDATE_TOKEN = process.env.REVALIDATE_TOKEN;
const REVALIDATE_BASE_URL = process.env.NEXT_PUBLIC_VERCEL_URL || 'http://localhost:3000';

if (!REVALIDATE_TOKEN) {
  console.error("CRITICAL: REVALIDATE_TOKEN environment variable is not set. Revalidation will not occur.");
}

// GEMINI 2.5 FLASH - Stable model with FREE tier
// Free tier limits: 15 RPM, 1M TPM, 1500 RPD
// Perfect for 1 article every 2 hours (12 articles/day << 1500 RPD limit)
// Account: hello.prismatek@gmail.com
const GEMINI_MODEL = "gemini-2.5-flash";

// Unsplash configuration for fallback images
const UNSPLASH_ACCESS_KEY = process.env.UNSPLASH_ACCESS_KEY;

const ARTICLES_DIR = path.join(__dirname, '../content/posts');
const LOGS_DIR = path.join(__dirname, '../content/logs');
const RSS_FEEDS = [
    // === INTERNATIONAL SOURCES (EN) - 3 feeds ===
    'https://www.theverge.com/rss/index.xml',          // Tech news leader
    'https://techcrunch.com/feed/',                    // Startup/tech focus
    'https://www.gsmarena.com/rss-news-reviews.php3',  // Mobile specialist

    // === FRANCE (FR) - 2 feeds ===
    'https://www.frandroid.com/feed',                  // Mobile & Android
    'https://www.lesnumeriques.com/rss.xml',          // General tech

    // === GERMANY (DE) - 2 feeds ===
    'https://www.heise.de/rss/heise-atom.xml',        // Tech authority
    'https://www.golem.de/rss.php?feed=ATOM1.0',      // IT news

    // === ITALY (IT) - 2 feeds ===
    'https://www.tomshw.it/feed/',                     // Hardware focus
    'https://www.hdblog.it/feed/',                     // Tech blog

    // === SPAIN (ES) - 1 feed ===
    'https://www.xataka.com/feedburner.xml',          // Spanish tech leader

    // === UK (EN) - 2 feeds ===
    'https://www.pocket-lint.com/feed/',               // Consumer tech
    'https://www.expertreviews.co.uk/feed',           // Product reviews
];

// --- NORMALIZED CATEGORIES (CRITICAL: Use slugs only) ---
const NORMALIZED_CATEGORIES = [
    'ai-futuro',
    'audio',
    'ciencia',
    'computadores',
    'entretenimento-gaming',
    'gaming',
    'internet-apps',
    'mobilidade',
    'smartphones',
    'wearables',
    'home'
];

// Category mapping for common English terms to Portuguese slugs
const CATEGORY_MAP = {
    'phones': 'smartphones',
    'phone': 'smartphones',
    'mobile': 'smartphones',
    'games': 'gaming',
    'entertainment': 'entretenimento-gaming',
    'ai': 'ai-futuro',
    'future': 'ai-futuro',
    'artificial intelligence': 'ai-futuro',
    'computer': 'computadores',
    'computers': 'computadores',
    'pc': 'computadores',
    'internet': 'internet-apps',
    'apps': 'internet-apps',
    'web': 'internet-apps',
    'science': 'ciencia',
    'mobility': 'mobilidade',
    'transport': 'mobilidade',
    'wearable': 'wearables',
    'audio-tech': 'audio',
    'sound': 'audio',
    'headphones': 'audio'
};

// --- TRENDING TOPICS CONFIGURATION ---
// Configuration for trending topics analysis
const ARTICLES_PER_RUN = 1;           // Scalable to 4-5 in future (requires paid tier)
const CLUSTERING_THRESHOLD = 0.4;     // More permissive than deduplication (0.5)
const MIN_CLUSTER_SIZE = 2;           // Minimum articles to consider "trending"

// Stopwords for keyword extraction (bilingual PT+EN)
const STOPWORDS_PT = [
  'o', 'a', 'os', 'as', 'um', 'uma', 'de', 'do', 'da', 'dos', 'das',
  'em', 'no', 'na', 'nos', 'nas', 'para', 'por', 'com', 'sem', 'sob',
  'sobre', 'entre', 'como', 'que', 'qual', 'quais', 'quando', 'onde',
  'quem', 'cujo', 'cuja', 'e', 'ou', 'mas', 'se', 'não', 'sim', 'já',
  'mais', 'menos', 'muito', 'pouco', 'todo', 'toda', 'este', 'esse',
  'aquele', 'isto', 'isso', 'aquilo'
];

const STOPWORDS_EN = [
  'the', 'a', 'an', 'and', 'or', 'but', 'in', 'on', 'at', 'to', 'for',
  'of', 'with', 'by', 'from', 'as', 'is', 'was', 'are', 'were', 'be',
  'been', 'being', 'have', 'has', 'had', 'do', 'does', 'did', 'will',
  'would', 'could', 'should', 'may', 'might', 'can', 'this', 'that',
  'these', 'those', 'it', 'its', 'new', 'how', 'what', 'when', 'where'
];

const STOPWORDS = new Set([...STOPWORDS_PT, ...STOPWORDS_EN]);

/**
 * Detects the source language based on the URL
 * @param {string} url - The article URL
 * @returns {string} - The detected language (English, French, German, Italian, Spanish)
 */
function detectLanguage(url) {
    const urlLower = url.toLowerCase();

    if (urlLower.includes('.fr') || urlLower.includes('frandroid') || urlLower.includes('clubic') ||
        urlLower.includes('lesnumeriques') || urlLower.includes('journaldugeek') || urlLower.includes('01net')) {
        return 'French';
    }
    if (urlLower.includes('.de') || urlLower.includes('heise') || urlLower.includes('golem') ||
        urlLower.includes('t3n') || urlLower.includes('computerbase')) {
        return 'German';
    }
    if (urlLower.includes('.it') || urlLower.includes('tomshw') || urlLower.includes('hdblog') ||
        urlLower.includes('hwupgrade') || urlLower.includes('androidworld')) {
        return 'Italian';
    }
    if (urlLower.includes('.es') || urlLower.includes('xataka')) {
        return 'Spanish';
    }
    return 'English';
}

/**
 * Detects if article is promotional/spam content
 * @param {string} title - Article title
 * @param {string} content - Article content
 * @returns {boolean} - true if promotional
 */
function isPromotionalContent(title, content) {
    const promotionalKeywords = [
        'sponsored', 'parceria', 'publicidade', 'anúncio',
        'compre agora', 'oferta exclusiva', 'desconto especial',
        'affiliate', 'código promocional', 'cupom', 'cupão',
        'black friday deals', 'best price', 'buy now',
        'limited time offer', 'deal of the day'
    ];

    const combinedText = `${title} ${content}`.toLowerCase();

    // If 2+ promotional keywords → skip
    const matchCount = promotionalKeywords.filter(kw => combinedText.includes(kw)).length;

    return matchCount >= 2;
}

/**
 * Validates if article has sufficient content
 * @param {string} content - Article content
 * @returns {boolean} - true if has minimum content
 */
function hasMinimumContent(content) {
    const wordCount = content.split(/\s+/).length;
    return wordCount >= 50; // Minimum 50 words
}

/**
 * Default image search queries by category
 * @param {string} category - Article category
 * @returns {string} - Unsplash search query
 */
function getCategoryDefaultQuery(category) {
    const defaults = {
        'smartphones': 'smartphone technology',
        'ai-futuro': 'artificial intelligence',
        'computadores': 'computer technology',
        'gaming': 'gaming setup',
        'audio': 'headphones audio',
        'wearables': 'smartwatch wearable',
        'mobilidade': 'electric vehicle',
        'entretenimento-gaming': 'gaming entertainment',
        'internet-apps': 'mobile apps',
        'ciencia': 'science technology',
        'home': 'smart home'
    };

    return defaults[category] || 'technology';
}

// --- HELPER FUNCTIONS ---
function normalizeTitle(title) {
    return title.toLowerCase().replace(/[^a-z0-9\s]/g, '').split(/\s+/).filter(Boolean);
}

function getTitleSimilarity(titleA, titleB) {
    const wordsA = new Set(normalizeTitle(titleA));
    const wordsB = new Set(normalizeTitle(titleB));

    if (wordsA.size === 0 || wordsB.size === 0) return 0;

    const intersection = new Set([...wordsA].filter(word => wordsB.has(word)));
    const union = new Set([...wordsA, ...wordsB]);

    return intersection.size / union.size;
}

function removeSimilarArticles(articles, similarityThreshold = 0.5) {
    const uniqueArticles = [];
    const titles = new Set();

    for (const article of articles) {
        let isUnique = true;
        for (const existingTitle of titles) {
            if (getTitleSimilarity(article.title, existingTitle) > similarityThreshold) {
                isUnique = false;
                log(`[INFO] Skipping similar article: "${article.title}" is too similar to "${existingTitle}"`);
                break;
            }
        }
        if (isUnique) {
            uniqueArticles.push(article);
            titles.add(article.title);
        }
    }
    return uniqueArticles;
}

function normalizeUrl(url) {
    if (!url) return '';
    try {
        const urlObj = new URL(url);
        urlObj.protocol = 'https:';
        urlObj.searchParams.forEach((value, key) => {
            if (['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content', 'ref', 'source'].includes(key)) {
                urlObj.searchParams.delete(key);
            }
        });
        let normalized = urlObj.toString();
        if (normalized.endsWith('/') && urlObj.pathname !== '/') {
            normalized = normalized.slice(0, -1);
        }
        return normalized;
    } catch (e) {
        log(`[WARN] Failed to normalize URL: ${url} - ${e.message}`, 'warn');
        return url;
    }
}

function ensureDirExists(dir) {
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
    }
}

const slugify = (text) => text ? text.toString().normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase().trim().replace(/\s+/g, '-').replace(/[^\w\-]+/g, '') : '';

/**
 * Pre-generation filter: Reject low-quality articles BEFORE spending Gemini tokens
 * Returns: true = GENERATE | false = REJECT
 */
function shouldGenerateArticle(item) {
    const title = item.title.toLowerCase();
    const snippet = (item.contentSnippet || '').toLowerCase();
    const combined = title + ' ' + snippet;

    // FILTER 1: RED FLAGS (reject immediately)
    const redFlags = [
        'rumor', 'rumour', 'leak', 'leaked',
        'allegedly', 'supostamente', 'especulação',
        'clickbait', 'you won\'t believe',
        'shocking', 'chocante', 'viral',
        'best buy', 'walmart', 'target', // US stores
        'black friday deal at', 'cyber monday' // Deal-only articles
    ];

    for (const flag of redFlags) {
        if (combined.includes(flag)) {
            log(`[FILTER] ❌ REJECTED: "${item.title}" (red flag: "${flag}")`);
            return false;
        }
    }

    // FILTER 2: Content too short (likely low quality)
    if (snippet.length < 150) {
        log(`[FILTER] ❌ REJECTED: "${item.title}" (snippet too short: ${snippet.length} chars)`);
        return false;
    }

    // FILTER 3: Title length validation
    if (title.length < 20 || title.length > 150) {
        log(`[FILTER] ❌ REJECTED: "${item.title}" (title length: ${title.length})`);
        return false;
    }

    // FILTER 4: HIGH PRIORITY brands (always accept)
    const highPriorityBrands = [
        'apple', 'samsung', 'google', 'microsoft',
        'intel', 'amd', 'nvidia', 'meta', 'amazon',
        'openai', 'anthropic', 'gemini', 'deepmind'
    ];

    for (const brand of highPriorityBrands) {
        if (combined.includes(brand)) {
            log(`[FILTER] ✅ PRIORITY ACCEPT: "${item.title}" (brand: ${brand})`);
            return true;
        }
    }

    // FILTER 5: PT/EU relevance bonus
    const ptRelevant = [
        'portugal', 'portuguesa', 'português',
        'europa', 'european union', 'ue',
        'gdpr', 'euro', 'eur', 'disponível em portugal',
        'pplware', 'zwame', 'tek sapo'
    ];

    let relevanceScore = 0;
    for (const keyword of ptRelevant) {
        if (combined.includes(keyword)) {
            relevanceScore++;
        }
    }

    if (relevanceScore >= 2) {
        log(`[FILTER] ✅ PT RELEVANT ACCEPT: "${item.title}" (score: ${relevanceScore})`);
        return true;
    }

    // Default: accept but log
    log(`[FILTER] ✅ DEFAULT ACCEPT: "${item.title}"`);
    return true;
}

/**
 * Checks if image URL likely contains logos/watermarks
 * Simple pattern matching - fast and free
 */
function hasLogoInImageUrl(imageUrl) {
    if (!imageUrl) return false;

    const urlLower = imageUrl.toLowerCase();
    const logoPatterns = [
        // Specific watermark/logo indicators in filename
        '-logo.', '_logo.', '/logo.', '/logo-', '/logo_',
        '-watermark.', '_watermark.', '/watermark.',
        '-brand.', '_brand.', '/brand-',
        'favicon', 'avatar',
        '/badge/', '/icon/',
        'press-image', 'masthead',

        // Only block Portuguese competitor sites (to avoid copyright issues)
        'pplware.sapo.pt', 'tek.sapo.pt', '4gnews.pt'
    ];

    for (const pattern of logoPatterns) {
        if (urlLower.includes(pattern)) {
            return true;
        }
    }

    return false;
}

function getExistingArticleUrls() {
    if (!fs.existsSync(ARTICLES_DIR)) return new Set();
    const urls = new Set();
    fs.readdirSync(ARTICLES_DIR).forEach(file => {
        if (file.endsWith('.md')) {
            const content = fs.readFileSync(path.join(ARTICLES_DIR, file), 'utf8');
            const urlMatch = content.match(/^source_url:\s*"(.*?)"/m);
            if (urlMatch && urlMatch[1]) urls.add(normalizeUrl(urlMatch[1]));
        }
    });
    return urls;
}

/**
 * Validates if an image URL is accessible and returns valid image format
 * @param {string} imageUrl - URL to validate
 * @returns {Promise<boolean>} - true if image is accessible
 */
async function validateImageUrl(imageUrl) {
    if (!imageUrl) return false;

    try {
        const response = await axios.head(imageUrl, {
            timeout: 5000,
            validateStatus: (status) => status < 400
        });

        const contentType = response.headers['content-type'];
        const validImageTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp', 'image/gif'];

        return validImageTypes.some(type => contentType?.includes(type));
    } catch (error) {
        log(`[WARN] Image validation failed for ${imageUrl}: ${error.message}`, 'warn');
        return false;
    }
}

/**
 * Triggers a download event on Unsplash (REQUIRED by Unsplash API Guidelines)
 * This must be called when an Unsplash image is used in the application
 * @param {string} downloadLocation - The download_location URL from Unsplash API response
 */
async function triggerUnsplashDownload(downloadLocation) {
    if (!downloadLocation || !UNSPLASH_ACCESS_KEY) {
        return;
    }

    try {
        await axios.get(downloadLocation, {
            params: {
                client_id: UNSPLASH_ACCESS_KEY
            },
            timeout: 5000
        });
        log('[INFO] Unsplash download event triggered successfully');
    } catch (error) {
        log(`[WARN] Failed to trigger Unsplash download: ${error.message}`, 'warn');
    }
}

/**
 * Fetches a fallback image from Unsplash based on keywords
 * @param {string} keywords - Search keywords for Unsplash
 * @param {string} category - Article category for fallback query
 * @returns {Promise<Object|null>} - Unsplash image data with attribution or null
 * @returns {Object.imageUrl} - The image URL
 * @returns {Object.photographerName} - Photographer's name
 * @returns {Object.photographerUrl} - Photographer's Unsplash profile URL with UTM
 * @returns {Object.downloadLocation} - Download trigger endpoint
 */
async function getUnsplashImage(keywords, category = 'home') {
    if (!UNSPLASH_ACCESS_KEY) {
        log('[WARN] UNSPLASH_ACCESS_KEY not configured. Using placeholder.', 'warn');
        return null;
    }

    try {
        const searchQuery = keywords || getCategoryDefaultQuery(category);
        const response = await axios.get('https://api.unsplash.com/photos/random', {
            params: {
                query: searchQuery,
                orientation: 'landscape',
                content_filter: 'high', // Avoid sensitive content
                client_id: UNSPLASH_ACCESS_KEY
            },
            timeout: 8000
        });

        if (response.data?.urls?.regular) {
            const data = response.data;

            // Build photographer URL with required UTM parameters (updated branding)
            const photographerUrl = `${data.user.links.html}?utm_source=prismatek&utm_medium=referral`;

            // Optimize image size
            const optimizedImageUrl = `${data.urls.regular}&w=1200&h=630&fit=crop`;

            log(`[INFO] Fetched Unsplash image for keywords: "${searchQuery}" by ${data.user.name}`);

            return {
                imageUrl: optimizedImageUrl,
                photographerName: data.user.name,
                photographerUrl: photographerUrl,
                downloadLocation: data.links.download_location,
                imageProvider: 'unsplash'
            };
        }

        return null;
    } catch (error) {
        log(`[WARN] Failed to fetch Unsplash image: ${error.message}`, 'warn');
        return null;
    }
}

/**
 * ROBUST IMAGE FETCHING WITH MULTI-TIER FALLBACK
 * Priority: RSS feed → Open Graph/Twitter scraping → Unsplash → Placeholder
 *
 * @param {Object} rssItem - RSS feed item
 * @param {string} articleTitle - Article title for Unsplash search
 * @returns {Promise<Object>} - Always returns an object with image data and attribution
 * @returns {Object.imageUrl} - The image URL
 * @returns {Object.photographerName} - Photographer name (only for Unsplash)
 * @returns {Object.photographerUrl} - Photographer URL (only for Unsplash)
 * @returns {Object.downloadLocation} - Download trigger URL (only for Unsplash)
 * @returns {Object.imageProvider} - Source of the image: 'rss', 'unsplash', or 'placeholder'
 */
async function getImageUrl(rssItem, articleTitle = '') {
    // TIER 1: Check RSS enclosure
    if (rssItem.enclosure?.url && rssItem.enclosure.type?.startsWith('image')) {
        const isValid = await validateImageUrl(rssItem.enclosure.url);
        const hasLogo = hasLogoInImageUrl(rssItem.enclosure.url);

        if (isValid && !hasLogo) {
            log(`[SUCCESS] Found valid image in RSS enclosure: ${rssItem.enclosure.url}`);
            return {
                imageUrl: rssItem.enclosure.url,
                photographerName: null,
                photographerUrl: null,
                downloadLocation: null,
                imageProvider: 'rss'
            };
        } else if (hasLogo) {
            log(`[WARN] RSS enclosure image has logo, skipping: ${rssItem.enclosure.url}`, 'warn');
        } else {
            log(`[WARN] RSS enclosure image failed validation: ${rssItem.enclosure.url}`, 'warn');
        }
    }

    // TIER 2: Check media:content
    if (rssItem['media:content']?.$?.url) {
        const mediaUrl = rssItem['media:content'].$.url;
        const isValid = await validateImageUrl(mediaUrl);
        const hasLogo = hasLogoInImageUrl(mediaUrl);

        if (isValid && !hasLogo) {
            log(`[SUCCESS] Found valid image in RSS media:content: ${mediaUrl}`);
            return {
                imageUrl: mediaUrl,
                photographerName: null,
                photographerUrl: null,
                downloadLocation: null,
                imageProvider: 'rss'
            };
        } else if (hasLogo) {
            log(`[WARN] RSS media:content image has logo, skipping: ${mediaUrl}`, 'warn');
        } else {
            log(`[WARN] RSS media:content image failed validation: ${mediaUrl}`, 'warn');
        }
    }

    // TIER 3: Scrape for og:image and twitter:image
    if (rssItem.link) {
        try {
            const { data: html } = await axios.get(rssItem.link, { timeout: 10000 });
            const $ = cheerio.load(html);

            const ogImage = $('meta[property="og:image"]').attr('content');
            if (ogImage) {
                const isValid = await validateImageUrl(ogImage);
                const hasLogo = hasLogoInImageUrl(ogImage);

                if (isValid && !hasLogo) {
                    log(`[SUCCESS] Found valid og:image by scraping: ${ogImage}`);
                    return {
                        imageUrl: ogImage,
                        photographerName: null,
                        photographerUrl: null,
                        downloadLocation: null,
                        imageProvider: 'rss'
                    };
                } else if (hasLogo) {
                    log(`[WARN] Scraped og:image has logo, skipping: ${ogImage}`, 'warn');
                } else {
                    log(`[WARN] Scraped og:image failed validation: ${ogImage}`, 'warn');
                }
            }

            const twitterImage = $('meta[name="twitter:image"]').attr('content');
            if (twitterImage) {
                const isValid = await validateImageUrl(twitterImage);
                const hasLogo = hasLogoInImageUrl(twitterImage);

                if (isValid && !hasLogo) {
                    log(`[SUCCESS] Found valid twitter:image by scraping: ${twitterImage}`);
                    return {
                        imageUrl: twitterImage,
                        photographerName: null,
                        photographerUrl: null,
                        downloadLocation: null,
                        imageProvider: 'rss'
                    };
                } else if (hasLogo) {
                    log(`[WARN] Scraped twitter:image has logo, skipping: ${twitterImage}`, 'warn');
                } else {
                    log(`[WARN] Scraped twitter:image failed validation: ${twitterImage}`, 'warn');
                }
            }
        } catch (error) {
            log(`[WARN] Failed to scrape ${rssItem.link}: ${error.message}`, 'warn');
        }
    }

    // TIER 4: Try Unsplash fallback with article title as keywords
    log(`[INFO] No valid image found in RSS/scraping for "${rssItem.title}". Trying Unsplash...`);
    const unsplashImage = await getUnsplashImage(articleTitle || rssItem.title);
    if (unsplashImage) {
        // CRITICAL: Trigger download event as required by Unsplash API Guidelines
        await triggerUnsplashDownload(unsplashImage.downloadLocation);
        return unsplashImage;
    }

    // TIER 5: Ultimate fallback - placeholder (local SVG image)
    log(`[WARN] All image sources failed for "${rssItem.title}". Using placeholder.`, 'warn');
    return {
        imageUrl: '/images/placeholder.svg',
        photographerName: null,
        photographerUrl: null,
        downloadLocation: null,
        imageProvider: 'placeholder'
    };
}

/**
 * Saves a generated article to markdown file
 * @param {object} article - Generated article object
 * @returns {Promise<object>} - Status object
 */
async function saveArticleMarkdown(article) {
    const { title, description, content, category, image, source_url } = article;

    try {
        log(`💾 Saving article: "${title}"`);

        // Prepare frontmatter
        const frontmatter = {
            title: title,
            date: article.isoDate || new Date().toISOString(),
            category: category,
            tags: [], // Empty tags for trending articles
            image: image,
            image_source: 'external', // Trending articles use external images
            description: description,
            source_url: normalizeUrl(source_url),
            draft: true, // Trending articles saved as drafts for review
            needs_review: false,
        };

        // --- Slug Uniqueness ---
        let slug = slugify(title);
        let currentFilePath = path.join(ARTICLES_DIR, `${slug}.md`);
        let counter = 1;

        while (fs.existsSync(currentFilePath)) {
            log(`[WARN] Duplicate slug found: ${slug}. Trying ${slug}-${counter}.`);
            slug = `${slugify(title)}-${counter}`;
            currentFilePath = path.join(ARTICLES_DIR, `${slug}.md`);
            counter++;
        }

        // --- Frontmatter to YAML ---
        let yamlFrontmatter = '---\n';
        for (const key in frontmatter) {
            const value = frontmatter[key];
            if (Array.isArray(value)) {
                yamlFrontmatter += `${key}:\n`;
                value.forEach(item => {
                    yamlFrontmatter += `  - ${item}\n`;
                });
            } else if (typeof value === 'boolean') {
                yamlFrontmatter += `${key}: ${value ? 'true' : 'false'}\n`;
            } else {
                yamlFrontmatter += `${key}: ${JSON.stringify(value)}\n`;
            }
        }
        yamlFrontmatter += '---\n';

        // --- Traceability Comment ---
        const generatedAt = new Date().toISOString();
        let traceabilityComment = `\n<!-- generated_by: gemini, model: ${GEMINI_MODEL}, generated_at: ${generatedAt}`;

        // Add trending metadata if present
        if (article._trending) {
            traceabilityComment += `, mode: trending, sources: ${article._trending.sources}, keywords: ${article._trending.keywords.join(', ')}, trending_score: ${article._trending.trendingScore.toFixed(2)}`;
        }
        traceabilityComment += ` -->\n\n`;

        // Write file
        fs.writeFileSync(currentFilePath, yamlFrontmatter + traceabilityComment + content, 'utf8');

        log(`✅ Article saved -> ${currentFilePath}`);

        // Trigger revalidation for the new article's page
        if (REVALIDATE_TOKEN) {
            log(`Attempting to revalidate individual article page: /noticias/${slug}`);

            try {
                const revalidateArticleUrl = `${REVALIDATE_BASE_URL}/api/revalidate?secret=${REVALIDATE_TOKEN}&path=/noticias/${slug}`;
                const response = await axios.get(revalidateArticleUrl, { timeout: 10000 });

                if (response.status === 200 && response.data.revalidated) {
                    log(`SUCCESS: Article page /noticias/${slug} revalidated successfully.`);
                } else {
                    log(`[WARN] Article page /noticias/${slug} revalidation failed: Status ${response.status}, Data: ${JSON.stringify(response.data)}`);
                }
            } catch (revalidateError) {
                log(`[ERROR] Failed to call revalidate API for /noticias/${slug}: ${revalidateError.message}`, "error");
            }
        } else {
            log("[WARN] REVALIDATE_TOKEN not set. Skipping individual article page revalidation.");
        }

        return { status: 'saved', slug };

    } catch (error) {
        log(`❌ Failed to save article "${title}": ${error.message}`, 'ERROR');
        return { status: 'failed' };
    }
}

async function generateArticleFromItem(item) {
    const { title, link, contentSnippet, isoDate } = item;

    log(`Processing article: "${title}"`);

    // Detect source language
    const detectedLanguage = detectLanguage(link);
    log(`[INFO] Detected source language: ${detectedLanguage}`);

    // Fetch image with robust fallback system
    const image = await getImageUrl(item, title);

    const prompt = `You are PRISMATEK, a leading European technology news platform focused on bringing international tech news to Portuguese-speaking audiences.

IMPORTANT CONTEXT:
- Source article is in ${detectedLanguage}
- You are TRANSLATING and ADAPTING for Portuguese (PT-PT) readers
- Focus on European perspective (not USA-centric)
- Adapt prices, availability, dates to European/Portuguese context

TASK:
Transform the following ${detectedLanguage} tech article into Portuguese (PT-PT):

Title: ${title}
Content: ${contentSnippet}
Source URL: ${link}

GUIDELINES:
1. Language: European Portuguese (PT-PT), NOT Brazilian Portuguese
2. Length: 300-400 words maximum, conversational and informative
3. Tone: Professional but approachable, tech-savvy audience
4. Perspective: Adapt for European/Portuguese readers
   - Convert prices to EUR (if mentioned, approximate conversion)
   - Mention availability in Portugal/Europe when relevant
   - Reference European regulations (GDPR, DMA, DSA) when applicable
   - Compare with Portuguese market context when relevant

5. Structure (SIMPLE):
   - Engaging introduction (1 paragraph: what happened)
   - Main content (2 short sections with ## headings)
   - Conclusion (1 paragraph: what it means for Portuguese users)

6. Context Examples:
   ✓ "Chegará a Portugal em Março por €999 (Worten, Fnac)"
   ✓ "Vs. Galaxy S24 (€849 em Portugal), é 18% mais caro"
   ✓ "GDPR obriga X a fazer Y na União Europeia"
   ✗ "Available at Best Buy for $799" (too USA-centric)

7. Categories: Choose ONE from [${NORMALIZED_CATEGORIES.join(', ')}]
8. SEO: Natural keyword integration without keyword stuffing
9. Avoid: Promotional language, direct quotes from source (rephrase), exact translations (be creative)
10. NO images in the article text
11. Prices: Convert to EUR if needed (approximate), use € symbol

CRITICAL: This is NOT a translation - it's an ADAPTATION. Add context for Portuguese readers, explain acronyms, make it feel like original PRISMATEK content written by a Portuguese tech journalist who understands European market.

Return ONLY valid JSON (no \`\`\`json markers):
{
  "title": "Engaging Portuguese title SEO-optimized (50-70 chars)",
  "description": "Complete summary in PT-PT (2-3 sentences, must end with complete idea and final period)",
  "category": "one-slug-from-list",
  "tags": ["tag1", "tag2", "tag3", "tag4"],
  "source_url": "${link}",
  "needs_review": false,
  "content": "Full article in markdown format (300-400 words) with ## headings and Portuguese context"
}

CHECKLIST:
☐ 300-400 words (NO MORE)
☐ 2 sections with ## headings
☐ Portuguese/European context present
☐ Valid JSON
☐ Description: 2-3 complete sentences ending with period
☐ Not a literal translation - adapted content`;


    try {
        const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);
        const model = genAI.getGenerativeModel({ model: GEMINI_MODEL });
        const result = await model.generateContent(prompt);
        const text = result.response.text();

        let articleData;
        try {
            // ROBUST JSON EXTRACTION - handles multiple formats from Gemini
            let jsonString = text.trim();

            // Step 1: Try to extract from ```json blocks (with or without newlines/extra chars)
            // Match everything between ``` markers, even if there are extra characters
            const jsonMatch = jsonString.match(/```(?:json)?\s*\n?([\s\S]*?)\n?```/);
            if (jsonMatch && jsonMatch[1]) {
                jsonString = jsonMatch[1].trim();
            }
            // Step 2: Try to extract just the JSON object
            else {
                const braceMatch = jsonString.match(/(\{[\s\S]*\})/);
                if (braceMatch && braceMatch[1]) {
                    jsonString = braceMatch[1];
                }
            }

            // Step 3: Clean up common JSON issues
            jsonString = jsonString
                .trim()
                // Remove any trailing non-JSON characters after final }
                .replace(/\}[^}]*$/, '}')
                // Remove trailing commas before closing braces/brackets
                .replace(/,(\s*[}\]])/g, '$1')

            articleData = JSON.parse(jsonString);
        } catch (jsonError) {
            log(`[ERROR] Failed to parse JSON from Gemini for "${title}": ${jsonError.message}`, 'ERROR');
            log(`[DEBUG] Raw Gemini response: ${text}`, 'ERROR');
            return { status: 'failed_json_parse', error: jsonError.message };
        }

        // Validate required fields (date is auto-generated, not from Gemini)
        if (!articleData.title || !articleData.content || !articleData.category || !articleData.description || !articleData.source_url) {
            throw new Error("Generated JSON is missing required frontmatter fields.");
        }

        // --- FRONTMATTER PROCESSING WITH NORMALIZED CATEGORIES ---
        let finalCategory = articleData.category;
        let needsReview = articleData.needs_review === 'true' || articleData.needs_review === true;

        // Normalize category to slug format
        if (Array.isArray(finalCategory)) {
            finalCategory = finalCategory.find(cat =>
                NORMALIZED_CATEGORIES.includes(cat.toLowerCase().trim()) ||
                CATEGORY_MAP[cat.toLowerCase().trim()]
            ) || 'home';
            if (finalCategory === 'home') needsReview = true;
        } else {
            const normalizedCat = finalCategory.toLowerCase().trim();

            // Check if it's already a valid normalized category
            if (!NORMALIZED_CATEGORIES.includes(normalizedCat)) {
                // Try to map from English to Portuguese slug
                if (CATEGORY_MAP[normalizedCat]) {
                    finalCategory = CATEGORY_MAP[normalizedCat];
                } else {
                    // Default to home if unknown
                    finalCategory = 'home';
                    needsReview = true;
                    log(`[WARN] Unknown category "${finalCategory}" defaulted to "home". Needs review.`, 'warn');
                }
            } else {
                finalCategory = normalizedCat;
            }
        }

        // Process tags
        let finalTags = Array.isArray(articleData.tags) ? articleData.tags.map(tag => tag.trim()) : [];
        if (typeof articleData.tags === 'string') {
            finalTags = articleData.tags.split(',').map(tag => tag.trim()).filter(Boolean);
        }

        // Use system-fetched image (always valid due to fallback)
        // image is now an object with imageUrl, photographerName, photographerUrl, imageProvider
        const finalImage = image.imageUrl;
        const finalImageSource = image.imageProvider;

        // Normalize source URL - ALWAYS use the RSS link if Gemini returns invalid/empty source_url
        let finalSourceUrl = link; // Default to RSS feed link
        if (articleData.source_url &&
            articleData.source_url !== '' &&
            articleData.source_url !== 'The original source URL of the article.' &&
            articleData.source_url.startsWith('http')) {
            finalSourceUrl = articleData.source_url;
        }

        // CRITICAL: Additional validation to catch placeholder URLs from Gemini
        if (finalSourceUrl.includes('example.com') ||
            finalSourceUrl.includes('placeholder') ||
            finalSourceUrl.includes('source-url-here') ||
            !finalSourceUrl.startsWith('http')) {
            finalSourceUrl = link; // Force RSS link
            log(`[CRITICAL] Invalid source_url detected from Gemini. Forcing RSS link: ${link}`, 'error');
            needsReview = true;
        }

        finalSourceUrl = normalizeUrl(finalSourceUrl);

        // Use description as generated by Gemini (no length enforcement)
        let finalDescription = articleData.description || '';

        const frontmatter = {
            title: articleData.title,
            date: new Date().toISOString(), // CRITICAL: Always use current date for published articles
            category: finalCategory,
            tags: finalTags,
            image: finalImage,
            image_source: finalImageSource,
            description: finalDescription,
            source_url: finalSourceUrl,
            draft: false, // CRITICAL: Automatic publication - no human review needed
            needs_review: needsReview,
            // Unsplash attribution (only present if image is from Unsplash)
            photographer_name: image.photographerName || undefined,
            photographer_url: image.photographerUrl || undefined,
        };

        // --- Slug Uniqueness ---
        let slug = slugify(articleData.title);
        let currentFilePath = path.join(ARTICLES_DIR, `${slug}.md`);
        let counter = 1;

        while (fs.existsSync(currentFilePath)) {
            log(`[WARN] Duplicate slug found: ${slug}. Trying ${slug}-${counter}.`);
            slug = `${slugify(articleData.title)}-${counter}`;
            currentFilePath = path.join(ARTICLES_DIR, `${slug}.md`);
            counter++;
        }

        // --- Frontmatter to YAML ---
        let yamlFrontmatter = '---\n';
        for (const key in frontmatter) {
            const value = frontmatter[key];
            if (Array.isArray(value)) {
                yamlFrontmatter += `${key}:\n`;
                value.forEach(item => {
                    yamlFrontmatter += `  - ${item}\n`;
                });
            } else if (typeof value === 'boolean') {
                yamlFrontmatter += `${key}: ${value ? 'true' : 'false'}\n`;
            } else {
                yamlFrontmatter += `${key}: ${JSON.stringify(value)}\n`;
            }
        }
        yamlFrontmatter += '---\n';

        // --- Traceability Comment (placed AFTER frontmatter to avoid gray-matter parsing issues) ---
        const generatedAt = new Date().toISOString();
        const traceabilityComment = `\n<!-- generated_by: gemini, model: ${GEMINI_MODEL}, generated_at: ${generatedAt} -->\n\n`;

        fs.writeFileSync(currentFilePath, yamlFrontmatter + traceabilityComment + articleData.content, 'utf8');

        log(`SUCCESS: Article saved -> ${currentFilePath}`);

        // Trigger revalidation for the new article's page
        if (REVALIDATE_TOKEN) {
            log(`Attempting to revalidate individual article page: /noticias/${slug}`);

            try {
                const revalidateArticleUrl = `${REVALIDATE_BASE_URL}/api/revalidate?secret=${REVALIDATE_TOKEN}&path=/noticias/${slug}`;
                const response = await axios.get(revalidateArticleUrl, { timeout: 10000 });

                if (response.status === 200 && response.data.revalidated) {
                    log(`SUCCESS: Article page /noticias/${slug} revalidated successfully.`);
                } else {
                    log(`[WARN] Article page /noticias/${slug} revalidation failed: Status ${response.status}, Data: ${JSON.stringify(response.data)}`);
                }
            } catch (revalidateError) {
                log(`[ERROR] Failed to call revalidate API for /noticias/${slug}: ${revalidateError.message}`, "error");
            }
        } else {
            log("[WARN] REVALIDATE_TOKEN not set. Skipping individual article page revalidation.");
        }

        return { status: 'generated' };

    } catch (error) {
        log(`Failed during generation for "${title}": ${error.message}`, 'ERROR');
        return { status: 'failed' };
    }
}

// --- TRENDING TOPICS ANALYSIS FUNCTIONS ---

/**
 * Extracts top keywords from a list of titles
 * @param {string[]} titles - Array of article titles
 * @param {number} topN - Number of top keywords to return
 * @returns {string[]} - Array of top keywords
 */
function extractKeywords(titles, topN = 5) {
    // Concatenate all titles
    const allText = titles.join(' ');

    // Normalize: lowercase, remove punctuation
    const normalized = allText.toLowerCase().replace(/[^a-zà-ÿ0-9\s]/g, '');

    // Tokenize
    const words = normalized.split(/\s+/).filter(Boolean);

    // Filter stopwords and count frequencies
    const wordCounts = {};
    for (const word of words) {
        if (!STOPWORDS.has(word) && word.length > 2) {
            wordCounts[word] = (wordCounts[word] || 0) + 1;
        }
    }

    // Sort by frequency and return top N
    const sorted = Object.entries(wordCounts)
        .sort((a, b) => b[1] - a[1])
        .slice(0, topN)
        .map(([word]) => word);

    return sorted;
}

/**
 * Detects the category of a cluster based on keywords
 * @param {string[]} keywords - Array of keywords from the cluster
 * @param {object[]} clusterArticles - Articles in the cluster (for fallback)
 * @returns {string} - Detected category slug
 */
function detectClusterCategory(keywords, clusterArticles) {
    const categoryScores = {};

    // Initialize scores
    for (const category of NORMALIZED_CATEGORIES) {
        categoryScores[category] = 0;
    }

    // Score categories based on keyword matches in CATEGORY_MAP
    for (const keyword of keywords) {
        for (const [englishTerm, categorySlug] of Object.entries(CATEGORY_MAP)) {
            if (keyword.includes(englishTerm.toLowerCase()) || englishTerm.toLowerCase().includes(keyword)) {
                categoryScores[categorySlug] = (categoryScores[categorySlug] || 0) + 1;
            }
        }

        // Direct match with category names
        for (const category of NORMALIZED_CATEGORIES) {
            if (keyword.includes(category) || category.includes(keyword)) {
                categoryScores[category] = (categoryScores[category] || 0) + 2; // Higher weight for direct match
            }
        }
    }

    // Find category with highest score
    let maxScore = 0;
    let detectedCategory = null;

    for (const [category, score] of Object.entries(categoryScores)) {
        if (score > maxScore) {
            maxScore = score;
            detectedCategory = category;
        }
    }

    // Fallback: use category from most recent article in cluster
    if (!detectedCategory && clusterArticles.length > 0) {
        const sortedByDate = [...clusterArticles].sort((a, b) =>
            new Date(b.isoDate) - new Date(a.isoDate)
        );
        detectedCategory = sortedByDate[0].category || 'ai-futuro';
    }

    return detectedCategory || 'ai-futuro';
}

/**
 * Calculates recency weight using exponential decay
 * @param {string} isoDate - ISO date string
 * @returns {number} - Recency weight (0-1)
 */
function calculateRecencyWeight(isoDate) {
    const now = Date.now();
    const articleDate = new Date(isoDate).getTime();
    const hoursAgo = (now - articleDate) / (1000 * 60 * 60);

    // Exponential decay: weight halves every 12 hours
    const halfLife = 12;
    return Math.exp(-0.693 * hoursAgo / halfLife);
}

/**
 * Extracts feed name from feed URL
 * @param {string} feedUrl - RSS feed URL
 * @returns {string} - Feed name
 */
function extractFeedName(feedUrl) {
    try {
        const url = new URL(feedUrl);
        const parts = url.hostname.split('.');
        // Get the domain name (e.g., "arstechnica" from "feeds.arstechnica.com")
        return parts.length >= 2 ? parts[parts.length - 2] : url.hostname;
    } catch {
        return 'unknown';
    }
}

/**
 * Clusters articles by topic similarity using Jaccard Index
 * @param {object[]} articles - Array of article objects
 * @param {number} threshold - Similarity threshold (0-1)
 * @returns {object[]} - Array of clusters
 */
function clusterArticlesByTopic(articles, threshold = 0.4) {
    const clusters = [];
    const clustered = new Set();

    for (let i = 0; i < articles.length; i++) {
        if (clustered.has(i)) continue;

        // Create new cluster with current article
        const cluster = {
            articles: [articles[i]],
            size: 1
        };
        clustered.add(i);

        // Find similar articles
        for (let j = i + 1; j < articles.length; j++) {
            if (clustered.has(j)) continue;

            const similarity = getTitleSimilarity(articles[i].title, articles[j].title);
            if (similarity >= threshold) {
                cluster.articles.push(articles[j]);
                cluster.size++;
                clustered.add(j);
            }
        }

        // Only add cluster if it meets minimum size
        if (cluster.size >= MIN_CLUSTER_SIZE) {
            clusters.push(cluster);
        }
    }

    return clusters;
}

/**
 * Enriches clusters with metadata (keywords, category, scores)
 * @param {object[]} clusters - Array of cluster objects
 * @returns {object[]} - Enriched clusters
 */
function enrichClustersWithMetadata(clusters) {
    return clusters.map(cluster => {
        // Extract keywords from all titles in cluster
        const titles = cluster.articles.map(a => a.title);
        const keywords = extractKeywords(titles);

        // Detect category
        const category = detectClusterCategory(keywords, cluster.articles);

        // Calculate feed diversity
        const uniqueFeeds = new Set(cluster.articles.map(a => extractFeedName(a.feedUrl)));
        const feedDiversity = uniqueFeeds.size / cluster.articles.length;

        // Calculate average recency weight
        const avgRecency = cluster.articles
            .map(a => calculateRecencyWeight(a.isoDate))
            .reduce((sum, w) => sum + w, 0) / cluster.articles.length;

        // Calculate trending score
        const trendingScore = cluster.size * feedDiversity * avgRecency;

        return {
            ...cluster,
            keywords,
            category,
            feedDiversity,
            avgRecency,
            trendingScore
        };
    });
}

/**
 * Selects top trending topics from enriched clusters
 * @param {object[]} enrichedClusters - Array of enriched cluster objects
 * @param {number} topN - Number of top topics to select
 * @returns {object[]} - Selected trending topics
 */
function selectTrendingTopics(enrichedClusters, topN = 1) {
    // Filter clusters with valid categories
    const validClusters = enrichedClusters.filter(c =>
        NORMALIZED_CATEGORIES.includes(c.category)
    );

    // Sort by trending score descending
    const sorted = validClusters.sort((a, b) => b.trendingScore - a.trendingScore);

    // Return top N
    return sorted.slice(0, topN);
}

/**
 * Main orchestrator: Extracts trending topics from article pool
 * @param {object[]} candidatePool - Array of candidate articles
 * @param {number} topN - Number of trending topics to extract
 * @returns {object[]} - Array of trending topic clusters
 */
function extractTrendingTopics(candidatePool, topN = 1) {
    log('🔍 Analyzing trending topics...');

    // 1. Clustering
    const clusters = clusterArticlesByTopic(candidatePool, CLUSTERING_THRESHOLD);
    log(`   Found ${clusters.length} clusters (min size: ${MIN_CLUSTER_SIZE})`);

    // 2. Enrichment
    const enriched = enrichClustersWithMetadata(clusters);

    // 3. Selection
    const trending = selectTrendingTopics(enriched, topN);

    // 4. Detailed logging
    log(`🔥 Trending Analysis: ${clusters.length} clusters, ${trending.length} selected`);
    trending.forEach((t, i) => {
        const feeds = [...new Set(t.articles.map(a => extractFeedName(a.feedUrl)))].join(', ');
        log(`   ${i+1}. [${t.category}] ${t.keywords.join(', ')}`);
        log(`      Score: ${t.trendingScore.toFixed(2)} | Sources: ${t.size} | Feeds: ${feeds}`);
    });

    return trending;
}

/**
 * Generates an article from a trending topic cluster (multiple sources)
 * @param {object} trendingCluster - Trending cluster object with articles
 * @returns {object} - Generated article data
 */
async function generateArticleFromTrending(trendingCluster) {
    const { articles, keywords, category } = trendingCluster;

    log(`📝 Generating article from trending topic: ${keywords.join(', ')}`);
    log(`   Synthesizing ${articles.length} sources from ${new Set(articles.map(a => extractFeedName(a.feedUrl))).size} feeds`);

    // Prepare context from multiple sources
    const sourcesContext = articles.map((article, i) => {
        return `**Fonte ${i+1}: ${extractFeedName(article.feedUrl)}**
- Título: ${article.title}
- URL: ${article.link}
- Descrição: ${article.description || 'N/A'}`;
    }).join('\n\n');

    // Enhanced Gemini prompt for multi-source synthesis
    const prompt = `Você é um jornalista tecnológico português especializado em sintetizar múltiplas fontes.

**TEMA TRENDING:** ${keywords.join(', ')}
**CATEGORIA:** ${category}
**NÚMERO DE FONTES:** ${articles.length}

**FONTES ORIGINAIS:**
${sourcesContext}

**INSTRUÇÕES:**
1. Analise TODAS as ${articles.length} fontes acima sobre o tema "${keywords.join(', ')}"
2. Identifique os PONTOS COMUNS e DIVERGENTES entre as fontes
3. Escreva um artigo em português (PT-PT) que sintetize as MÚLTIPLAS PERSPECTIVAS
4. Título: Crie um título atrativo que reflita o tema trending (máximo 80 caracteres)
5. Descrição: Resumo breve (120-160 caracteres) destacando a convergência de fontes
6. Conteúdo: 400-500 palavras, estrutura:
   - Introdução: Apresentar o tema e sua relevância
   - Desenvolvimento: Sintetizar insights das múltiplas fontes (mencionar fontes como "Segundo a TechCrunch...", "A The Verge reporta...", etc.)
   - Conclusão: Perspectiva consolidada e implicações futuras
7. Tom: Informativo, neutro, profissional (estilo Apple/PT)
8. Evite: Jargão excessivo, anglicismos desnecessários, sensacionalismo

**FORMATO DE RESPOSTA (JSON):**
{
  "title": "Título em Português",
  "description": "Descrição meta",
  "content": "Conteúdo completo em markdown com ## títulos e **negrito**",
  "primary_source": "${articles[0].link}"
}`;

    try {
        // Call Gemini API
        const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);
        const model = genAI.getGenerativeModel({ model: GEMINI_MODEL });

        const result = await model.generateContent(prompt);
        const responseText = result.response.text();

        // Parse JSON response
        const jsonMatch = responseText.match(/\{[\s\S]*\}/);
        if (!jsonMatch) {
            throw new Error('Failed to parse Gemini response as JSON');
        }
        const parsed = JSON.parse(jsonMatch[0]);

        // Get image for article
        const imageUrl = await getImageForArticle(articles[0], parsed.title);

        // Return structured article with trending metadata
        const generatedArticle = {
            title: parsed.title,
            description: parsed.description,
            content: parsed.content,
            category: category,
            image: imageUrl,
            source_url: parsed.primary_source,
            feedUrl: articles[0].feedUrl, // For compatibility with existing flow
            isoDate: new Date().toISOString(),
            // Trending metadata (for logging/debugging)
            _trending: {
                keywords: keywords,
                sources: articles.length,
                feeds: [...new Set(articles.map(a => extractFeedName(a.feedUrl)))],
                trendingScore: trendingCluster.trendingScore
            }
        };

        log(`✅ Article generated successfully: "${parsed.title}"`);
        return generatedArticle;

    } catch (error) {
        log(`❌ Failed to generate trending article: ${error.message}`, 'ERROR');
        throw error;
    }
}

async function main() {
    log("--- STARTING ARTICLE GENERATION RUN ---");
    log(`[INFO] Using Gemini model: ${GEMINI_MODEL}`);
    log(`[INFO] Normalized categories: ${NORMALIZED_CATEGORIES.join(', ')}`);

    try {
        const existingUrls = getExistingArticleUrls();
        let candidatePool = [];

        for (const feedUrl of RSS_FEEDS) {
            const items = await fetchFeed(feedUrl);
            const newItems = items.filter(item => !existingUrls.has(normalizeUrl(item.link)));
            const top3Items = newItems.slice(0, 3).map(item => ({ ...item, feedUrl }));
            candidatePool.push(...top3Items);
        }

        log(`Created a candidate pool with ${candidatePool.length} articles from all feeds.`);

        // Sort by date before similarity check to prioritize newest articles
        candidatePool.sort((a, b) => new Date(b.isoDate) - new Date(a.isoDate));

        const uniqueArticles = removeSimilarArticles(candidatePool);

        // Apply quality filter BEFORE generating (saves tokens!)
        const filteredArticles = uniqueArticles.filter(shouldGenerateArticle);
        log(`After quality filtering: ${filteredArticles.length} articles passed (${uniqueArticles.length - filteredArticles.length} rejected)`);

        // Apply promotional content filter
        const nonPromotionalArticles = filteredArticles.filter(item => {
            const cleanContent = item.contentSnippet || '';
            if (isPromotionalContent(item.title, cleanContent)) {
                log(`[FILTER] ❌ PROMOTIONAL: "${item.title}"`);
                return false;
            }
            if (!hasMinimumContent(cleanContent)) {
                log(`[FILTER] ❌ INSUFFICIENT CONTENT: "${item.title}" (${cleanContent.split(/\s+/).length} words)`);
                return false;
            }
            return true;
        });
        log(`After promotional/content filtering: ${nonPromotionalArticles.length} articles passed (${filteredArticles.length - nonPromotionalArticles.length} rejected)`);

        // --- TRENDING MODE: Analyze and generate from trending topics ---
        const trendingTopics = extractTrendingTopics(nonPromotionalArticles, ARTICLES_PER_RUN);

        let articlesToGenerate = [];

        if (trendingTopics.length > 0) {
            // Trending mode: Generate articles from clusters
            log(`✅ Trending mode activated: ${trendingTopics.length} trending topic(s) detected`);

            for (const cluster of trendingTopics) {
                try {
                    const trendingArticle = await generateArticleFromTrending(cluster);
                    articlesToGenerate.push(trendingArticle);
                } catch (error) {
                    log(`❌ Failed to generate from trending cluster: ${error.message}`, 'ERROR');
                    // Fallback: use most recent article from cluster
                    log(`   Falling back to legacy mode for this cluster`);
                    const fallbackArticle = cluster.articles
                        .sort((a, b) => new Date(b.isoDate) - new Date(a.isoDate))[0];
                    articlesToGenerate.push(fallbackArticle);
                }
            }
        } else {
            // Legacy mode: Fallback if no trending detected
            log('⚠️  No trending topics found, falling back to legacy mode');
            articlesToGenerate = nonPromotionalArticles.slice(0, ARTICLES_PER_RUN);
        }

        log(`Selected ${articlesToGenerate.length} article(s) for generation.`);

        // Generate and save articles
        for (const item of articlesToGenerate) {
            if (item._trending) {
                // Article already generated by generateArticleFromTrending()
                log(`💾 Saving trending article: "${item.title}"`);
                await saveArticleMarkdown(item);
            } else {
                // Legacy article: use existing generateArticleFromItem flow
                log(`📰 Generating legacy article: "${item.title}"`);
                await generateArticleFromItem(item);
            }
        }

        log("--- ARTICLE GENERATION RUN COMPLETE ---");

        // --- Trigger Revalidation ---
        if (REVALIDATE_TOKEN) {
            log("Attempting to trigger Next.js revalidation...");
            try {
                const revalidateUrl = `${REVALIDATE_BASE_URL}/api/revalidate?secret=${REVALIDATE_TOKEN}`;
                const response = await axios.get(revalidateUrl, { timeout: 10000 });
                if (response.status === 200 && response.data.revalidated) {
                    log("SUCCESS: Next.js revalidation triggered successfully.");
                } else {
                    log(`[WARN] Next.js revalidation failed: Status ${response.status}, Data: ${JSON.stringify(response.data)}`);
                }
            } catch (revalidateError) {
                log(`[ERROR] Failed to call revalidate API: ${revalidateError.message}`, "error");
            }
        } else {
            log("[WARN] REVALIDATE_TOKEN not set. Skipping Next.js revalidation.");
        }

    } catch (error) {
        log(`[FATAL] A critical, unhandled error occurred: ${error.message}`, "error");
        process.exit(1);
    }
}

main().catch(e => {
    log(`A critical, unhandled error occurred: ${e.message}`, 'FATAL');
    process.exit(1);
});
