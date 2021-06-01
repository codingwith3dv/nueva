import {
  isObject,
  isString
} from '../utils/is.js';
import {
  childTypes
} from '../utils/childTypes.js';

type VElementType = |
  VElement |
  string |
  number |
  boolean;

type VElementChildrenType = Array < VElement > ;

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
  type_: string | object,
  ...child: any
) {
  
  let newElem: VElement = {
    type_: (type_ as string),
    isNode: true,
    children: null,
    parent: null,
    childType: null,
  };
  if (child && child.length) {
    let len = child?.length - 1;
    let children = Array(len);
    for (var i = 0; i <= len; i++) {
      children[i] = isObject(child[i]) ?
        setChildType(child[i]) :
        new String(child[i]);
      children[i].parent = newElem;
    }
    newElem.children = children;
    newElem.childType = childTypes.ARRAY;
  }
  return newElem;
};

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