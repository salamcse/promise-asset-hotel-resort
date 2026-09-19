'use client';
import React from 'react';
import { X, Building2, MapPin, Palmtree, ShieldCheck, Award } from 'lucide-react';
import { Language } from '../types';
import { PROJECT_STATS } from '../data/projectData';

interface AboutProjectPreviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  language: Language;
  onOpenBooking: () => void;
  onNavigateToFullSection?: () => void;
}

export const AboutProjectPreviewModal: React.FC<AboutProjectPreviewModalProps> = ({
  isOpen,
  onClose,
  language,
  onOpenBooking,
  onNavigateToFullSection
}) => {
  if (!isOpen) return null;

  const isEn = language === 'en';

  return (
    <div 
      id="about-project-preview-modal" 
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
                {isEn ? 'Project Overview Preview' : 'প্রকল্প পরিচিতি প্রিভিউ'}
              </span>
            </div>
            <h3 className="font-sans text-xl sm:text-2xl font-bold text-[#0B1B3D] tracking-tight">
              {isEn ? 'The Promise Hotel & Resort' : 'দ্য প্রমিজ হোটেল অ্যান্ড রিসোর্ট'}
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
          
          {/* Key Visual / Banner with Specs */}
          <div className="relative border border-gray-200 overflow-hidden bg-[#060A17] text-white p-6 sm:p-8">
            <div className="relative z-10 max-w-2xl">
              <span className="text-xs uppercase tracking-widest text-[#E5C378] font-bold block mb-2">
                {isEn ? 'Cox\'s Bazar Marine Drive Mega Resort' : 'কক্সবাজার মেরিন ড্রাইভ মেগা ইকো-রিসোর্ট'}
              </span>
              <h4 className="font-sans text-2xl sm:text-3xl font-bold mb-3 leading-tight">
                {isEn 
                  ? 'A 125-Bigha World-Class Hospitality Sanctuary in Inani Beach'
                  : 'ইনানী সৈকতে ১২৫ বিঘার সুবিশাল আন্তর্জাতিক ৫-তারকা রিসোর্ট'}
              </h4>
              <p className="text-sm text-gray-300 leading-relaxed mb-4">
                {isEn 
                  ? 'Blending untamed Bay of Bengal coastal nature with five-star modern architectural luxury. A joint venture co-ownership model granting real registered land title.'
                  : 'বঙ্গোপসাগরের মনোরম ঢেউ আর সবুজ পাহাড়ের সান্নিধ্যে গড়ে উঠছে ১২৫ বিঘার দৃষ্টিনন্দন ইকো-রিসোর্ট। শতভাগ সাফ-কবলা মালিকানায় নিরাপদ বিনিয়োগ।'}
              </p>
            </div>
          </div>

          {/* 4 Pillars Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
            <div className="p-4 bg-gray-50 border border-gray-200">
              <span className="text-2xl sm:text-3xl font-bold font-sans text-[#0B1B3D]">125</span>
              <span className="text-[10px] uppercase font-bold text-gray-500 block mt-1 tracking-wider">
                {isEn ? 'Bigha Total Masterplan' : 'বিঘা সর্বমোট আয়তন'}
              </span>
            </div>
            <div className="p-4 bg-gray-50 border border-gray-200">
              <span className="text-2xl sm:text-3xl font-bold font-sans text-[#0B1B3D]">65%</span>
              <span className="text-[10px] uppercase font-bold text-gray-500 block mt-1 tracking-wider">
                {isEn ? 'Greenery & Waterbodies' : 'সবুজ ও প্রাকৃতিক জলাশয়'}
              </span>
            </div>
            <div className="p-4 bg-gray-50 border border-gray-200">
              <span className="text-2xl sm:text-3xl font-bold font-sans text-[#0B1B3D]">2,000+</span>
              <span className="text-[10px] uppercase font-bold text-gray-500 block mt-1 tracking-wider">
                {isEn ? 'Convention Hall Capacity' : 'কনভেনশন হল সক্ষমতা'}
              </span>
            </div>
            <div className="p-4 bg-gray-50 border border-gray-200">
              <span className="text-2xl sm:text-3xl font-bold font-sans text-[#E5C378]">100%</span>
              <span className="text-[10px] uppercase font-bold text-gray-500 block mt-1 tracking-wider">
                {isEn ? 'Sub-Registry Deed' : 'সাফ-কবলা মালিকানা'}
              </span>
            </div>
          </div>

          {/* Core Highlights */}
          <div className="space-y-3">
            <h5 className="font-sans text-base font-bold text-[#0B1B3D]">
              {isEn ? 'Why This Resort Redefines Hospitality Investment' : 'কেন দ্য প্রমিজ রিসোর্ট একটি অনন্য বিনিয়োগ'}
            </h5>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-gray-700">
              <div className="p-3 bg-white border border-gray-200 flex items-start gap-2.5">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>{isEn ? 'Government-certified freehold sub-registry deed for absolute title security.' : 'সরকারি সাব-রেজিস্ট্রির মাধ্যমে প্রতিটি শেয়ারহোল্ডারের নামে নিষ্কণ্টক জমি রেজিস্ট্রি।'}</span>
              </div>
              <div className="p-3 bg-white border border-gray-200 flex items-start gap-2.5">
                <Building2 className="w-4 h-4 text-[#E5C378] shrink-0 mt-0.5" />
                <span>{isEn ? 'Over 500 premium keys, pool villas, presidential suites, and ocean-view chalets.' : '৫০০+ বিলাসবহুল সুইট, প্রেসিডেন্সিয়াল ভিলা ও সমুদ্রমুখী নান্দনিক কটেজ।'}</span>
              </div>
              <div className="p-3 bg-white border border-gray-200 flex items-start gap-2.5">
                <Palmtree className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>{isEn ? 'Private beachfront club, infinity pools, helipad, and marine sports marina.' : 'নিজস্ব বিচ ক্লাব, সুবিশাল ইনফিনিটি পুল, আন্তর্জাতিক হেলিপ্যাড ও স্পোর্টস জোন।'}</span>
              </div>
              <div className="p-3 bg-white border border-gray-200 flex items-start gap-2.5">
                <Award className="w-4 h-4 text-[#E5C378] shrink-0 mt-0.5" />
                <span>{isEn ? 'Managed by seasoned 5-star international hotel management operators.' : 'আন্তর্জাতিক অভিজ্ঞ ৫-তারকা হোটেল অপারেটর দ্বারা পেশাদার পরিচালন ব্যবস্থা।'}</span>
              </div>
            </div>
          </div>

          {/* CTA Box */}
          <div className="p-4 bg-[#0B1B3D] text-white flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <div className="font-sans font-bold text-sm sm:text-base text-white">
                {isEn ? 'Ready to secure your co-ownership share?' : 'আপনার শেয়ার বরাদ্দ নিশ্চিত করতে চান?'}
              </div>
              <p className="text-xs text-gray-300 mt-0.5">
                {isEn ? 'Submit your contact info to receive official deed & prospectus papers.' : 'আমাদের প্রতিনিধি দলিলের কাগজপত্র নিয়ে যোগাযোগ করবেন।'}
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
              {isEn ? 'View full project section on page ↓' : 'পৃষ্ঠায় সম্পূর্ণ প্রকল্প বিবরণ দেখুন ↓'}
            </button>
          ) : (
            <span className="text-gray-500">
              {isEn ? 'Promise Assets Ltd. • Registered Developer' : 'প্রমিজ অ্যাসেটস লিমিটেড'}
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
