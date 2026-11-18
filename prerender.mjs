/**
 * Build-time prerender: renders the main routes to static HTML so the raw
 * response contains real content (crawlers that skip JavaScript, first paint).
 *
 * Run after `vite build`:  node prerender.mjs
 * Uses Vite's SSR module loader to transform src/entry-server.tsx on the fly.
 *
 * Also sets per-route <title>, meta description, canonical, og/twitter tags,
 * and injects JSON-LD structured data per route.
 */
import { createServer } from 'vite';
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';

const SITE_URL = 'https://pixellabs.bond';

// Defaults in the built template (homepage values) that get replaced per route.
const DEFAULTS = {
  description:
    'Pixel Labs designs, redesigns, and search-optimizes websites for influencer marketing businesses, built to turn visitors into campaign inquiries. Live within 12 days of onboarding. Book a free call.',
  ogTitle: 'Website Design for Influencer Marketing Businesses | Pixel Labs',
  ogDescription: 'A website built to turn visitors into campaign inquiries. Free discovery call, no obligation.',
};

// Per-route <title>, canonical, description, og tags and JSON-LD.
const ROUTES = [
  {
    path: '/',
    file: 'index.html',
    title: 'Website Design for Influencer Marketing Businesses | Pixel Labs',
    description: DEFAULTS.description,
    ogTitle: DEFAULTS.ogTitle,
    ogDescription: DEFAULTS.ogDescription,
    ld: {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'Organization',
          '@id': `${SITE_URL}/#organization`,
          name: 'Pixel Labs',
          url: `${SITE_URL}/`,
          logo: {
            '@type': 'ImageObject',
            url: `${SITE_URL}/og-image.png`,
            width: 1536,
            height: 1024,
          },
          description:
            'Pixel Labs designs, redesigns, and search-optimizes websites for influencer marketing businesses worldwide.',
          contactPoint: {
            '@type': 'ContactPoint',
            contactType: 'sales',
            email: 'info@pixellabs.bond',
            availableLanguage: 'English',
          },
        },
        {
          '@type': 'WebSite',
          '@id': `${SITE_URL}/#website`,
          url: `${SITE_URL}/`,
          name: 'Pixel Labs',
          publisher: { '@id': `${SITE_URL}/#organization` },
          inLanguage: 'en',
        },
        {
          '@type': 'WebPage',
          '@id': `${SITE_URL}/#webpage`,
          url: `${SITE_URL}/`,
          name: 'Website Design for Influencer Marketing Businesses | Pixel Labs',
          isPartOf: { '@id': `${SITE_URL}/#website` },
          about: { '@id': `${SITE_URL}/#organization` },
          inLanguage: 'en',
        },
      ],
    },
  },
  {
    path: '/website-design',
    file: 'website-design/index.html',
    title: 'Website Design for Influencer Marketing Agencies | Pixel Labs',
    description:
      'Pixel Labs designs and builds websites for influencer marketing agencies and creator businesses, structured to turn brand visitors into campaign inquiries. Live within 12 days. Book a free call.',
    ogTitle: 'Website Design for Influencer Marketing Agencies | Pixel Labs',
    ogDescription:
      'A new website built to turn brand visitors into campaign inquiries. Free discovery call, no obligation, live within 12 days.',
    ld: {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
            { '@type': 'ListItem', position: 2, name: 'New websites' },
          ],
        },
        {
          '@type': 'WebPage',
          '@id': `${SITE_URL}/website-design#webpage`,
          url: `${SITE_URL}/website-design`,
          name: 'Website Design for Influencer Marketing Agencies | Pixel Labs',
          description:
            'New website design for influencer marketing agencies and creator businesses, built to turn brand visitors into campaign inquiries.',
          isPartOf: { '@id': `${SITE_URL}/#website` },
          inLanguage: 'en',
        },
      ],
    },
  },
  {
    path: '/website-redesign',
    file: 'website-redesign/index.html',
    title: 'Website Redesign for Influencer Marketing Agencies | Pixel Labs',
    description:
      'Pixel Labs redesigns influencer marketing agency websites that look fine but do not bring in campaign inquiries. Clear brand and creator paths, search-ready structure. Live within 12 days.',
    ogTitle: 'Website Redesign for Influencer Marketing Agencies | Pixel Labs',
    ogDescription:
      'A redesign that fixes why visitors do not inquire: unclear next steps, one form for everyone, structure search engines cannot read. Live within 12 days.',
    ld: {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
            { '@type': 'ListItem', position: 2, name: 'Redesigns' },
          ],
        },
        {
          '@type': 'WebPage',
          '@id': `${SITE_URL}/website-redesign#webpage`,
          url: `${SITE_URL}/website-redesign`,
          name: 'Website Redesign for Influencer Marketing Agencies | Pixel Labs',
          description:
            'Website redesign for influencer marketing agencies and talent management businesses: clear paths for brands and creators, structure planned for search.',
          isPartOf: { '@id': `${SITE_URL}/#website` },
          inLanguage: 'en',
        },
      ],
    },
  },
  {
    path: '/seo-services',
    file: 'seo-services/index.html',
    title: 'SEO for Influencer Marketing Agencies | Pixel Labs',
    description:
      'Pixel Labs plans and runs SEO for influencer marketing agencies: the pages brands search for, structure that ranks, and visibility in AI answers like ChatGPT and Google AI Overviews. Book a free call.',
    ogTitle: 'SEO for Influencer Marketing Agencies | Pixel Labs',
    ogDescription:
      'The searches that bring agency clients, pages that rank, and quotable answers for AI assistants. Planned like a project, tracked from day one.',
    ld: {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
            { '@type': 'ListItem', position: 2, name: 'SEO services' },
          ],
        },
        {
          '@type': 'WebPage',
          '@id': `${SITE_URL}/seo-services#webpage`,
          url: `${SITE_URL}/seo-services`,
          name: 'SEO for Influencer Marketing Agencies | Pixel Labs',
          description:
            'SEO for influencer marketing agencies: buyer searches, ranking structure, and AI-answer readiness, tracked from day one.',
          isPartOf: { '@id': `${SITE_URL}/#website` },
          inLanguage: 'en',
        },
      ],
    },
  },
  {
    path: '/privacy',
    file: 'privacy/index.html',
    title: 'Privacy Policy | Pixel Labs',
    description: DEFAULTS.description,
    ogTitle: DEFAULTS.ogTitle,
    ogDescription: DEFAULTS.ogDescription,
  },
  {
    path: '/terms',
    file: 'terms/index.html',
    title: 'Terms of Service | Pixel Labs',
    description: DEFAULTS.description,
    ogTitle: DEFAULTS.ogTitle,
    ogDescription: DEFAULTS.ogDescription,
  },
];

const template = readFileSync('dist/index.html', 'utf8');

const server = await createServer({
  server: { middlewareMode: true },
  appType: 'custom',
  logLevel: 'error',
});

try {
  const { render } = await server.ssrLoadModule('/src/entry-server.tsx');

  for (const route of ROUTES) {
    const { html } = render(route.path);

    let page = template.replace(
      '<div id="root"></div>',
      `<div id="root">${html}</div>`
    );

    if (route.path !== '/') {
      page = page
        .replace(/<title>.*?<\/title>/, `<title>${route.title}</title>`)
        .replace(
          /<link rel="canonical" href=".*?" \/>/,
          `<link rel="canonical" href="${SITE_URL}${route.path}" />`
        );
    }

    if (route.description) {
      page = page.replace(
        /<meta\s+name="description"\s+content="[^"]*"\s*\/?>/,
        `<meta name="description" content="${route.description}" />`
      );
    }
    if (route.ogTitle) {
      page = page
        .replace(
          /<meta\s+property="og:title"\s+content="[^"]*"\s*\/?>/,
          `<meta property="og:title" content="${route.ogTitle}" />`
        )
        .replace(
          /<meta\s+name="twitter:title"\s+content="[^"]*"\s*\/?>/,
          `<meta name="twitter:title" content="${route.ogTitle}" />`
        );
    }
    if (route.ogDescription) {
      page = page
        .replace(
          /<meta\s+property="og:description"\s+content="[^"]*"\s*\/?>/,
          `<meta property="og:description" content="${route.ogDescription}" />`
        )
        .replace(
          /<meta\s+name="twitter:description"\s+content="[^"]*"\s*\/?>/,
          `<meta name="twitter:description" content="${route.ogDescription}" />`
        );
    }

    if (route.ld) {
      page = page.replace(
        '</head>',
        `<script type="application/ld+json">\n${JSON.stringify(route.ld, null, 2)}\n</script>\n  </head>`
      );
    }

    const outPath = join('dist', route.file);
    mkdirSync(dirname(outPath), { recursive: true });
    writeFileSync(outPath, page);
    console.log(`prerendered ${route.path} -> dist/${route.file}`);
  }
} finally {
  await server.close();
}
