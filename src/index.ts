import { createVElement } from './dom/VElement.js'
import { render } from './dom/render.js'
import { reactive } from './core/reactive.js'
import { childTypes } from './utils/childTypes.js'
import { DOMNode } from './dom/dom-array/DOMDll.js'
import { isString, isArray } from './utils/is.js'

export default class Main {

}

/*var a = createVElement('ul', { style: 'background-color: green' }, [
	        createVElement('li', {}, 'Item1'),
	        createVElement('li', {}, "Item2"),
	        createVElement('ul', {}, [
	            createVElement('li', {}, 'NItem1'),
	            createVElement('li', {}, 'NItem2')
	          ])
	        ]);

var root = document.querySelector('#app');
//render(a, root);

console.log(a);*/

interface VElement {
  prev: VElement;
  next: VElement;
  children: Array < VElement > ;
  textChild: string;
  isNode: boolean;
}

const newVElem = (
  previous: VElement,
  nextiuos: VElement,
  childs: Array < VElement > ,
  text: string
) => {
  return {
    prev: previous,
    next: nextiuos,
    children: childs,
    textChild: text,
    isNode: true
  } as VElement;
}

const isInArrayBounds = (
  i: number,
  len: number
) => {
  return i >= 0 && i < len;
}

const createElem = (
  childs: Array < VElement | string > | string
) => {
  let parent = newVElem(
    null,
    null,
    [],
    null
  )
  if(isString(childs)) {
    parent.textChild = childs.toString();
    return parent
  }
  
  for(let i = 0; i < childs.length; i++) {
    let newEl = newVElem(null, null, [], null)
    newEl.prev = isInArrayBounds(i-1, childs.length) 
                   ? childs[i-1] as VElement : 
                     null;
    if(isString(childs[i])) {
      newEl.textChild = childs[i].toString();
    } else {
      newEl.children = childs[i] as VElement[];
    }
    newEl.next = isInArrayBounds(i+1,childs.length) && (childs[i+1] as VElement)?.isNode
                   ? childs[i+1] as VElement :
                     null;
    parent.children.push(newEl);
  }
  return parent;
}

var a = createElem(
  [
    'Hi1',
    createElem(
      [
        'NHi1',
        'NHi2'
      ]
    ),
    'Hi2'
  ]
)
console.dir(a);