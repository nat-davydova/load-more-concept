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

type Animations =
  | "bounce"
  | "flash"
  | "pulse"
  | "rubberBand"
  | "shakeX"
  | "shakeY"
  | "headShake"
  | "swing"
  | "tada"
  | "wobble"
  | "jello"
  | "heartBeat"
  | "backInLeft"
  | "backInRight"
  | "bounceIn"
  | "bounceInLeft"
  | "bounceInRight"
  | "fadeIn"
  | "fadeInDown"
  | "fadeInUp"
  | "fadeInLeft"
  | "fadeInLeftBig"
  | "fadeInRight"
  | "fadeInRightBig"
  | "flipInX"
  | "flipInY"
  | "lightSpeedInRight"
  | "lightSpeedInLeft"
  | "rotateInDownLeft"
  | "rotateInDownRight"
  | "rotateInUpLeft"
  | "rotateInUpRight"
  | "jackInTheBox"
  | "rollIn"
  | "zoomIn"
  | "zoomInDown"
  | "zoomInUp"
  | "zoomInLeft"
  | "zoomInRight"
  | "slideInDown"
  | "slideInLeft"
  | "slideInRight"
  | "slideInUp";

function applyAnimateCSS(
  elems: HTMLElement[],
  animationType: string,
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
  animationType?: string;
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
