const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');
const { GoogleGenerativeAI } = require('@google/generative-ai');

// Initialize Gemini
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: 'gemini-2.5-flash' });

const postsDir = path.join(process.cwd(), 'content/posts');
const files = fs.readdirSync(postsDir).filter(f => f.endsWith('.md'));

let processed = 0;
let failed = 0;

async function regenerateDescription(filePath) {
    try {
        const content = fs.readFileSync(filePath, 'utf8');
        const parsed = matter(content);

        // Skip if description is already good (doesn't end with truncation)
        const desc = parsed.data.description || '';

        // Check if likely truncated (ends with incomplete word like "re." "de." "si." "o f.")
        const isTruncated = (
            desc.includes('...') ||
            /\b\w{1,2}\.$/.test(desc) ||  // Ends with 1-2 letter word + period
            /\s[a-z]{1,3}\s[a-z]{1,2}\.$/.test(desc)  // Pattern like "o f."
        );

        if (!isTruncated && desc.length > 100) {
            console.log(`[SKIP] ${path.basename(filePath)} - description looks OK`);
            return true;
        }

        console.log(`[PROCESSING] ${path.basename(filePath)}`);
        console.log(`  Old description: "${desc}"`);

        // Extract first 2 paragraphs of content for context
        const contentText = parsed.content
            .replace(/<!--.*?-->/gs, '')
            .replace(/^#{1,6}\s+/gm, '')
            .trim()
            .split('\n\n')
            .slice(0, 2)
            .join(' ')
            .substring(0, 800);

        // Ask Gemini to generate a complete description
        const prompt = `Cria um RESUMO COMPLETO de 2-3 frases sobre este artigo em Português (PT-PT).

TÍTULO: ${parsed.data.title}

CONTEÚDO:
${contentText}

IMPORTANTE:
- 2-3 frases completas
- Cada frase deve terminar com ideia completa
- NUNCA truncar no meio de uma palavra
- Terminar sempre com ponto final após ideia completa
- Contexto português/europeu

Responde APENAS com o resumo (sem aspas, sem formatação):`;

        // Retry logic for quota limits
        let result;
        let retries = 0;
        const maxRetries = 3;

        while (retries < maxRetries) {
            try {
                result = await model.generateContent(prompt);
                break;
            } catch (error) {
                if (error.message.includes('429') && retries < maxRetries - 1) {
                    const waitTime = 60; // Wait 60 seconds on quota error
                    console.log(`  [QUOTA] Waiting ${waitTime}s...`);
                    await new Promise(resolve => setTimeout(resolve, waitTime * 1000));
                    retries++;
                } else {
                    throw error;
                }
            }
        }

        const newDescription = result.response.text().trim();

        console.log(`  New description: "${newDescription}"`);

        // Update frontmatter
        parsed.data.description = newDescription;

        // Write back
        const newContent = matter.stringify(parsed.content, parsed.data);
        fs.writeFileSync(filePath, newContent, 'utf8');

        processed++;
        if (processed % 10 === 0) {
            console.log(`\n✓ Processed ${processed} articles...\n`);
        }

        // Rate limiting - wait 13 seconds between requests (Gemini free tier: 5 req/min)
        await new Promise(resolve => setTimeout(resolve, 13000));

        return true;
    } catch (error) {
        console.error(`[ERROR] ${path.basename(filePath)}: ${error.message}`);
        failed++;
        return false;
    }
}

async function main() {
    console.log(`Found ${files.length} articles to check\n`);

    for (const file of files) {
        const filePath = path.join(postsDir, file);
        await regenerateDescription(filePath);
    }

    console.log(`\n✓ Done!`);
    console.log(`  Processed: ${processed}`);
    console.log(`  Failed: ${failed}`);
    console.log(`  Total: ${files.length}`);
}

main().catch(console.error);
