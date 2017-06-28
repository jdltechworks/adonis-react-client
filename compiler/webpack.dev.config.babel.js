import commons from './commons'
import merge from 'deepmerge'
import webpack from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'

const { entries, module: { rules } } = commons

rules.push(
	{
		test: /\.scss$/,
		use: ['style-loader', 'css-loader?sourceMap', 'sass-loader?sourceMap']
	}
)

const development = {
	devtool: 'source-map',
	entry: {
		main: [
			'react-hot-loader/patch',
			'webpack-hot-middleware/client'
		]
	},
	watch: false,
	plugins: [
		new webpack.EnvironmentPlugin({
			NODE_ENV: 'development',
			DEBUG: false
		}),
		new webpack.HotModuleReplacementPlugin(),
		// enable HMR globally
		new HtmlWebpackPlugin({
			title: 'App',
			template: './html/index.html',
			filename: 'index.html'
		}),

		new webpack.NamedModulesPlugin(),
	]
}

export default merge(development, commons)