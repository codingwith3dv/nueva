import {
  createElem
} from './dom/VElement.js'

export default class Main {

}
var a = createElem(
  [
    'Hello1',
    'Hello1.1',
    createElem(
      [
        'NHello1',
        'NHello2',
      ]
    ),
    'Hello2'
  ]
)
console.dir(a);