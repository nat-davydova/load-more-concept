import { PATH } from "../configs/path";

import { revealElem } from "./utils";

const counter = document.querySelector<HTMLElement>(PATH.loadMore.counter);

function showCounterElem(): void {
  counter && revealElem(counter);
}

function getCounterValue(): number {
  const hiddenElems = document.querySelectorAll<HTMLElement>(
    `${PATH.cardItem}[hidden]`
  );

  return hiddenElems.length;
}

function setCounterValue(countVal: number): void {
  counter && (counter.textContent = countVal.toString());
}

export function loadMoreCounter(): void {
  if (counter) {
    counter.hidden && showCounterElem();
    const counterValue = getCounterValue();
    setCounterValue(counterValue);
  }
}
