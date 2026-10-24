// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  // Hébergement : GitHub Pages (dépôt ElevateHer-Mgmt/ElevateHer) sur le domaine
  // elevateher-management.com (fichier public/CNAME). Le site est à la racine : pas de `base`.
  site: 'https://elevateher-management.com',
  output: 'static',
  // Adresses sans barre finale (…/about) : GitHub Pages sert alors about.html directement,
  // sans redirection, d'où build.format 'file'. 'ignore' accepte aussi la forme avec barre.
  trailingSlash: 'ignore',
  build: { format: 'file' },
  // 'jsx' (nouveau défaut Astro 7) peut avaler l'espace avant un <em> : on garde le mode classique.
  compressHTML: true,
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
