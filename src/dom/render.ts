import {
  VNode,
  VNodeChildrenType,
  VNodeArrayType
} from './VNode.js'
import {
  isArray,
  isString,
  isNum
} from '../utils/is.js'
import {
  childTypes
} from '../utils/childTypes.js'

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
  if(oldNode === newNode) return;
  mountElement(newNode, container);
  unMount(oldNode, container);
}

const mountElement = (vnode: VNode, domContainer: HTMLElement | Node) => {
  vnode.domEl = document.createElement(vnode._elementName);
  
  if (vnode._childType & childTypes.TEXT) {
    vnode.domEl.appendChild(document.createTextNode(vnode._children.toString()))
  } else if (vnode._childType & childTypes.ARRAY) {
    mountChildren(vnode._children as VNodeChildrenType, vnode.domEl);
  }
  
  for(const i of Object.keys(vnode._properties)) {
    (vnode.domEl as HTMLElement).setAttribute(i, vnode._properties[i])
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

const unMount = (
  elToRemove: VNode,
  container: HTMLElement | Node
) => {
  if(!elToRemove || !elToRemove.domEl) return;
  if(elToRemove._childType & childTypes.ARRAY) {
    (elToRemove._children as VNodeArrayType).forEach((node) => {
      unMount(node as VNode, elToRemove.domEl)
    })
  }
  container.removeChild(elToRemove.domEl);
  elToRemove.domEl = null;
}