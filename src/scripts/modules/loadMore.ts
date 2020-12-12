import { PATH } from "../configs/path";

import { getElemsArray, getElemOffset, hideElem, revealElems } from "./utils";

function hideLoadMoreBtn(): void {
  const loadMoreBtn = document.querySelector<HTMLElement>(PATH.loadMore.btn);

  loadMoreBtn && hideElem(loadMoreBtn);
}

function revealHiddenElems(elems: HTMLElement[]): void {
  revealElems(elems);

  const elem1 = elems[0];

  const offsetTop = getElemOffset(elem1, "top");

  window.scrollTo({ top: offsetTop, behavior: "smooth" });
}

export function loadMore(elemsClassname: string, numToShow: number): void {
  const elems = getElemsArray(elemsClassname);

  if (elems) {
    const hiddenElems = elems.filter(elem => elem.hidden);

    const elemsToShow = hiddenElems.splice(0, numToShow);

    revealHiddenElems(elemsToShow);

    !hiddenElems.length && hideLoadMoreBtn();
  }
}
