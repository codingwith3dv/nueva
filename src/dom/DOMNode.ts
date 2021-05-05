export interface VNode {
  _elementName: string,
  _properties: {},
  _children: any
}


export function createElement(
  elementName: string,
  properties: object,
  ...children: any) {
  const newNode : VNode = {
    _elementName: elementName,
    _properties: properties,
    _children: children,
  }
  return newNode
}