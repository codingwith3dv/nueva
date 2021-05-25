import {
  createElem,
  nextSibling,
  prevSibling
} from './dom/VElement.js'
import {
	render
} from './dom/renderer.js'

var tree  = createElem('div',
              createElem('button', 'Press me'),
              createElem('p', 'Hello world')
            )
render(tree, document.getElementById('app'))

export {
  createElem,
  nextSibling,
  prevSibling
}