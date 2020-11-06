import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import elementUI from 'element-ui'
import iTreeTransfer from '../packages/index'

Vue.config.productionTip = false
Vue.use(elementUI)
Vue.use(iTreeTransfer)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
