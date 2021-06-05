import {
  reactive,
  Reactive
} from '../core/reactive.js'
import {
  VElement
} from '../dom/VElement.js'

abstract class Component {
  abstract render(): VElement;
  state: any;
  createStateFull<T>(
    value: T
  ): Reactive<T> {
    return reactive<T>(value);
  };
}

export {
  Component
}