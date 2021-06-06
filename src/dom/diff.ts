import {
  VElement
} from './VElement.js';
import {
  childTypes
} from '../utils/childTypes.js';

const diff = (
  oldTree: VElement,
  newTree: VElement
): void => {
  if (newTree === null || newTree === undefined) {
    //TODO: unmount the element or component
  } else if (oldTree?.type_ !== newTree?.type_) {
    //TODO: rebuild the whole component
  }
  //TODO: none of above find diff and return patch
  return diffChildren(oldTree.children, newTree.children);
};

const diffChildren = (
  oldChildren: Array<VElement>,
  newChildren: Array<VElement>
): void => {};

export { diff };
