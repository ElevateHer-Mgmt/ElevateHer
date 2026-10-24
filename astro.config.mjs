// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  // Hébergement : GitHub Pages du dépôt ElevateHer-Mgmt/ElevateHer.
  // Le site vit sous https://elevateher-mgmt.github.io/ElevateHer/ : `base` est le nom du dépôt.
  // Pour passer à un vrai domaine : mettre le domaine dans `site`, retirer `base`,
  // ajouter public/CNAME (voir DEPLOIEMENT.md). Les liens internes suivent automatiquement.
  site: 'https://elevateher-mgmt.github.io',
  base: '/ElevateHer',
  output: 'static',
  // Adresses sans barre finale (…/ElevateHer/about) : GitHub Pages sert alors about.html
  // directement, sans redirection, d'où build.format 'file'. L'accueil, lui, est servi avec
  // la barre finale (…/ElevateHer/) : 'ignore' accepte les deux formes, y compris en dev.
  trailingSlash: 'ignore',
  build: { format: 'file' },
  // 'jsx' (nouveau défaut Astro 7) peut avaler l'espace avant un <em> : on garde le mode classique.
  compressHTML: true,
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
