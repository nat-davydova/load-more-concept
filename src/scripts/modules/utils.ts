export function getElemsArray(elemClassname: string): HTMLElement[] | null {
  return Array.from(document.querySelectorAll<HTMLElement>(elemClassname));
}

export function getElemTopOffset(elem: HTMLElement): number {
  const rect = elem.getBoundingClientRect();

  return rect.top + window.scrollY;
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

export function initScrollingTop(elemToScrollTo: HTMLElement): void {
  const offsetTop = getElemTopOffset(elemToScrollTo);

  window.scrollTo({ top: offsetTop, behavior: "smooth" });
}
