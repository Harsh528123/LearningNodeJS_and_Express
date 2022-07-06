var http = require('http');
var fs = require('fs');

http.createServer(function(req, res) {
    
    res.writeHead(200, { 'Content-Type': 'application/json' });
    // mime type for response will be json
    var obj = {
        firstname: 'John',
        lastname: 'Doe'
    };
    res.end(JSON.stringify(obj));
    // takes object and converts it into string and formatted in JSON
    //serialize it 
    // essentially created an API with one endpoint
    // broswer recieves text and takes JSON to convert to JavaScript object 
}).listen(1337, '127.0.0.1');