export function reactive(value_in: any) {
  return new Reactive(value_in);
}

type subscriberCallback = (value: any) => void;

export class Reactive {
  __value__: any;
  handler: subscriberCallback;
  constructor(value_in: any) {
    this.__value__ = value_in;
  }

  get value() {
    return this.__value__;
  }

  set value(v: any) {
    this.__value__ = v;
    this.handler(this.__value__);
  }

  subscribe(_handler: subscriberCallback) {
    this.handler = _handler;
  }

  valueOf() {
    return this.__value__;
  }
}
