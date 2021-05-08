import { VNode, VNodeChildrenType} from './VNode.js'
import {
  isArray, 
  isString
} from '../utils/is.js'

export function render(vnode: VNode, root: Node | HTMLElement) {

  let newNode = document.createElement(vnode._elementName) as HTMLElement;
  root.appendChild(newNode)
  
  return newNode;
}