var greet = require('./greet1');
greet();

var greet2 = require('./greet2').greet;
greet2();

var greet3 = require('./greet3');
greet3.greet();
greet3.greeting = 'Changed hello world!';

var greet3b = require('./greet3');
greet3b.greet();
// require caches results of the require function for a filename
// so it will store the changed method one in greet3b

var Greet4 = require('./greet4');
var grtr = new Greet4();
// allows you to put more than one require 
grtr.greet();

var greet5 = require('./greet5').greet;
greet5();