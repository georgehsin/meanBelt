console.log('Users model');
var mongoose = require('mongoose');
var Schema = mongoose.Schema

var UsersSchema = new mongoose.Schema({
	name: {type: String, required: true},
	lists: [{type: Schema.Types.ObjectId, ref: 'Lists'}],
	creates: [{type: Schema.Types.ObjectId, ref: 'Creates'}],
},
{
	timestamps: true
})
// register the schema as a model
var Users = mongoose.model('Users', UsersSchema);