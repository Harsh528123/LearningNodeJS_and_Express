var express = require('express');
var app = express();
var mongoose = require('mongoose');

mongoose.connect('mongodb://yourusername:yourpassword@yourmongodbaddress');

var Schema = mongoose.Schema;
//ets me define structure of document 

var personSchema = new Schema({
	firstname: String,
	lastname: String,
	address: String
});

var Person = mongoose.model('Person', personSchema);
// function will create object

var john = Person({
  firstname: 'John',
  lastname: 'Doe',
  address: '555 Main St.'
});

// save the user
john.save(function(err) {
  if (err) throw err;

  console.log('person saved!');
});

var jane = Person({
  firstname: 'Jane',
  lastname: 'Doe',
  address: '555 Main St.'
});
// this is a document

// save the user
jane.save(function(err) {
  if (err) throw err;

  console.log('person saved!');
});
// this is a document

var apiController = require('./controllers/apiController');
var htmlController = require('./controllers/htmlController');

var port = process.env.PORT || 3000;

app.use('/assets', express.static(__dirname + '/public'));

app.set('view engine', 'ejs');

app.use('/', function (req, res, next) {
	console.log('Request Url:' + req.url);
	
	// get all the users
	Person.find({}, function(err, users) {
		if (err) throw err;
		
		// object of all the users
		console.log(users);
	});
	
	next();
});

htmlController(app);

apiController(app);

app.listen(port);