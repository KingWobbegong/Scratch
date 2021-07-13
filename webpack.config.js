const path = require('path');

module.exports = {
  mode: process.env.NODE_ENV,
  entry: './client/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  //makes debuggin easier and faster
  devtool: 'eval-cheap-source-map',
  devServer: {
    publicPath: '/build',
    proxy: {
      '/api/****': {
        target: 'http://localhost:3000',
        secure: false,
      },
      '/images': {
        target: 'http://localhost:3000',
        secure: false,
      },
      '/picture': {
        target: 'http://localhost:3000',
        secure: false,
      },
      '/upload': {
        target: 'http://localhost:3000',
        secure:false,
      },
      '/vote': {
        target: 'http://localhost:3000',
        secure:false,
      }
    },
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};
