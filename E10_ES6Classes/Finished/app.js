'use strict';
// JavaScript will be more picky and makes you make less mistakes 
// new features may be only used in 'use strict' 

class Person {
	constructor(firstname, lastname) {
		this.firstname = firstname;
		this.lastname = lastname;
	}
	
	greet() {
		console.log('Hello, ' + this.firstname + ' ' + this.lastname);
	}
}

var john = new Person('John', 'Doe');
john.greet();

var jane = new Person('Jane', 'Doe');
jane.greet();

console.log(john.__proto__);
console.log(jane.__proto__);
// both prototypes are Person 
console.log(john.__proto__ === jane.__proto__);
