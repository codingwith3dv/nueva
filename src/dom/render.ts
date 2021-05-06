import { VNode } from './VNode.js'

export function render(node: VNode) {

  let newNode: Node;
  
  if(typeof node._children[0] === 'string'){
  newNode = document.createElement(node._elementName);
  newNode.innerHTML = String(node._children);
  return newNode;
} 
}