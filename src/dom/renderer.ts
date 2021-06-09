import {
  VElement
} from './VElement.js';
import {
  isArray,
  isString,
  isObject
} from '../utils/is.js';
import {
  Component
} from '../dom-core/component.js'
import {
  renderFnType,
  renderChildrenFnType
} from '../fn-types/dom-fn-types.js'

export const render: renderFnType = (
  elemToRender: VElement,
  container: Node
): VElement => {
  if (!elemToRender) return null;
  if (!container) return null; 
  
  const { type_ } = elemToRender;
  const rootNode = isString(type_) ? 
        document.createElement(type_.toString())
        : null;
  if (!rootNode) return null;
  if (elemToRender.children && rootNode) {
    if (isArray(elemToRender.children)) {
      renderChildren(elemToRender.children as Array<VElement>, rootNode);
    }
  }
  elemToRender.domEl = rootNode;
  container.appendChild(rootNode);
  
  return elemToRender;
};
const renderChildren: renderChildrenFnType = (
  children: Array<VElement | string> | string,
  container: Node
): void => {
  isArray(children) &&
    children.forEach((item: any, i: number) => {
      let newNode: Node = null;
      if (item?.type_) {
        let newElem = document.createElement(item.type_);
        item?.children && renderChildren(item.children, newElem);
        newNode = newElem;
        item.domEl = newNode;
      } else if (isString(item)) {
        newNode = document.createTextNode(item);
      }
      container.appendChild(newNode);
    });
};
