import {
  childTypes
} from '../../utils/childTypes.js'

export class DOMNode {
  type: string;
  prev: DOMNode;
  next: DOMNode;
  props: {};
  children: DOMDll;
  textChildren: string;
  childType: childTypes;
}
export type DOMChildrenType = Array<DOMNode>;
export class DOMDll {
  start: DOMNode = null;
  end: DOMNode = null;
  
  append(_value: DOMNode) {
    if (!this.start) {
      this.start = _value;
    } else {
      this.end.next = _value;
      _value.prev = this.end;
    }
    this.end = _value;
  }
  prepend(_value: DOMNode) {
    
  }
}