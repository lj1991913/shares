var html = require('html-webpack-plugin');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var path = require('path');
var $ = require('jquery');
var buildDir = path.resolve(__dirname, './dist');
module.exports = {
	devtool: 'eval-source-map',
	entry: {
		'js/worklist': __dirname + '/src/js/worklist.js',
		'js/activity': __dirname + '/src/js/activity.js',
		'js/inputInfor': __dirname + '/src/js/inputInfor.js',
		'lib/flexible': __dirname + '/lib/flexible.js'
	},
	output: {
		filename: '[name].js',
		path: buildDir,
		publicPath: '/'  // ./ webpack
	},
	devServer: {
		contentBase: buildDir, //本地服务器所加载的页面所在的目录
		historyApiFallback: true, //不跳转
		inline: true //实时刷新
	},
	module: {
		rules: [{
			test: /\.(less|css)$/,
			use: ExtractTextPlugin.extract({
				use: ['css-loader', 'less-loader'],
				publicPath: '../',
				fallback: 'style-loader',
			}),
		}, {
			test: /\.html$/,
			loader: 'html-withimg-loader'
		}, {
			test: /\.(png|jpg)$/,
			loader: 'file-loader',
			query: {
				/*
				 *  limit=10000 ： 10kb
				 *  图片大小小于10kb 采用内联的形式，否则输出图片
				 * */
				limit: 100000,
				name: 'img/[name]-[hash:8].[ext]'
			}
		}, {
			test: /\.js[x]?$/,
			exclude: /node_modules/,
			loader: 'babel-loader?presets[]=es2015'
		}, {
			test: require.resolve("jquery"),
			loader: "expose-loader?$"
		}]
	},
	plugins: [
		new html({
			title: '活动title',
			filename: __dirname + '/dist/index.html',
			chunks: ['js/activity', 'lib/flexible'],
			template: __dirname + '/src/view/index.html'
		}), new html({
			title: '乐乐小画仙作业列表',
			filename: __dirname + '/dist/list.html',
			chunks: ['js/worklist', 'lib/flexible'],
			template: __dirname + '/src/view/list.html'
		}), new html({
			title: '填写信息',
			filename: __dirname + '/dist/fill.html',
			chunks: ['js/inputInfor', 'lib/flexible'],
			template: __dirname + '/src/view/fill.html'
		}),
		new ExtractTextPlugin({
			filename: 'css/index.css',
			disable: false,
			allChunks: true,
		})
	]
};