// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import vueLazyLoad from 'vue-lazyload'
import store from './store'

import VueResource from 'vue-resource'
import animate from 'animate.css'
import velocity from 'velocity-animate'
import './lib/directive'

import { useEchartsComponent } from './plugins'
Vue.use(useEchartsComponent)

//使用lib-flexible解决移动端适配的问题
import 'lib-flexible/flexible.js'


/*
因为不同的浏览器默认的样式不同，所以在着手项目开始前，
我们需要引入reset.css，将所有html标签的默认样式统一化
*/
require('@/assets/css/reset.css');
//接口文件
require('@/lib/config');

/*
 因为自从retina屏以来，不同的手机又不同的像素密度，
 css中的1px并不等于移动设备中的1px， 最直接的表现就是1px边框问题；
 简单说就是你给border的css写个1px，到手机上却变粗了显示成2px。
 */
require('@/assets/css/border.css');

//引入阿里图标
require('@/assets/font/iconfont.css')

Vue.use(vueLazyLoad, {
  loading: '/static/images/loading.gif'
});

Vue.use(VueResource)
Vue.use(animate)
Vue.use(velocity)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
