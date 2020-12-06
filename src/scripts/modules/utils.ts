export function revealElems(elems: HTMLElement[]): void {
  elems.forEach(elem => (elem.hidden = false));
}
