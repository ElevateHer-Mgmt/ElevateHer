# Charte graphique — Elevate Her

Aperçu visuel : `brand/apercu-charte.png`

## Identité
- **Nom** : Elevate Her
- **Positionnement** : Creator Growth Agency & Private Club for Ambitious Women
- **Descripteur sur le logo** : Women's Agency & Private Club (il fait partie du badge rond, on le laisse tel quel)
- **Idée de marque** : *Built for her. Backed by a team. Designed for growth.*
- **Slogans** : *For ambitious women who rise together.* · ELEVATE ✦ CONNECT ✦ EMPOWER
- **Ambiance** : féminin, distingué, jeune, premium et sélectif. Élégant sans être froid, chic sans être vieillot. Pensez à un magazine de mode tourné vers une génération de créatrices ambitieuses, avec la discrétion d'un club privé.

## Logo
- `brand/logo/elevate-her-wordmark.svg` : logo vectoriel « Elevate / Her » sur fond transparent. **C'est la version à utiliser partout sur le site** (header, footer, hero). On peut modifier ses couleurs en CSS si besoin, par exemple tout en crème sur un fond encre.
- `brand/logo/elevate-her-logo-rond.png` : badge rond complet (à utiliser pour le favicon, l'image de partage et un éventuel sceau décoratif).
- `brand/visuels/` : logo et bannière d'origine, uniquement comme référence d'ambiance. Ne pas les intégrer tels quels au site.
- Le lettrage du logo est un dessin unique, il n'existe pas en police. Ne jamais tenter de le recréer avec une police : toujours utiliser le SVG.

## Couleurs (relevées sur le logo et la bannière)
| Nom | Hex | Usage |
|---|---|---|
| Crème | `#FFF8F0` | Fond principal du site |
| Encre | `#1B1B1B` | Textes et titres |
| Rose poudré | `#D9A3A5` | Couleur signature : logo, motifs, filets, étoiles, formes décoratives. **Jamais pour du texte** (contraste insuffisant) |
| Rose accent | `#B97A80` | Mots en italique dans les **grands titres uniquement** (32 px et plus) |
| Rose pâle | `#EABDBD` | Fonds de sections, bandeaux (texte encre dessus) |
| Rose profond | `#9E5C63` | Liens, boutons (texte blanc dessus), petits textes roses |
| Taupe | `#5C5452` | Texte secondaire, légendes |
| Blanc | `#FFFFFF` | Cartes, surfaces surélevées |

Toutes les combinaisons de texte doivent respecter le contraste WCAG AA. Les valeurs ci-dessus ont été vérifiées pour les usages indiqués.

## Typographie
- **Titres** : **Playfair** (la version 2 sur Google Fonts, avec axe de taille optique), graisse 400 à 500. Un ou deux mots-clés par titre peuvent passer en *italique* en rose accent, en écho au « Her » du logo.
- **Texte courant** : **Playfair Light (300)**, la même famille en plus fin, comme demandé. Minimum 18 px sur desktop et 17 px sur mobile, interligne d'environ 1,6. Utiliser l'axe de taille optique (`font-optical-sizing: auto`) pour que le texte reste lisible en petit.
- **Labels, menus, boutons, sur-titres** : **Jost** 400 à 500, en majuscules, avec un espacement des lettres de 0,2 à 0,3 em. C'est le style de « WOMEN'S AGENCY & PRIVATE CLUB » sur le logo.
- Installer via `@fontsource-variable/playfair` et `@fontsource-variable/jost`, en auto-hébergement sans appel à Google, avec `font-display: swap` et un préchargement des fichiers critiques.

## Motifs graphiques (tirés du logo et de la bannière)
- L'étoile à quatre branches ✦, utilisée avec parcimonie comme ponctuation visuelle (séparateurs, puces, scintillement discret).
- Les arcs et cercles en filet fin rose poudré, qui rappellent le badge rond.
- Les drapés soyeux et ondulations rose pâle, ainsi que les ombres végétales douces (feuille de palmier) de la bannière, pour l'ambiance des fonds.
- Beaucoup d'espace blanc, des coins arrondis doux et des ombres très légères.

## À éviter
- Le rose bonbon, le fuchsia, les dégradés criards et les paillettes « cheap ».
- Le noir pur en grands aplats : préférer l'encre `#1B1B1B`, et avec parcimonie.
- Toute imagerie suggestive ou explicite. Le site reste élégant et peut être partagé sans risque en lien de bio Instagram ou TikTok.
- Toute formulation de type « by women, for women » (voir la liste dans `agence.md`).
- Les typographies autres que Playfair et Jost.
