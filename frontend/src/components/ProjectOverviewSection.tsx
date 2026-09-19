'use client';
import React, { useState } from 'react';
import { 
  PieChart, 
  Layers, 
  Leaf, 
  Building2, 
  Compass, 
  Waves, 
  Trees, 
  Check, 
  Sparkles, 
  SunMedium,
  ShieldCheck,
  Award
} from 'lucide-react';
import { Language } from '../types';
import { PROJECT_STATS } from '../data/projectData';

interface ProjectOverviewSectionProps {
  language: Language;
}

export const ProjectOverviewSection: React.FC<ProjectOverviewSectionProps> = ({ language }) => {
  const isEn = language === 'en';
  const [activeZone, setActiveZone] = useState<'built' | 'green'>('built');

  const builtUpFeatures = isEn
    ? [
        { title: "5-Star Hotel Tower", desc: "Iconic contemporary skyscraper with 360° sea-view suites" },
        { title: "Luxury Waterfront Villas", desc: "Exclusive lagoon-side private plunge pool residences" },
        { title: "Signature Shell Cottages", desc: "Seashell-inspired eco domes on pristine waterways" },
        { title: "Grand Convention Center", desc: "2,000+ seat pillarless banquet & mega event auditorium" },
        { title: "Commercial Plaza & Arcade", desc: "Multi-brand shopping arcade, cafes & artisanal boutiques" },
        { title: "Giant Ocean Aquarium", desc: "Regional centerpiece underwater walkthrough tunnel" },
      ]
    : [
        { title: "৫-তারকা হোটেল টাওয়ার", desc: "৩৬০° সমুদ্র দর্শনসহ দৃষ্টিনন্দন আকাশচুম্বী স্থাপত্য" },
        { title: "লাক্সারি ওয়াটারফ্রন্ট ভিলা", desc: "লেগুনের পাড়ে নিজস্ব প্রাইভেট পুলযুক্ত রাজকীয় ভিলা" },
        { title: "সিগনেচার শেল কটেজ", desc: "ঝিনুক-অনুপ্রাণিত পরিবেশবান্ধব অনন্য ইকো কটেজ" },
        { title: "গ্র্যান্ড কনভেনশন সেন্টার", desc: "২০০০+ ধারণক্ষমতার মেগা অডিটোরিয়াম ও ব্যাংকুয়েট" },
        { title: "কমার্শিয়াল প্লাজা ও শপিং", desc: "আন্তর্জাতিক ব্র্যান্ডের শপ, ক্যাফে ও বুটিক" },
        { title: "বিশাল মহাসাগর অ্যাকোয়ারিয়াম", desc: "দক্ষিণ এশিয়ার অন্যতম বৃহৎ আন্ডারওয়াটার টানেল" },
      ];

  const greenSpaceFeatures = isEn
    ? [
        { title: "Crystal Lagoon & Water Bodies", desc: "Navigable freshwater lagoons and ornamental lakes" },
        { title: "Eco Botanical Garden", desc: "Hundreds of exotic indigenous coastal flora species" },
        { title: "Direct Private Beach Access", desc: "Gated beach club and sunset viewing boardwalks" },
        { title: "Scenic Walking & Jogging Trails", desc: "Shaded health circuits surrounded by tropical greenery" },
        { title: "Butterfly & Bird Sanctuary", desc: "Protected bio-diverse habitats and meditation groves" },
        { title: "Musical Fountain Plaza", desc: "Synchronized water, lighting, and sound amphitheater" },
      ]
    : [
        { title: "ক্রিস্টাল লেগুন ও জলাশয়", desc: "রিসোর্টজুড়ে বিস্তৃত মনোরম স্বচ্ছ লেগুন ও কৃত্রিম হ্রদ" },
        { title: "ইকো বোটানিক্যাল গার্ডেন", desc: "শত শত প্রজাতির দুর্লভ অর্কিড ও ঔষধি বৃক্ষের সমাহার" },
        { title: "প্রাইভেট বিচ এক্সেস ও বিচ ক্লাব", desc: "নিরাপদ ব্যক্তিগত সৈকত ও সানসেট ভিউয়িং ডেক" },
        { title: "হাঁটার ও জগিং ট্রেইল", desc: "ছায়াঘেরা সুসজ্জিত প্রাকৃতিক ওয়াকিং পাথওয়ে" },
        { title: "প্রজাপতি ও পাখি সংরক্ষণাগার", desc: "প্রাকৃতিক জীববৈচিত্র্য ও মেডিটেশন কর্নার" },
        { title: "মিউজিক্যাল ফাউন্টেন প্লাজা", desc: "আলো ও সুরের সমন্বয়ে দৃষ্টিনন্দন ওয়াটার শো চত্বর" },
      ];

  return (
    <section id="masterplan" className="py-20 relative bg-slate-950/60 border-t border-slate-900 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-amber-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Compass className="w-3.5 h-3.5" />
            <span>{isEn ? 'Master Development Blueprint' : '১২৫ বিঘা মাস্টার প্ল্যান ও ভূমি বণ্টন'}</span>
          </div>
          <h2 className="font-sans text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            {isEn ? (
              <>
                125 Bigha <span className="gold-gradient-text">Master Land Allocation</span>
              </>
            ) : (
              <>
                ১২৫ বিঘা <span className="gold-gradient-text">মাস্টার ডেভেলপমেন্ট পরিকল্পনা</span>
              </>
            )}
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            {isEn
              ? "A perfect balance of modern luxury architecture and pristine tropical nature. Designed to maximize guest exclusivity while delivering highest commercial valuation per square foot."
              : "উন্নত আধুনিক স্থাপত্য এবং প্রাকৃতিক সৌন্দর্যের নিখুঁত ভারসাম্য। প্রকৃতি সংরক্ষণ ও বিশ্বমানের লাক্সারি লাইফস্টাইলের এক যুগান্তকারী সমন্বয়।"}
          </p>
        </div>

        {/* Master Plan Visual Breakdown Card */}
        <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 sm:p-10 shadow-2xl backdrop-blur-md mb-12">
          {/* Main Distribution Bar */}
          <div className="mb-10">
            <div className="flex items-center justify-between text-xs sm:text-sm font-semibold mb-2">
              <span className="text-amber-400 flex items-center gap-2">
                <Building2 className="w-4 h-4" />
                {isEn ? 'Built-Up Construction Footprint: 35% (≈ 43 Bigha)' : 'নির্মাণাধীন স্থাপনা এলাকা: ৩৫% (প্রায় ৪৩ বিঘা)'}
              </span>
              <span className="text-emerald-400 flex items-center gap-2">
                <Leaf className="w-4 h-4" />
                {isEn ? 'Open Space & Green Zone: 65% (≈ 82 Bigha)' : 'উন্মুক্ত সবুজ ও জলাশয়: ৬৫% (প্রায় ৮২ বিঘা)'}
              </span>
            </div>
            {/* Visual ratio bar */}
            <div className="h-6 w-full rounded-full bg-slate-950 p-1 flex overflow-hidden border border-slate-800 shadow-inner">
              <div 
                className="h-full bg-gradient-to-r from-amber-600 to-amber-400 rounded-l-full flex items-center justify-center text-[10px] font-extrabold text-slate-950 transition-all duration-700"
                style={{ width: '35%' }}
              >
                35%
              </div>
              <div 
                className="h-full bg-gradient-to-r from-emerald-500 to-teal-400 rounded-r-full flex items-center justify-center text-[10px] font-extrabold text-slate-950 transition-all duration-700"
                style={{ width: '65%' }}
              >
                65%
              </div>
            </div>
          </div>

          {/* Interactive Zone Switcher */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex p-1.5 rounded-xl bg-slate-950 border border-slate-800">
              <button
                id="tab-built-zone"
                onClick={() => setActiveZone('built')}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  activeZone === 'built'
                    ? 'bg-amber-500 text-slate-950 shadow-lg shadow-amber-500/20'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Building2 className="w-4 h-4" />
                <span>{isEn ? 'Built-up Area (35% / 43 Bigha)' : 'নির্মাণ এলাকা (৩৫% / ৪৩ বিঘা)'}</span>
              </button>
              <button
                id="tab-green-zone"
                onClick={() => setActiveZone('green')}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  activeZone === 'green'
                    ? 'bg-emerald-500 text-slate-950 shadow-lg shadow-emerald-500/20'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Leaf className="w-4 h-4" />
                <span>{isEn ? 'Green Zone & Water (65% / 82 Bigha)' : 'সবুজ ও উন্মুক্ত এলাকা (৬৫% / ৮২ বিঘা)'}</span>
              </button>
            </div>
          </div>

          {/* Grid of Zone Features */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {(activeZone === 'built' ? builtUpFeatures : greenSpaceFeatures).map((item, idx) => (
              <div 
                key={idx}
                className="p-4 sm:p-5 rounded-xl bg-slate-950/70 border border-slate-800/80 hover:border-amber-500/30 transition-all group"
              >
                <div className="flex items-start gap-3.5">
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 mt-0.5 ${
                    activeZone === 'built' 
                      ? 'bg-amber-500/10 text-amber-400 border border-amber-500/20' 
                      : 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                  }`}>
                    {activeZone === 'built' ? <Building2 className="w-4 h-4" /> : <Trees className="w-4 h-4" />}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white group-hover:text-amber-400 transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sustainable Luxury Banner (PDF Page 3) */}
        <div className="bg-gradient-to-r from-emerald-950/50 via-slate-900/90 to-amber-950/50 border border-emerald-500/30 rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center shrink-0">
              <Leaf className="w-7 h-7 text-emerald-400" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold text-white">
                {isEn ? 'Sustainable Luxury & Environmental Harmony' : 'টেকসই লাক্সারি ও পরিবেশবান্ধব অবকাঠামো'}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-0.5">
                {isEn
                  ? "Designed to maintain a world-class luxury resort environment with maximum nature preservation, solar microgrids, and rainwater harvesting."
                  : "প্রকৃতি অক্ষুণ্ণ রেখে বিশ্বমানের ৫-তারকা রিসোর্ট পরিবেশ, সোলার পাওয়ার গ্রিড এবং রেইনওয়াটার হার্ভেস্টিং ব্যবস্থা।"}
              </p>
            </div>
          </div>
          <div className="shrink-0 flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-950/80 border border-emerald-500/30 text-emerald-300 text-xs font-semibold">
            <Award className="w-4 h-4 text-emerald-400" />
            <span>{isEn ? 'Eco-Certified Masterplan' : 'ইকো-সার্টিফায়েড মাস্টারপ্ল্যান'}</span>
          </div>
        </div>
      </div>
    </section>
  );
};
