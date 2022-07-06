
// first module 
var greet = function() {
	console.log('Hello!');
};
// code is protected; functions and variables need to specifically be stored using module.exports otherwise you cannot call it
module.exports = greet;
// special place to put things that I want to make avaible; only things attached will be available. 

// if you just had console.log('Hello') it would print out Hello when u run app.js b/c require() executes what is there 