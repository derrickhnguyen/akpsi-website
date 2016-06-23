var express = require('express');
var router = express.Router();
var NewsletterEmails = require('../models/newsletterModel');
var ContactMessages = require('../models/contactModel');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', 
  	{
  		parallaxUrl: '/assets/images/banners/home.jpg',
  		backgroundPosition: 'center',
  		header: 'ALPHA KAPPA PSI',
  		subheader: 'Shaping People, Shaping Business',
  		height: '100vh'
  	}
  );
});

/* GET about page. */
router.get('/about', function(req, res, next) {
	res.render('about',
		{
			parallaxUrl: '/assets/images/banners/about.jpg',
			backgroundPosition: 'top',
			header: 'LEARN MORE',
			subheader: 'About the Fraternity and Chapter',
			height: '60vh'
		}
	);
});

/* GET brothers page. */
router.get('/brothers', function(req, res, next) {
	res.render('brothers',
		{
			parallaxUrl: '/assets/images/banners/brothers.jpg',
			backgroundPosition: 'top',
			header: 'MEET THE BROTHERS',
			subheader: '',
			height: '60vh'
		}
	);
});

/* GET recruitment page. */
router.get('/recruitment', function(req, res, next) {
	res.render('recruitment',
		{
			parallaxUrl: '/assets/images/banners/recruitment.jpg',
			backgroundPosition: 'top',
			header: 'Fall 2016 Rush Week Coming Soon!',
			subheader: '',
			height: '60vh'
		}
	);
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
	res.render('contact',
		{
			parallaxUrl: '/assets/images/banners/contact.jpg',
			backgroundPosition: 'bottom',
			header: 'Contact Us',
			subheader: 'We love hearing from you.',
			height: '60vh'
		}
	);
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
