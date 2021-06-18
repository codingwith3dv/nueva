import {
  VElement,
  VElementPropType
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
  elem: Set < VElement > ,
  newData: Reactive < unknown >
) => void
export type renderFnType = (
  elemToRender: VElement,
  container: HTMLElement
) => VElement
export type renderChildrenFnType = (
  container: HTMLElement,
  children: Array < VElement | string > | string,
  properties: Array<VElementPropType>
) => void