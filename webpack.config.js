const path = require('path');

const SRC_DIR = './client/src';
const DIST_DIR = path.join(__dirname, '/public');

module.exports = {
  entry: `${SRC_DIR}/index.jsx`,
  output: {
    path: DIST_DIR,
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
    ],
  },
  mode: 'development',
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  optimization: {
    minimize: true,
  },
};
