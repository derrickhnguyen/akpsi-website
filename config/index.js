var configValues = require('./config');

module.exports = {
	getDbConnectionString: function() {
		return `mongodb://${configValues.unname}:${configValues.pwd}@ds019893.mlab.com:19893/csulb-akpsi`;
	}
}