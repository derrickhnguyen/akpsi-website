var express = require('express');
var router = express.Router();
var NewsletterEmails = require('../models/newsletterModel');
var ContactMessages = require('../models/contactModel');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

/* GET about page. */
router.get('/about', function(req, res, next) {
	res.render('about');
});

/* GET brothers page. */
router.get('/brothers', function(req, res, next) {
	res.render('brothers');
});

/* GET recruitment page. */
router.get('/recruitment', function(req, res, next) {
	res.render('recruitment');
});

/* POST information from recruitment page. */
router.post('/recruitment', function(req, res, next) {
	var newEmail = NewsletterEmails({
		email: req.body.email,
		isAdded: false
	});

	newEmail.save(function(err) {
		if(err) throw err;
		res.send("Thank you, you will be added to our newsletter!");
	});
});

/* GET contact page. */
router.get('/contact', function(req, res, next) {
	res.render('contact');
});

/* POST information from contact page. */
router.post('/contact/', function(req, res, next) {
	var newMessage = ContactMessages({
		name: req.body.fullName,
		email: req.body.email,
		subject: req.body.subject,
		message: req.body.message,
		isAnswered: false
	});

	newMessage.save(function(err) {
		if(err) throw err;
		res.send("Thank you, we will get back to you ASAP.");
	});
});

module.exports = router;
