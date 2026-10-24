/**
 * Page Contact — textes validés (content/contact.md), adaptés le 25 octobre 2026 :
 * le site n'héberge plus aucun formulaire, créatrices comme marques passent par le formulaire Google.
 */
import { applyUrl, instagramUrl } from './site';
export const contact = {
  meta: { title: 'Contact — Elevate Her', description: 'Get in touch with the team behind Elevate Her.' },
  hero: { eyebrow: 'Contact', title: 'Get in *touch*.', text: 'Two doors, depending on who you are.' },
  doors: {
    creators: {
      title: 'Creators',
      text: "The application form is the way in. It's short, and the team reads every one.",
      button: { label: 'Apply to Elevate Her', href: applyUrl },
    },
    brands: {
      title: 'Brands, partners and press',
      text: 'A collaboration with a creator on the roster, a partnership, an interview: use the same form and tell us who you are.',
      button: { label: 'Open the form', href: applyUrl },
    },
  },
  details: {
    eyebrow: 'Find us',
    items: [
      { label: 'Instagram', value: '@serigne.sd', href: instagramUrl },
      { label: 'Based in', value: 'Paris' },
    ] as { label: string; value: string; href?: string }[],
  },
};
