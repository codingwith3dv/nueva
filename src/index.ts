import { createVNode, VNode } from './dom/VNode.js'
import { render } from './dom/render.js'
import { reactive } from './core/reactive.js'
import { childTypes } from './utils/childTypes.js'

export default class Main {

}

var a = createVNode('ul', {}, [
	        createVNode('li', {}, Math.random() as unknown as string),
	        createVNode('li', {}, "Item2"),
	        createVNode('ul', {}, [
	           'Hello',
	            createVNode('li', {}, Math.random() as unknown as string),
	            createVNode('li', {}, 'NItem2')
	          ])
	        ]);

var root = document.querySelector('#app');
render(a, root);

setInterval(() => {
  a = createVNode('ul', {}, [
  	        createVNode('li', {}, Math.random() as unknown as string),
  	        createVNode('li', {}, "Item2"),
  	        createVNode('ul', {}, [
  	           'Hello',
  	            createVNode('li', {}, Math.random() as unknown as string),
  	            createVNode('li', {}, 'NItem2')
  	          ])
  	        ]);
  render(a, root)
}, 10)