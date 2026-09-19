'use client';
import React, { useState } from 'react';
import { 
  Sparkles, 
  Waves, 
  Utensils, 
  Trees, 
  Dumbbell, 
  Compass, 
  Crown,
  Search,
  Building2,
  Hotel,
  ShieldCheck
} from 'lucide-react';
import { Language } from '../types';
import { AMENITIES } from '../data/projectData';

interface AmenitiesExplorerProps {
  language: Language;
}

export const AmenitiesExplorer: React.FC<AmenitiesExplorerProps> = ({ language }) => {
  const isEn = language === 'en';
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    { id: 'all', name: isEn ? 'All Landmarks' : 'সকল আকর্ষণ', icon: Compass },
    { id: 'Hospitality', name: isEn ? 'Hospitality' : 'হোটেল ও কটেজ', icon: Hotel },
    { id: 'Entertainment', name: isEn ? 'Entertainment' : 'বিনোদন ও পার্ক', icon: Waves },
    { id: 'Wellness & Nature', name: isEn ? 'Wellness & Nature' : 'স্পা ও প্রকৃতি', icon: Trees },
    { id: 'Events & Dining', name: isEn ? 'Events & Dining' : 'ডাইনিং ও কনভেনশন', icon: Utensils }
  ];

  const filteredAmenities = AMENITIES.filter((item) => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesSearch = 
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.titleBn.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="amenities" className="py-28 lg:py-32 bg-white border-b border-slate-200/80">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0B1B3D]/5 border border-[#0B1B3D]/10 text-[#0B1B3D] text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#E5C378]" />
            <span>{isEn ? '125-Bigha World-Class Infrastructure' : '১৮টি বিশ্বমানের সুযোগ-সুবিধা ও আকর্ষণ'}</span>
          </div>
          
          <h2 className="font-sans text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#0B1B3D] mb-4 tracking-tight">
            {isEn ? 'Luxury Amenities & Attractions' : 'অভিজাত সুযোগ-সুবিধা ও বিনোদন কেন্দ্র'}
          </h2>
          
          <p className="text-base text-[#4A4A4A] leading-relaxed max-w-2xl mx-auto">
            {isEn
              ? 'Explore our signature attractions spread across 125 Bighas of masterplanned paradise designed for year-round high-yield tourism footfall.'
              : '১২৫ বিঘা জুড়ে পরিকল্পিত আন্তর্জাতিক মানের সুযোগ-সুবিধা ও বিনোদন জোন, যা নিশ্চিত করবে সারা বছর দেশি-বিদেশি পর্যটকদের উপচে পড়া ভিড়।'}
          </p>
        </div>

        {/* Filter Pills and Search */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-5 mb-14">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2.5 w-full md:w-auto">
            {categories.map((cat) => {
              const IconComp = cat.icon;
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold cursor-pointer transition-all ${
                    isActive
                      ? 'bg-[#0B1B3D] text-white shadow-md'
                      : 'bg-[#F8F9FA] text-slate-700 hover:bg-slate-200/80 border border-slate-200'
                  }`}
                >
                  <IconComp className={`w-3.5 h-3.5 ${isActive ? 'text-[#E5C378]' : 'text-slate-500'}`} />
                  <span>{cat.name}</span>
                </button>
              );
            })}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder={isEn ? "Search amenities..." : "সুযোগ-সুবিধা খুঁজুন..."}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-full bg-[#F8F9FA] border border-slate-200/80 text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#E5C378] focus:bg-white transition-all font-sans"
            />
          </div>
        </div>

        {/* Amenities Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredAmenities.map((amenity) => (
            <div
              key={amenity.id}
              className="group bg-[#F8F9FA] border border-slate-200 rounded-[20px] overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
            >
              <div className="relative h-48 w-full overflow-hidden">
                <img
                  src={amenity.imageUrl}
                  alt={amenity.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-95"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1B3D]/80 via-transparent to-transparent" />
                
                <span className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full bg-[#0B1B3D]/80 text-white text-[10px] font-semibold backdrop-blur-sm border border-white/10 uppercase tracking-wider">
                  {isEn ? amenity.category : amenity.categoryBn}
                </span>

                <h3 className="absolute bottom-3 left-3 right-3 font-sans text-lg font-bold text-white drop-shadow-sm">
                  {isEn ? amenity.title : amenity.titleBn}
                </h3>
              </div>

              <div className="p-4 flex flex-col justify-between flex-1">
                <p className="text-xs text-slate-600 leading-relaxed line-clamp-3 mb-4">
                  {isEn ? amenity.description : amenity.descriptionBn}
                </p>

                <div className="flex items-center justify-between pt-3 border-t border-slate-200 text-[11px] text-slate-500 font-medium">
                  <span className="text-[#159E42] font-semibold">125-Bigha Master Zone</span>
                  <span className="text-[#E5C378]">Free for Shareholders</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
