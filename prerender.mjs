/**
 * Build-time prerender: renders the main routes to static HTML so the raw
 * response contains real content (crawlers that skip JavaScript, first paint).
 *
 * Run after `vite build`:  node prerender.mjs
 * Uses Vite's SSR module loader to transform src/entry-server.tsx on the fly.
 */
import { createServer } from 'vite';
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';

const SITE_URL = 'https://pixellabs.bond';

// Per-route <title> and canonical; falls back to the index.html template values.
const ROUTES = [
  {
    path: '/',
    file: 'index.html',
    title: 'Website Design for Influencer Marketing Businesses | Pixel Labs',
  },
  {
    path: '/website-design',
    file: 'website-design/index.html',
    title: 'Website Design for Influencer Marketing Agencies | Pixel Labs',
  },
  {
    path: '/website-redesign',
    file: 'website-redesign/index.html',
    title: 'Website Redesign for Influencer Marketing Agencies | Pixel Labs',
  },
  {
    path: '/privacy',
    file: 'privacy/index.html',
    title: 'Privacy Policy | Pixel Labs',
  },
  {
    path: '/terms',
    file: 'terms/index.html',
    title: 'Terms of Service | Pixel Labs',
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

    const outPath = join('dist', route.file);
    mkdirSync(dirname(outPath), { recursive: true });
    writeFileSync(outPath, page);
    console.log(`prerendered ${route.path} -> dist/${route.file}`);
  }
} finally {
  await server.close();
}
