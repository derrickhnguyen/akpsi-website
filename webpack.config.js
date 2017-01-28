const path = require('path');

const config = {
	entry: './public/javascripts/script.js',
	output: {
		path: path.resolve(__dirname, 'public/javascripts'),
		filename: 'bundle.js'
	},
	module: {
		rules: [
			{
				use: 'babel-loader',
				test: /\.js$/
			}
		]
	}
};

module.exports = config;