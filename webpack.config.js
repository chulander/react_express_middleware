const path = require('path');
const fs = require('fs');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const CLIENT_DIR = path.resolve(__dirname, 'client');
const SERVER_DIR = path.resolve(__dirname, 'server/generated');
const DIST_DIR = path.resolve(__dirname, 'dist');
const loaders = [{
  test: /\.js$/,
  include: CLIENT_DIR,
  loader: 'babel-loader',
  query: {
    presets: ['es2015', 'react']
  }
},
  {
    test: /\.less$/,
    loader: ExtractTextPlugin.extract('style-loader', 'css-loader!less-loader')
  }
];

const nodeModules = {};
fs.readdirSync('node_modules')
  .filter(function(x) {
    return ['.bin'].indexOf(x) === -1;
  })
  .forEach(function(mod) {
    nodeModules[mod] = 'commonjs ' + mod;
  });


module.exports = [
  {
    name: 'server',
    target: 'node',
    entry: {
      Slider: './server/index.js'
    },
    output: {
      path: SERVER_DIR,
      filename: '[name].js',
      libraryTarget: 'commonjs2'
    },
    externals: /^[a-z\-0-9]+$/,
    module: {
      loaders: [
        {
          test: /\.js?$/,
          loader: 'babel',
          query: {
            presets: ['es2015','react'],
            plugins:['transform-runtime']
          }
        }
      ]
    },
    plugins: [
      new ExtractTextPlugin('[name].css')
    ]
  }];






// const path = require('path');
// const ExtractTextPlugin = require('extract-text-webpack-plugin');
//
//
// module.exports = {
//   entry: path.join(__dirname, './client/index.js'),
//   output: {
//     path: './dist',
//     filename: 'bundle.js',
//     publicPath: '/'
//   },
//   module: {
//     loaders: [
//       {
//         test: /\.js/,
//         loaders: ['babel?cacheDirectory', 'babel?presets[]=es2015,presets[]=react'],
//         include: __dirname + '/client',
//       },
//       {
//         test: /\.css$/,
//         loader: ExtractTextPlugin.extract('css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]'),
//         include: __dirname + '/src'
//       }
//     ],
//   },
//   plugins: [
//     new ExtractTextPlugin("styles.css")
//   ]
// };