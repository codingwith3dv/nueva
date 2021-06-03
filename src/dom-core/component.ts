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
  createStateFull(
    value: any
  ): Reactive {
    return null;
  };
  private rerender(
  ): void {
    
  }
}

export {
  ComponentBluePrint as Component
}