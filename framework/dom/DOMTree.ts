import { DOMNode } from './DOMNode.js'

export class DOMTree {
  constructor() {
    
  }
  
  createElementVDOM(element: any) {
    var tree = this;
    if (typeof element === 'string') {
      return document.createTextNode(element);
    }
    let newElement = document.createElement(element.elementName)
    element.children
      .map(child => tree.createElementVDOM(child))
      .forEach(newElement.appendChild.bind(newElement))
    return newElement;
  }
}