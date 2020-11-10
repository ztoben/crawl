const webpack = require('webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const {getIfUtils, removeEmpty} = require('webpack-config-utils');
// const FaviconsWebpackPlugin = require('favicons-webpack-plugin');

module.exports = (env) => {
  const {ifProduction} = getIfUtils(env);

  return {
    entry: ['react-hot-loader/patch', './src/index.js'],
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: ['babel-loader'],
        },
        {
          test: /\.(scss|css)$/,
          use: ['style-loader', 'css-loader', 'sass-loader'],
        },
        {
          test: /\.html$/,
          use: [
            {
              loader: 'html-loader',
              options: {
                minimize: true,
              },
            },
          ],
        },
        {
          test: /\.(jpg|png)$/,
          use: {
            loader: 'url-loader',
            options: {
              limit: 25000,
            },
          },
        },
      ],
    },
    optimization: {
      splitChunks: {
        cacheGroups: {
          commons: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all',
          },
        },
      },
    },
    resolve: {
      extensions: ['*', '.js', '.jsx'],
      alias: {
        'react-dom': '@hot-loader/react-dom',
      },
    },
    output: {
      path: __dirname + '/dist',
      publicPath: '/',
      filename: '[name].[fullhash].js',
    },
    plugins: removeEmpty([
      new webpack.HotModuleReplacementPlugin(),
      new HtmlWebPackPlugin({
        template: './src/index.html',
        filename: 'index.html',
      }),
      new webpack.ProvidePlugin({
        process: 'process/browser',
        Buffer: ['buffer', 'Buffer'],
      }),
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(ifProduction('production', 'development')),
      }),
      // new FaviconsWebpackPlugin('./assets/favicon.png'), temporarily disable until webpack 5 compatible
    ]),
    devServer: {
      compress: true,
      contentBase: './dist',
      hot: true,
      open: true,
      port: 9999,
    },
  };
};
