import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'
import catalogueRoutes from './catalogue'
import vueCourseRoutes from './vue-course'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  // 首页
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  // 首页目录
  ...catalogueRoutes,
  // vue实战
  ...vueCourseRoutes
]

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
})

export default router
