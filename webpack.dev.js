const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    entry: {
        home: path.resolve(__dirname, 'src/js/index.js')
    },
    mode: 'development',
    output: {
        path: path.resolve(__dirname, 'build_dev'),
        filename: 'bundle.js'
    },
    devServer: {
        hot: true,
        open: true,
        port: 1488
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.js$/,
                use: [
                    'babel-loader'
                ],
                exclude: /node_modules/
            },
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            title: 'PokeAPI'
        })
    ]
}