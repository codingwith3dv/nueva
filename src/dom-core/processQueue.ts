import {
  VElement,
  createElem
} from '../dom/VElement.js'
import {
  Reactive
} from '../core/reactive.js'
import {
  render
} from '../dom/renderer.js'
type VProcessType = [VElement, Reactive<unknown>];

class PQNode {
  data: VProcessType = null;
  next: PQNode = null;
  constructor(_data: VProcessType) {
    this.data = _data;
  }
}

class PQ {
  front: PQNode = null;
  rear: PQNode = null;
  constructor() {
    
  }
  
  enqueue (
    Vprocess: VProcessType
  ): void {
    const newNode = new PQNode([Vprocess[0], Vprocess[1]]);
    if(this.rear === null) {
      this.front = this.rear = newNode;
    } else {
      this.rear.next = newNode;
      this.rear = newNode;
    }
  }
  
  dequeue(): VProcessType {
    if(this.front === null) {
      return null;
    }
    const temp = this.front;
    this.front = this.front.next;
    
    if(this.front === null) {
      this.rear = null;
    }
    return temp.data;
  }
  
  flush(): void {
    while (this.front !== null) {
      let dequeued: VProcessType = this.dequeue();
      let dequeuedElement = dequeued[0] as VElement;
      let dequeuedValue = dequeued[1] as Reactive<unknown>;
      
      dequeuedElement.reactiveIndices
        ?.forEach((index) => {
          dequeuedElement.children[index] = dequeuedValue.value
        })
    }
  }
}

export const mainProcessQueue = new PQ();