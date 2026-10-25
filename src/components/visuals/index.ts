/** Visuel codé pour chaque emplacement média (même nom que le fichier attendu dans MEDIAS.md). */
import VisualDashboard from './VisualDashboard.astro';
import VisualBrand from './VisualBrand.astro';
import VisualAudience from './VisualAudience.astro';
import VisualGrowth from './VisualGrowth.astro';
import VisualRevenue from './VisualRevenue.astro';
import VisualOpportunities from './VisualOpportunities.astro';
import VisualTeam from './VisualTeam.astro';
import VisualAboutHero from './VisualAboutHero.astro';
import VisualInvitation from './VisualInvitation.astro';

export const visualFor: Record<string, (props: Record<string, never>) => unknown> = {
  'home-hero': VisualDashboard,
  'path-brand': VisualBrand,
  'path-audience': VisualAudience,
  'path-growth': VisualGrowth,
  'path-revenue': VisualRevenue,
  'path-opportunities': VisualOpportunities,
  'home-behind-the-scenes': VisualTeam,
  'about-hero': VisualAboutHero,
  'about-club': VisualInvitation,
};
