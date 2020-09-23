module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  plugins: [
    ['import', {
      libraryName: 'vant',
      libraryDirectory: 'es',
      style: true
    }, 'vant'],
    // new webpack.LoaderOptionsPlugin({
    //   // test: /\.xxx$/, // may apply this only for some modules
    //   options: {
    //     chainWebpack: config => {
    //       const oneOfsMap = config.module.rule('scss').oneOfs.store
    //       oneOfsMap.forEach(item => {
    //         item
    //           .use('sass-resources-loader')
    //           .loader('sass-resources-loader')
    //           .options({
    //             // Provide path to the file with resources
    //             // 要公用的scss的路径
    //             resources: './src/assets/css/_theme.scss'
    //           })
    //           .end()
    //       })
    //     }
    //   }
    // })
  ]
}