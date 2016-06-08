var configValues = require('./config');

module.exports = {
	getDbConnectionString: function() {
		return `mongodb://${configValues.unname}:${configValues.pwd}@ds011374.mlab.com:11374/heroku_1sxhk1q5`;
	}
}