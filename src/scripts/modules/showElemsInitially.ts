import { getElemsArray, revealElems } from "./utils";

export function showElemsInitially(
  elemsClassname: string,
  numToShowInitially: number
): void {
  const elems = getElemsArray(elemsClassname);

  if (elems) {
    const elemsToShow = elems.splice(0, numToShowInitially);

    revealElems(elemsToShow);
  }
}
