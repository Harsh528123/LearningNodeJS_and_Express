var util = require('util');
// util is a Node JS library thing
var name = 'Tony';
var greeting = util.format('Hello, %s', name);
util.log(greeting);