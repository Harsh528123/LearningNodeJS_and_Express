var fs = require('fs');
var zlib = require('zlib');

var readable = fs.createReadStream(__dirname + '/greet.txt');

var writable = fs.createWriteStream(__dirname + '/greetcopy.txt');

var compressed = fs.createWriteStream(__dirname + '/greet.txt.gz');
// we want compressed version in that file 
//gzip is a compressed file
var gzip = zlib.createGzip();
// creates a transform strea,( both readable and writable); everytime a chunk is sent to it, it compresses it 

readable.pipe(writable);
//source is readable and destination is writable stream
// sets up the event listener for chunk of data
// if we had readable.pipe(readablee).pipe we can read from second stream 
readable.pipe(gzip).pipe(compressed);
// pipe sends readable chunl to writable stream (gzip) and gzip will compress it
// function returs gzip stream so it has a pipe method so we can write it to the compressed stream
