'use client';
import React from 'react';
import { 
  Landmark, 
  Scale, 
  HardHat,
  KeyRound
} from 'lucide-react';
import { Language } from '../types';

interface LegalSafetySectionProps {
  language: Language;
  onOpenBooking?: () => void;
}

export const LegalSafetySection: React.FC<LegalSafetySectionProps> = ({
  language
}) => {
  const isEn = language === 'en';

  const steps = [
    {
      num: "01",
      icon: Landmark,
      titleEn: "Land Purchase & Deed",
      titleBn: "জমি ক্রয় ও সাফ-কবলা দলিল",
      tagEn: "Step 1",
      tagBn: "ধাপ ১",
      descEn: "Select your desired land share size and receive a 100% government-registered freehold sub-registry deed directly in your legal name.",
      descBn: "প্যাকেজ নির্বাচন করে সরকারি সাব-রেজিস্ট্রি অফিসের মাধ্যমে নিজস্ব নামে শতভাগ নিষ্কণ্টক সাফ-কবলা দলিল সম্পাদন করুন।"
    },
    {
      num: "02",
      icon: Scale,
      titleEn: "Legal Agreements (30:70)",
      titleBn: "দ্বিপাক্ষিক চুক্তি (৩০:৭০)",
      tagEn: "Step 2",
      tagBn: "ধাপ ২",
      descEn: "Execute a binding judicial contract securing 30% construction share allocation and 70% net annual resort operating profit rights.",
      descBn: "৩০০ টাকার জুডিশিয়াল স্ট্যাম্পে ৩০% কনস্ট্রাকশন শেয়ার বরাদ্দ এবং ৭০% রিসোর্ট পরিচালন মুনাফা বণ্টনের দ্বিপাক্ষিক চুক্তিপত্র স্বাক্ষর।"
    },
    {
      num: "03",
      icon: HardHat,
      titleEn: "100% Development",
      titleBn: "১০০% কোম্পানির উন্নয়ন",
      tagEn: "Step 3",
      tagBn: "ধাপ ৩",
      descEn: "Promise Assets Ltd. completes 100% of engineering, architecture, and luxury resort infrastructure with zero additional costs.",
      descBn: "প্রমিজ অ্যাসেটস লিমিটেড সম্পূর্ণ নিজস্ব অর্থায়ন ও দায়িত্বে আধুনিক ৫-তারকা রিসোর্টের যাবতীয় অবকাঠামো নির্মাণ ও উন্নয়ন সম্পন্ন করবে।"
    },
    {
      num: "04",
      icon: KeyRound,
      titleEn: "Handover & Returns",
      titleBn: "হস্তান্তর ও আজীবন লভ্যাংশ",
      tagEn: "Step 4",
      tagBn: "ধাপ ৪",
      descEn: "Receive guaranteed CSU unit allotment, VIP membership card, annual 3D/2N free stays, and lifetime annual profit dividends.",
      descBn: "সিএসইউ ইউনিট সার্টিফিকেট, বাৎসরিক ৩ দিন ২ রাত ফ্রি ভিআইপি স্টে পাস এবং আজীবন লাভজনক মুনাফা শেয়ারিং প্রাপ্তি।"
    }
  ];

  return (
    <section 
      id="ownership_legal_process" 
      className="py-8 bg-[#F8F9FA] border-b border-gray-200 scroll-mt-20 font-sans relative overflow-hidden"
    >
      <div id="legal" className="scroll-mt-20" />

      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header (Centered at the top) */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
          <div className="inline-flex items-center justify-center gap-2 mb-2">
            <span className="w-8 h-[1px] bg-[#E5C378]" />
            <p className="font-sans text-xs tracking-[0.2em] uppercase text-[#E5C378] font-bold text-center">
              {isEn ? "STEP-BY-STEP PROCESS" : "মালিকানা ও আইনি প্রক্রিয়া"}
            </p>
            <span className="w-8 h-[1px] bg-[#E5C378]" />
          </div>

          <h2 className="font-sans text-2xl sm:text-3xl font-bold text-[#0B1B3D] mb-2 tracking-tight text-center">
            {isEn ? "Legal Process" : "আইনি প্রক্রিয়া"}
          </h2>

          <p className="font-sans text-xs sm:text-sm text-[#4B5563] leading-normal text-center max-w-xl mx-auto">
            {isEn
              ? "Transparent 4-step process ensuring 100% freehold title security."
              : "৪টি স্বচ্ছ ধাপে জমির নিষ্কণ্টক আইনি মালিকানা ও অংশীদারিত্ব।"}
          </p>
        </div>

        {/* 4 Linear Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-12">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div 
                key={idx}
                className="bg-white border border-gray-200 rounded-none p-6 lg:p-7 flex flex-col justify-between hover:border-[#E5C378] hover:shadow-[0_16px_35px_rgba(229,195,120,0.15)] hover:-translate-y-1.5 transition-all duration-300 ease-out group text-left relative"
              >
                {/* Step Top Bar */}
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-11 h-11 rounded-none bg-[#0B1B3D] text-[#E5C378] flex items-center justify-center border border-[#E5C378]/30 group-hover:bg-[#E5C378] group-hover:text-[#0B1B3D] group-hover:shadow-[0_0_15px_rgba(229,195,120,0.4)] transition-all duration-300">
                      <Icon className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-gray-400">
                      {isEn ? step.tagEn : step.tagBn}
                    </span>
                  </div>

                  <h3 className="font-sans text-lg sm:text-xl font-bold text-[#0B1B3D] mb-2.5 leading-snug text-left group-hover:text-[#E5C378] transition-colors">
                    {isEn ? step.titleEn : step.titleBn}
                  </h3>

                  <p className="font-sans text-xs sm:text-[13px] text-[#4B5563] leading-relaxed text-left">
                    {isEn ? step.descEn : step.descBn}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
