'use client';
import React from 'react';
import { 
  Building2, 
  Landmark, 
  ShieldCheck, 
  Compass, 
  Trees, 
  Hotel,
  Award
} from 'lucide-react';

export const TrustedPartnersSection: React.FC = () => {
  const partners = [
    {
      name: "Promise Assets Ltd.",
      type: "Master Developer",
      icon: Building2
    },
    {
      name: "Cox's Bazar Tourism Consortium",
      type: "Hospitality Partner",
      icon: Hotel
    },
    {
      name: "Apex Structural Engineering",
      type: "Design & Infrastructure",
      icon: Compass
    },
    {
      name: "Green Coast Eco-Consulting",
      type: "Environmental Planning",
      icon: Trees
    },
    {
      name: "Sub-Registry & Legal Chambers",
      type: "Land Vetting & Title",
      icon: Landmark
    },
    {
      name: "Global Hospitality Alliance",
      type: "Resort Operations",
      icon: Award
    }
  ];

  return (
    <section id="partners" className="w-full py-8 bg-white border-y border-slate-200/80">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        {/* Section Header */}
        <h3 className="text-gray-400 text-xs font-semibold tracking-[0.25em] uppercase mb-6 text-center">
          Development Partners & Consortium
        </h3>

        {/* Monochrome Logos Row with 60% opacity and smooth hover transition */}
        <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-8 items-center justify-items-center">
          {partners.map((partner, idx) => {
            const IconComp = partner.icon;
            return (
              <div
                key={idx}
                className="group flex flex-col items-center text-center p-3 rounded-xl transition-all duration-300 opacity-60 hover:opacity-100 hover:scale-105 cursor-pointer"
              >
                <div className="w-12 h-12 rounded-xl bg-slate-100 group-hover:bg-[#0B1B3D]/5 border border-slate-200 group-hover:border-[#0B1B3D]/20 flex items-center justify-center text-slate-700 group-hover:text-[#0B1B3D] transition-colors mb-2">
                  <IconComp className="w-6 h-6" />
                </div>
                <span className="font-sans font-bold text-xs text-slate-800 tracking-tight line-clamp-1">
                  {partner.name}
                </span>
                <span className="text-[10px] text-slate-500 uppercase tracking-wider mt-0.5">
                  {partner.type}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
