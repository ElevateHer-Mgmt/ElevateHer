/**
 * Vidéos de fond : chargées seulement quand elles deviennent visibles, mises en pause hors écran.
 * Si l'utilisatrice préfère moins de mouvement, si la connexion est lente ou en mode économie de
 * données, la vidéo n'est jamais chargée : l'image d'attente (poster) reste affichée.
 */
export function initLazyVideos() {
  const videos = document.querySelectorAll<HTMLVideoElement>('video[data-lazy-video]');
  if (!videos.length) return;

  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches || new URLSearchParams(location.search).has('nomotion');
  const conn = (navigator as Navigator & { connection?: { saveData?: boolean; effectiveType?: string } }).connection;
  const slow = !!conn && (conn.saveData === true || /(^|-)(2g|3g)$/.test(conn.effectiveType ?? ''));

  if (reduced || slow) {
    // Repli : on remplace la vidéo par son image d'attente (ou on la laisse vide si aucune)
    videos.forEach((video) => {
      const poster = video.getAttribute('poster');
      if (!poster) { video.remove(); return; }
      const img = document.createElement('img');
      img.src = poster;
      img.alt = '';
      img.decoding = 'async';
      img.className = video.className;
      if (video.hasAttribute('data-parallax-inner')) img.setAttribute('data-parallax-inner', '');
      video.replaceWith(img);
    });
    return;
  }

  const load = (video: HTMLVideoElement) => {
    if (video.dataset.loaded) return;
    video.querySelectorAll<HTMLSourceElement>('source[data-src]').forEach((s) => { s.src = s.dataset.src!; s.removeAttribute('data-src'); });
    video.dataset.loaded = 'true';
    video.load();
  };

  // Bouton pause / lecture (accessibilité : contenu en mouvement contrôlable)
  videos.forEach((video) => {
    const btn = video.parentElement?.querySelector<HTMLButtonElement>('[data-media-pause]');
    if (!btn) return;
    const iconPause = btn.querySelector<SVGElement>('[data-icon-pause]');
    const iconPlay = btn.querySelector<SVGElement>('[data-icon-play]');
    const render = () => {
      const paused = video.dataset.userPaused === 'true';
      btn.setAttribute('aria-pressed', String(paused));
      btn.setAttribute('aria-label', paused ? 'Play video' : 'Pause video');
      iconPause?.classList.toggle('hidden', paused);
      iconPlay?.classList.toggle('hidden', !paused);
    };
    btn.addEventListener('click', () => {
      if (video.dataset.userPaused === 'true') { delete video.dataset.userPaused; load(video); video.play().catch(() => {}); }
      else { video.dataset.userPaused = 'true'; video.pause(); }
      render();
    });
    render();
  });

  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const video = entry.target as HTMLVideoElement;
      if (entry.isIntersecting) {
        if (video.dataset.userPaused === 'true') return;
        load(video);
        video.play().catch(() => { /* lecture auto refusée : le poster reste visible */ });
      } else if (!video.paused) {
        video.pause();
      }
    });
  }, { rootMargin: '200px 0px' });

  videos.forEach((v) => io.observe(v));
}
