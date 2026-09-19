'use client';
import React from 'react';
import logoSvg from '../assets/Logo.svg';

interface BrandLogoProps {
  variant?: 'dark' | 'light' | 'gold';
  showSubtitle?: boolean;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  variant = 'light',
  showSubtitle = false,
  className = '',
  size = 'md'
}) => {
  const height = size === 'sm' ? 36 : size === 'lg' ? 56 : 46;
  const logoSrc = typeof logoSvg === 'string' ? logoSvg : (logoSvg as any)?.src || '/Logo.svg';

  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      <img
        src={logoSrc}
        alt="The Promise Brand Logo"
        style={{ height: `${height}px` }}
        className="w-auto object-contain shrink-0 filter drop-shadow-[0_2px_12px_rgba(0,0,0,0.5)]"
        onError={(e) => {
          if (!e.currentTarget.src.endsWith('/logo.svg')) {
            e.currentTarget.src = '/logo.svg';
          }
        }}
      />
    </div>
  );
};
