'use client';
import React from 'react';
import { 
  ShieldCheck, 
  TrendingUp, 
  Palmtree, 
  Building, 
  Sparkles, 
  MapPin, 
  Award, 
  Coins, 
  CalendarCheck,
  CheckCircle2
} from 'lucide-react';
import { Language, Currency } from '../types';
import { PROJECT_STATS, USD_EXCHANGE_RATE } from '../data/projectData';

interface HeroSectionProps {
  language: Language;
  currency: Currency;
  onOpenBooking: () => void;
  onOpenAiAdvisor: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  language,
  currency,
  onOpenBooking,
  onOpenAiAdvisor
}) => {
  const isEn = language === 'en';

  const formatMoney = (bdt: number) => {
    if (currency === 'USD') {
      return `$ ${(bdt / USD_EXCHANGE_RATE).toLocaleString(undefined, { maximumFractionDigits: 0 })}`;
    }
    return `৳ ${bdt.toLocaleString('en-IN')}`;
  };

  return (
    <section 
      id="overview" 
      className="relative h-[850px] flex items-center justify-center pt-20 pb-12 overflow-hidden"
      style={{ height: '850px', minHeight: '850px' }}
    >
      {/* Background Graphic Elements */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=2000&q=85"
          alt="The Promise Hotel and Resort Beachfront"
          className="w-full h-full object-cover object-center opacity-25 scale-105 transform filter brightness-90"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-slate-950/90" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-[450px] h-[450px] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Developer Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-amber-500/30 shadow-lg shadow-amber-500/10 mb-6 backdrop-blur-md">
          <Award className="w-4 h-4 text-amber-400" />
          <span className="text-xs font-semibold uppercase tracking-widest text-slate-300">
            {isEn ? 'Official Project Presentation • ' : 'অফিসিয়াল প্রকল্প উপস্থাপনা • '}
            <strong className="text-amber-400 font-bold">Promise Assets Ltd.</strong>
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="font-sans text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight max-w-5xl mx-auto mb-4">
          {isEn ? (
            <>
              Bangladesh's Next <span className="gold-gradient-text">Iconic Luxury Resort</span> & Real Estate Asset
            </>
          ) : (
            <>
              বাংলাদেশের পরবর্তী <span className="gold-gradient-text">আইকনিক লাক্সারি রিসোর্ট</span> ও নিরাপদ বিনিয়োগ
            </>
          )}
        </h1>

        {/* Tagline */}
        <p className="text-base sm:text-xl font-medium text-amber-200/90 max-w-3xl mx-auto mb-6 tracking-wide">
          {isEn 
            ? "OWN LAND. BUILD WEALTH. ENJOY RESORT LIFESTYLE."
            : "নিজের জমি, নিশ্চিত রিটার্ন, রিসোর্ট লাইফস্টাইল — সবকিছু একসাথে"}
        </p>

        {/* Sub-description */}
        <p className="text-sm sm:text-base text-slate-300 max-w-3xl mx-auto mb-10 leading-relaxed">
          {isEn 
            ? "A master-planned 125 Bigha eco-luxury beachfront destination on Marine Drive. Acquire registered land title with guaranteed monthly development benefits and lifetime 5-star hotel operational profit sharing."
            : "মেরিন ড্রাইভের কোল ঘেঁষে ১২৫ বিঘা জমিতে নির্মিতব্য আন্তর্জাতিক মানের ইকো-লাক্সারি রিসোর্ট। নিজের নামে ১০০% নিবন্ধিত জমির মালিকানা, ২৪ মাসের নিয়মিত ডেভেলপমেন্ট বেনিফিট এবং আজীবন ৫-তারকা রিসোর্টের লভ্যাংশ।"}
        </p>

        {/* Call to Actions */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
          <button
            id="hero-book-btn"
            onClick={onOpenBooking}
            className="flex items-center gap-2.5 px-7 py-3.5 rounded-xl gold-gradient-bg text-slate-950 font-extrabold text-sm sm:text-base shadow-xl shadow-amber-500/25 hover:shadow-amber-500/50 hover:scale-105 active:scale-95 transition-all cursor-pointer"
          >
            <Sparkles className="w-5 h-5 fill-slate-950" />
            <span>{isEn ? 'Explore Investment Packages' : 'বিনিয়োগ প্যাকেজসমূহ দেখুন'}</span>
          </button>

          <a
            id="hero-calculator-btn"
            href="#calculator"
            className="flex items-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 border border-slate-700 hover:border-amber-500/50 text-slate-200 font-semibold text-sm sm:text-base shadow-lg transition-all cursor-pointer"
          >
            <Coins className="w-5 h-5 text-amber-400" />
            <span>{isEn ? 'Calculate ROI & Cashflow' : 'আয় ও ক্যাশফ্লো হিসাব করুন'}</span>
          </a>

          <button
            id="hero-ai-btn"
            onClick={onOpenAiAdvisor}
            className="flex items-center gap-2 px-5 py-3.5 rounded-xl bg-indigo-950/80 hover:bg-indigo-900 border border-indigo-500/40 text-indigo-200 hover:text-white font-medium text-sm sm:text-base shadow-lg transition-all cursor-pointer"
          >
            <Sparkles className="w-4 h-4 text-indigo-400" />
            <span>{isEn ? 'Consult AI Advisor' : 'এআই উপদেষ্টার পরামর্শ নিন'}</span>
          </button>
        </div>

        {/* 4 Core Value Pillars (From PDF Page 1 & 31) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-6xl mx-auto mb-12">
          <div className="p-4 rounded-xl dark-card-glass flex flex-col items-center text-center transition-all hover:scale-[1.02]">
            <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center mb-2.5">
              <MapPin className="w-5 h-5 text-amber-400" />
            </div>
            <h3 className="text-xs sm:text-sm font-bold text-white mb-1">
              {isEn ? 'Prime Beachfront' : 'প্রাইম বিচ লোকেশন'}
            </h3>
            <p className="text-[11px] text-slate-400">
              {isEn ? 'Marine Drive Road, Bay of Bengal' : 'মেরিন ড্রাইভ রোড, বঙ্গোপসাগর'}
            </p>
          </div>

          <div className="p-4 rounded-xl dark-card-glass flex flex-col items-center text-center transition-all hover:scale-[1.02]">
            <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center mb-2.5">
              <TrendingUp className="w-5 h-5 text-emerald-400" />
            </div>
            <h3 className="text-xs sm:text-sm font-bold text-white mb-1">
              {isEn ? 'High Return Potential' : 'উচ্চ রিটার্ন সম্ভাবনা'}
            </h3>
            <p className="text-[11px] text-slate-400">
              {isEn ? 'Up to ৳ 62,500/mo payout for 24M' : '২৪ মাসে সর্বোচ্চ ৳ ৬২,৫০০/মাস আয়'}
            </p>
          </div>

          <div className="p-4 rounded-xl dark-card-glass flex flex-col items-center text-center transition-all hover:scale-[1.02]">
            <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/30 flex items-center justify-center mb-2.5">
              <Building className="w-5 h-5 text-blue-400" />
            </div>
            <h3 className="text-xs sm:text-sm font-bold text-white mb-1">
              {isEn ? 'World-Class Amenities' : 'বিশ্বমানের সুযোগ-সুবিধা'}
            </h3>
            <p className="text-[11px] text-slate-400">
              {isEn ? '125 Bigha Master Development' : '১২৫ বিঘার আন্তর্জাতিক মেগা প্রকল্প'}
            </p>
          </div>

          <div className="p-4 rounded-xl dark-card-glass flex flex-col items-center text-center transition-all hover:scale-[1.02]">
            <div className="w-10 h-10 rounded-lg bg-purple-500/10 border border-purple-500/30 flex items-center justify-center mb-2.5">
              <ShieldCheck className="w-5 h-5 text-purple-400" />
            </div>
            <h3 className="text-xs sm:text-sm font-bold text-white mb-1">
              {isEn ? 'Secure & Transparent' : 'নিরাপদ ও রেজিস্ট্রিকৃত'}
            </h3>
            <p className="text-[11px] text-slate-400">
              {isEn ? '100% Land Registered in Your Name' : 'নিজের নামে সরাসরি দলিল ও জমি রেজিস্ট্রি'}
            </p>
          </div>
        </div>

        {/* Quick Highlights Bar */}
        <div className="bg-gradient-to-r from-slate-900/90 via-slate-900/95 to-slate-900/90 border border-slate-800 rounded-2xl p-4 sm:p-6 max-w-5xl mx-auto shadow-2xl backdrop-blur-xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 divide-y md:divide-y-0 md:divide-x divide-slate-800/80">
            <div className="pt-2 md:pt-0 md:px-4 text-center">
              <div className="text-2xl sm:text-3xl font-extrabold text-amber-400">
                125 <span className="text-base text-slate-300 font-medium">Bigha</span>
              </div>
              <p className="text-xs text-slate-400 mt-0.5">
                {isEn ? 'Master Resort Land' : 'মোট মাস্টার প্ল্যান জমি'}
              </p>
            </div>

            <div className="pt-2 md:pt-0 md:px-4 text-center">
              <div className="text-2xl sm:text-3xl font-extrabold text-emerald-400">
                65% <span className="text-base text-slate-300 font-medium">Nature</span>
              </div>
              <p className="text-xs text-slate-400 mt-0.5">
                {isEn ? 'Green Zone & Water Bodies' : 'উন্মুক্ত সবুজ ও লেগুন এলাকা'}
              </p>
            </div>

            <div className="pt-2 md:pt-0 md:px-4 text-center">
              <div className="text-2xl sm:text-3xl font-extrabold text-blue-400">
                3D / 2N
              </div>
              <p className="text-xs text-slate-400 mt-0.5">
                {isEn ? 'Annual Free Stay with Family' : 'বার্ষিক ফ্রী অবকাশ যাপন'}
              </p>
            </div>

            <div className="pt-2 md:pt-0 md:px-4 text-center">
              <div className="text-2xl sm:text-3xl font-extrabold text-amber-300">
                {formatMoney(1500000)}
              </div>
              <p className="text-xs text-slate-400 mt-0.5">
                {isEn ? 'Max 24M Development Benefit' : 'সর্বোচ্চ ডেভেলপমেন্ট বেনিফিট'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
