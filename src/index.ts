import { createVNode, VNode } from './dom/VNode.js'
import { render } from './dom/render.js'
import { reactive } from './core/reactive.js'

export default class Main {

}

var r = reactive(20);
r.subscribe((value) => {
  console.log(value);
});

setInterval(() => {
  r.value = Math.random();
}, 1000)

/*var a = createVNode('ul', {}, [
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
}, 1000)*/