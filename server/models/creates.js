console.log('Creates model');
var mongoose = require('mongoose');
var Schema = mongoose.Schema

var CreatesSchema = new mongoose.Schema({
	name: {type: String, required: true},
	title: {type: String, required: true},
	description: {type: String, required: true},
	_user: {type: Schema.Types.ObjectId, ref: 'Users'},
},
{
	timestamps: true
})
// register the schema as a model
var Creates = mongoose.model('Creates', CreatesSchema);