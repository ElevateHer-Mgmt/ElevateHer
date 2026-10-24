import type { APIRoute } from 'astro';
import { withBase } from '../lib/url';

/** robots.txt généré à partir du domaine (site) et du chemin de base déclarés dans astro.config. */
export const GET: APIRoute = ({ site }) => {
  const origin = site?.origin ?? '';
  const body = ['User-agent: *', 'Allow: /', '', `Sitemap: ${origin}${withBase('/sitemap-index.xml')}`, ''].join('\n');
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
