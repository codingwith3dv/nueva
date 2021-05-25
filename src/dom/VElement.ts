import {
  isObject
} from '../utils/is.js'

type VElementType =
  VElement |
  string |
  number |
  boolean
type VElementChildrenType =
  Array<VElement>

export interface VElement {
  type: string;
  children: VElementChildrenType;
  isNode: boolean;
  textChild: string;
  parent: VElement;
}

export const createElem = (
  type: string,
  ...child: any
) => {
  let len = child.length - 1;
  let children = Array(len);
  let newElem: VElement = {
    type,
    isNode: true,
    children: [],
    textChild: null,
    parent: null
  }
  for (var i = 0; i <= len; i++) {
    children[i] = isObject(child[i]) ? child[i]
      : {
        isNode: true,
        textChild: child[i] as string,
      } as VElement;
    children[i].parent = newElem;
  }
  newElem.children = children;
  return newElem;
}
export const nextSibling = ( 
  node: any,
) => {
  const parent = node?.parent;
  if (!parent) {
    return null
  }
  const i = parent.children.indexOf(node);
  return parent.children[i + 1] || null;
}
export const prevSibling = ( 
  node: any,
) => {
  const parent = node?.parent;
  if (!parent) {
    return null
  }
  const i = parent.children.indexOf(node);
  return parent.children[i - 1] || null;
}