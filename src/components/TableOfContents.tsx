'use client';

import { useState, useEffect, useCallback } from 'react';
import { List, X, BookOpen } from 'lucide-react';

interface Heading {
  id: string;
  text: string;
  level: number;
}

interface TableOfContentsProps {
  headings: Heading[];
}

export default function TableOfContents({ headings }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>('');
  const [isOpen, setIsOpen] = useState(false);

  // Intersection Observer to track active heading
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // Find the first intersecting entry
        const intersecting = entries.filter((e) => e.isIntersecting);
        if (intersecting.length > 0) {
          setActiveId(intersecting[0].target.id);
        }
      },
      {
        rootMargin: '-80px 0px -70% 0px',
        threshold: 0,
      }
    );

    // Observe all heading elements
    headings.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [headings]);

  const handleClick = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  }, []);

  // Lock body scroll when mobile drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const tocContent = (
    <nav aria-label="Mục lục">
      <h2 className="font-heading text-lg font-bold text-charcoal mb-4 flex items-center gap-2">
        <BookOpen className="w-5 h-5 text-burgundy" />
        Mục lục
      </h2>
      <ul className="space-y-1">
        {headings.map((heading) => (
          <li key={heading.id}>
            <button
              onClick={() => handleClick(heading.id)}
              className={`toc-link block w-full text-left text-sm py-1.5 px-3 rounded-r-md transition-all ${
                heading.level === 3 ? 'pl-6' : ''
              } ${
                activeId === heading.id
                  ? 'active'
                  : 'opacity-60 text-charcoal hover:opacity-100'
              }`}
            >
              {heading.text}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden lg:block w-72 xl:w-80 flex-shrink-0">
        <div className="sticky top-20 max-h-[calc(100vh-6rem)] overflow-y-auto pr-4 pb-8">
          {tocContent}
        </div>
      </aside>

      {/* Mobile FAB */}
      <button
        onClick={() => setIsOpen(true)}
        className="lg:hidden fixed bottom-6 left-6 z-40 bg-burgundy text-white p-4 rounded-full shadow-lg hover:bg-burgundy-dark transition-colors"
        aria-label="Mở mục lục"
      >
        <List className="w-6 h-6" />
      </button>

      {/* Mobile Drawer Overlay */}
      {isOpen && (
        <div className="lg:hidden fixed inset-0 z-50">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/40 toc-overlay"
            onClick={() => setIsOpen(false)}
          />
          {/* Drawer */}
          <div className="absolute left-0 top-0 bottom-0 w-80 max-w-[85vw] bg-parchment shadow-2xl toc-drawer p-6 overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <h2 className="font-heading text-lg font-bold text-charcoal flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-burgundy" />
                Mục lục
              </h2>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 hover:bg-parchment-dark rounded-full transition-colors"
                aria-label="Đóng mục lục"
              >
                <X className="w-5 h-5 text-charcoal" />
              </button>
            </div>
            <ul className="space-y-1">
              {headings.map((heading) => (
                <li key={heading.id}>
                  <button
                    onClick={() => handleClick(heading.id)}
                    className={`toc-link block w-full text-left text-sm py-2 px-3 rounded-r-md transition-all ${
                      heading.level === 3 ? 'pl-6' : ''
                    } ${
                      activeId === heading.id
                        ? 'active'
                        : 'opacity-60 text-charcoal hover:opacity-100'
                    }`}
                  >
                    {heading.text}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
}
