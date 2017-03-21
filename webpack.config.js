const webpack = require('webpack');
const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	devtool: '#cheap-source-map',
	context: path.resolve(__dirname),
	entry: {
		index: './index.js'
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].js'
	},
	module: {
		rules: [
			{
				test: /\.js[x]?$/,
				include: [path.resolve(__dirname)],
				use: "babel-loader"
			}
		]
	},
	devServer: {
		inline: true,
		hot: true,
		port: 7000
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new htmlWebpackPlugin({
			template: './index.html',
			filename: 'index.html',
			hash: true
		})
	]
};