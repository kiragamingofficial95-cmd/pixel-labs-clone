import React from 'react';
import { Link } from 'react-router-dom';
import { Logo } from '../components/Logo';
import { Reveal } from '../components/Reveal';
import { SectionHeader } from '../components/SectionHeader';
import { CASE_STUDY, CONTACT_EMAIL, type ServicePageContent } from '../data/content';

export const ServiceHeader: React.FC = () => (
  <header className="fixed inset-x-0 top-0 z-50 border-b border-[hsl(60_5%_89%)] bg-[hsl(60_33%_99%/0.85)] backdrop-blur-xl">
    <div className="shell flex h-[72px] items-center justify-between">
      <Link to="/" aria-label="Pixel Labs home">
        <Logo />
      </Link>
      <div className="flex items-center gap-5">
        <a
          href={`mailto:${CONTACT_EMAIL}`}
          className="label-mono hidden text-foreground/60 transition-colors hover:text-[hsl(18_100%_50%)] sm:inline"
        >
          Email us
        </a>
        <Link
          to="/#contact"
          className="rounded-full bg-[hsl(18_100%_50%)] px-6 py-2.5 text-[14px] font-semibold tracking-[-0.005em] text-white shadow-[0_12px_28px_-14px_hsl(18_100%_50%/0.8)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[hsl(18_100%_46%)]"
        >
          Book a free call
        </Link>
      </div>
    </div>
  </header>
);

export const ServiceCTA: React.FC<{ title: string; body: string }> = ({ title, body }) => (
  <section className="bg-[hsl(18_100%_50%)] py-24 sm:py-28">
    <div className="shell">
      <Reveal className="mx-auto max-w-3xl text-center">
        <h2 className="h2 text-[#0A0A0A]">{title}</h2>
        <p className="body-lg mx-auto mt-6 max-w-xl text-[#0A0A0A]/75">{body}</p>
        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            to="/#contact"
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#0A0A0A] px-8 py-4 text-[14.5px] font-semibold tracking-[-0.005em] text-white shadow-[0_24px_50px_-24px_rgba(10,10,10,0.7)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#1c1c1c]"
          >
            Book a free call
            <span className="transition-transform duration-300 group-hover:translate-x-0.5">→</span>
          </Link>
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="inline-flex items-center justify-center rounded-full border border-[#0A0A0A]/25 px-8 py-4 text-[14.5px] font-semibold tracking-[-0.005em] text-[#0A0A0A] transition-colors duration-300 hover:bg-[#0A0A0A]/8"
          >
            Email us
          </a>
        </div>
        <p className="label-mono mt-6 text-[#0A0A0A]/60">Free call · No obligation · Live within 12 days</p>
      </Reveal>
    </div>
  </section>
);

export const ServicePage: React.FC<{ content: ServicePageContent }> = ({ content }) => {
  return (
    <div className="min-h-screen bg-background">
      <ServiceHeader />
      <main className="pt-[72px]">
        {/* Hero */}
        <section className="grain relative overflow-hidden pb-16 pt-20 sm:pb-20 sm:pt-28">
          <div className="shell">
            <Reveal className="max-w-3xl">
              <p className="label-mono text-muted-foreground">{content.eyebrow}</p>
              <h1 className="h1 mt-6">{content.heading}</h1>
              <p className="body-lg mt-6 max-w-2xl text-muted-foreground">{content.intro}</p>
              <div className="mt-9 flex flex-wrap items-center gap-3">
                <Link
                  to="/#contact"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-[hsl(18_100%_50%)] px-8 py-4 text-[14.5px] font-semibold tracking-[-0.005em] text-white shadow-[0_24px_50px_-24px_hsl(18_100%_50%/0.7)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[hsl(18_100%_46%)]"
                >
                  Book a free call
                  <span className="transition-transform duration-300 group-hover:translate-x-0.5">→</span>
                </Link>
                <span className="label-mono text-muted-foreground">Free call · No obligation</span>
              </div>
            </Reveal>
          </div>
        </section>

        {/* What's included */}
        <section className="border-t border-[hsl(60_5%_89%)] py-20 sm:py-24">
          <div className="shell">
            <SectionHeader index="[01]" label="Included" title={content.includedTitle} description={content.includedIntro} />
            <div className="mt-12 grid gap-4 sm:grid-cols-2">
              {content.included.map((item, i) => (
                <Reveal key={item} delay={i * 0.05}>
                  <div className="flex h-full gap-4 rounded-2xl border border-[hsl(60_5%_89%)] bg-white p-6">
                    <span className="label-mono mt-0.5 shrink-0 text-[hsl(18_100%_50%)]">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <p className="body text-foreground/85">{item}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Why */}
        <section className="border-t border-[hsl(60_5%_89%)] py-20 sm:py-24">
          <div className="shell">
            <SectionHeader index="[02]" label="The case" title={content.whyTitle} description={content.whyIntro} />
            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {content.why.map((item, i) => (
                <Reveal key={item.title} delay={i * 0.06}>
                  <div className="h-full rounded-2xl border border-[hsl(60_5%_89%)] bg-white p-6">
                    <h3 className="h4">{item.title}</h3>
                    <p className="body-sm mt-3 text-muted-foreground">{item.body}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Case study */}
        <section className="border-t border-[hsl(60_5%_89%)] bg-[#0A0A0A] py-20 text-white sm:py-24">
          <div className="shell">
            <SectionHeader dark index="[03]" label="Proof" title="Built for an influencer marketing agency" />
            <Reveal className="mt-12">
              <div className="rounded-2xl border border-white/10 p-8 sm:p-10">
                <div className="flex flex-wrap items-baseline justify-between gap-3">
                  <h3 className="h3 text-white">{CASE_STUDY.name}</h3>
                  <a
                    href={CASE_STUDY.url}
                    target="_blank"
                    rel="noreferrer"
                    className="label-mono text-white/55 underline decoration-white/20 underline-offset-4 transition-colors hover:text-[hsl(18_100%_50%)] hover:decoration-[hsl(18_100%_50%)]"
                  >
                    {CASE_STUDY.url.replace('https://', '')}
                  </a>
                </div>
                <p className="body-lg mt-5 max-w-2xl text-white/65">{CASE_STUDY.summary}</p>
                <ul className="mt-7 space-y-4">
                  {CASE_STUDY.built.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[hsl(18_100%_50%)]" />
                      <p className="body text-white/75">{item}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </section>

        {/* FAQ */}
        <section className="border-t border-[hsl(60_5%_89%)] py-20 sm:py-24">
          <div className="shell">
            <SectionHeader index="[04]" label="FAQ" title={content.faqTitle} />
            <div className="mt-12 max-w-3xl space-y-8">
              {content.faq.map((item, i) => (
                <Reveal key={item.q} delay={i * 0.04}>
                  <div>
                    <h3 className="h4">{item.q}</h3>
                    <p className="body mt-3 text-muted-foreground">{item.a}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <ServiceCTA title={content.ctaTitle} body={content.ctaBody} />
      </main>
      <ServiceFooter />
    </div>
  );
};

export const ServiceFooter: React.FC = () => (
  <footer className="border-t border-white/10 bg-[#0A0A0A] py-8 text-white">
    <div className="shell flex flex-col items-center justify-between gap-4 sm:flex-row">
      <p className="label-mono text-white/45">© {new Date().getFullYear()} Pixel Labs</p>
      <div className="flex flex-wrap justify-center gap-6">
        <Link to="/" className="text-[14px] text-white/65 transition-colors hover:text-white">
          Home
        </Link>
        <Link to="/website-design" className="text-[14px] text-white/65 transition-colors hover:text-white">
          New websites
        </Link>
        <Link to="/website-redesign" className="text-[14px] text-white/65 transition-colors hover:text-white">
          Redesigns
        </Link>
        <Link to="/seo-services" className="text-[14px] text-white/65 transition-colors hover:text-white">
          SEO
        </Link>
        <Link to="/work" className="text-[14px] text-white/65 transition-colors hover:text-white">
          Our work
        </Link>
      </div>
    </div>
  </footer>
);
