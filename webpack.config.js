const path = require("path");
const webpack = require("webpack");
/*
 * SplitChunksPlugin is enabled by default and replaced
 * deprecated CommonsChunkPlugin. It automatically identifies modules which
 * should be splitted of chunk by heuristics using module duplication count and
 * module category (i. e. node_modules). And splits the chunks…
 *
 * It is safe to remove "splitChunks" from the generated configuration
 * and was added as an educational example.
 *
 * https://webpack.js.org/plugins/split-chunks-plugin/
 *
 */

/*
 * We've enabled MiniCssExtractPlugin for you. This allows your app to
 * use css modules that will be moved into a separate CSS file instead of inside
 * one of your module entries!
 *
 * https://github.com/webpack-contrib/mini-css-extract-plugin
 *
 */

const MiniCssExtractPlugin = require("mini-css-extract-plugin");

/*
 * We've enabled TerserPlugin for you! This minifies your app
 * in order to load faster and run less javascript.
 *
 * https://github.com/webpack-contrib/terser-webpack-plugin
 *
 */

const TerserPlugin = require("terser-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ASSET_PATH = process.env.ASSET_PATH || '/images';

module.exports = {
  mode: "development",
  entry: "./app/app.js",

  plugins: [
    new webpack.ProgressPlugin(),
    new HtmlWebpackPlugin({
      template: "app/index.html",
    }),
  ],

  output: {
    globalObject: `typeof self !== 'undefined' ? self : this`,
    path: path.join(__dirname, "/dist"),
    filename: "bundle.js",
    publicPath: ASSET_PATH,
  },

  devtool: "source-map",
  devServer: {
    contentBase: path.join(__dirname, "/app"),
    port: 8008,
    watchContentBase: true,
    compress: true,
    open: "Google Chrome",
    hot: false,
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: [],
        loader: "babel-loader",
      },
      {
        test: /\.(png|jpe?g|webp|gif)$/i,
        use: [
          {
            loader: "file-loader",
          },
        ],
      },
      {
        test: /\.svg/,
        use: {
          loader: "svg-url-loader",
          options: {},
        },
      },
      {
        test: /\.html$/,
        use: {
          loader: "html-loader",
        },
      },
      {
        test: /.(scss|css)$/,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
            options: {
              sourceMap: true,
            },
          },
          {
            loader: "postcss-loader",
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: true,
            },
          },
        ],
      },
    ],
  },

  optimization: {
    minimizer: [new TerserPlugin()],

    /*
    splitChunks: {
      cacheGroups: {
        vendors: {
          priority: -10,
          test: /[\\/]node_modules[\\/]/,
        },
      },

      chunks: "async",
      minChunks: 1,
      minSize: 30000,
      name: true,
    },
    */
  },
};
