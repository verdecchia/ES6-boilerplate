const path = require('path')
module.exports = {
  entry: './app/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [{
      test: /.jsx?$/,
      include: [
        path.resolve(__dirname, 'app'),
      ],
      exclude: [
        path.resolve(__dirname, 'node_modules'),
      ],
      loader: 'babel-loader',
      query: {
        presets: ['es2015'],
      },
    }],
  },
  resolve: {
    extensions: ['.json', '.js', '.jsx', '.css'],
  },
  devtool: 'source-map',
}
