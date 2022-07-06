function Emitter() {
	this.events = {};
	// object
	// function constructor
}

Emitter.prototype.on = function(type, listener) {
	// event listener is the code that responds to an event otherwise it listens. It responds using emitter. 
	this.events[type] = this.events[type] || [];
	// property on the object 
	this.events[type].push(listener);
	// is an array
	/*
	gotSomethingFromInternet: [ function() {}, function() {}]
	*/
}


// hey something happend; I am emitting an event 
Emitter.prototype.emit = function(type) {
	if (this.events[type]) {
		// if this happeed 
		this.events[type].forEach(function(listener) {
			// call each function 
			listener();
		});
	}
}

module.exports = Emitter;