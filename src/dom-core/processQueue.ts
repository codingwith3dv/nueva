import {
  NuevaComponent
} from './component.js'

class PQ {
  Vprocesses: Array<NuevaComponent>;
  constructor() {
    this.Vprocesses = new Array<NuevaComponent>();
  }
  
  enqueue (
    Vprocess: NuevaComponent
  ) {
    this.Vprocesses.push(Vprocess);
  }
  
  dequeue () {
    return this.Vprocesses.shift();
  }
}

export const mainProcessQueue = new PQ();