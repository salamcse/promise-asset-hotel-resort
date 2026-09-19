'use client';
import React from 'react';
import logoSvg from '../assets/Logo.svg';

interface LogoProps {
  className?: string;
  variant?: 'light' | 'dark';
  showText?: boolean;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const Logo: React.FC<LogoProps> = ({ 
  className = '', 
  variant = 'light',
  showText = true,
  size = 'md'
}) => {
  const isLight = variant === 'light';

  // Dimension presets calibrated for crisp crest visibility with refined original title typography
  const dimensions = {
    sm: { iconHeight: 40, iconClass: 'h-10 sm:h-11', titleSize: 'text-xs sm:text-sm', subSize: 'text-[8px] sm:text-[9px]' },
    md: { iconHeight: 60, iconClass: 'h-13 sm:h-15 md:h-16', titleSize: 'text-sm sm:text-base font-bold', subSize: 'text-[9px] sm:text-[10px]' },
    lg: { iconHeight: 72, iconClass: 'h-18 sm:h-20', titleSize: 'text-base sm:text-lg font-bold', subSize: 'text-[10px] sm:text-[11px]' },
    xl: { iconHeight: 90, iconClass: 'h-22 sm:h-24', titleSize: 'text-lg sm:text-xl font-bold', subSize: 'text-xs' }
  }[size];

  const logoSrc = typeof logoSvg === 'string' ? logoSvg : (logoSvg as any)?.src || '/Logo.svg';

  return (
    <div className={`inline-flex items-center gap-2.5 sm:gap-3 select-none group ${className}`}>
      {/* Official Vector Logo Crest - Crisp & Sharp with White Stroke & Drop Shadow */}
      <img
        src={logoSrc}
        alt="The Promise Hotel & Resort Logo"
        className={`w-auto ${dimensions.iconClass} object-contain shrink-0 filter ${
          isLight 
            ? 'drop-shadow-[1px_0_0_#ffffff] drop-shadow-[-1px_0_0_#ffffff] drop-shadow-[0_1px_0_#ffffff] drop-shadow-[0_-1px_0_#ffffff] drop-shadow-[0_0_8px_rgba(255,255,255,0.9)] drop-shadow-[0_2px_6px_rgba(0,0,0,0.4)]' 
            : 'drop-shadow-[1px_0_0_#ffffff] drop-shadow-[-1px_0_0_#ffffff] drop-shadow-[0_1px_0_#ffffff] drop-shadow-[0_-1px_0_#ffffff] drop-shadow-[0_0_4px_rgba(255,255,255,0.7)]'
        } transition-all duration-300 group-hover:scale-105 group-hover:drop-shadow-[0_0_12px_rgba(255,255,255,1)]`}
        onError={(e) => {
          if (!e.currentTarget.src.endsWith('/logo.svg')) {
            e.currentTarget.src = '/logo.svg';
          }
        }}
      />

      {/* Website Brand Title beside Logo */}
      {showText && (
        <div className="flex flex-col justify-center text-left leading-none">
          <span className={`font-sans tracking-[0.14em] uppercase transition-colors ${
            isLight ? 'text-white group-hover:text-[#E5C378]' : 'text-[#0B1B3D] group-hover:text-[#E5C378]'
          } ${dimensions.titleSize}`}>
            THE PROMISE
          </span>
          <span className={`font-sans tracking-[0.24em] font-bold uppercase mt-1 transition-colors ${
            isLight ? 'text-[#E5C378]' : 'text-[#E5C378]'
          } ${dimensions.subSize}`}>
            HOTEL &amp; RESORT
          </span>
        </div>
      )}
    </div>
  );
};

