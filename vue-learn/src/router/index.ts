import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '@views/Home.vue'
import catalogueRoutes from './catalogue'
import vueCourseRoutes from './vue-course'
import Transfer from '@components/transfer'
import SelectTab from '@components/selectTab'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  // 首页
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/transfer',
    name: 'Transfer',
    component: Transfer
  },
  {
    path: '/selectTab',
    name: 'SelectTab',
    component: SelectTab
  },
  // 首页目录
  ...catalogueRoutes,
  ...vueCourseRoutes
]

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
})

export default router
