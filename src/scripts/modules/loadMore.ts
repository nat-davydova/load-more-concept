import { PATH } from "../configs/path";

import {
  getElemsArray,
  initScrollingTop,
  hideElem,
  revealElems
} from "./utils";

function hideLoadMoreBtn(): void {
  const loadMoreBtn = document.querySelector<HTMLElement>(PATH.loadMore.btn);

  loadMoreBtn && hideElem(loadMoreBtn);
}

function applyAnimateCSS(elems: HTMLElement[], animationType: string) {
  if (animationType) {
    elems.forEach(elem =>
      elem.classList.add(`animate__animated`, `animate__${animationType}`)
    );
  }
}

function revealHiddenElems(elems: HTMLElement[]): void {
  revealElems(elems);

  const elemToScrollTo = elems[0];

  initScrollingTop(elemToScrollTo);
}

export function loadMore(
  elemsClassname: string,
  numToShow: number,
  animationType?: string
): void {
  const elems = getElemsArray(elemsClassname);

  if (elems) {
    const hiddenElems = elems.filter(elem => elem.hidden);

    const elemsToShow = hiddenElems.splice(0, numToShow);

    animationType && applyAnimateCSS(elemsToShow, animationType);

    revealHiddenElems(elemsToShow);

    !hiddenElems.length && hideLoadMoreBtn();
  }
}
