import { createVElement } from './dom/VElement.js'
import { render } from './dom/render.js'
import { reactive } from './core/reactive.js'
import { childTypes } from './utils/childTypes.js'
import { DOMDll } from './dom/dom-array/DOMDll.js'

export default class Main {

}

var a = createVElement('ul', { style: 'background-color: green' }, [
	        createVElement('li', {}, 'Item1'),
	        createVElement('li', {}, "Item2"),
	        createVElement('ul', {}, [
	            createVElement('li', {}, 'NItem1'),
	            createVElement('li', {}, 'NItem2')
	          ])
	        ]);

var root = document.querySelector('#app');
//render(a, root);

console.log(a);