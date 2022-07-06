exports.greet = function() {
	console.log('Hello');
}
// mutated it but did not change mem allocation 

console.log(exports);
console.log(module.exports);