'use client';
import React from 'react';
import { 
  Crown, 
  Sparkles, 
  ShieldCheck,
  Palmtree,
  UtensilsCrossed,
  Sparkle
} from 'lucide-react';
import { Language } from '../types';
import { SHAREHOLDER_BENEFITS } from '../data/projectData';

interface ShareholderBenefitsSectionProps {
  language: Language;
  onBookNow: () => void;
}

export const ShareholderBenefitsSection: React.FC<ShareholderBenefitsSectionProps> = ({
  language,
  onBookNow
}) => {
  const isEn = language === 'en';

  return (
    <section 
      id="shareholder_benefits" 
      className="py-16 lg:py-20 bg-white border-b border-gray-200 scroll-mt-12 font-sans relative overflow-hidden"
    >
      <div id="benefits" className="scroll-mt-12" />

      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header (Strictly Left-aligned, Refined sizes) */}
        <div className="max-w-3xl mb-12 text-left">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-8 h-[1px] bg-[#E5C378]" />
            <p className="font-sans text-xs tracking-[0.2em] uppercase text-[#E5C378] font-bold text-left">
              {isEn ? "ELITE PRIVILEGES" : "শেয়ারহোল্ডারদের বিশেষ ভিআইপি সুবিধাসমূহ"}
            </p>
          </div>
          
          <h2 className="font-sans text-3xl lg:text-4xl font-bold text-[#0B1B3D] mb-4 tracking-tight text-left">
            {isEn ? "Shareholder VIP Privileges" : "প্রতিষ্ঠাতা অংশীদারের সুযোগ-সুবিধা"}
          </h2>
          
          <p className="font-sans text-sm sm:text-base text-[#4B5563] leading-relaxed max-w-xl text-left">
            {isEn
              ? "Beyond capital appreciation and financial dividends, enjoy elite personal hospitality and lifetime VIP privileges."
              : "আর্থিক রিটার্ন ও জমির মূল্যবৃদ্ধির পাশাপাশি উপভোগ করুন সারাজীবনের জন্য বিনামূল্যে ৫-তারকা রিসোর্ট অবকাশ ও বিশেষ সুবিধা।"}
          </p>
        </div>

        {/* Benefits Grid (Square cards, rounded-none) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {SHAREHOLDER_BENEFITS.map((benefit, idx) => (
            <div
              key={idx}
              className="bg-[#F8F9FA] rounded-none p-8 border border-gray-200 shadow-sm hover:shadow-[0_20px_40px_rgba(11,27,61,0.1)] hover:border-[#E5C378] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group text-left"
            >
              <div>
                <div className="w-12 h-12 rounded-none bg-[#0B1B3D] text-[#E5C378] flex items-center justify-center mb-6 border border-[#E5C378]/30 group-hover:bg-[#E5C378] group-hover:text-[#0B1B3D] group-hover:shadow-[0_0_15px_rgba(229,195,120,0.5)] transition-all duration-300">
                  <Crown className="w-6 h-6 group-hover:scale-110 transition-transform" />
                </div>

                <h3 className="font-sans text-xl font-bold text-[#0B1B3D] mb-3 leading-snug text-left group-hover:text-[#E5C378] transition-colors">
                  {isEn ? benefit.title : benefit.titleBn}
                </h3>

                <p className="font-sans text-xs sm:text-sm text-[#4B5563] leading-relaxed mb-6 text-left">
                  {isEn ? benefit.description : benefit.descriptionBn}
                </p>
              </div>

              <div className="pt-4 border-t border-gray-200 flex items-center justify-between text-xs text-[#0B1B3D] font-bold">
                <span className="text-[#E5C378] uppercase tracking-wider">{isEn ? 'Lifetime Privilege' : 'আজীবন সুবিধা'}</span>
                <span className="text-gray-400 font-mono">VIP TIER</span>
              </div>
            </div>
          ))}
        </div>

        {/* VIP Member Card Callout with Button Micro-interaction */}
        <div className="bg-[#0B1B3D] rounded-none p-8 sm:p-12 text-white flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 border border-[#E5C378]/30 shadow-md text-left relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#E5C378]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="text-left relative z-10">
            <span className="text-xs uppercase tracking-widest text-[#E5C378] font-bold block mb-1 text-left">
              {isEn ? "FOUNDING MEMBER CREDENTIALS" : "গোল্ড মেম্বারশিপ কার্ড"}
            </span>
            <h3 className="font-sans text-2xl font-bold text-white mb-2 text-left">
              {isEn ? "Founding Shareholder Gold Card" : "গোল্ড ফাউন্ডার মেম্বারশিপ কার্ড গ্রহণ করুন"}
            </h3>
            <p className="font-sans text-xs sm:text-sm text-gray-300 max-w-xl leading-relaxed text-left">
              {isEn
                ? "Every shareholder is issued an encrypted VIP membership smart card granting direct discounts across all dining venues, theme parks, and partner hotel perks."
                : "প্রতিটি বিনিয়োগকারীকে প্রদান করা হয় বিশেষ এনক্রিপ্টেড ভিআইপি কার্ড—যাতে থাকবে বিশেষ ছাড় ও অগ্রাধিকারমূলক বুকিং সুবিধা।"}
            </p>
          </div>

          <div className="relative z-10 w-full lg:w-auto">
            <button
              onClick={onBookNow}
              className="w-full lg:w-auto rounded-none px-6 py-3.5 text-sm font-semibold tracking-wider transition-all duration-300 relative overflow-hidden group bg-[#E5C378] text-[#0B1B3D] hover:bg-white hover:shadow-[0_0_20px_rgba(229,195,120,0.5)] cursor-pointer shrink-0 shadow-sm flex items-center justify-center"
            >
              <span>{isEn ? "Claim VIP Allotment" : "ভিআইপি শেয়ারের জন্য আবেদন"}</span>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
