import { VNode, VNodeChildrenType} from './VNode.js'
import {
  isArray, 
  isString
} from '../utils/is.js'

export function render(vnode: VNode, root: Node | HTMLElement) {
  if(vnode) {
    patch(null, vnode, root)
  }
}

const patch = (
  oldNode: VNode | VNodeChildrenType, 
  newNode: VNode | VNodeChildrenType, 
  container: HTMLElement | Node
) => {
  renderElement(oldNode as VNode, newNode as VNode, container);
}

const renderElement = (
  oldNode: VNode, 
  newNode: VNode, 
  container: HTMLElement | Node
) => {
  if(oldNode === null) {
    mountElement(newNode, container);
  }
}

const mountElement = (vnode: VNode, domContainer: HTMLElement | Node) => {
  let domEl = document.createElement(vnode._elementName);
  if(isString(vnode._children)) {
    domEl.textContent = vnode._children as string
  } else if (isArray(vnode._children)) {
    mountChildren(vnode._children as VNodeChildrenType, domEl);
  }
  domContainer.appendChild(domEl)
}

const mountChildren = (
  children: VNodeChildrenType, 
  container: HTMLElement | Node
) => {
  for(let i = 0; i < children.length; i++) {
    patch(null, children[i] as VNodeChildrenType, container);
  }
}