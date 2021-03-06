const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
 
const publicPath = '/public/assets/';
const cssName = process.env.NODE_ENV === 'production' ?
                   'styles-[hash].css' :
                   'styles.css';
const jsName = process.env.NODE_ENV === 'production' ?
                 'bundle-[hash].js' :
                 'bundle.js';

const plugins = [
  new webpack.DefinePlugin({
    'process.env': {
      BROWSER: JSON.stringify(true),
      NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'development')
    }
  }),
  new ExtractTextPlugin(cssName),
  new webpack.LoaderOptionsPlugin({
    debug: process.env.NODE_ENV !== 'production'
  })
];

if (process.env.NODE_ENV === 'production') {
  plugins.push(
    new CleanWebpackPlugin(
      ['public/assets/'],
      {
        root: __dirname,
        verbose: true,
        dry: false
      }
    )
  );
}

module.exports = {
  entry: ['babel-polyfill', './src/index.js'],
  resolve: {
    modules: [
      path.join(__dirname, 'src'),
      'node_modules'
    ],
    extensions: ['.js', '.jsx']
  },
  plugins,
  output: {
    path: `${__dirname}/public/assets`,
    filename: jsName,
    publicPath
    // path: path.join(__dirname, 'dist'),
    // filename: 'bundle.js',
    // publicPath: '/static/'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'postcss-loader']
        })
      },
      {
        test: /\.less$/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'postcss-loader', 'less-loader']
        })
      },
      { test: /\.gif$/, use: 'url-loader?limit=1000&mimetype=image/gif' },
      { test: /\.jpg$/, use: 'url-loader?limit=1000&mimetype=image/jpg' },
      { test: /\.png$/, use: 'url-loader?limit=1000&mimetype=image/png' },
      { test: /\.svg/, use: 'url-loader?limit=2600&mimetype=image/svg+xml' },
      { test: /\.(woff|woff2|ttf|eot)/, use: 'url-loader?limit=1' },
      {
        test: /\.jsx?$/,
        use: process.env.NODE_ENV !== 'production' ?
               [/* 'react-hot-loader', */ 'babel-loader'] :
               'babel-loader',
        exclude: [/node_modules/, /public/]
      }
    ]
  },
  devtool: process.env.NODE_ENV !== 'production' ? 'source-map' : null,
  devServer: {
    headers: {
      'Access-Controll-Allow-Origin': '*'
    }
  }
};