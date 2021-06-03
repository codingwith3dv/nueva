import {
  reactive,
  Reactive
} from '../core/reactive.js'
import {
  VElement
} from '../dom/VElement.js'

abstract class ComponentBluePrint {
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
  rerender(
  ): void {
    console.log('Rerender');
  }
}

export {
  ComponentBluePrint as Component
}