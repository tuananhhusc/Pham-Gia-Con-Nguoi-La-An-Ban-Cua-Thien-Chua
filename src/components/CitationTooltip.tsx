'use client';

import { useState, useRef, useEffect } from 'react';
import { Info } from 'lucide-react';

interface CitationTooltipProps {
  id: string;
  citation?: { title: string; url: string };
  children: React.ReactNode;
}

export default function CitationTooltip({ id, citation, children }: CitationTooltipProps) {
  const [show, setShow] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout>();

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setShow(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setShow(false), 200);
  };

  // If no citation data, just render the default sup
  if (!citation) return <sup id={`cite-${id}`}>{children}</sup>;

  return (
    <span 
      className="relative inline-block"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <sup 
        className="cursor-pointer text-gold hover:text-burgundy transition-colors px-0.5"
        id={`cite-${id}`}
      >
        [{id}]
      </sup>
      
      {show && (
        <div className="absolute z-50 bottom-full left-1/2 -translate-x-1/2 mb-2 w-64 p-3 bg-tooltip rounded-lg shadow-xl border border-gold/20 text-sm font-body text-left">
          <div className="flex items-start gap-2 text-charcoal">
            <Info className="w-4 h-4 text-burgundy shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold mb-1 line-clamp-3 leading-snug">
                {citation.title}
              </p>
              {citation.url && citation.url !== 'URL' && (
                <a 
                  href={citation.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-burgundy hover:underline text-xs break-all"
                >
                  Xem nguồn
                </a>
              )}
            </div>
          </div>
          {/* Triangle pointer */}
          <div className="absolute left-1/2 -bottom-2 -translate-x-1/2 border-solid border-t-tooltip border-t-8 border-x-transparent border-x-8 border-b-0"></div>
        </div>
      )}
    </span>
  );
}
