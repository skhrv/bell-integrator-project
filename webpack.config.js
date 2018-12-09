const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const devMode = process.env.NODE_ENV !== 'production';
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  context: path.resolve(__dirname, './app'),
  entry: './index.tsx',
  mode: process.env.NODE_ENV || 'development',
  module: {
    rules: [{
      test: /\.tsx?$/,
      enforce: 'pre',
      use: 'tslint-loader',
    }, {
      test: /\.tsx?$/,
      use: 'ts-loader',
    }, {
      test: /\.less$/,
      use: [
        devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
        'css-loader',
        'less-loader',
      ],
    }, {
      test: /\.css$/,
      use: [
        { loader: 'style-loader' },
        { loader: 'css-loader' },
      ],
    }],
  },
  devServer: {
    historyApiFallback: true,
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: __dirname + '/app/index.html',
    }),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: devMode ? '[name].css' : '[name].[hash].css',
      chunkFilename: devMode ? '[id].css' : '[id].[hash].css',
    }),
    new BundleAnalyzerPlugin(),
  ],
};
