'use client';
import React, { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';
import { Language } from '../types';

interface BackToTopButtonProps {
  language?: Language;
}

export const BackToTopButton: React.FC<BackToTopButtonProps> = ({ language = 'en' }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const isEn = language === 'en';

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      
      // Calculate scroll progress percentage (0 to 100)
      if (docHeight > 0) {
        const progress = Math.min(100, Math.max(0, (scrollTop / docHeight) * 100));
        setScrollProgress(progress);
      }

      // Show button after scrolling down 300px
      if (scrollTop > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  if (!isVisible) return null;

  // SVG Circular progress math
  const radius = 22;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (scrollProgress / 100) * circumference;

  return (
    <div className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-40 animate-fadeIn transition-all duration-300">
      <button
        onClick={scrollToTop}
        aria-label={isEn ? "Back to top" : "উপরে যান"}
        title={isEn ? "Back to top" : "উপরে যান"}
        className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#0B1B3D]/90 backdrop-blur-xl text-[#E5C378] flex items-center justify-center shadow-[0_10px_25px_rgba(0,0,0,0.35)] hover:shadow-[0_0_30px_rgba(229,195,120,0.7)] border border-[#E5C378]/40 hover:border-[#E5C378] hover:bg-[#E5C378] hover:text-[#0B1B3D] transition-all duration-300 group cursor-pointer hover:-translate-y-1 active:scale-95"
      >
        {/* Circular Progress Ring */}
        <svg 
          className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none p-0.5"
          viewBox="0 0 52 52"
        >
          {/* Background circle */}
          <circle
            cx="26"
            cy="26"
            r={radius}
            className="stroke-white/10"
            strokeWidth="2"
            fill="none"
          />
          {/* Dynamic Progress circle */}
          <circle
            cx="26"
            cy="26"
            r={radius}
            className="stroke-[#E5C378] group-hover:stroke-[#0B1B3D] transition-colors duration-300"
            strokeWidth="2.5"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            fill="none"
          />
        </svg>

        {/* Arrow Icon */}
        <ChevronUp className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2.5] transition-transform duration-300 group-hover:-translate-y-1 relative z-10" />

        {/* Tooltip on Hover */}
        <span className="absolute -top-9 right-1/2 translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none bg-[#0B1B3D] text-white border border-[#E5C378]/40 text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-none shadow-lg whitespace-nowrap">
          {isEn ? "TOP" : "উপরে"}
        </span>
      </button>
    </div>
  );
};
