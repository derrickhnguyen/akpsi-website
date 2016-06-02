var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var newsletterSchema = new Schema({
	email: String,
	isAdded: false
});

var NewsletterEmails = mongoose.model('NewsletterEmail', newsletterSchema);

module.exports = NewsletterEmails;