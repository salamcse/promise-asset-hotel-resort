'use client';
import React, { useState } from 'react';
import { 
  ChevronDown 
} from 'lucide-react';
import { Language } from '../types';

interface FaqSectionProps {
  language: Language;
  onOpenAiAdvisor?: () => void;
}

interface FaqItemData {
  id: string;
  questionEn: string;
  questionBn: string;
  answerEn: string;
  answerBn: string;
}

export const FaqSection: React.FC<FaqSectionProps> = ({
  language,
  onOpenAiAdvisor
}) => {
  const isEn = language === 'en';
  const [openId, setOpenId] = useState<string | null>(null);

  const faqItems: FaqItemData[] = [
    {
      id: "faq_1",
      questionEn: "How is the land ownership registered and transferred to the shareholder?",
      questionBn: "শেয়ারহোল্ডারের নামে জমির মালিকানা কীভাবে রেজিস্ট্রি ও হস্তান্তর হয়?",
      answerEn: "Every investor receives a legally binding, government-registered Sub-Registry Sale Deed (সাফ-কবলা দলিল) with specific CS, SA, RS, and BS Khatian allotment directly in their name, followed by registered mutation and Power of Attorney.",
      answerBn: "প্রত্যেক বিনিয়োগকারীর নামে সরকারি সাব-রেজিস্ট্রি অফিসে সরাসরি সিএস, এসএ, আরএস ও বিএস খতিয়ান অনুযায়ী নির্দিষ্ট জমির অংশ সাফ-কবলা দলিলের মাধ্যমে ১০০% নিষ্কণ্টক রেজিস্ট্রি ও নামজারি সম্পন্ন করা হয়।"
    },
    {
      id: "faq_2",
      questionEn: "How does the guaranteed monthly cash return benefit work during development?",
      questionBn: "উন্নয়ন চলাকালীন সময়ে প্রতি মাসের নিশ্চিত ক্যাশ রিটার্ন কীভাবে কাজ করে?",
      answerEn: "Under the institutional 30:70 development model, the developer monetizes construction share allocations to disburse fixed monthly development benefits (e.g. ৳62,500/month for Prestige) via bank transfer for 24 continuous months.",
      answerBn: "প্রাতিষ্ঠানিক ৩০:৭০ ডেভেলপমেন্ট মডেলে কনস্ট্রাকশন শেয়ার বরাদ্দের বাণিজ্যিক রাজস্ব থেকে পরবর্তী টানা ২৪ মাস নিয়মিত মাসিক ব্যাংক ট্রান্সফারের মাধ্যমে নির্দিষ্ট ডেভেলপমেন্ট বেনিফিট প্রদান করা হয়।"
    },
    {
      id: "faq_3",
      questionEn: "What returns can I expect after commercial operations commence?",
      questionBn: "বাণিজ্যিক কার্যক্রম শুরু হওয়ার পর আমি কী ধরনের লভ্যাংশ পাব?",
      answerEn: "Upon grand opening, 70% of the entire resort's net operating profits (from luxury rooms, restaurants, water parks, convention banquets, and marine marina) is distributed pro-rata among shareholders as lifetime annual dividends.",
      answerBn: "রিসোর্ট চালুর পর হোটেল রুম, রেস্তোরাঁ, কনভেনশন হল, ওয়াটার পার্ক ও মেরিনার মোট পরিচালন মুনাফার ৭০% নিট লভ্যাংশ আজীবন নিয়মতান্ত্রিকভাবে শেয়ারহোল্ডারদের মধ্যে বণ্টন করা হয়।"
    },
    {
      id: "faq_4",
      questionEn: "How do I avail my annual complimentary free luxury stays?",
      questionBn: "বাৎসরিক ফ্রি লাক্সারি রিসোর্ট স্টে সুবিধা কীভাবে উপভোগ করব?",
      answerEn: "Shareholders get a dedicated VIP concierge reservation desk. Simply notify your preferred vacation dates at least 15 days prior (30 days during national peak holidays) to enjoy your 3 Days / 2 Nights luxury stay at zero room tariff.",
      answerBn: "শেয়ারহোল্ডারদের জন্য রয়েছে ভিআইপি রিজার্ভেশন হটলাইন। পিক সিজনের ৩০ দিন আগে অথবা সাধারণ সময়ে ১৫ দিন আগে জানালেই আপনার বাৎসরিক ৩ দিন ২ রাত সম্পূর্ণ রুম চার্জ ফ্রি স্টে বরাদ্দ করা হবে।"
    },
    {
      id: "faq_5",
      questionEn: "Can my family members or friends use my annual complimentary stays?",
      questionBn: "আমার পরিবারের সদস্য বা বন্ধুরা কি আমার ফ্রি থাকার সুবিধা ব্যবহার করতে পারবে?",
      answerEn: "Yes. As a registered shareholder, you can officially authorize your family members or close friends to enjoy your allotted annual complimentary stay vouchers with full VIP hospitality check-in privileges.",
      answerBn: "হ্যাঁ, নিশ্চয়ই! রেজিস্টার্ড শেয়ারহোল্ডার হিসেবে আপনি আপনার পরিবারের সদস্য বা বন্ধুদের নামে অথরাইজেশন লেটার দিয়ে এই ফ্রি স্টে ভাউচার ও ভিআইপি মেম্বারশিপ প্রিভিলেজ হস্তান্তর করতে পারেন।"
    },
    {
      id: "faq_6",
      questionEn: "Can I sell, gift, or transfer my resort share in the future?",
      questionBn: "ভবিষ্যতে কি আমি আমার জমি ও শেয়ার বিক্রি, উপহার বা হস্তান্তর করতে পারব?",
      answerEn: "Absolutely. Holding registered freehold land title and Construction Share Units gives you complete freedom to resell at prevailing market appreciation, gift to loved ones, or pass down generations as an inheritable asset.",
      answerBn: "অবশ্যই। রেজিস্ট্রিকৃত জমির দলিল ও কনস্ট্রাকশন শেয়ার ইউনিট থাকায় আপনি যেকোনো সময় বাজারমূল্যে এটি বিক্রয়, দান, বন্ধক বা উত্তরাধিকারীদের নামে ওয়ারিশান সূত্রে হস্তান্তর করতে পারেন।"
    }
  ];

  const toggleAccordion = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section 
      id="faq_section" 
      className="py-8 bg-[#FAF8F5] border-b border-gray-200/80 scroll-mt-12 font-sans relative overflow-hidden"
    >
      <div id="faq" className="scroll-mt-12" />

      {/* Elegant Golden Dot Grid Background (Matching Investment Packages Section) */}
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
        
        {/* Section Header (Centered at the top) */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
          <div className="inline-flex items-center justify-center gap-2 mb-2">
            <span className="w-8 h-[1px] bg-[#E5C378]" />
            <p className="font-sans text-xs tracking-[0.2em] uppercase text-[#E5C378] font-bold text-center">
              {isEn ? "TRANSPARENCY & CLARITY" : "স্বচ্ছ তথ্য ও সাধারণ জিজ্ঞাসা"}
            </p>
            <span className="w-8 h-[1px] bg-[#E5C378]" />
          </div>
          
          <h2 className="font-sans text-2xl sm:text-3xl font-bold text-[#0B1B3D] mb-2 tracking-tight text-center">
            {isEn ? "FAQs" : "সাধারণ প্রশ্নাবলি"}
          </h2>
          
          <p className="font-sans text-xs sm:text-sm text-[#4B5563] leading-normal text-center max-w-xl mx-auto">
            {isEn
              ? "Key facts on freehold land deeds, development, and dividend returns."
              : "সাফ-কবলা দলিল ও লভ্যাংশ বণ্টন সম্পর্কিত প্রয়োজনীয় তথ্যাবলি।"}
          </p>
        </div>

        {/* 2-Column Exact Square Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
          {faqItems.map((item, idx) => {
            const isOpen = openId === item.id;
            const questionNum = `0${idx + 1}`;
            return (
              <div
                key={item.id}
                className="bg-white border border-gray-200 rounded-none shadow-xs hover:border-[#E5C378] transition-all duration-300 overflow-hidden flex flex-col justify-start text-left"
              >
                {/* Clickable Question */}
                <button
                  onClick={() => toggleAccordion(item.id)}
                  className="w-full p-6 text-left flex items-start justify-between gap-4 cursor-pointer group bg-white"
                >
                  <div className="flex items-start gap-3.5 flex-1 min-w-0 text-left">
                    <span className="min-w-[28px] h-6 px-1.5 rounded-none bg-[#0B1B3D] text-[#E5C378] text-xs font-mono font-bold flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-[#E5C378] group-hover:text-[#0B1B3D] transition-colors">
                      {questionNum}
                    </span>
                    <h3 className="font-sans text-sm font-bold text-[#0B1B3D] leading-snug group-hover:text-[#E5C378] transition-colors text-left">
                      {isEn ? item.questionEn : item.questionBn}
                    </h3>
                  </div>

                  <div className="w-6 h-6 rounded-none border border-gray-200 flex items-center justify-center text-[#0B1B3D] shrink-0 mt-0.5 group-hover:border-[#E5C378] group-hover:text-[#E5C378] transition-colors">
                    <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isOpen ? 'rotate-180 text-[#E5C378]' : ''}`} />
                  </div>
                </button>

                {/* Collapsible Answer */}
                {isOpen && (
                  <div className="px-6 pb-6 pt-2 text-xs sm:text-sm text-[#4B5563] font-sans border-t border-gray-100 bg-[#FDFBF7] leading-relaxed text-left">
                    <p>{isEn ? item.answerEn : item.answerBn}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
