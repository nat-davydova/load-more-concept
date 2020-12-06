import { revealElems } from "./utils";

export function loadMore(elemsClassname: string, numToShow: number): void {
  const elems: HTMLElement[] = Array.from(
    document.querySelectorAll(elemsClassname)
  );

  const hiddenElems = elems.filter(elem => elem.hidden);

  const elemsToShow = hiddenElems.splice(0, numToShow);

  revealElems(elemsToShow);
}
