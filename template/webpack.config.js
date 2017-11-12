let path = require(`path`);
let HtmlWebpackPlugin = require(`html-webpack-plugin`);
let CopyWebpackPlugin = require('copy-webpack-plugin');
let { DefinePlugin, ProvidePlugin } = require('webpack');
let ExtractTextPlugin = require("extract-text-webpack-plugin");
let webpack = require('webpack');

let defaultConfigName = 'dev';
let config = process.env.NODE_ENV || defaultConfigName;
let distFolder;

// set destination folder
switch (config) {
	case 'production':
		distFolder = 'production_dist';
		break;
	default:
		distFolder = 'dist';
};

console.log(`CURRENT CONFIG: ${config}`);

module.exports = {
	entry: {
		config: path.join(__dirname, `/src/js/config/${config}.config.js`),
		main: [path.join(__dirname, '/src/main.jsx')]
	},
	output: {
		path: path.join(__dirname, `${distFolder}`),
		filename: '[name].bundle.js'
	},
	devServer: {
		contentBase: path.join(__dirname, distFolder),
		port: 3000,
		historyApiFallback: true
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: /node_modules/
			},
			{
				test: /\.jsx$/,
				loader: 'babel-loader',
				exclude: /node_modules/
			},
			{
				test: /\.css$/,
				exclude: /node_modules/,
				use: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: 'css-loader'
				})
			},
			{
				test: /\.scss$/,
				exclude: /node_modules/,
				use: ExtractTextPlugin.extract({
					use: ['css-loader', 'sass-loader']
				})
			},
			{
				test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
				loader: 'url-loader?limit=10000&mimetype=application/font-woff'
			},
			{
				test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
				loader: 'file-loader'
			}
		]
	},
	devtool: 'source-map',
	plugins: [
		new HtmlWebpackPlugin({
			filename: `index.html`,
			template: path.join(__dirname, '/src/tpl/index.template.html'),
			inject: false
		}),
		new DefinePlugin({ 'NODE_ENV': config }),
		new ExtractTextPlugin(`[name].css`),
		new ProvidePlugin({
			'&': 'jquery',
			'jQuery': 'jquery',
			'jquery': 'jquery'
		})
	]
};
