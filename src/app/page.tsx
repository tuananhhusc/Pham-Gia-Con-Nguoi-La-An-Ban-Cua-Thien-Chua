import { getMarkdownContent, extractHeadings, calculateReadingTime, extractCitations } from '@/lib/markdown';
import HeroSection from '@/components/HeroSection';
import ReadingProgressBar from '@/components/ReadingProgressBar';
import TableOfContents from '@/components/TableOfContents';
import MarkdownRenderer from '@/components/MarkdownRenderer';
import ScrollToTop from '@/components/ScrollToTop';
import ReadingControls from '@/components/ReadingControls';
import SelectionMenu from '@/components/SelectionMenu';

export default function Home() {
  const content = getMarkdownContent();
  const headings = extractHeadings(content);
  const readingTime = calculateReadingTime(content);
  const citations = extractCitations(content);

  return (
    <div className="min-h-screen relative">
      <ReadingProgressBar />
      <ReadingControls />
      <SelectionMenu />
      
      <HeroSection readingTime={readingTime} />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Table of Contents */}
          <TableOfContents headings={headings} />

          {/* Main Content */}
          <div className="flex-1 min-w-0 max-w-3xl mx-auto lg:mx-0 w-full">
            <MarkdownRenderer content={content} citations={citations} />
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-gold/20 py-8 md:py-12 text-center">
        <div className="text-gold text-2xl mb-4" aria-hidden="true">✝</div>
        <p className="opacity-40 text-charcoal text-sm font-body">
          Ad Maiorem Dei Gloriam
        </p>
        <p className="opacity-30 text-charcoal text-xs font-body mt-2">
          © {new Date().getFullYear()} — Nghiên cứu Thần học Công giáo
        </p>
      </footer>

      <ScrollToTop />
    </div>
  );
}
