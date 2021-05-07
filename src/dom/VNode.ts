export type VNodeTypes = 
    VNode | 
    string | 
    number | 
    boolean |
    undefined |
    null;
export type VNodeType = VNode;
export type VNodeArrayType = Array<VNodeArrayType | VNodeTypes>;
export type VNodeChildrenType = string | VNodeArrayType;

export interface VNode {
  _elementName: string;
  _properties: {};
  _children: VNodeChildrenType;
  [key: string]: any;
  isVNode?: boolean;
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