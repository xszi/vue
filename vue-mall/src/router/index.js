import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/home')
    },
    {
      path: '/catalog',
      name: 'catalog',
      component: () => import('@/views/catalog')
    },
    {
      path: '/userLogin',
      name: 'userLogin',
      component: () => import('@/views/userLogin')
    },
    {
      path: '/textCss',
      name: 'textC',
      component: () => import('@/views/textCss')
    },
    {
      path: '/textJs',
      name: 'textP',
      component: () => import('@/views/textJs')
    },
    {
      path: '/socket',
      name: 'socket',
      component: () => import('@/views/socketsChat')
    },
    {
      path: '/transition',
      name: 'transition',
      component: () => import('@/views/transition')
    },
    {
      path: '/noNameSlot',
      name: 'noNameSlot',
      component: () => import('@/views/slot/no-name-slot')
    },
    {
      path: '/hasNameSlot',
      name: 'hasNameSlot',
      component: () => import('@/views/slot/has-name-slot')
    },
    {
      path: '/scopeSlot',
      name: 'scopeSlot',
      component: () => import('@/views/slot/scope-slot')
    },
    {
      path: '/mycv',
      name: 'mycv',
      component: () => import('@/views/cv')
    },
    {
      path: '/keepalive',
      name: 'keepalive',
      component: () => import('@/views/keepalive-no.vue'),
      meta: {
        keepAlive: false
      }
    },
    {
      path: '/aliveInput',
      name: 'aliveInput',
      component: () => import('@/views/keepalive.vue'),
      meta: {
        keepAlive: true
      }
    },
    {
      path: '/slide',
      name: 'slide',
      component: () => import('@/views/slide.vue'),
    },
    {
      path: '/scrollList',
      name: 'scrollList',
      component: () => import('@/views/scroll-list.vue'),
    },
    {
      path: '/vuex',
      name: 'vuex',
      component: () => import('@/views/vuex.vue'),
      meta: {
        title: 'vuex',
        keepAlive: false
      }
    },
    {
      path: '/scroll',
      name: 'scrollAbsorbTop',
      component: () => import('@/views/scrollAbsorbTop.vue'),
      meta: {
        title: '滚动侧面栏吸顶',
        keepAlive: false
      }
    },
    {
      path: '/debounce',
      name: 'debounce',
      component: () => import('@/views/debounce.vue'),
      meta: {
        title: '防抖',
        keepAlive: false
      }
    }
  ]
})
