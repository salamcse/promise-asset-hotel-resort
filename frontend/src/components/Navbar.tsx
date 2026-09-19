'use client';
import React, { useState, useEffect } from 'react';
import { 
  Building2, 
  Menu, 
  X, 
  Sparkles, 
  PhoneCall, 
  Bot, 
  Globe, 
  DollarSign, 
  ShieldCheck, 
  Calculator,
  Compass
} from 'lucide-react';
import { Language, Currency } from '../types';
import { Logo } from './Logo';

interface NavbarProps {
  language: Language;
  setLanguage: (lang: Language) => void;
  currency: Currency;
  setCurrency: (cur: Currency) => void;
  onOpenAiAdvisor: () => void;
  onOpenBooking: (pkgId?: string) => void;
  onOpenTalkToAdvisor?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  language,
  setLanguage,
  currency,
  setCurrency,
  onOpenAiAdvisor,
  onOpenBooking,
  onOpenTalkToAdvisor
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: language === 'en' ? 'Home' : 'হোম', href: '#hero' },
    { name: language === 'en' ? 'Project' : 'প্রকল্প', href: '#master_plan_interactive_showcase' },
    { name: language === 'en' ? 'About Project' : 'প্রকল্প পরিচিতি', href: '#overview' },
    { name: language === 'en' ? 'Why Invest' : 'কেন বিনিয়োগ', href: '#why-invest' },
    { name: language === 'en' ? 'Legal Process' : 'আইনি প্রক্রিয়া', href: '#legal' },
  ];

  return (
    <header 
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#060A17]/75 backdrop-blur-sm border-b border-white/10 py-3 shadow-lg shadow-black/20' 
          : 'bg-[#060A17]/10 backdrop-blur-[3px] border-b border-white/10 py-4 sm:py-5'
      }`}
    >
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between relative z-10">
        {/* Left Side: Brand Logo */}
        <a href="#" className="flex items-center group">
          <Logo variant="light" size="md" />
        </a>

        {/* Right Side: Desktop Nav Links + Action Controls & CTA */}
        <div className="flex items-center gap-6 xl:gap-8">
          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-xs font-medium text-slate-300 hover:text-amber-400 transition-colors uppercase tracking-wider"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Book Now Button */}
          <div className="hidden md:flex items-center gap-3">
            <button
              id="nav-book-btn"
              onClick={() => {
                if (onOpenTalkToAdvisor) {
                  onOpenTalkToAdvisor();
                } else {
                  onOpenBooking();
                }
              }}
              className="flex items-center justify-center px-5 py-2.5 rounded-none border border-white text-white hover:bg-white hover:text-[#0B1B3D] font-bold text-xs shadow-lg uppercase tracking-wider transition-all cursor-pointer"
            >
              <span>TALK TO AN ADVISOR</span>
            </button>
          </div>

          {/* Mobile menu toggle */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => setLanguage(language === 'en' ? 'bn' : 'en')}
              className="px-2 py-1 rounded bg-slate-900 border border-slate-800 text-xs font-semibold text-amber-400"
            >
              {language === 'en' ? 'বাং' : 'EN'}
            </button>
            <button
              id="mobile-menu-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-slate-950/95 border-b border-amber-500/20 px-4 pt-3 pb-6 space-y-3 mt-2 shadow-2xl backdrop-blur-xl">
          <div className="grid grid-cols-2 gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-md bg-slate-900/60 border border-slate-800/80 text-xs font-medium text-slate-200 hover:text-amber-400 hover:border-amber-500/30 transition-all"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-2 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAiAdvisor();
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg bg-indigo-950/60 border border-indigo-500/30 text-indigo-200 text-xs font-medium"
            >
              <Bot className="w-4 h-4 text-indigo-400" />
              <span>{language === 'en' ? 'Chat with AI Investment Advisor' : 'এআই উপদেষ্টার সাথে কথা বলুন'}</span>
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg gold-gradient-bg text-slate-950 font-bold text-xs shadow-md"
            >
              <Sparkles className="w-4 h-4 fill-slate-950" />
              <span>{language === 'en' ? 'Book Investment Share' : 'বিনিয়োগ শেয়ার বুক করুন'}</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
