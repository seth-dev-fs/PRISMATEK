const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

const postsDir = path.join(process.cwd(), 'content/posts');
const files = fs.readdirSync(postsDir).filter(f => f.endsWith('.md'));

let fixed = 0;

files.forEach(file => {
    const filePath = path.join(postsDir, file);
    const content = fs.readFileSync(filePath, 'utf8');
    const parsed = matter(content);

    if (parsed.data.description && parsed.data.description.endsWith('...')) {
        // Remove "..." and try to complete the sentence
        let desc = parsed.data.description.slice(0, -3).trim();
        
        // If doesn't end with period, add one
        if (!desc.endsWith('.') && !desc.endsWith('!') && !desc.endsWith('?')) {
            desc = desc + '.';
        }

        parsed.data.description = desc;

        // Write back
        const newContent = matter.stringify(parsed.content, parsed.data);
        fs.writeFileSync(filePath, newContent, 'utf8');
        
        fixed++;
        if (fixed % 100 === 0) {
            console.log(`Fixed ${fixed} articles...`);
        }
    }
});

console.log(`\nDone! Fixed ${fixed} articles.`);
