var ExtractTextPlugin = require('extract-text-webpack-plugin')

var outputFile = 'test'
var globalName = 'TestPlugin'

module.exports = {
  entry: './src/index.js',
  output: {
    path: './dist',
    filename: outputFile + '.js',
    library: globalName,
    libraryTarget: 'umd',
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.(js|vue)$/,
        loader: 'eslint-loader',
        exclude: /node_modules/,
      },
      {
        test: /.js$/,
        use: 'babel-loader',
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            css: ExtractTextPlugin.extract('css-loader'),
            less: ExtractTextPlugin.extract('css-loader!less-loader'),
            sass: ExtractTextPlugin.extract('css-loader!sass-loader'),
            scss: ExtractTextPlugin.extract('css-loader!sass-loader'),
            stylus: ExtractTextPlugin.extract('css-loader!stylus-loader'),
          },
        },
      },
    ],
  },
  plugins: [
    new ExtractTextPlugin(outputFile + '.css'),
  ],
}
