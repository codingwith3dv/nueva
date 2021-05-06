import { VNode } from './VNode.js'

export function render(node: VNode) {

  let newNode: HTMLElement;

  if (typeof node._children[0] === 'string') {
    newNode = document.createElement(node._elementName) as HTMLElement;
    newNode.innerHTML = String(node._children);
    return newNode;
  }
}