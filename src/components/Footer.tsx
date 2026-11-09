import React from 'react';
import { Link } from 'react-router-dom';
import { Logo } from './Logo';
import { CONTACT_EMAIL, FOOTER_SECTIONS } from '../data/content';

export const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-[#0A0A0A] pb-10 pt-20 text-white">
      <div className="pointer-events-none absolute inset-x-0 top-2 flex justify-center overflow-hidden">
        <span className="font-heading whitespace-nowrap text-[11vw] font-extrabold uppercase leading-none tracking-[-0.04em] text-white/[0.05]">
          Let's talk
        </span>
      </div>

      <div className="shell relative">
        <div className="grid gap-12 lg:grid-cols-[1.6fr_1fr_1fr_1fr]">
          <div>
            <Logo tone="dark" />
            <p className="body-sm mt-5 max-w-[21rem] text-white/55">
              Websites for influencer marketing businesses, built to turn visitors into campaign inquiries.
            </p>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="mt-5 inline-block text-[14px] font-medium text-white/85 underline decoration-white/20 underline-offset-4 transition hover:text-[hsl(18_100%_50%)] hover:decoration-[hsl(18_100%_50%)]"
            >
              {CONTACT_EMAIL}
            </a>
          </div>

          {FOOTER_SECTIONS.map((section) => (
            <div key={section.title}>
              <p className="label-mono text-white/45">{section.title}</p>
              <ul className="mt-5 space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    {link.href.startsWith('/') && !link.href.startsWith('/#') ? (
                      <Link
                        to={link.href}
                        className="text-[14px] text-white/65 transition-colors hover:text-white"
                      >
                        {link.label}
                      </Link>
                    ) : (
                      <a
                        href={link.href}
                        className="text-[14px] text-white/65 transition-colors hover:text-white"
                      >
                        {link.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 border-t border-white/10 pt-7">
          <p className="label-mono text-white/45">
            © {year} Pixel Labs. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
