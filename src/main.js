import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// 前端服务器配置 全局 所有在发起ajax请求的时候，就只用写相对应的路由就好了
axios.defaults.baseURL="http://localhost:8080/api"
import axios from 'axios'
Vue.prototype.$axios=axios
Vue.config.productionTip = false
Vue.use(ElementUI)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
