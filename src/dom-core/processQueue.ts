import {
  VElement
} from '../dom/VElement.js'
import {
  Reactive
} from '../core/reactive.js'

type VProcessType = [VElement, Reactive<any>];

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
      let dequeued = this.dequeue();
      let dequeuedElement = dequeued[0];
      let dequeuedValue = dequeued[1];
    }
  }
}

export const mainProcessQueue = new PQ();