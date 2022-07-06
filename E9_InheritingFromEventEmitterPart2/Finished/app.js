var EventEmitter = require('events');
var util = require('util');

function Greetr() {
	EventEmitter.call(this);
	// super construct; give it new object everything Eventemitter would have 
	this.greeting = 'Hello world!';
	// this is empty object and it adds on properties and methods 
}

util.inherits(Greetr, EventEmitter);
// EventEmitter is prototype of Greetr

Greetr.prototype.greet = function(data) {
	console.log(this.greeting + ': ' + data);
	this.emit('greet', data);
}

var greeter1 = new Greetr();

greeter1.on('greet', function(data) {
	console.log('Someone greeted!: ' + data);
});

greeter1.greet('Tony');