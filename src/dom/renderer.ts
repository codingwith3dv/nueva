import {
  VElement,
  VElementPropType
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
  container: HTMLElement
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
      renderChildren(
        rootNode,
        elemToRender.children as Array<VElement>,
        elemToRender.properties as Array<VElementPropType>
      );
    }
  }
  if (elemToRender.properties && rootNode) {
    applyProps(elemToRender.properties, container);
  }
  elemToRender.domEl = rootNode;
  container.appendChild(rootNode);
  
  return elemToRender;
};
const renderChildren: renderChildrenFnType = (
  container: HTMLElement,
  children: Array<VElement | string>,
  properties?: Array<VElementPropType>
): void => {
  if(!isString(children)) {
    
  }
  
  isArray(children) &&
    children.forEach((item: any, i: number) => {
      let newNode: any = null;
      if (item?.type_) {
        let newElem = document.createElement(item.type_);
        item?.children && renderChildren(
          newElem,
          item.children,
          item.properties
        );
        newNode = newElem;
        item.domEl = newNode;
      } else if (isString(item)) {
        newNode = document.createTextNode(item);
      }
      container.appendChild(newNode);
    });
};

const applyProps = (
  props: Array < VElementPropType >,
  container: HTMLElement
) => {
  if(props && props.length) {
    props.forEach((property) => {
      applyPropsToElement(
        property[0],
        property[1],
        container
      );
    });
  }
};

const applyPropsToElement = (
  attr: string,
  value: string,
  elem: HTMLElement
) => {
  switch (attr) {
    case 'class':
      elem.classList.add(value);
      break;
    
  };
};