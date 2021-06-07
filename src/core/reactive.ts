import {
  VElement,
  rerender
} from '../dom/VElement.js'

export function reactive<T>(
  value_in: any
): Reactive<T> {
  return new Reactive<T>(value_in);
}

type subscriberCallback = (value: any) => void;

export class Reactive<T> {
  private __value__: T;
  private handlers: subscriberCallback[];
  private elemsToUpdate: Array<VElement> = [];
  constructor(value_in: T) {
    this.__value__ = value_in;
  }

  get value(): T {
    return this.__value__;
  }

  set value(v: T) {
    this.__value__ = v;
    if(this.handlers) {
      this.handlers.forEach((handler) => {
        handler(this.__value__);
      });
    }
    rerender(this.elemsToUpdate);
  }
  
  pushElem(
    elem: VElement
  ): void {
    this.elemsToUpdate.push(elem);
  }

  subscribe(_handlers: subscriberCallback): void {
    this.handlers.push(_handlers);
  }

  valueOf(): T {
    return this.__value__;
  }
}
