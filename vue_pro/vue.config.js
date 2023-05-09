const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave : false,
  // 关闭语法检测，比如没有使用的变量等
  // 这个是配置脚手架的文件

  // 配置入口
  pages: {
    index : {
      entry: 'src/a.js'
    }
  }
})
