var http = require('http');
var fs = require('fs');

http.createServer(function(req, res) {
    
    res.writeHead(200, { 'Content-Type': 'text/html' });
    fs.createReadStream(__dirname + '/index.htm').pipe(res);
    // sends the readable file stream to the response stream in chunks of data 
    
}).listen(1337, '127.0.0.1');
