import React from 'react';

interface PrimaryButtonProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  dark?: boolean;
}

export const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  href,
  children,
  className = '',
  dark = false,
}) => {
  return (
    <a
      href={href}
      className={`group inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-[14.5px] font-semibold tracking-[-0.005em] transition-all duration-300 ${
        dark
          ? 'bg-[#0A0A0A] text-white shadow-[0_16px_36px_-16px_rgba(10,10,10,0.6)] hover:-translate-y-0.5 hover:bg-[#1a1a1a]'
          : 'bg-[hsl(18_100%_50%)] text-white shadow-[0_16px_36px_-14px_hsl(18_100%_50%/0.65)] hover:-translate-y-0.5 hover:bg-[hsl(18_100%_46%)]'
      } ${className}`}
    >
      {children}
      <svg
        width="15"
        height="15"
        viewBox="0 0 16 16"
        fill="none"
        className="transition-transform duration-300 group-hover:translate-x-0.5"
      >
        <path
          d="M2 8h11M9 4l4 4-4 4"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </a>
  );
};

interface SecondaryButtonProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  light?: boolean;
}

export const SecondaryButton: React.FC<SecondaryButtonProps> = ({
  href,
  children,
  className = '',
  light = false,
}) => {
  return (
    <a
      href={href}
      className={`inline-flex items-center justify-center gap-2 rounded-full border px-7 py-3.5 text-[14.5px] font-semibold tracking-[-0.005em] transition-all duration-300 ${
        light
          ? 'border-white/25 text-white hover:bg-white/10'
          : 'border-[hsl(0_0%_4%/0.16)] text-foreground hover:bg-white hover:shadow-[0_8px_24px_-16px_rgba(10,10,10,0.5)]'
      } ${className}`}
    >
      {children}
    </a>
  );
};
