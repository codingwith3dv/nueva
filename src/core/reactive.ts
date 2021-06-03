import {
  Component
} from '../dom-core/component.js'

export function reactive<T>(component: Component, value_in: any) {
  return new Reactive<T>(component, value_in);
}

type subscriberCallback = (value: any) => void;

export class Reactive<T> {
  __value__: T;
  handler: subscriberCallback;
  component: Component;
  constructor(component_in: Component, value_in: T) {
    this.__value__ = value_in;
    this.component = component_in;
  }

  get value() {
    return this.__value__;
  }

  set value(v: T) {
    this.__value__ = v;
    if(this.handler) {
      this.handler(this.__value__);
    }
    this.component?.rerender();
  }

  subscribe(_handler: subscriberCallback) {
    this.handler = _handler;
  }

  valueOf() {
    return this.__value__;
  }
}
