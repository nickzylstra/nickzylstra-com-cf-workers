const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const PreloadWebpackPlugin = require('preload-webpack-plugin');
// const StyleExtHtmlWebpackPlugin = require('style-ext-html-webpack-plugin');
// const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const isDevelopment = process.env.NODE_ENV === 'development';

const publicDirPath = path.resolve(__dirname, 'public');
const clientSrcPath = path.resolve(__dirname, 'src', 'client');

const sassLoaderOptions = {
  sourceMap: isDevelopment,
  sassOptions: {
    includePaths: [clientSrcPath],
  },
};

module.exports = {
  mode: isDevelopment ? 'development' : 'production',
  entry: path.resolve(__dirname, 'src', 'client', 'index.jsx'),
  output: {
    filename: isDevelopment ? 'bundle.js' : 'bundle.[hash].js',
    chunkFilename: isDevelopment ? 'bundle.[id].js' : 'bundle.[id].[hash].js',
    path: publicDirPath,
    publicPath: '/',
  },
  devtool: isDevelopment ? 'inline-source-map' : false,
  devServer: {
    contentBase: publicDirPath,
    port: 4000,
    watchContentBase: true,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: { minimize: !isDevelopment },
          },
        ],
      },
      {
        test: /.js$|.jsx$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.module\.s(a|c)ss$/,
        loader: [
          isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: true,
              sourceMap: isDevelopment,
            },
          },
          {
            loader: 'sass-loader',
            options: sassLoaderOptions,
          },
        ],
      },
      {
        test: /\.s(a|c)ss$/,
        exclude: /\.module.(s(a|c)ss)$/,
        loader: [
          isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'sass-loader',
            options: sassLoaderOptions,
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src', 'client', 'index.template.html'),
      scriptLoading: 'defer',
    }),
    // new PreloadWebpackPlugin({
    //   fileWhitelist: [/styles\.*.\.css$/],
    // }),
    // new StyleExtHtmlWebpackPlugin({
    //   position: 'head-bottom',
    //   minify: !isDevelopment,
    // }),
    new MiniCssExtractPlugin({
      filename: isDevelopment ? 'styles.css' : 'styles.[hash].css',
      chunkFilename: isDevelopment ? 'styles.[id].css' : 'styles.[id].[hash].css',
    }),
    // new CleanWebpackPlugin(),
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.scss'],
  },
};
