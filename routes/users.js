var express = require('express');
var router = express.Router();

router.post('/newsletter', function(req, res, next) {
	var email = req.body;
	console.log(email);
	res.send("Thank you, you are now added to the newsletter!");
});

router.post('/contact', function(req, res, next) {
	var contactInfo = req.body;
	console.log(contactInfo);
	res.send("Thank you, we will get back to you shortly.");
})

module.exports = router;
