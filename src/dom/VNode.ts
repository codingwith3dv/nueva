export type VNodeTypes = VNode[] | string | number | boolean;

export interface VNode {
  _elementName: string;
  _properties: {};
  _children: VNodeTypes;
  [key: string]: any;
}

export function createVNode(
  tagName: string,
  props: {},
  children: unknown = null
): VNode {
  const vnode: VNode = {
    _elementName: tagName,
    _properties: props,
    _children: null
  };
  return vnode;
}