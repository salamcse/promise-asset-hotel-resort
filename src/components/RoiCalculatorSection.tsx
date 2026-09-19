'use client';
import React, { useState, useMemo } from 'react';
import { 
  Calculator, 
  TrendingUp, 
  ShieldCheck,
  Hotel
} from 'lucide-react';
import { Language, Currency } from '../types';
import { USD_EXCHANGE_RATE } from '../data/projectData';

interface RoiCalculatorSectionProps {
  language: Language;
  currency: Currency;
  onBookCustom: (amount: number, shares: number) => void;
}

const UNIT_SHARE_PRICE_BDT = 100000;
const UNIT_MONTHLY_BENEFIT_BDT = 4166;
const MIN_UNITS = 1;
const MAX_UNITS = 50;

export const RoiCalculatorSection: React.FC<RoiCalculatorSectionProps> = ({
  language,
  currency,
  onBookCustom
}) => {
  const isEn = language === 'en';

  // State
  const [sharesCount, setSharesCount] = useState<number>(5); // default 5 shares (Signature)
  const [estimatedOccupancy, setEstimatedOccupancy] = useState<number>(75); // % post-launch occupancy
  const [estimatedAdr, setEstimatedAdr] = useState<number>(14000); // BDT Average Daily Room Rate

  // Calculations
  const totalInvestmentBdt = useMemo(() => sharesCount * UNIT_SHARE_PRICE_BDT, [sharesCount]);
  const monthlyBenefitBdt = useMemo(() => sharesCount * UNIT_MONTHLY_BENEFIT_BDT, [sharesCount]);
  const twentyFourMonthReturnBdt = useMemo(() => monthlyBenefitBdt * 24, [monthlyBenefitBdt]);
  const developmentRoiPercent = useMemo(() => ((twentyFourMonthReturnBdt / totalInvestmentBdt) * 100).toFixed(1), [twentyFourMonthReturnBdt, totalInvestmentBdt]);

  // Post-launch estimated yearly yield (conservative operational modeling for 70:30 pool)
  const estimatedYearlyHotelDividendBdt = useMemo(() => {
    const baseShareAnnualRevenue = (estimatedOccupancy / 100) * estimatedAdr * 365 * 0.0035;
    return Math.round(baseShareAnnualRevenue * sharesCount);
  }, [sharesCount, estimatedOccupancy, estimatedAdr]);

  const postLaunchYieldPercent = useMemo(() => {
    return ((estimatedYearlyHotelDividendBdt / totalInvestmentBdt) * 100).toFixed(1);
  }, [estimatedYearlyHotelDividendBdt, totalInvestmentBdt]);

  const formatPrice = (bdt: number) => {
    if (currency === 'USD') {
      const usd = Math.round(bdt / USD_EXCHANGE_RATE);
      return `$ ${usd.toLocaleString()}`;
    }
    return `৳ ${bdt.toLocaleString('en-IN')}`;
  };

  return (
    <section id="calculator" className="py-8 bg-white border-b border-slate-200/80">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0B1B3D]/5 border border-[#0B1B3D]/10 text-[#0B1B3D] text-xs font-bold uppercase tracking-wider mb-2">
            <Calculator className="w-3.5 h-3.5 text-[#E5C378]" />
            <span>{isEn ? 'Interactive Financial Simulator' : 'ইন্টারেক্টিভ ইনভেস্টমেন্ট ও আরওআই সিমুলেটর'}</span>
          </div>
          
          <h2 className="font-sans text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#0B1B3D] mb-2 tracking-tight">
            {isEn ? 'Simulate Your Returns & Cashflow' : 'আপনার রিটার্ন ও আয়ের হিসাব দেখুন'}
          </h2>
          
          <p className="text-base text-[#4A4A4A] leading-relaxed max-w-2xl mx-auto">
            {isEn
              ? 'Calculate your guaranteed 24-month development benefits and forecast long-term operational hotel dividends from your 125-Bigha resort ownership.'
              : 'আপনার শেয়ারের সংখ্যা নির্ধারণ করে ২৪ মাসের নির্ধারিত ডেভেলপমেন্ট বেনিফিট এবং রিসোর্ট চালুর পর বাৎসরিক সম্ভাব্য লভ্যাংশের নিখুঁত হিসাব পরীক্ষা করুন।'}
          </p>
        </div>

        {/* Calculator Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          
          {/* Left Column: Sliders & Controls (7 Cols) */}
          <div className="lg:col-span-7 bg-[#F8F9FA] border border-slate-200/80 rounded-[32px] p-8 sm:p-10 shadow-sm flex flex-col justify-between">
            <div>
              <h3 className="font-sans text-2xl font-bold text-[#0B1B3D] mb-8 flex items-center gap-2">
                <span>{isEn ? 'Investment Configuration' : 'ইনভেস্টমেন্ট সেটিংস'}</span>
              </h3>

              {/* Slider 1: Number of Shares */}
              <div className="mb-10">
                <div className="flex justify-between items-center mb-4">
                  <label className="text-sm font-semibold text-slate-800">
                    {isEn ? 'Number of Share Units' : 'শেয়ার ইউনিটের সংখ্যা'}:
                  </label>
                  <div className="flex items-center gap-2">
                    <span className="font-sans text-2xl sm:text-3xl font-bold text-[#0B1B3D]">
                      {sharesCount} {isEn ? 'Shares' : 'টি শেয়ার'}
                    </span>
                    <span className="text-xs text-slate-500 font-medium">
                      ({sharesCount * 48} Sq.ft / {(sharesCount * 0.11).toFixed(2)} Dec)
                    </span>
                  </div>
                </div>

                <input
                  type="range"
                  min={MIN_UNITS}
                  max={MAX_UNITS}
                  step={1}
                  value={sharesCount}
                  onChange={(e) => setSharesCount(Number(e.target.value))}
                  className="w-full h-3 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#159E42]"
                />

                <div className="flex justify-between text-xs text-slate-500 mt-3 font-medium">
                  <span>1 Unit (Explorer)</span>
                  <span>5 Units (Signature)</span>
                  <span>15 Units (Prestige)</span>
                  <span>50 Max</span>
                </div>
              </div>

              {/* Quick Share Preset Buttons */}
              <div className="flex flex-wrap gap-2.5 mb-10">
                {[1, 2, 5, 10, 15, 20, 30].map((preset) => (
                  <button
                    key={preset}
                    onClick={() => setSharesCount(preset)}
                    className={`px-4 py-2 rounded-xl text-xs font-semibold cursor-pointer transition-all ${
                      sharesCount === preset
                        ? 'bg-[#0B1B3D] text-white shadow-md'
                        : 'bg-white text-slate-700 border border-slate-200 hover:border-slate-400'
                    }`}
                  >
                    {preset} {preset === 1 ? 'Share' : 'Shares'}
                  </button>
                ))}
              </div>
            </div>

            {/* Advanced Post-Launch Projection Sliders */}
            <div className="border-t border-slate-200/80 pt-8 mt-4">
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                  {isEn ? 'Post-Launch Hotel Projections (Estimated)' : 'রিসোর্ট চালুর পর অনুমিত প্যারামিটার'}
                </span>
                <span className="text-[11px] text-[#E5C378] font-semibold bg-[#E5C378]/10 px-3 py-1 rounded-full border border-[#E5C378]/20">
                  70% Shareholder Pool
                </span>
              </div>

              {/* Occupancy Rate Slider */}
              <div className="mb-6">
                <div className="flex justify-between items-center text-xs mb-2">
                  <span className="text-slate-700 font-medium">
                    {isEn ? 'Resort Average Occupancy Rate:' : 'রিসোর্টের গড় অকুপেন্সি রেট:'}
                  </span>
                  <span className="font-bold text-[#0B1B3D] text-sm">{estimatedOccupancy}%</span>
                </div>
                <input
                  type="range"
                  min={50}
                  max={95}
                  step={5}
                  value={estimatedOccupancy}
                  onChange={(e) => setEstimatedOccupancy(Number(e.target.value))}
                  className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#0B1B3D]"
                />
              </div>

              {/* ADR (Average Daily Rate) Slider */}
              <div>
                <div className="flex justify-between items-center text-xs mb-2">
                  <span className="text-slate-700 font-medium">
                    {isEn ? 'Average Daily Room Rate (ADR):' : 'গড় দৈনিক রুম ভাড়া (ADR):'}
                  </span>
                  <span className="font-bold text-[#0B1B3D] text-sm">{formatPrice(estimatedAdr)} / night</span>
                </div>
                <input
                  type="range"
                  min={8000}
                  max={25000}
                  step={1000}
                  value={estimatedAdr}
                  onChange={(e) => setEstimatedAdr(Number(e.target.value))}
                  className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#0B1B3D]"
                />
              </div>
            </div>

          </div>

          {/* Right Column: Return Results & Forecast Breakdown (5 Cols) */}
          <div className="lg:col-span-5 bg-[#0B1B3D] text-white rounded-[32px] p-8 sm:p-10 shadow-2xl relative overflow-hidden flex flex-col justify-between border border-slate-700/50">
            {/* Background luxury subtle gradient glow */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-[#E5C378]/15 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10">
              <div className="flex items-center justify-between pb-4 border-b border-white/15 mb-6">
                <div>
                  <span className="text-xs text-gray-300 uppercase tracking-wider block">
                    {isEn ? 'Total Capital Required' : 'মোট বিনিয়োগ মূলধন'}
                  </span>
                  <div className="font-sans text-3xl sm:text-4xl font-extrabold text-white mt-1">
                    {formatPrice(totalInvestmentBdt)}
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-[11px] text-[#E5C378] font-medium block">
                    {isEn ? 'Booking token:' : 'বুকিং মানি:'}
                  </span>
                  <span className="font-bold text-sm text-gray-200">
                    {formatPrice(sharesCount * 25000)}
                  </span>
                </div>
              </div>

              {/* Phase 1: Development Benefit Box */}
              <div className="p-4 rounded-xl bg-white/10 border border-white/15 mb-4">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-semibold text-emerald-400 flex items-center gap-1">
                    <TrendingUp className="w-3.5 h-3.5" />
                    <span>{isEn ? 'Phase 1: 24-Mo Guaranteed Benefit' : 'ফেজ ১: ২৪ মাসের মাসিক বেনিফিট'}</span>
                  </span>
                  <span className="text-[11px] px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-bold">
                    {developmentRoiPercent}% Return
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-3 mt-3">
                  <div>
                    <span className="text-[10px] text-gray-400 uppercase tracking-wider block">Monthly Payout</span>
                    <span className="font-bold text-lg text-white">{formatPrice(monthlyBenefitBdt)}</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-gray-400 uppercase tracking-wider block">24-Month Total</span>
                    <span className="font-bold text-lg text-[#E5C378]">{formatPrice(twentyFourMonthReturnBdt)}</span>
                  </div>
                </div>
              </div>

              {/* Phase 2: Long-Term Hotel Dividends Box */}
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 mb-6">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-semibold text-amber-300 flex items-center gap-1">
                    <Hotel className="w-3.5 h-3.5" />
                    <span>{isEn ? 'Phase 2: Annual Hotel Profit Share' : 'ফেজ ২: আজীবন বাৎসরিক মুনাফা'}</span>
                  </span>
                  <span className="text-[11px] px-2 py-0.5 rounded bg-amber-400/20 text-amber-300 font-bold">
                    ~{postLaunchYieldPercent}% p.a.
                  </span>
                </div>

                <div className="mt-3">
                  <span className="text-[10px] text-gray-400 uppercase tracking-wider block">Estimated Annual Dividend</span>
                  <span className="font-sans text-xl font-bold text-white mt-0.5 block">
                    {formatPrice(estimatedYearlyHotelDividendBdt)} <span className="text-xs font-normal text-gray-300">/ year</span>
                  </span>
                  <p className="text-[11px] text-gray-400 mt-1">
                    *Based on {estimatedOccupancy}% estimated occupancy and 70:30 operational pool distribution.
                  </p>
                </div>
              </div>
            </div>

            {/* Action CTA */}
            <div className="relative z-10 pt-2">
              <button
                onClick={() => onBookCustom(totalInvestmentBdt, sharesCount)}
                className="w-full py-3.5 px-6 rounded-lg bg-[#159E42] text-white hover:bg-emerald-700 transition-all font-medium text-sm shadow-xl shadow-emerald-950/40 flex items-center justify-center cursor-pointer hover:scale-[1.02]"
              >
                <span>{isEn ? `Lock in ${sharesCount} Share Units` : `${sharesCount}টি শেয়ারের জন্য আবেদন করুন`}</span>
              </button>

              <div className="flex items-center justify-center gap-2 text-[11px] text-gray-400 mt-3">
                <ShieldCheck className="w-3.5 h-3.5 text-[#159E42]" />
                <span>Includes 100% Sub-Registry Land Registration</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
