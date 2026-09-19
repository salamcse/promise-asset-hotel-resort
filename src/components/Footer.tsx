'use client';
import React, { useState } from 'react';
import { 
  Building2, 
  MapPin, 
  Phone, 
  Mail, 
  ShieldCheck, 
  Globe,
  Facebook,
  Linkedin,
  Youtube,
  Instagram,
  CheckCircle2
} from 'lucide-react';
import { Language } from '../types';
import { Logo } from './Logo';
import { isValidEmail } from '../utils/validators';

interface FooterProps {
  language?: Language;
}

export const Footer: React.FC<FooterProps> = ({
  language = 'en'
}) => {
  const isEn = language === 'en';
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [error, setError] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !isValidEmail(email)) {
      setError(isEn ? 'Please enter a valid email address.' : 'সঠিক ইমেইল অ্যাড্রেস লিখুন।');
      return;
    }
    setError('');
    setSubscribed(true);
  };

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#0B1B3D] text-white border-t border-white/10 font-sans relative overflow-hidden">
      
      {/* Main 4-Column Footer Grid */}
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          
          {/* Col 1: Brand & Overview (lg:col-span-4) */}
          <div className="lg:col-span-4 text-left">
            <div className="mb-6">
              <Logo variant="light" size="lg" />
            </div>
            
            <p className="font-sans text-xs sm:text-sm text-gray-300 leading-relaxed mb-6 max-w-sm text-left">
              {isEn
                ? "The Promise Hotel & Resort is a masterplanned 125-bigha luxury hospitality enclave in Inani, Cox's Bazar, developed by Promise Assets Limited."
                : "দ্য প্রমিজ হোটেল অ্যান্ড রিসোর্ট কক্সবাজারের ইনানীতে ১২৫ বিঘা জমির উপর প্রমিজ অ্যাসেটস লিমিটেড কর্তৃক বাস্তবায়নাধীন ৫-তারকা ইকো ট্যুরিজম মেগা প্রকল্প।"}
            </p>

            {/* Social Icons with Magnetic Hover Effect */}
            <div className="flex items-center gap-3 mb-6">
              {[
                { icon: Facebook, label: "Facebook", href: "#" },
                { icon: Linkedin, label: "LinkedIn", href: "#" },
                { icon: Youtube, label: "YouTube", href: "#" },
                { icon: Instagram, label: "Instagram", href: "#" }
              ].map((soc, i) => {
                const Icon = soc.icon;
                return (
                  <a
                    key={i}
                    href={soc.href}
                    aria-label={soc.label}
                    className="w-9 h-9 rounded-none bg-white/5 border border-white/20 text-gray-300 flex items-center justify-center transition-all duration-300 hover:bg-[#E5C378] hover:text-[#0B1B3D] hover:border-[#E5C378] hover:scale-110 hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(229,195,120,0.5)] cursor-pointer"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>

            <div className="p-4 bg-white/5 backdrop-blur-md border border-white/15 rounded-none text-xs text-gray-300 space-y-1 text-left">
              <p className="font-bold text-[#E5C378] uppercase tracking-wider text-left">
                {isEn ? "DEVELOPER IDENTITY" : "ডেভেলপার পরিচিতি"}
              </p>
              <p className="text-left">Promise Assets Limited</p>
              <p className="text-gray-400 text-left">Govt. Registered Hospitality Developer</p>
            </div>
          </div>

          {/* Col 2: Quick Links (lg:col-span-2) */}
          <div className="lg:col-span-2 text-left">
            <h4 className="font-sans text-base font-bold text-white mb-6 uppercase tracking-wider text-left">
              {isEn ? "Quick Links" : "প্রয়োজনীয় লিংক"}
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm text-gray-300 font-medium">
              <li>
                <button onClick={() => scrollTo('overview')} className="hover:text-[#E5C378] hover:translate-x-1 transition-all duration-200 cursor-pointer text-left inline-block">
                  {isEn ? "Project Overview" : "প্রকল্প পরিচিতি"}
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('packages')} className="hover:text-[#E5C378] hover:translate-x-1 transition-all duration-200 cursor-pointer text-left inline-block">
                  {isEn ? "Investment Packages" : "বিনিয়োগ প্যাকেজ"}
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('why-invest')} className="hover:text-[#E5C378] hover:translate-x-1 transition-all duration-200 cursor-pointer text-left inline-block">
                  {isEn ? "Why Invest" : "কেন বিনিয়োগ"}
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('legal')} className="hover:text-[#E5C378] hover:translate-x-1 transition-all duration-200 cursor-pointer text-left inline-block">
                  {isEn ? "Legal Safeguards" : "আইনি নিরাপত্তা"}
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('timeline')} className="hover:text-[#E5C378] hover:translate-x-1 transition-all duration-200 cursor-pointer text-left inline-block">
                  {isEn ? "Project Timeline" : "প্রকল্পের সময়রেখা"}
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Get in Touch (lg:col-span-3) */}
          <div className="lg:col-span-3 text-left">
            <h4 className="font-sans text-base font-bold text-white mb-6 uppercase tracking-wider text-left">
              {isEn ? "Get In Touch" : "যোগাযোগের ঠিকানা"}
            </h4>
            <div className="space-y-4 text-xs sm:text-sm text-gray-300 text-left">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#E5C378] shrink-0 mt-0.5" />
                <span className="text-left">
                  {isEn 
                    ? "Marine Drive, Inani, Ukhia, Cox's Bazar, Bangladesh" 
                    : "মেরিন ড্রাইভ, ইনানী, উখিয়া, কক্সবাজার, বাংলাদেশ"}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#E5C378] shrink-0" />
                <span className="text-left">+880 1700-000000 / +880 9612-000000</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#E5C378] shrink-0" />
                <span className="text-left">invest@thepromisehotel.com</span>
              </div>
            </div>
          </div>

          {/* Col 4: Newsletter Subscribe (lg:col-span-3) */}
          <div className="lg:col-span-3 text-left">
            <h4 className="font-sans text-base font-bold text-white mb-6 uppercase tracking-wider text-left">
              {isEn ? "Investor Newsletter" : "ইনভেস্টর আপডেট"}
            </h4>
            <p className="font-sans text-xs text-gray-300 leading-relaxed mb-4 text-left">
              {isEn
                ? "Subscribe to quarterly construction progress reports and financial audit disclosures."
                : "নির্মাণকাজের ত্রৈমাসিক অডিট ও অগ্রগতির প্রতিবেদন সরাসরি ইমেইলে পেতে সাবস্ক্রাইব করুন।"}
            </p>

            {subscribed ? (
              <div className="p-3 bg-white/10 border border-[#E5C378]/30 text-white text-xs flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#E5C378] shrink-0" />
                <span>
                  {isEn
                    ? "Thanks For Subscribing! We will contact you for updates."
                    : "সাবস্ক্রাইব করার জন্য ধন্যবাদ! আমরা আপডেটের জন্য যোগাযোগ করব।"}
                </span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <div className="flex">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (error) setError('');
                    }}
                    placeholder={isEn ? "Enter your email" : "আপনার ইমেইল দিন"}
                    className="w-full px-3.5 py-3 bg-white/10 border border-white/20 rounded-none text-xs text-white placeholder:text-gray-400 focus:outline-none focus:border-[#E5C378] focus:ring-1 focus:ring-[#E5C378]"
                  />
                  <button
                    type="submit"
                    className="px-4 py-3 bg-[#E5C378] hover:bg-white text-[#0B1B3D] font-bold text-xs uppercase rounded-none transition-all duration-300 shrink-0 cursor-pointer hover:shadow-[0_0_15px_rgba(229,195,120,0.5)]"
                    aria-label="Subscribe to newsletter"
                  >
                    <span>{isEn ? "Join" : "যুক্ত হোন"}</span>
                  </button>
                </div>
                {error && (
                  <p className="text-[11px] text-rose-300 text-left font-medium">{error}</p>
                )}
                <span className="text-[10px] text-gray-400 block text-left">
                  {isEn ? "Confidential. No third-party sharing." : "আপনার ইমেইল শতভাগ নিরাপদ ও গোপন রাখা হবে।"}
                </span>
              </form>
            )}
          </div>

        </div>
      </div>

      {/* Bottom Sub-footer */}
      <div className="border-t border-white/10 py-6 relative z-10">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <p className="text-left">
            © {new Date().getFullYear()} The Promise Hotel & Resort. Developed by Promise Assets Ltd. All rights reserved.
          </p>
        </div>
      </div>

    </footer>
  );
};
