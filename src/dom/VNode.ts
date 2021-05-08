import {
  isArray,
  isString
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
    _children: null
  };
  normalizeChildren(vnode, children)
  return vnode;
}

const normalizeChildren = (
  vnode: VNode,
  children: VNodeChildrenType
): void => {
  if (isArray(children)) {
    children = children;
  } else {
    children = String(children)
  }
  vnode._children = children;
}