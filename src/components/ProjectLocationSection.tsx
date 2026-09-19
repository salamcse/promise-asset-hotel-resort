'use client';
import React from 'react';
import { 
  MapPin, 
  Car, 
  Plane, 
  Navigation
} from 'lucide-react';
import { Language } from '../types';

interface ProjectLocationSectionProps {
  language?: Language;
  onOpenBooking?: () => void;
}

export const ProjectLocationSection: React.FC<ProjectLocationSectionProps> = ({
  language = 'en',
  onOpenBooking
}) => {
  const isEn = language === 'en';

  const distances = [
    {
      icon: MapPin,
      placeEn: "Inani Coral Beach & Marine Drive",
      placeBn: "ইনানী কোরাল বিচ ও মেরিন ড্রাইভ",
      timeEn: "Direct Access (0 Mins)",
      timeBn: "সরাসরি সংযোগ (০ মিনিট)"
    },
    {
      icon: Plane,
      placeEn: "Cox's Bazar International Airport",
      placeBn: "কক্সবাজার আন্তর্জাতিক বিমানবন্দর",
      timeEn: "35 Mins Drive",
      timeBn: "৩৫ মিনিট ড্রাইভ"
    },
    {
      icon: Car,
      placeEn: "Himchari National Park & Waterfall",
      placeBn: "হিমছড়ি জাতীয় উদ্যান ও ঝর্ণা",
      timeEn: "15 Mins",
      timeBn: "১৫ মিনিট"
    },
    {
      icon: Navigation,
      placeEn: "Kolatoli Tourism & Commercial Hub",
      placeBn: "কলাতলী পর্যটন ও বাণিজ্যিক কেন্দ্র",
      timeEn: "25 Mins",
      timeBn: "২৫ মিনিট"
    }
  ];

  return (
    <section 
      id="location" 
      className="py-8 bg-[#F8F9FA] text-[#0B1B3D] border-b border-gray-200 scroll-mt-12 font-sans relative overflow-hidden"
    >
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-6 sm:mb-8">
          <div className="inline-flex items-center justify-center gap-2 mb-1.5">
            <span className="w-8 h-[1px] bg-[#E5C378]" />
            <p className="font-sans text-[11px] tracking-[0.2em] uppercase text-[#E5C378] font-bold">
              {isEn ? "LOCATION & ACCESS" : "অবস্থান ও যোগাযোগ"}
            </p>
            <span className="w-8 h-[1px] bg-[#E5C378]" />
          </div>

          <h2 className="font-sans text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0B1B3D] mb-1.5 tracking-tight">
            {isEn ? "Location" : "কৌশলগত অবস্থান"}
          </h2>

          <p className="font-sans text-xs sm:text-sm text-[#4B5563] leading-normal text-center max-w-md mx-auto">
            {isEn
              ? "Prime Marine Drive corridor in Inani with seamless connectivity."
              : "ইনানী মেরিন ড্রাইভ সংলগ্ন সংযোগস্থল।"}
          </p>
        </div>

        {/* 2-Column Split: Location Map View + Distance Cards with Button Directly Under */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-6 items-stretch">
          
          {/* Left Column: Enlarged Clean Location Map Image */}
          <div className="lg:col-span-7 xl:col-span-7 bg-white border border-gray-200 shadow-sm overflow-hidden relative min-h-[360px] sm:min-h-[400px] lg:min-h-[420px] h-full group">
            
            {/* Map Image Viewport (Fills entire container) */}
            <div className="absolute inset-0 w-full h-full bg-[#f1f4f8] overflow-hidden flex items-center justify-center">
              <img
                src="/ChatGPT Image Sep 3, 2026, 03_05_27 PM.png"
                alt="The Promise Resort Inani Location Map"
                onError={(e) => {
                  if (e.currentTarget.src !== '/location_map_inani.png') {
                    e.currentTarget.src = '/location_map_inani.png';
                  }
                }}
                className="w-full h-full object-cover object-center filter contrast-[1.02] group-hover:scale-[1.02] transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/10 pointer-events-none" />
            </div>

            {/* Top-Right Floating Pin Icon to Open Google Maps */}
            <a
              href="https://www.google.com/maps/search/?api=1&query=Inani+Beach+Marine+Drive+Coxs+Bazar"
              target="_blank"
              rel="noopener noreferrer"
              title={isEn ? "Open in Google Maps" : "গুগল ম্যাপে ওপেন করুন"}
              aria-label={isEn ? "Open in Google Maps" : "গুগল ম্যাপে ওপেন করুন"}
              className="absolute top-3.5 right-3.5 sm:top-4 sm:right-4 z-20 w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center bg-[#0B1B3D]/90 hover:bg-[#E5C378] text-[#E5C378] hover:text-[#0B1B3D] border border-white/20 backdrop-blur-md transition-all duration-300 shadow-lg cursor-pointer group/pin"
            >
              <MapPin className="w-5 h-5 transition-colors" />
            </a>

          </div>

          {/* Right Column: 2x2 Distance Cards + Confirm Your Dream Button Directly Under */}
          <div className="lg:col-span-5 xl:col-span-5 flex flex-col justify-between gap-3.5 sm:gap-4 h-full">
            <div className="grid grid-cols-2 gap-3 sm:gap-4 flex-1">
              {distances.map((dist, idx) => {
                const IconComponent = dist.icon;
                return (
                  <div 
                    key={idx} 
                    className="p-4 sm:p-5 bg-white border border-gray-200 hover:border-[#E5C378] transition-all duration-300 flex flex-col justify-between text-left group shadow-xs hover:shadow-md"
                  >
                    {/* Top Row: Icon + Blue Lined Tag */}
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <div className="w-10 h-10 sm:w-11 sm:h-11 bg-[#F8F9FA] border border-gray-200 text-[#0B1B3D] group-hover:bg-[#0B1B3D] group-hover:text-[#E5C378] group-hover:border-[#0B1B3D] transition-colors flex items-center justify-center shrink-0">
                        <IconComponent className="w-5 h-5" />
                      </div>

                      {/* Light Gold Accent Tag */}
                      <span className="inline-flex items-center px-2 sm:px-2.5 py-1 text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-[#C49538] border border-[#E5C378] bg-[#E5C378]/15 whitespace-nowrap">
                        {isEn ? dist.timeEn : dist.timeBn}
                      </span>
                    </div>

                    {/* Title (Subtitles Removed) */}
                    <div>
                      <h4 className="font-sans text-xs sm:text-[13px] lg:text-sm font-bold text-[#0B1B3D] uppercase tracking-wide leading-snug">
                        {isEn ? dist.placeEn : dist.placeBn}
                      </h4>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Call to Action Button: Positioned Directly Under Cards */}
            <button
              id="btn-confirm-your-dream"
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
              className="w-full py-3.5 sm:py-4 bg-[#0B1B3D] text-[#E5C378] hover:bg-[#E5C378] hover:text-[#0B1B3D] border-2 border-[#E5C378] font-sans text-xs sm:text-sm font-bold uppercase tracking-[0.2em] rounded-none transition-all duration-300 shadow-md hover:shadow-[0_12px_28px_rgba(229,195,120,0.3)] cursor-pointer flex items-center justify-center gap-2.5 group shrink-0"
            >
              <span>{isEn ? "Confirm Your Dream" : "কনফার্ম করুন আপনার স্বপ্ন"}</span>
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
