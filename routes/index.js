var express = require('express');
var router = express.Router();
var NewsletterEmails = require('../models/newsletterModel');
var ContactMessages = require('../models/contactModel');
var jsonfile = require('jsonfile');

/* GET home page. */
router.get('/', function(req, res, next) {
	var file = 'config/home.json';
	jsonfile.readFile(file, function(err, obj) {
		res.render('index', obj);
	});
});

/* GET about page. */
router.get('/about', function(req, res, next) {
	var file = 'config/about.json';
	jsonfile.readFile(file, function(err, obj) {
		res.render('about', obj);
	});
});

/* GET brothers page. */
router.get('/brothers', function(req, res, next) {
	var file = 'config/brothers.json';
	jsonfile.readFile(file, function(err, obj) {
		res.render('brothers', obj);
	});
});

/* GET biography page. */
router.get('/brothers/biographies', function(req, res, next) {
	var file = 'config/biographies.json';
	jsonfile.readFile(file, function(err, obj) {
		res.render('biographies', obj);
	});
});

router.get('/brothers/alumni', function(req, res, next){
	var file = 'config/alumni.json';
	jsonfile.readFile(file, function(err, obj) {
		res.render('alumni', obj);
	});
});

/* GET recruitment page. */
router.get('/recruitment', function(req, res, next) {
	var file = 'config/recruitment.json';
	jsonfile.readFile(file, function(err, obj) {
		res.render('recruitment', obj);
	});
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
	var file = 'config/contact.json';
	jsonfile.readFile(file, function(err, obj) {
		res.render('contact', obj);
	});
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
