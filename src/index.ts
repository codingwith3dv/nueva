import {
  createElem,
  nextSibling
} from './dom/VElement.js'

export default class Main {

}
var a = createElem(
  'div',
  'Hello1',
  'Hello1.1',
  createElem(
    'div',
    'NHello1',
    'NHello2',
  ),
  'Hello2'
)

console.log(nextSibling(
  createElem(
    'div',
    'NHello1',
    'NHello2',
  ),
  a
));