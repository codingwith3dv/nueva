import { createElement } from './dom/DOMNode.js'
import { ObjectUtils } from './utils.js'

export default class Main {

}

var a = createElement('ul', {}, 
	        createElement('li',{},"Item 1"),
	        createElement('li',{},"Item 2"),
	    );


var b = createElement('ul', {}, 
	        createElement('li',{},"Item 3"),
	        createElement('li',{},"Item 2"),
	    );

console.log(ObjectUtils.diff(a,b))