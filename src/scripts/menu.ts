/** Header : état « scrollé » et menu mobile plein écran. */
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
  const outside = [...document.querySelectorAll<HTMLElement>('main, footer, [data-header] > .header-pill')];
  const set = (open: boolean) => {
    menu.hidden = !open;
    btn.setAttribute('aria-expanded', String(open));
    document.documentElement.style.overflow = open ? 'hidden' : '';
    outside.forEach((el) => el.toggleAttribute('inert', open)); // le focus reste dans le menu
    if (open) menu.querySelector<HTMLElement>('a, button')?.focus();
  };
  btn.addEventListener('click', () => set(menu.hidden));
  menu.querySelectorAll<HTMLElement>('a, [data-menu-close]').forEach((el) => el.addEventListener('click', () => set(false)));
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && !menu.hidden) { set(false); btn.focus(); } });
}
