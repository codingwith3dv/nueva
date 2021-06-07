import {
  VElement
} from '../dom/VElement.js'

type VProcessType = Array<VElement>;

class PQNode {
  data: VElement = null;
  next: PQNode = null;
  constructor(_data: VElement) {
    this.data = _data;
  }
}

class PQ {
  Vprocesses: VProcessType;
  front: PQNode = null;
  rear: PQNode = null;
  constructor() {
    this.Vprocesses = new Array<VElement>();
  }
  
  enqueue (
    Vprocess: VElement
  ): void {
    const newNode = new PQNode(Vprocess);
    if(this.rear === null) {
      this.front = this.rear = newNode;
    } else {
      this.rear.next = newNode;
      this.rear = newNode;
    }
  }
  
  dequeue(): VElement {
    if(this.front === null) {
      return null;
    }
    const temp = this.front;
    this.front = this.front.next;
    
    if(this.front === null) {
      this.rear = null;
    }
    return temp;
  }
  
  flush(): void {
    console.dir(this.front);
  }
}

export const mainProcessQueue = new PQ();