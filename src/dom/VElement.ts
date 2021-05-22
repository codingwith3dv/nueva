import {
  isArray,
  isString,
  isInArrayBounds
} from '../utils/is.js'

interface VElement {
  children: Array < VElement > ;
  textChild: string;
  isNode: boolean;
}

const newVElem = (
  childs: Array < VElement > ,
  text: string
) => {
  return {
    children: childs,
    textChild: text,
    isNode: true
  } as VElement;
}

export const createElem = (
  childs: Array < VElement | string > | string
) => {
  let parent = newVElem(
    [],
    null
  )
  if (isString(childs)) {
    parent.textChild = childs.toString();
    return parent
  }

  for (let i = 0; i < childs.length; i++) {
    let newEl = newVElem([], null)
    if (isString(childs[i])) {
      newEl.textChild = childs[i].toString();
    } else {
      newEl.children = childs[i] as unknown as Array < VElement > ;
    }
    parent.children.push(newEl);
  }
  return parent;
}