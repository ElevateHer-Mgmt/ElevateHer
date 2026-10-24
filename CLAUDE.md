# Projet : site vitrine Elevate Her

Site vitrine d'**Elevate Her**, *Creator Growth Agency & Private Club for Ambitious Women* : une agence sélective, portée par une équipe dédiée, qui aide des créatrices ambitieuses à développer leur marque, leur audience et leurs revenus.

Avant toute décision, lis `brand/agence.md` (positionnement, services, textes, formulations interdites), `brand/charte.md` (identité visuelle) et `brand/references.md` (structure inspirée des concurrents). En cas de doute sur le fond, `brand/positionnement-original.md` fait foi. Ces fichiers priment sur tes préférences par défaut.

## Règles de fond, non négociables
- **Site entièrement en anglais.** Tu communiques avec Ethan en français.
- **Ne jamais écrire** « by women, for women », « women empowering women », « female-led », « built by women » ni rien qui laisse entendre une équipe exclusivement féminine. Vérifie chaque texte avant de livrer.
- La créatrice est toujours au centre, l'équipe reste en coulisses : *Built for her. Backed by a team. Designed for growth.*
- La sélectivité (Private Club, roster limité) est un argument majeur, à faire ressentir dans les textes, le design et le parcours de candidature.
- Les services sont ceux de la liste officielle de `agence.md`. N'en invente pas d'autres et ne nomme aucune plateforme précise sans validation d'Ethan.
- **Ne jamais inventer** de chiffres, de témoignages, de noms de créatrices, de membres d'équipe, de logos presse ou de résultats. Utilise des marqueurs visibles `[TO COMPLETE]` et liste-les, en français, dans `A-COMPLETER.md`.

## Stack
- **Astro** (dernière version stable), en génération statique
- **Tailwind CSS**, avec les couleurs et polices de la charte déclarées comme tokens de thème. Aucune couleur ni police codée en dur hors de ces tokens.
- **GSAP** + ScrollTrigger + SplitText (GSAP et tous ses plugins sont gratuits)
- Polices auto-hébergées : `@fontsource-variable/playfair` et `@fontsource-variable/jost`
- Le dossier contient déjà `CLAUDE.md`, `PROMPT.md`, `LISEZ-MOI.md` et `brand/`. Initialise le projet Astro **dans ce dossier sans supprimer ni écraser ces fichiers**.

## Direction artistique
- Couleurs, polices et logo : **imposés** par `brand/charte.md`, sans exception.
- Tout le reste est **libre** : mises en page, compositions, animations, détails. Vise un rendu d'agence haut de gamme, dans l'esprit **féminin, distingué, jeune, premium et sélectif**. Évite absolument le look « template ».
- Piste à explorer : faire du parcours **Brand → Audience → Growth → Revenue → Opportunities** l'élément signature du site, par exemple une section animée au scroll.
- Logo : toujours `brand/logo/elevate-her-wordmark.svg` (copie-le dans `src/assets/` ou `public/`). Ne jamais recréer le logo avec une police.

## Candidature
- Action principale du site : **Apply to Elevate Her**, accessible en permanence (header et fin de chaque page).
- Formulaire intégré, court et élégant, qui donne l'impression d'entrer dans un cercle choisi. Il comprend : la case obligatoire « I confirm I am 18 or older », le consentement RGPD et un lien vers la Privacy Policy. Le formulaire doit être compatible Netlify Forms, avec une alternative Formspree documentée.
- Les champs exacts du formulaire sont à proposer à Ethan à l'étape Stratégie.

## Médias (images et vidéos)
Ne mets **aucune fausse photo** ni image de stock. Pour chaque visuel :
1. Crée un emplacement élégant (fond rose pâle, fin motif ✦, ratio exact réservé pour éviter les décalages de mise en page) qui affiche le média dès que le fichier existe.
2. Chemins fixes : `public/medias/images/<nom>.webp` (JPG accepté en repli) et `public/medias/videos/<nom>.mp4` (+ `.webm` facultatif), avec une image d'attente `public/medias/videos/<nom>-poster.webp`.
3. Tiens à jour **`MEDIAS.md`** à la racine, en français. Pour chaque média, indique :
   - le nom de fichier exact ;
   - la page et la section concernées ;
   - le type (photo ou vidéo) et le format (ratio, dimensions recommandées, durée pour une vidéo) ;
   - le poids maximum (images : 300 Ko après compression ; vidéos de fond : 5 Mo maximum, 5 à 15 s, sans son) ;
   - **un prompt prêt à coller dans un générateur d'images ou de vidéos IA**, en anglais, cohérent avec la charte : tons crème et rose poudré, lumière naturelle douce, élégant, féminin, jeune, éditorial mode, jamais suggestif. Tous les prompts doivent partager le même style pour garantir l'unité visuelle.

Vidéos :
- Vidéos de fond : `autoplay muted loop playsinline`, chargées seulement quand elles deviennent visibles, avec une image d'attente. Remplacées par l'image d'attente si `prefers-reduced-motion` est activé ou si la connexion est lente.
- Vidéos longues (présentation, témoignages) : composant prévu pour une intégration YouTube ou Vimeo en mode « façade », c'est-à-dire une miniature cliquable qui ne charge le lecteur qu'au clic.

## Animations
- Premium mais retenues : apparitions au scroll, titres révélés avec SplitText, parallaxe légère, bandeaux défilants de phrases, micro-interactions sur les boutons et les cartes.
- Animer uniquement `transform` et `opacity`. Respecter `prefers-reduced-motion`. Garder 60 images/s sur mobile.

## Qualité exigée
- Lighthouse **95+** sur les 4 critères, sur mobile, pour chaque page.
- Accessibilité WCAG AA : contrastes de la charte, navigation au clavier, focus visible, textes alternatifs.
- SEO : balises meta (descriptions courtes de `agence.md`), Open Graph (image de partage générée à partir du badge rond), sitemap, `robots.txt`, données structurées (Organization). Favicon tiré du badge rond.
- Responsive impeccable, mobile en priorité, car la majorité du trafic viendra d'Instagram et TikTok.

## Façon de travailler
- Travaille par étapes et **arrête-toi après chacune** pour montrer le résultat à Ethan.
- Lance le site en local et donne le lien pour chaque validation.
- Explique tes choix simplement, en français, sans jargon inutile.
