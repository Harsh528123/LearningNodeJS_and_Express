var http = require('http');
var fs = require('fs');

http.createServer(function(req, res) {
    
    if (req.url === '/') {
        // after localhost:1337
        fs.createReadStream(__dirname + '/index.htm').pipe(res);
        // response is html file 
    }
    
    else if (req.url === '/api') {
        // after localhost:1337/api
        res.writeHead(200, { 'Content-Type': 'application/json' });
        var obj = {
            firstname: 'John',
            lastname: 'Doe'
        };
        res.end(JSON.stringify(obj));
    }
    else {
        res.writeHead(404);
        res.end();
    }
    
}).listen(1337, '127.0.0.1');