import React from 'react';
import {
  Target,
  TrendingUp,
  Users,
  Search,
  Clock,
  Eye,
  ArrowRight,
} from 'lucide-react';
import { SectionHeader } from './SectionHeader';
import { Reveal } from './Reveal';
import { BENEFITS } from '../data/content';

const BENEFIT_ICONS = {
  Target,
  TrendingUp,
  Users,
  Search,
  Clock,
  Eye,
};

export const Benefits: React.FC = () => {
  return (
    <section className="border-y border-[hsl(60_5%_89%)] bg-[hsl(60_20%_97%)] py-24 sm:py-28">
      <div className="shell">
        <SectionHeader
          index="[02]"
          label="Benefits"
          title="Why work with Pixel Labs."
          description="Six things we build into every site."
        />
      </div>

      <div className="shell mt-14">
        <div className="mx-auto max-w-4xl pb-6">
          {BENEFITS.map((item, idx) => {
            const Icon = BENEFIT_ICONS[item.icon];
            return (
              <div
                key={item.title}
                className="sticky pb-4"
                style={{ top: `${84 + idx * 14}px`, zIndex: idx + 1 }}
              >
                <div className="relative overflow-hidden rounded-3xl border border-[hsl(60_5%_88%)] bg-white p-7 shadow-[0_36px_70px_-46px_rgba(10,10,10,0.45)] sm:p-10">
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute -right-2 -top-6 font-heading text-[92px] font-extrabold leading-none tracking-[-0.06em] text-[hsl(0_0%_4%/0.05)] sm:text-[110px]"
                  >
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[hsl(18_100%_50%/0.10)] text-[hsl(18_100%_50%)]">
                    <Icon size={18} strokeWidth={1.8} />
                  </span>
                  <h3 className="h3 relative mt-5">{item.title}</h3>
                  <p className="body-sm relative mt-2.5 max-w-xl text-muted-foreground">
                    {item.body}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="shell">
        <Reveal delay={0.1}>
          <div className="mt-12 flex justify-center">
            <a
              href="#contact"
              className="label-mono group inline-flex items-center gap-2 text-foreground/70 transition-colors hover:text-[hsl(18_100%_50%)]"
            >
              Book a free call
              <ArrowRight
                size={13}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
