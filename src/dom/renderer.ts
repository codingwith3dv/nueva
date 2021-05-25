import {
  VElement
} from './VElement.js'
import {
  isArray,
  isString
} from '../utils/is.js'

export const render = (
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
    if(isArray(children)) {
      renderChildren(children as Array<VElement>, rootNode);
    }
  }
  container.appendChild(rootNode);
  return rootNode;
}
const renderChildren = (
  children: Array<VElement> | string,
  container: Node
) => {
  isArray(children) && children.forEach((item: VElement) => {
    if(item?.textChild) {
     
    } else if(item?.type) {
      let newElem = document.createElement(item.type);
      if(item?.textChild) newElem.appendChild(document.createTextNode(item.textChild));
      else renderChildren(item?.children, newElem);
      container.appendChild(newElem);
    }
  })
  isString(children) && container.appendChild(document.createTextNode(children as string))
}