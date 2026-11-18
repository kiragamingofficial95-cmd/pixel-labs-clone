import React from 'react';
import { Link } from 'react-router-dom';
import { Reveal } from '../components/Reveal';
import {
  ServiceHeader,
  ServiceCTA,
  ServiceFooter,
} from './ServicePage';
import { WORK_CASES } from '../data/content';

const WorkPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      <ServiceHeader />
      <main className="pt-[72px]">
        {/* Hero */}
        <section className="grain relative overflow-hidden pb-16 pt-20 sm:pb-20 sm:pt-28">
          <div className="shell">
            <Reveal className="max-w-3xl">
              <p className="label-mono text-muted-foreground">[//] Work</p>
              <h1 className="h1 mt-6">
                Websites we&apos;ve built for influencer marketing businesses
              </h1>
              <p className="body-lg mt-6 max-w-2xl text-muted-foreground">
                A young agency, and we show our work. Every site here was designed,
                written, and built end to end for a business in influencer
                marketing — no templates, no filler case studies.
              </p>
            </Reveal>
          </div>
        </section>

        {/* Case studies */}
        <section className="border-t border-[hsl(60_5%_89%)] py-20 sm:py-24">
          <div className="shell space-y-10">
            {WORK_CASES.map((work) => (
              <Reveal key={work.client}>
                <article className="rounded-2xl border border-[hsl(60_5%_89%)] bg-white p-8 sm:p-10">
                  <div className="flex flex-wrap items-baseline justify-between gap-3">
                    <h2 className="h3">{work.client}</h2>
                    <a
                      href={work.url}
                      target="_blank"
                      rel="noreferrer"
                      className="label-mono text-muted-foreground underline decoration-[hsl(0_0%_4%/0.2)] underline-offset-4 transition-colors hover:text-[hsl(18_100%_50%)] hover:decoration-[hsl(18_100%_50%)]"
                    >
                      {work.url.replace('https://', '')}
                    </a>
                  </div>
                  <p className="label-mono mt-2 text-[hsl(18_100%_50%)]">{work.industry}</p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {work.scope.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-[hsl(0_0%_4%/0.12)] px-3.5 py-1.5 text-[12.5px] font-medium text-foreground/70"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 className="h4 mt-8">The brief</h3>
                  <p className="body mt-3 max-w-2xl text-muted-foreground">{work.challenge}</p>

                  <h3 className="h4 mt-8">What we built</h3>
                  <ul className="mt-3 max-w-2xl space-y-3">
                    {work.approach.map((item) => (
                      <li key={item} className="flex gap-3">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[hsl(18_100%_50%)]" />
                        <p className="body text-foreground/85">{item}</p>
                      </li>
                    ))}
                  </ul>

                  <h3 className="h4 mt-8">The result</h3>
                  <p className="body mt-3 max-w-2xl text-muted-foreground">{work.outcome}</p>
                </article>
              </Reveal>
            ))}

            <Reveal>
              <p className="body-sm text-muted-foreground">
                More launches are in progress. If you want yours to be next, the free
                discovery call is the first step.
              </p>
            </Reveal>
          </div>
        </section>

        <ServiceCTA
          title="Your site could be next"
          body="Book a free discovery call. We show you a site made for your business and talk it through. No obligation."
        />
      </main>
      <ServiceFooter />
    </div>
  );
};

export { WorkPage };
