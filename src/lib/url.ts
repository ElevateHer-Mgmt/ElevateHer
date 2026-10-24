/**
 * Chemin de base du site : '' en racine d'un domaine, '/ElevateHer' sur GitHub Pages
 * (valeur `base` de astro.config.mjs, fournie par Astro). Jamais de barre finale ici.
 */
export const base = import.meta.env.BASE_URL.replace(/\/$/, '');

/** Lien vers un autre site (ouvert dans un nouvel onglet par le composant Link). */
export const isExternal = (href: string) => /^https?:\/\//i.test(href);

/**
 * Préfixe un chemin interne absolu ('/about', '/og-image.jpg') avec le chemin de base.
 * '/' devient la page d'accueil avec barre finale ('/ElevateHer/'), servie sans redirection.
 * Les liens externes, les ancres (#…) et les chemins relatifs sont rendus tels quels.
 */
export const withBase = (path: string) => {
  if (isExternal(path) || !path.startsWith('/')) return path;
  return path === '/' ? `${base}/` : `${base}${path}`;
};
