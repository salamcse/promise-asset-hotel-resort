'use client';
import React, { useState, useEffect, useCallback } from 'react';
import { 
  Menu, 
  X,
  Shield,
  TrendingUp,
  Crown,
  Building2,
  Palmtree,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { Language, Currency } from '../types';
import { Logo } from './Logo';

interface ContainedHeroSectionProps {
  language: Language;
  currency: Currency;
  onOpenBooking: () => void;
  onOpenPackagesPreview?: () => void;
  onOpenContactPreview?: () => void;
  onOpenAboutPreview?: () => void;
  onOpenWhyInvestPreview?: () => void;
  onOpenLegalPreview?: () => void;
  onOpenTalkToAdvisor?: () => void;
  onToggleLanguage?: () => void;
  onToggleCurrency?: () => void;
}

export const ContainedHeroSection: React.FC<ContainedHeroSectionProps> = ({
  language,
  currency,
  onOpenBooking,
  onOpenPackagesPreview,
  onOpenContactPreview,
  onOpenAboutPreview,
  onOpenWhyInvestPreview,
  onOpenLegalPreview,
  onOpenTalkToAdvisor,
  onToggleLanguage,
  onToggleCurrency
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const isEn = language === 'en';

  // Hero Slides List: 01.png + Convention Center + Eco Cottage + Wedding Venue + Theme Park
  const heroSlides = [
    { src: '/01.png', alt: 'The Promise Hotel & Resort Main View' },
    { src: '/Convention Center.png', alt: 'The Promise Grand Convention Center' },
    { src: '/Eco Cottage.png', alt: 'The Promise Luxury Eco Cottages' },
    { src: '/Wedding Venue.png', alt: 'The Promise Royal Wedding Venue' },
    { src: '/Theme Park.png', alt: 'The Promise Theme Park & Rides' }
  ];

  // Preload hero images to eliminate initial render delay and ensure uniform carousel transitions
  useEffect(() => {
    heroSlides.forEach((slide) => {
      const img = new Image();
      img.src = slide.src;
    });
  }, [heroSlides]);

  // Auto-Slide Timer (4000 ms delay between changes)
  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  }, [heroSlides.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  }, [heroSlides.length]);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);
    return () => clearInterval(interval);
  }, [isPaused, nextSlide]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const stats = [
    {
      icon: Shield,
      titleEn: "100% Registered",
      titleBn: "১০০% সাফ-কবলা",
      subEn: "Land Ownership",
      subBn: "জমির মালিকানা"
    },
    {
      icon: TrendingUp,
      titleEn: "High Growth",
      titleBn: "উচ্চ প্রবৃদ্ধি",
      subEn: "Value Appreciation",
      subBn: "সম্পদের মূল্যবৃদ্ধি"
    },
    {
      icon: Crown,
      titleEn: "125 Bigha",
      titleBn: "১২৫ বিঘা",
      subEn: "Project Share",
      subBn: "মেগা প্রকল্প শেয়ার"
    },
    {
      icon: Building2,
      titleEn: "CSU Entitlement",
      titleBn: "সিএসইউ বরাদ্দ",
      subEn: "Construction Space",
      subBn: "রিসোর্ট নির্মাণ স্পেস"
    },
    {
      icon: Palmtree,
      titleEn: "5-Star Lifestyle",
      titleBn: "৫-তারকা লাইফস্টাইল",
      subEn: "Profit Sharing",
      subBn: "হোটেল প্রফিট শেয়ারিং"
    }
  ];

  return (
    <section 
      id="hero" 
      className="hero-compact-container relative z-20 w-full flex flex-col justify-between overflow-visible bg-[#060A17] text-white font-sans selection:bg-[#E5C378] selection:text-[#0B1B3D]"
      style={{ height: '850px', minHeight: '850px' }}
    >
      {/* ======================================================== */}
      {/* 1. HERO BACKGROUND SLIDESHOW                             */}
      {/* ======================================================== */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {heroSlides.map((slide, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              idx === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
            }`}
          >
            <img
              src={slide.src}
              alt={slide.alt}
              loading="eager"
              className="w-full h-full object-cover object-center brightness-[1.02] contrast-[1.03] saturate-[1.05]"
              referrerPolicy="no-referrer"
            />
          </div>
        ))}

        {/* Soft, light gradient overlay to keep text readable without making the background dark */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#060A17]/40 via-[#060A17]/15 to-[#060A17]/45" />
        
        {/* Subtle, soft contrast glow behind central typography */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] sm:w-[950px] h-[450px] sm:h-[550px] bg-[radial-gradient(ellipse_at_center,rgba(6,10,23,0.25)_0%,rgba(6,10,23,0.05)_50%,transparent_80%)] blur-2xl pointer-events-none" />
      </div>

      {/* Hero Slideshow Navigation Arrows (Desktop) */}
      <div 
        className="absolute inset-y-0 left-4 sm:left-8 z-30 hidden sm:flex items-center pointer-events-auto"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <button
          onClick={prevSlide}
          className="w-9 h-9 rounded-none bg-black/30 hover:bg-[#E5C378] text-white hover:text-[#0B1B3D] border border-white/20 hover:border-[#E5C378] backdrop-blur-sm flex items-center justify-center transition-all duration-300 shadow-md cursor-pointer group"
          aria-label="Previous Slide"
        >
          <ChevronLeft className="w-4 h-4 transition-transform group-hover:-translate-x-0.5" />
        </button>
      </div>

      <div 
        className="absolute inset-y-0 right-4 sm:right-8 z-30 hidden sm:flex items-center pointer-events-auto"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <button
          onClick={nextSlide}
          className="w-9 h-9 rounded-none bg-black/30 hover:bg-[#E5C378] text-white hover:text-[#0B1B3D] border border-white/20 hover:border-[#E5C378] backdrop-blur-sm flex items-center justify-center transition-all duration-300 shadow-md cursor-pointer group"
          aria-label="Next Slide"
        >
          <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
        </button>
      </div>

      {/* ======================================================== */}
      {/* 2. TOP NAVBAR (Clean Transparent & Subtle Glass)         */}
      {/* ======================================================== */}
      <header 
        id="main-navbar"
        className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
          isScrolled 
            ? 'bg-[#060A17]/75 backdrop-blur-sm border-b border-white/10 shadow-lg shadow-black/20 py-3' 
            : 'bg-[#060A17]/10 backdrop-blur-[3px] border-b border-white/10 py-4 sm:py-5'
        }`}
      >
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between relative z-10">
          
          {/* FAR LEFT: Brand Logo */}
          <a href="#hero" className="flex items-center gap-3 cursor-pointer group shrink-0">
            <Logo variant="light" size="md" />
          </a>

          {/* FAR RIGHT: Navigation Links + Right-Aligned CTA Button */}
          <div className="flex items-center gap-6 xl:gap-8">
            
            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-xs font-semibold uppercase tracking-[0.14em] text-white/90">
              <button 
                onClick={() => scrollToSection('hero')} 
                className="hover:text-[#E5C378] transition-colors py-1 cursor-pointer"
              >
                {isEn ? 'Home' : 'হোম'}
              </button>
              <button 
                onClick={() => scrollToSection('overview')} 
                className="hover:text-[#E5C378] transition-colors py-1 cursor-pointer"
              >
                {isEn ? 'About Project' : 'প্রকল্প পরিচিতি'}
              </button>
              <button 
                onClick={() => scrollToSection('why-invest')} 
                className="hover:text-[#E5C378] transition-colors py-1 cursor-pointer"
              >
                {isEn ? 'Why Invest' : 'কেন বিনিয়োগ'}
              </button>
              <button 
                onClick={() => scrollToSection('legal')} 
                className="hover:text-[#E5C378] transition-colors py-1 cursor-pointer"
              >
                {isEn ? 'Legal Process' : 'আইনি প্রক্রিয়া'}
              </button>
            </nav>

            {/* Right-Aligned CTA Button: TALK TO AN ADVISOR */}
            <button
              onClick={onOpenTalkToAdvisor || onOpenBooking}
              className="hidden md:inline-flex items-center justify-center px-5 py-2.5 rounded-none border border-white/70 hover:border-white text-white bg-black/20 hover:bg-white hover:text-[#0B1B3D] text-xs font-bold uppercase tracking-[0.14em] transition-all duration-300 cursor-pointer shadow-sm shrink-0"
            >
              <span>{isEn ? 'TALK TO AN ADVISOR' : 'পরামর্শকের সাথে কথা বলুন'}</span>
            </button>

            {/* Mobile Hamburger Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-none border border-white/25 text-white bg-black/20 hover:bg-white/10 transition-colors cursor-pointer"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-[#060A17]/98 backdrop-blur-2xl p-8 flex flex-col justify-between animate-fadeIn">
          <div className="flex items-center justify-between pb-6 border-b border-white/15">
            <Logo variant="light" size="sm" />
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 rounded-none border border-white/20 text-white"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="flex flex-col gap-4 text-base font-medium tracking-wide my-auto text-left">
            <button 
              onClick={() => scrollToSection('hero')}
              className="text-left hover:text-[#E5C378] transition-colors py-2 border-b border-white/5 font-sans font-semibold tracking-wider text-base uppercase"
            >
              {isEn ? 'Home' : 'হোম'}
            </button>
            <button 
              onClick={() => scrollToSection('overview')}
              className="text-left hover:text-[#E5C378] transition-colors py-2 border-b border-white/5 font-sans font-semibold tracking-wider text-base uppercase"
            >
              {isEn ? 'About Project' : 'প্রকল্প পরিচিতি'}
            </button>
            <button 
              onClick={() => scrollToSection('why-invest')}
              className="text-left hover:text-[#E5C378] transition-colors py-2 border-b border-white/5 font-sans font-semibold tracking-wider text-base uppercase"
            >
              {isEn ? 'Why Invest' : 'কেন বিনিয়োগ'}
            </button>
            <button 
              onClick={() => scrollToSection('legal')}
              className="text-left hover:text-[#E5C378] transition-colors py-2 border-b border-white/5 font-sans font-semibold tracking-wider text-base uppercase"
            >
              {isEn ? 'Legal Process' : 'আইনি প্রক্রিয়া'}
            </button>
          </div>

          <div className="pt-6 border-t border-white/15 flex flex-col gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                if (onOpenTalkToAdvisor) {
                  onOpenTalkToAdvisor();
                } else {
                  onOpenBooking();
                }
              }}
              className="w-full py-3.5 rounded-none bg-[#E5C378] text-[#0B1B3D] font-bold text-xs uppercase tracking-wider text-center cursor-pointer shadow-sm flex items-center justify-center"
            >
              <span>{isEn ? 'TALK TO AN ADVISOR' : 'পরামর্শকের সাথে কথা বলুন'}</span>
            </button>
          </div>
        </div>
      )}

      {/* Top Spacer to offset header */}
      <div className="h-12 sm:h-14 w-full shrink-0" />

      {/* ======================================================== */}
      {/* 3. CENTER HERO CONTENT                                    */}
      {/* ======================================================== */}
      <div className="relative z-20 w-full max-w-[950px] mx-auto px-4 sm:px-6 my-auto py-6 sm:py-8 text-center flex flex-col items-center justify-center">
        
        {/* Minimal, Elegant, Luxurious Centered Headline */}
        <h1 className="font-sans text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-semibold text-white uppercase tracking-[0.16em] sm:tracking-[0.22em] leading-[1.2] mb-3 sm:mb-4 drop-shadow-[0_4px_16px_rgba(0,0,0,0.7)] text-center">
          {isEn ? (
            <>
              THE PROMISE <br />
              HOTEL &amp; RESORT
            </>
          ) : (
            <>
              দ্য প্রমিজ <br />
              হোটেল অ্যান্ড রিসোর্ট
            </>
          )}
        </h1>

        {/* Sub-headline */}
        <p className="font-sans text-sm sm:text-base md:text-lg text-gray-200 font-normal tracking-wide max-w-xl mb-6 sm:mb-8 leading-relaxed text-center drop-shadow-[0_2px_6px_rgba(0,0,0,0.5)]">
          {isEn 
            ? "Own Land. Build Wealth. Enjoy Luxury Resort Lifestyle." 
            : "জমির শতভাগ সাফ-কবলা মালিকানা। নিশ্চিত সম্পদ বৃদ্ধি। পাঁচ তারকা লাইফস্টাইল।"}
        </p>

        {/* Centered 3-Button Action Group (All opening clean preview modals!) */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto">
          {/* Primary CTA: Book Your Share (Solid Gold -> Opens Information Form Preview Modal) */}
          <button
            onClick={onOpenBooking}
            className="rounded-none px-6 sm:px-7 py-3 sm:py-3.5 text-xs sm:text-sm font-bold tracking-wider transition-all duration-300 bg-[#E5C378] text-[#0B1B3D] hover:bg-white hover:shadow-[0_0_25px_rgba(229,195,120,0.5)] cursor-pointer flex items-center justify-center shadow-lg min-w-[150px]"
          >
            <span>{isEn ? "Book Your Share" : "শেয়ার বুকিং করুন"}</span>
          </button>

          {/* Secondary CTA: Explore Packages (Opens Packages Preview Modal!) */}
          <button
            onClick={() => {
              if (onOpenPackagesPreview) onOpenPackagesPreview();
              else scrollToSection('packages');
            }}
            className="rounded-none px-6 sm:px-7 py-3 sm:py-3.5 text-xs sm:text-sm font-bold tracking-wider transition-all duration-300 border border-white/80 bg-[#070E1E] text-white hover:bg-white hover:text-[#0B1B3D] cursor-pointer flex items-center justify-center shadow-md min-w-[150px]"
          >
            <span>{isEn ? "Explore Packages" : "বিনিয়োগ প্যাকেজ"}</span>
          </button>

          {/* Tertiary CTA: Contact Us (Opens Contact Preview Modal!) */}
          <button
            onClick={() => {
              if (onOpenContactPreview) onOpenContactPreview();
              else scrollToSection('contact');
            }}
            className="rounded-none px-6 sm:px-7 py-3 sm:py-3.5 text-xs sm:text-sm font-bold tracking-wider transition-all duration-300 border border-[#7C6842] bg-[#141926]/90 text-[#E5C378] hover:bg-[#E5C378] hover:text-[#0B1B3D] cursor-pointer flex items-center justify-center shadow-md min-w-[150px]"
          >
            <span>{isEn ? "Contact Us" : "যোগাযোগ করুন"}</span>
          </button>
        </div>

      </div>

      {/* ======================================================== */}
      {/* 4. BOTTOM 5-COLUMN STATS / HIGHLIGHTS BAR (50/50 Overlap)*/}
      {/* ======================================================== */}
      <div className="relative z-30 w-full max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 -mb-10 sm:-mb-12 md:-mb-14 pt-4 shrink-0">
        <div className="relative bg-gradient-to-b from-[#0B1B3D]/65 via-[#091736]/60 to-[#071026]/75 hover:from-[#0E234E]/75 hover:to-[#0B1B3D]/85 backdrop-blur-xl border border-[#4B6B94]/35 hover:border-[#E5C378]/50 shadow-[0_20px_50px_rgba(4,9,20,0.6),inset_0_1px_1px_rgba(255,255,255,0.25)] grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 divide-y md:divide-y-0 md:divide-x divide-white/15 transition-all duration-300 overflow-hidden">
          {/* Top Liquid Glass Specular Highlight Sheen */}
          <div className="absolute -top-[1px] inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-white/50 to-transparent pointer-events-none z-10" />

          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div 
                key={idx} 
                className={`p-4 sm:p-5 flex items-center gap-3.5 text-left group hover:bg-[#122754]/35 transition-all duration-300 relative ${
                  idx === 4 ? 'col-span-2 md:col-span-1' : ''
                }`}
              >
                {/* Dark Glassy Icon Box */}
                <div className="w-10 h-10 bg-[#060B18]/70 backdrop-blur-md border border-[#E5C378]/50 text-[#E5C378] flex items-center justify-center shrink-0 shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)] group-hover:border-[#E5C378] group-hover:bg-[#E5C378] group-hover:text-[#0B1B3D] transition-all duration-300">
                  <Icon className="w-5 h-5" />
                </div>

                {/* Text Content */}
                <div className="min-w-0">
                  <h4 className="font-sans font-semibold text-xs sm:text-sm lg:text-[13px] text-white leading-tight tracking-[0.08em] uppercase group-hover:text-[#E5C378] transition-colors">
                    {isEn ? stat.titleEn : stat.titleBn}
                  </h4>
                  <p className="font-sans text-[10px] sm:text-xs text-gray-300 mt-0.5 tracking-normal">
                    {isEn ? stat.subEn : stat.subBn}
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

