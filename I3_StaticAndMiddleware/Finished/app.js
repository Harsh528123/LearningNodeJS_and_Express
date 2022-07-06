var express = require('express');
var app = express();

var port = process.env.PORT || 3000;

app.use('/assets', express.static(__dirname + '/public'));
// http request for /assets will make everything in public to be available 

app.use('/', function (req, res, next) {
	console.log('Request Url:' + req.url);
	next();
	// whenever this route hits,  we can do something
	// next means run the next middleware
});
// get methods are all middleware, they capture and do something before response is sent 
app.get('/', function(req, res) {
	res.send('<html><head><link href=assets/style.css type=text/css rel=stylesheet /></head><body><h1>Hello world!</h1></body></html>');
	// browser will download this html, see this link tag and generate a http request for my localhost:3000/assets/style.css 
	// that http request will be handled by node and when it sees the /assests it will look for in our server
	// will give css file 
});


app.get('/person/:id', function(req, res) {
	res.send('<html><head></head><body><h1>Person: ' + req.params.id + '</h1></body></html>');
});

app.get('/api', function(req, res) {
	res.json({ firstname: 'John', lastname: 'Doe' });
	// will still have console.log
});

app.listen(port);