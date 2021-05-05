import { DOMNode, DOMNodeType } from './DOMNode.js'

export class DOMTree {

  constructor() {

  }

  createElementVDOM(element: any) {
    let tree = this;
    if (typeof element === 'string' ||
      typeof element === 'number') {
      return document.createTextNode(element.toString());
    }
    let newElement = document.createElement(element.elementName)
    if (element.children)
      element.children
      .map((child: any) => tree.createElementVDOM(child))
      .forEach(newElement.appendChild.bind(newElement))
    return newElement;
  }
}