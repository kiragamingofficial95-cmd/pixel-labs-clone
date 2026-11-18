import React from 'react';
import { ScrollProgress } from '../components/ScrollProgress';
import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { OfferGlance } from '../components/OfferGlance';
import { ProblemSolution } from '../components/ProblemSolution';
import { Benefits } from '../components/Benefits';
import { HowItWorks } from '../components/HowItWorks';
import { MarqueeBanner } from '../components/MarqueeBanner';
import { FAQ } from '../components/FAQ';
import { ReadyCTA } from '../components/ReadyCTA';
import { ContactForm } from '../components/ContactForm';
import { Footer } from '../components/Footer';
import { Reveal } from '../components/Reveal';

const ServicesStrip: React.FC = () => (
  <section id="services" className="border-t border-[hsl(60_5%_89%)] py-16 sm:py-20">
    <div className="shell">
      <Reveal>
        <p className="label-mono text-muted-foreground">[//] Services</p>
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          <a
            href="/website-design"
            className="group rounded-2xl border border-[hsl(60_5%_89%)] bg-white p-7 transition-all duration-300 hover:-translate-y-0.5 hover:border-[hsl(18_100%_50%/0.5)] hover:shadow-[0_18px_40px_-24px_rgba(10,10,10,0.25)]"
          >
            <h3 className="h4">New websites</h3>
            <p className="body-sm mt-3 text-muted-foreground">
              A new site for your influencer marketing agency, built to win campaign inquiries — live within 12 days.
            </p>
            <span className="label-mono mt-5 inline-block text-[hsl(18_100%_50%)]">
              Explore new websites <span className="inline-block transition-transform duration-300 group-hover:translate-x-0.5">→</span>
            </span>
          </a>
          <a
            href="/website-redesign"
            className="group rounded-2xl border border-[hsl(60_5%_89%)] bg-white p-7 transition-all duration-300 hover:-translate-y-0.5 hover:border-[hsl(18_100%_50%/0.5)] hover:shadow-[0_18px_40px_-24px_rgba(10,10,10,0.25)]"
          >
            <h3 className="h4">Redesigns</h3>
            <p className="body-sm mt-3 text-muted-foreground">
              Your current site rebuilt around one job: turning brand visitors into campaign inquiries.
            </p>
            <span className="label-mono mt-5 inline-block text-[hsl(18_100%_50%)]">
              Explore redesigns <span className="inline-block transition-transform duration-300 group-hover:translate-x-0.5">→</span>
            </span>
          </a>
          <a
            href="/seo-services"
            className="group rounded-2xl border border-[hsl(60_5%_89%)] bg-white p-7 transition-all duration-300 hover:-translate-y-0.5 hover:border-[hsl(18_100%_50%/0.5)] hover:shadow-[0_18px_40px_-24px_rgba(10,10,10,0.25)]"
          >
            <h3 className="h4">SEO</h3>
            <p className="body-sm mt-3 text-muted-foreground">
              The pages brands search for, ranked in Google and quoted in AI answers — tracked from day one.
            </p>
            <span className="label-mono mt-5 inline-block text-[hsl(18_100%_50%)]">
              Explore SEO <span className="inline-block transition-transform duration-300 group-hover:translate-x-0.5">→</span>
            </span>
          </a>
        </div>
        <a
          href="/work"
          className="label-mono mt-6 inline-flex items-center gap-2 text-foreground/70 transition-colors hover:text-[hsl(18_100%_50%)]"
        >
          See our work <span className="transition-transform duration-300 group-hover:translate-x-0.5">→</span>
        </a>
      </Reveal>
    </div>
  </section>
);

export const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      <ScrollProgress />
      <Header />
      <main>
        <Hero />
        <OfferGlance />
        <ProblemSolution />
        <Benefits />
        <HowItWorks />
        <ServicesStrip />
        <MarqueeBanner />
        <FAQ />
        <ReadyCTA />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};
