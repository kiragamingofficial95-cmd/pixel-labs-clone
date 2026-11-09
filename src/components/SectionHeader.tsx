import React from 'react';
import { Reveal } from './Reveal';

interface SectionHeaderProps {
  index: string;
  label: string;
  title: string;
  description?: string;
  dark?: boolean;
  align?: 'left' | 'center';
  tail?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  index,
  label,
  title,
  description,
  dark = false,
  align = 'left',
  tail,
}) => {
  const hasTail = !!tail && title.endsWith(tail);

  return (
    <Reveal className={align === 'center' ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'}>
      <div className={`flex items-center gap-3 ${align === 'center' ? 'justify-center' : ''}`}>
        <span className={`label-mono ${dark ? 'text-white/45' : 'text-muted-foreground'}`}>
          {index}
        </span>
        <span className={`h-px w-6 ${dark ? 'bg-white/25' : 'bg-[hsl(0_0%_4%/0.2)]'}`} />
        <span className={`label-mono ${dark ? 'text-white/65' : 'text-muted-foreground'}`}>
          {label}
        </span>
      </div>

      <h2 className={`h2 mt-6 ${dark ? 'text-white' : 'text-foreground'}`}>
        {hasTail ? (
          <>
            {title.slice(0, title.length - (tail?.length || 0))}
            <span className="font-extrabold">{tail}</span>
          </>
        ) : (
          title
        )}
      </h2>

      {description && (
        <p className={`body-lg mt-5 ${dark ? 'text-white/65' : 'text-muted-foreground'}`}>
          {description}
        </p>
      )}
    </Reveal>
  );
};
