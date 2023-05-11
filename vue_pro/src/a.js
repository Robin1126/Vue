// 引入了vue.js文件
import Vue from 'vue'
// 使用完整版的vue.js
// import Vue from 'vue/dist/vue.js'
// 导入app组件
import App from './App.vue'

// 关闭生产提示信息
Vue.config.productionTip = false

// 创建Vue实例
new Vue({
  // 看不懂，一会再说
  // 现在使用的是缺少模板编译文件的vue.js
  // 如何解决
  // 1. 使用完整的vue.js文件，但是后面程序用使用webpack打包，其实不太需要模板编辑器
  // 2. 使用render函数 render函数自动调用 自动传入create element参数
  // render需要一个返回值
  render: h => h(App),
  // createElement函数可以用来创建元素
  // render(createElement){
  // return createElement('div','render函数')
  //}
}).$mount('#app')
