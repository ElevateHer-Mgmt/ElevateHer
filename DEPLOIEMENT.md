# Déploiement — site Elevate Her

## En local

```bash
npm install
npm run dev
```

Le site est alors sur http://localhost:4321. Pour tester le build de production :

```bash
npm run build
npm run preview
```

## Mise en ligne : GitHub Pages (en place)

Le site est publié automatiquement par GitHub Pages à chaque `git push` sur la branche `main` du dépôt `ElevateHer-Mgmt/ElevateHer`, grâce au workflow `.github/workflows/deploy.yml` (workflow officiel Astro). Adresse publique : **https://elevateher-mgmt.github.io/ElevateHer/**

- Réglage unique côté GitHub : Settings → Pages → Source « GitHub Actions » (déjà fait).
- Suivi d'un déploiement : onglet « Actions » du dépôt. Un déploiement prend une à deux minutes.
- Le workflow peut aussi être relancé à la main depuis cet onglet (« Run workflow »).

### Chemin de base

Sur GitHub Pages, le site vit sous `/ElevateHer/` (le nom du dépôt). Deux lignes de `astro.config.mjs` s'en chargent : `site: 'https://elevateher-mgmt.github.io'` et `base: '/ElevateHer'`. Tous les liens internes, polices, icônes, médias, l'image de partage, le sitemap et le robots.txt reçoivent ce préfixe automatiquement : dans les fichiers de `src/data/`, les chemins restent écrits simplement (`/about`), c'est le composant `Link` qui ajoute le préfixe. Les adresses n'ont pas de barre finale (`…/ElevateHer/about`), d'où `build.format: 'file'` qui produit `about.html`, servi tel quel par GitHub Pages.

### Passer à un vrai domaine (plus tard)

1. Dans `astro.config.mjs` : `site: 'https://ton-domaine.com'` et supprimer la ligne `base`.
2. Créer le fichier `public/CNAME` contenant uniquement le domaine (`ton-domaine.com`).
3. Dans Settings → Pages du dépôt, renseigner le domaine (« Custom domain ») et suivre les indications DNS de GitHub. Cocher « Enforce HTTPS » une fois le certificat émis.
4. Pousser : les liens internes suivent automatiquement, rien d'autre à changer.

## Alternative : Netlify

Si un jour le site quitte GitHub Pages : « Add new site » → « Import an existing project » depuis le dépôt, build command `npm run build`, publish directory `dist`, variable `NODE_VERSION=22`. Retirer alors la ligne `base` de `astro.config.mjs` et mettre le domaine Netlify dans `site`. La page 404 (`dist/404.html`) est reconnue automatiquement.

### Candidatures et contact

Le site n'héberge aucun formulaire. Tous les boutons « Apply to Elevate Her », ainsi que le bouton « Open the form » de la page Contact (marques, partenaires, presse), ouvrent le formulaire Google Forms dans un nouvel onglet ; son adresse est dans `src/data/site.ts` (constante `applyUrl`). Rien à configurer côté hébergement. Pour changer de formulaire, modifier cette ligne et pousser. Le profil Instagram (pied de page, page Contact) se change au même endroit, constante `instagramUrl`.

## Après chaque modification de contenu

Les textes vivent dans `src/data/` (un fichier par page). Modifier, enregistrer, puis `git add -A && git commit -m "…" && git push` : GitHub Pages reconstruit et publie tout seul. Les médias se déposent dans `public/medias/` selon `MEDIAS.md`, sans autre réglage.

## Polices

Les trois fichiers de `src/assets/fonts/` sont des versions allégées des paquets `@fontsource-variable/playfair` et `@fontsource-variable/jost` : sous-ensemble latin (accents compris), axe optique de Playfair conservé, graisses limitées à 300–500 pour Playfair. Ils n'ont pas à être retouchés. Pour les régénérer un jour (par exemple après une mise à jour du paquet), avec Python et `fonttools` + `brotli` installés :

```bash
fonttools varLib.instancer node_modules/@fontsource-variable/playfair/files/playfair-latin-opsz-normal.woff2 wght=300:500 -o /tmp/playfair.woff2
pyftsubset /tmp/playfair.woff2 --unicodes="U+0020-007E,U+00A0-00FF,U+0152-0153,U+2013-2014,U+2018-201A,U+201C-201E,U+2022,U+2026,U+2030,U+20AC,U+2122,U+2726" --flavor=woff2 --layout-features="kern,liga,calt,locl,mark,mkmk,ccmp" --output-file=src/assets/fonts/playfair-opsz.woff2
```

Même commande pour `playfair-latin-opsz-italic.woff2` → `playfair-opsz-italic.woff2`, et `pyftsubset` seul (sans instancer) pour `jost-latin-wght-normal.woff2` → `jost-wght.woff2`.
