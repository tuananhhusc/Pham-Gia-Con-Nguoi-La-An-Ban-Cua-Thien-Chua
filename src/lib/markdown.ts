import fs from 'fs';
import path from 'path';
import { generateSlug } from './utils';

export interface Heading {
  id: string;
  text: string;
  level: number;
}

export function getMarkdownContent(): string {
  const filePath = path.join(process.cwd(), 'content', 'PGCN.md');
  const content = fs.readFileSync(filePath, 'utf-8');
  return content;
}

export function extractHeadings(content: string): Heading[] {
  const headingRegex = /^(#{2,3})\s+(.+)$/gm;
  const headings: Heading[] = [];
  let match;

  while ((match = headingRegex.exec(content)) !== null) {
    const level = match[1].length;
    const text = match[2].trim();
    // Skip the references heading
    if (text === 'Nguồn trích dẫn' || text.includes('Nguồn trích dẫn') || text.includes('Ngu"n trA-ch')) continue;
    headings.push({
      id: generateSlug(text),
      text,
      level,
    });
  }

  return headings;
}

export function calculateReadingTime(content: string): number {
  const words = content.trim().split(/\s+/).length;
  // Giả sử tốc độ đọc trung bình là 250 từ/phút
  return Math.ceil(words / 250);
}

export function extractCitations(content: string): Record<string, { title: string; url: string }> {
  const citations: Record<string, { title: string; url: string }> = {};
  
  // Tìm tất cả các phần tử list item có dạng "1. [Title](URL)"
  const listItemRegex = /^(\d+)\.\s+\[(.*?)\]\((.*?)\)/gm;
  let itemMatch;
  
  while ((itemMatch = listItemRegex.exec(content)) !== null) {
    const id = itemMatch[1];
    const title = itemMatch[2];
    const url = itemMatch[3];
    citations[id] = { title, url };
  }
  
  return citations;
}
