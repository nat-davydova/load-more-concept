import { PATH } from "../configs/path";

import type { Animations } from "./utils";

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

function applyAnimateCSS(
  elems: HTMLElement[],
  animationType: Animations,
  additionalAnimationClasses?: string[]
) {
  if (animationType) {
    elems.forEach(elem =>
      elem.classList.add(`animate__animated`, `animate__${animationType}`)
    );
  }

  if (additionalAnimationClasses && additionalAnimationClasses.length > 0) {
    elems.forEach(elem => {
      additionalAnimationClasses.forEach(classname => {
        elem.classList.add(classname);
      });
    });
  }
}

function revealHiddenElems(elems: HTMLElement[]): void {
  revealElems(elems);

  const elemToScrollTo = elems[0];

  initScrollingTop(elemToScrollTo);
}

type AnimationParams = {
  animationType?: Animations;
  additionalAnimationClasses?: string[];
};

export function loadMore(
  elemsClassname: string,
  numToShow: number,
  animationParams?: AnimationParams
): void {
  let animationType;
  let additionalAnimationClasses;

  if (animationParams) {
    animationType = animationParams.animationType;
    additionalAnimationClasses = animationParams.additionalAnimationClasses;
  }

  const elems = getElemsArray(elemsClassname);

  if (elems) {
    const hiddenElems = elems.filter(elem => elem.hidden);

    const elemsToShow = hiddenElems.splice(0, numToShow);

    animationType &&
      applyAnimateCSS(elemsToShow, animationType, additionalAnimationClasses);

    revealHiddenElems(elemsToShow);

    !hiddenElems.length && hideLoadMoreBtn();
  }
}
