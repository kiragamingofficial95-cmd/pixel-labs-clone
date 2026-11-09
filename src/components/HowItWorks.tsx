import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { PenLine, Wand2, Rocket, LucideIcon } from 'lucide-react';
import { SectionHeader } from './SectionHeader';
import { Reveal } from './Reveal';
import { HOW_IT_WORKS_STEPS } from '../data/content';

const STEP_ICONS: Record<string, LucideIcon> = {
  PenLine,
  Wand2,
  Rocket,
};

interface StepCardProps {
  icon: LucideIcon;
  number: string;
  title: string;
  body: string;
}

export const StepCard: React.FC<StepCardProps> = ({
  icon: Icon,
  number,
  title,
  body,
}) => {
  return (
    <div className="relative h-full overflow-hidden rounded-3xl border border-[hsl(60_5%_89%)] bg-white p-7 pt-12 shadow-[0_30px_60px_-46px_rgba(10,10,10,0.45)] sm:p-8 sm:pt-14">
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -right-2 top-0 font-heading text-[86px] font-extrabold leading-none tracking-[-0.06em] text-[hsl(0_0%_4%/0.055)]"
      >
        {number}
      </span>
      <span className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-[hsl(18_100%_50%/0.10)] text-[hsl(18_100%_50%)]">
        <Icon size={22} strokeWidth={1.7} />
      </span>
      <h3 className="h4 relative mt-6">{title}</h3>
      <p className="body-sm relative mt-2.5 text-muted-foreground">{body}</p>
      <div className="mt-7 h-[2px] w-full overflow-hidden rounded-full bg-[hsl(60_5%_92%)]">
        <div className="h-full w-full bg-[hsl(18_100%_50%)]" />
      </div>
    </div>
  );
};

export const MobileHowItWorks: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [maxScroll, setMaxScroll] = useState(0);

  useEffect(() => {
    const measure = () => {
      const el = trackRef.current;
      if (el) {
        setMaxScroll(Math.max(0, el.scrollWidth - window.innerWidth + 24));
      }
    };
    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const springProgress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 26,
    mass: 0.4,
  });

  const x = useTransform(springProgress, [0, 1], [0, -maxScroll]);

  return (
    <div ref={containerRef} className="relative mt-10 h-[230vh] md:hidden">
      <div className="sticky top-[84px] overflow-hidden">
        <motion.div
          ref={trackRef}
          style={{ x }}
          className="flex gap-4 px-6 will-change-transform"
        >
          {HOW_IT_WORKS_STEPS.map((step, idx) => {
            const Icon = STEP_ICONS[step.icon];
            return (
              <div key={step.title} className="w-[76vw] max-w-[330px] shrink-0">
                <StepCard
                  icon={Icon}
                  number={String(idx + 1).padStart(2, '0')}
                  title={step.title}
                  body={step.body}
                />
              </div>
            );
          })}
        </motion.div>
        <p className="label-mono mt-6 px-6 text-muted-foreground">
          Keep scrolling — step by step →
        </p>
      </div>
    </div>
  );
};

export const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="scroll-mt-24 py-24 sm:py-28">
      <div className="shell">
        <SectionHeader
          index="[03]"
          label="How it works"
          title="Three steps to a live site."
          description="No pressure to continue after the call."
        />
      </div>

      <MobileHowItWorks />

      <div className="shell mt-14 hidden md:block">
        <div className="grid gap-6 md:grid-cols-3">
          {HOW_IT_WORKS_STEPS.map((step, idx) => {
            const Icon = STEP_ICONS[step.icon];
            return (
              <Reveal key={step.title} delay={idx * 0.08}>
                <StepCard
                  icon={Icon}
                  number={String(idx + 1).padStart(2, '0')}
                  title={step.title}
                  body={step.body}
                />
              </Reveal>
            );
          })}
        </div>
      </div>

      <div className="shell">
        <p className="label-mono mt-12 text-center text-muted-foreground">
          The 12 days start at onboarding, after the call.
        </p>
      </div>
    </section>
  );
};
