// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// import App from './App'
// import router from './router'

// Vue.config.productionTip = false

/* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   router,
//   components: { App },
//   template: '<App/>'
// })

var app = new Vue({
  el: '#app',
  render(createElement) {
    return createElement('div', {
      attrs: {
        id: '#app1'
      }
    }, this.message)
  },
  data() {
    return{
      message: "Hello world!" 
    }
  }
})
