const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'src', 'client', 'index.jsx'),
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public'),
    publicPath: '/',
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'public'),
    port: 4000,
    watchContentBase: true,
    writeToDisk: true,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /.js$|.jsx$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
};
