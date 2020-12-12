export function revealElem(elem: HTMLElement): void {
  elem.hidden = false;
}

export function revealElems(elems: HTMLElement[]): void {
  elems.forEach(elem => revealElem(elem));
}
