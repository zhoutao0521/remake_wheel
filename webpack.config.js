const { resolve } = require('path');

// 插件
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
module.exports = {
	mode: 'development',
	devtool: 'cheap-module-source-map',
	entry: './src/main.js',
	output: {
		filename: 'js/bundle.js',
		path: resolve(__dirname, 'build'),
	},
	target: 'web',
	module: {
		rules: [
			{
				test: /\.css$/,
				use: [
					'style-loader',
					{
						loader: 'css-loader',
						options: {
							importLoaders: 1,
						},
					},
					'postcss-loader',
				],
			},
			{
				test: /\.less$/,
				use: [
					'style-loader',
					{
						loader: 'css-loader',
						options: {
							importLoaders: 2,
						},
					},
					'postcss-loader',
					'less-loader',
				],
			},
			{
				test: /\.vue$/,
				loader: 'vue-loader',
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: '轮子',
			template: './public/index.html',
		}),
		new VueLoaderPlugin(),
	],
	devServer: {
		contentBase: resolve(__dirname, 'build'),
		compress: true,
		port: 8080,
		open: true,
	},
};
