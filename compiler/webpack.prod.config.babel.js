import commons from './commons'
import merge from 'deepmerge'
import webpack from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'

import ExtractTextPlugin from 'extract-text-webpack-plugin';

const { entries, module: { rules } } = commons

rules.push(
	{
		test: /\.scss$/,
		use: ExtractTextPlugin.extract({
			fallback: 'style-loader',
			use: ['css-loader', 'sass-loader']
		})
	}
)

const production = {
	devtool: 'cheap-source-map',
	plugins: [
		new webpack.EnvironmentPlugin({
			NODE_ENV: 'production',
			DEBUG: false
		}),
		new ExtractTextPlugin('./css/[hash].css'),
		new webpack.optimize.CommonsChunkPlugin({
			name: "vendor",
			minChunks: function (module) {
				return module.context && module.context.indexOf("node_modules") !== -1;
			}
		}),
		new HtmlWebpackPlugin({
			template: './html/index.html',
			inject: 'body',
			filename: 'index.html'
		}),
	    new webpack.NoEmitOnErrorsPlugin()
	]
}

export default merge(production, commons)