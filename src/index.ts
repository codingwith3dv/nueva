import { DOMTree } from './dom/DOMTree.js'
import { DOMNode } from './dom/DOMNode.js'

export default class Main {

}

const a = DOMNode('ul', {},
  DOMNode('li', {}, 'Item 1'),
  DOMNode('li', {}, 'Item 2')
)

const b = DOMNode('ul', {},
  DOMNode('button', {}, 'Item 2'),
  DOMNode('li', {}, 'Item 3')
)

var root = document.getElementById('app');
var tree = new DOMTree()

var tr = document.getElementById('tr')

if (root)
  root.appendChild(tree.createElementVDOM(a));
  
tr.onclick = () => {
  tree.updateDOMElement(root, a, b)
}