'use client';
import React from 'react';
import { 
  Building2, 
  KeyRound, 
  CheckCircle2, 
  ShieldCheck, 
  TrendingUp, 
  FileCheck2, 
  Crown 
} from 'lucide-react';
import { Language } from '../types';

interface InvestmentOpportunitiesSectionProps {
  language: Language;
  onOpenBooking: () => void;
}

export const InvestmentOpportunitiesSection: React.FC<InvestmentOpportunitiesSectionProps> = ({
  language,
  onOpenBooking
}) => {
  const isEn = language === 'en';

  return (
    <section 
      id="investment_opportunities" 
      className="py-16 lg:py-24 bg-gradient-to-b from-[#F8F9FB] via-white to-[#F8F9FB] border-b border-gray-200/80 scroll-mt-12 font-sans relative overflow-hidden"
    >
      {/* Background Subtle Ambient Glows */}
      <div className="absolute top-10 left-1/4 w-96 h-96 bg-[#E5C378]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-[#0B1B3D]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header (Left-aligned, Refined sizes) */}
        <div className="max-w-3xl mb-12 text-left">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-8 h-[1px] bg-[#E5C378]" />
            <p className="font-sans text-xs tracking-[0.2em] uppercase text-[#E5C378] font-bold text-left">
              {isEn ? "DUAL ASSET ARCHITECTURE" : "দ্বৈত বিনিয়োগ মডেল"}
            </p>
          </div>
          
          <h2 className="font-sans text-3xl lg:text-4xl font-bold text-[#0B1B3D] tracking-tight mb-4 text-left">
            {isEn ? "Investment Opportunities" : "বিনিয়োগের দুটি শক্তিশালী স্তম্ভ"}
          </h2>
          
          <p className="font-sans text-sm sm:text-base text-[#4B5563] leading-relaxed max-w-2xl text-left">
            {isEn 
              ? "A synchronized investment model combining tangible freehold land deed ownership with commercial hospitality profit rights."
              : "একই সাথে নিষ্কণ্টক জমির শতভাগ স্থায়ী মালিকানা এবং ৫-তারকা আন্তর্জাতিক রিসোর্টের আজীবন বাণিজ্যিক মুনাফার অনন্য মেলবন্ধন।"}
          </p>
        </div>

        {/* 2-Column Large Square Cards with Glassmorphism Effect */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          
          {/* Card 1: Resort Land Ownership (Frosted Glass Effect) */}
          <div className="relative rounded-none p-8 sm:p-10 flex flex-col justify-between bg-white/75 backdrop-blur-xl border border-white/90 shadow-[0_20px_45px_rgba(11,27,61,0.07)] hover:shadow-[0_30px_60px_rgba(11,27,61,0.14)] hover:border-[#0B1B3D] hover:bg-white/95 hover:-translate-y-2 transition-all duration-500 ease-out group text-left overflow-hidden">
            
            {/* Specular Top Light Border for Real Glass Illusion */}
            <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-[#0B1B3D]/30 to-transparent group-hover:via-[#E5C378] transition-all duration-500" />
            
            {/* Subtle Glass Reflection Angle */}
            <div className="absolute -right-20 -top-20 w-80 h-80 bg-gradient-to-br from-white/60 via-[#0B1B3D]/[0.03] to-transparent rounded-full blur-2xl pointer-events-none group-hover:scale-110 transition-transform duration-700" />

            <div className="relative z-10">
              <div className="flex items-center justify-between mb-6">
                <div className="w-13 h-13 rounded-none bg-[#0B1B3D] text-[#E5C378] flex items-center justify-center border border-[#E5C378]/40 shadow-sm group-hover:bg-[#E5C378] group-hover:text-[#0B1B3D] group-hover:shadow-[0_0_25px_rgba(229,195,120,0.5)] transition-all duration-300">
                  <FileCheck2 className="w-6 h-6 stroke-[2] group-hover:scale-110 transition-transform duration-300" />
                </div>
                <span className="px-3.5 py-1 bg-white/90 backdrop-blur-md border border-gray-200/90 text-xs font-bold uppercase tracking-widest text-[#0B1B3D] shadow-xs">
                  {isEn ? "Pillar 01" : "স্তম্ভ ০১"}
                </span>
              </div>

              <h3 className="font-sans text-2xl lg:text-3xl font-bold text-[#0B1B3D] mb-3 text-left">
                {isEn ? "Resort Land Ownership" : "রিসোর্ট ল্যান্ডের স্থায়ী মালিকানা"}
              </h3>

              <p className="font-sans text-sm text-[#4B5563] leading-relaxed mb-6 text-left">
                {isEn 
                  ? "Direct sub-registry deed registration of high-value coastal land along Marine Drive in Cox's Bazar with full mutation and inheritable title."
                  : "কক্সবাজার মেরিন ড্রাইভের মতো প্রাইম কোস্টাল জোনে আপনার নিজ নামে সরকারি সাব-রেজিস্ট্রির মাধ্যমে সাফ-কবলা দলিল ও নামজারি।"
                }
              </p>

              <div className="space-y-3 border-t border-gray-200/80 pt-6 mb-8">
                {[
                  isEn ? "100% Freehold Sub-Registry Deed (সাফ-কবলা দলিল)" : "সরকারি সাব-রেজিস্ট্রি অফিসে শতভাগ সাফ-কবলা দলিল",
                  isEn ? "Individual land share with CS, SA, RS, BS records" : "সিএস, এসএ, আরএস ও বিএস খতিয়ান অনুযায়ী সুনির্দিষ্ট অংশ",
                  isEn ? "Tri-party development contract backed by judicial stamps" : "জুডিশিয়াল স্ট্যাম্পে দ্বিপাক্ষিক ও ত্রিপাক্ষিক আইনি চুক্তি",
                  isEn ? "Permanent inheritable asset transferable to next generation" : "উত্তরাধিকার সূত্রে হস্তান্তরযোগ্য ও চিরস্থায়ী স্থাবর সম্পদ"
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#111827] font-medium">
                    <CheckCircle2 className="w-4 h-4 text-[#159E42] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative z-10">
              <button
                onClick={onOpenBooking}
                className="w-full rounded-none px-6 py-3.5 text-sm font-semibold tracking-wider transition-all duration-300 relative overflow-hidden group bg-[#0B1B3D] text-white hover:bg-[#E5C378] hover:text-[#0B1B3D] hover:shadow-[0_0_20px_rgba(229,195,120,0.4)] cursor-pointer flex items-center justify-center gap-2 shadow-sm"
              >
                <span>{isEn ? "Inquire for Land Share" : "ল্যান্ড শেয়ারের বিস্তারিত দেখুন"}</span>
              </button>
            </div>
          </div>

          {/* Card 2: Project Share & CSU (Frosted Glass with Golden Ambient Highlight) */}
          <div className="relative rounded-none p-8 sm:p-10 flex flex-col justify-between bg-white/75 backdrop-blur-xl border border-white/90 shadow-[0_20px_45px_rgba(11,27,61,0.07)] hover:shadow-[0_30px_60px_rgba(229,195,120,0.22)] hover:border-[#E5C378] hover:bg-white/95 hover:-translate-y-2 transition-all duration-500 ease-out group text-left overflow-hidden">
            
            {/* Specular Top Light Border with Gold Hue */}
            <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-[#E5C378]/60 to-transparent group-hover:via-[#E5C378] transition-all duration-500" />
            
            {/* Subtle Glass Reflection Angle */}
            <div className="absolute -right-20 -top-20 w-80 h-80 bg-gradient-to-br from-white/60 via-[#E5C378]/[0.05] to-transparent rounded-full blur-2xl pointer-events-none group-hover:scale-110 transition-transform duration-700" />

            <div className="relative z-10">
              <div className="flex items-center justify-between mb-6">
                <div className="w-13 h-13 rounded-none bg-[#0B1B3D] text-[#E5C378] flex items-center justify-center border border-[#E5C378]/40 shadow-sm group-hover:bg-[#E5C378] group-hover:text-[#0B1B3D] group-hover:shadow-[0_0_25px_rgba(229,195,120,0.6)] transition-all duration-300">
                  <Crown className="w-6 h-6 stroke-[2] group-hover:scale-110 transition-transform duration-300" />
                </div>
                <span className="px-3.5 py-1 bg-white/90 backdrop-blur-md border border-[#E5C378]/40 text-xs font-bold uppercase tracking-widest text-[#E5C378] shadow-xs">
                  {isEn ? "Pillar 02" : "স্তম্ভ ০২"}
                </span>
              </div>

              <h3 className="font-sans text-2xl lg:text-3xl font-bold text-[#0B1B3D] mb-3 text-left">
                {isEn ? "Project Share & CSU Allocation" : "প্রজেক্ট শেয়ার ও সিএসইউ বরাদ্দ"}
              </h3>

              <p className="font-sans text-sm text-[#4B5563] leading-relaxed mb-6 text-left">
                {isEn 
                  ? "Construction Share Units (CSU) in the 5-star resort infrastructure, entitling you to annual complimentary stays and 70% net profit dividends."
                  : "আন্তর্জাতিক ৫-তারকা রিসোর্টের কনস্ট্রাকশন শেয়ার ইউনিট (CSU) এবং সারাজীবন রিসোর্টের ৭০% নিট বাণিজ্যিক মুনাফার অংশীদারিত্ব।"
                }
              </p>

              <div className="space-y-3 border-t border-gray-200/80 pt-6 mb-8">
                {[
                  isEn ? "Guaranteed CSU allotment in 5-star hotel infrastructure" : "৫-তারকা হোটেল ও রিসোর্টে সুনির্দিষ্ট সিএসইউ বরাদ্দ",
                  isEn ? "Annual 3 Days / 2 Nights complimentary luxury suite stays" : "প্রতি বছর ৩ দিন ২ রাত সম্পূর্ণ বিনামূল্যে থাকার সুবিধা",
                  isEn ? "70% lifetime share of total resort net operating profits" : "হোটেল ও বিনোদন সুবিধাদি থেকে ৭০% নিট বার্ষিক লভ্যাংশ",
                  isEn ? "Founding VIP Member Card with 15%-25% amenity privileges" : "গোল্ড মেম্বারশিপ কার্ড ও রিসোর্টের সকল সুবিধায় আকর্ষণীয় ছাড়"
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#111827] font-medium">
                    <CheckCircle2 className="w-4 h-4 text-[#E5C378] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative z-10">
              <button
                onClick={onOpenBooking}
                className="w-full rounded-none px-6 py-3.5 text-sm font-semibold tracking-wider transition-all duration-300 relative overflow-hidden group bg-[#E5C378] text-[#0B1B3D] hover:bg-[#0B1B3D] hover:text-white hover:shadow-[0_0_20px_rgba(229,195,120,0.4)] cursor-pointer flex items-center justify-center gap-2 shadow-sm"
              >
                <span>{isEn ? "Claim Project CSU Share" : "প্রজেক্ট সিএসইউ বুকিং করুন"}</span>
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
