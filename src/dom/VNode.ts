import {
  isArray,
  isString, 
  isNum
} from '../utils/is.js'

export type VNodeTypes =
  VNode |
  string |
  number |
  boolean |
  undefined |
  null;
export type VNodeType = VNode;
export type VNodeArrayType = Array < VNodeArrayType | VNodeTypes > ;
export type VNodeChildrenType = string | VNodeArrayType;

export interface VNode {
  _isVNode: boolean,
    _elementName: string;
  _properties: {};
  _children: VNodeChildrenType;
  domEl: Node;
  [key: string]: any;
}

export function createVNode(
  tagName: string,
  props: {},
  children: VNodeChildrenType
): VNode {
  const vnode: VNode = {
    _isVNode: true,
    _elementName: tagName,
    _properties: props,
    _children: null, 
    domEl: null
  };
  normalizeChildren(vnode, children)
  return vnode;
}

const normalizeChildren = (
  vnode: VNode,
  children: VNodeChildrenType
): void => {
  if (isArray(children)) {
    for (var i = 0; i < children.length ; i++) {
      let child = children[i] as VNodeChildrenType;
      if(isString(child)) {
        children[i] = createVNode('p', {}, child)
      }/* else if (isArray((children[i] as VNode )._children)) {
        normalizeChildren(children[i] as VNode, (children[i] as VNode)._children)
      }*/
    }
  } else {
    children = String(children)
  }
  vnode._children = children;
}