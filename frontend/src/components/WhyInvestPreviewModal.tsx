'use client';
import React from 'react';
import { X, TrendingUp, ShieldCheck, BedDouble, DollarSign, Gem, RefreshCw } from 'lucide-react';
import { Language } from '../types';

interface WhyInvestPreviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  language: Language;
  onOpenBooking: () => void;
  onNavigateToFullSection?: () => void;
}

export const WhyInvestPreviewModal: React.FC<WhyInvestPreviewModalProps> = ({
  isOpen,
  onClose,
  language,
  onOpenBooking,
  onNavigateToFullSection
}) => {
  if (!isOpen) return null;

  const isEn = language === 'en';

  const reasons = [
    {
      icon: ShieldCheck,
      titleEn: '100% Registered Land Deed',
      titleBn: 'শতভাগ সাফ-কবলা জমির দলিল',
      descEn: 'Unlike typical timeshares, you own actual land registered under your legal name via Bangladesh Sub-Registry office.',
      descBn: 'সাধারণ টাইমশেয়ারের মতো নয়, সরকারি সাব-রেজিস্ট্রির মাধ্যমে আপনার নামে শতভাগ নিষ্কণ্টক জমি রেজিস্ট্রি।'
    },
    {
      icon: TrendingUp,
      titleEn: 'High Capital Growth & Tourism Surge',
      titleBn: 'দ্রুত সম্পদ বৃদ্ধি ও পর্যটন সম্ভাবনা',
      descEn: 'Located directly on Marine Drive Road Inani, benefiting from massive infrastructure boom and Cox’s Bazar airport upgrades.',
      descBn: 'মেরিন ড্রাইভের মতো প্রিমিয়াম লোকেশনে অবস্থিত হওয়ায় দ্রুত জমির মূল্যবৃদ্ধি ও আন্তর্জাতিক পর্যটকের আগমন।'
    },
    {
      icon: DollarSign,
      titleEn: 'Guaranteed 70% Profit Sharing',
      titleBn: '৭০% নিশ্চিত পরিচালন মুনাফা বণ্টন',
      descEn: 'Shareholders receive 70% of the resort’s net operating revenue distributed annually with transparent certified audits.',
      descBn: 'রিসোর্ট অপারেশনের নিট আয়ের ৭০% বার্ষিক লভ্যাংশ হিসেবে প্রতিটি শেয়ারহোল্ডারের অ্যাকাউন্টে বণ্টন।'
    },
    {
      icon: BedDouble,
      titleEn: 'Annual Luxury Free Stays',
      titleBn: 'বার্ষিক ৩ দিন ২ রাত ফ্রী রিসোর্ট অবকাশ',
      descEn: 'Enjoy annual complimentary 3 Days / 2 Nights stays at the resort with your family, plus up to 25% F&B discounts.',
      descBn: 'প্রতি বছর পরিবারসহ ৩ দিন ২ রাত বিনামূল্যে ৫-তারকা রিসোর্ট স্টে এবং ডাইনিং ও অ্যামেনিটিতে বিশেষ ছাড়।'
    },
    {
      icon: Gem,
      titleEn: 'Zero Construction Liabilities',
      titleBn: 'নির্মাণ ব্যয়ের কোনো বাড়তি চাপ নেই',
      descEn: 'Developer completes 100% of construction, furnishing, and infrastructure without asking for hidden escalation charges.',
      descBn: 'প্রমিজ অ্যাসেটস লিঃ নিজস্ব অর্থায়নে সকল অবকাঠামো ও ইন্টেরিয়র নির্মাণ সম্পন্ন করবে।'
    },
    {
      icon: RefreshCw,
      titleEn: 'Full Transfer & Liquidity Rights',
      titleBn: 'সহজ হস্তান্তরযোগ্যতা ও উত্তরাধিকার',
      descEn: 'Ownership shares can be legally transferred, gifted, sold at appreciated market rates, or inherited by nominees.',
      descBn: 'আপনার শেয়ার যেকোনো সময় নামজারিসহ বিক্রয়, হস্তান্তর, উপহার বা উত্তরাধিকার সূত্রে প্রদানযোগ্য।'
    }
  ];

  return (
    <div 
      id="why-invest-preview-modal" 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 bg-[#0B1B3D]/75 backdrop-blur-md overflow-y-auto"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="bg-white w-full max-w-4xl my-auto border border-gray-200 shadow-2xl overflow-hidden flex flex-col max-h-[92vh] animate-fadeIn">
        
        {/* Header */}
        <div className="px-5 sm:px-8 py-4 sm:py-5 border-b border-gray-100 flex items-center justify-between bg-white sticky top-0 z-20">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="w-2 h-2 rounded-full bg-[#E5C378]" />
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#E5C378]">
                {isEn ? 'Investment Advantage' : 'বিনিয়োগের যৌক্তিকতা'}
              </span>
            </div>
            <h3 className="font-sans text-xl sm:text-2xl font-bold text-[#0B1B3D] tracking-tight">
              {isEn ? 'Why Invest in The Promise Resort' : 'কেন দ্য প্রমিজ রিসোর্টে বিনিয়োগ করবেন?'}
            </h3>
          </div>

          <button
            onClick={onClose}
            className="w-9 h-9 flex items-center justify-center text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-5 sm:p-8 overflow-y-auto flex-1 space-y-6 text-left">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {reasons.map((r, i) => {
              const Icon = r.icon;
              return (
                <div key={i} className="p-4 bg-gray-50 border border-gray-200 hover:border-[#E5C378]/50 transition-colors flex gap-3.5 items-start">
                  <div className="w-10 h-10 bg-[#0B1B3D] text-[#E5C378] flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-sans font-bold text-sm text-[#0B1B3D]">
                      {isEn ? r.titleEn : r.titleBn}
                    </h4>
                    <p className="text-xs text-gray-600 mt-1 leading-relaxed">
                      {isEn ? r.descEn : r.descBn}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* CTA Banner */}
          <div className="p-4 bg-[#0B1B3D] text-white flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <div className="font-sans font-bold text-sm sm:text-base text-white">
                {isEn ? 'Speak with our senior investment analysts' : 'আমাদের সিনিয়র বিনিয়োগ উপদেষ্টাদের সাথে কথা বলুন'}
              </div>
              <p className="text-xs text-gray-300 mt-0.5">
                {isEn ? 'Submit your contact info to receive detailed projected cash flows.' : 'আপনার তথ্য জমা দিন, আমরা পূর্ণাঙ্গ ফিনান্সিয়াল প্রজেকশন পাঠিয়ে দেব।'}
              </p>
            </div>
            <button
              onClick={() => {
                onClose();
                onOpenBooking();
              }}
              className="px-6 py-2.5 bg-[#E5C378] text-[#0B1B3D] hover:bg-white font-bold text-xs uppercase tracking-wider shrink-0 transition-colors flex items-center justify-center cursor-pointer"
            >
              <span>{isEn ? 'Book Share Info' : 'বুকিং আবেদন করুন'}</span>
            </button>
          </div>

        </div>

        {/* Footer */}
        <div className="px-5 sm:px-8 py-3.5 border-t border-gray-100 bg-gray-50 flex items-center justify-between text-xs">
          {onNavigateToFullSection ? (
            <button
              onClick={() => {
                onClose();
                onNavigateToFullSection();
              }}
              className="text-[#0B1B3D] hover:text-[#E5C378] font-medium underline cursor-pointer"
            >
              {isEn ? 'Scroll down to Why Invest section ↓' : 'পৃষ্ঠায় সম্পূর্ণ বিভাগটি দেখুন ↓'}
            </button>
          ) : (
            <span className="text-gray-500">
              {isEn ? 'High-growth hospitality asset' : 'উচ্চ প্রবৃদ্ধিসম্পন্ন রিয়েল এস্টেট সম্পদ'}
            </span>
          )}

          <button
            onClick={onClose}
            className="px-4 py-2 border border-gray-300 text-gray-700 hover:bg-gray-100 font-medium cursor-pointer"
          >
            {isEn ? 'Close' : 'বন্ধ করুন'}
          </button>
        </div>

      </div>
    </div>
  );
};
