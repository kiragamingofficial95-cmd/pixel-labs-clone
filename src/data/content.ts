export interface NavLink {
  label: string;
  href: string;
}

export const NAV_LINKS: NavLink[] = [
  { label: 'Why Pixel Labs', href: '#why-pixel-labs' },
  { label: 'How it works', href: '#how-it-works' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
];

export const HERO_TRUST_ITEMS: string[] = [
  'Free discovery call',
  'Live within 12 days of onboarding',
  'No obligation',
];

export const OFFER_STATS = [
  { value: 'Free', label: 'Discovery call, no obligation' },
  { value: '12 days', label: 'From onboarding to your live site' },
  { value: '2 paths', label: 'Brand and creator, each with its own form' },
];

export const PROBLEM_ITEMS: string[] = [
  'Brands can’t tell how to start a campaign.',
  'Brands and creators are sent to the same contact form.',
  'Pages are designed for looks, not for search.',
  'The copy talks about the agency, not the brand’s goal.',
];

export const SOLUTION_ITEMS: string[] = [
  'One main action on every page: book a call or send an inquiry.',
  'A separate, clear path for brands and for creators.',
  'Headings, titles, and structure planned for search.',
  'Copy that answers what a brand asks before it reaches out.',
];

export interface BenefitItem {
  icon: 'Target' | 'TrendingUp' | 'Users' | 'Search' | 'Clock' | 'Eye';
  title: string;
  body: string;
}

export const BENEFITS: BenefitItem[] = [
  {
    icon: 'Target',
    title: 'A specialist, not a generalist.',
    body: 'We design websites for influencer marketing businesses. Your site’s structure comes from prior work in this niche, not a generic template.',
  },
  {
    icon: 'TrendingUp',
    title: 'Built for campaign inquiries.',
    body: 'Every section leads a brand toward one action: starting a campaign with you.',
  },
  {
    icon: 'Users',
    title: 'Two visitors, two paths.',
    body: 'Brands and creators each get a route that fits what they came to do.',
  },
  {
    icon: 'Search',
    title: 'SEO from the start.',
    body: 'Page titles, headings, and structure are planned with the design, not patched in later.',
  },
  {
    icon: 'Clock',
    title: 'Live within 12 days.',
    body: 'From onboarding to launch, on a set timeline instead of an open-ended project.',
  },
  {
    icon: 'Eye',
    title: 'See your site before you commit.',
    body: 'On the free discovery call, we show you a site made for your business and talk it through.',
  },
];

export interface StepItem {
  icon: 'PenLine' | 'Wand2' | 'Rocket';
  step: string;
  title: string;
  body: string;
}

export const HOW_IT_WORKS_STEPS: StepItem[] = [
  {
    icon: 'PenLine',
    step: '[01]',
    title: 'Book a free call',
    body: 'Pick a time. Tell us about your business and what you want your site to do.',
  },
  {
    icon: 'Wand2',
    step: '[02]',
    title: 'See your site',
    body: 'On the call, we show you a site made for your business and discuss it. If it’s not for you, you owe nothing.',
  },
  {
    icon: 'Rocket',
    step: '[03]',
    title: 'Launch',
    body: 'If you say yes, we onboard you and deliver your finished site within 12 days.',
  },
];

export const SERVICE_OPTIONS: string[] = [
  'New website',
  'Redesign',
  'SEO',
  'Not sure yet',
];

export const FAQ_ITEMS = [
  {
    q: 'Is this right for me?',
    a: 'If you run an influencer marketing business and want more campaign inquiries from brands, yes. We also build a clear path for creators to apply. If you’re unsure, the free call will tell you.',
  },
  {
    q: 'How long does it take to launch?',
    a: 'Your site goes live within 12 days of onboarding.',
  },
  {
    q: 'Do I need design or coding experience?',
    a: 'No. We design, write, and build the site. You review it.',
  },
  {
    q: 'How much does it cost?',
    a: 'It depends on the scope: a new build or a redesign, how many pages, and what SEO work you need. We give you a clear quote on the discovery call.',
  },
  {
    q: 'Is the discovery call really free?',
    a: 'Yes. It is free with no obligation. We show you a site made for your business and talk it through. If you like it, we start onboarding. If not, you owe nothing.',
  },
  {
    q: 'Can I use my own domain and brand?',
    a: 'Yes. The site uses your brand and connects to your domain.',
  },
];

export const TICKER_PHRASES: string[] = [
  'Launch fast',
  'Convert harder',
  'Pixel Labs',
];

export const CONTACT_EMAIL = 'hello@pixellabs.studio';

export const FOOTER_SECTIONS = [
  {
    title: 'Explore',
    links: [
      { label: 'Why Pixel Labs', href: '/#why-pixel-labs' },
      { label: 'How it works', href: '/#how-it-works' },
      { label: 'FAQ', href: '/#faq' },
      { label: 'Book a free call', href: '/#contact' },
    ],
  },
  {
    title: 'Company',
    links: [{ label: 'Contact', href: '/#contact' }],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Terms of Service', href: '/terms' },
    ],
  },
];

export const PRIVACY_SECTIONS = [
  {
    heading: 'What we collect',
    body: 'We collect the details you submit through our forms — typically your name, email address, and the information you choose to share about your business. We also collect basic usage data such as pages viewed and referral source.',
  },
  {
    heading: 'How we use it',
    body: 'We use your information to provide the service, respond to enquiries, send product updates you asked for, and improve the product. We do not sell your personal data.',
  },
  {
    heading: 'Cookies and analytics',
    body: 'We use a small number of cookies to keep you signed in and to understand how the site is used. You can block cookies in your browser settings, though parts of the product may stop working.',
  },
  {
    heading: 'Data retention and your rights',
    body: 'We keep account data for as long as your account is active. You can request a copy of your data, ask for corrections, or ask us to delete it at any time by emailing us.',
  },
  {
    heading: 'Third parties',
    body: 'We use trusted providers for hosting, payments, and email delivery. They process data only on our instructions and under their own privacy commitments.',
  },
];

export const TERMS_SECTIONS = [
  {
    heading: 'Using the service',
    body: 'You may use Pixel Labs to build and publish pages for yourself or your clients. You are responsible for the content you publish and for keeping your account credentials secure.',
  },
  {
    heading: 'Billing and cancellation',
    body: 'Plans are billed monthly or annually in advance. You can cancel at any time from your account; access continues until the end of the current billing period.',
  },
  {
    heading: 'Acceptable use',
    body: 'Do not use the service to publish unlawful, misleading, or harmful content, or to send unsolicited email. We may suspend accounts that break these rules.',
  },
  {
    heading: 'Ownership',
    body: 'You own the content you create and the pages you publish. We own the software, templates, and underlying structure of the product.',
  },
  {
    heading: 'Limitation of liability',
    body: 'The service is provided as is. To the extent permitted by law, our liability is limited to the amount you paid us in the previous twelve months.',
  },
];
