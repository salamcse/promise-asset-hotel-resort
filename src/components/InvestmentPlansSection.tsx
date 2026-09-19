'use client';
import React from 'react';
import { 
  Check, 
  Sparkles,
  Crown,
  ShieldCheck
} from 'lucide-react';
import { Language, Currency, InvestmentPackage } from '../types';
import { INVESTMENT_PACKAGES } from '../data/projectData';
import { formatCurrency } from '../utils/formatters';

interface InvestmentPlansSectionProps {
  language: Language;
  currency: Currency;
  onSelectPackage: (pkg: InvestmentPackage) => void;
}

export const InvestmentPlansSection: React.FC<InvestmentPlansSectionProps> = ({
  language,
  currency,
  onSelectPackage
}) => {
  const isEn = language === 'en';

  return (
    <section 
      id="investment_packages" 
      className="w-full bg-[#FAF8F5] py-8 border-b border-gray-200/80 scroll-mt-12 font-sans relative overflow-hidden"
    >
      <div id="packages" className="scroll-mt-12" />

      {/* ======================================================== */}
      {/* 1. ELEGANT GOLDEN DOT GRID BACKGROUND (Matching Screenshot) */}
      {/* ======================================================== */}
      <div 
        className="absolute inset-0 pointer-events-none z-0 opacity-60"
        style={{
          backgroundImage: `radial-gradient(#E5C378 1.5px, transparent 1.5px)`,
          backgroundSize: '26px 26px',
        }}
        aria-hidden="true"
      />

      {/* Subtle Ambient Radial Lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-gradient-to-b from-[#E5C378]/10 via-white/30 to-transparent blur-3xl pointer-events-none z-0" />

      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ======================================================== */}
        {/* 2. SECTION HEADER (Matching Screenshot Exactly)          */}
        {/* ======================================================== */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
          {/* Eyebrow with gold accent lines */}
          <div className="inline-flex items-center justify-center gap-2 mb-2">
            <span className="w-8 sm:w-10 h-[1.5px] bg-[#E5C378]" />
            <p className="font-sans text-[11px] sm:text-xs tracking-[0.25em] uppercase text-[#E5C378] font-bold text-center">
              {isEn ? "EXCLUSIVE INVESTMENT TIERS" : "এক্সক্লুসিভ বিনিয়োগ টিয়ার্স"}
            </p>
            <span className="w-8 sm:w-10 h-[1.5px] bg-[#E5C378]" />
          </div>

          {/* Main Title */}
          <h2 className="font-sans text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0B1B3D] tracking-tight leading-tight mb-2 text-center">
            {isEn ? "Investment Packages" : "বিনিয়োগ প্যাকেজ"}
          </h2>

          {/* Subtitle */}
          <p className="font-sans text-xs sm:text-sm text-gray-600 leading-normal text-center max-w-xl mx-auto">
            {isEn 
              ? "Three allocation tiers backed by deed registration and 70% profit participation."
              : "সাফ-কবলা দলিল রেজিস্ট্রেশন ও ৭০% লভ্যাংশ সুবিধাসম্পন্ন ৩টি প্যাকেজ।"}
          </p>
        </div>

        {/* ======================================================== */}
        {/* 3. 3-COLUMN INVESTMENT CARDS (Matching Screenshot)       */}
        {/* ======================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-7 sm:gap-8 items-stretch">
          {INVESTMENT_PACKAGES.map((pkg) => {
            const isFeatured = pkg.popular || pkg.id === 'signature' || pkg.id === 'plan_500k';

            if (isFeatured) {
              /* ======================================================== */
              /* POPULAR CARD: Signature Plan (Dark Navy & Gold Frame)    */
              /* ======================================================== */
              return (
                <div
                  key={pkg.id}
                  className="h-full rounded-none p-8 sm:p-9 flex flex-col justify-between relative group text-left transition-all duration-500 ease-out bg-[#0B1B3D] text-white border-2 border-[#E5C378] shadow-[0_20px_50px_rgba(11,27,61,0.28)] hover:shadow-[0_0_40px_rgba(229,195,120,0.5)] hover:-translate-y-2.5 z-20"
                >
                  {/* Floating 3D Gold Crown at Top Right */}
                  <div className="absolute top-7 right-7 w-10 h-10 rounded-none bg-[#E5C378] text-[#0B1B3D] flex items-center justify-center shadow-[0_0_20px_rgba(229,195,120,0.5)] group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
                    <Crown className="w-5 h-5 stroke-[2.2]" />
                  </div>

                  <div className="flex-1 flex flex-col">
                    {/* Top Popular Badge (Unified Height) */}
                    <div className="h-8 mb-6 flex items-center">
                      <div className="inline-flex items-center gap-1.5 bg-[#E5C378] text-[#0B1B3D] px-3.5 py-1 text-[10px] font-bold uppercase tracking-widest rounded-none shadow-sm w-fit">
                        <Sparkles className="w-3 h-3 fill-[#0B1B3D]" />
                        <span>{isEn ? "MOST POPULAR CHOICE" : "সর্বাধিক জনপ্রিয়"}</span>
                      </div>
                    </div>

                    {/* Tier Title & Subtitle (Unified Height) */}
                    <div className="mb-6 text-left min-h-[64px] flex flex-col justify-end">
                      <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-widest text-[#E5C378] block mb-1.5 text-left">
                        {isEn ? "BEST VALUE • MOST PREFERRED" : "সর্বাধিক লাভজনক ও জনপ্রিয়"}
                      </span>
                      <h3 className="font-sans text-2xl lg:text-3xl font-bold text-white text-left tracking-tight">
                        {isEn ? pkg.name : pkg.nameBn}
                      </h3>
                    </div>

                    {/* Price Block with Metallic Gold Accent (Unified Height) */}
                    <div className="mb-6 pb-6 border-b border-white/15 text-left min-h-[88px] flex flex-col justify-end">
                      <div className="font-sans text-3xl sm:text-4xl font-bold text-[#E5C378] text-left tracking-tight">
                        {formatCurrency(pkg.priceBDT, currency, language)}
                      </div>
                      <span className="text-xs text-gray-300 font-sans mt-1.5 block text-left">
                        {isEn ? "100% Freehold Sub-Registry Deed" : "১০০% সাফ-কবলা রেজিস্ট্রিকৃত দলিল"}
                      </span>
                    </div>

                    {/* Feature Checklist - Exactly 7 Points */}
                    <div className="mb-8 text-left flex-1 flex flex-col">
                      <span className="text-xs font-bold uppercase tracking-wider text-[#E5C378] block text-left mb-3">
                        {isEn ? "INCLUDED PRIVILEGES (7):" : "প্যাকেজের ৭টি প্রধান সুবিধাসমূহ:"}
                      </span>
                      <div className="space-y-3 flex-1 flex flex-col justify-between">
                        {pkg.keyPerks.map((feat, i) => (
                          <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-200 min-h-[38px] sm:min-h-[42px]">
                            <Check className="w-4 h-4 text-[#E5C378] shrink-0 mt-0.5" />
                            <span className="leading-snug">{isEn ? feat : pkg.keyPerksBn?.[i] || feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Primary CTA Button with Gold Glow */}
                  <div className="pt-2 mt-auto">
                    <button
                      onClick={() => onSelectPackage(pkg)}
                      className="w-full rounded-none px-6 py-3.5 text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-300 relative overflow-hidden group bg-[#E5C378] text-[#0B1B3D] hover:bg-white hover:shadow-[0_0_25px_rgba(229,195,120,0.6)] cursor-pointer flex items-center justify-center shadow-md"
                    >
                      <span>{isEn ? "Select Signature Plan" : "সিগনেচার প্ল্যান নির্বাচন করুন"}</span>
                    </button>
                  </div>
                </div>
              );
            }

            /* ======================================================== */
            /* WHITE CARDS: Explorer Plan & Prestige Plan (Crisp White) */
            /* ======================================================== */
            return (
              <div
                key={pkg.id}
                className="h-full rounded-none p-8 sm:p-9 flex flex-col justify-between relative group text-left transition-all duration-500 ease-out bg-white text-[#111827] border border-gray-200/90 shadow-[0_10px_30px_rgba(0,0,0,0.06)] hover:border-[#E5C378] hover:shadow-[0_20px_45px_rgba(11,27,61,0.12)] hover:-translate-y-2 z-10"
              >
                <div className="flex-1 flex flex-col">
                  {/* Top Badge for Explorer / Prestige (Unified Height) */}
                  <div className="h-8 mb-6 flex items-center">
                    {pkg.id === 'prestige' ? (
                      <div className="inline-flex items-center gap-1.5 bg-[#0B1B3D] text-[#E5C378] px-3.5 py-1 text-[10px] font-bold uppercase tracking-widest rounded-none shadow-xs w-fit border border-[#E5C378]/40">
                        <Crown className="w-3 h-3 text-[#E5C378]" />
                        <span>{isEn ? (pkg.badge || "VIP SHAREHOLDER") : (pkg.badgeBn || "ভিআইপি শেয়ারহোল্ডার")}</span>
                      </div>
                    ) : (
                      <div className="inline-flex items-center gap-1.5 bg-[#F0FDF4] text-[#15803D] px-3 py-1 text-[10px] font-bold uppercase tracking-widest rounded-none shadow-xs w-fit border border-[#BBF7D0]">
                        <ShieldCheck className="w-3.5 h-3.5 text-[#15803D]" />
                        <span>{isEn ? "STARTER ASSET" : "প্রারম্ভিক অ্যাসেট"}</span>
                      </div>
                    )}
                  </div>

                  {/* Tier Title & Subtitle (Unified Height) */}
                  <div className="mb-6 text-left min-h-[64px] flex flex-col justify-end">
                    <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-widest text-[#E5C378] block mb-1.5 text-left">
                      {pkg.id === 'prestige'
                        ? (isEn ? "PREMIUM LIVING • UNLIMITED POSSIBILITIES" : "প্রিমিয়াম লিভিং • সর্বোচ্চ সুযোগ")
                        : (isEn ? "START YOUR JOURNEY" : "আপনার বিনিয়োগের শুভ সূচনা")}
                    </span>
                    <h3 className="font-sans text-2xl lg:text-3xl font-bold text-[#0B1B3D] text-left tracking-tight">
                      {isEn ? pkg.name : pkg.nameBn}
                    </h3>
                  </div>

                  {/* Price Block (Unified Height) */}
                  <div className="mb-6 pb-6 border-b border-gray-200 text-left min-h-[88px] flex flex-col justify-end">
                    <div className="font-sans text-3xl sm:text-4xl font-bold text-[#0B1B3D] text-left tracking-tight">
                      {formatCurrency(pkg.priceBDT, currency, language)}
                    </div>
                    <span className="text-xs text-gray-500 font-sans mt-1.5 block text-left">
                      {isEn ? "100% Freehold Registered Share" : "১০০% সাফ-কবলা রেজিস্ট্রিকৃত শেয়ার"}
                    </span>
                  </div>

                  {/* Feature Checklist - Exactly 7 Points */}
                  <div className="mb-8 text-left flex-1 flex flex-col">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#0B1B3D] block text-left mb-3">
                      {isEn ? "INCLUDED PRIVILEGES (7):" : "প্যাকেজের ৭টি প্রধান সুবিধাসমূহ:"}
                    </span>
                    <div className="space-y-3 flex-1 flex flex-col justify-between">
                      {pkg.keyPerks.map((feat, i) => (
                        <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-700 min-h-[38px] sm:min-h-[42px]">
                          <Check className="w-4 h-4 text-[#15803D] shrink-0 mt-0.5" />
                          <span className="leading-snug">{isEn ? feat : pkg.keyPerksBn?.[i] || feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* CTA Button */}
                <div className="pt-2 mt-auto">
                  <button
                    onClick={() => onSelectPackage(pkg)}
                    className="w-full rounded-none px-6 py-3.5 text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-300 relative overflow-hidden group border-2 border-[#0B1B3D] bg-[#0B1B3D] text-white hover:bg-[#E5C378] hover:border-[#E5C378] hover:text-[#0B1B3D] hover:shadow-[0_0_20px_rgba(229,195,120,0.4)] cursor-pointer flex items-center justify-center shadow-sm"
                  >
                    <span>{isEn ? `Select ${pkg.name}` : `${pkg.nameBn} নির্বাচন করুন`}</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
