import {
  isArray,
  isString
} from '../utils/is.js'
import {
  childTypes
} from '../utils/childTypes.js'
import {
  DOMDll,
  DOMNode,
  DOMChildrenType
} from './dom-array/DOMDll.js'

export function createVElement(
  _type: string,
  _props: {},
  _children: Array < DOMNode | string > | string,
) {
  let newVElem = new DOMNode();
  newVElem.type = _type;
  
  if(isString(_children)) {
    newVElem.textChildren = _children as string;
  } else {
    setupChildrenWithParent(
      newVElem,
      _children as DOMNode[]
    )
  }
  
  return newVElem;
}

const setupChildrenWithParent = (
  _elem: DOMNode,
  _children: Array < DOMNode >
) => {
  let dll = new DOMDll();

  Array.from(_children).forEach((item: DOMNode) => {
    dll.append(item);
  })
  _elem.children = dll;
}