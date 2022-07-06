var util = require('util');

function Person() {
	this.firstname = 'John';
	this.lastname = 'Doe';
}
// person object 

Person.prototype.greet = function() {
	console.log('Hello ' + this.firstname + ' ' + this.lastname);
}

function Policeman() {
	Person.call(this);
	// this points to empty object 
	this.badgenumber = '1234';
}
// we want policeman to have access to all things person has 
util.inherits(Policeman, Person);
// util.inherits just connects prototypes
var officer = new Policeman();
officer.greet();