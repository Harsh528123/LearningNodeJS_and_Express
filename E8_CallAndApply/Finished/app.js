var obj = {
	name: 'John Doe',
	greet: function() {
		console.log(`Hello ${ this.name }`);
	}
}

obj.greet();
obj.greet.call({ name: 'Jane Doe'});
// passes a variable and "this" is Jane Doe; just parameters if needed 
obj.greet.apply({ name: 'Jane Doe'});
// .apply has array of parameters