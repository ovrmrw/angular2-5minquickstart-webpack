const webpack = require("webpack");

module.exports = [
  {
    entry: ['./app/initialize.ts', './app/main.ts'],
    output: {
      filename: './bundles/bundle.js'
    },
    resolve: {
      extensions: ['', '.ts', '.js']
    },
    plugins: [
      
    ],
    module: {
      loaders: [
        {
          test: /\.ts$/,
          exclude: [/node_modules/],
          loader: 'babel-loader!ts-loader' // first ts-loader(with tsconfig.json), second babel-loader(with .babelrc)        
        }
      ]
    }
  }
]