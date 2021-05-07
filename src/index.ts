import { createElement } from './dom/createElement.js'
import { render } from './dom/render.js'
import { ObjectUtils } from './diff.js'

export default class Main {

}

var a = createElement('ul', {}, [
	        createElement('li',{},"Item 1"),
	        createElement('li',{},"Item 2"),
	    ]);

var root = document.querySelector('#app');
var r = render(a, root);