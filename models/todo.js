var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ToDoSchema = new Schema({
	body: String,
	date: {type: String, default: Date.now}
});

module.exports = mongoose.model('ToDo', ToDoSchema);