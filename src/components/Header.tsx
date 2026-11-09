import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Logo } from './Logo';
import { NAV_LINKS } from '../data/content';

export const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 12);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-[hsl(60_5%_89%)] bg-[hsl(60_33%_99%/0.82)] shadow-[0_8px_30px_-24px_rgba(10,10,10,0.5)] backdrop-blur-xl'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <nav className="shell flex h-[72px] items-center justify-between">
        <a href="#top" aria-label="Pixel Labs home">
          <Logo />
        </a>

        <div className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[13.5px] font-medium tracking-[-0.005em] text-foreground/70 transition-colors hover:text-[hsl(18_100%_50%)]"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <a
            href="#contact"
            className="hidden rounded-full bg-[hsl(18_100%_50%)] px-6 py-2.5 text-[14px] font-semibold tracking-[-0.005em] text-white shadow-[0_12px_28px_-14px_hsl(18_100%_50%/0.8)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[hsl(18_100%_46%)] sm:inline-flex"
          >
            Book a free call
          </a>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[hsl(0_0%_4%/0.14)] text-foreground transition hover:bg-white lg:hidden"
          >
            {mobileOpen ? <X size={17} /> : <Menu size={17} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden border-t border-[hsl(60_5%_89%)] bg-[hsl(60_33%_99%)] lg:hidden"
          >
            <div className="shell flex flex-col py-4">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="border-b border-[hsl(60_5%_92%)] py-3.5 text-[14px] font-medium text-foreground/75"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="mt-4 rounded-full bg-[hsl(18_100%_50%)] py-3 text-center text-[14px] font-semibold text-white"
              >
                Book a free call
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
