var fs = require('fs');

var readable = fs.createReadStream(__dirname + '/greet.txt', { encoding: 'utf8', highWaterMark: 16 * 1024 });
// stream will fill buffer; if textfile is greater than buffer. you will get pieces of the textfile at a time 
// each piece will fill buffer, emit a data event and run all listeners 

// to get strings instead of buffers you add the encoding {} stuff
// highWaterMark tells us how big we want buffer size to be 

var writable = fs.createWriteStream(__dirname + '/greetcopy.txt');


readable.on('data', function(chunk) {
	// is executed every time buffer is full
	console.log(chunk);
	writable.write(chunk);
	// writes each chunk to output textfile 
});