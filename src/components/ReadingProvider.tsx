'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'light' | 'dark' | 'sepia';
type FontSize = 'base' | 'large' | 'xlarge';

interface ReadingContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  fontSize: FontSize;
  setFontSize: (size: FontSize) => void;
}

const ReadingContext = createContext<ReadingContextType | undefined>(undefined);

export function ReadingProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>('light');
  const [fontSize, setFontSize] = useState<FontSize>('base');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem('pgcc-theme') as Theme;
    const savedFontSize = localStorage.getItem('pgcc-fontsize') as FontSize;
    if (savedTheme) setTheme(savedTheme);
    if (savedFontSize) setFontSize(savedFontSize);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    localStorage.setItem('pgcc-theme', theme);
    localStorage.setItem('pgcc-fontsize', fontSize);

    // Apply classes to document element
    const root = document.documentElement;
    
    // Remove old classes
    root.classList.remove('theme-light', 'theme-dark', 'theme-sepia');
    root.classList.remove('text-base', 'text-lg', 'text-xl');
    
    // Add new classes
    root.classList.add(`theme-${theme}`);
    
    if (fontSize === 'base') root.classList.add('text-base');
    if (fontSize === 'large') root.classList.add('text-lg');
    if (fontSize === 'xlarge') root.classList.add('text-xl');
    
  }, [theme, fontSize, mounted]);

  return (
    <ReadingContext.Provider value={{ theme, setTheme, fontSize, setFontSize }}>
      {children}
    </ReadingContext.Provider>
  );
}

export function useReadingContext() {
  const context = useContext(ReadingContext);
  if (context === undefined) {
    throw new Error('useReadingContext must be used within a ReadingProvider');
  }
  return context;
}
