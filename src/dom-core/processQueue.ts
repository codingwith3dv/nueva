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
  }
  
  dequeue (): VElement {
    return this.Vprocesses.shift();
  }
}

export const mainProcessQueue = new PQ();