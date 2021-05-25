import {
  createElem,
  nextSibling,
  prevSibling
} from './dom/VElement.js'

var tree  = createElem('div',
              createElem('button', 'Press me'),
              createElem('p', 'Hello world')
            )

export {
  createElem,
  nextSibling,
  prevSibling
}