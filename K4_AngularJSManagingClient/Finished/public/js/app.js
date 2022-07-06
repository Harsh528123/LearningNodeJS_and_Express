angular.module('TestApp', []);
// empty array is the modules this module requires

angular.module('TestApp')
	.controller('MainController', ctrlFunc);
	// adds a controller to app and executes this function 
	
function ctrlFunc() {
	this.message = "Hello";
	// as vm means makes the "this" variable accessible in the HTML using curly braces 
	
	this.people = [
		{
			name: 'John Doe'
		},
		{
			name: 'Jane Doe'
		},
		{
			name: 'Jim Doe'
		}
	]
}