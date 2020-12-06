import { PATH } from "./configs/path";

import { showElemsInitially } from "./modules/showElemsInitially";

(function() {
  const INIT_ELEMS_TO_SHOW = 3;
  const ELEMS_TO_REVEAL = 3;

  window.addEventListener("load", () => {
    showElemsInitially(PATH.cardItem, INIT_ELEMS_TO_SHOW);
  });

  document.addEventListener("click", e => {
    const target = e.target as HTMLElement;

    if (target.closest(PATH.loadMoreBtn)) {
      console.log("clicked");
    }
  });
})();
