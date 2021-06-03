import {
  Component
} from '../dom-core/component.js'

export function reactive(component: Component, value_in: any) {
  return new Reactive(component, value_in);
}

type subscriberCallback = (value: any) => void;

export class Reactive {
  __value__: any;
  handler: subscriberCallback;
  component: Component;
  constructor(component_in: Component, value_in: any) {
    this.__value__ = value_in;
    this.component = component_in;
  }

  get value() {
    return this.__value__;
  }

  set value(v: any) {
    this.__value__ = v;
    this.handler(this.__value__);
    this.component.rerender();
  }

  subscribe(_handler: subscriberCallback) {
    this.handler = _handler;
  }

  valueOf() {
    return this.__value__;
  }
}
