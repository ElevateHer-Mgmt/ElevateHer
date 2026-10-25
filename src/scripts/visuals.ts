/**
 * Animations des visuels codés (transform et opacity uniquement), GSAP.
 * Chaque élément porte data-v : rise (monte), pop (apparaît en grandissant), bar (barre qui monte),
 * cover (cache qui glisse pour « tracer » une courbe), seal (sceau qui se pose), fade.
 * data-at fixe la position dans la timeline (secondes). Sans JS ou en mouvement réduit : état final.
 *
 * Déclenchement : quand le visuel est réellement visible (IntersectionObserver, 35 % de sa surface),
 * ce qui vaut aussi dans le carrousel horizontal du parcours sur téléphone. Le hero joue au chargement.
 * Sur grand écran, les panneaux du parcours épinglé sont déclenchés par path.ts (défilement horizontal).
 */
import { gsap, prefersReducedMotion } from './motion';

export function buildVisualTimeline(root: HTMLElement) {
  // immediateRender + lazy:false : l'état de départ (invisible) est posé tout de suite, sans attendre un tick
  const tl = gsap.timeline({ paused: true, defaults: { ease: 'expo.out', duration: 1, immediateRender: true, lazy: false } });
  root.querySelectorAll<HTMLElement>('[data-v]').forEach((el, i) => {
    const at = el.dataset.at ? parseFloat(el.dataset.at) : i * 0.07;
    switch (el.dataset.v) {
      case 'rise': tl.from(el, { y: 18, opacity: 0 }, at); break;
      case 'pop': tl.from(el, { scale: 0, opacity: 0, transformOrigin: '50% 50%', ease: 'back.out(1.4)', duration: 0.8 }, at); break;
      case 'bar': tl.from(el, { scaleY: 0, transformOrigin: '50% 100%', duration: 1.2 }, at); break;
      case 'cover': tl.fromTo(el, { scaleX: 1 }, { scaleX: 0, transformOrigin: '100% 50%', duration: 1.5, ease: 'power2.inOut', immediateRender: true }, at); break;
      case 'seal': tl.from(el, { scale: 1.6, rotate: -14, opacity: 0, transformOrigin: '50% 50%', duration: 0.9, ease: 'back.out(1.6)' }, at); break;
      default: tl.from(el, { opacity: 0, duration: 0.8 }, at);
    }
  });
  return tl;
}

export function initVisuals() {
  if (prefersReducedMotion()) return;
  const desktopRail = window.matchMedia('(min-width: 1024px)').matches;
  const pending = new Map<Element, gsap.core.Timeline>();
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      const tl = pending.get(e.target);
      if (!tl || !e.isIntersecting) return;
      tl.play();
      pending.delete(e.target);
      io.unobserve(e.target);
      (e.target as HTMLElement).dataset.played = '';
    });
  }, { threshold: 0.35 });

  gsap.utils.toArray<HTMLElement>('[data-visual]').forEach((root) => {
    if (desktopRail && root.closest('[data-panel]')) return; // géré par path.ts
    const tl = buildVisualTimeline(root);
    if (root.dataset.visual === 'dashboard') { tl.delay(0.7).play(); root.dataset.played = ''; return; }
    pending.set(root, tl);
    io.observe(root);
  });
}
