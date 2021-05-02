import { DOMNode } from './dom/DOMNode.js'

export default class Main {

}

const a = DOMNode('ul', {},
            DOMNode('li', {}, 'Item 1'),
            DOMNode('li', {}, 'Item 2')
          )

console.log(a)