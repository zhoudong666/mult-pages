module.exports = {
  pages: {
    firstPage: {
      // page 的入口(必选项，除此之外就是可选项)
      entry: 'src/pages/firstPage/firstPageEntry.js',
      // 模板来源
      template: 'public/firstPage.html',
      // 在 dist/index.html 的输出
      filename: 'firstPage.html',
      // 当使用 title 选项时，
      // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
      title: 'firstPage Page',
      // 在这个页面中包含的块，默认情况下会包含
      // 提取出来的通用 chunk 和 vendor chunk。
      chunks: ['chunk-vendors', 'chunk-common', 'firstPage']
    },
    // 当使用只有入口的字符串格式时，
    // 模板会被推导为 `public/subpage.html`
    // 并且如果找不到的话，就回退到 `public/index.html`。
    // 输出文件名会被推导为 `subpage.html`。
    secondPage: 'src/pages/secondPage/secondPageEntry.js',
    third: 'src/pages/third/third.js'
  },
  publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
  // pages: {
  //   users: 'src/pages/users/users.js',
  //   firstPage: 'src/pages/firstPage/firstPage.js'
  // },
  configureWebpack: {
    name: '多页面应用'
  },

  devServer: {
    port: 8020,
    overlay: {
      warnings: false,
      errors: true
    },
    open: true, // 自动打开浏览器
    openPage: 'third/#/' // 打开的默认起始页
  }
}
