console.log('Lists model');
var mongoose = require('mongoose');
var Schema = mongoose.Schema

var ListsSchema = new mongoose.Schema({
	title: {type: String, required: true},
	description: {type: String, required: true},
	_user: {type: Schema.Types.ObjectId, ref: 'Users'},
},
{
	timestamps: true
})
// register the schema as a model
var Lists = mongoose.model('Lists', ListsSchema);