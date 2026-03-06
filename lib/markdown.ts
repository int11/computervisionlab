import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const postsDirectory = path.join(process.cwd(), 'content', 'research');

export interface ResearchData {
    id: string;
    category: string;
    title: string;
    image: string;
    contentHtml: string;
}

export async function getResearchData(category: string): Promise<ResearchData[]> {
    const categoryDir = path.join(postsDirectory, category);

    if (!fs.existsSync(categoryDir)) return [];

    const fileNames = fs.readdirSync(categoryDir);
    const allPostsData = await Promise.all(fileNames.map(async (fileName) => {
        // Remove ".md" from file name to get id
        const id = fileName.replace(/\.md$/, '');

        // Read markdown file as string
        const fullPath = path.join(categoryDir, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');

        // Use gray-matter to parse the post metadata section
        const matterResult = matter(fileContents);

        // Use remark to convert markdown into HTML string
        const processedContent = await remark()
            .use(html)
            .process(matterResult.content);
        const contentHtml = processedContent.toString();

        return {
            id,
            category,
            title: matterResult.data.title,
            image: matterResult.data.image,
            contentHtml,
        };
    }));

    // Sort by id or any other field
    return allPostsData.sort((a, b) => {
        if (a.id < b.id) {
            return -1;
        } else {
            return 1;
        }
    });
}
