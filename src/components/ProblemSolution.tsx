import React, { useRef } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { Check, X } from 'lucide-react';
import { SectionHeader } from './SectionHeader';
import { PROBLEM_ITEMS, SOLUTION_ITEMS } from '../data/content';

interface ProblemCardProps {
  variant?: 'old' | 'new';
  className?: string;
  children?: React.ReactNode;
}

export const ProblemCard: React.FC<ProblemCardProps> = ({
  variant = 'old',
  className = '',
  children,
}) => {
  if (variant === 'new') {
    return (
      <div
        className={`relative overflow-hidden rounded-3xl border border-[hsl(18_100%_50%/0.25)] bg-white p-8 shadow-[0_40px_80px_-50px_hsl(18_100%_50%/0.55)] sm:p-10 ${className}`}
      >
        <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-[radial-gradient(circle,hsl(18_100%_50%/0.18),transparent_70%)]" />
        <div className="relative flex items-center justify-between gap-3">
          <span className="label-mono text-[hsl(18_100%_50%)]">Our approach</span>
          <span className="label-mono shrink-0 rounded-full bg-[hsl(18_100%_50%)] px-2.5 py-1 text-white">
            Recommended
          </span>
        </div>
        <h3 className="h3 relative mt-4 text-foreground">
          Built by specialists in this niche
        </h3>
        <ul className="relative mt-8 space-y-4">
          {SOLUTION_ITEMS.map((item) => (
            <li key={item} className="body-sm flex gap-3 text-foreground/85">
              <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[hsl(18_100%_50%/0.12)]">
                <Check size={12} className="text-[hsl(18_100%_50%)]" />
              </span>
              {item}
            </li>
          ))}
        </ul>
        {children}
      </div>
    );
  }

  return (
    <div
      className={`h-full rounded-3xl border border-[hsl(60_5%_89%)] bg-[hsl(60_8%_95%)] p-8 sm:p-10 ${className}`}
    >
      <span className="label-mono text-muted-foreground">The common problem</span>
      <h3 className="h3 mt-4 text-foreground/80">Polished, but no clear next step</h3>
      <ul className="mt-8 space-y-4">
        {PROBLEM_ITEMS.map((item) => (
          <li key={item} className="body-sm flex gap-3 text-muted-foreground">
            <X size={16} className="mt-1 shrink-0 text-[hsl(0_0%_55%)]" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export const MobileProblemSolution: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const springProgress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 28,
    mass: 0.5,
  });

  const oldCardOpacity = useTransform(springProgress, [0.12, 0.72], [1, 0]);
  const oldCardScale = useTransform(springProgress, [0.12, 0.85], [1, 0.94]);
  const oldCardY = useTransform(springProgress, [0.12, 0.85], [0, -26]);
  const oldCardFilter = useTransform(
    useTransform(springProgress, [0.08, 0.55], [0, 1]),
    (v) => `grayscale(${v}) blur(${v * 3}px)`
  );

  const newCardOpacity = useTransform(springProgress, [0.2, 0.68], [0.4, 1]);
  const newCardScale = useTransform(springProgress, [0.2, 1], [0.94, 1]);
  const shimmerX = useTransform(springProgress, [0.5, 1], ['-80%', '250%']);
  const shimmerOpacity = useTransform(
    springProgress,
    [0.45, 0.7, 1],
    [0, 0.9, 0.25]
  );

  return (
    <div ref={containerRef} className="relative mt-10 h-[200vh] md:hidden">
      <div className="sticky top-[84px] px-6">
        <div className="relative grid">
          <motion.div
            style={{ opacity: newCardOpacity, scale: newCardScale }}
            className="col-start-1 row-start-1 origin-bottom"
          >
            <ProblemCard variant="new">
              <motion.div
                aria-hidden="true"
                style={{ x: shimmerX, opacity: shimmerOpacity }}
                className="pointer-events-none absolute inset-y-0 left-0 w-[45%] -skew-x-12 bg-gradient-to-r from-transparent via-white to-transparent blur-md"
              />
            </ProblemCard>
          </motion.div>

          <motion.div
            style={{
              opacity: oldCardOpacity,
              scale: oldCardScale,
              y: oldCardY,
              filter: oldCardFilter,
            }}
            className="col-start-1 row-start-1 origin-top"
          >
            <ProblemCard variant="old" className="h-auto" />
          </motion.div>
        </div>
        <p className="label-mono mt-5 text-center text-muted-foreground">
          Keep scrolling
        </p>
      </div>
    </div>
  );
};

export const ProblemSolution: React.FC = () => {
  return (
    <section id="why-pixel-labs" className="scroll-mt-24 py-24 sm:py-28">
      <div className="shell">
        <SectionHeader
          index="[01]"
          label="Problem / Solution"
          title="Most agency sites look good and still lose the inquiry."
          description="A brand decides in seconds whether you can run its campaign. We build your site so the answer is easy to find."
        />
      </div>

      <MobileProblemSolution />

      <div className="shell mt-14 hidden md:block">
        <div className="grid gap-6 md:grid-cols-2">
          <ProblemCard variant="old" />
          <ProblemCard variant="new" />
        </div>
      </div>
    </section>
  );
};
