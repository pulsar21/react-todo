const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const PATH = {
    src: path.resolve(__dirname, "src"),
    dist: path.resolve(__dirname, "dist")
}

let mode = "development";
let target = "web";

if (process.env.NODE_ENV === "production") {
    mode = "production";
    target = "browserslist";
}

module.exports = {
    context: PATH.src,
    entry: PATH.src,
    output: {
        assetModuleFilename: "images/[contenthash][ext][query]",
        filename: "[name].[contenthash].js",
        path: PATH.dist
    },
    mode: mode,
    target: target,
    devtool: "source-map",
    devServer: {
        contentBase: "./dist",
        port: 8001,
        open: true,
        hot: true
    },
    resolve: {
        extensions: [
            ".json",
            ".js",
            ".jsx",
            ".ts",
            ".tsx"
        ]
    },
    optimization: {
        splitChunks: {
            chunks: "all"
        }
    },
    module: {
        rules: [
            {
                test: /\.(js|ts)x$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.(s[ac]|c)ss$/i,
                exclude: /node_modules/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: ""
                        }
                    },
                    "css-loader",
                    "postcss-loader",
                    "sass-loader"
                ]
            },
            {
                test: /\.(png|jpe?g|svg)$/i,
                exclude: /node_modules/,
                type: "asset"
            },
            {
                test: /\.(eot|ttf|woff|woff2)$/i,
                loader: 'url-loader',
            },
        ]
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: "index.html"
        }),
        new MiniCssExtractPlugin(),
        new CleanWebpackPlugin()
    ]
}