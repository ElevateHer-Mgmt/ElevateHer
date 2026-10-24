# À compléter — site Elevate Her

Tout ce qui apparaît sur le site entre crochets `[TO COMPLETE]` est listé ici, avec l'endroit exact où le renseigner. Chaque modification se fait dans un fichier texte, puis le site se reconstruit tout seul au prochain déploiement (ou se met à jour en direct en local). Rien n'a été inventé : ni chiffre, ni nom, ni témoignage, ni logo presse.

Les fichiers cités sont dans `src/data/`, sauf mention contraire. Quand plusieurs lignes sont indiquées, c'est la même information répétée à plusieurs endroits : remplace-la partout.

## 1. Indispensable avant la mise en ligne

| Quoi | Où | Comment |
|---|---|---|
| ~~Lien de candidature~~ | `site.ts`, constante `applyUrl` | **Fait le 24 octobre 2026** : tous les boutons « Apply to Elevate Her » ouvrent le formulaire Google Forms, dans le même onglet. La page interne de candidature et son formulaire ont été retirés le même jour ; les textes validés (processus en 4 étapes, champs, FAQ) restent disponibles dans `content/apply.md` si tu veux les réutiliser ailleurs, par exemple dans le formulaire Google. |
| ~~Nom de domaine~~ | `astro.config.mjs`, lignes `site:` et `base:` | **Fait le 25 octobre 2026** : le site est publié sur GitHub Pages à https://elevateher-mgmt.github.io/ElevateHer/ ; sitemap, robots.txt, liens canoniques, image de partage et données structurées utilisent cette adresse. Le jour où tu as un vrai domaine : mettre le domaine dans `site`, retirer la ligne `base`, ajouter `public/CNAME`, déclarer le domaine dans Settings → Pages (détail dans `DEPLOIEMENT.md`). |
| ~~Email de contact~~ | — | **Décision du 25 octobre 2026** : aucun email public. Toutes les mentions d'un email et de TikTok ont été retirées (pied de page, page Contact, mentions légales, politique de confidentialité). Le formulaire de contact du site a été retiré le même jour : créatrices, marques et presse passent toutes par le formulaire Google. Conséquence juridique : la loi impose quand même un moyen de contact direct, voir les lignes « Mentions légales » (téléphone) et « Politique de confidentialité » (adresse postale) ci-dessous. |
| ~~Instagram~~ | `site.ts`, constante `instagramUrl` | **Fait le 25 octobre 2026** : le pied de page, le bloc « Find us » de la page Contact et les données structurées pointent vers le profil fourni par Ethan, ouvert dans un nouvel onglet. Le lien contient un paramètre `?xtok=…` (jeton de partage ajouté par l'application Instagram) : il peut être supprimé sans changer la destination. |
| **Formulaire Google : marques et presse** | Formulaire Google (hors site) | La page Contact envoie aussi les marques, partenaires et journalistes vers le formulaire Google, avec la consigne « use the same form and tell us who you are ». Vérifier que le formulaire permet de se présenter (une question « Who are you? » ou un champ libre), sinon dis-le-moi et je reformule la porte « Brands, partners and press ». |
| **Ville ou zone d'activité** | `contact.ts`, ligne « Based in » | Texte libre, par exemple une ville ou « Europe, remote ». |
| **Délai de réponse** aux candidatures | `home.ts` (étape Review du bloc « Four steps ») | Par exemple « 5 working days ». |
| **Mentions légales** | `legal.ts`, bloc `legalNotice` | Forme juridique, siège, SIRET ou RCS, numéro de TVA, directeur de publication, **numéro de téléphone** (la loi française l'exige dans les mentions légales, et aucun email n'est publié), hébergeur (Netlify si c'est lui), crédits design et photo. |
| **Politique de confidentialité** | `legal.ts`, bloc `privacyPolicy` | Raison sociale et **adresse postale** (elle sert de moyen de contact pour les demandes RGPD, puisqu'aucun email n'est publié), lieu d'hébergement des données Google Forms, durées de conservation (12 mois est une base courante), autorité compétente si l'entreprise n'est pas en France, date de mise en ligne. Vérifier aussi que le formulaire Google Forms demande bien la confirmation « 18 ans ou plus » et le consentement RGPD avec un lien vers cette politique, puisque le site ne les demande plus lui-même. À faire relire par un juriste avant publication. |

## 2. Décisions à prendre

| Question | Où | Options |
|---|---|---|
| **Y a-t-il un critère d'audience minimum ?** | `services.ts` bloc « Is Elevate Her for you? » | Soit une phrase (« We usually work with creators above … »), soit retirer le marqueur et garder le texte actuel, qui ne donne aucun chiffre. |
| **« The team reads every application. Personally. »** | `home.ts`, `site.ts` (note sous le bloc de fin) | Promesse à confirmer. Si elle n'est pas vraie en pratique, je l'adoucis. |

## 3. Sections prêtes mais masquées

Elles existent dans le code, invisibles tant que leur interrupteur `enabled` reste à `false`. À activer quand tu as les éléments, jamais avant.

| Section | Où | Ce qu'il faut |
|---|---|---|
| **Chiffres clés** (accueil, sous la déclaration) | `home.ts`, bloc `numbers` | 3 chiffres vérifiables et leurs libellés, par exemple créatrices accompagnées, membres de l'équipe, années d'activité. Un chiffre entier s'anime en compteur. |
| **Témoignages** (accueil) | `home.ts`, bloc `stories` | 3 citations courtes avec prénom et ce qu'elle crée, avec l'accord écrit des créatrices. |
| **Film de marque** (accueil) | `home.ts`, bloc `film` | L'identifiant de la vidéo YouTube ou Vimeo, et l'image d'attente `home-film-poster.webp` (voir `MEDIAS.md`). |
| **L'équipe** (About) | `about.ts`, bloc `team` | Prénoms, rôles, portraits (voir `MEDIAS.md`). Uniquement si tu veux montrer l'équipe : la marque la garde volontiers en coulisses. |

## 4. Médias

Aucune image ni vidéo n'est encore en place : chaque emplacement affiche le motif ✦ avec le nom du fichier attendu. La liste complète, les formats et les prompts IA sont dans `MEDIAS.md`. Neuf fichiers sont nécessaires au lancement.

## 5. Déjà fait, rien à fournir

- **Logo** : le fichier vectoriel fourni (`brand/logo/elevate-her-wordmark.svg`) est rogné à la source : la pointe du E et un liseré en haut manquent, et la queue du « e » final touche le bord. Le site utilise donc un tracé vectoriel refait fidèlement à partir du badge haute définition (`brand/visuels/logo-original.jpg`), enregistré dans `src/assets/elevate-her-wordmark.min.svg`. Les fichiers du dossier `brand/` n'ont pas été modifiés. Si le studio qui a dessiné le logo peut fournir le vectoriel complet, il suffira de le déposer à la place de ce fichier.

- Favicon, icônes et image de partage, générés à partir du badge rond.
- Sitemap, robots.txt, liens canoniques, balises Open Graph et Twitter, données structurées Organization, WebSite et FAQ.
- Page 404, exclue de l'indexation volontairement. Le site n'héberge aucun formulaire : rien à configurer chez l'hébergeur.

## 6. Avant de publier, une dernière relecture

- Relire toutes les pages une fois les marqueurs remplis : la recherche du texte `TO COMPLETE` dans le dossier `src/` doit ne rien renvoyer.
- Vérifier qu'aucune formulation du type « by women, for women » n'a été introduite en complétant les textes.
- Tester, sur le site en ligne, l'ouverture du formulaire Google depuis un bouton « Apply to Elevate Her » et depuis la porte « Brands, partners and press » de la page Contact, et l'ouverture du profil Instagram depuis le pied de page.

## 7. Contrôle qualité au 25 octobre 2026

Lighthouse, mode mobile, sur le build de production (chaque page mesurée séparément) :

| Page | Performance | Accessibilité | Bonnes pratiques | SEO |
|---|---|---|---|---|
| Accueil | 96 | 100 | 100 | 100 |
| About | 97 | 100 | 100 | 100 |
| Services | 96 | 100 | 100 | 100 |
| Contact | 97 | 100 | 100 | 100 |
| Legal Notice | 97 | 100 | 100 | 100 |
| Privacy Policy | 97 | 100 | 100 | 100 |

Les mesures ont été faites avec les emplacements médias vides ; une fois les images et la vidéo déposées aux poids indiqués dans `MEDIAS.md`, refaire une mesure sur l'accueil.
