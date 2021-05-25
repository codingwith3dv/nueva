import {
  VElement
} from './VElement.js'

const render = (
  elemToRender: VElement,
  container: Node
): Node => {
  const { type, textChild, children } = elemToRender;
  if(!container) return null;
  if(!type) {
    const newNode = document.createTextNode(textChild || '');
    container?.appendChild(newNode);
    return newNode;
  }
  const rootNode = document.createElement(type);
  if(children) {
    
  }
  return rootNode;
}
const renderChildren = (
  children: VElement,
  container: Node
) => {
  
}