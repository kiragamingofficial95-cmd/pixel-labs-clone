import React, { useRef } from 'react';
import { motion, useScroll, useSpring, useTransform, useReducedMotion } from 'framer-motion';
import { CONTACT_EMAIL } from '../data/content';

interface TiltProps {
  children: React.ReactNode;
  className?: string;
  distanceX?: number;
  distanceY?: number;
  rotateX?: number;
  rotateY?: number;
}

export const TiltContainer: React.FC<TiltProps> = ({
  children,
  className = '',
  distanceX = 0,
  distanceY = 60,
  rotateX = 10,
  rotateY = 0,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 96%', 'start 52%'],
  });

  const springProgress = useSpring(scrollYProgress, {
    stiffness: 110,
    damping: 26,
    mass: 0.35,
  });

  const y = useTransform(springProgress, [0, 1], reducedMotion ? [0, 0] : [distanceY, 0]);
  const x = useTransform(springProgress, [0, 1], reducedMotion ? [0, 0] : [distanceX, 0]);
  const opacity = useTransform(springProgress, [0, 0.55], reducedMotion ? [1, 1] : [0, 1]);
  const rx = useTransform(springProgress, [0, 1], reducedMotion ? [0, 0] : [rotateX, 0]);
  const ry = useTransform(springProgress, [0, 1], reducedMotion ? [0, 0] : [rotateY, 0]);

  return (
    <div ref={containerRef} className={className} style={{ perspective: 1300 }}>
      <motion.div
        style={{
          y,
          x,
          opacity,
          rotateX: rx,
          rotateY: ry,
          transformStyle: 'preserve-3d',
        }}
        className="h-full w-full will-change-transform"
      >
        {children}
      </motion.div>
    </div>
  );
};

export const ReadyCTA: React.FC = () => {
  return (
    <section id="book" className="scroll-mt-24 bg-[hsl(18_100%_50%)] py-24 sm:py-28">
      <div className="shell">
        <TiltContainer rotateX={9} distanceY={60} className="mx-auto max-w-3xl text-center">
          <p className="label-mono text-[#0A0A0A]/65">[05] // Ready when you are</p>
          <h2 className="h2 mt-6 text-[#0A0A0A]">
            Ready for a site that brings in campaign inquiries?
          </h2>
          <p className="body-lg mx-auto mt-6 max-w-xl text-[#0A0A0A]/75">
            Book a free call. We’ll show you a site made for your business. No obligation.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#0A0A0A] px-8 py-4 text-[14.5px] font-semibold tracking-[-0.005em] text-white shadow-[0_24px_50px_-24px_rgba(10,10,10,0.7)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#1c1c1c]"
            >
              Book a free call
              <span className="transition-transform duration-300 group-hover:translate-x-0.5">
                →
              </span>
            </a>

            <a
              href={`mailto:${CONTACT_EMAIL}?subject=Free%20call%20for%20my%20website`}
              className="inline-flex items-center justify-center rounded-full border border-[#0A0A0A]/25 px-8 py-4 text-[14.5px] font-semibold tracking-[-0.005em] text-[#0A0A0A] transition-colors duration-300 hover:bg-[#0A0A0A]/8"
            >
              Email us
            </a>
          </div>

          <p className="label-mono mt-6 text-[#0A0A0A]/60">
            Free call · No obligation
          </p>
        </TiltContainer>
      </div>
    </section>
  );
};
