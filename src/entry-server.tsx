import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { AppRoutes } from './App';

export interface ServerRenderResult {
  html: string;
}

/**
 * Renders a route to static HTML at build time. The output is injected into
 * the built index.html template so crawlers that do not run JavaScript
 * (most AI crawlers, and Google's first pass) see the full page content.
 * The client then hydrates the same markup (see src/main.tsx).
 */
export const render = (url: string): ServerRenderResult => {
  const html = renderToString(
    <StaticRouter location={url}>
      <AppRoutes />
    </StaticRouter>
  );
  return { html };
};
