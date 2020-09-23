import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/vant.js'
import './plugins/mint.js'
import 'mint-ui/lib/style.css'
import './assets/css/base.css'
import './assets/iconfont/iconfont01/iconfont.css'
import moment from 'moment'
import FastClick from 'fastclick'
Vue.prototype.$moment = moment
Vue.config.productionTip = false
Vue.prototype.$bus = new Vue()
FastClick.attach(document.body)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')