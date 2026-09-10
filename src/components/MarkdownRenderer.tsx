import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import { generateSlug } from '@/lib/utils';
import CitationTooltip from './CitationTooltip';
import type { Components } from 'react-markdown';
import React from 'react';

interface MarkdownRendererProps {
  content: string;
  citations: Record<string, { title: string; url: string }>;
}

export default function MarkdownRenderer({ content, citations }: MarkdownRendererProps) {
  const components: Components = {
    h2: ({ children, ...props }) => {
      const text = extractText(children);
      const id = generateSlug(text);
      return (
        <h2 id={id} className="scroll-mt-20" {...props}>
          {children}
        </h2>
      );
    },
    h3: ({ children, ...props }) => {
      const text = extractText(children);
      const id = generateSlug(text);
      return (
        <h3 id={id} className="scroll-mt-20" {...props}>
          {children}
        </h3>
      );
    },
    table: ({ children, ...props }) => (
      <div className="table-wrapper my-8 rounded-lg border border-gold/20 overflow-hidden">
        <table {...props}>{children}</table>
      </div>
    ),
    blockquote: ({ children, ...props }) => (
      <blockquote {...props}>
        {children}
      </blockquote>
    ),
    a: ({ children, href, ...props }) => (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-burgundy hover:text-burgundy-light hover:underline transition-colors"
        {...props}
      >
        {children}
      </a>
    ),
    sup: ({ children, ...props }) => {
      // Check if it's a citation number
      const text = extractText(children);
      const idMatch = text.match(/^\s*(\d+)\s*$/);
      if (idMatch) {
        const id = idMatch[1];
        const citation = citations[id];
        return (
          <CitationTooltip id={id} citation={citation}>
            {children}
          </CitationTooltip>
        );
      }
      return <sup {...props}>{children}</sup>;
    }
  };

  return (
    <article className="prose prose-lg max-w-none font-body">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw]}
        components={components}
      >
        {content}
      </ReactMarkdown>
    </article>
  );
}

// Helper to extract text content from React children
function extractText(children: React.ReactNode): string {
  if (typeof children === 'string') return children;
  if (Array.isArray(children)) return children.map(extractText).join('');
  if (children && typeof children === 'object' && 'props' in children) {
    return extractText((children as React.ReactElement).props.children);
  }
  return '';
}
