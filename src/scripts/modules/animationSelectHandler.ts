import { getElemsArray, hideElems, revealElem } from "./utils";
import { showElemsInitially } from "./showElemsInitially";
import { PATH } from "../configs/path";
import { loadMoreCounter } from "./loadMoreCounter";

function hideOpenedCards(elems: HTMLElement[]) {
  hideElems(elems);
}

function removeAnimationClasses(elems: HTMLElement[]) {
  const animationClassRegex = /animate/gi;

  elems.forEach(elem => {
    const classList = elem.classList;

    classList.forEach(className => {
      if (className.match(animationClassRegex)) {
        elem.classList.remove(className);
      }
    });
  });
}

function returnToInitState(elemsClassname: string, numToShowInitially: number) {
  const elems = getElemsArray(elemsClassname);

  if (elems) {
    hideOpenedCards(elems);
    showElemsInitially(elemsClassname, numToShowInitially);
    removeAnimationClasses(elems);
  }
}

export function animationSelectHandler(
  elemsClassname: string,
  numToShowInitially: number,
  isBtnCounter: boolean
) {
  returnToInitState(elemsClassname, numToShowInitially);

  const loadMoreBtn = document.querySelector<HTMLElement>(PATH.loadMore.btn);
  loadMoreBtn && revealElem(loadMoreBtn);

  isBtnCounter && loadMoreCounter(elemsClassname);
}
