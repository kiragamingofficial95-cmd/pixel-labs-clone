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
        <MarqueeBanner />
        <FAQ />
        <ReadyCTA />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};
