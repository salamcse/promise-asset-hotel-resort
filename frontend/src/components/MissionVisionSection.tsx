'use client';
import React from 'react';
import { Target, Compass } from 'lucide-react';
import { Language } from '../types';

interface MissionVisionSectionProps {
  language?: Language;
}

export const MissionVisionSection: React.FC<MissionVisionSectionProps> = ({
  language = 'en'
}) => {
  const isEn = language === 'en';

  return (
    <section 
      id="mission-vision" 
      className="w-full bg-white text-[#0B1B3D] py-8 border-b border-gray-200/80 font-sans relative overflow-hidden scroll-mt-12"
    >
      {/* Editorial Ambient Light Gradients & Warm Champagne Accents */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#E5C378]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#0B1B3D]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(#E5C378_1.2px,transparent_1.2px)] [background-size:20px_20px] opacity-60 pointer-events-none" />

      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header (Centered with High Contrast & Gold Accents) */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
          <div className="inline-flex items-center justify-center gap-2 mb-2">
            <span className="w-8 h-[1.5px] bg-[#E5C378]" />
            <p className="font-sans text-xs tracking-[0.22em] uppercase text-[#9E7D3B] font-bold text-center">
              {isEn ? "FOUNDATION & PHILOSOPHY" : "কৌশলগত ভিত্তি ও রূপরেখা"}
            </p>
            <span className="w-8 h-[1.5px] bg-[#E5C378]" />
          </div>

          <h2 className="font-sans text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0B1B3D] tracking-tight leading-tight mb-2 text-center">
            {isEn ? "Mission & Vision" : "মিশন ও ভিশন"}
          </h2>

          <p className="font-sans text-xs sm:text-sm text-[#4B5563] leading-normal text-center max-w-xl mx-auto">
            {isEn
              ? "Guiding principles driving luxury eco-hospitality and ownership security."
              : "টেকসই পর্যটন, নির্ভরযোগ্য জমি মালিকানা এবং দীর্ঘমেয়াদী আর্থিক সমৃদ্ধি।"}
          </p>
        </div>

        {/* Distinctive Dual Editorial Showcase Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          
          {/* Card 1: Our Mission (Warm Champagne Architectural Card) */}
          <div className="relative bg-[#FCFAF6] border border-[#E9DFD0] hover:border-[#E5C378] p-8 sm:p-10 rounded-none shadow-[0_10px_35px_rgba(229,195,120,0.08)] hover:shadow-[0_24px_60px_rgba(229,195,120,0.18)] transition-all duration-400 flex flex-col justify-between text-left group hover:-translate-y-1.5 overflow-hidden">
            
            {/* Top Solid Gold Brand Inset Line */}
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#9E7D3B] via-[#E5C378] to-[#9E7D3B]" />
            
            {/* Mission Thematic Watermark Graphic */}
            <div className="absolute -right-6 -bottom-6 w-44 h-44 text-[#E5C378]/10 select-none pointer-events-none transition-transform duration-500 group-hover:scale-105 group-hover:rotate-6">
              <Target className="w-full h-full stroke-[1.2]" />
            </div>

            <div>
              {/* Card Header with Distinctive Identity Badge */}
              <div className="flex items-center gap-4 mb-8 pb-6 border-b border-[#E9DFD0]">
                <div className="w-14 h-14 bg-[#0B1B3D] text-[#E5C378] flex items-center justify-center border border-[#E5C378]/50 shadow-md group-hover:bg-[#E5C378] group-hover:text-[#0B1B3D] transition-all duration-300">
                  <Target className="w-7 h-7 stroke-[2] group-hover:scale-110 transition-transform duration-300" />
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#9E7D3B] block mb-1">
                    {isEn ? "CORE PURPOSE" : "বাস্তবায়ন কৌশল"}
                  </span>
                  <h3 className="font-sans font-bold text-2xl sm:text-3xl text-[#0B1B3D]">
                    {isEn ? "Our Mission" : "আমাদের মিশন"}
                  </h3>
                </div>
              </div>

              {/* Editorial Paragraph Content */}
              <div className="space-y-4 font-sans text-[14px] sm:text-[15px] leading-relaxed text-[#4B5563]">
                <p>
                  {isEn ? (
                    <>
                      To pioneer a world-class 5-star eco-resort across 125 bighas of prime beachfront on Inani Marine Drive, securing <strong className="text-[#0B1B3D] font-semibold">100% registered freehold land ownership</strong> directly in each co-owner&apos;s name with complete legal transparency and individual deed registration.
                    </>
                  ) : (
                    <>
                      ইনানী মেরিন ড্রাইভে ১২৫ বিঘার সুবিশাল সৈকতজুড়ে আন্তর্জাতিক ৫-তারকা ইকো-রিসোর্ট বাস্তবায়ন এবং প্রতিটি সহ-মালিকের নিজ নামে <strong className="text-[#0B1B3D] font-semibold">১০০% সাফ-কবলা জমির নিষ্কণ্টক সাব-রেজিস্ট্রি ও নামজারি</strong> নিশ্চিত করাই আমাদের মূল অঙ্গীকার।
                    </>
                  )}
                </p>
                <p>
                  {isEn ? (
                    <>
                      We are dedicated to delivering <strong className="text-[#0B1B3D] font-semibold">lifetime 70% operational profit distributions</strong> with zero ongoing construction charges, while preserving over 65% of the masterplan for expansive lagoons, pristine coastal dunes, and natural green sanctuaries.
                    </>
                  ) : (
                    <>
                      কোনো ধরনের নির্মাণ খরচ ছাড়াই <strong className="text-[#0B1B3D] font-semibold">আজীবন ৭০% নিট পরিচালন মুনাফা ও লভ্যাংশ বণ্টন</strong> নিশ্চিত করা, পাশাপাশি প্রকল্পের ৬৫% এলাকা উন্মুক্ত জলাশয় ও নৈসর্গিক বনায়ন হিসেবে সংরক্ষণ করে টেকসই প্রাকৃতিক সমৃদ্ধি নিশ্চিত করা।
                    </>
                  )}
                </p>
              </div>
            </div>
          </div>

          {/* Card 2: Our Vision (Cool Ivory-Alabaster Architectural Card) */}
          <div className="relative bg-[#F7F9FC] border border-[#DCE4EE] hover:border-[#0B1B3D] p-8 sm:p-10 rounded-none shadow-[0_10px_35px_rgba(11,27,61,0.06)] hover:shadow-[0_24px_60px_rgba(11,27,61,0.16)] transition-all duration-400 flex flex-col justify-between text-left group hover:-translate-y-1.5 overflow-hidden">
            
            {/* Top Solid Navy Brand Inset Line */}
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#0B1B3D] via-[#E5C378] to-[#0B1B3D]" />
            
            {/* Vision Thematic Watermark Graphic */}
            <div className="absolute -right-6 -bottom-6 w-44 h-44 text-[#0B1B3D]/5 select-none pointer-events-none transition-transform duration-500 group-hover:scale-105 group-hover:-rotate-6">
              <Compass className="w-full h-full stroke-[1.2]" />
            </div>

            <div>
              {/* Card Header with Distinctive Identity Badge */}
              <div className="flex items-center gap-4 mb-8 pb-6 border-b border-[#DCE4EE]">
                <div className="w-14 h-14 bg-white text-[#0B1B3D] flex items-center justify-center border border-[#0B1B3D]/20 shadow-md group-hover:bg-[#0B1B3D] group-hover:text-[#E5C378] transition-all duration-300">
                  <Compass className="w-7 h-7 stroke-[2] group-hover:scale-110 transition-transform duration-300" />
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#0B1B3D] block mb-1">
                    {isEn ? "LONG-TERM HORIZON" : "দীর্ঘমেয়াদী রূপকল্প"}
                  </span>
                  <h3 className="font-sans font-bold text-2xl sm:text-3xl text-[#0B1B3D]">
                    {isEn ? "Our Vision" : "আমাদের ভিশন"}
                  </h3>
                </div>
              </div>

              {/* Editorial Paragraph Content */}
              <div className="space-y-4 font-sans text-[14px] sm:text-[15px] leading-relaxed text-[#4B5563]">
                <p>
                  {isEn ? (
                    <>
                      To establish Bangladesh&apos;s premier beachfront eco-resort and an iconic international tourist landmark on Cox&apos;s Bazar Marine Drive, setting the country&apos;s foremost benchmark for <strong className="text-[#0B1B3D] font-semibold">deed-backed resort co-ownership transparency</strong>, ethical governance, and investor protection.
                    </>
                  ) : (
                    <>
                      বাংলাদেশের শীর্ষ বিচফ্রন্ট ইকো-রিসোর্ট ও আন্তর্জাতিক পর্যটন ল্যান্ডমার্ক হিসেবে প্রতিষ্ঠিত হয়ে দেশের <strong className="text-[#0B1B3D] font-semibold">দলিলভিত্তিক রিসোর্ট সহ-মালিকানায় সর্বোচ্চ স্বচ্ছতা</strong>, নির্ভরযোগ্যতা ও বিনিয়োগকারী আস্থার শীর্ষ মানদণ্ড স্থাপন করা।
                    </>
                  )}
                </p>
                <p>
                  {isEn ? (
                    <>
                      By harmonizing luxury 5-star hospitality, international convention facilities, and world-class leisure attractions, we envision creating <strong className="text-[#0B1B3D] font-semibold">multi-generational wealth and exponential capital growth</strong> for every partner family.
                    </>
                  ) : (
                    <>
                      পাঁচ তারকা লাক্সারি আতিথেয়তা, আন্তর্জাতিক কনভেনশন সেন্টার ও বিশ্বমানের অ্যামিউজমেন্ট পার্কের সমন্বয়ে সকল সহ-মালিকের পরিবারের জন্য <strong className="text-[#0B1B3D] font-semibold">দীর্ঘমেয়াদী মূলধনী প্রবৃদ্ধি ও স্থায়ী পারিবারিক সম্পদ</strong> সৃষ্টি করা।
                    </>
                  )}
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};


