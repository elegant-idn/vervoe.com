var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var HardSourceWebpackPlugin = require('hard-source-webpack-plugin');
var PreloadWebpackPlugin = require('preload-webpack-plugin');
var ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');
var StyleExtHtmlWebpackPlugin = require('style-ext-html-webpack-plugin');
var autoprefixer = require('autoprefixer');

var staticSourcePath = path.join(__dirname, 'src/assets/css');
var buildPath = path.join(__dirname, './build');

require('babel-polyfill');

module.exports = {
    devtool: 'source-map',
    entry: ['babel-polyfill', path.resolve(__dirname, 'src/app.js')],
    output: {
        path: buildPath,
        filename: 'bundle.[hash].js'
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'src'),
        noInfo: true,
        watchOptions: {
            aggregateTimeout: 300,
            poll: 1000
        },
        hot: true,
        stats: {
            children: false,
            chunks: false
        },
        historyApiFallback: true,
    },
    cache: true,
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loaders: ['babel-loader']
            },
            {
                test: /(\.css)$/,
                loaders: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: [
                        { loader: 'css-loader', options: { minimize: true } }
                    ]
                })
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)$/,
                loader: 'file-loader?name=fonts/[name].[ext]',
                include: [
                    /assets[\\\/]fonts/
                ]
            },
            {
                test: /\.(svg|gif|png|jpe?g)$/,
                loader: 'file-loader?name=images/[name].[ext]',
                include: [
                    /assets[\\\/]images/
                ]
            },
            {
                test: /\.(mp4|m4v|webm|ogv)$/,
                loader: 'file-loader?name=video/[name].[ext]',
                include: [
                    /assets[\\\/]video/
                ]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin([
            'build/*'
        ]),
        new webpack.DefinePlugin({
            "BASE_URL": (process.env.NODE_ENV === 'prod') ? JSON.stringify("https://api.vervoe.com") : JSON.stringify("https://api.staging.vervoe.com")
        }),
        new webpack.optimize.ModuleConcatenationPlugin(),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            filename: 'vendor.[hash].js',
            minChunks (module) {
                return module.context && module.context.indexOf('node_modules') >= 0;
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
                screw_ie8: true,
                conditionals: true,
                unused: true,
                comparisons: true,
                sequences: true,
                dead_code: true,
                evaluate: true,
                if_return: true,
                join_vars: true
            },
            output: {
                comments: false
            }
        }),
        new webpack.LoaderOptionsPlugin({
            options: {
                postcss: [
                    autoprefixer({
                        browsers: [
                            'last 3 version',
                            'ie >= 10'
                        ]
                    })
                ],
                context: staticSourcePath
            }
        }),
        new webpack.HashedModuleIdsPlugin(),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, '/src/index.ejs'),
            path: buildPath,
            excludeChunks: ['base'],
            filename: 'index.html',
            minify: {
                collapseWhitespace: true,
                collapseInlineTagWhitespace: true,
                removeComments: true,
                removeRedundantAttributes: true
            }
        }),
        new PreloadWebpackPlugin({
            rel: 'preload',
            as: 'script',
            include: 'allChunks',
            fileBlacklist: [/\.(css|map)$/, /base?.+/]
        }),
        new ScriptExtHtmlWebpackPlugin({
            defaultAttribute: 'defer'
        }),
        new ExtractTextPlugin({
            filename: '[name].[contenthash].css',
            allChunks: true
        }),
        new StyleExtHtmlWebpackPlugin({
            minify: true
        }),
        new HardSourceWebpackPlugin()
    ]
};
