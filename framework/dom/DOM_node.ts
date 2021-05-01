export class DOMNode {
  _elementName: string;
  _properties: string[];
  _childen: DOMNode[];
  
  constructor(
    elementName: string, 
    properties: string[], 
    children: DOMNode[]) {
    this._elementName = elementName;
    this._properties = properties;
    this._childen = children;
  }
}