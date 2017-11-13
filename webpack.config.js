const ExtractTextPlugin = require("extract-text-webpack-plugin");
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
var BuildNotifierPlugin = require('webpack-build-notifier');


module.exports = {
    entry: [
        "./library/js/entry.js"
    ],
    output: {
        path: __dirname + "/assets/",
        filename: "main-[chunkhash].js"
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            loader: 'css-loader',
                            options: { importLoaders: 1 }
                        },
                        'postcss-loader'
                    ]
                })
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                minimize: true,
                                importLoaders: 1
                            },
                        }, 
                        'postcss-loader',
                        {
                            loader: 'sass-loader',
                            options: {
                                includePaths: [
                                    "./node_modules/bootstrap-sass/assets/stylesheets/"
                                ]
                            }
                        }
                    ]
                })
            },
            {
                test: /\.(eot|woff|woff2|ttf|svg)(\?\S*)?$/, 
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: 'fonts/[name]-[hash].[ext]'
                        }
                    }
                ]
            },
            {
                test: /\.(png|jpe?g|gif)(\?\S*)?$/, 
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: 'images/[name]-[hash].[ext]'
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin('./assets/', {
            root:     __dirname,
            verbose:  true,
            dry:      false
        }),
        new UglifyJSPlugin(),
        new ExtractTextPlugin("[name]-[contenthash].css"),
        new ManifestPlugin({
            basrPath: './assets/'
        }),
        new BuildNotifierPlugin({
            title: "WEBPACK BUILD",
            sound: false,
        successIcon: __dirname + '/notifications/success.png',
            failureIcon: __dirname + '/notifications/fail.png',
            warningIcon: __dirname + '/notifications/fail.png'
        })
    ]
};
