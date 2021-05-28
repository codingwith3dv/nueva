import {
  VElement
} from './VElement.js';
import {
  isArray,
  isString
} from '../utils/is.js';

export const render = (
  elemToRender: VElement,
  container: Node
): Node => {
  if (!elemToRender) return null;
  const { type, children } = elemToRender;
  if (!container) return null;
  const rootNode = document.createElement(type);
  if (children) {
    if (isArray(children)) {
      renderChildren(children as Array<VElement>, rootNode);
    }
  }
  container.appendChild(rootNode);
  return rootNode;
};
const renderChildren = (
  children: Array<VElement | string> | string,
  container: Node
) => {
  isArray(children) &&
    children.forEach((item: any, i: number) => {
      if (item?.type) {
        let newElem = document.createElement(item.type);
        renderChildren(item?.children, newElem);
        container.appendChild(newElem);
      } else if (isString(item)) {
        container.appendChild(document.createTextNode(item));
      }
    });
};
