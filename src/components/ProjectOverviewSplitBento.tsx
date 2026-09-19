'use client';
import React, { useState, useEffect, useRef } from 'react';
import { 
  ShieldCheck,
  Building,
  TrendingUp,
  FileCheck2,
  ArrowRight,
  Play
} from 'lucide-react';
import { Language } from '../types';

interface ProjectOverviewSplitBentoProps {
  language?: Language;
  onOpenBooking?: () => void;
}

export const ProjectOverviewSplitBento: React.FC<ProjectOverviewSplitBentoProps> = ({
  language = 'en',
  onOpenBooking
}) => {
  const isEn = language === 'en';
  const containerRef = useRef<HTMLDivElement>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [isInView, setIsInView] = useState(false);

  // Intersection Observer to trigger autoplay the moment user scrolls to this section
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setIsInView(true);
          // Send play command to YouTube iframe in case it was paused
          iframeRef.current?.contentWindow?.postMessage(
            JSON.stringify({ event: 'command', func: 'playVideo' }),
            '*'
          );
        } else {
          // Pause when scrolled out of view to save resources
          iframeRef.current?.contentWindow?.postMessage(
            JSON.stringify({ event: 'command', func: 'pauseVideo' }),
            '*'
          );
        }
      },
      {
        root: null,
        threshold: 0.25, // Starts playing when at least 25% of the video section is in view
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  const pointerCards = [
    {
      icon: ShieldCheck,
      titleEn: "100% Freehold Land Registry",
      titleBn: "নিজ নামে ১০০% সাফ-কবলা দলিল",
      descEn: "Complete government sub-registry and mutation deed recorded in your individual legal name.",
      descBn: "সরকারি সাব-রেজিস্ট্রি অফিসে সম্পূর্ণ বৈধ সাফ-কবলা দলিলের মাধ্যমে নিশ্চিত শতভাগ মালিকানা।"
    },
    {
      icon: Building,
      titleEn: "Zero Construction Expense",
      titleBn: "কোনো নির্মাণ বা উন্নয়ন খরচ নেই",
      descEn: "Zero hidden charges or architectural fees. 100% of construction is covered by developer.",
      descBn: "রিসোর্ট নির্মাণ, ইন্টেরিয়র ও স্থাপত্যের সমস্ত খরচ সম্পূর্ণভাবে প্রমিজ অ্যাসেটস বহন করবে।"
    },
    {
      icon: TrendingUp,
      titleEn: "70% Net Operating Profits",
      titleBn: "৭০% নিট বার্ষিক লভ্যাংশ বণ্টন",
      descEn: "Lifelong recurring dividends from 5-star suites, dining, conferences, and recreation.",
      descBn: "পাঁচ তারকা রিসোর্টের রুম বুকিং, ডাইনিং ও যাবতীয় সুযোগ-সুবিধা থেকে আজীবন ৭০% লভ্যাংশ।"
    },
    {
      icon: FileCheck2,
      titleEn: "Inheritable & Tradable Asset",
      titleBn: "উত্তরাধিকারযোগ্য ও স্থানান্তরযোগ্য",
      descEn: "Perpetual real estate asset that is legally inheritable, tradable, or sellable at any time.",
      descBn: "উত্তরাধিকার সূত্রে হস্তান্তরযোগ্য ও সেকেন্ডারি মার্কেটে অবাধে বিক্রয়যোগ্য নিরাপদ সম্পত্তি।"
    }
  ];

  return (
    <section 
      id="overview" 
      className="w-full bg-[#F8F9FA] py-12 sm:py-16 border-b border-gray-200 scroll-mt-20 font-sans relative overflow-hidden"
    >
      <div id="about-project" className="scroll-mt-20" />
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* 1. Section Header (Centered at the top) */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
          <div className="inline-flex items-center justify-center gap-2 mb-2">
            <span className="w-8 h-[1px] bg-[#E5C378]" />
            <p className="font-sans text-xs tracking-[0.2em] uppercase text-[#E5C378] font-bold text-center">
              {isEn ? "THE PROJECT VISION" : "প্রকল্প পরিচিতি ও ভিশন"}
            </p>
            <span className="w-8 h-[1px] bg-[#E5C378]" />
          </div>

          <h2 className="font-sans text-2xl sm:text-3xl font-bold text-[#0B1B3D] tracking-tight leading-tight mb-2 text-center">
            {isEn ? "Project Overview" : "প্রকল্প পরিচিতি"}
          </h2>

          <p className="font-sans text-xs sm:text-sm text-[#4B5563] leading-normal text-center max-w-xl mx-auto">
            {isEn 
              ? "Registered freehold land ownership with lifelong 70% net profit dividends."
              : "১০০% রেজিস্ট্রিকৃত সাফ-কবলা জমির মালিকানা ও আজীবন ৭০% নিট লভ্যাংশ।"}
          </p>
        </div>

        {/* 2. Full-Width Architectural Showcase Video (Autoplays on scroll to this section) */}
        <div 
          ref={containerRef}
          className="w-full relative overflow-hidden border border-gray-300 rounded-none shadow-xl bg-[#070E1E] aspect-video max-h-[540px] group"
        >
          {isInView ? (
            <iframe
              ref={iframeRef}
              src="https://www.youtube-nocookie.com/embed/cG8BUZrTzSE?enablejsapi=1&autoplay=1&mute=1&loop=1&playlist=cG8BUZrTzSE&controls=1&rel=0&playsinline=1&modestbranding=1"
              title="The Promise Resort Video Showcase"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="w-full h-full border-0 absolute inset-0"
            />
          ) : (
            /* High-resolution preview poster before scrolling into view */
            <div className="w-full h-full relative cursor-pointer" onClick={() => setIsInView(true)}>
              <img
                src="https://img.youtube.com/vi/cG8BUZrTzSE/maxresdefault.jpg"
                alt="The Promise Resort Video Showcase"
                onError={(e) => {
                  e.currentTarget.src = "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=1600&auto=format&fit=crop";
                }}
                className="w-full h-full object-cover object-center filter brightness-[0.9]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#070E1E]/80 via-transparent to-[#070E1E]/40 flex items-center justify-center">
                <div className="w-16 h-16 bg-[#E5C378] text-[#0B1B3D] flex items-center justify-center shadow-2xl transition-transform transform group-hover:scale-110">
                  <Play className="w-8 h-8 fill-current ml-1" />
                </div>
              </div>
            </div>
          )}
        </div>

        {/* 3. Pointer Cards Row with Beside Download Button */}
        <div className="flex flex-col lg:flex-row items-stretch gap-4 sm:gap-5 mt-6 sm:mt-8">
          
          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 flex-1">
            {pointerCards.map((card, idx) => {
              const Icon = card.icon;
              return (
                <div 
                  key={idx}
                  className="bg-white border border-gray-200 rounded-none p-4 sm:p-5 text-left shadow-sm hover:-translate-y-1 hover:shadow-[0_12px_28px_rgba(11,27,61,0.08)] hover:border-[#E5C378] transition-all duration-300 group flex items-center gap-3.5"
                >
                  <div className="w-10 h-10 shrink-0 rounded-none bg-[#0B1B3D]/5 border border-[#0B1B3D]/10 flex items-center justify-center text-[#E5C378] group-hover:bg-[#0B1B3D] group-hover:text-[#E5C378] group-hover:border-[#E5C378] transition-colors duration-300">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-sans text-sm sm:text-base font-bold text-[#0B1B3D] group-hover:text-[#E5C378] transition-colors leading-snug">
                    {isEn ? card.titleEn : card.titleBn}
                  </h3>
                </div>
              );
            })}
          </div>

          {/* Book Your Share Button (Positioned at the side of the cards) */}
          {onOpenBooking && (
            <button
              id="btn-book-your-share"
              onClick={onOpenBooking}
              className="w-full lg:w-auto lg:min-w-[220px] bg-[#0B1B3D] border-2 border-[#E5C378] text-white hover:bg-[#E5C378] hover:text-[#0B1B3D] px-6 py-4 sm:p-5 text-left transition-all duration-300 group flex items-center justify-center gap-3 shadow-md hover:shadow-[0_12px_28px_rgba(229,195,120,0.3)] cursor-pointer shrink-0 rounded-none"
            >
              <span className="font-sans text-sm sm:text-base font-bold leading-snug whitespace-nowrap">
                {isEn ? "Book Your Share" : "আপনার শেয়ার বুক করুন"}
              </span>
              <div className="w-9 h-9 shrink-0 rounded-none bg-[#E5C378] text-[#0B1B3D] group-hover:bg-[#0B1B3D] group-hover:text-[#E5C378] flex items-center justify-center transition-colors duration-300 shadow-sm">
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </div>
            </button>
          )}

        </div>

      </div>
    </section>
  );
};
