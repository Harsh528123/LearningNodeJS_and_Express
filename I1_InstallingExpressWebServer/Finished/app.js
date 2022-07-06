var express = require('express');
var app = express();

var port = process.env.PORT || 3000;
// process is global object. If the env.PORT equals envirnoment variable then it goes first otherwise 3000 is the port. 
// When deploying, you can set up the envirnonment variables 

app.get('/', function(req, res) {
	res.send('<html><head></head><body><h1>Hello world!</h1></body></html>');
});
// GET request means the function will fire. 
// you can also do app.post

app.get('/api', function(req, res) {
	res.json({ firstname: 'John', lastname: 'Doe' });
});

app.listen(port);
//app.listen(3000)