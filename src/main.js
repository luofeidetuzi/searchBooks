import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'normalize.css/normalize.css'
import './assets/scss/_style.scss'
// 如果需要导入 SCSS 或者 Sass 文件，但又不希望将其编译为 CSS，
// 只需要在文件名前添加下划线，这样会告诉 Sass 不要编译这些文件
import axios from 'axios'
// 调用接口
Vue.prototype.$http = axios.create({
  baseURL: 'https://book.feelyou.top/'
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
