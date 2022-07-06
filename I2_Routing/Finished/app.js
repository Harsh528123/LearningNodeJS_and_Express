var express = require('express');
var app = express();

var port = process.env.PORT || 3000;

app.get('/', function(req, res) {
	res.send('<html><head></head><body><h1>Hello world!</h1></body></html>');
});

app.get('/person/:id', function(req, res) {
	res.send('<html><head></head><body><h1>Person: ' + req.params.id + '</h1></body></html>');
	// :id, id is a variable name; if url has /person/123 then req.params.id= 123
});

app.get('/api', function(req, res) {
	res.json({ firstname: 'John', lastname: 'Doe' });
});

app.listen(port);