'use client';
import React from 'react';
import { 
  Sparkles,
  Layers,
  Building2,
  KeyRound
} from 'lucide-react';
import { Language } from '../types';

interface DevelopmentTimelineSectionProps {
  language?: Language;
}

export const DevelopmentTimelineSection: React.FC<DevelopmentTimelineSectionProps> = ({
  language = 'en'
}) => {
  const isEn = language === 'en';

  const milestones = [
    {
      step: "01",
      titleEn: "Land & Master Plan",
      titleBn: "ভূমি ও মাস্টারপ্ল্যান",
      period: "2026",
      statusEn: "Completed",
      statusBn: "সম্পন্ন",
      statusType: "completed",
      icon: Layers,
      descEn: "125-bigha vetted demarcation, boundary piling & environmental clearances.",
      descBn: "১২৫ বিঘা নিষ্কণ্টক জমির সীমানা নির্ধারণ, পাইলিং ও পরিবেশ ছাড়পত্র।"
    },
    {
      step: "02",
      titleEn: "Site Infrastructure",
      titleBn: "অবকাঠামো ও খনন",
      period: "2026 – 2027",
      statusEn: "In Progress",
      statusBn: "চলমান",
      statusType: "active",
      icon: Building2,
      descEn: "Central lagoon excavation, deep foundation piling & internal road network.",
      descBn: "সেন্ট্রাল লেক খনন, পাইলিং ফাউন্ডেশন ও অভ্যন্তরীণ সড়ক নেটওয়ার্ক।"
    },
    {
      step: "03",
      titleEn: "Core Superstructure",
      titleBn: "মূল রিসোর্ট ও অ্যামিনিটিজ",
      period: "2027 – 2029",
      statusEn: "Scheduled",
      statusBn: "পরিকল্পিত",
      statusType: "upcoming",
      icon: Sparkles,
      descEn: "5-star hotel tower, lagoon villas & international water park structure.",
      descBn: "৫-তারকা হোটেল টাওয়ার, লেক ভিলা ও ওয়াটার পার্কের মূল কাঠামো নির্মাণ।"
    },
    {
      step: "04",
      titleEn: "Grand Opening & Handover",
      titleBn: "হস্তান্তর ও শুভ উদ্বোধন",
      period: "2029 – 2030",
      statusEn: "Target Delivery",
      statusBn: "চূড়ান্ত হস্তান্তর",
      statusType: "future",
      icon: KeyRound,
      descEn: "Luxury interior fit-outs, hospitality brand launch & shareholder VIP handover.",
      descBn: "লাক্সারি ইন্টেরিয়র ফিনিশিং, ব্র্যান্ড উদ্বোধন ও অংশীদারদের চাবি হস্তান্তর।"
    }
  ];

  return (
    <section 
      id="project_progress" 
      className="py-8 scroll-mt-12 font-sans relative overflow-hidden bg-[#070E1E] text-white border-b border-white/10"
    >
      <div id="timeline" className="scroll-mt-12" />

      {/* Background Image with Fallback - Brightened so resort scenery shines through the frosted glass */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src="/05.png"
          alt="The Promise Development Progress"
          onError={(e) => {
            if (e.currentTarget.src !== "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=2000&auto=format&fit=crop") {
              e.currentTarget.src = "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=2000&auto=format&fit=crop";
            }
          }}
          className="w-full h-full object-cover object-center filter brightness-[1.10] contrast-[1.08] saturate-[1.15] pointer-events-none"
        />
        {/* Lighter, clear luxury gradient overlay allowing the vibrant resort background to illuminate through the frosted glass */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#070E1E]/40 via-[#070E1E]/15 to-[#070E1E]/60" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#E5C378]/15 via-transparent to-transparent pointer-events-none" />
      </div>

      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
          <div className="inline-flex items-center justify-center gap-2 mb-2">
            <span className="w-8 h-[1px] bg-[#E5C378]" />
            <p className="font-sans text-xs tracking-[0.2em] uppercase text-[#E5C378] font-bold text-center">
              {isEn ? "STRATEGIC EXECUTION ROADMAP" : "নির্মাণ ও বাস্তবায়নের রূপরেখা"}
            </p>
            <span className="w-8 h-[1px] bg-[#E5C378]" />
          </div>

          <h2 className="font-sans text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-2 tracking-tight text-center drop-shadow-sm">
            {isEn ? "Development Timeline" : "কাজের অগ্রগতি"}
          </h2>

          <p className="font-sans text-xs sm:text-sm text-gray-300 leading-normal text-center max-w-xl mx-auto">
            {isEn 
              ? "Structured four-phase roadmap targeting full completion and handover by 2030."
              : "২০৩০ সালের মধ্যে সফল হস্তান্তর ও বাণিজ্যিক উদ্বোধনের ৪-ধাপের রূপরেখা।"}
          </p>
        </div>

        {/* ======================================================== */}
        {/* PROGRESS LINE COMPONENT (Horizontal on md/lg, connected) */}
        {/* ======================================================== */}
        
        {/* Desktop / Tablet Progressline View (md and above) */}
        <div className="hidden md:block relative pt-2 pb-6">
          
          {/* Continuous Progress Line with Centered Numbered Circles */}
          <div className="relative h-20 flex items-center justify-center my-2">
            {/* The Horizontal Line spanning from center of column 1 to slightly past column 4 */}
            <div className="absolute left-[12.5%] right-[6%] top-1/2 -translate-y-1/2 h-[2px] bg-gradient-to-r from-[#E5C378] via-[#E5C378] to-[#E5C378]/40 z-0 pointer-events-none shadow-[0_0_10px_rgba(229,195,120,0.5)]">
              {/* Terminal indicator dot at the end of the line */}
              <div className="absolute -right-1 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#E5C378] shadow-[0_0_6px_rgba(229,195,120,0.8)]" />
            </div>

            {/* 4 Steps Circles Grid - Guaranteed identical vertical center with the track line */}
            <div className="grid grid-cols-4 gap-4 lg:gap-8 w-full relative z-10">
              {milestones.map((item, idx) => {
                const isActive = item.statusType === 'active';
                const isCompleted = item.statusType === 'completed';

                return (
                  <div key={idx} className="flex items-center justify-center group cursor-default">
                    <div className="relative flex items-center justify-center">
                      {/* Active Beacon Glowing Pulse */}
                      {isActive && (
                        <span className="absolute w-18 h-18 rounded-full bg-[#E5C378]/25 animate-ping pointer-events-none" />
                      )}

                      {/* Circular Progress Node with Equal Padding */}
                      <div className={`relative w-14 h-14 lg:w-16 lg:h-16 rounded-full flex items-center justify-center p-0 border-2 transition-all duration-300 shadow-[0_8px_25px_rgba(0,0,0,0.7)] group-hover:scale-110 ${
                        isActive 
                          ? 'bg-[#E5C378] border-white text-[#0B1B3D] shadow-[0_0_24px_rgba(229,195,120,0.85)] ring-4 ring-[#E5C378]/35' 
                          : isCompleted
                          ? 'bg-[#0B1B3D] border-[#E5C378] text-[#E5C378] hover:bg-[#E5C378] hover:text-[#0B1B3D]'
                          : 'bg-[#070E1E] border-white/30 text-gray-300 hover:border-[#E5C378] hover:text-[#E5C378]'
                      }`}>
                        {/* Number with exact equal padding in all 4 directions */}
                        <span className="font-sans font-extrabold text-base lg:text-lg tracking-normal leading-none tabular-nums select-none flex items-center justify-center text-center">
                          {item.step}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Timeline Details (Below the Line): Noticeable Frosted Glass Cards */}
          <div className="grid grid-cols-4 gap-3 lg:gap-6 mt-6">
            {milestones.map((item, idx) => (
              <div 
                key={idx}
                className="relative flex flex-col items-center text-center p-3.5 lg:p-4 bg-gradient-to-b from-white/[0.14] via-[#0B1B3D]/40 to-[#071026]/55 hover:from-white/[0.22] hover:via-[#0F2454]/50 hover:to-[#071026]/70 border border-white/30 hover:border-[#E5C378] backdrop-blur-2xl shadow-[0_16px_36px_rgba(0,0,0,0.45),inset_0_1px_2px_rgba(255,255,255,0.45)] hover:shadow-[0_20px_45px_rgba(0,0,0,0.6),inset_0_1px_2px_rgba(229,195,120,0.6)] group cursor-default transition-all duration-300 overflow-hidden"
              >
                {/* Top Specular Highlight Line */}
                <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-white/80 to-transparent group-hover:via-[#E5C378] transition-colors duration-300" />

                {/* Year - Made Bigger */}
                <span className="text-base lg:text-lg font-bold text-[#E5C378] tracking-wider mb-1 font-sans drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                  {item.period}
                </span>
                {/* Milestone Title */}
                <h3 className="font-sans text-sm lg:text-base font-bold text-white mb-1 tracking-wide group-hover:text-[#E5C378] transition-colors drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                  {isEn ? item.titleEn : item.titleBn}
                </h3>
                {/* 1-2 Line Details (Less Text) */}
                <p className="font-sans text-xs text-gray-100 font-medium leading-snug line-clamp-2 max-w-[240px] drop-shadow-[0_1px_3px_rgba(0,0,0,0.7)]">
                  {isEn ? item.descEn : item.descBn}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Vertical Connected Progressline View (< md) */}
        <div className="block md:hidden relative pl-6 pr-2 py-4">
          {/* Continuous Vertical Line running through the center of the nodes */}
          <div className="absolute top-8 bottom-8 left-[36px] w-[2px] bg-gradient-to-b from-[#E5C378] via-[#E5C378] to-[#E5C378]/30" />

          <div className="space-y-6 relative z-10">
            {milestones.map((item, idx) => {
              const isActive = item.statusType === 'active';
              const isCompleted = item.statusType === 'completed';

              return (
                <div key={idx} className="flex items-start gap-4 text-left">
                  {/* Circular Node with Equal Padding */}
                  <div className={`relative w-12 h-12 rounded-full flex items-center justify-center p-0 border-2 shrink-0 shadow-lg mt-1 ${
                    isActive 
                      ? 'bg-[#E5C378] border-white text-[#0B1B3D] ring-4 ring-[#E5C378]/30' 
                      : isCompleted
                      ? 'bg-[#0B1B3D] border-[#E5C378] text-[#E5C378]'
                      : 'bg-[#070E1E] border-white/30 text-gray-300'
                  }`}>
                    <span className="font-sans font-bold text-sm tracking-normal leading-none tabular-nums select-none flex items-center justify-center text-center">
                      {item.step}
                    </span>
                  </div>

                  {/* Card Content with Noticeable Frosted Glass Effect */}
                  <div className="relative flex-1 bg-gradient-to-b from-white/[0.14] via-[#0B1B3D]/45 to-[#071026]/60 border border-white/30 p-4 backdrop-blur-2xl shadow-[0_12px_28px_rgba(0,0,0,0.45),inset_0_1px_2px_rgba(255,255,255,0.45)] overflow-hidden">
                    <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-white/80 to-transparent" />
                    <div className="flex items-center justify-between gap-2 mb-1.5">
                      <span className="text-sm sm:text-base font-bold text-[#E5C378] drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                        {item.period}
                      </span>
                      <span className={`text-[10px] font-bold uppercase px-2 py-0.5 border ${
                        isActive 
                          ? 'text-emerald-300 border-emerald-400/50 bg-emerald-950/60' 
                          : isCompleted
                          ? 'text-[#E5C378] border-[#E5C378]/50 bg-[#E5C378]/20'
                          : 'text-gray-200 border-white/20 bg-black/30'
                      }`}>
                        {isEn ? item.statusEn : item.statusBn}
                      </span>
                    </div>
                    <h3 className="font-sans text-base font-bold text-white mb-1.5 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                      {isEn ? item.titleEn : item.titleBn}
                    </h3>
                    <p className="font-sans text-xs text-gray-100 font-medium leading-snug line-clamp-2 drop-shadow-[0_1px_3px_rgba(0,0,0,0.7)]">
                      {isEn ? item.descEn : item.descBn}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

