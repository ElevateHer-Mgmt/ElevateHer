/**
 * Boîte de vue du logo vectoriel, lue dans le fichier SVG pour rester juste si le fichier change.
 * - logoViewBox : celle du fichier (origine non nulle), utilisée par le <symbol> du sprite.
 * - logoOuterViewBox : même taille mais origine 0 0, pour le <svg> qui référence le symbole.
 *   Sans cela, l'origine serait appliquée deux fois et le bord gauche du logo serait rogné.
 */
import raw from '../assets/elevate-her-wordmark.min.svg?raw';
export const logoViewBox = raw.match(/viewBox="([^"]+)"/)?.[1] ?? '0 0 2669 1640';
const [, , w, h] = logoViewBox.split(/\s+/);
export const logoOuterViewBox = `0 0 ${w} ${h}`;
