/**
 * Animations partagées : titres révélés (SplitText), apparitions au scroll, parallaxe légère,
 * compteurs. Uniquement transform et opacity. Respecte prefers-reduced-motion (et ?nomotion) :
 * dans ce cas rien ne bouge et tout est visible. Robuste au chargement déjà défilé.
 */
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';

gsap.registerPlugin(ScrollTrigger, SplitText);
ScrollTrigger.config({ ignoreMobileResize: true });

export { gsap, ScrollTrigger, SplitText };

/** Vrai si l'utilisatrice préfère moins de mouvement, ou si l'URL contient ?nomotion (contrôle visuel, Lighthouse). */
export const prefersReducedMotion = () =>
  window.matchMedia('(prefers-reduced-motion: reduce)').matches || new URLSearchParams(location.search).has('nomotion');

const START = 'top 90%';
const triggers = new WeakMap<Element, ScrollTrigger>();

/** Vrai si l'élément est déjà visible ou déjà dépassé : il reste tel quel, sans animation d'entrée. */
function alreadySeen(el: Element) {
  const rect = el.getBoundingClientRect();
  return rect.top < window.innerHeight * 0.92;
}

/**
 * Joue `tween` quand `trigger` entre dans la vue (l'élément est sous l'écran au moment de l'appel).
 * `replace` : remplace le déclencheur précédent du même élément (utile quand SplitText
 * redécoupe un titre). Sans ce drapeau, plusieurs tweens peuvent partager un même élément
 * (ex. un bloc révélé qui contient aussi des arcs décoratifs).
 */
function playOnEnter(trigger: Element, tween: gsap.core.Tween, delay = 0, replace = false) {
  if (replace) triggers.get(trigger)?.kill();
  if (delay) tween.delay(delay);
  const st = ScrollTrigger.create({
    trigger,
    start: START,
    onEnter: (self) => { tween.play(); self.kill(); },
    onLeave: (self) => { tween.progress(1); self.kill(); },
    onRefresh: (self) => { if (self.progress >= 1) { tween.progress(1); self.kill(); } },
  });
  if (replace) triggers.set(trigger, st);
}

const clearWillChange = (targets: gsap.TweenTarget) => () => gsap.set(targets, { clearProps: 'willChange' });

export function initMotion() {
  if (prefersReducedMotion()) return; // le CSS laisse tout visible
  const run = () => {
    try {
      gsap.defaults({ ease: 'expo.out', duration: 1 });

      // Titres : lignes masquées, mots qui montent. autoSplit re-découpe si la largeur change.
      // Un titre déjà visible au chargement reste tel quel (il compte pour le LCP).
      document.querySelectorAll<HTMLElement>('[data-split]').forEach((el) => {
        if (alreadySeen(el)) return;
        const delay = parseFloat(el.dataset.delay ?? '0');
        SplitText.create(el, {
          type: 'lines,words',
          mask: 'lines',
          linesClass: 'split-line',
          wordsClass: 'split-word',
          autoSplit: true,
          onSplit(self) {
            gsap.set(self.words, { yPercent: 110, willChange: 'transform' });
            const tween = gsap.to(self.words, { yPercent: 0, duration: 1.2, stagger: 0.035, paused: true, onComplete: clearWillChange(self.words) });
            playOnEnter(el, tween, delay, true);
            return tween;
          },
        });
      });

      // Blocs isolés (sous l'écran au chargement uniquement)
      gsap.utils.toArray<HTMLElement>('[data-reveal]').forEach((el) => {
        if (alreadySeen(el)) return;
        const delay = parseFloat(el.dataset.delay ?? '0');
        const from = el.dataset.reveal === 'scale' ? { scale: 0.94, opacity: 0 } : { y: 28, opacity: 0 };
        const tween = gsap.fromTo(el, from, { y: 0, scale: 1, opacity: 1, duration: 1.1, paused: true, onComplete: clearWillChange(el) });
        playOnEnter(el, tween, delay);
      });

      // Groupes en cascade
      gsap.utils.toArray<HTMLElement>('[data-reveal-group]').forEach((group) => {
        if (alreadySeen(group)) return;
        const items = group.querySelectorAll<HTMLElement>('[data-reveal-item]');
        if (!items.length) return;
        const tween = gsap.fromTo(items, { y: 24, opacity: 0 }, { y: 0, opacity: 1, duration: 1, stagger: 0.09, paused: true, onComplete: clearWillChange(items) });
        playOnEnter(group, tween);
      });

      // Arcs décoratifs : s'ouvrent doucement
      gsap.utils.toArray<HTMLElement>('[data-arcs]').forEach((arcs) => {
        if (alreadySeen(arcs.parentElement ?? arcs)) return;
        const rings = arcs.querySelectorAll('[data-arc]');
        const tween = gsap.fromTo(rings, { scale: 0.92, opacity: 0 }, { scale: 1, opacity: 1, duration: 1.6, stagger: 0.12, paused: true, ease: 'power3.out' });
        playOnEnter(arcs.parentElement ?? arcs, tween);
      });

      // Parallaxe légère des médias, desktop uniquement
      gsap.matchMedia().add('(min-width: 1024px)', () => {
        gsap.utils.toArray<HTMLElement>('[data-parallax]').forEach((wrap) => {
          const inner = wrap.querySelector<HTMLElement>('[data-parallax-inner]');
          if (!inner) return;
          const amount = parseFloat(wrap.dataset.parallax || '10');
          gsap.fromTo(inner, { yPercent: -amount }, {
            yPercent: amount, ease: 'none',
            scrollTrigger: { trigger: wrap, start: 'top bottom', end: 'bottom top', scrub: true },
          });
        });
      });

      // Compteurs (section chiffres, quand elle sera activée)
      document.querySelectorAll<HTMLElement>('[data-count]').forEach((el) => {
        const target = parseFloat(el.dataset.count ?? '');
        if (Number.isNaN(target) || alreadySeen(el)) return;
        const obj = { v: 0 };
        const tween = gsap.to(obj, { v: target, duration: 1.8, ease: 'power3.out', paused: true, onUpdate: () => { el.textContent = Math.round(obj.v).toLocaleString('en-US'); } });
        playOnEnter(el, tween);
      });

      window.addEventListener('load', () => ScrollTrigger.refresh(), { once: true });
    } catch (err) {
      console.error('[motion] désactivé :', err);
      document.documentElement.classList.add('no-motion');
    }
  };
  if (document.fonts?.ready) document.fonts.ready.then(run); else run();
}
