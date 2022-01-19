const rules = require('./webpack.rules');
const plugins = require('./webpack.plugins');

module.exports = {
  //target: ['electron-renderer'],
  module: {
    rules,
  },
  plugins: plugins,
  resolve: {
    extensions: ['.js', '.ts', '.jsx', '.tsx', '.css'],
    alias: {
      'react-dom': '@hot-loader/react-dom', 
      ...require('./webpack.aliases'),
    },
  },
  stats: 'minimal',
};
