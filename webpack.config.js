const webpack = require('webpack');
const path = require('path');

module.exports = {
	entry: './compiled/main.js',
	target: 'node',
	node: {
		__filename: true,
		__dirname: true
	},
	output: {
		path: path.join(__dirname, 'lib'),
		filename: 'main.js'
	},
	plugins: [
		new webpack.IgnorePlugin({ resourceRegExp: /\.(css|less)$/ })
	],
	optimization: {
		minimize: false
	},
	devtool: 'source-map'
};
