import {
  isArray,
  isString
} from '../utils/is.js'
import {
  childTypes
} from '../utils/childTypes.js'
import {
  DOMNode,
  DOMChildrenType
} from './dom-array/DOMDll.js'

export function createVElement(
  _type: string,
  _props: {},
  _children: Array < DOMNode | string > | string,
) {
  let newVElem = new DOMNode();
  
  return newVElem;
}

const setupChildrenWithParent = (
  _elem: DOMNode,
  _children: Array < DOMNode >
) => {
  
}