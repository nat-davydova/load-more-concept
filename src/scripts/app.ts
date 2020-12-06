import { PATH } from "./configs/path";

import { showElemsInitially } from "./modules/showElemsInitially";
import { loadMore } from "./modules/loadMore";

(function() {
  const INIT_ELEMS_TO_SHOW = 3;
  const ELEMS_TO_REVEAL = 3;

  window.addEventListener("load", () => {
    showElemsInitially(PATH.cardItem, INIT_ELEMS_TO_SHOW);
  });

  document.addEventListener("click", e => {
    const target = e.target as HTMLElement;

    if (target.closest(PATH.loadMoreBtn)) {
      loadMore(PATH.cardItem, ELEMS_TO_REVEAL);
    }
  });
})();
