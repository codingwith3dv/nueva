import { VNode, VNodeChildrenType, VNodeType } from './VNode.js'

const normalizeChildren = (
  vnode: VNode, 
  children: VNodeChildrenType
) => {
  if (Array.isArray(children)) {
    children = children;
  } else {
    children = String(children)
  }
  vnode._children = children;
}

export function createElement(
  elementName: string,
  properties: object,
  children: VNodeChildrenType
) {
  
  const newNode: VNode = {
    _elementName: elementName,
    _properties: properties,
    _children: null,
    isVNode: true
  };
  normalizeChildren(newNode, children);
  
  return newNode;
}