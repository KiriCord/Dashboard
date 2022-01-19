const { createWebpackAliases } = require('./webpack.helpers');

module.exports = createWebpackAliases({
    '@assets': 'assets',
    '@components': 'src/components',
    '@common': 'src/common',
    '@main': 'src/main',
    '@src': 'src',
    '@renderer': 'src/renderer',
});