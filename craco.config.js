const path = require('path');

module.exports = {
  webpack: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
    configure: (webpackConfig) => {
      // 修改配置
      webpackConfig.output.publicPath = '/';
      return webpackConfig;
    },
  },
  babel: {
    presets: [],
    plugins: [],
  },
  jest: {
    configure: (jestConfig) => {
      return jestConfig;
    },
  },
};
