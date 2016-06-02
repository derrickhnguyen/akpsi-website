var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var contactSchema = new Schema({
	name: String,
	email: String,
	subject: String,
	message: String,
	isAnswered: false
});

var ContactMessages = mongoose.model('ContactMessages', contactSchema);

module.exports = ContactMessages;