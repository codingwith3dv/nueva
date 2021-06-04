import {
  reactive,
  Reactive
} from '../core/reactive.js'
import {
  VElement
} from '../dom/VElement.js'
import {
  mainProcessQueue
} from './processQueue.js'

const rerender = (
  component: Component
) => {
  mainProcessQueue.enqueue(component);
}

abstract class Component {
  abstract render(): VElement;
  state: any;
  private oldTree: VElement;
  setOldTree(
    node: VElement
  ): void {
    this.oldTree = node;
  }
  createStateFull<T>(
    value: T
  ): Reactive<T> {
    return reactive<T>(this, value);
  };
}

export {
  Component,
  rerender
}