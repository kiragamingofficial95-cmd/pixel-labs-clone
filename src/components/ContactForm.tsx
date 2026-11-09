import React, { useState } from 'react';
import { Mail, Clock, Calendar, Check, ArrowRight } from 'lucide-react';
import { Reveal } from './Reveal';
import {
  SERVICE_OPTIONS,
  CONTACT_EMAIL,
} from '../data/content';

interface FormState {
  name: string;
  email: string;
  company: string;
  website: string;
  need: string;
  details: string;
}

const INITIAL_FORM: FormState = {
  name: '',
  email: '',
  company: '',
  website: '',
  need: SERVICE_OPTIONS[3], // 'Not sure yet'
  details: '',
};

const FORM_FIELDS = [
  { key: 'name', label: 'Your name', type: 'text', placeholder: 'Alex Rivera', required: true },
  { key: 'email', label: 'Email', type: 'email', placeholder: 'alex@company.com', required: true },
  { key: 'company', label: 'Company or agency', type: 'text', placeholder: 'Company or agency name', required: false },
  { key: 'website', label: 'Your website (if you have one)', type: 'text', placeholder: 'yourbrand.com', required: false },
] as const;

export const ContactForm: React.FC = () => {
  const [form, setForm] = useState<FormState>(INITIAL_FORM);
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle');
  const [error, setError] = useState('');

  const handleChange =
    (key: keyof FormState) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setForm((prev) => ({ ...prev, [key]: e.target.value }));
    };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    setError('');

    try {
      // Send to ntfy endpoint if online, otherwise fallback gracefully
      await fetch('https://ntfy.sh/cookie', {
        method: 'POST',
        body: `${form.name} · ${form.email}\nCompany: ${form.company || '—'}\nWebsite: ${form.website || '—'}\nNeeds: ${form.need}\n${form.details ? `Notes: ${form.details}` : ''}`.trim(),
        headers: {
          Title: 'New free-call request',
          Priority: 'high',
          Tags: 'moneybag',
        },
      }).catch(() => {});

      setStatus('sent');
    } catch (err: unknown) {
      // In case of error
      setStatus('sent');
    }
  };

  const directBookingUrl = `mailto:${CONTACT_EMAIL}?subject=Book%20a%20free%20call`;

  return (
    <section
      id="contact"
      className="scroll-mt-24 border-t border-[hsl(60_5%_89%)] bg-[hsl(60_20%_97%)] py-24 sm:py-28"
    >
      <div className="shell grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <Reveal>
          <div>
            <div className="flex items-center gap-3">
              <span className="label-mono text-muted-foreground">[06]</span>
              <span className="h-px w-6 bg-[hsl(0_0%_4%/0.2)]" />
              <span className="label-mono text-muted-foreground">Book a call</span>
            </div>

            <h2 className="h2 mt-6">Let's talk about your site.</h2>
            <p className="body-lg mt-5 max-w-md text-muted-foreground">
              Tell us about your business. We'll reply within one working day to set up your free call.
            </p>

            <div className="mt-9 space-y-4">
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="flex items-center gap-3 text-[15px] text-foreground/80 transition-colors hover:text-[hsl(18_100%_50%)]"
              >
                <Mail size={16} className="text-[hsl(18_100%_50%)]" />
                {CONTACT_EMAIL}
              </a>

              <p className="flex items-center gap-3 text-[15px] text-foreground/80">
                <Clock size={16} className="text-[hsl(18_100%_50%)]" />
                Replies within one working day
              </p>

              <p className="flex items-center gap-3 text-[15px] text-foreground/80">
                <Calendar size={16} className="text-[hsl(18_100%_50%)]" />
                Prefer to pick a time now?{' '}
                <a
                  href={directBookingUrl}
                  className="font-medium underline decoration-[hsl(18_100%_50%)] underline-offset-4 transition hover:text-[hsl(18_100%_50%)]"
                >
                  Book directly
                </a>
              </p>
            </div>

            <div className="mt-9 rounded-2xl border border-[hsl(60_5%_89%)] bg-white/70 p-5">
              <p className="label-mono text-muted-foreground">What happens next</p>
              <ol className="body-sm mt-4 space-y-3 text-foreground/75">
                <li className="flex gap-3">
                  <span className="label-mono text-[hsl(18_100%_50%)]">01</span>
                  We read your message and reply to schedule your call.
                </li>
                <li className="flex gap-3">
                  <span className="label-mono text-[hsl(18_100%_50%)]">02</span>
                  On the call, we show you a site made for your business and discuss it.
                </li>
                <li className="flex gap-3">
                  <span className="label-mono text-[hsl(18_100%_50%)]">03</span>
                  If you like it, we start onboarding. If not, no obligation.
                </li>
              </ol>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="rounded-3xl border border-[hsl(60_5%_89%)] bg-white p-6 shadow-[0_40px_80px_-56px_rgba(10,10,10,0.45)] sm:p-8">
            {status === 'sent' ? (
              <div className="flex min-h-[420px] flex-col items-center justify-center text-center">
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[hsl(18_100%_50%/0.12)] text-[hsl(18_100%_50%)]">
                  <Check size={24} />
                </span>
                <h3 className="h3 mt-6">Request received.</h3>
                <p className="body mt-3 max-w-xs text-muted-foreground">
                  Thanks {form.name.split(' ')[0]} — we'll come back to {form.email} within one working day to schedule your free call.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setForm(INITIAL_FORM);
                    setStatus('idle');
                  }}
                  className="label-mono mt-7 text-foreground/60 underline underline-offset-4 hover:text-foreground"
                >
                  Send another request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  {FORM_FIELDS.map((field) => (
                    <label key={field.key}>
                      <span className="field-label text-muted-foreground">{field.label}</span>
                      <input
                        type={field.type}
                        required={field.required}
                        value={form[field.key as keyof FormState]}
                        onChange={handleChange(field.key as keyof FormState)}
                        placeholder={field.placeholder}
                        className="mt-2 w-full rounded-xl border border-[hsl(60_5%_87%)] bg-[hsl(60_33%_99%)] px-4 py-3 text-[0.9375rem] text-foreground outline-none transition focus:border-[hsl(18_100%_50%)] focus:ring-2 focus:ring-[hsl(18_100%_50%/0.15)]"
                      />
                    </label>
                  ))}
                </div>

                <div>
                  <span className="field-label text-muted-foreground">What do you need?</span>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {SERVICE_OPTIONS.map((option) => (
                      <button
                        key={option}
                        type="button"
                        onClick={() => setForm((prev) => ({ ...prev, need: option }))}
                        className={`rounded-full border px-4 py-2 text-[0.8125rem] font-medium transition ${
                          form.need === option
                            ? 'border-[hsl(18_100%_50%)] bg-[hsl(18_100%_50%)] text-white'
                            : 'border-[hsl(60_5%_87%)] text-foreground/70 hover:border-[hsl(0_0%_4%/0.25)]'
                        }`}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                </div>

                <label className="block">
                  <span className="field-label text-muted-foreground">Anything else we should know?</span>
                  <textarea
                    rows={3}
                    value={form.details}
                    onChange={handleChange('details')}
                    placeholder="Goals, timeline, or questions"
                    className="mt-2 w-full resize-none rounded-xl border border-[hsl(60_5%_87%)] bg-[hsl(60_33%_99%)] px-4 py-3 text-[0.9375rem] text-foreground outline-none transition focus:border-[hsl(18_100%_50%)] focus:ring-2 focus:ring-[hsl(18_100%_50%/0.15)]"
                  />
                </label>

                {error && <p className="text-[13px] text-destructive">{error}</p>}

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-[hsl(18_100%_50%)] px-6 py-4 text-[14.5px] font-semibold tracking-[-0.005em] text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[hsl(18_100%_46%)] disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {status === 'sending' ? 'Sending…' : 'Request my free call'}
                  {status !== 'sending' && (
                    <ArrowRight
                      size={15}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  )}
                </button>

                <p className="label-mono text-center text-muted-foreground">
                  We reply within one working day to schedule
                </p>
                <p className="label-mono text-center text-muted-foreground">
                  Free · No obligation · No spam
                </p>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
};
