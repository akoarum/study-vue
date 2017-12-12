const webpack = require('webpack');
const path = require('path');

module.exports = [
  {
    entry: {
      app: './_dev/js/index.js'
    },
    output: {
      path: path.join(__dirname, './app/js'),
      filename: '[name].js'
    },
    module: {
      loaders: [
        {
          test: /\.js/,
          exclude: /node_modules/,
          loader: 'babel-loader',
          query: {
            presets: [ 'es2015', 'stage-0' ]
          }
        }
      ]
    },
    resolve: {
      alias: {
        'vue$': 'vue/dist/vue.esm.js'
      }
    }
  }
];
