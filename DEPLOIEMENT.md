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

Le site est publié automatiquement par GitHub Pages à chaque `git push` sur la branche `main` du dépôt `ElevateHer-Mgmt/ElevateHer`, grâce au workflow `.github/workflows/deploy.yml` (workflow officiel Astro). Adresse publique : **https://elevateher-management.com**

- Réglages côté GitHub (déjà faits) : Settings → Pages → Source « GitHub Actions », et « Custom domain » = `elevateher-management.com`. Cocher « Enforce HTTPS » une fois le certificat émis par GitHub.
- Le fichier `public/CNAME` (contenu : `elevateher-management.com`) est copié dans le site à chaque build : c'est lui qui garde le domaine attaché après chaque déploiement. Ne pas le supprimer.
- Suivi d'un déploiement : onglet « Actions » du dépôt. Un déploiement prend une à deux minutes. Le workflow peut aussi être relancé à la main (« Run workflow »).

### Adresses

Le site est à la racine du domaine : `site: 'https://elevateher-management.com'` dans `astro.config.mjs`, sans `base`. Les adresses n'ont pas de barre finale (`…/about`), d'où `build.format: 'file'` qui produit `about.html`, servi tel quel par GitHub Pages. Les chemins internes sont écrits simplement (`/about`) dans `src/data/` ; le composant `Link` les rend et ouvre les liens externes dans un nouvel onglet. Si le site devait un jour revivre sous un sous-dossier (par exemple `https://utilisateur.github.io/depot/`), il suffirait d'ajouter `base: '/depot'` : tout suit automatiquement.

## Alternative : Netlify

Si un jour le site quitte GitHub Pages : « Add new site » → « Import an existing project » depuis le dépôt, build command `npm run build`, publish directory `dist`, variable `NODE_VERSION=22`, puis rattacher le domaine dans Netlify et supprimer `public/CNAME` (propre à GitHub Pages). La page 404 (`dist/404.html`) est reconnue automatiquement.

### Candidatures et contact

Le site n'héberge aucun formulaire. Tous les boutons « Apply to Elevate Her », ainsi que le bouton « Open the form » de la page Contact (marques, partenaires, presse), ouvrent le formulaire Google Forms dans un nouvel onglet ; son adresse est dans `src/data/site.ts` (constante `applyUrl`). Rien à configurer côté hébergement. Pour changer de formulaire, modifier cette ligne et pousser. Le profil Instagram (pied de page, page Contact) se change au même endroit, constante `instagramUrl`.

## Après chaque modification de contenu

Les textes vivent dans `src/data/` (un fichier par page). Modifier, enregistrer, puis `git add -A && git commit -m "…" && git push` : GitHub Pages reconstruit et publie tout seul. Les médias se déposent dans `public/medias/` selon `MEDIAS.md`, sans autre réglage.

## Édition mobile condensée

Sur téléphone (moins de 768 px), le site affiche une version allégée : mêmes sections essentielles, moins de texte. L'ordinateur garde tout. Deux mécanismes, à respecter quand tu modifies un texte :

- Les champs `short` dans `src/data/` (`home.ts` → `hero.short`, `about.ts` → `hero.short` et `her.short`) remplacent le paragraphe complet sur téléphone. Si tu changes un texte long, pense à sa version courte.
- Dans les pages, la classe `max-md:hidden` masque un élément sur téléphone (paragraphes d'explication, descriptions de listes, sections « She stays the face » et « Four steps » de l'accueil, bénéfices du bloc de fin) et `md:hidden` affiche un élément uniquement sur téléphone (la liste des trois idées de l'accueil). Les listes gardent leurs titres, les descriptions ne s'affichent que sur ordinateur.

## Polices

Les trois fichiers de `src/assets/fonts/` sont des versions allégées des paquets `@fontsource-variable/playfair` et `@fontsource-variable/jost` : sous-ensemble latin (accents compris), axe optique de Playfair conservé, graisses limitées à 300–500 pour Playfair. Ils n'ont pas à être retouchés. Pour les régénérer un jour (par exemple après une mise à jour du paquet), avec Python et `fonttools` + `brotli` installés :

```bash
fonttools varLib.instancer node_modules/@fontsource-variable/playfair/files/playfair-latin-opsz-normal.woff2 wght=300:500 -o /tmp/playfair.woff2
pyftsubset /tmp/playfair.woff2 --unicodes="U+0020-007E,U+00A0-00FF,U+0152-0153,U+2013-2014,U+2018-201A,U+201C-201E,U+2022,U+2026,U+2030,U+20AC,U+2122,U+2726" --flavor=woff2 --layout-features="kern,liga,calt,locl,mark,mkmk,ccmp" --output-file=src/assets/fonts/playfair-opsz.woff2
```

Même commande pour `playfair-latin-opsz-italic.woff2` → `playfair-opsz-italic.woff2`, et `pyftsubset` seul (sans instancer) pour `jost-latin-wght-normal.woff2` → `jost-wght.woff2`.
