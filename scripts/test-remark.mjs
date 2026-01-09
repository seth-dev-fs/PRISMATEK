import { remark } from 'remark';
import html from 'remark-html';
import fs from 'fs';
import matter from 'gray-matter';

const content = fs.readFileSync('content/posts/netflix-e-warner-bros-uma-megafusao-que-redefine-o-entretenimento-em-portugal.md', 'utf8');
const parsed = matter(content);

// Get just the section with images
const lines = parsed.content.split('\n');
const start = lines.findIndex(l => l.includes('![Antigo projetor'));
const section = lines.slice(start - 2, start + 5).join('\n');

console.log('=== MARKDOWN INPUT ===');
console.log(section);

const result = await remark().use(html, { sanitize: false }).process(section);

console.log('\n=== HTML OUTPUT ===');
console.log(result.toString());
console.log('\n=== HAS <img>? ===', result.toString().includes('<img'));
