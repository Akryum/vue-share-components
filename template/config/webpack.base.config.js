var ExtractTextPlugin = require('extract-text-webpack-plugin')

var outputFile = 'v-tooltip'

module.exports = {
  entry: './src/index.js',
  output: {
    path: './dist',
    filename: outputFile + '.js',
    library: 'VTooltip',
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
          },
        },
      },
    ],
  },
  externals: {
    'tether-drop': 'Drop',
    'tether-tooltip': 'Tooltip',
  },
  plugins: [
    new ExtractTextPlugin(outputFile + '.css'),
  ],
}
