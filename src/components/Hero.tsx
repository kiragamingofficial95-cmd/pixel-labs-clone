import React from 'react';
import { Reveal } from './Reveal';
import { PrimaryButton, SecondaryButton } from './Buttons';
import { HERO_TRUST_ITEMS } from '../data/content';

export const Hero: React.FC = () => {
  return (
    <section id="top" className="relative overflow-hidden pb-20 pt-32 sm:pb-24 sm:pt-40">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[640px] bg-[radial-gradient(55%_55%_at_50%_0%,hsl(18_100%_50%/0.10),transparent_72%)]" />
      <div className="pointer-events-none absolute inset-0 -z-10 grain opacity-70" />

      <div className="shell">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <div className="inline-flex items-center gap-2.5 rounded-full border border-[hsl(0_0%_4%/0.12)] bg-white/70 px-3.5 py-1.5">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[hsl(18_100%_50%)] opacity-70" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[hsl(18_100%_50%)]" />
              </span>
              <span className="label-mono text-foreground/70">
                For influencer marketing businesses
              </span>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <h1 className="h1 mt-7">
              Websites for influencer marketing businesses
              <span className="mt-1 block text-[hsl(18_100%_50%)]">
                that turn visitors into campaign inquiries
              </span>
            </h1>
          </Reveal>

          <Reveal delay={0.16}>
            <p className="body-lg mt-6 max-w-[36rem] text-muted-foreground">
              Pixel Labs designs, redesigns, and search-optimizes your website so brands know how to start a campaign and creators know how to apply. Your site goes live within 12 days of onboarding.
            </p>
          </Reveal>

          <Reveal delay={0.24}>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <PrimaryButton href="#contact">Book a free call</PrimaryButton>
              <SecondaryButton href="#how-it-works">See how it works</SecondaryButton>
            </div>
          </Reveal>

          <Reveal delay={0.3}>
            <ul className="label-mono mt-7 flex flex-wrap items-center gap-x-5 gap-y-2 text-muted-foreground">
              {HERO_TRUST_ITEMS.map((item, idx) => (
                <li key={item} className="flex items-center gap-2">
                  {idx > 0 && (
                    <span className="h-1 w-1 rounded-full bg-[hsl(0_0%_4%/0.25)]" />
                  )}
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
