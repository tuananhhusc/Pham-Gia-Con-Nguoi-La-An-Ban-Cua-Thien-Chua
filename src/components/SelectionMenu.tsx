'use client';

import { useState, useEffect } from 'react';
import { Copy, Share2, Check } from 'lucide-react';

export default function SelectionMenu() {
  const [selection, setSelection] = useState<{ text: string; x: number; y: number } | null>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleMouseUp = () => {
      setTimeout(() => {
        const activeSelection = window.getSelection();
        if (activeSelection && activeSelection.toString().trim().length > 0) {
          const range = activeSelection.getRangeAt(0);
          const rect = range.getBoundingClientRect();
          
          setSelection({
            text: activeSelection.toString().trim(),
            x: rect.left + rect.width / 2,
            y: rect.top + window.scrollY - 10,
          });
        } else {
          setSelection(null);
          setCopied(false);
        }
      }, 0);
    };

    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('touchend', handleMouseUp);
    return () => {
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('touchend', handleMouseUp);
    };
  }, []);

  if (!selection) return null;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(selection.text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy', err);
    }
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Trích dẫn Thần học',
          text: `"${selection.text}"`,
          url: window.location.href,
        });
      } catch (err) {
        console.error('Failed to share', err);
      }
    } else {
      // Fallback to copy if native share is unavailable
      handleCopy();
    }
  };

  return (
    <div 
      className="absolute z-50 flex items-center gap-1 bg-gray-900 text-white px-2 py-1.5 rounded-lg shadow-xl animate-fade-in-up border border-gray-700"
      style={{
        left: `${selection.x}px`,
        top: `${selection.y}px`,
        transform: 'translate(-50%, -100%)'
      }}
    >
      <button 
        onClick={handleCopy}
        className="flex items-center gap-1.5 px-3 py-1 hover:bg-white/20 rounded-md transition-colors text-sm font-medium"
      >
        {copied ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
        {copied ? 'Đã chép' : 'Chép'}
      </button>
      <div className="w-px h-4 bg-white/30 mx-1"></div>
      <button 
        onClick={handleShare}
        className="flex items-center gap-1.5 px-3 py-1 hover:bg-white/20 rounded-md transition-colors text-sm font-medium"
      >
        <Share2 className="w-4 h-4" />
        Chia sẻ
      </button>
      
      {/* Triangle pointer */}
      <div className="absolute left-1/2 -bottom-2 -translate-x-1/2 border-solid border-t-gray-900 border-t-8 border-x-transparent border-x-8 border-b-0"></div>
    </div>
  );
}
