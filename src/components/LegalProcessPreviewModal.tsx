'use client';
import React from 'react';
import { X, Landmark, Scale, HardHat, KeyRound, ShieldCheck, FileCheck } from 'lucide-react';
import { Language } from '../types';

interface LegalProcessPreviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  language: Language;
  onOpenBooking: () => void;
  onNavigateToFullSection?: () => void;
}

export const LegalProcessPreviewModal: React.FC<LegalProcessPreviewModalProps> = ({
  isOpen,
  onClose,
  language,
  onOpenBooking,
  onNavigateToFullSection
}) => {
  if (!isOpen) return null;

  const isEn = language === 'en';

  const steps = [
    {
      num: '01',
      icon: Landmark,
      titleEn: 'Land Purchase & Sub-Registry Deed',
      titleBn: 'জমি ক্রয় ও সাফ-কবলা দলিল',
      descEn: 'Select your preferred land share size and receive a 100% government-registered freehold sub-registry deed directly in your legal name.',
      descBn: 'প্যাকেজ নির্বাচন করে সরকারি সাব-রেজিস্ট্রি অফিসের মাধ্যমে নিজস্ব নামে শতভাগ নিষ্কণ্টক সাফ-কবলা দলিল সম্পাদন করুন।'
    },
    {
      num: '02',
      icon: Scale,
      titleEn: 'Binding Judicial Contract (30:70)',
      titleBn: 'দ্বিপাক্ষিক জুডিশিয়াল চুক্তি (৩০:৭০)',
      descEn: 'Execute a binding legal agreement securing 30% construction share unit allocation and 70% net annual resort operating profit rights.',
      descBn: '৩০০ টাকার জুডিশিয়াল স্ট্যাম্পে ৩০% কনস্ট্রাকশন শেয়ার বরাদ্দ এবং ৭০% রিসোর্ট পরিচালন মুনাফা বণ্টনের দ্বিপাক্ষিক চুক্তিপত্র স্বাক্ষর।'
    },
    {
      num: '03',
      icon: HardHat,
      titleEn: '100% Construction by Developer',
      titleBn: '১০০% কোম্পানির নিজস্ব অর্থায়নে উন্নয়ন',
      descEn: 'Promise Assets Ltd. completes 100% of engineering, architecture, and luxury resort infrastructure with zero additional liabilities.',
      descBn: 'প্রমিজ অ্যাসেটস লিমিটেড সম্পূর্ণ নিজস্ব অর্থায়ন ও দায়িত্বে ৫-তারকা রিসোর্টের যাবতীয় অবকাঠামো নির্মাণ ও উন্নয়ন সম্পন্ন করবে।'
    },
    {
      num: '04',
      icon: KeyRound,
      titleEn: 'Handover, CSU & Lifetime Returns',
      titleBn: 'হস্তান্তর ও আজীবন লভ্যাংশ',
      descEn: 'Receive official CSU allotment certificate, VIP membership card, annual 3D/2N free stays, and lifetime annual audited dividends.',
      descBn: 'সিএসইউ ইউনিট সার্টিফিকেট, বাৎসরিক ৩ দিন ২ রাত ফ্রি ভিআইপি স্টে পাস এবং আজীবন লাভজনক মুনাফা শেয়ারিং প্রাপ্তি।'
    }
  ];

  return (
    <div 
      id="legal-process-preview-modal" 
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
                {isEn ? 'Legal & Ownership Safety' : 'আইনি ও মালিকানা নিরাপত্তা'}
              </span>
            </div>
            <h3 className="font-sans text-xl sm:text-2xl font-bold text-[#0B1B3D] tracking-tight">
              {isEn ? '4-Step Safe-Kabla Legal Journey' : '৪-ধাপের নিষ্কণ্টক সাফ-কবলা আইনি প্রক্রিয়া'}
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
          
          <div className="bg-emerald-50 border-l-4 border-emerald-600 p-4 text-xs sm:text-sm text-emerald-950 flex items-center gap-3">
            <ShieldCheck className="w-6 h-6 text-emerald-600 shrink-0" />
            <p>
              {isEn 
                ? 'Every co-ownership plot is verified through district record offices with clean CS, SA, RS, and BS survey khatiyans.' 
                : 'সকল জমি সিএস, এসএ, আরএস ও বিএস খতিয়ান অনুযায়ী শতভাগ নির্ভেজাল ও সরকারি সাব-রেজিস্ট্রি অনুমোদিত।'}
            </p>
          </div>

          {/* 4 Steps Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {steps.map((step) => {
              const Icon = step.icon;
              return (
                <div key={step.num} className="p-5 bg-gray-50 border border-gray-200 text-left relative">
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-10 h-10 bg-[#0B1B3D] text-[#E5C378] flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-xl font-bold font-mono text-[#E5C378]">
                      {step.num}
                    </span>
                  </div>
                  <h4 className="font-sans font-bold text-base text-[#0B1B3D] mb-1.5">
                    {isEn ? step.titleEn : step.titleBn}
                  </h4>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    {isEn ? step.descEn : step.descBn}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Callout */}
          <div className="p-4 bg-[#0B1B3D] text-white flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <div className="font-sans font-bold text-sm sm:text-base text-white">
                {isEn ? 'Inspect official deed & survey records' : 'অফিসিয়াল দলিল ও খতিয়ান যাচাই করতে চান?'}
              </div>
              <p className="text-xs text-gray-300 mt-0.5">
                {isEn ? 'Submit your contact info to receive certified documentation.' : 'আমাদের আইনি দলিলের কপি দেখতে যোগাযোগ করুন।'}
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
              {isEn ? 'Scroll down to full legal section ↓' : 'পৃষ্ঠায় সম্পূর্ণ আইনি বিবরণ দেখুন ↓'}
            </button>
          ) : (
            <span className="text-gray-500">
              {isEn ? 'Protected under Bangladesh Registration Act' : 'বাংলাদেশ রেজিস্ট্রেশন আইন অনুযায়ী সংরক্ষিত'}
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
