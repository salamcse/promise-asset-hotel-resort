'use client';
import React from 'react';
import { 
  PieChart, 
  ShieldCheck, 
  TrendingUp, 
  Building, 
  Coins, 
  Users, 
  CheckCircle2, 
  Layers 
} from 'lucide-react';
import { Language } from '../types';

interface BusinessModelSectionProps {
  language: Language;
}

export const BusinessModelSection: React.FC<BusinessModelSectionProps> = ({ language }) => {
  const isEn = language === 'en';

  return (
    <section id="why-invest" className="py-28 lg:py-32 bg-[#F8F9FA] border-b border-slate-200/80">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0B1B3D]/5 border border-[#0B1B3D]/10 text-[#0B1B3D] text-xs font-bold uppercase tracking-wider mb-4">
            <PieChart className="w-3.5 h-3.5 text-[#E5C378]" />
            <span>{isEn ? 'Profit Distribution Framework' : 'স্বচ্ছ ও শক্তিশালী বিজনেস মডেল'}</span>
          </div>
          
          <h2 className="font-sans text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#0B1B3D] mb-4 tracking-tight">
            {isEn ? (
              <>
                The Revolutionary <span className="text-[#E5C378] italic font-normal">30:70 Business Model</span>
              </>
            ) : (
              <>
                বিপ্লবী <span className="text-[#E5C378]">৩০:৭০ বিজনেস আর্কিটেকচার</span>
              </>
            )}
          </h2>
          
          <p className="text-base text-[#4A4A4A] leading-relaxed max-w-2xl mx-auto">
            {isEn
              ? 'An institutional revenue framework balancing fixed development cashflow during construction with 70% direct net profit distribution to unit shareholders upon commercial operation.'
              : 'নির্মাণকালীন সময়ে নির্ধারিত মাসিক ডেভেলপমেন্ট রিটার্ন এবং রিসোর্ট বাণিজ্যিক উদ্বোধনের পর অর্জিত নিট আয়ের সিংহভাগ (৭০%) সরাসরি শেয়ারহোল্ডারদের মাঝে বণ্টন।'}
          </p>
        </div>

        {/* 30:70 Distribution Split Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch mb-14">
          
          {/* 70% Shareholder Pool (7 Cols) */}
          <div className="lg:col-span-7 bg-white rounded-[32px] p-8 sm:p-10 border-2 border-[#159E42] shadow-xl relative overflow-hidden flex flex-col justify-between">
            <div className="absolute top-0 right-0 px-5 py-2 bg-[#159E42] text-white text-xs font-bold rounded-bl-2xl tracking-wider">
              {isEn ? 'INVESTOR DOMINANT' : 'বিনিয়োগকারীদের অংশ'}
            </div>

            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-emerald-100 text-[#159E42] flex items-center justify-center">
                  <Users className="w-7 h-7" />
                </div>
                <div>
                  <span className="text-xs text-slate-500 font-bold uppercase tracking-wider block">
                    {isEn ? 'Unit Shareholders' : 'সম্মানিত শেয়ারহোল্ডারবৃন্দ'}
                  </span>
                  <div className="font-sans text-3xl sm:text-4xl font-extrabold text-[#0B1B3D]">
                    70% <span className="text-sm font-normal text-slate-500">{isEn ? 'Net Profit Distribution' : 'নিট মুনাফা শেয়ার'}</span>
                  </div>
                </div>
              </div>

              <p className="text-sm sm:text-base text-[#4A4A4A] leading-relaxed mb-8">
                {isEn
                  ? '70% of the entire net operating income generated across all resort operations (luxury room stays, banquets, water theme park ticketing, dining, and spa treatments) is deposited into the shareholder pool and disbursed pro-rata.'
                  : 'হোটেল রুম বুকিং, কনভেনশন সেন্টার, ওয়াটার পার্ক টিকিট, ফাইন ডাইনিং রেস্তোরাঁ এবং আন্তর্জাতিক স্পা ভিলেজ থেকে প্রাপ্ত সার্বিক নিট মুনাফার ৭০% সরাসরি শেয়ারহোল্ডারদের ব্যাঙ্ক অ্যাকাউন্টে বণ্টন করা হয়।'}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <div className="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-200/60 text-xs">
                  <div className="font-bold text-emerald-950 flex items-center gap-2 mb-1.5">
                    <CheckCircle2 className="w-4 h-4 text-[#159E42]" />
                    <span>Quarterly Audited Audits</span>
                  </div>
                  <p className="text-slate-600 leading-relaxed">Transparent quarterly P&L audited by top-tier chartered accounting firms.</p>
                </div>

                <div className="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-200/60 text-xs">
                  <div className="font-bold text-emerald-950 flex items-center gap-2 mb-1.5">
                    <CheckCircle2 className="w-4 h-4 text-[#159E42]" />
                    <span>Direct Bank Dividend</span>
                  </div>
                  <p className="text-slate-600 leading-relaxed">Automated dividend transfer directly into investor bank/BEFTN accounts.</p>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-medium">
              <span>Lifetime perpetual profit rights</span>
              <span className="font-bold text-[#0B1B3D]">Transferable & Inheritable</span>
            </div>
          </div>

          {/* 30% Management & Reserve Pool (5 Cols) */}
          <div className="lg:col-span-5 bg-white rounded-[24px] p-6 sm:p-8 border border-slate-200 shadow-md flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-slate-100 text-[#0B1B3D] flex items-center justify-center">
                  <Building className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs text-slate-500 font-bold uppercase tracking-wider block">
                    {isEn ? 'Resort Management & Reserve' : 'ব্যবস্থাপনা ও ক্যাপিটাল ফান্ড'}
                  </span>
                  <div className="font-sans text-3xl sm:text-4xl font-extrabold text-[#0B1B3D]">
                    30% <span className="text-sm font-normal text-slate-500">{isEn ? 'Operations & Marketing' : 'পরিচালন ও মেইনটেনেন্স'}</span>
                  </div>
                </div>
              </div>

              <p className="text-sm text-[#333333] leading-relaxed mb-6">
                {isEn
                  ? '30% is allocated for 5-star international hotel chain operations, global marketing, property insurance, continuous maintenance, and facility upgrades without capital calls from investors.'
                  : '৩০% তহবিল বরাদ্দ থাকে আন্তর্জাতিক মানের পাঁচ তারকা রিসোর্ট পরিচালনা, বিশ্বব্যাপী পর্যটন বিপণন, ব্র্যান্ডিং ও নিয়মিত আধুনিকীকরণের জন্য—যাতে শেয়ারহোল্ডারদের কোনো বাড়তি খরচ বহন করতে না হয়।'}
              </p>

              <ul className="space-y-2.5 text-xs text-slate-700 mb-4">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#E5C378]" />
                  <span>5-Star Global Brand Operator Management Fee</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#E5C378]" />
                  <span>Comprehensive Asset Insurance & Storm Protection</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#E5C378]" />
                  <span>Resort Refurbishment & Furniture Refresh (FF&E Reserve)</span>
                </li>
              </ul>
            </div>

            <div className="pt-4 border-t border-slate-100 text-xs text-slate-500">
              <span>Zero hidden deductions or unexpected maintenance fees for owners.</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
