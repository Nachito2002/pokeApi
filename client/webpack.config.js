const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
	entry: './src/index.tsx',
	output: {
		path: path.join(__dirname, 'build'),
		filename: 'bundle.[contenthash].js'
	},
	resolve: {
		extensions: [
			'.ts',
			'.tsx',
			'.js',
			'.tsx'
		],
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				exclude: /node_modules/,
				use: [
					'ts-loader'
				]
			},
			{
				test: /\.s[ac]ss$/,
				exclude: /node_modules/,
				use: [
					{
						loader: 'style-loader'
					},
					{
						loader: 'css-loader',
						options: {
							sourceMap: true
						}
					},
					{
						loader: 'sass-loader',
						options: {
							sourceMap: true
						}
					}
				]
			},
			{
				test: /\.css$/,
				exclude: /node_modules/,
				use: [
					{
						loader: 'style-loader'
					},
					{
						loader: 'css-loader',
						options: {
							sourceMap: true
						}
					}
				]
			}
		]
	},
	devServer: {
		port: 8000,
		hot: true,
	},
	plugins: [
		new webpack.ProgressPlugin(),
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({
			template: path.join(__dirname, 'src/public/index.html')
		})
	],
	mode: 'development'
}