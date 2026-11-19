import React from 'react';
import { Link } from 'react-router-dom';
import { Reveal } from '../components/Reveal';
import { SectionHeader } from '../components/SectionHeader';
import { ServiceHeader, ServiceCTA, ServiceFooter } from './ServicePage';
import { PRICING_PAGE } from '../data/content';

export const PricingPage: React.FC = () => {
  const c = PRICING_PAGE;

  return (
    <div className="min-h-screen bg-background">
      <ServiceHeader />
      <main className="pt-[72px]">
        {/* Hero */}
        <section className="grain relative overflow-hidden pb-16 pt-20 sm:pb-20 sm:pt-28">
          <div className="shell">
            <Reveal className="max-w-3xl">
              <p className="label-mono text-muted-foreground">{c.eyebrow}</p>
              <h1 className="h1 mt-6">{c.heading}</h1>
              <p className="body-lg mt-6 max-w-2xl text-muted-foreground">{c.intro}</p>
              <div className="mt-9 flex flex-wrap items-center gap-3">
                <Link
                  to="/#contact"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-[hsl(18_100%_50%)] px-8 py-4 text-[14.5px] font-semibold tracking-[-0.005em] text-white shadow-[0_24px_50px_-24px_hsl(18_100%_50%/0.7)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[hsl(18_100%_46%)]"
                >
                  Get a free quote
                  <span className="transition-transform duration-300 group-hover:translate-x-0.5">→</span>
                </Link>
                <span className="label-mono text-muted-foreground">Free call · Written quote · No obligation</span>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Why no price list */}
        <section className="border-t border-[hsl(60_5%_89%)] py-20 sm:py-24">
          <div className="shell">
            <SectionHeader
              index="[01]"
              label="Transparency"
              title={c.noPricesTitle}
              description={c.noPricesIntro}
            />
            <div className="mt-12 grid gap-4 sm:grid-cols-2">
              {c.noPrices.map((item, i) => (
                <Reveal key={item.title} delay={i * 0.05}>
                  <div className="h-full rounded-2xl border border-[hsl(60_5%_89%)] bg-white p-6">
                    <h3 className="h4">{item.title}</h3>
                    <p className="body-sm mt-3 text-muted-foreground">{item.body}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* What moves the quote */}
        <section className="border-t border-[hsl(60_5%_89%)] bg-[hsl(60_33%_98%)] py-20 sm:py-24">
          <div className="shell">
            <SectionHeader
              index="[02]"
              label="The quote"
              title={c.driversTitle}
              description={c.driversIntro}
            />
            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {c.drivers.map((item, i) => (
                <Reveal key={item.title} delay={i * 0.04}>
                  <div className="flex h-full gap-4 rounded-2xl border border-[hsl(60_5%_89%)] bg-white p-6">
                    <span className="label-mono mt-0.5 shrink-0 text-[hsl(18_100%_50%)]">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <div>
                      <h3 className="h4">{item.title}</h3>
                      <p className="body-sm mt-3 text-muted-foreground">{item.body}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Always included */}
        <section className="border-t border-[hsl(60_5%_89%)] py-20 sm:py-24">
          <div className="shell">
            <SectionHeader
              index="[03]"
              label="Included"
              title={c.includedTitle}
              description={c.includedIntro}
            />
            <ul className="mt-12 grid max-w-4xl gap-5 sm:grid-cols-2">
              {c.included.map((item, i) => (
                <Reveal key={item} delay={i * 0.03}>
                  <li className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[hsl(18_100%_50%)]" />
                    <p className="body text-foreground/85">{item}</p>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
        </section>

        {/* Three shapes */}
        <section className="border-t border-[hsl(60_5%_89%)] py-20 sm:py-24">
          <div className="shell">
            <SectionHeader
              index="[04]"
              label="Scope"
              title={c.shapesTitle}
              description={c.shapesIntro}
            />
            <div className="mt-12 grid gap-4 lg:grid-cols-3">
              {c.shapes.map((shape, i) => (
                <Reveal key={shape.name} delay={i * 0.06}>
                  <div className="flex h-full flex-col rounded-2xl border border-[hsl(60_5%_89%)] bg-white p-7">
                    <h3 className="h3">{shape.name}</h3>
                    <p className="body-sm mt-3 text-muted-foreground">{shape.who}</p>
                    <ul className="mt-6 space-y-3">
                      {shape.scope.map((s) => (
                        <li key={s} className="flex gap-3">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[hsl(18_100%_50%)]" />
                          <p className="body-sm text-foreground/80">{s}</p>
                        </li>
                      ))}
                    </ul>
                    <p className="label-mono mt-auto pt-6 text-[hsl(18_100%_50%)]">{shape.note}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* How the quote works */}
        <section className="border-t border-[hsl(60_5%_89%)] bg-[#0A0A0A] py-20 text-white sm:py-24">
          <div className="shell">
            <SectionHeader
              dark
              index="[05]"
              label="Process"
              title={c.stepsTitle}
              description={c.stepsIntro}
            />
            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {c.steps.map((step, i) => (
                <Reveal key={step.title} delay={i * 0.05}>
                  <div className="h-full rounded-2xl border border-white/10 p-6">
                    <span className="label-mono text-[hsl(18_100%_50%)]">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <h3 className="h4 mt-3 text-white">{step.title}</h3>
                    <p className="body-sm mt-3 text-white/60">{step.body}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="border-t border-[hsl(60_5%_89%)] py-20 sm:py-24">
          <div className="shell">
            <SectionHeader index="[06]" label="FAQ" title={c.faqTitle} />
            <div className="mt-12 max-w-3xl space-y-8">
              {c.faq.map((item, i) => (
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

        <ServiceCTA title={c.ctaTitle} body={c.ctaBody} />
      </main>
      <ServiceFooter />
    </div>
  );
};
