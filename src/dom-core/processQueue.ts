import {
  VElement
} from '../dom/VElement.js'

type VProcessType = Array<VElement>;

class PQ {
  Vprocesses: VProcessType;
  constructor() {
    this.Vprocesses = new Array<VElement>();
  }
  
  enqueue (
    Vprocess: VElement
  ): void {
    this.Vprocesses.push(Vprocess);
    this.flush();
  }
  
  dequeue (): VElement {
    return this.Vprocesses.shift() || null;
  }
  
  flush(): void {
    
  }
}

export const mainProcessQueue = new PQ();