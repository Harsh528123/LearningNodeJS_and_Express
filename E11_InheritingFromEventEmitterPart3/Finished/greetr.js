'use strict';

var EventEmitter = require('events');

module.exports = class Greetr extends EventEmitter {
	// extends means it inherits EventEmitter
	constructor() {
		super();
		// instead of call(this)
		this.greeting = 'Hello world!';
	}
	
	greet(data) {
		console.log(`${ this.greeting }: ${ data }`);
		this.emit('greet', data);
	}
}
// class expression