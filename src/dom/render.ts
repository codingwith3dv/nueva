import {
  VNode,
  VNodeChildrenType
} from './VNode.js'
import {
  isArray,
  isString,
  isNum
} from '../utils/is.js'

let rootVNode: VNode;

export function render(vnode: VNode, root: Node | HTMLElement) {
  if (vnode) {
    patch(rootVNode || null, vnode, root)
  } else {

  }
  rootVNode = vnode;
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
  if (!oldNode) {
    mountElement(newNode, container);
  } else {
    patchElement(oldNode, newNode, container)
  }
}

const patchElement = (
  oldNode: VNode,
  newNode: VNode,
  container: HTMLElement | Node
) => {
  
}

const mountElement = (vnode: VNode, domContainer: HTMLElement | Node) => {
  vnode.domEl = document.createElement(vnode._elementName);
  
  if (isString(vnode._children)) {
    vnode.domEl.textContent = vnode._children as string
  } else if (isArray(vnode._children)) {
    mountChildren(vnode._children as VNodeChildrenType, vnode.domEl);
  }
  domContainer.appendChild(vnode.domEl)
}

const mountChildren = (
  children: VNodeChildrenType,
  container: HTMLElement | Node
) => {
  for (let i = 0; i < children.length; i++) {
    patch(null, children[i] as VNodeChildrenType, container);
  }
}