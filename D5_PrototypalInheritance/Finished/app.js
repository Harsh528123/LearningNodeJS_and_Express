function Person(firstname, lastname) {
	
	this.firstname = firstname;
	this.lastname = lastname;
	
}

Person.prototype.greet = function() {
	console.log('Hello, ' + this.firstname + ' ' + this.lastname);
};
// prototype of any objects created from person

var john = new Person('John', 'Doe');
// 'this' variable points to a new object and that object is automatically returned from the function
john.greet();

var jane = new Person('Jane', 'Doe');
jane.greet();

console.log(john.__proto__);
console.log(jane.__proto__);
console.log(john.__proto__ === jane.__proto__);