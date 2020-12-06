import { revealElems } from "./utils";

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
