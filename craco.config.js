const path = require('path');
const CracoLessPlugin = require('craco-less');
const CracoAntDesignPlugin = require('craco-antd');

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
      /**
       * babel-plugin-import
       * 1、用于按需加载模块，减少打包体积
       */
      // [
      //   'import',
      //   {
      //     libraryName: 'antd',
      //     libraryDirectory: 'es',
      //     style: true, // `true` 会加载 less 文件
      //   },
      // ],
    ],
  },

  plugins: [
    /**
     * craco-less
     * 1、自定义 Ant Design 的主题颜色
     */
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            // modifyVars: { '@primary-color': '#1DA57A' },
            javascriptEnabled: true,
          },
        },
      },
    },
    /**
     * craco-antd
     * 1、处理 Ant Design 的按需加载
     * 2、配置 Less 变量，自定义 Ant Design 的主题
     * 3、需要单独安装 less 和 less-loader
     */
    {
      plugin: CracoAntDesignPlugin,
      options: {
        // 配置按需加载
        // customizeTheme: '@/styles/variables.less',
        // customizeTheme: {
        //   '@primary-color': '#1DA57A',
        // },
      },
    },
  ],
  jest: {
    configure: (jestConfig) => {
      return jestConfig;
    },
  },
};
