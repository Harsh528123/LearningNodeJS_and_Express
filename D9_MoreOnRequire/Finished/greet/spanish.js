var greetings = require('./greetings.json');

var greet = function() {
	console.log(greetings.es);
}

module.exports = greet;

// before json file it was :
/*

var greet = function() {
	console.log('Hola');
}

*/