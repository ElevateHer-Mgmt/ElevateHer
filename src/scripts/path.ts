/**
 * Parcours Brand → Audience → Growth → Revenue → Opportunities.
 * Desktop : section épinglée, le rail défile à l'horizontale au rythme du scroll vertical.
 * Mobile ou mouvement réduit : carrousel natif (scroll-snap), la barre de progression suit.
 */
import { gsap, ScrollTrigger, prefersReducedMotion } from './motion';

export function initPath() {
  const section = document.querySelector<HTMLElement>('#path');
  const pinEl = section?.querySelector<HTMLElement>('.path-pin');
  const track = section?.querySelector<HTMLElement>('[data-track]');
  const rail = section?.querySelector<HTMLElement>('[data-rail]');
  if (!section || !pinEl || !track || !rail) return;

  const progress = section.querySelector<HTMLElement>('[data-progress]');
  const counter = section.querySelector<HTMLElement>('[data-counter]');
  const panels = gsap.utils.toArray<HTMLElement>('[data-panel]', rail);
  const total = panels.length;

  const setProgress = (p: number) => {
    const clamped = Math.max(0, Math.min(1, p));
    if (progress) progress.style.transform = `scaleX(${clamped})`;
    if (counter) counter.textContent = `${String(Math.min(total, Math.round(clamped * (total - 1)) + 1)).padStart(2, '0')} / ${String(total).padStart(2, '0')}`;
  };

  const nativeScroll = () => {
    const onScroll = () => setProgress(track.scrollLeft / Math.max(1, track.scrollWidth - track.clientWidth));
    track.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => track.removeEventListener('scroll', onScroll);
  };

  if (prefersReducedMotion()) { nativeScroll(); return; }

  const mm = gsap.matchMedia();
  mm.add('(min-width: 1024px)', () => {
    const distance = () => rail.scrollWidth - track.clientWidth;
    const tween = gsap.to(rail, {
      x: () => -distance(),
      ease: 'none',
      scrollTrigger: {
        trigger: section,
        pin: pinEl,
        start: 'top top',
        end: () => '+=' + distance(),
        scrub: 0.8,
        invalidateOnRefresh: true,
        onUpdate: (self) => setProgress(self.progress),
      },
    });
    // Les médias glissent légèrement pendant le défilement horizontal
    panels.forEach((panel) => {
      const media = panel.querySelector<HTMLElement>('[data-panel-media]');
      if (!media) return;
      gsap.fromTo(media, { yPercent: 5 }, {
        yPercent: -5, ease: 'none',
        scrollTrigger: { containerAnimation: tween, trigger: panel, start: 'left right', end: 'right left', scrub: true },
      });
    });
    setProgress(0);
    return () => { tween.kill(); gsap.set(rail, { clearProps: 'transform' }); };
  });
  mm.add('(max-width: 1023px)', nativeScroll);
}
