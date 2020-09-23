module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        'assets': '@/assets',
        'components': '@/components',
        'network': '@/network',
        'common': '@/common',
        'views': '@/views',
      }
    },
    // pluginOptions: {
    //   "style-resources-loader": {
    //     preProcessor: "scss",
    //     patterns: [path.resolve(__dirname, "./src/assets/css/_theme.scss")]
    //   }
    // },
    // css: {
    //   loaderOptions: {
    //     scss: {
    //       prependData: `@import "./src/assets/css/_theme.scss";`,
    //     },
    //   }
    // },
    //解决assets过大问题
    // performance: {
    //   hints: false
    // },
    //或者
    performance: {
      hints: 'warning',
      //入口起点的最大体积
      maxEntrypointSize: 50000000,
      //生成文件的最大体积
      maxAssetSize: 30000000,
      //只给出 js 文件的性能提示
      assetFilter: function (assetFilename) {
        return assetFilename.endsWith('.js');
      }
    },
  },
  // chainWebpack(config) {
  //   config.when(process.env.NODE_ENV === 'production', config => {
  //     config.entry('app').clear().add('./src/main-prod.js')
  //     //通过externals加载外部CDN资源
  //     config.set('externals', {
  //       vue: 'Vue',
  //       axios: 'axios',
  //       lodash: '_',
  //       echarts: 'echarts',
  //       'vue-router': 'VueRouter',
  //       vuex: 'Vuex',
  //       // nprogress: 'NProgress',
  //       'vue-quill-editor': 'VueQuillEditor',
  //       'quill': 'quill',
  //       moment: 'moment'
  //     })
  //     config.plugin('html').tap(args => {
  //       args[0].isProd = true
  //       return args
  //     })
  //   })
  //   config.when(process.env.NODE_ENV === 'development', config => {
  //     config.entry('app').clear().add('./src/main-dev.js')
  //     config.plugin('html').tap(args => {
  //       args[0].isProd = false
  //       return args
  //     })
  //   })
  // }
}