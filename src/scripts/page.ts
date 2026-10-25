/** Initialisation commune à toutes les pages. */
import { initMenu } from './menu';
import { initMotion } from './motion';
import { initVisuals } from './visuals';
import { initLazyVideos } from './media';

export function initPage() {
  initMenu();
  initMotion();
  initVisuals();
  initLazyVideos();
}
