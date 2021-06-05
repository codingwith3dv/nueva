import {
  isObject,
  isString
} from '../utils/is.js';
import {
  childTypes
} from '../utils/childTypes.js';
import {
  Component
} from '../dom-core/component.js'
import {
  Reactive
} from '../core/reactive.js'
import {
  mainProcessQueue
} from '../dom-core/processQueue.js'
type VElementType = |
  VElement |
  string |
  number |
  boolean;

type VElementChildrenType = Array < any > ;

interface VElement {
  type_: string | object;
  children: VElementChildrenType;
  isNode: boolean;
  parent: VElement;
  childType: childTypes;
}

const setChildType = (
  elem: VElement
) => {
  elem.childType = childTypes.ARRAY;
  return elem;
};

function createElem(
  type_OrVElement: any,
  ...child: any
) {
  if(typeof type_OrVElement.render === "function") {
    let node = type_OrVElement.render();
    setupChildren(child, node as VElement);
    return node;
  } else if(type_OrVElement.isNode) {
    let node = type_OrVElement;
    setupChildren(child, node as VElement);
    return node;
  }
  let newElem: VElement = {
    type_: (type_OrVElement as string),
    isNode: true,
    children: null,
    parent: null,
    childType: null
  };
  setupChildren(child, newElem);
  return newElem;
};

const setupChildren = (
  child: any,
  elem: VElement
) => {
  if (child && child.length) {
    if(!elem.children) elem.children = [];
    let len = child?.length - 1;
    for (var i = 0; i <= len; i++) {
      if(child[i] instanceof Reactive) {
        child[i]?.pushElem(elem);
        child[i] = child[i]?.value;
      }
      const child_: any = isObject(child[i]) ?
        setChildType(child[i]) :
        new String(child[i]);
      child_.parent = elem;
      elem.children.push(child_);
    }
    elem.childType = childTypes.ARRAY;
  }
}

const nextSibling = (
  node: any
) => {
  const parent = node?.parent;
  if (!parent) {
    return null;
  }
  const i = parent.children.indexOf(node);
  return parent.children[i + 1] || null;
};
const prevSibling = (
  node: any
) => {
  const parent = node?.parent;
  if (!parent) {
    return null;
  }
  const i = parent.children.indexOf(node);
  return parent.children[i - 1] || null;
};
const rerender = (
  elem: Array < VElement >
) => {
  mainProcessQueue.enqueue(elem);
}
export {
  VElement,
  createElem,
  prevSibling,
  nextSibling,
  rerender
}