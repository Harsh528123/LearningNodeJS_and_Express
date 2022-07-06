var http = require('http');

http.createServer(function (req, res) {
  // this function will be executed when a request happens 
  // takes a callback; request coming and response back
  res.writeHead(200, {'Content-Type': 'text/plain'});
  // http response; status code; then headers which is name/value pair; what we give back is plain text  


  res.end('Hello World\n');
  // last thing I am sending 

  // will use the writeHead and the .end to create a proper HTTP response 

}).listen(1337, '127.0.0.1');
// listen on this port, IP address that we want to listen to; IP address of the Server computer 
// if data is coming to server and goes into this specific port send that data to me 
