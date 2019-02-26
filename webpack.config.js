const HtmlWebPackPlugin = require("html-webpack-plugin");

var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader"
                    }
                ]
            },

        ]
    },

    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/index.html",
            filename: "./index.html"
        }),
        extractPlugin,
    ],
    devServer: {

        host: "react.loc",
        port: 8084,

        historyApiFallback: true
    }
};
