import {
  isObject,
  isString
} from '../utils/is.js'
import {
  childTypes
} from '../utils/childTypes.js'

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
  childType: childTypes;
}

const setChildType = (elem: VElement) => {
  elem.childType = childTypes.ARRAY;
  return elem;
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
    parent: null,
    childType: null
  }
  if((child as Array<any>).every(e => isString(e))) {
    newElem.textChild = (child as Array<any>).join('');
    newElem.childType = childTypes.TEXT;
    return newElem
  }
  for (var i = 0; i <= len; i++) {
    children[i] = isObject(child[i]) ? setChildType(child[i])
      : {
        isNode: true,
        textChild: child[i] as string,
        childType: childTypes.TEXT
      } as VElement;
    children[i].parent = newElem;
  }
  newElem.children = children;
  newElem.childType = childTypes.ARRAY;
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