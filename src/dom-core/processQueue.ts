import {
  VElement
} from '../dom/VElement.js'

type VProcessType = Array<VElement>;

class PQ {
  Vprocesses: Array<VElement | VProcessType>;
  constructor() {
    this.Vprocesses = new Array<VElement>();
  }
  
  enqueue (
    Vprocess: VElement | VProcessType
  ): void {
    this.Vprocesses.push(Vprocess);
  }
  
  dequeue (): VElement | VProcessType {
    return this.Vprocesses.shift();
  }
}

export const mainProcessQueue = new PQ();