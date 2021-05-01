export function reactive(value_in: any) {
  return new Reactive(value_in)
}

class Reactive {
  __value__: any;
  constructor(value_in: any ) {
    this.__value__ = value_in
  }
  
  get value() {
    return this.__value__;
  }
  
  set value(v: any) {
    this.__value__ = v;
  }
  
  valueOf() {
    return this.__value__;
  }
  
}