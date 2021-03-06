const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
	mode: 'development',
	entry: './src/index.js',
	output: {
		path: path.join(__dirname, 'dist'),
		filename: 'bundle.js'
	},
	devServer: {
		port: 9000
	},
	devtool: "source-map",
	module: {
		rules: [
			{
				test: /\.(js)$/,
				exclude: /node_modules/,
				use: ['babel-loader']
			},
			{
				test: /\.css$/i,
				use: ["style-loader", "css-loader"]
			}
		]	
	},
	plugins: [
		new HtmlWebpackPlugin(
			{
				template: path.resolve(__dirname, "src", "index.html")	
			}	
		)	
	]
};
