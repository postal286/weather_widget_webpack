const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const precss = require('precss');

module.exports = {

	context: path.resolve(__dirname, "src"),
	entry: './index',

	output: {
		filename: 'app.js',
		path: path.resolve(__dirname, 'public')
	},

	// plugins: [
	// 	new webpack.optimize.UglifyJsPlugin({
	// 		minimize: true,
	// 		compress: {
	// 			warnings: false
	// 		},
	// 		comments: false,
	// 		sourceMap: false
	// 	}),
	//

	module: {
		rules: [
			{
				test: /\.(jsx|js)?$/,
				exclude: /node_modules/,
				use: [{
					loader: 'babel-loader',
					options: {
						cacheDirectory: true
					}
				}]
			},
			{
				test: /\.(css|pcss)$/,
				use: [
					{
						loader: 'style-loader'
					},
					{
						loader: 'css-loader',
						options: {
							modules: true,
							importLoaders: 1,
							localIdentName: '[name]__[local]'
						}
					},
					{
						loader: 'postcss-loader',
						options: {
							plugins: () => [autoprefixer({ browsers: ['last 2 versions'] }), precss]
						}
					}]
			},
			{
				test: /\.(png|svg|jpg|gif)$/,
				use: [
					'file-loader'
				]
			},
			{
				test: /\.(woff|woff2|eot|ttf|otf)$/,
				use: [
					'file-loader'
				]
			}
		]
	}
};


