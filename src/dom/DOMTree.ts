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

  updateDOMElement(root: any, oldTree: object, newTree: object, indexForChild = 0) {
    var tree = this;

  }

  createDOMMap(root: Node | HTMLElement) {
    var tree = this;
    return Array.prototype.map.call(
      root.childNodes,
      (node: typeof root) => {

        var details = {
          content: node.childNodes && node.childNodes.length > 0 ? null : node.textContent,
          atts: node.nodeType !== 1 ? [] : node.getAttribute(node.attributes),
          type: node.nodeType === 3 ? 'text' : (node.nodeType === 8 ? 'comment' : node.tagName.toLowerCase()),
          node: node
        };
        details.isSVG = details.type === 'svg';
        details.children = tree.createDOMMap(node, details.isSVG);
        return details;

      }
    )
  }
}