'use client';
import React from 'react';
import { 
  FileCheck, 
  Building2, 
  TrendingUp, 
  Palmtree, 
  ShieldCheck, 
  Landmark
} from 'lucide-react';
import { Language } from '../types';

interface WhyInvestGlassmorphismSectionProps {
  language?: Language;
  onOpenBooking?: () => void;
}

export const WhyInvestGlassmorphismSection: React.FC<WhyInvestGlassmorphismSectionProps> = ({
  language = 'en',
  onOpenBooking
}) => {
  const isEn = language === 'en';

  const pillars = [
    {
      id: "why_1_ownership",
      icon: FileCheck,
      number: "01",
      titleEn: "100% Land Ownership",
      titleBn: "১০০% সাফ-কবলা মালিকানা",
      descEn: "Govt-registered freehold title deed directly in your name with mutation & inheritance rights.",
      descBn: "সরকারি সাব-রেজিস্ট্রি অফিসে নিজ নামে ১০০% নিষ্কণ্টক সাফ-কবলা দলিল ও নামজারি।"
    },
    {
      id: "why_2_profit_sharing",
      icon: TrendingUp,
      number: "02",
      titleEn: "70% Net Profit Share",
      titleBn: "৭০% নিট মুনাফা বণ্টন",
      descEn: "High-yield annual dividends from hotel rooms, banquet events, and resort revenue streams.",
      descBn: "রিসোর্টের কক্ষ ও বাণিজ্যিক আয়ের ৭০% সরাসরি শেয়ারহোল্ডারদের মধ্যে প্রতি বছর বণ্টিত।"
    },
    {
      id: "why_3_dev_responsibility",
      icon: Building2,
      number: "03",
      titleEn: "Zero Dev Liability",
      titleBn: "১০০% উন্নয়ন দায়ভার",
      descEn: "Promise Assets Ltd. funds all master planning, engineering, and construction costs.",
      descBn: "সম্পূর্ণ প্রকল্পের অবকাঠামো উন্নয়ন ও নির্মাণের শতভাগ ব্যয় ডেভেলপার কোম্পানি বহন করবে।"
    },
    {
      id: "why_4_prime_location",
      icon: Landmark,
      number: "04",
      titleEn: "Prime Marine Drive Corridor",
      titleBn: "প্রাইম মেরিন ড্রাইভ করিডোর",
      descEn: "Unbeatable capital growth on the world's longest marine drive facing the Bay of Bengal.",
      descBn: "ইনানী সৈকতের প্রধান পর্যটন করিডোরে অবস্থিত হওয়ায় জমির বাণিজ্যিক মূল্যায়ন দ্রুত বর্ধনশীল।"
    },
    {
      id: "why_5_resort_lifestyle",
      icon: Palmtree,
      number: "05",
      titleEn: "VIP Resort Privileges",
      titleBn: "ভিআইপি রিসোর্ট লাইফস্টাইল",
      descEn: "Annual complimentary luxury suite stays plus 15%–25% VIP discounts on dining & spa.",
      descBn: "প্রতি বছর ফ্রি ভিআইপি স্টে এবং রিসোর্টের রেস্তোরাঁ ও অ্যামেনিটিজে আকর্ষণীয় ছাড়।"
    },
    {
      id: "why_6_legal_safety",
      icon: ShieldCheck,
      number: "06",
      titleEn: "Supreme Court Vetted Safety",
      titleBn: "আইনি শতভাগ নিরাপত্তা",
      descEn: "Fully vetted CS, SA, RS, and BS khatians with legal documentation drafted by top jurists.",
      descBn: "সিএস, এসএ, আরএস ও বিএস খতিয়ান যাচাইকৃত এবং সুপ্রিম কোর্টের শীর্ষ আইনজীবীদের ড্রাফটিং।"
    }
  ];

  return (
    <section 
      id="why_invest" 
      className="relative w-full py-14 lg:py-20 border-b border-white/10 scroll-mt-20 font-sans overflow-hidden bg-[#0B1B3D]"
    >
      <div id="why-invest" className="scroll-mt-20" />

      {/* Convention Center Image as Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="/Convention Center.png"
          alt="The Promise Grand Convention Center"
          className="w-full h-full object-cover object-center filter brightness-[0.78] contrast-[1.05]"
          referrerPolicy="no-referrer"
        />
        {/* Balanced luxury overlay: blends top and bottom seamlessly while letting the convention center architectural visual shine through clearly */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B1B3D]/70 via-[#070E1E]/35 to-[#0B1B3D]/80" />
      </div>

      {/* Subtle Ambient Mesh Highlight */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff04_1px,transparent_1px),linear-gradient(to_bottom,#ffffff04_1px,transparent_1px)] bg-[size:3rem_3rem] pointer-events-none z-[1]" />
      <div className="absolute top-0 right-1/4 w-80 h-80 bg-[#E5C378]/10 rounded-full blur-[100px] pointer-events-none z-[1]" />

      <div className="relative z-10 max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header (Centered at the top) */}
        <div className="max-w-2xl mx-auto mb-10 text-center">
          <div className="inline-flex items-center justify-center gap-2 mb-3">
            <span className="w-8 h-[1px] bg-[#E5C378]" />
            <p className="font-sans text-xs tracking-[0.2em] uppercase text-[#E5C378] font-bold text-center">
              {isEn ? "THE STRATEGIC ADVANTAGE" : "কৌশলগত সুবিধাসমূহ"}
            </p>
            <span className="w-8 h-[1px] bg-[#E5C378]" />
          </div>

          <h2 className="font-sans text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight leading-tight mb-2 text-center">
            {isEn ? "Why Invest?" : "কেন বিনিয়োগ করবেন?"}
          </h2>

          <p className="font-sans text-xs sm:text-sm text-gray-300 leading-normal text-center max-w-xl mx-auto">
            {isEn 
              ? "Permanent freehold land security with high resort returns and capital growth."
              : "স্থায়ী জমির সাফ-কবলা দলিল ও পাঁচ তারকা রিসোর্টের আজীবন রিটার্ন।"}
          </p>
        </div>

        {/* Compact 6-Card Grid (3 columns on desktop, 2 on tablet, 1 on mobile) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
          {pillars.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                id={item.id}
                className="relative bg-[#070E1E]/50 hover:bg-[#070E1E]/75 backdrop-blur-md border border-white/20 hover:border-[#E5C378] p-4 sm:p-5 transition-all duration-300 group text-left overflow-hidden shadow-sm hover:shadow-[0_4px_25px_rgba(229,195,120,0.2)] flex items-center gap-4"
              >
                {/* Active Top Accent Line */}
                <div className="absolute top-0 inset-x-0 h-[2px] bg-transparent group-hover:bg-[#E5C378] transition-colors duration-300" />

                {/* Left: Icon Box */}
                <div className="w-10 h-10 shrink-0 bg-[#070E1E] border border-white/20 flex items-center justify-center text-[#E5C378] group-hover:border-[#E5C378] group-hover:bg-[#E5C378] group-hover:text-[#0B1B3D] transition-colors duration-300">
                  <Icon className="w-5 h-5" />
                </div>

                {/* Right: Content Title */}
                <h3 className="font-sans text-base sm:text-lg font-bold text-white leading-snug group-hover:text-[#E5C378] transition-colors text-left">
                  {isEn ? item.titleEn : item.titleBn}
                </h3>
              </div>
            );
          })}
        </div>

        {/* Call to Action: Ready to Invest */}
        <div className="mt-10 sm:mt-12 text-center flex justify-center">
          <button
            id="btn-ready-to-invest"
            onClick={() => {
              if (onOpenBooking) {
                onOpenBooking();
              } else {
                const target = document.getElementById('investment-packages') || document.getElementById('investment_packages');
                if (target) {
                  target.scrollIntoView({ behavior: 'smooth' });
                }
              }
            }}
            className="px-8 sm:px-10 py-3.5 sm:py-4 bg-[#E5C378] text-[#0B1B3D] hover:bg-white hover:text-[#0B1B3D] font-sans text-xs sm:text-sm font-bold uppercase tracking-[0.2em] rounded-none transition-all duration-300 shadow-[0_4px_20px_rgba(229,195,120,0.3)] hover:shadow-[0_10px_30px_rgba(255,255,255,0.4)] cursor-pointer inline-flex items-center gap-2.5 group"
          >
            <span>{isEn ? "Ready to Invest" : "বিনিয়োগের জন্য প্রস্তুত"}</span>
          </button>
        </div>

      </div>
    </section>
  );
};

