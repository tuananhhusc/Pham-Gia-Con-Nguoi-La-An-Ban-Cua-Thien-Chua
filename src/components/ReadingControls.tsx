'use client';

import { useReadingContext } from './ReadingProvider';
import { Type, Moon, Sun, Coffee, Settings2, X } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

export default function ReadingControls() {
  const { theme, setTheme, fontSize, setFontSize } = useReadingContext();
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Close menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  return (
    <div className="fixed top-4 right-4 md:top-6 md:right-6 z-50" ref={menuRef}>
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-center w-10 h-10 md:w-11 md:h-11 bg-parchment border border-gold/30 rounded-full shadow-md text-charcoal hover:bg-parchment-dark transition-all duration-300 group"
        aria-label="Tùy chỉnh giao diện"
      >
        {isOpen ? <X className="w-4 h-4 md:w-5 md:h-5" /> : <Settings2 className="w-4 h-4 md:w-5 md:h-5 group-hover:rotate-45 transition-transform duration-300" />}
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-12 md:top-14 right-0 w-[calc(100vw-2rem)] sm:w-64 max-w-[16rem] bg-tooltip border border-gold/20 shadow-2xl rounded-xl p-4 md:p-5 animate-fade-in-up origin-top-right">
          <h3 className="font-heading font-semibold text-charcoal mb-4 text-sm uppercase tracking-wider text-center border-b border-gold/20 pb-2">
            Tùy chỉnh Đọc
          </h3>
          
          {/* Font Size Row */}
          <div className="mb-6">
            <span className="block text-xs opacity-60 text-charcoal mb-2 font-body">Cỡ chữ</span>
            <div className="flex bg-parchment-dark rounded-lg p-1 border border-gold/10">
              <button
                onClick={() => setFontSize('base')}
                className={`flex-1 flex justify-center py-1.5 rounded-md transition-colors ${fontSize === 'base' ? 'bg-tooltip shadow text-burgundy font-bold' : 'text-charcoal hover:bg-gray-500/10'}`}
              >
                <Type className="w-4 h-4" />
              </button>
              <button
                onClick={() => setFontSize('large')}
                className={`flex-1 flex justify-center py-1.5 rounded-md transition-colors ${fontSize === 'large' ? 'bg-tooltip shadow text-burgundy font-bold' : 'text-charcoal hover:bg-gray-500/10'}`}
              >
                <Type className="w-5 h-5" />
              </button>
              <button
                onClick={() => setFontSize('xlarge')}
                className={`flex-1 flex justify-center py-1.5 rounded-md transition-colors ${fontSize === 'xlarge' ? 'bg-tooltip shadow text-burgundy font-bold' : 'text-charcoal hover:bg-gray-500/10'}`}
              >
                <Type className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Theme Row */}
          <div>
            <span className="block text-xs opacity-60 text-charcoal mb-2 font-body">Giao diện</span>
            <div className="flex bg-parchment-dark rounded-lg p-1 border border-gold/10">
              <button
                onClick={() => setTheme('light')}
                className={`flex-1 flex flex-col items-center gap-1 py-2 rounded-md transition-colors ${theme === 'light' ? 'bg-tooltip shadow text-burgundy' : 'text-charcoal hover:bg-gray-500/10'}`}
                title="Parchment"
              >
                <Sun className="w-4 h-4" />
                <span className="text-[10px]">Sáng</span>
              </button>
              <button
                onClick={() => setTheme('sepia')}
                className={`flex-1 flex flex-col items-center gap-1 py-2 rounded-md transition-colors ${theme === 'sepia' ? 'bg-tooltip shadow text-burgundy' : 'text-charcoal hover:bg-gray-500/10'}`}
                title="Sepia"
              >
                <Coffee className="w-4 h-4" />
                <span className="text-[10px]">Sepia</span>
              </button>
              <button
                onClick={() => setTheme('dark')}
                className={`flex-1 flex flex-col items-center gap-1 py-2 rounded-md transition-colors ${theme === 'dark' ? 'bg-tooltip shadow text-burgundy' : 'text-charcoal hover:bg-gray-500/10'}`}
                title="Dark Mode"
              >
                <Moon className="w-4 h-4" />
                <span className="text-[10px]">Tối</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
