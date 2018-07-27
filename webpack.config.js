var webpack = require('webpack');

module.exports = {
  entry: './reactApp/app.js', //path to file containing app
  output: {
    path: __dirname + '/build', //abs path to where below file goes. using string concatination, but better to use path package
    filename: 'app.bundle.js' //name of the file output by the build
  },
  module: {
    rules: [ //array of objs representing rules to follow at build time
      {
        test: /\.js$/, //run babel on files ending in js
        exclude: /node_modules/, //except those in node_modules
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015', 'react']
          }
        }
      }
    ]
  },
  stats: { //not necessary but helpful to have
    colors: true //makes webpack's output colorful
  },
  devtool: 'source-map' //turn on sourcemapping so line numbers in input and output files match
};
