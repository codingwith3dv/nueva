import {
  mainProcessQueue
} from './processQueue.js'
import {
  VElement
} from '../dom/VElement.js'

abstract class ComponentBluePrint {
  abstract render(): VElement;
}

export {
  ComponentBluePrint as Component
}