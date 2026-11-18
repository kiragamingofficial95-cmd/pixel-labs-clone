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
    body: 'We design websites for influencer marketing agencies, talent management businesses, and creator companies. Your site’s structure comes from prior work in this niche, not a generic template.',
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
    a: 'If you run an influencer marketing agency, a talent management business, or any creator-side company and want more campaign inquiries from brands, yes. We also build a clear path for creators to apply. If you’re unsure, the free call will tell you.',
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

export const CONTACT_EMAIL = 'info@pixellabs.bond';

export interface CaseStudy {
  name: string;
  url: string;
  summary: string;
  built: string[];
}

export const CASE_STUDY: CaseStudy = {
  name: 'Agora Reliance',
  url: 'https://agorareliance.com',
  summary:
    'Agora Reliance is a full-service creator campaign agency for B2B brands. They came to us for a website built to turn brand visitors into campaign inquiries — designed, written, and launched within 12 days of onboarding.',
  built: [
    'A clear brand path: every page leads a brand toward one action — starting a campaign.',
    'A separate creator path, so brands and creators never compete for the same form.',
    'Page titles, headings, and structure planned for search before the design was built.',
  ],
};

export interface WorkCase {
  client: string;
  industry: string;
  url: string;
  scope: string[];
  challenge: string;
  approach: string[];
  outcome: string;
}

export const WORK_CASES: WorkCase[] = [
  {
    client: 'Agora Reliance',
    industry: 'Creator campaign agency for B2B brands',
    url: 'https://agorareliance.com',
    scope: ['New website', 'Copywriting', 'SEO structure'],
    challenge:
      'A B2B creator campaign agency needed a site that could explain a service most brands have never bought in this form — and turn a first visit into a campaign inquiry without a sales call to explain everything.',
    approach: [
      'We planned the site around the questions a brand asks before it trusts an agency with a campaign: what you do, how you work, who you have done it for.',
      'One main action on every page — start a campaign — with a separate, obvious route for creators to apply.',
      'Titles, headings, and content structure were planned for search while the design was built, so the site launched ready to rank.',
      'The copy was written to answer the brand’s questions first, not to retell the agency’s story.',
    ],
    outcome:
      'Designed, written, built, and launched — one specialist site carrying both brand and creator paths from day one. See it live at agorareliance.com.',
  },
];

export interface ServiceFaq {
  q: string;
  a: string;
}

export interface ServicePageContent {
  slug: string;
  browserTitle: string;
  metaDescription: string;
  eyebrow: string;
  heading: string;
  intro: string;
  includedTitle: string;
  includedIntro: string;
  included: string[];
  whyTitle: string;
  whyIntro: string;
  why: { title: string; body: string }[];
  faqTitle: string;
  faq: ServiceFaq[];
  ctaTitle: string;
  ctaBody: string;
}

export const WEBSITE_DESIGN_PAGE: ServicePageContent = {
  slug: '/website-design',
  browserTitle: 'Website Design for Influencer Marketing Agencies | Pixel Labs',
  metaDescription:
    'Pixel Labs designs and builds websites for influencer marketing agencies and creator businesses, structured to turn brand visitors into campaign inquiries. Live within 12 days. Book a free call.',
  eyebrow: '[Services] // New websites',
  heading: 'Website design for influencer marketing agencies',
  intro:
    'A website that shows brands how to start a campaign with you, gives creators their own clear path, and is structured for search from the first sketch. Designed and built for influencer marketing agencies, talent managers, and creator businesses — live within 12 days of onboarding.',
  includedTitle: 'What every build includes',
  includedIntro:
    'One fixed scope, one timeline. Every new website we build ships with:',
  included: [
    'A homepage planned around the questions a brand asks before it reaches out — how to start, what you do, who you have worked with.',
    'A separate, obvious path for brands and for creators, so the two never share one contact form.',
    'Page titles, headings, and content structure planned for search while the design is built, not patched in after launch.',
    'Copy written to answer what a brand wants to know — not copy that talks about the agency.',
    'Mobile-first design, connected to your own domain and brand.',
    'A launch inside 12 days of onboarding, on a set timeline instead of an open-ended project.',
  ],
  whyTitle: 'Why a specialist build',
  whyIntro:
    'An influencer marketing website has one job most agency websites get wrong: turning a brand visit into a campaign inquiry.',
  why: [
    {
      title: 'Built around the campaign inquiry',
      body:
        'Generic agencies design for looks. We plan every section around the decision a brand is making: whether your agency can run the campaign they have in mind.',
    },
    {
      title: 'Two audiences, two paths',
      body:
        'Brands want to start campaigns. Creators want to apply. We give each a route that fits, instead of one contact form that serves nobody well.',
    },
    {
      title: 'Search-ready from day one',
      body:
        'The structure — titles, headings, page order, internal links — is planned with the design. You launch with a site that Google and AI answers can read and quote.',
    },
  ],
  faqTitle: 'New website questions',
  faq: [
    {
      q: 'What does a new website cost?',
      a: 'It depends on scope — the number of pages, whether it is a new build or a redesign, and what SEO work you need. You get a clear quote on the discovery call before anything starts, and the call is free.',
    },
    {
      q: 'How fast can my site go live?',
      a: 'Within 12 days of onboarding. The timeline is fixed: onboarding, design review, build, launch.',
    },
    {
      q: 'Do you write the content?',
      a: 'Yes. We design, write, and build the site. You review the draft and the finished site — no design or writing work is needed from you.',
    },
    {
      q: 'Can you use our brand, domain, and existing content?',
      a: 'Yes. The site uses your brand, connects to your own domain, and we can carry over any existing pages or materials worth keeping.',
    },
    {
      q: 'Will the site work for creators as well as brands?',
      a: 'Yes. Every site includes a separate creator path — usually an application route — so brands and creators each get a page built for what they came to do.',
    },
  ],
  ctaTitle: 'Ready for a site built to win campaign inquiries?',
  ctaBody:
    'Book a free discovery call. We show you a site made for your business and talk it through. No obligation.',
};

export const SEO_SERVICES_PAGE: ServicePageContent = {
  slug: '/seo-services',
  browserTitle: 'SEO for Influencer Marketing Agencies | Pixel Labs',
  metaDescription:
    'Pixel Labs plans and runs SEO for influencer marketing agencies: the pages brands search for, structure that ranks, and visibility in AI answers like ChatGPT and Google AI Overviews. Book a free call.',
  eyebrow: '[Services] // SEO',
  heading: 'SEO for influencer marketing agencies',
  intro:
    'Brands increasingly find agencies by searching — in Google and in AI answers. SEO work for your agency means building the pages brands search for, structuring them so search engines can rank them, and making your site quotable when someone asks ChatGPT for an influencer marketing agency.',
  includedTitle: 'What the SEO work covers',
  includedIntro:
    'Planned like a project, not a retainer of vague reports. The work covers:',
  included: [
    'Finding the searches that actually bring agency clients — campaign inquiries, not generic "influencer marketing" traffic that never buys.',
    'Building the pages those searches deserve: services, use cases, and the pages brands read right before they shortlist an agency.',
    'Titles, headings, and internal links planned so Google can rank the right page for the right search.',
    'Technical foundations: crawlable, fast, mobile-first, correctly indexed — the base everything else sits on.',
    'AI-answer readiness: pages that state specific facts plainly, so ChatGPT, Perplexity, and Google AI Overviews can quote your agency when buyers ask.',
    'Tracking from day one in Search Console, so you can see impressions, clicks, and inquiries rise — or know quickly if something is not working.',
  ],
  whyTitle: 'Why agencies invest in SEO',
  whyIntro:
    'Most influencer marketing agencies run on referrals and outbound. Both work — until you want a source of clients that compounds.',
  why: [
    {
      title: 'Brands search before they reach out',
      body:
        'A brand decision-maker googles "influencer marketing agency for [industry]" and asks AI assistants for shortlists before contacting anyone. Agencies without pages for those searches are invisible in the moment a buyer is paying attention.',
    },
    {
      title: 'Referrals do not compound',
      body:
        'A referral makes one call. A page that ranks makes calls every month without anyone pressing send. SEO is the only channel where the work keeps paying after you stop paying for it.',
    },
    {
      title: 'AI answers quote agencies that state facts',
      body:
        'ChatGPT, Perplexity, and Google AI Overviews cite pages that answer buyer questions in plain, specific sentences. That is a structural choice about how your pages are written — one we build in.',
    },
    {
      title: 'Your niche is winnable',
      body:
        "You are not competing with every agency on earth — you are competing for searches in influencer marketing, where specialist agencies with focused pages beat generalists with bigger budgets.",
    },
  ],
  faqTitle: 'SEO questions',
  faq: [
    {
      q: 'Does SEO work for influencer marketing agencies?',
      a: 'Yes — agency services are searched. The searches are fewer and more specific than consumer terms, which is exactly why focused pages from a specialist agency can rank: the competition on agency-specific searches is thinner than on generic marketing terms.',
    },
    {
      q: 'How long until we see results?',
      a: 'Expect first impressions within weeks, meaningful clicks in 2–4 months for achievable searches, and compounding growth after that. We set a baseline in Search Console on day one so you can see the curve rather than take it on faith.',
    },
    {
      q: 'What about ChatGPT and AI answers?',
      a: 'They are part of the plan, not a separate project. AI answer engines mostly cite pages that search engines can already find, that state facts plainly, and that are mentioned on the review and list pages buyers read. We build for all three.',
    },
    {
      q: 'Can you do SEO on our existing website?',
      a: 'Usually, yes — it depends on the platform and how the site is built. We audit what you have, keep what works, and tell you honestly when a rebuild is the cheaper path.',
    },
    {
      q: 'How much does SEO cost?',
      a: 'It depends on scope: how many pages need building or fixing, and how much of the writing we do. You get a clear quote on the discovery call, and the call is free.',
    },
  ],
  ctaTitle: 'Ready to be found by the brands searching now?',
  ctaBody:
    'Book a free discovery call. We look at your current visibility, show you the searches worth owning, and you decide from there. No obligation.',
};

export const WEBSITE_REDESIGN_PAGE: ServicePageContent = {
  slug: '/website-redesign',
  browserTitle: 'Website Redesign for Influencer Marketing Agencies | Pixel Labs',
  metaDescription:
    'Pixel Labs redesigns influencer marketing agency websites that look fine but do not bring in campaign inquiries. Clear brand and creator paths, search-ready structure. Live within 12 days.',
  eyebrow: '[Services] // Redesigns',
  heading: 'Website redesign for influencer marketing agencies',
  intro:
    'Your site looks fine, but brands do not seem to do anything on it. A redesign fixes the reasons: unclear next steps, one contact form for brands and creators, and a structure search engines cannot read. Rebuilt and live within 12 days — same brand, same domain.',
  includedTitle: 'What the redesign covers',
  includedIntro:
    'We keep what works, rebuild what does not. Every redesign ships with:',
  included: [
    'A diagnosis of why visitors are not converting: where the page loses a brand, which actions are unclear, what is missing.',
    'New page structure and copy planned around the campaign inquiry — how to start, what you do, proof you have done it.',
    'A separate path for creators, if the current site sends brands and creators to the same form.',
    'Titles, headings, and internal links reworked so search engines and AI answers read the site correctly.',
    'Redirects mapped so any page that changes address keeps its place in search.',
    'A launch inside 12 days of onboarding.',
  ],
  whyTitle: 'Signs a redesign is due',
  whyIntro:
    'Most agency websites do not need more traffic. They need a site that does something with the traffic they already get.',
  why: [
    {
      title: 'Brands visit but do not inquire',
      body:
        'If analytics show visits but the phone stays quiet, the page structure is the problem — the next step is unclear, buried, or aimed at the wrong visitor.',
    },
    {
      title: 'One form for everyone',
      body:
        'When brands and creators share a contact form, both get a worse experience and the agency gets inquiries it cannot sort. A redesign separates the two paths.',
    },
    {
      title: 'The copy talks about the agency, not the brand',
      body:
        'Pages built around the agency’s story do not answer what a brand is actually asking. Redesigned pages answer the brand’s questions first.',
    },
    {
      title: 'Search engines cannot read the site',
      body:
        'Sites built for looks often have titles, headings, and structures that make ranking harder than it should be. A redesign fixes the structure, not just the paint.',
    },
  ],
  faqTitle: 'Redesign questions',
  faq: [
    {
      q: 'Will we lose our Google rankings during a redesign?',
      a: 'Not when redirects are mapped properly. We plan every URL change before launch so pages that move keep their place in search — and we set the site up to rank better than it did.',
    },
    {
      q: 'Can you keep our existing brand and domain?',
      a: 'Yes. The redesign keeps your brand, domain, and any content worth carrying over. What changes is the structure, the copy, and the paths.',
    },
    {
      q: 'How is this different from a new website?',
      a: 'A redesign rebuilds an existing site on your current brand and content history. A new build starts from a blank page. On the free call we tell you honestly which one you need.',
    },
    {
      q: 'How long does a redesign take?',
      a: 'Within 12 days of onboarding — the same fixed timeline as a new build.',
    },
    {
      q: 'What does a redesign cost?',
      a: 'It depends on scope: how many pages, how much content changes, and what SEO work is needed. You get a clear quote on the discovery call, and the call is free.',
    },
  ],
  ctaTitle: 'Ready for a redesign that brings in inquiries?',
  ctaBody:
    'Book a free discovery call. We look at your current site, show you what a redesign would change, and you decide from there. No obligation.',
};

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
    title: 'Services',
    links: [
      { label: 'New websites', href: '/website-design' },
      { label: 'Redesigns', href: '/website-redesign' },
      { label: 'SEO', href: '/seo-services' },
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
    heading: 'Last updated',
    body: 'This policy was last updated on 18 November 2026. If we change it materially, we will note the change here.',
  },
  {
    heading: 'Who we are',
    body: 'Pixel Labs ("we", "us") designs, builds, and search-optimizes websites for influencer marketing businesses. This policy explains what we collect through pixellabs.bond and what we do with it. Questions? Email info@pixellabs.bond.',
  },
  {
    heading: 'What we collect',
    body: 'We collect what you send us: your name, your email address, your company name, and anything you choose to tell us about your business when you fill in a form, book a discovery call, or email us. We also receive standard technical data — pages viewed, referral source, browser type, and approximate location — from our hosting and analytics providers.',
  },
  {
    heading: 'Why we collect it',
    body: 'We use your details to reply to your inquiry, prepare for and hold the discovery call, quote and deliver projects, and send you information you asked for. We do not sell your personal data, and we do not use it to train AI models.',
  },
  {
    heading: 'Cookies',
    body: 'The site uses a small number of cookies for analytics — to count visits and see which pages are useful. You can block or delete cookies in your browser settings; the site will still work, we just won\'t see the visit in our statistics.',
  },
  {
    heading: 'Sharing and processors',
    body: 'We share your details only with the providers that make this site and our work possible: hosting (Vercel), email delivery, analytics, and scheduling for discovery calls. Each processes data on our instructions under its own privacy commitments. We never sell or rent your data.',
  },
  {
    heading: 'Retention',
    body: 'We keep inquiry details as long as needed to handle them and for a reasonable period afterwards in case you return. Project records are kept for the duration of the engagement and any agreed support period. You can ask us to delete your details at any time.',
  },
  {
    heading: 'Your rights',
    body: 'Wherever you are in the world, you can ask for a copy of the details we hold about you, ask us to correct or delete them, or object to our use of them. Email info@pixellabs.bond and we will act on your request promptly.',
  },
];

export const TERMS_SECTIONS = [
  {
    heading: 'Last updated',
    body: 'These terms were last updated on 18 November 2026. They apply to this website and to the discovery calls booked through it.',
  },
  {
    heading: 'What we do',
    body: 'Pixel Labs designs, redesigns, and search-optimizes websites for influencer marketing businesses. Engagements start with a free discovery call and are confirmed by an agreed quote and scope before any work begins.',
  },
  {
    heading: 'The discovery call',
    body: 'The discovery call is free and carries no obligation. On the call we show you a site concept for your business and discuss scope, timeline, and price. Nothing is owed by either side unless you choose to proceed.',
  },
  {
    heading: 'Quotes, payment, and delivery',
    body: 'Each project is quoted individually based on scope — pages, content, and SEO work. Payment terms, milestones, and the 12-day delivery window are agreed in writing with the quote before work starts. Anything outside the agreed scope is quoted separately.',
  },
  {
    heading: 'Your responsibilities',
    body: 'You confirm you have the right to use any brand assets, text, images, and claims you give us, and that the business you are promoting is lawfully operated. You review and approve the site before launch.',
  },
  {
    heading: 'Ownership',
    body: 'On full payment, you own the finished website content and design deliverables created for your project. We keep the right to reuse our general techniques, templates, and know-how, and — unless you ask us not to — to reference the project in our portfolio.',
  },
  {
    heading: 'Results',
    body: 'We plan titles, headings, structure, and content for search, but we do not guarantee rankings, traffic volumes, or inquiry counts. No one honestly can, and anyone who promises them is worth avoiding.',
  },
  {
    heading: 'Limitation of liability',
    body: 'The site and our services are provided as is. To the extent permitted by law, our liability for any claim connected to a project is limited to the amount you paid us for that project.',
  },
  {
    heading: 'Contact',
    body: 'Questions about these terms: info@pixellabs.bond.',
  },
];
