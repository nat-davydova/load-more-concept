import { getElemsArray, hideElems, revealElem } from "./utils";
import { showElemsInitially } from "./showElemsInitially";
import { PATH } from "../configs/path";
import { loadMoreCounter } from "./loadMoreCounter";

function hideOpenedCards(elemsClassname: string) {
  const elems = getElemsArray(elemsClassname);
  elems && hideElems(elems);
}

function removeAnimationClasses(elemsClassname: string) {
  const elems = getElemsArray(elemsClassname);
  const animationClassRegex = /animate/gi;

  elems?.forEach(elem => {
    const classList = elem.classList;

    classList.forEach(className => {
      if (className.match(animationClassRegex)) {
        elem.classList.remove(className);
      }
    });
  });
}

export function animationSelectHandler(
  elemsClassname: string,
  numToShowInitially: number,
  isBtnCounter: boolean
) {
  hideOpenedCards(elemsClassname);
  showElemsInitially(elemsClassname, numToShowInitially);
  removeAnimationClasses(elemsClassname);

  const loadMoreBtn = document.querySelector<HTMLElement>(PATH.loadMore.btn);
  loadMoreBtn && revealElem(loadMoreBtn);

  isBtnCounter && loadMoreCounter(elemsClassname);
}
