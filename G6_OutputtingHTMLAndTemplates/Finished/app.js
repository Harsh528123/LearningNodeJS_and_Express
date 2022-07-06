var http = require('http');
var fs = require('fs');
// fs required for html file

http.createServer(function(req, res) {
    
    res.writeHead(200, { 'Content-Type': 'text/html' });
    // will try to parse html
    var html = fs.readFileSync(__dirname + '/index.htm', 'utf8');
    // read file synchronously 
    // res.end(html) will send contents of the file 
    var message = 'Hello world...';
    html = html.replace('{Message}', message);
    // looks for placeholder/template and replaces with content from variable 
    // dynamic templating 
    res.end(html);
    
}).listen(1337, '127.0.0.1');