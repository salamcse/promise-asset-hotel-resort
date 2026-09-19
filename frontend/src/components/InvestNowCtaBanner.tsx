'use client';
import React from 'react';
import { Sparkles } from 'lucide-react';
import { Language } from '../types';

interface InvestNowCtaBannerProps {
  language: Language;
  onInvestNow?: () => void;
}

export const InvestNowCtaBanner: React.FC<InvestNowCtaBannerProps> = ({
  language,
  onInvestNow,
}) => {
  const isEn = language === 'en';

  return (
    <section 
      id="unique_invest_now_cta" 
      className="bg-[#FAF8F5] relative py-16 px-4 sm:px-6 lg:px-8 font-sans border-t border-gray-200/80 overflow-hidden"
    >
      {/* Golden Dot Grid Pattern (Matching Investment Packages & FAQ sections) */}
      <div 
        className="absolute inset-0 pointer-events-none z-0 opacity-60"
        style={{
          backgroundImage: `radial-gradient(#E5C378 1.5px, transparent 1.5px)`,
          backgroundSize: '26px 26px',
        }}
        aria-hidden="true"
      />

      {/* Background Subtle Ambient Glow Elements */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-[#E5C378]/10 rounded-full blur-3xl pointer-events-none z-0" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-[#0B1B3D]/5 rounded-full blur-3xl pointer-events-none z-0" />
      
      {/* Contrasting Card with 2px Solid Gold Border (#E5C378) & Sharp Square Geometry */}
      <div className="max-w-[1360px] mx-auto rounded-none bg-white/90 backdrop-blur-2xl border-2 border-[#E5C378] p-10 lg:p-14 shadow-[0_20px_50px_rgba(229,195,120,0.18)] relative flex flex-col lg:flex-row items-center justify-between gap-8 transform hover:-translate-y-1 transition-all duration-500 group/card text-left">
        
        {/* Subtle Decorative Gold Corner Brackets */}
        <div className="absolute -top-1 -left-1 w-4 h-4 bg-[#E5C378] pointer-events-none" />
        <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-[#E5C378] pointer-events-none" />

        {/* Left Content Area (Strictly Left-Aligned) */}
        <div className="max-w-2xl text-left relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#E5C378]/15 border border-[#E5C378]/40 text-[#E5C378] text-xs font-bold uppercase tracking-[0.25em] mb-3 rounded-none">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{isEn ? "LIMITED INVESTMENT OPPORTUNITY" : "সীমিত বিনিয়োগের সুযোগ"}</span>
          </div>

          <h2 className="font-sans text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0B1B3D] text-left leading-snug tracking-normal">
            {isEn
              ? "Secure Your Share in The Promise Resort Today"
              : "আজই দ্যা প্রমিজ রিসোর্টে আপনার শেয়ার নিশ্চিত করুন"}
          </h2>

          <p className="font-sans text-sm lg:text-base text-gray-600 text-left mt-3 leading-relaxed">
            {isEn
              ? "Join thousands of visionary investors. Own registered land and enjoy guaranteed resort returns."
              : "হাজারো দূরদর্শী বিনিয়োগকারীদের সাথে যুক্ত হোন। রেজিস্ট্রিকৃত জমির মালিক হোন এবং নিশ্চিত রিসোর্ট রিটার্ন উপভোগ করুন।"}
          </p>
        </div>

        {/* Right Action Button (Navy with Golden Hover and Sharp Square Edges) */}
        <div className="shrink-0 relative z-10 w-full lg:w-auto flex justify-start lg:justify-end">
          <button
            onClick={() => {
              if (onInvestNow) {
                onInvestNow();
              } else {
                const el = document.getElementById('investment_plans');
                if (el) {
                  el.scrollIntoView({ behavior: 'smooth' });
                }
              }
            }}
            className="w-full sm:w-auto rounded-none bg-[#0B1B3D] text-white px-8 py-4 font-bold text-sm uppercase tracking-widest hover:bg-[#E5C378] hover:text-[#0B1B3D] hover:shadow-[0_0_25px_rgba(229,195,120,0.5)] transition-all duration-300 flex items-center justify-center gap-3 group cursor-pointer border border-[#0B1B3D] hover:border-[#E5C378]"
          >
            <span>{isEn ? "Invest Now" : "এখনই বিনিয়োগ করুন"}</span>
          </button>
        </div>

      </div>
    </section>
  );
};
