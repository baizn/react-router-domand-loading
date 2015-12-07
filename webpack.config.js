/*eslint-disable no-var */
var fs = require('fs')
var path = require('path')
var webpack = require('webpack')

const ABSOLUTE_DIRNAME = __dirname + '/projects';
module.exports = {

  devtool: 'inline-source-map',

  entry: './app/app.js',

  output: {
    path: __dirname + '/__build__',
    filename: 'bundle.js',
    chunkFilename: '[id].chunk.js',
    publicPath: '/__build__/'
  },

  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel' },
      { test: /\.css$/, loader: 'style!css' }
    ]
  },

  resolve: {
    extendsions: ['', '.js']
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin('shared.js'),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
    })
  ]

}
