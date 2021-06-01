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
type VElementType = |
  VElement |
  string |
  number |
  boolean;

type VElementChildrenType = Array < any > ;

export interface VElement {
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
    return type_OrVElement.render();
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
    childType: null,
  };
  setupChildren(child, newElem);
  return newElem;
};

const setupChildren = (
  child: any,
  elem: VElement
) => {
  if (child && child.length) {
    let len = child?.length - 1;
    let children = Array(len);
    for (var i = 0; i <= len; i++) {
      children[i] = isObject(child[i]) ?
        setChildType(child[i]) :
        new String(child[i]);
      children[i].parent = elem;
    }
    elem.children = (children);
    elem.childType = childTypes.ARRAY;
  }
}

export const nextSibling = (
  node: any
) => {
  const parent = node?.parent;
  if (!parent) {
    return null;
  }
  const i = parent.children.indexOf(node);
  return parent.children[i + 1] || null;
};
export const prevSibling = (
  node: any
) => {
  const parent = node?.parent;
  if (!parent) {
    return null;
  }
  const i = parent.children.indexOf(node);
  return parent.children[i - 1] || null;
};
export {
  createElem
}