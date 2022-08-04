import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import registerElement from './global/register-element'
import './global/global.less'
;('./global/register-element')

import axios from 'axios'
Vue.prototype.$axios = axios

Vue.config.productionTip = false
// 注册Element
Vue.use(registerElement)
new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')

import { get, post } from './utils/index'
Vue.prototype.$http = {
  get,
  post
}
