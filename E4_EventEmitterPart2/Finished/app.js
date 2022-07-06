// this is a better way to avoid more errors and makes it easier to change 
var Emitter = require('events');
var eventConfig = require('./config').events;

var emtr = new Emitter();

emtr.on(eventConfig.GREET, function() {
	console.log('Somewhere, someone said hello.');
});

emtr.on(eventConfig.GREET, function() {
	console.log('A.GREETing occurred!');
});

console.log('Hello!');
emtr.emit(eventConfig.GREET);


/*
var Emitter =require('events')

var emtr = new Emitter();

emtr.on(.GREET', function(){
	console.log( Somewhere, someone said hello)
})

emtr.on(.GREET', function(){
	console.log( A.GREETing occurred!)
})

console.log(Hello)
emitr.emit.GREET)





*/