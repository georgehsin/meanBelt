console.log('routes');
// WE NEED TO ADD a few lines of code up here!

var mongoose = require('mongoose');
var Users = mongoose.model('Users');
var users = require('../controllers/users.js');
var Lists = mongoose.model('Lists');
var lists = require('../controllers/lists.js');
var Creates = mongoose.model('Creates');
var creates = require('../controllers/creates.js');

// What is this 'friends' object we are referencing below??
module.exports = function(app){
	app.get('/users', users.index);
	app.post('/users', users.create);
	app.get('/users/:id', users.show);
	
	app.get('/lists', lists.index);
	app.get('/lists/:id', lists.show);
	app.post('/lists/:id', lists.create);
	
	app.get('/creates/:id', creates.show);
	app.post('/creates/:id', creates.create);
}