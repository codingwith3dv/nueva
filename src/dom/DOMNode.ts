export function DOMNode (
  elementName: string,
  properties: object,
  ...children: any){
    
  var _elementName = elementName;
  var _properties = properties;
  var _childen = children;
  
  return {
    elementName, 
    properties, 
    children
  }
}

export type DOMNodeType = typeof DOMNode