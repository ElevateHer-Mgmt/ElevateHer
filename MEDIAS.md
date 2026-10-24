# Médias du site — Elevate Her

Ce fichier liste chaque image et vidéo attendue par le site, avec son nom de fichier exact, son format et un prompt prêt à coller dans un générateur d'images ou de vidéos IA. Tant qu'un fichier n'existe pas, le site affiche à sa place un fond rose pâle à motif ✦, au bon ratio, avec le nom attendu écrit en petit. Dès que le fichier est déposé au bon endroit, il s'affiche au prochain chargement (en local) ou au prochain build (en ligne).

## Mode d'emploi

1. Génère le visuel avec le prompt indiqué (ou une photo réelle qui respecte la même ambiance).
2. Recadre-le au ratio demandé, puis exporte-le :
   - **Images** : format **WebP** de préférence (JPG accepté en repli), poids **300 Ko maximum** après compression. Outil simple : [squoosh.app](https://squoosh.app), qualité 75 à 82.
   - **Vidéos de fond** : **MP4 (H.264)**, **sans son**, **5 à 15 secondes** en boucle, **5 Mo maximum**, plus une image d'attente `<nom>-poster.webp` (la première image de la vidéo, 300 Ko maximum). Un `.webm` supplémentaire est facultatif. Outil simple : HandBrake, préréglage « Web », débit 2 à 3 Mb/s, piste audio supprimée.
3. Nomme le fichier **exactement** comme indiqué, en minuscules, et dépose-le :
   - images → `public/medias/images/`
   - vidéos → `public/medias/videos/`
4. Aucune autre manipulation : le site détecte le fichier tout seul.

Règles à garder en tête : jamais d'image de stock reconnaissable, jamais de photo suggestive, pas de texte ni de logo incrusté dans les visuels (le site s'en charge), et la même ambiance d'une image à l'autre pour que l'ensemble reste cohérent.

Comportement des vidéos de fond : lecture automatique, muette, en boucle, chargée seulement quand elle arrive à l'écran, mise en pause hors écran. Si la visiteuse a activé « réduire les animations » ou si sa connexion est lente, la vidéo n'est jamais téléchargée et l'image d'attente reste affichée.

## Style commun à tous les prompts

Chaque prompt ci-dessous commence par ce bloc de style, à coller tel quel avant la description. C'est lui qui garantit l'unité visuelle du site.

```
Editorial fashion photography for a premium creator agency. Soft natural daylight, warm cream tones (#FFF8F0) with powder pink accents (#D9A3A5), silky pale pink drapes, subtle palm-leaf shadows on the walls, lots of negative space. Elegant, feminine, young, refined, quiet luxury, Vogue-like composition, shallow depth of field, very subtle film grain. Fully clothed, modest styling, nothing suggestive. No text, no logos, no watermark, no brand names.
```

Prompt négatif (si ton outil en accepte un) :

```
candy pink, fuchsia, neon, glitter, loud gradients, cluttered, text, letters, logo, watermark, suggestive, revealing clothing, low quality, blurry, distorted hands, extra fingers, stock photo look
```

Pour les vidéos, ajoute à la fin du prompt : `Slow cinematic camera movement, gentle and continuous, seamless loop, 6 to 10 seconds, no sound.`

## Liste des médias

### 1. `home-hero.mp4` + `home-hero-poster.webp`

- **Page / section** : Accueil, hero (l'arche sous le logo).
- **Type** : vidéo de fond, portrait.
- **Format** : ratio **4:5**, **1080 × 1350 px**, 6 à 10 s en boucle, sans son, MP4 H.264, 5 Mo maximum. Image d'attente `home-hero-poster.webp` au même ratio, 300 Ko maximum.
- **Prompt** :

```
[bloc de style] A young woman content creator in a bright cream studio, seated on a pale pink velvet chair, calmly adjusting a small ring light and glancing at her phone on a tripod. Cream linen outfit, soft smile, relaxed and confident. Powder pink silk curtain in the background, palm-leaf shadow drifting slowly across the wall. Vertical 4:5 framing, medium shot. Slow cinematic camera movement, gentle and continuous, seamless loop, 6 to 10 seconds, no sound.
```

### 2. `path-brand.webp`

- **Page / section** : Accueil, parcours (étape 01 Brand) et page Services, chapitre 01.
- **Type** : photo, portrait, affichée dans une arche.
- **Format** : ratio **4:5**, **1200 × 1500 px**, WebP, 300 Ko maximum. Le sujet doit rester lisible dans le haut arrondi : garder de l'espace au-dessus de la tête.
- **Prompt** :

```
[bloc de style] Close editorial portrait of a young woman creator in profile, cream silk blouse, minimal gold jewellery, hair neatly tied, looking slightly upward with quiet confidence. Plain cream wall, a single powder pink silk drape falling on one side. Vertical 4:5 framing with generous space above the head.
```

### 3. `path-audience.webp`

- **Page / section** : Accueil, parcours (étape 02 Audience) et page Services, chapitre 02.
- **Type** : photo, portrait, affichée dans une arche.
- **Format** : ratio **4:5**, **1200 × 1500 px**, WebP, 300 Ko maximum.
- **Prompt** :

```
[bloc de style] A young woman creator filming herself with a smartphone on a small tripod, seen from the side, in a sunlit cream room with sheer curtains. She is mid-sentence, animated and natural, wearing a soft beige knit. Powder pink peonies in a glass vase on a side table. Vertical 4:5 framing, space above the head.
```

### 4. `path-growth.webp`

- **Page / section** : Accueil, parcours (étape 03 Growth) et page Services, chapitre 03.
- **Type** : photo, portrait, affichée dans une arche.
- **Format** : ratio **4:5**, **1200 × 1500 px**, WebP, 300 Ko maximum.
- **Prompt** :

```
[bloc de style] A young woman creator walking with momentum through a bright cream corridor with tall arched windows, light dress moving, slight motion blur on the hem, looking ahead. Palm-leaf shadows across the floor, powder pink wall at the end of the corridor. Vertical 4:5 framing, full body, space above the head.
```

### 5. `path-revenue.webp`

- **Page / section** : Accueil, parcours (étape 04 Revenue) et page Services, chapitre 04.
- **Type** : photo, portrait, affichée dans une arche.
- **Format** : ratio **4:5**, **1200 × 1500 px**, WebP, 300 Ko maximum.
- **Prompt** :

```
[bloc de style] Elegant still life from above: a young woman's hands signing a blank cream document with a slim gold pen on a pale marble table, a closed notebook, a cup of tea, a single powder pink peony. Soft window light from the left. Vertical 4:5 framing, calm and precise.
```

### 6. `path-opportunities.webp`

- **Page / section** : Accueil, parcours (étape 05 Opportunities) et page Services, chapitre 05.
- **Type** : photo, portrait, affichée dans une arche.
- **Format** : ratio **4:5**, **1200 × 1500 px**, WebP, 300 Ko maximum.
- **Prompt** :

```
[bloc de style] A young woman creator in a cream tailored suit stepping through a tall arched doorway into a bright room filled with soft light, seen from behind at three-quarter angle, one hand resting on the arch. Powder pink silk drape beside the door, palm-leaf shadow on the wall. Vertical 4:5 framing, space above the head.
```

### 7. `home-behind-the-scenes.webp`

- **Page / section** : Accueil, section « She stays the face. The team builds the rest. »
- **Type** : photo, portrait, affichée dans une arche.
- **Format** : ratio **4:5**, **1200 × 1500 px**, WebP, 300 Ko maximum.
- **Prompt** :

```
[bloc de style] Behind the scenes of a photo shoot: a young woman creator in focus, posing in a cream outfit in front of a pale pink backdrop, while two blurred figures in the background adjust a softbox and a reflector. Only the creator is sharp; the team stays out of focus. Vertical 4:5 framing, space above the head.
```

### 8. `about-hero.webp`

- **Page / section** : About, sous le hero « The team behind her ».
- **Type** : photo, paysage, coins arrondis.
- **Format** : ratio **3:2**, **1800 × 1200 px**, WebP, 300 Ko maximum.
- **Prompt** :

```
[bloc de style] Wide editorial shot of a bright creative studio with cream walls and arched windows: a young woman creator seated at a pale wooden desk reviewing a printed mood board, a powder pink silk drape hanging on one side, a palm plant casting soft shadows, a round cream chair, plenty of empty space. Horizontal 3:2 framing.
```

### 9. `about-club.webp`

- **Page / section** : About, chapitre « What Private Club means » (sur fond encre).
- **Type** : photo, portrait, affichée dans une arche.
- **Format** : ratio **4:5**, **1200 × 1500 px**, WebP, 300 Ko maximum. Les tons clairs ressortiront sur le fond sombre de la section.
- **Prompt** :

```
[bloc de style] A young woman's hand in a cream sleeve holding a thick blank invitation card with a round embossed seal, no text, against a backdrop of flowing pale pink silk. Soft directional light catching the silk folds. Vertical 4:5 framing, intimate and exclusive feeling.
```

### 10. `home-film-poster.webp` (facultatif)

- **Page / section** : Accueil, section « The film ». Section masquée tant qu'aucune vidéo n'est renseignée.
- **Type** : image d'attente d'une vidéo longue hébergée sur YouTube ou Vimeo (le lecteur ne se charge qu'au clic).
- **Format** : ratio **16:9**, **1920 × 1080 px**, WebP, 300 Ko maximum.
- **Activation** : dans `src/data/home.ts`, section `film`, passer `enabled` à `true` et renseigner `videoId` (l'identifiant de la vidéo YouTube ou Vimeo). Le fournisseur se choisit dans le composant `VideoFacade` (YouTube par défaut).
- **Prompt** :

```
[bloc de style] Cinematic wide frame of a creator studio at golden hour: cream walls, a pale pink silk drape moving slightly in the breeze, a ring light switched off, a chair and a tripod, nobody in the frame, warm and quiet. Horizontal 16:9 framing, space in the centre for a play button.
```

### 11. `team-01.webp`, `team-02.webp`, … (facultatif)

- **Page / section** : About, section « The people behind her ». Section masquée tant qu'Ethan ne l'active pas.
- **Type** : portraits, affichés dans des arches.
- **Format** : ratio **4:5**, **1200 × 1500 px**, WebP, 300 Ko maximum, même cadrage pour tous les portraits.
- **Activation** : dans `src/data/about.ts`, section `team`, passer `enabled` à `true` et remplir `members` (prénom, rôle, nom du fichier sans extension).
- **Prompt** (si ce sont des portraits générés plutôt que de vraies photos) :

```
[bloc de style] Clean editorial portrait of a team member, neutral and friendly expression, cream or soft neutral outfit, plain cream background with a faint powder pink drape on one edge, consistent soft front light. Vertical 4:5 framing, head and shoulders, space above the head.
```

## Médias générés automatiquement (rien à fournir)

- **Favicon** et **image de partage** (Open Graph) : produits à partir du badge rond `brand/logo/elevate-her-logo-rond.png` à l'étape SEO.
- **Logo** : toujours le fichier vectoriel `brand/logo/elevate-her-wordmark.svg`, déjà intégré.

## Récapitulatif

| Fichier | Page / section | Type | Ratio | Dimensions | Poids max |
|---|---|---|---|---|---|
| `home-hero.mp4` + `home-hero-poster.webp` | Accueil, hero | vidéo de fond | 4:5 | 1080 × 1350 | 5 Mo + 300 Ko |
| `path-brand.webp` | Accueil et Services, étape 01 | photo | 4:5 | 1200 × 1500 | 300 Ko |
| `path-audience.webp` | Accueil et Services, étape 02 | photo | 4:5 | 1200 × 1500 | 300 Ko |
| `path-growth.webp` | Accueil et Services, étape 03 | photo | 4:5 | 1200 × 1500 | 300 Ko |
| `path-revenue.webp` | Accueil et Services, étape 04 | photo | 4:5 | 1200 × 1500 | 300 Ko |
| `path-opportunities.webp` | Accueil et Services, étape 05 | photo | 4:5 | 1200 × 1500 | 300 Ko |
| `home-behind-the-scenes.webp` | Accueil, She stays the face | photo | 4:5 | 1200 × 1500 | 300 Ko |
| `about-hero.webp` | About, hero | photo | 3:2 | 1800 × 1200 | 300 Ko |
| `about-club.webp` | About, Private Club | photo | 4:5 | 1200 × 1500 | 300 Ko |
| `home-film-poster.webp` | Accueil, The film (facultatif) | image d'attente | 16:9 | 1920 × 1080 | 300 Ko |
| `team-01.webp`… | About, équipe (facultatif) | portraits | 4:5 | 1200 × 1500 | 300 Ko |
