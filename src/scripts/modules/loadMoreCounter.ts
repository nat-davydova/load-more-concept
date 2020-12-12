import { PATH } from "../configs/path";

import { revealElem } from "./utils";

const counter = document.querySelector<HTMLElement>(PATH.loadMore.counter);

function showCounterElem() {
  counter && revealElem(counter);
}

export function loadMoreCounter(): void {
  showCounterElem();
}
