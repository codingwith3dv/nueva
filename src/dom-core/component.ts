import {
  mainProcessQueue
} from './processQueue.js'

class NuevaComponent {
  $$ = this;
  update() {
    mainProcessQueue.enqueue(this.$$);
  }
}
export {
  NuevaComponent
}