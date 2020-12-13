import { PATH } from "./configs/path";

import { showElemsInitially, loadMore, loadMoreCounter } from "./modules";

(function() {
  const ELEMS = PATH.cardItem;
  const NUM_INIT_VISIBLE_ELEMS = 3;
  const NUM_ELEMS_TO_REVEAL = 6;
  const ADD_COUNTER_TO_LOAD_MORE_BTN = true;
  const ANIMATE_CSS_ANIMATION_TYPE = "fadeInBottomLeft";
  // here you could pass any utility classes from animate.css (like delays etc) in animate_className way
  const ANIMATE_CSS_ADDITIONAL_CLASSES: string[] = [];

  window.addEventListener("load", () => {
    showElemsInitially(ELEMS, NUM_INIT_VISIBLE_ELEMS);
    ADD_COUNTER_TO_LOAD_MORE_BTN && loadMoreCounter(ELEMS);
  });

  document.addEventListener("click", e => {
    const target = e.target as HTMLElement;

    if (target.closest(PATH.loadMore.btn)) {
      loadMore(
        ELEMS,
        NUM_ELEMS_TO_REVEAL,
        ANIMATE_CSS_ANIMATION_TYPE,
        ANIMATE_CSS_ADDITIONAL_CLASSES
      );
      ADD_COUNTER_TO_LOAD_MORE_BTN && loadMoreCounter(ELEMS);
    }
  });
})();
