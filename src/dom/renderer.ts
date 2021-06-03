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

export var cachedData: {
  root: Node,
  oldTree: VElement
} = {
  root: null,
  oldTree: null
}

export const render = (
  elemToRender: unknown,
  container: Node
): Node => {
  if (!elemToRender) return null;
  
  const { type_, children } = elemToRender as VElement;
  if (!container) return null;
  const rootNode = isString(type_) ? document.createElement(type_.toString()) : null;
  if (!rootNode) return null;
  cachedData.root = rootNode;
  if (children && rootNode) {
    if (isArray(children)) {
      renderChildren(children as Array<VElement>, rootNode);
    }
  }
  container.appendChild(rootNode);
  cachedData.oldTree = elemToRender as VElement;
  return rootNode;
};
const renderChildren = (
  children: Array<VElement | string> | string,
  container: Node
) => {
  isArray(children) &&
    children.forEach((item: any, i: number) => {
      if (item?.type_) {
        let newElem = document.createElement(item.type_);
        renderChildren(item?.children, newElem);
        container.appendChild(newElem);
      } else if (isString(item)) {
        container.appendChild(document.createTextNode(item));
      }
    });
};
