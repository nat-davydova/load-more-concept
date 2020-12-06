import { PATH } from "./configs/path";

import { hideElemsInitially } from "./modules/hideElemsInitially";

(function() {
  const INIT_ELEMS_TO_SHOW = 3;
  const ELEMS_TO_REVEAL = 3;

  window.addEventListener("load", () => {
    hideElemsInitially();
  });
})();
