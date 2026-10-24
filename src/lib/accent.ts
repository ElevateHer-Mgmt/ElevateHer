/** Transforme `*mot*` en <em>mot</em> (mot accentué en italique rose dans les titres). */
export function accent(text: string): string {
  return text.replace(/\*([^*]+)\*/g, '<em>$1</em>');
}
