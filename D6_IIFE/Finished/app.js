var firstname = 'Jane';

(function (lastname) {

	var firstname = 'John';
	// variables in function are protected within that function 
	console.log(firstname);
	console.log(lastname);
	
}('Doe'));

console.log(firstname);