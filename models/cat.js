var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var cat = new Schema({
	name: String,
	age:Number,
	collar_id:String
})


module.exports = mongoose.model('cat', cat);