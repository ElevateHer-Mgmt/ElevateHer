# Mode d'emploi — site Elevate Her

1. Place ce dossier `site-elevate-her` où tu veux sur ton Mac, par exemple dans Documents.
2. Vérifie que Node.js est installé : dans le Terminal, tape `node -v`. Si un numéro s'affiche, c'est bon. Sinon, installe la version « LTS » depuis nodejs.org.
3. Ouvre l'appli Claude, onglet **Code**, sélectionne le dossier `site-elevate-her` et choisis le modèle Fable 5.1.
4. Ouvre `PROMPT.md`, copie le texte sous la ligne, colle-le dans Claude Code et envoie.
5. Valide chaque étape. Le moment le plus important est le choix entre les 2 directions visuelles de la page d'accueil.
6. Quand le site est construit, ouvre `MEDIAS.md` : génère chaque image et vidéo avec le prompt indiqué, donne-lui le nom prévu et dépose-la dans `public/medias/images/` ou `public/medias/videos/`.
7. Ouvre `A-COMPLETER.md` et donne à Claude Code les infos manquantes (contacts, chiffres, équipe…).

Contenu du dossier :
- `CLAUDE.md` : les règles du projet, que Claude Code lit automatiquement à chaque session.
- `PROMPT.md` : le prompt de départ.
- `brand/charte.md` : couleurs, polices, logo, motifs.
- `brand/agence.md` : positionnement, services, textes et formulations interdites.
- `brand/positionnement-original.md` : ton document de positionnement, tel quel.
- `brand/references.md` : analyse des sites d'inspiration.
- `brand/apercu-charte.png` : aperçu visuel de la charte.
- `brand/logo/` : le logo en vectoriel (SVG) et le badge rond (PNG transparent).
- `brand/visuels/` : ton logo et ta bannière d'origine.
