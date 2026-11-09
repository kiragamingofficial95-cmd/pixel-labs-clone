import React from 'react';
import { Link } from 'react-router-dom';
import { Logo } from '../components/Logo';
import {
  CONTACT_EMAIL,
  PRIVACY_SECTIONS,
  TERMS_SECTIONS,
} from '../data/content';

interface PolicySection {
  heading: string;
  body: string;
}

interface PolicyLayoutProps {
  title: string;
  updated: string;
  intro: string;
  sections: PolicySection[];
}

export const PolicyLayout: React.FC<PolicyLayoutProps> = ({
  title,
  updated,
  intro,
  sections,
}) => {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-[hsl(60_5%_89%)]">
        <div className="shell flex h-[72px] items-center justify-between">
          <Link to="/" aria-label="Pixel Labs home">
            <Logo />
          </Link>
          <Link
            to="/"
            className="label-mono text-foreground/60 transition-colors hover:text-[hsl(18_100%_50%)]"
          >
            Back to home
          </Link>
        </div>
      </header>

      <main className="shell max-w-3xl py-20">
        <p className="label-mono text-muted-foreground">{updated}</p>
        <h1 className="h2 mt-4">{title}</h1>
        <p className="body-lg mt-5 text-muted-foreground">{intro}</p>

        <div className="mt-12 space-y-9">
          {sections.map((section) => (
            <section key={section.heading}>
              <h2 className="h4">{section.heading}</h2>
              <p className="body mt-2.5 text-muted-foreground">{section.body}</p>
            </section>
          ))}
        </div>

        <p className="body-sm mt-14 text-muted-foreground">
          Questions about this page? Email{' '}
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="text-foreground underline decoration-[hsl(18_100%_50%)] underline-offset-4"
          >
            {CONTACT_EMAIL}
          </a>
          .
        </p>
      </main>
    </div>
  );
};

export const PrivacyPage: React.FC = () => {
  return (
    <PolicyLayout
      title="Privacy Policy"
      updated="Last updated: placeholder — replace before publishing"
      intro="This is placeholder policy copy for the Pixel Labs landing page. Replace it with your own reviewed privacy policy before you go live."
      sections={PRIVACY_SECTIONS}
    />
  );
};

export const TermsPage: React.FC = () => {
  return (
    <PolicyLayout
      title="Terms of Service"
      updated="Last updated: placeholder — replace before publishing"
      intro="This is placeholder terms copy for the Pixel Labs landing page. Replace it with your own reviewed terms before you go live."
      sections={TERMS_SECTIONS}
    />
  );
};
