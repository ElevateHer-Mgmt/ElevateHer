/**
 * Visuels codés (HTML/CSS/SVG) qui remplacent les images, dans la charte du site.
 * AUCUN chiffre n'est inventé : chaque `value` reste vide tant qu'Ethan n'a pas un vrai chiffre.
 * Dès qu'une `value` (nombre) est renseignée, elle s'affiche avec un compteur animé au scroll ;
 * `suffix` sert pour « k », « % » ou « + » ; `label` est le libellé qui l'accompagne.
 * Exemple : stat: { label: 'Followers', value: 128000 }  →  « 128,000 Followers »
 */
export type Stat = { label: string; value?: number; suffix?: string };

export const visuals = {
  /** Accueil, hero : carte « tableau de bord » avec une courbe d'audience. */
  dashboard: {
    title: 'Audience',
    stat: { label: 'Followers' } as Stat,
    legend: ['Brand', 'Audience', 'Revenue'],
  },
  /** Parcours 01 : mini planche de marque. */
  brand: { word: 'Aa', label: 'Brand board', swatches: ['bg-cream', 'bg-rose-pale', 'bg-rose', 'bg-ink'] },
  /** Parcours 02 : courbe de croissance. */
  audience: { label: 'Reach', stat: { label: 'New followers' } as Stat },
  /** Parcours 03 : barres en arche qui montent. */
  growth: { label: 'Momentum', stat: { label: 'Growth', suffix: '%' } as Stat },
  /** Parcours 04 : anneau en trois segments. */
  revenue: { label: 'Revenue', caption: 'Several streams, not one.', streams: ['01', '02', '03'], stat: { label: 'Streams' } as Stat },
  /** Parcours 05 : cartes de partenariat empilées. */
  opportunities: { title: 'Partnership', cards: [{ status: 'Proposal' }, { status: 'In talks' }, { status: 'Signed' }] },
  /** Accueil, « She stays the face » : la créatrice au centre, l'équipe autour. */
  team: { center: 'You', roles: ['STRATEGY', 'CONTENT', 'REVENUE', 'PROTECTION'] },
  /** About, hero : composition typographique. */
  aboutHero: { lines: ['Built for her.', 'Backed by a team.', 'Designed for growth.'], footer: ['Elevate', 'Connect', 'Empower'] },
  /** About, Private Club : carte d'invitation scellée du badge. */
  invitation: { eyebrow: 'Private Club', title: 'Invitation', lines: ['A limited roster.', 'By application only.'] },
};
