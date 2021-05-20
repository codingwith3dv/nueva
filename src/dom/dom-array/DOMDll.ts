import {
  childTypes
} from '../../utils/childTypes.js'

export class DOMNode {
  type: string;
  prev: DOMNode;
  next: DOMNode;
  props: {};
  children: DOMChildrenType;
  textChildren: string;
  childType: childTypes;
}
export type DOMChildrenType = Array<DOMNode | string> | string;