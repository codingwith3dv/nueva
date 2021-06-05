import {
  VElement
} from '../dom/VElement.js'

export function reactive<T>(value_in: any) {
  return new Reactive<T>(value_in);
}

type subscriberCallback = (value: any) => void;

export class Reactive<T> {
  __value__: T;
  handler: subscriberCallback;
  elemsToUpdate: Array<VElement> = [];
  constructor(value_in: T) {
    this.__value__ = value_in;
  }

  get value() {
    return this.__value__;
  }

  set value(v: T) {
    this.__value__ = v;
    if(this.handler) {
      this.handler(this.__value__);
    }
  }
  
  pushElem(
    elem: VElement
  ) {
    this.elemsToUpdate.push(elem);
  }

  subscribe(_handler: subscriberCallback) {
    this.handler = _handler;
  }

  valueOf() {
    return this.__value__;
  }
}
