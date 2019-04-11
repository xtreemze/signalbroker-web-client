var path = require("path")
// var webpack = require("webpack")

module.exports = {
	entry: './client.js',
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: 'api.js',
		library: 'api',
		// globalObject: 'this',
		libraryTarget: 'umd'
	}

}
