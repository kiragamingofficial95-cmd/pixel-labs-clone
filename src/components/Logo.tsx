import React from 'react';

interface LogoProps {
  tone?: 'light' | 'dark';
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ tone = 'light', className = '' }) => {
  const logoSrc = '/logo.png';

  if (tone === 'dark') {
    return (
      <span className={`inline-flex items-center rounded-xl bg-white px-3 py-2 ${className}`}>
        <img
          src={logoSrc}
          alt="Pixel Labs"
          className="h-7 w-auto max-w-[150px] object-contain sm:h-8"
        />
      </span>
    );
  }

  return (
    <img
      src={logoSrc}
      alt="Pixel Labs"
      className={`h-9 w-auto max-w-[160px] object-contain mix-blend-multiply sm:h-11 sm:max-w-[196px] ${className}`}
    />
  );
};
