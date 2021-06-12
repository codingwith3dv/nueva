import {
  VElement,
  rerender
} from '../dom/VElement.js'
import {
  hasValueChanged
} from '../utils/utils.js'

export function reactive<T>(
  value_in: T
): Reactive<T> {
  return new Reactive<T>(value_in);
}

type subscriberCallback = (value: unknown) => void;

export class Reactive<T> {
  private __value__: T;
  private __old_value__: T;
  private handlers: subscriberCallback[];
  private elemsToUpdate: Set<VElement> = new Set<VElement>();
  constructor(value_in: T) {
    this.__old_value__ = undefined;
    this.__value__ = value_in;
  }

  get value(): T {
    return this.__value__;
  }

  set value(v: T) {
    this.__old_value__ = this.__value__;
    this.__value__ = v;
    
    if(hasValueChanged(
      this.__old_value__, this.__value__
    )) {
      if(this.handlers) {
        this.handlers.forEach((handler) => {
          handler(this.__value__);
        });
      }
      rerender(this.elemsToUpdate, this);
    }
  }
  
  pushElem(
    elem: VElement
  ): void {
    this.elemsToUpdate.add(elem);
  }

  subscribe(_handlers: subscriberCallback): void {
    this.handlers.push(_handlers);
  }

  valueOf(): T {
    return this.__value__;
  }
}
