import {
  VElement
} from '../dom/VElement.js'
import {
  Reactive
} from '../core/reactive.js'

export type createElemFnType = (
  type_OrVElement: any,
  ...child: any
) => VElement
export type setupChildrenFnType = (
  child: any,
  elem: VElement
) => void
export type siblingReferenceFnType = (
  node: any
) => unknown
export type rerenderFnType = (
  elem: Array < VElement > ,
  newData: Reactive < unknown >
) => void
export type renderFnType = (
  elemToRender: VElement,
  container: Node
) => VElement
export type renderChildrenFnType = (
  children: Array < VElement | string > | string,
  container: Node
) => void