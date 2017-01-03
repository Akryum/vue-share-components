var webpack = require('webpack')
var merge = require('webpack-merge')
var base = require('./webpack.config.base')

module.exports = merge(base, {
  output: {
    path: './dist',
    filename: outputFile + '.common.js',
    libraryTarget: 'commonjs2',
  },
  externals: {
    // Put external libraries like lodash here
    // With their package name
    // Example: 'lodash': 'lodash'
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: true,
      },
      mangle: false,
    }),
  ],
})
