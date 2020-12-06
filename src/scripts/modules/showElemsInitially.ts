function revealElems(elems: HTMLElement[]): void {
  elems.forEach(elem => (elem.hidden = false));
}

export function showElemsInitially(
  elemsClassname: string,
  numToShowInitially: number
): void {
  const elems: HTMLElement[] = Array.from(
    document.querySelectorAll(elemsClassname)
  );

  const elemsToShow = elems.splice(0, numToShowInitially);

  revealElems(elemsToShow);
}
