export function getElemsArray(elemClassname: string): HTMLElement[] | null {
  return Array.from(document.querySelectorAll<HTMLElement>(elemClassname));
}

type Direction = "top" | "left";

export function getElemOffset(elem: HTMLElement, direction: Direction): number {
  const rect = elem.getBoundingClientRect();

  if (direction === "top") {
    return rect.top + window.scrollY;
  } else {
    return rect.left + window.scrollX;
  }
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
