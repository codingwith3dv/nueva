import { createVElement } from './dom/Element.js'
import { render } from './dom/render.js'
import { reactive } from './core/reactive.js'
import { childTypes } from './utils/childTypes.js'

export default class Main {

}

var a = createVElement('ul', { style: 'background-color: green' }, [
	        createVElement('li', {}, Math.random() as unknown as string),
	        createVElement('li', {}, "Item2"),
	        createVElement('ul', {}, [
	            'Hello1',
	            createVElement('li', {}, Math.random() as unknown as string),
	            createVElement('li', {}, 'NItem2')
	          ])
	        ]);

var root = document.querySelector('#app');
//render(a, root);

console.log(a);

/*setInterval(() => {
  a = createVNode('ul', {}, [
  	        createVNode('li', {}, Math.random() as unknown as string),
  	        createVNode('li', {}, "Item2"),
  	        createVNode('ul', {}, [
  	           Math.random() > 0.5 ? '1' : '0',
  	            createVNode('li', {}, Math.random() as unknown as string),
  	            createVNode('li', {}, 'NItem')
  	          ])
  	        ]);
  render(a, root)
}, 1000)
*/