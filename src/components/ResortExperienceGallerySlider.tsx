'use client';
import React, { useState, useEffect, useCallback } from 'react';
import { 
  ChevronLeft,
  ChevronRight,
  Waves,
  Building2,
  TreePalm,
  Compass,
  UtensilsCrossed,
  PartyPopper,
  Baby,
  Hotel,
  Landmark,
  Home
} from 'lucide-react';
import { Language } from '../types';

interface ResortExperienceGallerySliderProps {
  language?: Language;
}

interface ExperienceZone {
  id: string;
  tagEn: string;
  tagBn: string;
  titleEn: string;
  titleBn: string;
  categoryEn: string;
  categoryBn: string;
  locationEn: string;
  locationBn: string;
  descEn: string;
  descBn: string;
  icon: React.ElementType;
  imageUrl: string;
  fallbackUrl: string;
}

export const ResortExperienceGallerySlider: React.FC<ResortExperienceGallerySliderProps> = ({
  language = 'en'
}) => {
  const isEn = language === 'en';
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isPaused, setIsPaused] = useState<boolean>(false);

  // Updated with all uploaded assets
  const experiences: ExperienceZone[] = [
    {
      id: "amphitheatre",
      tagEn: "EXPERIENCE 01",
      tagBn: "অভিজ্ঞতা ০১",
      titleEn: "Open-Air Amphitheatre",
      titleBn: "ওপেন-এয়ার অ্যাম্ফিথিয়েটার",
      categoryEn: "Live Entertainment",
      categoryBn: "লাইভ বিনোদন ও শো",
      locationEn: "Sunset Cultural Lawn",
      locationBn: "সানসেট কালচারাল লন",
      descEn: "Acoustically designed tiered outdoor amphitheatre hosting live cultural performances, musical concerts, and evening gala shows under the stars.",
      descBn: "উন্মুক্ত আকাশের নিচে সঙ্গীতানুষ্ঠান, আন্তর্জাতিক সাংস্কৃতিক পরিবেশনা ও বিশেষ সন্ধ্যার জন্য নান্দনিক স্টেপড অ্যাম্ফিথিয়েটার।",
      icon: PartyPopper,
      imageUrl: "/Amphitheatre.png",
      fallbackUrl: "https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?q=80&w=2000&auto=format&fit=crop"
    },
    {
      id: "convention-center",
      tagEn: "EXPERIENCE 02",
      tagBn: "অভিজ্ঞতা ০২",
      titleEn: "Convention Center",
      titleBn: "আন্তর্জাতিক কনভেনশন সেন্টার",
      categoryEn: "Events & Summits",
      categoryBn: "কনভেনশন ও মেগা ইভেন্ট",
      locationEn: "Grand Banquet Pavilion",
      locationBn: "গ্র্যান্ড ব্যাঙ্কোয়েট প্যাভিলিয়ন",
      descEn: "State-of-the-art international auditorium and luxury banquet halls with capacity for 2,000+ guests for corporate summits and exhibitions.",
      descBn: "২,০০০+ অতিথির ধারণক্ষমতাসম্পন্ন অত্যাধুনিক আন্তর্জাতিক কনভেনশন সেন্টার ও কর্পোরেট কনফারেন্স অডিটোরিয়াম।",
      icon: Building2,
      imageUrl: "/Convention Center.png",
      fallbackUrl: "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=2000&auto=format&fit=crop"
    },
    {
      id: "eco-cottage",
      tagEn: "EXPERIENCE 03",
      tagBn: "অভিজ্ঞতা ০৩",
      titleEn: "Luxury Eco Cottage",
      titleBn: "লাক্সারি ইকো কটেজ",
      categoryEn: "Nature Living",
      categoryBn: "সবুজ প্রকৃতি ও কটেজ",
      locationEn: "Lush Green Flora Enclave",
      locationBn: "প্রশান্ত সবুজ ভ্যালি",
      descEn: "Eco-friendly premium thatched chalets immersed in lush greenery, offering a peaceful organic sanctuary paired with 5-star comfort.",
      descBn: "সবুজ প্রকৃতির কোলে নির্মিত প্রাকৃতিক উপাদানসমৃদ্ধ আধুনিক ইকো কটেজ—যা দেয় সম্পূর্ণ প্রশান্তিময় অবকাশের অনুভূতি।",
      icon: Home,
      imageUrl: "/Eco Cottage.png",
      fallbackUrl: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=2000&auto=format&fit=crop"
    },
    {
      id: "mosque",
      tagEn: "EXPERIENCE 04",
      tagBn: "অভিজ্ঞতা ০৪",
      titleEn: "Central Mosque",
      titleBn: "কেন্দ্রীয় জামে মসজিদ",
      categoryEn: "Spiritual Sanctuary",
      categoryBn: "আধ্যাত্মিক প্রশান্তি",
      locationEn: "Serene Green Enclave",
      locationBn: "প্রশান্ত সবুজ জোন",
      descEn: "Architecturally exquisite central mosque designed with peaceful Islamic aesthetics, air-conditioned prayer halls, and tranquil water fountains.",
      descBn: "ইসলামিক স্থাপত্য ও নান্দনিক নকশায় তৈরি কেন্দ্রীয় জামে মসজিদ—যেখানে রয়েছে প্রশান্ত ইবাদতের সুব্যবস্থা।",
      icon: Landmark,
      imageUrl: "/Mosque.png",
      fallbackUrl: "https://images.unsplash.com/photo-1564769625905-50e93615e769?q=80&w=2000&auto=format&fit=crop"
    },
    {
      id: "water-park",
      tagEn: "EXPERIENCE 05",
      tagBn: "অভিজ্ঞতা ০৫",
      titleEn: "Water Park & Aqua Splash",
      titleBn: "ওয়াটার পার্ক ও অ্যাকোয়া স্প্ল্যাশ",
      categoryEn: "Water Recreation",
      categoryBn: "ওয়াটার অ্যামিউজমেন্ট",
      locationEn: "Lagoon Aquatic Zone",
      locationBn: "অ্যাকোয়া জোন",
      descEn: "High-thrill multi-lane aqua slides, lazy river circuits, artificial wave pool, and interactive kids water splash adventure zones.",
      descBn: "রোমাঞ্চকর মাল্টি-লেন ওয়াটার স্লাইডস, ওয়েভ পুল, লেজি রিভার এবং শিশুদের জন্য আকর্ষনীয় অ্যাকোয়া স্প্ল্যাশ পার্ক।",
      icon: Waves,
      imageUrl: "/Water Park.png",
      fallbackUrl: "https://images.unsplash.com/photo-1582650625119-3a31f8fa2699?q=80&w=2000&auto=format&fit=crop"
    },
    {
      id: "wedding-venue",
      tagEn: "EXPERIENCE 06",
      tagBn: "অভিজ্ঞতা ০৬",
      titleEn: "Grand Wedding Venue",
      titleBn: "গ্র্যান্ড ওয়েডিং ভেন্যু",
      categoryEn: "Destination Celebrations",
      categoryBn: "ডেস্টিনেশন ওয়েডিং",
      locationEn: "Oceanfront Sunset Pavilion",
      locationBn: "সমুদ্রমুখী সানসেট প্যাভিলিয়ন",
      descEn: "Magical oceanfront wedding lawns and decorated gala stages designed for fairy-tale destination weddings and lavish royal banquets.",
      descBn: "সমুদ্রের নীল জলরাশির পটভূমিতে রাজকীয় ডেস্টিনেশন ওয়েডিং, মেগা সেলিব্রেশন ও মনোরম সংবর্ধনা ভেন্যু।",
      icon: PartyPopper,
      imageUrl: "/Wedding Venue.png",
      fallbackUrl: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2000&auto=format&fit=crop"
    },
    {
      id: "theme-park",
      tagEn: "EXPERIENCE 07",
      tagBn: "অভিজ্ঞতা ০৭",
      titleEn: "Theme Park & Rides",
      titleBn: "থিম পার্ক ও বিনোদন রাইডস",
      categoryEn: "Family Entertainment",
      categoryBn: "পারিবারিক বিনোদন",
      locationEn: "Central Adventure Park",
      locationBn: "সেন্ট্রাল অ্যাডভেঞ্চার পার্ক",
      descEn: "Thrilling family rollercoasters, giant observation Ferris wheel, bumper cars, and international carnival amusement rides.",
      descBn: "রোলার কোস্টার, জায়ান্ট নাগরদোলা ও সকল বয়সের মানুষের জন্য আন্তর্জাতিক মানের অ্যামিউজমেন্ট রাইডস।",
      icon: Compass,
      imageUrl: "/Theme Park.png",
      fallbackUrl: "https://images.unsplash.com/photo-1513889961551-628c1e5e2ee9?q=80&w=2000&auto=format&fit=crop"
    },
    {
      id: "luxury-villa",
      tagEn: "EXPERIENCE 08",
      tagBn: "অভিজ্ঞতা ০৮",
      titleEn: "Luxury Villas & Chalets",
      titleBn: "লাক্সারি ভিলা ও শ্যালেট",
      categoryEn: "Private Living",
      categoryBn: "এক্সক্লুসিভ ভিলা",
      locationEn: "Secluded Lagoon Enclave",
      locationBn: "প্রশান্ত লেগুন জোন",
      descEn: "Private standalone presidential pool villas featuring private sundecks, infinity splash pools, and dedicated butler service.",
      descBn: "ব্যক্তিগত পুল ও সানডেকসহ সম্পূর্ণ নিজস্ব বাউন্ডারির বিলাসবহুল প্রেসিডেনশিয়াল লাক্সারি ভিলা।",
      icon: TreePalm,
      imageUrl: "/Luxury Villa.png",
      fallbackUrl: "https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80&w=2000&auto=format&fit=crop"
    },
    {
      id: "infinity-swimming-pool",
      tagEn: "EXPERIENCE 09",
      tagBn: "অভিজ্ঞতা ০৯",
      titleEn: "Infinity Swimming Pool",
      titleBn: "ইনফিনিটি সুইমিং পুল",
      categoryEn: "Aqua & Sun Deck",
      categoryBn: "সুইমিং পুল ও সানডেক",
      locationEn: "Oceanfront Central Lagoon",
      locationBn: "সেন্ট্রাল ওশানফ্রন্ট লেগুন",
      descEn: "Multi-tiered sea-facing infinity pool merging effortlessly with the Bay of Bengal, equipped with sunken pool bars and private cabanas.",
      descBn: "সমুদ্রের সাথে দিগন্ত মিলিয়ে তৈরি মাল্টি-টিয়ার ইনফিনিটি পুল, সানকেন লাউঞ্জ বার এবং রোদ পোহানোর প্রাইভেট ক্যাবানা।",
      icon: Waves,
      imageUrl: "/Infinity Swimming Pool.png",
      fallbackUrl: "https://images.unsplash.com/photo-1540541338287-41700207dee6?q=80&w=2000&auto=format&fit=crop"
    },
    {
      id: "shopping-mall",
      tagEn: "EXPERIENCE 10",
      tagBn: "অভিজ্ঞতা ১০",
      titleEn: "Shopping Mall & Arcade",
      titleBn: "শপিং মল ও আর্কেড",
      categoryEn: "Luxury Retail",
      categoryBn: "শপিং ও রিটেল",
      locationEn: "Commercial Promenade",
      locationBn: "বাণিজ্যিক প্রমেনেড",
      descEn: "High-end luxury brand boutiques, lifestyle fashion outlets, duty-free retail, and souvenir artisan shops.",
      descBn: "আন্তর্জাতিক ফ্যাশন ব্র্যান্ড আউটলেট, লাইফস্টাইল শপ এবং প্রিমিয়াম স্যুভেনির শপিং মল।",
      icon: Building2,
      imageUrl: "/Shopping Mall.png",
      fallbackUrl: "https://images.unsplash.com/photo-1519567241046-7f570eee3ce6?q=80&w=2000&auto=format&fit=crop"
    },
    {
      id: "food-court",
      tagEn: "EXPERIENCE 11",
      tagBn: "অভিজ্ঞতা ১১",
      titleEn: "Food Court & Dining",
      titleBn: "ফুড কোর্ট ও ডাইনিং",
      categoryEn: "Multi-Cuisine Dining",
      categoryBn: "ফুড কোর্ট ও রেস্তোরাঁ",
      locationEn: "Resort Central Promenade",
      locationBn: "সেন্ট্রাল প্রমেনেড",
      descEn: "Multi-cuisine gourmet food court, open-air beachside cafes, seafood specialty eateries, and fine-dining restaurants.",
      descBn: "আন্তর্জাতিক ও দেশীয় খাবারের সমাহারে সুবিশাল মাল্টি-কুইজিন ফুড কোর্ট, সী-ফুড ও বিচ সাইড ক্যাফে।",
      icon: UtensilsCrossed,
      imageUrl: "/Food Court.png",
      fallbackUrl: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=2000&auto=format&fit=crop"
    },
    {
      id: "kids-zone",
      tagEn: "EXPERIENCE 12",
      tagBn: "অভিজ্ঞতা ১২",
      titleEn: "Kids Zone & Playpark",
      titleBn: "কিডস জোন ও প্লে-পার্ক",
      categoryEn: "Kids Recreation",
      categoryBn: "শিশু বিনোদন জোন",
      locationEn: "Family Recreation Park",
      locationBn: "ফ্যামিলি পার্ক জোন",
      descEn: "Supervised indoor arcade, soft play castles, virtual reality games, and safe outdoor interactive adventure playgrounds.",
      descBn: "নিরাপদ শিশু বিনোদন কেন্দ্র, সফট প্লে ক্যাসেল, ভিআর গেমস এবং আনন্দদায়ক কিডস অ্যাডভেঞ্চার পার্ক।",
      icon: Baby,
      imageUrl: "/Kids Zone.png",
      fallbackUrl: "https://images.unsplash.com/photo-1596464716127-f2a829822301?q=80&w=2000&auto=format&fit=crop"
    },
    {
      id: "5-star-hotel",
      tagEn: "EXPERIENCE 13",
      tagBn: "অভিজ্ঞতা ১৩",
      titleEn: "5-Star Hotel Tower",
      titleBn: "৫-তারকা হোটেল টাওয়ার",
      categoryEn: "Luxury Hospitality",
      categoryBn: "লাক্সারি হোটেল",
      locationEn: "Central Tower",
      locationBn: "সেন্ট্রাল টাওয়ার",
      descEn: "Signature high-rise luxury hotel tower featuring executive sea-view suites, rooftop sky lounge, and 24/7 concierge.",
      descBn: "সমুদ্রমুখী বিলাসবহুল এক্সিকিউটিভ স্যুইট, রুফটপ স্কাই লাউঞ্জ এবং ৫-তারকা আতিথেয়তার সমন্বয়।",
      icon: Hotel,
      imageUrl: "/04.png",
      fallbackUrl: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2000&auto=format&fit=crop"
    }
  ];

  // Slide navigation callbacks
  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % experiences.length);
  }, [experiences.length]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + experiences.length) % experiences.length);
  }, [experiences.length]);

  // Preload images to eliminate initial rendering delay and ensure uniform carousel transitions
  useEffect(() => {
    experiences.forEach((exp) => {
      const img = new Image();
      img.src = exp.imageUrl;
    });
  }, [experiences]);

  // Auto slide rotation (4 seconds delay between changes)
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      nextSlide();
    }, 4000);
    return () => clearInterval(timer);
  }, [isPaused, nextSlide]);

  const active = experiences[currentIndex];

  return (
    <section 
      id="resort_experience" 
      className="w-full bg-[#FAF8F5] text-[#0B1B3D] pt-8 pb-0 scroll-mt-12 font-sans relative"
    >
      <div id="experience" className="scroll-mt-12" />

      {/* Top Section Header (Placed ABOVE the full-screen image carousel) */}
      <div className="max-w-2xl mx-auto px-6 mb-6 sm:mb-8 text-center">
        <div className="inline-flex items-center justify-center gap-2 mb-2">
          <span className="w-8 h-[1px] bg-[#E5C378]" />
          <p className="font-sans text-xs tracking-[0.2em] uppercase text-[#E5C378] font-bold text-center">
            {isEn ? "WORLD-CLASS AMENITIES" : "রিসোর্ট অভিজ্ঞতা ও সুযোগ-সুবিধা"}
          </p>
          <span className="w-8 h-[1px] bg-[#E5C378]" />
        </div>

        <h2 className="font-sans text-2xl sm:text-3xl font-bold text-[#0B1B3D] tracking-tight leading-tight mb-2 text-center">
          {isEn ? "Resort Experience" : "রিসোর্ট অভিজ্ঞতা"}
        </h2>

        <p className="font-sans text-xs sm:text-sm text-[#4B5563] leading-normal text-center max-w-xl mx-auto">
          {isEn 
            ? "Explore iconic luxury zones and attractions across the 125-bigha master plan."
            : "১২৫ বিঘা মেগা প্রকল্পের সিগনেচার জোন ও বিশ্বমানের আকর্ষণসমূহ।"}
        </p>
      </div>

      {/* Full-Screen Edge-to-Edge Image Carousel Container */}
      <div className="relative w-full h-[800px] flex flex-col justify-between overflow-hidden bg-[#070E1E] text-white border-y border-gray-200 group">
        
        {/* Full Screen Cinematic Background Slides */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          {experiences.map((exp, idx) => {
            const isActive = idx === currentIndex;
            return (
              <div
                key={exp.id}
                className={`absolute inset-0 w-full h-full transition-opacity duration-700 ease-in-out ${
                  isActive ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
                }`}
              >
                <img
                  src={exp.imageUrl}
                  alt={isEn ? exp.titleEn : exp.titleBn}
                  loading={idx < 2 ? "eager" : "lazy"}
                  onError={(e) => {
                    if (e.currentTarget.src !== exp.fallbackUrl) {
                      e.currentTarget.src = exp.fallbackUrl;
                    }
                  }}
                  className="w-full h-full object-cover object-center filter brightness-[1.02] contrast-[1.02]"
                  referrerPolicy="no-referrer"
                />
              </div>
            );
          })}

          {/* Minimal Bottom Gradient Only for Button and Title Legibility (Zero heavy dark overlays across the photo) */}
          <div className="absolute inset-x-0 bottom-0 h-48 sm:h-52 bg-gradient-to-t from-black/75 via-black/30 to-transparent z-10 pointer-events-none" />
        </div>

        {/* Carousel Navigation Arrows */}
        <div 
          className="absolute inset-y-0 left-4 sm:left-8 z-30 flex items-center pointer-events-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <button
            onClick={prevSlide}
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-none bg-black/40 hover:bg-[#E5C378] text-white hover:text-[#0B1B3D] border border-white/20 hover:border-[#E5C378] backdrop-blur-md flex items-center justify-center transition-all duration-300 shadow-xl cursor-pointer group/btn"
            aria-label="Previous Resort Experience"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 transition-transform group-hover/btn:-translate-x-0.5" />
          </button>
        </div>

        <div 
          className="absolute inset-y-0 right-4 sm:right-8 z-30 flex items-center pointer-events-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <button
            onClick={nextSlide}
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-none bg-black/40 hover:bg-[#E5C378] text-white hover:text-[#0B1B3D] border border-white/20 hover:border-[#E5C378] backdrop-blur-md flex items-center justify-center transition-all duration-300 shadow-xl cursor-pointer group/btn"
            aria-label="Next Resort Experience"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 transition-transform group-hover/btn:translate-x-0.5" />
          </button>
        </div>

        {/* Spacer pushing content to bottom */}
        <div className="flex-1" />

        {/* Content Overlay - Title Only (Aligned to Bottom-Left) */}
        <div className="relative z-20 w-full max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 mb-3 sm:mb-4 text-left flex flex-col items-start justify-end">
          <h3 className="font-sans text-base sm:text-lg lg:text-xl font-semibold text-white uppercase tracking-wider leading-snug drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)] text-left max-w-xl">
            {isEn ? active.titleEn : active.titleBn}
          </h3>
        </div>

        {/* Surface Buttons Dock at the Bottom */}
        <div 
          className="relative z-20 w-full max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 pb-6 pt-0"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Scrollable / Grid Buttons */}
          <div className="flex overflow-x-auto no-scrollbar sm:grid sm:grid-cols-4 md:grid-cols-7 gap-2 w-full pb-2 sm:pb-0">
            {experiences.map((exp, idx) => {
              const isSelected = idx === currentIndex;
              const ExpIcon = exp.icon;

              return (
                <button
                  key={exp.id}
                  onClick={() => {
                    setCurrentIndex(idx);
                  }}
                  className={`px-3 py-2.5 sm:px-3 sm:py-2.5 rounded-none border text-left transition-all duration-200 cursor-pointer flex items-center gap-2 backdrop-blur-md shrink-0 sm:shrink ${
                    isSelected
                      ? 'border-[#E5C378] bg-[#E5C378] text-[#0B1B3D] font-bold shadow-lg shadow-[#E5C378]/30'
                      : 'border-white/20 bg-black/50 hover:bg-black/75 hover:border-white/40 text-white/90 hover:text-white drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)]'
                  }`}
                >
                  <ExpIcon className={`w-4 h-4 shrink-0 ${isSelected ? 'text-[#0B1B3D]' : 'text-[#E5C378]'}`} />
                  <span className="text-[11px] uppercase tracking-wider truncate block w-full font-medium">
                    {isEn ? exp.titleEn : exp.titleBn}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

