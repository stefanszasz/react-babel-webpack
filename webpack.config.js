'use strict';

const path = require('path'),
  webpack = require("webpack");

module.exports = {
    context: __dirname,
    entry: "./src/app.js",
    output: {
      path: path.join(__dirname, "src/server/public"),
      publicPath: "src/server/public",
      filename: "bundle.js"
    },
    module: {
      loaders: [
        {
          loader: "babel-loader",
          include: [
            path.resolve(__dirname, "src"),
          ],
          test: /\.jsx?$/,
          query: {
            cacheDirectory: true,
            plugins: ['transform-runtime'],
            presets: ['es2015', 'stage-0', 'react'],
          }
        }
      ]
    }    
};