var person = {
	firstname: 'Jhn',
	lastname: 'Doe',
	greet: function() {
		return this.firstname + ' ' + this.lastname;
	}
}

var john = Object.create(person);
// person is prototype of john; john is an empty object 
// john.firstname = 'John';
// john.lastname = 'Doe';

var jane = Object.create(person);
jane.firstname = 'Jane';
jane.lastname = 'Doe';

console.log(john.greet());
console.log(jane.greet());