import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { TICKER_PHRASES } from '../data/content';

export const MarqueeBanner: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const x = useTransform(
    scrollYProgress,
    [0, 1],
    reducedMotion ? [0, 0] : [0, -520]
  );

  const repeated = Array.from({ length: 4 }).flatMap(() => TICKER_PHRASES);

  const renderItems = () =>
    repeated.map((phrase, idx) => (
      <span key={`${phrase}-${idx}`} className="flex items-center">
        <span
          className={`display px-6 text-[6.5vw] font-extrabold uppercase leading-none tracking-[-0.04em] md:text-white lg:text-[4.4vw] ${
            idx % 3 === 1
              ? 'text-[hsl(18_100%_50%)]'
              : 'text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.22)] md:[-webkit-text-stroke-width:0px]'
          }`}
        >
          {phrase}
        </span>
        <span className="text-[#FF4D00] md:text-white/75">✳</span>
      </span>
    ));

  return (
    <div
      ref={containerRef}
      className="overflow-hidden border-y border-white/10 bg-[#0A0A0A] py-5 md:border-[hsl(18_100%_46%)] md:bg-[hsl(18_100%_50%)]"
    >
      <div className="belt-track flex w-max items-center whitespace-nowrap will-change-transform motion-reduce:animate-none md:hidden">
        {renderItems()}
      </div>
      <motion.div
        style={{ x }}
        className="hidden w-max items-center whitespace-nowrap will-change-transform md:flex"
      >
        {renderItems()}
      </motion.div>
    </div>
  );
};
