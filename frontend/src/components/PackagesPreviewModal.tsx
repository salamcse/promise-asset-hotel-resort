'use client';
import React from 'react';
import { 
  X, 
  Check, 
  Sparkles, 
  Crown, 
  ShieldCheck 
} from 'lucide-react';
import { Language, Currency } from '../types';
import { INVESTMENT_PACKAGES } from '../data/projectData';
import { formatCurrency } from '../utils/formatters';

interface PackagesPreviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  language: Language;
  currency: Currency;
  onSelectPackageForBooking: (pkgId: string) => void;
  onNavigateToFullSection?: () => void;
}

export const PackagesPreviewModal: React.FC<PackagesPreviewModalProps> = ({
  isOpen,
  onClose,
  language,
  currency,
  onSelectPackageForBooking,
  onNavigateToFullSection
}) => {
  if (!isOpen) return null;

  const isEn = language === 'en';

  const handleChoosePackage = (pkgId: string) => {
    onClose();
    onSelectPackageForBooking(pkgId);
  };

  return (
    <div 
      id="packages-preview-modal" 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 bg-[#0B1B3D]/80 backdrop-blur-md overflow-y-auto"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="bg-[#FAF8F5] w-full max-w-6xl my-auto border border-[#E5C378]/40 shadow-2xl overflow-hidden flex flex-col max-h-[94vh] animate-fadeIn relative">
        
        {/* Golden Dot Grid Background Matching Website Section */}
        <div 
          className="absolute inset-0 pointer-events-none z-0 opacity-60"
          style={{
            backgroundImage: `radial-gradient(#E5C378 1.5px, transparent 1.5px)`,
            backgroundSize: '26px 26px',
          }}
          aria-hidden="true"
        />

        {/* Ambient Radial Lighting */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-gradient-to-b from-[#E5C378]/12 via-white/40 to-transparent blur-3xl pointer-events-none z-0" />

        {/* Modal Header with Close Button */}
        <div className="px-5 sm:px-8 py-3 border-b border-gray-200/80 flex items-center justify-between bg-white/90 backdrop-blur-md sticky top-0 z-30">
          <div className="flex items-center gap-2.5">
            <span className="w-2.5 h-2.5 rounded-none bg-[#E5C378]" />
            <span className="font-sans text-sm font-bold uppercase tracking-wider text-[#0B1B3D]">
              {isEn ? "Exclusive Investment Packages" : "এক্সক্লুসিভ বিনিয়োগ প্যাকেজ"}
            </span>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center text-gray-500 hover:text-[#0B1B3D] hover:bg-[#E5C378]/20 transition-colors cursor-pointer border border-transparent hover:border-[#E5C378]/40"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body - Optimized to eliminate scrolling */}
        <div className="p-4 sm:p-6 lg:p-7 overflow-y-auto lg:overflow-visible flex-1 relative z-10 flex flex-col justify-center">
          {/* 3-Column Investment Cards (Matching Website Exactly, Compacted for Viewport) */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6 items-stretch">
            {INVESTMENT_PACKAGES.map((pkg) => {
              const isFeatured = pkg.popular || pkg.id === 'signature' || pkg.id === 'plan_500k';

              if (isFeatured) {
                /* ======================================================== */
                /* POPULAR CARD: Signature Plan (Dark Navy & Gold Frame)    */
                /* ======================================================== */
                return (
                  <div
                    key={pkg.id}
                    className="h-full rounded-none p-4 sm:p-5 lg:p-6 flex flex-col justify-between relative group text-left transition-all duration-300 bg-[#0B1B3D] text-white border-2 border-[#E5C378] shadow-[0_16px_40px_rgba(11,27,61,0.28)] hover:shadow-[0_0_35px_rgba(229,195,120,0.5)] z-20"
                  >
                    {/* Floating 3D Gold Crown at Top Right */}
                    <div className="absolute top-4 right-4 sm:top-5 sm:right-5 w-8 h-8 rounded-none bg-[#E5C378] text-[#0B1B3D] flex items-center justify-center shadow-[0_0_15px_rgba(229,195,120,0.5)] group-hover:scale-105 transition-transform duration-300">
                      <Crown className="w-4 h-4 stroke-[2.2]" />
                    </div>

                    <div className="flex-1 flex flex-col">
                      {/* Top Popular Badge */}
                      <div className="mb-3 flex items-center">
                        <div className="inline-flex items-center gap-1.5 bg-[#E5C378] text-[#0B1B3D] px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-widest rounded-none shadow-sm w-fit">
                          <Sparkles className="w-3 h-3 fill-[#0B1B3D]" />
                          <span>{isEn ? "MOST POPULAR CHOICE" : "সর্বাধিক জনপ্রিয়"}</span>
                        </div>
                      </div>

                      {/* Tier Title & Subtitle */}
                      <div className="mb-3 text-left">
                        <span className="text-[10px] font-bold uppercase tracking-widest text-[#E5C378] block mb-0.5 text-left">
                          {isEn ? "BEST VALUE • MOST PREFERRED" : "সর্বাধিক লাভজনক ও জনপ্রিয়"}
                        </span>
                        <h3 className="font-sans text-lg sm:text-xl lg:text-2xl font-bold text-white text-left tracking-tight">
                          {isEn ? pkg.name : pkg.nameBn}
                        </h3>
                      </div>

                      {/* Price Block with Metallic Gold Accent */}
                      <div className="mb-3 pb-3 border-b border-white/15 text-left">
                        <div className="font-sans text-xl sm:text-2xl lg:text-3xl font-bold text-[#E5C378] text-left tracking-tight">
                          {formatCurrency(pkg.priceBDT, currency, language)}
                        </div>
                        <span className="text-[11px] text-gray-300 font-sans mt-0.5 block text-left">
                          {isEn ? "100% Freehold Sub-Registry Deed" : "১০০% সাফ-কবলা রেজিস্ট্রিকৃত দলিল"}
                        </span>
                      </div>

                      {/* Feature Checklist - Clean & Compact */}
                      <div className="mb-4 text-left flex-1 flex flex-col">
                        <span className="text-[11px] font-bold uppercase tracking-wider text-[#E5C378] block text-left mb-2">
                          {isEn ? "INCLUDED PRIVILEGES:" : "প্রধান সুবিধাসমূহ:"}
                        </span>
                        <div className="space-y-1.5 flex-1 flex flex-col justify-start">
                          {pkg.keyPerks.map((feat, i) => (
                            <div key={i} className="flex items-start gap-2 text-xs text-gray-200">
                              <Check className="w-3.5 h-3.5 text-[#E5C378] shrink-0 mt-0.5" />
                              <span className="leading-tight">{isEn ? feat : pkg.keyPerksBn?.[i] || feat}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Primary CTA Button with Gold Glow */}
                    <div className="pt-2 mt-auto">
                      <button
                        onClick={() => handleChoosePackage(pkg.id)}
                        className="w-full rounded-none px-4 py-2.5 text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-300 relative overflow-hidden group bg-[#E5C378] text-[#0B1B3D] hover:bg-white hover:shadow-[0_0_20px_rgba(229,195,120,0.6)] cursor-pointer flex items-center justify-center shadow-md"
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
                  className="h-full rounded-none p-4 sm:p-5 lg:p-6 flex flex-col justify-between relative group text-left transition-all duration-300 bg-white text-[#111827] border border-gray-200/90 shadow-[0_10px_25px_rgba(0,0,0,0.05)] hover:border-[#E5C378] hover:shadow-[0_16px_35px_rgba(11,27,61,0.1)] z-10"
                >
                  <div className="flex-1 flex flex-col">
                    {/* Top Badge for Explorer / Prestige */}
                    <div className="mb-3 flex items-center">
                      {pkg.id === 'prestige' ? (
                        <div className="inline-flex items-center gap-1.5 bg-[#0B1B3D] text-[#E5C378] px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-widest rounded-none shadow-xs w-fit border border-[#E5C378]/40">
                          <Crown className="w-3 h-3 text-[#E5C378]" />
                          <span>{isEn ? (pkg.badge || "VIP SHAREHOLDER") : (pkg.badgeBn || "ভিআইপি শেয়ারহোল্ডার")}</span>
                        </div>
                      ) : (
                        <div className="inline-flex items-center gap-1.5 bg-[#F0FDF4] text-[#15803D] px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-widest rounded-none shadow-xs w-fit border border-[#BBF7D0]">
                          <ShieldCheck className="w-3.5 h-3.5 text-[#15803D]" />
                          <span>{isEn ? "STARTER ASSET" : "প্রারম্ভিক অ্যাসেট"}</span>
                        </div>
                      )}
                    </div>

                    {/* Tier Title & Subtitle */}
                    <div className="mb-3 text-left">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-[#E5C378] block mb-0.5 text-left">
                        {pkg.id === 'prestige'
                          ? (isEn ? "PREMIUM LIVING • UNLIMITED POSSIBILITIES" : "প্রিমিয়াম লিভিং • সর্বোচ্চ সুযোগ")
                          : (isEn ? "START YOUR JOURNEY" : "আপনার বিনিয়োগের শুভ সূচনা")}
                      </span>
                      <h3 className="font-sans text-lg sm:text-xl lg:text-2xl font-bold text-[#0B1B3D] text-left tracking-tight">
                        {isEn ? pkg.name : pkg.nameBn}
                      </h3>
                    </div>

                    {/* Price Block */}
                    <div className="mb-3 pb-3 border-b border-gray-200 text-left">
                      <div className="font-sans text-xl sm:text-2xl lg:text-3xl font-bold text-[#0B1B3D] text-left tracking-tight">
                        {formatCurrency(pkg.priceBDT, currency, language)}
                      </div>
                      <span className="text-[11px] text-gray-500 font-sans mt-0.5 block text-left">
                        {isEn ? "100% Freehold Registered Share" : "১০০% সাফ-কবলা রেজিস্ট্রিকৃত শেয়ার"}
                      </span>
                    </div>

                    {/* Feature Checklist - Clean & Compact */}
                    <div className="mb-4 text-left flex-1 flex flex-col">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#0B1B3D] block text-left mb-2">
                        {isEn ? "INCLUDED PRIVILEGES:" : "প্রধান সুবিধাসমূহ:"}
                      </span>
                      <div className="space-y-1.5 flex-1 flex flex-col justify-start">
                        {pkg.keyPerks.map((feat, i) => (
                          <div key={i} className="flex items-start gap-2 text-xs text-gray-700">
                            <Check className="w-3.5 h-3.5 text-[#15803D] shrink-0 mt-0.5" />
                            <span className="leading-tight">{isEn ? feat : pkg.keyPerksBn?.[i] || feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <div className="pt-2 mt-auto">
                    <button
                      onClick={() => handleChoosePackage(pkg.id)}
                      className="w-full rounded-none px-4 py-2.5 text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-300 relative overflow-hidden group border-2 border-[#0B1B3D] bg-[#0B1B3D] text-white hover:bg-[#E5C378] hover:border-[#E5C378] hover:text-[#0B1B3D] hover:shadow-[0_0_20px_rgba(229,195,120,0.4)] cursor-pointer flex items-center justify-center shadow-sm"
                    >
                      <span>{isEn ? `Select ${pkg.name}` : `${pkg.nameBn} নির্বাচন করুন`}</span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-5 sm:px-8 py-3 border-t border-gray-200/80 bg-white/90 backdrop-blur-md flex items-center justify-end text-xs relative z-20">
          <button
            onClick={onClose}
            className="px-5 py-2 border border-gray-300 text-gray-700 hover:bg-gray-100 font-medium cursor-pointer transition-colors"
          >
            {isEn ? 'Close' : 'বন্ধ করুন'}
          </button>
        </div>

      </div>
    </div>
  );
};

