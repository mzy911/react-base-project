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
    plugins: [
      [
        'import',
        {
          libraryName: 'antd',
          libraryDirectory: 'es',
          style: true, // `true` 会加载 less 文件
        },
      ],
    ],
  },
  jest: {
    configure: (jestConfig) => {
      return jestConfig;
    },
  },
};
