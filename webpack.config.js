const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
	entry: {
		app: './src/index.js',
		print: './src/print.js'
	},
	plugins: [
		new CleanWebpackPlugin(['dist']),
     	new HtmlWebpackPlugin({
       		title: 'Output Management'
    	})
    ],
	output: {
	    filename: '[name].bundle.js',
	    path: path.resolve(__dirname, 'dist')
	},
	module: {
	  	rules: [{
	      	test: /\.scss$/,
			use: [
				"style-loader", // creates style nodes from JS strings
				"css-loader", // translates CSS into CommonJS
				"sass-loader" // compiles Sass to CSS
			]
	    },
	    {
	        test: /\.css$/,
	        use: [
	            'style-loader',
	            'css-loader'
	        ]
	    },
		{
		    test: /\.(png|svg|jpg|gif)$/,
		    use: [
		      'file-loader'
		    ]
		}]
	}
};