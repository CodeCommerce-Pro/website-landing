const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const SRC_DIR = path.join(__dirname, "..", "src");
const PUBLIC_DIR = path.resolve(__dirname, "..", "public");
module.exports = {
    mode: 'none',
    entry: {
        app: path.join(SRC_DIR, 'index.tsx')
    },  
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
    },
    target: 'web',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ["babel-loader"],
            },
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                use: ["ts-loader"],
            },        
            {
                test: /\.(css|scss)$/,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.(jpg|jpeg|png|gif|mp3|svg)$/,
                use: ["file-loader"],
            },
          ],
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js"],
    },
  plugins: [
    new CopyPlugin({
            patterns: [{ from: "./assets", to: "dist", context: "public" }],
            options: {},
        }),
  new HtmlWebpackPlugin({
    template: path.join(PUBLIC_DIR, "index.html"),
    filename: "index.html",
  }),
  ],
};