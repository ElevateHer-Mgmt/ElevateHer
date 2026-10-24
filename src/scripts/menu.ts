/** Header : état « scrollé » et menu mobile en volet latéral (ouverture et fermeture animées). */
export function initMenu() {
  const header = document.querySelector<HTMLElement>('[data-header]');
  if (header) {
    const onScroll = () => header.toggleAttribute('data-scrolled', window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }
  const btn = document.querySelector<HTMLButtonElement>('[data-menu-toggle]');
  const menu = document.querySelector<HTMLElement>('[data-menu]');
  if (!btn || !menu) return;
  const panel = menu.querySelector<HTMLElement>('.menu-panel');
  const outside = [...document.querySelectorAll<HTMLElement>('main, footer, [data-header] > .header-pill')];
  const reduced = () => document.documentElement.classList.contains('reduced');
  let closeToken = 0;

  const open = () => {
    closeToken++;
    menu.hidden = false;
    void menu.offsetWidth; // force le rendu de l'état fermé avant de lancer la transition
    menu.setAttribute('data-open', '');
    btn.setAttribute('aria-expanded', 'true');
    document.documentElement.style.overflow = 'hidden';
    outside.forEach((el) => el.setAttribute('inert', '')); // le focus reste dans le menu
    menu.querySelector<HTMLElement>('a, button')?.focus();
  };

  const close = () => {
    const token = ++closeToken;
    menu.removeAttribute('data-open');
    btn.setAttribute('aria-expanded', 'false');
    document.documentElement.style.overflow = '';
    outside.forEach((el) => el.removeAttribute('inert'));
    const done = () => { if (token === closeToken && !menu.hasAttribute('data-open')) menu.hidden = true; };
    if (!panel || reduced()) { done(); return; }
    panel.addEventListener('transitionend', done, { once: true });
    setTimeout(done, 700); // filet de sécurité si la transition ne se déclenche pas
  };

  btn.addEventListener('click', () => (menu.hasAttribute('data-open') ? close() : open()));
  menu.querySelectorAll<HTMLElement>('a, [data-menu-close]').forEach((el) => el.addEventListener('click', () => close()));
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && menu.hasAttribute('data-open')) { close(); btn.focus(); } });
}
