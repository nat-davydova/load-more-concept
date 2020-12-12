import { PATH } from "./configs/path";

import { showElemsInitially, loadMore, loadMoreCounter } from "./modules";

(function() {
  const INIT_ELEMS_TO_SHOW = 3;
  const ELEMS_TO_REVEAL = 6;
  const ADD_COUNTER_TO_LOAD_MORE_BTN = true;

  window.addEventListener("load", () => {
    showElemsInitially(PATH.cardItem, INIT_ELEMS_TO_SHOW);
    ADD_COUNTER_TO_LOAD_MORE_BTN && loadMoreCounter();
  });

  document.addEventListener("click", e => {
    const target = e.target as HTMLElement;

    if (target.closest(PATH.loadMore.btn)) {
      loadMore(PATH.cardItem, ELEMS_TO_REVEAL);
      ADD_COUNTER_TO_LOAD_MORE_BTN && loadMoreCounter();
    }
  });
})();
