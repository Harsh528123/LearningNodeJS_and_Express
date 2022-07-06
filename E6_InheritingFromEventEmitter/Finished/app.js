var EventEmitter = require('events');
var util = require('util');

function Greetr() {
	this.greeting = 'Hello world!';
}
// functoin constructor 

util.inherits(Greetr, EventEmitter);
// EventEmitter is the prototype for Greetr

Greetr.prototype.greet = function(data) {
	console.log(this.greeting + ': ' + data);
	this.emit('greet', data);
}

var greeter1 = new Greetr();

greeter1.on('greet', function(data) {
	console.log('Someone greeted!: ' + data);
});

greeter1.greet('Tony');
// will go to prototype greet method and do] Hello world Tony and then it woud emit causing to say someone greeted 