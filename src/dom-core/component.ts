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
  createStateFull(
    value: any
  ): Reactive {
    return null;
  };
  rerender(
  ): void {
    
  }
}

export {
  ComponentBluePrint as Component
}