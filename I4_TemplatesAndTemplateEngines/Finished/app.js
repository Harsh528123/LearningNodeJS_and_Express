var express = require('express');
var app = express();

var port = process.env.PORT || 3000;

app.use('/assets', express.static(__dirname + '/public'));

app.set('view engine', 'ejs');
// by default will look for files in a folder called views

app.use('/', function (req, res, next) {
	console.log('Request Url:' + req.url);
	next();
});

app.get('/', function(req, res) {
	res.render('index');
	// will try to find index.ejs and render what it has 
});

app.get('/person/:id', function(req, res) {
	res.render('person', { ID: req.params.id });
});
// will render person.ejs and for the ID from the ejs page it will give it the id from the request

app.get('/api', function(req, res) {
	res.json({ firstname: 'John', lastname: 'Doe' });
});

app.listen(port);