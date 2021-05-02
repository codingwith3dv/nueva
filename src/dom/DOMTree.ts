import { DOMNode } from './DOMNode.js'

export class DOMTree {
  constructor() {
    
  }
  
  createElementVDOM(element: any) {
    let tree = this;
    if (typeof element === 'string') {
      return document.createTextNode(element);
    }
    let newElement = document.createElement(element.elementName)
    element.children
      .map((child: any) => tree.createElementVDOM(child))
      .forEach(newElement.appendChild.bind(newElement))
    return newElement;
  }
  
  updateDOMElement(root: any, oldValue: any, newValue: any, indexForChild = 0) {
    var tree = this;
    if(oldValue == null){
      root.appendChild(tree.createElementVDOM(newValue));
    }else if(newValue == null) {
      root.removeChild(root.childNodes[indexForChild]);
    }else if(
      typeof newValue !== typeof oldValue ||
      typeof newValue === 'string' && 
      newValue !== oldValue ||
      newValue.elementName !== oldValue.elementName
    ){
      root.replaceChild(
        tree.createElementVDOM(newValue), 
        root.childNodes[indexForChild]
      )
    }else if(newValue.elementName) {
      for (var i = 0; i < newValue.children.length || i < oldValue.children.length; i++) {
        tree.updateDOMElement(
          root.childNodes[indexForChild], 
          oldValue.children[i], 
          newValue.children[i]
        )
      }
    }
  }
}