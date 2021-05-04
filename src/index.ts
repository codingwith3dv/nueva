import { DOMTree } from './dom/DOMTree.js'
import { DOMNode } from './dom/DOMNode.js'

export default class Main {

}

const newTree = DOMNode('ul', {}, 
                  DOMNode('li', {}, 'Item 10'),
                  DOMNode('li', {}, 'Item 20')
                )
                
const domTree = DOMNode('ul', {}, 
                  DOMNode('li', {}, 'Item 1'),
                  DOMNode('li', {}, 'Item 2')
                )
                
const root = document.querySelector('#app');
var trigger = document.querySelector('#bt')

var tree = new DOMTree();
console.log(tree.createDOMMap(root));

trigger.addEventListener('click', () => {
  tree.updateDOMElement(root, domTree, newTree);
});
