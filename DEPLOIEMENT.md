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

## Mise en ligne sur Netlify (recommandé)

1. Pousser le dossier sur un dépôt Git (GitHub, GitLab…) ou glisser le dossier `dist/` sur [app.netlify.com/drop](https://app.netlify.com/drop) après un `npm run build`.
2. Avec un dépôt : « Add new site » → « Import an existing project », puis :
   - Build command : `npm run build`
   - Publish directory : `dist`
   - Node version : 22 ou plus (variable d'environnement `NODE_VERSION=22`).
3. Avant le premier déploiement, mettre le vrai domaine dans `astro.config.mjs` (ligne `site:`), puis le rattacher dans Netlify (« Domain management »). Le HTTPS est automatique.
4. La page 404 personnalisée (`dist/404.html`) est reconnue automatiquement par Netlify.

### Candidatures et contact

Le site n'héberge aucun formulaire. Tous les boutons « Apply to Elevate Her », ainsi que le bouton « Open the form » de la page Contact (marques, partenaires, presse), ouvrent le formulaire Google Forms dont l'adresse est dans `src/data/site.ts` (constante `applyUrl`). Rien à configurer côté hébergement : ni Netlify Forms, ni variable d'environnement. Pour changer de formulaire, modifier cette ligne et rebuilder. Le profil Instagram (pied de page, page Contact) se change au même endroit, constante `instagramUrl`.

## Après chaque modification de contenu

Les textes vivent dans `src/data/` (un fichier par page). Modifier, enregistrer, puis `npm run build` ou laisser Netlify reconstruire à chaque push. Les médias se déposent dans `public/medias/` selon `MEDIAS.md`, sans autre réglage.

## Polices

Les trois fichiers de `public/fonts/` sont des versions allégées des paquets `@fontsource-variable/playfair` et `@fontsource-variable/jost` : sous-ensemble latin (accents compris), axe optique de Playfair conservé, graisses limitées à 300–500 pour Playfair. Ils n'ont pas à être retouchés. Pour les régénérer un jour (par exemple après une mise à jour du paquet), avec Python et `fonttools` + `brotli` installés :

```bash
fonttools varLib.instancer node_modules/@fontsource-variable/playfair/files/playfair-latin-opsz-normal.woff2 wght=300:500 -o /tmp/playfair.woff2
pyftsubset /tmp/playfair.woff2 --unicodes="U+0020-007E,U+00A0-00FF,U+0152-0153,U+2013-2014,U+2018-201A,U+201C-201E,U+2022,U+2026,U+2030,U+20AC,U+2122,U+2726" --flavor=woff2 --layout-features="kern,liga,calt,locl,mark,mkmk,ccmp" --output-file=public/fonts/playfair-opsz.woff2
```

Même commande pour `playfair-latin-opsz-italic.woff2` → `playfair-opsz-italic.woff2`, et `pyftsubset` seul (sans instancer) pour `jost-latin-wght-normal.woff2` → `jost-wght.woff2`.
