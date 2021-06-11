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
import {
  createElemFnType,
  setupChildrenFnType,
  siblingReferenceFnType,
  rerenderFnType
} from '../fn-types/dom-fn-types.js'
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
  domEl: Node;
  isStatic: boolean;
  reactiveIndices: Array<number>;
}

const setChildType = (
  elem: VElement
): VElement => {
  elem.childType = childTypes.ARRAY;
  return elem;
};

const createElem: createElemFnType = (
  type_OrVElement: any,
  ...child: any
): VElement => {
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
    childType: null,
    domEl: null,
    isStatic: null,
    reactiveIndices: null
  };
  setupChildren(child, newElem);
  return newElem;
};

const setupChildren: setupChildrenFnType = (
  child: any,
  elem: VElement
): void => {
  if (child && child.length) {
    if(!elem.children) elem.children = [];
    let len = child?.length - 1;
    let isStatic = true;
    for (var i = 0; i <= len; i++) {
      if(child[i] instanceof Reactive) {
        if(!elem.reactiveIndices) {
          elem.reactiveIndices = [];
        }
        child[i]?.pushElem(elem);
        child[i] = child[i]?.value;
        elem.reactiveIndices.push(i);
        isStatic = false;
      } else {
        isStatic = true;
      }
      const child_: any = isObject(child[i]) ?
        setChildType(child[i]) :
        new String(child[i]);
      child_.parent = elem;
      elem.children.push(child_);
    }
    elem.isStatic = isStatic;
    elem.childType = childTypes.ARRAY;
  }
}

const nextSibling: siblingReferenceFnType = (
  node: any
): unknown => {
  const parent = node?.parent;
  if (!parent) {
    return null;
  }
  const i = parent.children.indexOf(node);
  return parent.children[i + 1] || null;
};
const prevSibling: siblingReferenceFnType = (
  node: any
): unknown => {
  const parent = node?.parent;
  if (!parent) {
    return null;
  }
  const i = parent.children.indexOf(node);
  return parent.children[i - 1] || null;
};
const rerender: rerenderFnType = (
  elem: Set < VElement >,
  newData: Reactive< unknown >
): void => {
  elem.forEach((el: VElement) => {
    mainProcessQueue.enqueue([el, newData]);
  });
  mainProcessQueue.flush();
}
export {
  VElement,
  createElem,
  prevSibling,
  nextSibling,
  rerender
}