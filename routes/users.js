var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();
var Schema = mongoose.Schema;

var NewsletterSchema = new Schema({
	email: ''
});

var newsletterModel = mongoose.model('Newsletter-Email', NewsletterSchema);

router.post('/newsletter-validation', function(req, res, next) {

	var mEmail = req.body.email;

	var person = newsletterModel();
	person.email = mEmail;
	
	person.save(function(err) {
		if(err) throw err;
		console.log('Email saved!');
		res.send("Thank you, you will be added to our newsletter!");
	});

});

var contactSchema = new Schema({
	fullname: '',
	email: '',
	subject: '',
	message: ''
});

var contactModel = mongoose.model('Contact-Message', contactSchema);

router.post('/contact', function(req, res, next) {

	var mFullName = req.body.fullName;
	var mEmail = req.body.email;
	var mSubject = req.body.subject;
	var mMessage = req.body.message;

	var messageInfo = contactModel({
		fullname: mFullName,
		email: mEmail,
		subject: mSubject,
		message: mMessage
	});

	messageInfo.save(function(err){
		if(err) throw err;
		console.log('Message saved!');
		res.send("Thank you, we will get back to you ASAP.");
	});

})

module.exports = router;
