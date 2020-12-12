import { PATH } from "../configs/path";

import { getElemsArray, revealElem } from "./utils";

const counter = document.querySelector<HTMLElement>(PATH.loadMore.counter);

function showCounterElem(): void {
  counter && revealElem(counter);
}

function getCounterValue(elemsClassname: string): number | null {
  const elems = getElemsArray(elemsClassname);

  const hiddenElems = elems && elems.filter(elem => elem.hidden);

  return hiddenElems ? hiddenElems.length : null;
}

function setCounterValue(countVal: number): void {
  counter && (counter.textContent = countVal.toString());
}

export function loadMoreCounter(elemsClassname: string): void {
  if (counter) {
    counter.hidden && showCounterElem();
    const counterValue = getCounterValue(elemsClassname);
    counterValue !== null && setCounterValue(counterValue);
  }
}
