# Médias du site — Elevate Her

Depuis le 25 octobre 2026, le site n'attend **aucune image ni vidéo générée** : chaque emplacement média affiche un **visuel codé** (HTML, CSS, SVG), dans la charte (crème, rose poudré, encre, Playfair et Jost, arches, étoiles ✦), animé sobrement au scroll et figé si l'utilisatrice préfère moins de mouvement. Les emplacements gardent leurs formats (arches, ratios), donc la mise en page ne bouge pas.

## Règle sur les chiffres

Aucun chiffre ni pourcentage n'est inventé : les visuels fonctionnent sans valeur. Quand tu as de vrais chiffres, renseigne-les dans `src/data/visuals.ts` : chaque visuel concerné a un champ `stat` avec `label`, `value` (nombre, vide par défaut) et `suffix` facultatif (« k », « % », « + »). Dès que `value` est un nombre, il s'affiche avec un compteur animé, dans le visuel. Exemple :

```ts
dashboard: { title: 'Audience', stat: { label: 'Followers', value: 128000 }, … }   // → « 128,000 Followers »
```

## Les neuf visuels

| Emplacement (nom) | Page, section | Visuel codé | Format | Animation | Chiffre optionnel |
|---|---|---|---|---|---|
| `home-hero` | Accueil, hero | Carte « tableau de bord » : titre Audience, courbe d'audience, étiquettes Brand · Audience · Revenue | arche 4:5 | la courbe se dévoile à l'arrivée (CSS, sans JavaScript, pour ne pas ralentir l'affichage) | `dashboard.stat` |
| `path-brand` | Accueil parcours 01 et Services chapitre 01 | Mini planche de marque : grand « Aa » Playfair, petit « Aa » Jost, quatre pastilles de couleur | arche 4:5 | les « Aa » montent, les pastilles apparaissent une à une | — |
| `path-audience` | Accueil parcours 02 et Services chapitre 02 | Courbe de croissance avec points, point final mis en avant | arche 4:5 | la courbe se trace, le point final apparaît | `audience.stat` |
| `path-growth` | Accueil parcours 03 et Services chapitre 03 | Cinq barres en forme d'arche, du rose pâle au rose profond | arche 4:5 | les barres montent une à une | `growth.stat` |
| `path-revenue` | Accueil parcours 04 et Services chapitre 04 | Anneau en trois segments, légende 01 · 02 · 03, phrase « Several streams, not one. » | arche 4:5 | les segments apparaissent l'un après l'autre | `revenue.stat` |
| `path-opportunities` | Accueil parcours 05 et Services chapitre 05 | Trois cartes « Partnership » empilées, statuts Proposal, In talks, Signed | arche 4:5 | les cartes se posent en cascade | — |
| `home-behind-the-scenes` | Accueil, « She stays the face » (ordinateur) | Schéma : cercle « You » au centre, Strategy, Content, Revenue, Protection autour | arche 4:5 | les cercles apparaissent, les traits se révèlent | — |
| `about-hero` | About, hero | Composition typographique : Built for her. / Backed by a team. / Designed for growth. | 3:2 coins arrondis | les lignes montent l'une après l'autre | — |
| `about-club` | About, Private Club | Carte d'invitation (Private Club, Invitation, A limited roster. By application only.) scellée du badge rond | arche 4:5 | la carte monte, le sceau se pose | — |

Les textes alternatifs (lecteurs d'écran) décrivent chaque visuel ; ils sont dans `src/data/home.ts`, `about.ts` et `services.ts` (champ `alt`). Les textes affichés dans les visuels sont dans `src/data/visuals.ts`. Le code de chaque visuel est dans `src/components/visuals/`.

## Remplacer un visuel par une vraie photo ou vidéo (facultatif)

Les emplacements acceptent toujours un vrai fichier, par exemple issu d'un shooting. Il suffit de le déposer sous le nom de l'emplacement, et il remplace le visuel codé, sans rien changer dans le code :

- image : `public/medias/images/<nom>.webp` (JPG accepté en repli), 300 Ko maximum après compression ;
- vidéo de fond (hero uniquement) : `public/medias/videos/home-hero.mp4` (+ `.webm` facultatif) et son image d'attente `public/medias/videos/home-hero-poster.webp`, 5 Mo maximum, 5 à 15 s, sans son.

Dimensions conseillées : 1200 × 1500 px pour les arches 4:5, 1800 × 1200 px pour `about-hero` (3:2). Pas d'image de banque ni d'image générée.

## Emplacements des sections masquées (fichiers, facultatif)

Ces sections restent invisibles tant que leur interrupteur `enabled` est à `false` (voir `A-COMPLETER.md`). Si tu les actives un jour :

- **Film de marque** (`home.ts`, bloc `film`) : identifiant YouTube ou Vimeo et image d'attente `public/medias/images/home-film-poster.webp`, 16:9, 1600 × 900 px.
- **L'équipe** (`about.ts`, bloc `team`) : un portrait par membre, `public/medias/images/team-01.webp`, `team-02.webp`…, 4:5, 1200 × 1500 px.

## Médias générés automatiquement (rien à fournir)

Favicon, icônes et image de partage (`public/og-image.jpg`) sont générés à partir du badge rond ; le logo est le tracé vectoriel `src/assets/elevate-her-wordmark.min.svg`.
