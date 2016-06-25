var express = require('express');
var router = express.Router();
var NewsletterEmails = require('../models/newsletterModel');
var ContactMessages = require('../models/contactModel');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', 
  	{
  		parallaxUrl: '/assets/images/banners/akpsi-delta-omicron-chapter-csulb-home.jpg',
  		backgroundPosition: 'center',
  		header: 'ALPHA KAPPA PSI',
  		subheader: 'Shaping People, Shaping Business',
  		height: '100vh',
  		pathname: '/'
  	}
  );
});

/* GET about page. */
router.get('/about', function(req, res, next) {
	res.render('about',
		{
			parallaxUrl: '/assets/images/banners/akpsi-delta-omicron-chapter-csulb-about.jpg',
			backgroundPosition: 'top',
			header: 'LEARN MORE',
			subheader: 'About the Fraternity and Chapter',
			height: '60vh',
			pathname: '/about'
		}
	);
});

/* GET brothers page. */
router.get('/brothers', function(req, res, next) {
	res.render('brothers',
		{
			parallaxUrl: '/assets/images/banners/akpsi-delta-omicron-chapter-csulb-brothers.jpg',
			backgroundPosition: 'top',
			header: 'MEET THE BROTHERS',
			subheader: '',
			height: '60vh',
			activeBrothers: [
				{
					name: 'Austin Yao',
					img: {
						sm: '/assets/images/headshots/austin-headshot-sm.jpg',
						lg: '/assets/images/headshots/austin-headshot-lg.jpg'
					},
					order: 'text-content-1'
				},
				{
					name: 'Branden Saito',
					img: {
						sm: '/assets/images/headshots/branden-headshot-sm.jpg',
						lg: '/assets/images/headshots/branden-headshot-lg.jpg'
					},
					order: 'text-content-2'
				},
				{
					name: 'Darrin Nguyen',
					img: {
						sm: '/assets/images/headshots/darrin-headshot-sm.jpg',
						lg: '/assets/images/headshots/darrin-headshot-lg.jpg'
					},
					order: 'text-content-3'
				},
				{
					name: 'Denny Co',
					img: {
						sm: '/assets/images/headshots/denny-headshot-sm.jpg',
						lg: '/assets/images/headshots/denny-headshot-lg.jpg'
					},
					order: 'text-content-4'
				},
				{
					name: 'Derrick Nguyen',
					img: {
						sm: '/assets/images/headshots/derrick-headshot-sm.jpg',
						lg: '/assets/images/headshots/derrick-headshot-lg.jpg'
					},
					order: 'text-content-5'
				},
				{
					name: 'Eileen Tran',
					img: {
						sm: '/assets/images/headshots/eileen-headshot-sm.jpg',
						lg: '/assets/images/headshots/eileen-headshot-lg.jpg'
					},
					order: 'text-content-6'
				},
				{
					name: 'Kevin Nguyen',
					img: {
						sm: '/assets/images/headshots/kevin-headshot-sm.jpg',
						lg: '/assets/images/headshots/kevin-headshot-lg.jpg'
					},
					order: 'text-content-7'
				},
				{
					name: 'Logan Wong',
					img: {
						sm: '/assets/images/headshots/logan-headshot-sm.jpg',
						lg: '/assets/images/headshots/logan-headshot-lg.jpg'
					},
					order: 'text-content-8'
				},
				{
					name: 'Melissa Thai',
					img: {
						sm: '/assets/images/headshots/melissa-2015-sm.jpg',
						lg: '/assets/images/headshots/melissa-2015-lg.jpg'
					},
					order: 'text-content-9'
				},
				{
					name: 'Michelle Ha',
					img: {
						sm: '/assets/images/headshots/michelle-headshot-sm.jpg',
						lg: '/assets/images/headshots/michelle-headshot-lg.jpg'
					},
					order: 'text-content-10'
				},
				{
					name: 'Rose Solis',
					img: {
						sm: '/assets/images/headshots/rose-headshot-sm.jpg',
						lg: '/assets/images/headshots/rose-headshot-lg.jpg'
					},
					order: 'text-content-11'
				},
				{
					name: 'Victor Vo',
					img: {
						sm: '/assets/images/headshots/victor-headshot-sm.jpg',
						lg: '/assets/images/headshots/victor-headshot-lg.jpg'
					},
					order: 'text-content-12'
				},
				{
					name: 'Vu Nguyen',
					img: {
						sm: '/assets/images/headshots/vu-headshot-sm.jpg',
						lg: '/assets/images/headshots/vu-headshot-lg.jpg'
					},
					order: 'text-content-13'
				}
			],
			notPictured: [
				{
					name: 'Alain Lopez'
				},
				{
					name: 'Kelsey Yonemura'
				},
				{
					name: 'Metita Tuileata'
				},
				{
					name: 'Shaina Williams'
				},
				{
					name: 'Timothy Chau'
				},
				{
					name: 'Tim Han'
				},
				{
					name: 'Vivian To'
				}
			],
			pathname: '/brothers'
		}
	);
});

/* GET biography page. */
router.get('/brothers/biographies', function(req, res, next) {
	res.render('biographies',
		{
			parallaxUrl: '/assets/images/banners/akpsi-delta-omicron-chapter-csulb-biographies.jpg',
			backgroundPosition: 'bottom',
			header: 'LEARN MORE',
			subheader: 'About the Brothers',
			height: '60vh',
			activeBrothers: [
				{
					name: 'Austin Yao',
					img: '/assets/images/headshots/austin-headshot-sm.jpg',
					class: 'Zeta',
					position: 'Master of Rituals',
					year: 'Spring 2018',
					major: 'Finance',
					why: 'To make more friends.',
					fact: 'I am an international student from Shanghai, China.'
				},
				{
					name: 'Branden Saito',
					img: '/assets/images/headshots/branden-headshot-sm.jpg',
					class: 'Delta',
					position: 'President',
					year: 'Spring 2017',
					major: 'Information Systems',
					why: 'To develop professionally, network, and to put myself out there more.',
					fact: 'I can solve a rubiks cube.'
				},
				{
					name: 'Darrin Nguyen',
					img: '/assets/images/headshots/darrin-headshot-sm.jpg',
					class: 'Zeta',
					position: 'VP of Membereship',
					year: 'Fall 2018',
					major: 'Mechanical Engineer',
					why: 'To network, improve professionalism and to better myself as an individual.',
					fact: 'I like to play tennis.'
				},
				{
					name: 'Denny Co',
					img: '/assets/images/headshots/denny-headshot-sm.jpg',
					class: 'Epsilon',
					position: 'Inter-chapter Chair',
					year: 'Fall 2017',
					major: 'Business Management',
					why: 'For self development, and to separate myself from other students in college.',
					fact: 'Cars, Music, Bowling, Basketball, Volleyball.'
				},
				{
					name: 'Derrick Nguyen',
					img: '/assets/images/headshots/derrick-headshot-sm.jpg',
					class: 'Zeta',
					position: 'VP of Alumni Relations, Webmaster',
					year: 'Spring 2018',
					major: 'Computer Science',
					why: 'To improve on my public speaking skills.',
					fact: 'USA Powerlifting 163lb State Champion.'
				},
				{
					name: 'Eileen Tran',
					img: '/assets/images/headshots/eileen-headshot-sm.jpg',
					class: 'Zeta',
					position: 'Secretary',
					year: 'Fall 2017',
					major: 'Molecular Cell Biology & Physiology, B.S. and Chemistry Minor',
					why: 'To develop professional and public speaking skills.',
					fact: 'Hiking, Star gazing, Doodling, Sewing.'
				},
				{
					name: 'Kevin Nguyen',
					img: '/assets/images/headshots/kevin-headshot-sm.jpg',
					class: 'Epsilon',
					position: '',
					year: 'Fall 2016',
					major: 'Business Management',
					why: 'I joined AKPsi mainly for the reasons of networking and improving upon my public speaking skills.',
					fact: 'I like to hike, swim and have foodventures.'
				},
				{
					name: 'Logan Wong',
					img: '/assets/images/headshots/logan-headshot-sm.jpg',
					class: 'Zeta',
					position: 'Pledge Parent',
					year: 'Fall 2018',
					major: 'Communications',
					why: 'To gain a group of close friends to help me grow as an individual throughout my college experience.',
					fact: 'Exercising and staying fit, cooking and grilling.'
				},
				{
					name: 'Melissa Thai',
					img: '/assets/images/headshots/melissa-2015-sm.jpg',
					class: 'Epsilon',
					position: 'Retreat Chair',
					year: 'Spring 2018',
					major: 'Business Administration - Marketing',
					why: 'To find an organization with a balance of the social aspect and professional aspect.',
					fact: 'Makeup, I pick up every lucky penny I see.'
				},
				{
					name: 'Michella Ha',
					img: '/assets/images/headshots/michelle-headshot-sm.jpg',
					class: 'Zeta',
					position: 'Historian, Pledge Parent',
					year: 'Spring 2018',
					major: 'Communications',
					why: 'I joined AKPsi in order to become more involved in school, gain professionalism, and create strong bonds.',
					fact: 'I like anything arts and crafts related.'
				},
				{
					name: 'Rose Solis',
					img: '/assets/images/headshots/rose-headshot-sm.jpg',
					class: 'Zeta',
					position: 'Banquet Chair',
					year: 'Fall 2016',
					major: 'Marketing',
					why: 'I wanted to gain professional skills and networks.',
					fact: 'I won 2nd place for a poem contest and won $500.'
				},
				{
					name: 'Vu Nguyen',
					img: '/assets/images/headshots/vu-headshot-sm.jpg',
					class: 'Zeta',
					position: '',
					year: 'Spring 2017',
					major: 'Human Resource Management',
					why: 'To network, work on my social and presentation skills, and grow professionally and personally.',
					fact: 'I have an obsession with Superheroes, blueberries, and coffee.'
				},
				{
					name: 'Victor Vo',
					img: '/assets/images/headshots/victor-headshot-sm.jpg',
					class: 'Zeta',
					position: '',
					year: 'Spring 2018',
					major: 'Healthcare Administration',
					why: 'To be more involved, to develop professionally, and to meet more people.',
					fact: 'Basketball and hiking/I love anything Disney related.'
				}
			],
			pathname: 'biographies'
		}
	);
});

router.get('/brothers/alumni', function(req, res, next){
	res.render('alumni',
		{
			parallaxUrl: '/assets/images/banners/akpsi-delta-omicron-chapter-csulb-alumni.jpg',
			backgroundPosition: 'top',
			header: 'Hear About Their Experiences',
			subheader: '',
			height: '60vh',
			pathname: '/recruitment'
		}
	);
});

/* GET recruitment page. */
router.get('/recruitment', function(req, res, next) {
	res.render('recruitment',
		{
			parallaxUrl: '/assets/images/banners/akpsi-delta-omicron-chapter-csulb-recruitment.jpg',
			backgroundPosition: 'top',
			header: 'Fall 2016 Rush Week Coming Soon!',
			subheader: '',
			height: '60vh',
			pathname: '/recruitment'
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
			parallaxUrl: '/assets/images/banners/akpsi-delta-omicron-chapter-csulb-contact.jpg',
			backgroundPosition: 'bottom',
			header: 'Contact Us',
			subheader: 'We love hearing from you.',
			height: '60vh',
			pathname: '/contact'
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
