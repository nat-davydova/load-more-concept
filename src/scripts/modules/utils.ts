export function getElemsArray(elemClassname: string): HTMLElement[] | null {
  return Array.from(document.querySelectorAll<HTMLElement>(elemClassname));
}

export function hideElem(elem: HTMLElement): void {
  elem.hidden = true;
}

export function revealElem(elem: HTMLElement): void {
  elem.hidden = false;
}

export function revealElems(elems: HTMLElement[]): void {
  elems.forEach(elem => revealElem(elem));
}
