import { VNode, VNodeChildrenType} from './VNode.js'
import {
  isArray, 
  isString
} from '../utils/is.js'

export function render(vnode: VNode, root: Node | HTMLElement) {

  let newNode = document.createElement(vnode._elementName) as HTMLElement;
  root.appendChild(newNode)
  
  if(isString(vnode._children)) {
    newNode.innerHTML = vnode._children as string;
  }else if(isArray(vnode._children)) {
    [vnode._children].forEach((item: VNode) => {
      console.log(item._children);
    })
  }
  
  return newNode;
}