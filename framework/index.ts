import { reactive } from './core/reactive.js'
//Core.getRootElementHook('#app');

export default class Main {

}
class Test {
  
  setup() {
    var uid = reactive(0);
    var uname = reactive('Devesh');
    const inc = () => {
      uid.value++
      console.log(uid.value);
    }
    return {
      uid, 
      uname, 
      inc
    }
  }
}

const myObj = new Test().setup()
setInterval(() => {
  myObj.inc()
}, 500);