import {
  VElement
} from '../dom/VElement.js'

export function reactive<T>(
  value_in: any
): Reactive<T> {
  return new Reactive<T>(value_in);
}

type subscriberCallback = (value: any) => void;

export class Reactive<T> {
  private __value__: T;
  private handler: subscriberCallback;
  private elemsToUpdate: Array<VElement> = [];
  constructor(value_in: T) {
    this.__value__ = value_in;
  }

  get value(): T {
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
  ): void {
    this.elemsToUpdate.push(elem);
  }

  subscribe(_handler: subscriberCallback): void {
    this.handler = _handler;
  }

  valueOf(): T {
    return this.__value__;
  }
}
