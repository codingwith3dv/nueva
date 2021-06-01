import {
  Component
} from './component.js'

class PQ {
  Vprocesses: Array<Component>;
  constructor() {
    this.Vprocesses = new Array<Component>();
  }
  
  enqueue (
    Vprocess: Component
  ) {
    this.Vprocesses.push(Vprocess);
  }
  
  dequeue () {
    return this.Vprocesses.shift();
  }
}

export const mainProcessQueue = new PQ();