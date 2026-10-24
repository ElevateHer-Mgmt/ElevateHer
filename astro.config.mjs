// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  // [TO COMPLETE] remplacer par le vrai domaine avant la mise en ligne
  site: 'https://elevateher.example',
  output: 'static',
  trailingSlash: 'never',
  // 'jsx' (nouveau défaut Astro 7) peut avaler l'espace avant un <em> : on garde le mode classique.
  compressHTML: true,
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
