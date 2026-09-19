'use client';
import React, { useState } from 'react';
import { Language } from '../types';

interface ProjectAtAGlanceSectionProps {
  language?: Language;
  onOpenTalkToAdvisor?: () => void;
}

export const ProjectAtAGlanceSection: React.FC<ProjectAtAGlanceSectionProps> = ({
  language = 'en',
  onOpenTalkToAdvisor
}) => {
  const isEn = language === 'en';
  const [isZoomed, setIsZoomed] = useState(false);

  // 12 Highlights from the Master Plan
  const highlights = [
    { id: 1, en: "Iconic Hotel Tower", bn: "আইকনিক হোটেল টাওয়ার" },
    { id: 2, en: "5-Star Hotel", bn: "৫-তারকা হোটেল" },
    { id: 3, en: "Luxury Villas", bn: "লাক্সারি ভিলা" },
    { id: 4, en: "Eco Cottages", bn: "ইকো কটেজ" },
    { id: 5, en: "Convention Center", bn: "কনভেনশন সেন্টার" },
    { id: 6, en: "Giant Aquarium", bn: "বিশাল অ্যাকোয়ারিয়াম" },
    { id: 7, en: "Water Park", bn: "ওয়াটার পার্ক" },
    { id: 8, en: "Shopping Arcade", bn: "শপিং আর্কেড" },
    { id: 9, en: "Private Beach", bn: "প্রাইভেট বিচ" },
    { id: 10, en: "Electric Buggy", bn: "ইলেকট্রিক বগি" },
    { id: 11, en: "Solar Power", bn: "সোলার পাওয়ার" },
    { id: 12, en: "Rainwater Harvesting", bn: "বৃষ্টির পানি সংরক্ষণ" },
  ];

  const masterPlanVisual = "/center_tower_aerial.png";
  const fullMasterPlanVisual = "/01.png";
  const fallbackVisual = "/19.png";

  return (
    <section 
      id="master-plan-glance" 
      className="w-full bg-white text-[#0B1B3D] pt-[104px] sm:pt-[112px] md:pt-[120px] pb-8 border-b border-gray-200/80 font-sans relative overflow-hidden scroll-mt-12"
    >
      {/* Subtle ambient lighting */}
      <div className="absolute top-0 right-1/3 w-96 h-96 bg-[#E5C378]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#0B1B3D]/3 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ======================================================== */}
        {/* Header (Matching Screenshot Exactly)                     */}
        {/* ======================================================== */}
        <div className="text-center max-w-3xl mx-auto mb-8">
          {/* Eyebrow with gold accent lines */}
          <div className="inline-flex items-center justify-center gap-2 mb-2">
            <span className="w-8 sm:w-10 h-[1.5px] bg-[#E5C378]" />
            <p className="font-sans text-[11px] sm:text-xs tracking-[0.25em] uppercase text-[#E5C378] font-bold text-center">
              {isEn ? "MASTER PLAN HIGHLIGHTS" : "মাস্টার প্ল্যান হাইলাইটস"}
            </p>
            <span className="w-8 sm:w-10 h-[1.5px] bg-[#E5C378]" />
          </div>

          {/* Main Title */}
          <h2 className="font-sans text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0B1B3D] tracking-tight leading-tight mb-2 text-center">
            {isEn ? "Project Highlights" : "এক নজরে প্রকল্প"}
          </h2>

          {/* Subtitle */}
          <p className="font-sans text-xs sm:text-sm text-gray-600 leading-normal text-center max-w-xl mx-auto">
            {isEn
              ? "Luxury coastal resort destination combining hospitality, nature, and recreation."
              : "আতিথেয়তা, নৈসর্গিক প্রকৃতি ও বিনোদনের সমন্বয়ে ১২৫ বিঘার মেগা রিসোর্ট।"}
          </p>
        </div>

        {/* ======================================================== */}
        {/* Main Content Layout (2 Columns: Frame + Highlights)       */}
        {/* ======================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          
          {/* Left Column (8 cols): Master Plan Visual with Gold Corner Accent */}
          <div className="lg:col-span-8 relative flex flex-col justify-center">
            
            {/* Outer Gold Accent Corner Bracket on Bottom-Left */}
            <div 
              className="absolute -bottom-3 -left-3 sm:-bottom-4 sm:-left-4 w-28 sm:w-36 h-28 sm:h-36 border-b-[3px] border-l-[3px] border-[#E5C378] pointer-events-none z-0" 
              aria-hidden="true"
            />

            {/* Visual Container - Focused on the iconic central resort hub */}
            <div 
              onClick={() => setIsZoomed(true)}
              className="relative z-10 w-full min-h-[380px] sm:min-h-[480px] lg:min-h-[560px] aspect-[16/11] sm:aspect-[16/10.5] lg:aspect-[16/10] bg-[#070E1E] overflow-hidden shadow-[0_25px_60px_rgba(11,27,61,0.22)] border border-[#0B1B3D]/30 cursor-zoom-in group"
              title={isEn ? "Click to view full 125-bigha master plan" : "১২৫ বিঘার মাস্টারপ্ল্যান পূর্ণাঙ্গ দেখতে ক্লিক করুন"}
            >
              {/* Focused Master Plan Image on Center Iconic Tower & Hub */}
              <img
                src={masterPlanVisual}
                alt="The Promise Iconic Center Tower & Resort Hub"
                onError={(e) => {
                  if (e.currentTarget.src !== fallbackVisual) {
                    e.currentTarget.src = fallbackVisual;
                  }
                }}
                className="w-full h-full object-cover filter brightness-[1.02] contrast-[1.04] transition-transform duration-700 ease-out group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
            </div>

          </div>

          {/* Right Column (4 cols): Highlights List + Tagline */}
          <div className="lg:col-span-4 flex flex-col justify-between self-stretch pt-2 lg:pt-0 pl-0 lg:pl-4">
            
            <div>
              {/* Highlights Header with Right-Extending Line */}
              <div className="flex items-center gap-3 mb-6">
                <h3 className="font-sans text-xs sm:text-[13px] font-extrabold uppercase tracking-[0.2em] text-[#0B1B3D] shrink-0">
                  {isEn ? "HIGHLIGHTS" : "হাইলাইটস"}
                </h3>
                <div className="h-[1px] bg-gray-300 flex-1" />
              </div>

              {/* Highlights List */}
              <ul className="space-y-2 sm:space-y-2.5">
                {highlights.map((item) => (
                  <li 
                    key={item.id} 
                    className="flex items-center gap-3 text-sm sm:text-[15px] font-semibold text-[#0B1B3D] hover:text-[#E5C378] transition-colors duration-200 px-2.5 py-1 -mx-2.5 rounded-sm hover:bg-[#0B1B3D]/5"
                  >
                    <span className="w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold shrink-0 bg-[#0B1B3D]/10 text-[#0B1B3D]">
                      {item.id}
                    </span>
                    <span className="transition-colors duration-200">
                      {isEn ? item.en : item.bn}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Bottom Section: Divider + Talk to an Advisor Button */}
            <div className="mt-8 pt-4 border-t border-gray-200/90">
              <button
                id="btn-talk-to-advisor-highlights"
                onClick={() => {
                  if (onOpenTalkToAdvisor) {
                    onOpenTalkToAdvisor();
                  } else {
                    const contact = document.getElementById('contact');
                    if (contact) contact.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="py-2.5 sm:py-3 px-5 sm:px-6 bg-[#0B1B3D] text-[#E5C378] hover:bg-[#E5C378] hover:text-[#0B1B3D] border border-[#E5C378] font-sans text-xs sm:text-[13px] font-bold uppercase tracking-[0.16em] transition-all duration-300 shadow-sm hover:shadow-[0_6px_16px_rgba(229,195,120,0.25)] cursor-pointer inline-flex items-center justify-center group"
              >
                <span>{isEn ? "Talk to an Advisor" : "উপদেষ্টার সাথে কথা বলুন"}</span>
              </button>
            </div>

          </div>

        </div>

      </div>

      {/* Fullscreen Lightbox Modal for Master Plan Visual */}
      {isZoomed && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-fadeIn cursor-zoom-out"
          onClick={() => setIsZoomed(false)}
        >
          <div className="relative max-w-6xl w-full max-h-[90vh] flex flex-col items-center">
            <button
              onClick={() => setIsZoomed(false)}
              className="absolute -top-10 right-0 text-white/80 hover:text-white text-sm font-bold uppercase tracking-widest px-3 py-1 bg-white/10 border border-white/20 rounded-none cursor-pointer"
            >
              {isEn ? "Close ✕" : "বন্ধ করুন ✕"}
            </button>
            <img
              src={fullMasterPlanVisual}
              alt="The Promise Full Master Plan"
              onError={(e) => {
                if (e.currentTarget.src !== fallbackVisual) {
                  e.currentTarget.src = fallbackVisual;
                }
              }}
              className="max-w-full max-h-[85vh] object-contain border border-[#E5C378]/40 shadow-2xl"
              referrerPolicy="no-referrer"
            />
            <div className="mt-4 text-center text-white/80 font-sans text-lg">
              {isEn ? "The Promise Resort — 125 Bigha Master Plan" : "দ্যা প্রমিজ রিসোর্ট — ১২৫ বিঘা মাস্টারপ্ল্যান"}
            </div>
          </div>
        </div>
      )}

    </section>
  );
};
