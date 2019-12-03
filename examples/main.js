import Vue from 'vue'
import App from './App.vue'

// 导入组件库
import HmUI from './../packages'
Vue.use(HmUI)

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
