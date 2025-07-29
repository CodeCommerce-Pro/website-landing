const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require("path");

module.exports = merge(common, {
    devtool: 'inline-source-map',
    mode: 'development',
    devServer: {
        static: {
        directory: path.join(__dirname, "dist"),
        },
        compress: true,
        port: 3000,
        open: true,
    },
   optimization: {
    runtimeChunk: 'single',
   },
});