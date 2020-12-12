import { PATH } from "../configs/path";

import { getElemsArray, hideElem, revealElems } from "./utils";

export function loadMore(elemsClassname: string, numToShow: number): void {
  const elems = getElemsArray(elemsClassname);

  if (elems) {
    const hiddenElems = elems.filter(elem => elem.hidden);

    const elemsToShow = hiddenElems.splice(0, numToShow);

    revealElems(elemsToShow);

    if (!hiddenElems.length) {
      const loadMoreBtn = document.querySelector<HTMLElement>(
        PATH.loadMore.btn
      );

      loadMoreBtn && hideElem(loadMoreBtn);
    }
  }
}
