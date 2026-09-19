'use client';
import React, { useState } from 'react';
import { 
  Building2, 
  Play, 
  Sun, 
  Leaf, 
  MapPin, 
  Check, 
  Layers, 
  Sparkles, 
  Maximize2,
  X,
  Info,
  Waves,
  Palmtree,
  HeartPulse,
  Landmark,
  Hotel
} from 'lucide-react';
import { Language } from '../types';

const masterPlanImg = "/01.png";

interface MasterPlanGallerySectionProps {
  language?: Language;
  onOpenBooking?: () => void;
}

interface Hotspot {
  id: string;
  nameEn: string;
  nameBn: string;
  category: 'construction' | 'green' | 'water';
  categoryLabelEn: string;
  categoryLabelBn: string;
  top: string;
  left: string;
  labelPlacement?: 'left' | 'right' | 'top' | 'bottom';
  descEn: string;
  descBn: string;
  image: string;
}

export const MasterPlanGallerySection: React.FC<MasterPlanGallerySectionProps> = ({
  language = 'en',
  onOpenBooking
}) => {
  const isEn = language === 'en';
  const [activeHotspot, setActiveHotspot] = useState<Hotspot | null>(null);

  const hotspots: Hotspot[] = [
    {
      id: "central_mosque",
      nameEn: "Central Mosque",
      nameBn: "কেন্দ্রীয় মসজিদ",
      category: "construction",
      categoryLabelEn: "Spiritual Sanctuary",
      categoryLabelBn: "আধ্যাত্মিক কেন্দ্র",
      top: "14%",
      left: "22%",
      labelPlacement: "right",
      descEn: "Architecturally crafted mosque with climate-controlled prayer halls and peaceful surrounding landscaped gardens.",
      descBn: "শান্ত ও প্রশান্ত পরিবেশে নির্মিত আধুনিক স্থাপত্যের কেন্দ্রীয় জামে মসজিদ ও ইবাদতখানা।",
      image: "/Mosque.png"
    },
    {
      id: "convention_banquet",
      nameEn: "Convention Center",
      nameBn: "কনভেনশন সেন্টার",
      category: "construction",
      categoryLabelEn: "Event & Business (35%)",
      categoryLabelBn: "কনভেনশন জোন (৩৫%)",
      top: "15%",
      left: "76%",
      labelPlacement: "left",
      descEn: "State-of-the-art international convention hall hosting up to 2,000 guests, corporate summits, and destination weddings.",
      descBn: "২,০০০ অতিথির ধারণক্ষমতাসম্পন্ন আন্তর্জাতিক মানের কনভেনশন সেন্টার ও মেগা ব্যাঙ্কোয়েট হল।",
      image: "/Convention Center.png"
    },
    {
      id: "resort_main_wing",
      nameEn: "5-Star Luxury Tower",
      nameBn: "৫-তারকা রিসোর্ট টাওয়ার",
      category: "construction",
      categoryLabelEn: "Main Resort Zone (35%)",
      categoryLabelBn: "মূল রিসোর্ট জোন (৩৫%)",
      top: "32%",
      left: "48%",
      labelPlacement: "right",
      descEn: "Multi-tiered presidential suites, luxury guest rooms, rooftop sunset lounge, and 360° panoramic ocean vistas.",
      descBn: "প্রেসিডেনশিয়াল স্যুইট, আধুনিক গেস্ট রুম ও রুফটপ সানসেট লাউঞ্জসহ বহুতল ৫-তারকা লাক্সারি উইং।",
      image: "/center_tower_aerial.png"
    },
    {
      id: "eco_cottages_lagoon",
      nameEn: "Eco Cottages",
      nameBn: "ইকো কটেজ জোন",
      category: "green",
      categoryLabelEn: "Eco-Green Zone (65%)",
      categoryLabelBn: "ইকো-গ্রিন জোন (৬৫%)",
      top: "44%",
      left: "14%",
      labelPlacement: "right",
      descEn: "Tranquil wooden chalets set amidst lush tropical greenery and calm water lagoons for immersive nature living.",
      descBn: "প্রাকৃতিক লেক ও নৈসর্গিক সবুজে ঘেরা পরিবেশবান্ধব কাঠের কটেজ ও প্রশান্ত অবকাশ যাপন এলাকা।",
      image: "/Eco Cottage.png"
    },
    {
      id: "infinity_pool_deck",
      nameEn: "Infinity Pool",
      nameBn: "ইনফিনিটি সুইমিং পুল",
      category: "water",
      categoryLabelEn: "Water Recreation (65%)",
      categoryLabelBn: "ওয়াটার রিক্রিয়েশন (৬৫%)",
      top: "48%",
      left: "74%",
      labelPlacement: "left",
      descEn: "Ocean-facing multi-level infinity pool, sunken lounge bars, children's splash pool, and private cabana decks.",
      descBn: "সমুদ্রমুখী মাল্টি-লেভেল ইনফিনিটি পুল, সানকেন লাউঞ্জ এবং আরামদায়ক প্রাইভেট কাবানা সানডেক।",
      image: "/Infinity Swimming Pool.png"
    },
    {
      id: "theme_water_park",
      nameEn: "Theme & Water Park",
      nameBn: "থিম ও ওয়াটার পার্ক",
      category: "green",
      categoryLabelEn: "Recreation & Rides",
      categoryLabelBn: "বিনোদন ও রাইডস",
      top: "76%",
      left: "16%",
      labelPlacement: "right",
      descEn: "Thrilling amusement rides, wave pools, interactive kids splash play, and world-class family entertainment.",
      descBn: "আন্তর্জাতিক মানের রোমাঞ্চকর রাইডস, ফ্যামিলি পার্ক এবং ওয়াটার অ্যামিউজমেন্ট জোন।",
      image: "/Water Park.png"
    },
    {
      id: "medical_center_wellness",
      nameEn: "Medical Wellness",
      nameBn: "মেডিকেল সেন্টার",
      category: "construction",
      categoryLabelEn: "Healthcare & Safety",
      categoryLabelBn: "স্বাস্থ্যসেবা ও সুরক্ষা",
      top: "72%",
      left: "80%",
      labelPlacement: "left",
      descEn: "Round-the-clock emergency medical clinic, certified resident doctors, and cardiac response equipment.",
      descBn: "২৪ ঘণ্টা জরুরি চিকিৎসা সেবা, অভিজ্ঞ ডাক্তার এবং আধুনিক ফার্স্ট এইড ও হেলথকেয়ার সুবিধা।",
      image: "/06.png"
    },
    {
      id: "private_beach_club",
      nameEn: "Private Beach Walk",
      nameBn: "প্রাইভেট বিচ ওয়াকওয়ে",
      category: "water",
      categoryLabelEn: "Beachfront Access",
      categoryLabelBn: "বিচফ্রন্ট অ্যাক্সেস",
      top: "88%",
      left: "48%",
      labelPlacement: "right",
      descEn: "Direct, uninterrupted private walkway to the serene golden sands of Inani beach reserved exclusively for resort guests and shareholders.",
      descBn: "ইনানী সৈকতে সরাসরি প্রবেশের এক্সক্লুসিভ পথ, বিচ ক্যাবানা, সানসেট ডেক ও এক্সক্লুসিভ লাউঞ্জ।",
      image: "/19.png"
    }
  ];

  const filteredHotspots = hotspots;

  const featureCards = [
    {
      categoryEn: "Hospitality",
      categoryBn: "হসপিটালিটি ও আবাসন",
      icon: Building2,
      tagEn: "Built Area",
      tagBn: "নির্মাণ",
      itemsEn: ["Iconic Luxury Tower", "5-Star Hotel", "Waterfront Villas", "Shell Cottages"],
      itemsBn: ["আইকনিক লাক্সারি টাওয়ার", "৫-তারকা হোটেল স্যুইট", "ওয়াটারফ্রন্ট ভিলা", "সিগনেচার শেল কটেজ"]
    },
    {
      categoryEn: "Recreation",
      categoryBn: "বিনোদন ও থিম পার্ক",
      icon: Play,
      tagEn: "Experience",
      tagBn: "অভিজ্ঞতা",
      itemsEn: ["Giant Ocean Aquarium", "Thrilling Water Park", "Adventure Park", "Musical Fountain"],
      itemsBn: ["জায়ান্ট ওশান অ্যাকুয়ারিয়াম", "রোমাঞ্চকর ওয়াটার পার্ক", "অ্যাডভেঞ্চার জোন", "মিউজিক্যাল ফোয়ারা"]
    },
    {
      categoryEn: "Lifestyle",
      categoryBn: "লাইফস্টাইল ও প্রিভিলেজ",
      icon: Sun,
      tagEn: "Elite Leisure",
      tagBn: "এলিট সুবিধা",
      itemsEn: ["Private Beach", "Infinity Pool", "Marina & Yacht Club", "Convention Center"],
      itemsBn: ["প্রাইভেট সি-বিচ", "ইনফিনিটি সুইমিং পুল", "মেরিনা ও ইয়ট ক্লাব", "আন্তর্জাতিক কনভেনশন সেন্টার"]
    },
    {
      categoryEn: "Wellness & Nature",
      categoryBn: "ওয়েলনেস ও প্রকৃতি",
      icon: Leaf,
      tagEn: "65% Green Area",
      tagBn: "৬৫% সবুজ",
      itemsEn: ["Crystal Lagoon", "Botanical Garden", "Wellness Spa Village", "Walking Trails"],
      itemsBn: ["ক্রিস্টাল লেকুন", "বোটানিক্যাল গার্ডেন", "ওয়েলনেস স্পা ভিলেজ", "ওয়াকিং ও জগিং ট্রেইল"]
    }
  ];

  const dataAnchorStats = [
    { 
      valueEn: "125 Bigha", 
      valueBn: "১২৫ বিঘা", 
      labelEn: "Total Land Estate", 
      labelBn: "মোট প্রকল্পের আয়তন",
      subEn: "Master-planned mega tourism hub",
      subBn: "মেগা ট্যুরিজম ডেসটিনেশন"
    },
    { 
      valueEn: "65%", 
      valueBn: "৬৫%", 
      labelEn: "Green & Open Space", 
      labelBn: "উন্মুক্ত সবুজ ও লেকুন",
      subEn: "Eco-luxury sustainable design",
      subBn: "পরিবেশবান্ধব ও উন্মুক্ত এলাকা"
    },
    { 
      valueEn: "35%", 
      valueBn: "৩৫%", 
      labelEn: "Built-up Area", 
      labelBn: "মূল নির্মাণ এলাকা",
      subEn: "Modern architectural zoning",
      subBn: "৫-তারকা অবকাঠামো ও রিসোর্ট"
    },
    { 
      valueEn: "2026-2030", 
      valueBn: "২০২৬-২০৩০", 
      labelEn: "Development Timeline", 
      labelBn: "প্রকল্প বাস্তবায়ন সময়সীমা",
      subEn: "Phased handover & operations",
      subBn: "পর্যায়ক্রমিক হস্তান্তর ও চালু"
    }
  ];

  return (
    <section 
      id="master_plan_interactive_showcase" 
      className="w-full bg-[#F8F9FB] py-8 border-b border-gray-200 scroll-mt-12 font-sans relative overflow-hidden text-left"
    >
      {/* Background Subtle Ambient Glow */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-[#E5C378]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-[#0B1B3D]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ======================================================== */}
        {/* 1. HEADER (Centered at the top)                          */}
        {/* ======================================================== */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
          <div className="inline-flex items-center justify-center gap-2 mb-2">
            <span className="w-8 h-[1.5px] bg-[#E5C378]" />
            <p className="font-sans text-xs tracking-[0.2em] uppercase text-[#E5C378] font-bold text-center">
              {isEn ? "125-BIGHA MASTER PLAN" : "১২৫ বিঘার পূর্ণাঙ্গ মাস্টারপ্ল্যান"}
            </p>
            <span className="w-8 h-[1.5px] bg-[#E5C378]" />
          </div>

          <h2 className="font-sans text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0B1B3D] mb-2 tracking-tight text-center">
            {isEn ? "Master Plan" : "মাস্টার প্ল্যান"}
          </h2>

          <p className="font-sans text-xs sm:text-sm text-gray-600 leading-normal text-center max-w-xl mx-auto">
            {isEn 
              ? "125-bigha eco-luxury ecosystem balancing 35% construction with 65% green space."
              : "১২৫ বিঘার পর্যটন হাব—৩৫% মূল স্থাপত্য ও ৬৫% উন্মুক্ত সবুজ প্রকৃতি।"}
          </p>
        </div>

        {/* ======================================================== */}
        {/* 2. INTERACTIVE MAP AREA (Expanded 3D Aerial View)       */}
        {/* ======================================================== */}
        <div 
          onClick={() => setActiveHotspot(null)}
          className="relative w-full h-[580px] sm:h-[660px] lg:h-[760px] overflow-hidden rounded-none border border-[#0B1B3D]/20 shadow-[0_20px_50px_rgba(11,27,61,0.14)] bg-[#0B1B3D] group"
        >
          
          {/* Main 5-Star Luxury Resort Master Plan Visual */}
          <img
            src={masterPlanImg}
            alt="The Promise 125 Bigha Master Plan"
            onError={(e) => {
              if (e.currentTarget.src !== "/01.png") {
                e.currentTarget.src = "/01.png";
              }
            }}
            className="w-full h-full object-cover object-center filter brightness-[0.98] contrast-[1.04] saturate-[1.08] scale-100 group-hover:scale-[1.02] transition-transform duration-1000 ease-out"
            referrerPolicy="no-referrer"
          />

          {/* Subtle Depth Overlays & Vignette */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B1B3D]/85 via-transparent to-[#0B1B3D]/30 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B1B3D]/40 via-transparent to-[#0B1B3D]/40 pointer-events-none" />

          {/* Interactive Hotspots on the Map with visible title badges alongside pins */}
          {filteredHotspots.map((spot, idx) => {
            const isSelected = activeHotspot?.id === spot.id;
            const placement = spot.labelPlacement || 'right';
            
            const labelPositionClasses = 
              placement === 'left'
                ? 'right-8 top-1/2 -translate-y-1/2 group-hover/pin:-translate-x-0.5'
                : 'left-8 top-1/2 -translate-y-1/2 group-hover/pin:translate-x-0.5';

            return (
              <div
                key={spot.id}
                style={{ top: spot.top, left: spot.left }}
                className="absolute z-20 -translate-x-1/2 -translate-y-1/2 cursor-pointer group/pin"
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveHotspot(prev => prev?.id === spot.id ? null : spot);
                }}
                title={isEn ? spot.nameEn : spot.nameBn}
              >
                {/* Pulsing Beacon Ring */}
                <div className="relative flex items-center justify-center">
                  <span className={`absolute w-7 h-7 rounded-full animate-ping opacity-60 pointer-events-none ${
                    spot.category === 'construction' ? 'bg-[#E5C378]' : 'bg-emerald-400'
                  }`} />
                  
                  {/* Pin Node */}
                  <div className={`relative w-7 h-7 rounded-full flex items-center justify-center border-2 shadow-[0_4px_12px_rgba(0,0,0,0.6)] transition-all duration-300 group-hover/pin:scale-115 shrink-0 ${
                    isSelected 
                      ? 'bg-[#E5C378] border-white text-[#0B1B3D] scale-115 ring-4 ring-[#E5C378]/40' 
                      : spot.category === 'construction'
                        ? 'bg-[#0B1B3D]/95 border-[#E5C378] text-[#E5C378] group-hover/pin:bg-[#E5C378] group-hover/pin:text-[#0B1B3D]'
                        : 'bg-[#0B1B3D]/95 border-emerald-400 text-emerald-400 group-hover/pin:bg-emerald-400 group-hover/pin:text-[#0B1B3D]'
                  }`}>
                    <span className="text-[10px] font-bold font-sans">
                      {idx + 1}
                    </span>
                  </div>

                  {/* Hotspot Title Tag Displayed Alongside the Pin */}
                  <div className={`absolute ${labelPositionClasses} whitespace-nowrap px-2.5 py-1 bg-[#0B1B3D]/90 backdrop-blur-md border text-[11px] font-semibold tracking-normal rounded-none shadow-lg transition-all duration-300 pointer-events-none ${
                    isSelected 
                      ? 'border-[#E5C378] text-[#E5C378] bg-[#0B1B3D] z-30 scale-105 shadow-[0_0_15px_rgba(229,195,120,0.3)]' 
                      : 'border-white/20 text-gray-100 group-hover/pin:border-[#E5C378] group-hover/pin:text-[#E5C378]'
                  }`}>
                    <div className="flex items-center gap-1.5">
                      <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${spot.category === 'construction' ? 'bg-[#E5C378]' : 'bg-emerald-400'}`} />
                      <span className="truncate max-w-[120px] sm:max-w-[150px]">{isEn ? spot.nameEn : spot.nameBn}</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}

          {/* Bottom Left Hotspot Image Preview Card (Pure image with small cross on top right) */}
          {activeHotspot && (
            <div 
              onClick={(e) => e.stopPropagation()}
              className="absolute bottom-4 left-4 right-4 sm:right-auto sm:w-[380px] md:w-[420px] h-60 sm:h-64 z-30 bg-[#0B1B3D] border border-[#E5C378]/70 shadow-2xl rounded-none animate-fadeIn overflow-hidden group/preview"
            >
              {/* Close Button (Small cross on top right) */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveHotspot(null);
                }}
                className="absolute top-2.5 right-2.5 z-20 w-7 h-7 bg-[#0B1B3D]/80 hover:bg-black text-white/80 hover:text-white border border-white/30 flex items-center justify-center cursor-pointer transition-colors shadow-md rounded-none"
                aria-label="Close preview"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Preview Image */}
              <img
                src={activeHotspot.image}
                alt=""
                onError={(e) => {
                  if (e.currentTarget.src !== "/01.png") {
                    e.currentTarget.src = "/01.png";
                  }
                }}
                className="w-full h-full object-cover object-center filter brightness-[1.02] contrast-[1.02] transition-transform duration-500 group-hover/preview:scale-105"
                referrerPolicy="no-referrer"
              />
            </div>
          )}

        </div>

        {/* ======================================================== */}
        {/* 3. FEATURE GRID (Glassmorphism Cards, rounded-none)      */}
        {/* ======================================================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
          {featureCards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div
                key={idx}
                className="group relative rounded-none bg-white/65 backdrop-blur-xl border border-white/80 p-6 sm:p-7 shadow-[0_15px_35px_rgba(11,27,61,0.05)] hover:border-[#E5C378] hover:bg-white/95 hover:shadow-[0_20px_45px_rgba(11,27,61,0.12)] hover:-translate-y-2 group-hover:scale-[1.02] transition-all duration-500 ease-out text-left flex flex-col justify-between"
              >
                {/* Top Border Sheen */}
                <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-[#0B1B3D]/20 to-transparent group-hover:via-[#E5C378] transition-all duration-500" />

                <div>
                  {/* Card Header with Icon and Tag */}
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <div className="w-11 h-11 rounded-none bg-[#0B1B3D] text-[#E5C378] flex items-center justify-center border border-[#E5C378]/40 shadow-sm group-hover:bg-[#E5C378] group-hover:text-[#0B1B3D] group-hover:shadow-[0_0_20px_rgba(229,195,120,0.5)] transition-all duration-300">
                      <Icon className="w-5 h-5 stroke-[2] group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <span className="px-2.5 py-1 bg-[#F4F6F9] border border-gray-200 text-[10px] font-bold uppercase tracking-widest text-[#0B1B3D] rounded-none">
                      {isEn ? card.tagEn : card.tagBn}
                    </span>
                  </div>

                  {/* Category Title */}
                  <h3 className="font-sans text-base sm:text-lg font-bold text-[#0B1B3D] mb-2.5 text-left leading-snug group-hover:text-[#0B1B3D]">
                    {isEn ? card.categoryEn : card.categoryBn}
                  </h3>

                  {/* Items Checklist */}
                  <div className="space-y-2 text-left">
                    {(isEn ? card.itemsEn : card.itemsBn).map((item, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs sm:text-[13px] text-gray-700 text-left">
                        <span className="w-1.5 h-1.5 rounded-none bg-[#E5C378] shrink-0" />
                        <span className="font-medium">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* ======================================================== */}
        {/* 4. DATA ANCHOR BAR (Sharp corporate feel, navy & gold)   */}
        {/* ======================================================== */}
        <div className="mt-10 bg-[#0B1B3D]/95 backdrop-blur-xl border border-[#E5C378]/40 p-6 sm:p-7 text-white rounded-none shadow-[0_20px_50px_rgba(11,27,61,0.25)] relative overflow-hidden text-left">
          
          {/* Subtle Ambient Gold Gradient */}
          <div className="absolute -right-16 -bottom-16 w-64 h-64 bg-[#E5C378]/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -left-16 -top-16 w-64 h-64 bg-[#E5C378]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 divide-y lg:divide-y-0 lg:divide-x divide-white/15 relative z-10">
            {dataAnchorStats.map((stat, i) => (
              <div 
                key={i} 
                className={`flex flex-col justify-center text-left ${
                  i > 0 ? 'pt-5 lg:pt-0 lg:pl-6' : ''
                }`}
              >
                <div className="font-sans text-2xl sm:text-3xl font-bold text-[#E5C378] mb-1 tracking-tight text-left">
                  {isEn ? stat.valueEn : stat.valueBn}
                </div>
                <h4 className="font-sans text-xs sm:text-sm font-semibold text-gray-200 text-left mb-0.5">
                  {isEn ? stat.labelEn : stat.labelBn}
                </h4>
                <p className="text-[11px] sm:text-xs text-gray-400 font-sans text-left leading-relaxed">
                  {isEn ? stat.subEn : stat.subBn}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

