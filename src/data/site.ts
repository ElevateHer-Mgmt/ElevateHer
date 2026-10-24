/**
 * Adresse de candidature : TOUS les boutons « Apply to Elevate Her » du site pointent ici
 * (header, menu mobile, hero, parcours, bloc de fin, Contact, 404, pied de page).
 * Formulaire Google Forms fourni par Ethan le 24 octobre 2026. Pour revenir au formulaire
 * interne du site, remettre '/apply'.
 */
export const applyUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSdyJ26lJ0NWz9yn9iRd_jn5B9H5HAvTFZvHV8y9e0x_GDg_xQ/viewform?usp=header';

/**
 * Profil Instagram officiel (pied de page, page Contact, données structurées), fourni par Ethan
 * le 25 octobre 2026. Seul réseau affiché : aucun email ni TikTok public, et le site n'héberge
 * aucun formulaire. Créatrices, marques et presse passent toutes par le formulaire Google (applyUrl).
 */
export const instagramUrl = 'https://www.instagram.com/serigne.sd?xtok=MWx0Z3oxZzltcnR2cg==';

/** Identité pour le SEO et les données structurées. */
export const org = {
  name: 'Elevate Her',
  tagline: 'Creator Growth Agency & Private Club for Ambitious Women',
  description: 'A dedicated team helping ambitious women build their brand, audience and income.',
  /** Profils officiels, URL complètes (données structurées Organization). */
  sameAs: [instagramUrl],
};

/** Navigation et pied de page, communs à toutes les pages. Textes validés (content/home.md). */
export const nav = {
  links: [
    { label: 'About', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Contact', href: '/contact' },
  ],
  cta: { label: 'Apply to Elevate Her', short: 'Apply', href: applyUrl },
};

/** Chemins internes sans chemin de base ('/about') : le composant Link l'ajoute, et ouvre les liens externes dans un nouvel onglet. */
export type FooterLink = { label: string; href: string };

export const footer = {
  description: 'The team behind ambitious women building influential brands and valuable businesses.',
  columns: [
    {
      title: 'Explore',
      links: [
        { label: 'Home', href: '/' },
        { label: 'About', href: '/about' },
        { label: 'Services', href: '/services' },
        { label: 'Apply', href: applyUrl },
        { label: 'Contact', href: '/contact' },
      ] as FooterLink[],
    },
    {
      title: 'Connect',
      links: [{ label: 'Instagram', href: instagramUrl }] as FooterLink[],
    },
    {
      title: 'Legal',
      links: [
        { label: 'Legal Notice', href: '/legal-notice' },
        { label: 'Privacy Policy', href: '/privacy-policy' },
      ] as FooterLink[],
    },
  ],
  bottom: ['© 2026 Elevate Her', 'By application only'],
  slogan: ['Elevate', 'Connect', 'Empower'],
};

/** Bloc de fin de page partagé. */
export const applyCta = {
  eyebrow: 'By application only',
  title: 'Ready to build something *bigger*?',
  text: "A limited roster. A dedicated team. A structure built for growth. If that's what's been missing, apply.",
  benefits: ['A dedicated team', 'A personalised strategy', 'Protected growth'],
  button: { label: 'Apply to Elevate Her', href: applyUrl },
  note: 'Takes about five minutes. The team reads every application.',
};
