import React from 'react';
import { Reveal } from './Reveal';
import { OFFER_STATS } from '../data/content';

export const OfferGlance: React.FC = () => {
  return (
    <section className="border-y border-[hsl(60_5%_89%)] bg-white/60 py-14 sm:py-16">
      <div className="shell">
        <Reveal>
          <p className="label-mono text-center text-muted-foreground">
            The offer at a glance
          </p>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="mt-8 grid gap-px overflow-hidden rounded-2xl border border-[hsl(60_5%_89%)] bg-[hsl(60_5%_89%)] sm:grid-cols-3">
            {OFFER_STATS.map((stat) => (
              <div
                key={stat.value}
                className="bg-[hsl(60_33%_99%)] px-5 py-6 text-center"
              >
                <p className="font-heading text-[1.5rem] font-extrabold tracking-[-0.03em] tabular-nums sm:text-[1.75rem]">
                  {stat.value}
                </p>
                <p className="body-sm mx-auto mt-2 max-w-[16rem] text-muted-foreground">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
};
