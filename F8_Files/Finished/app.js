var fs = require('fs');
// fs.js inside node source code; deals with files \ 
var greet = fs.readFileSync(__dirname + '/greet.txt', 'utf8');
// loads contents of file in buffer and then uses encoding so it can get string back;
// synchrnous approach; it wil wait until buffer is filled and it has the string back before V8 moves onto next line of code
// not used commonly 
console.log(greet);
// prints Hello World!
var greet2 = fs.readFile(__dirname + '/greet.txt', 'utf8', function(err, data) {
	// asynchronous!!!
	// utf8 will convert buffer to string in this case 
	// this takes a callback function 
	// when event is complete the callback is ran 
	// this is like the libuv and V8 thing we dicussed earlier; asynchronous file 
	// error-first callback, it takes an error object as it's first parameter; null if no error 
	console.log(data);
	// prints hello world 
});

console.log('Done!');
// prints Hello World! then Done then Hello World


// whever you can, use asynchrnous; it makes it faster 