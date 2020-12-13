import { PATH } from "./configs/path";

import { showElemsInitially, loadMore, loadMoreCounter, animationSelectHandler } from "./modules";
import type { Animations } from "./modules/utils";

(function() {
  const ELEMS = PATH.cardItem;
  const NUM_INIT_VISIBLE_ELEMS = 3;
  const NUM_ELEMS_TO_REVEAL = 6;
  const ADD_COUNTER_TO_LOAD_MORE_BTN = true;
  // pass here an animation type from animate.css in 'fadeIn' or 'slideDown' way
  // !!! CHANGE IT TO CONST IN YOUR CODE
  let ANIMATE_CSS_ANIMATION_TYPE: Animations = "";
  // here you could pass any utility classes from animate.css (like delays etc) in animate_className way
  // DON'T PASS animate_animated here, it's added by default
  const ANIMATE_CSS_ADDITIONAL_CLASSES: string[] = [];

  window.addEventListener("load", () => {
    showElemsInitially(ELEMS, NUM_INIT_VISIBLE_ELEMS);
    ADD_COUNTER_TO_LOAD_MORE_BTN && loadMoreCounter(ELEMS);
  });

  // YOU DON'T NEED IT IN YOUR CODE
  const animationsSelectList = document.querySelector<HTMLSelectElement>(PATH.animationsSelect)!;

  animationsSelectList.addEventListener('change', e => {
    const target = e.target as HTMLSelectElement;
    const pickedAnimation = target.value as Animations

    animationSelectHandler(ELEMS, NUM_INIT_VISIBLE_ELEMS, ADD_COUNTER_TO_LOAD_MORE_BTN);

    ANIMATE_CSS_ANIMATION_TYPE = pickedAnimation
  })

  document.addEventListener("click", e => {
    const target = e.target as HTMLElement;

    if (target.closest(PATH.loadMore.btn)) {
      loadMore(ELEMS, NUM_ELEMS_TO_REVEAL, {
        animationType: ANIMATE_CSS_ANIMATION_TYPE,
        additionalAnimationClasses: ANIMATE_CSS_ADDITIONAL_CLASSES
      });
      ADD_COUNTER_TO_LOAD_MORE_BTN && loadMoreCounter(ELEMS);
    }
  });
})();
