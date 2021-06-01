import {
  mainProcessQueue
} from './processQueue.js'
import {
  VElement
} from '../dom/VElement.js'

interface ComponentBluePrint {
  render(): VElement;
}

export {
  ComponentBluePrint as Component
}