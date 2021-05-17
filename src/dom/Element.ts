import {
  isArray,
  isString
} from '../utils/is.js'
import {
  childTypes
} from '../utils/childTypes.js'

export type VElementType =
  VElement |
  string |
  number |
  null |
  undefined;
export type VElementArrayType =
  Array < VElementArrayType |
  VElementType > ;
export type VElementChildrenType =
  string |
  VElementArrayType;

export interface VElement {
  type: string;
  prevSibling: VElementType;
  nextSibling: VElementType;
  parent: VElement;
  props: {};
  children: VElementChildrenType;
  childrenType: childTypes;
}

export function createVElement(
  _type: string,
  _props: {},
  _children: VElementChildrenType,
) {
  let newVElem: VElement = {
    type: _type,
    prevSibling: null,
    nextSibling: null,
    parent: null,
    props: _props,
    children: null,
    childrenType: null
  }
  setupChildrenWithParent(newVElem, _children);
  return newVElem;
}

const setupChildrenWithParent = (
  _elem: VElement,
  _children: VElementChildrenType
) => {
  let type: childTypes;
  if (isString(_children)) {
    type |= childTypes.TEXT;
  } else {
    type |= childTypes.ARRAY;
    Array.from(_children).forEach((elem, index) => {
      if (isString(elem)) {
        type |= childTypes.TEXT;
      }
    });
  }
  _elem.children = _children;
  _elem.childrenType = type;
}