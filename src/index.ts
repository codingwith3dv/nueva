import { DOMTree } from './dom/DOMTree.js'
import { DOMNode } from './dom/DOMNode.js'

export default class Main {

}

const a = DOMNode('ul', {},
            DOMNode('li', {}, 'Item 1'),
            DOMNode('li', {}, 'Item 2')
          )
          
var root = document.getElementById('app');
var tree = new DOMTree()
root.appendChild(tree.createElementVDOM(a));

console.log(a)