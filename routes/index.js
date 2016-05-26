var express = require('express');
var router = express.Router();

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

/* GET contact page. */
router.get('/contact', function(req, res, next) {
	res.render('contact');
});

module.exports = router;
