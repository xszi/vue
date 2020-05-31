
  export default [
  {
    path: '/demohome',
    name: 'DemoHome',
    component: () => import(/* webpackChunkName: "chart" */ '../views/vue-course/DemoHome.vue')
  },
  {
    path: '/list',
    name: 'List',
    component: () => import(/* webpackChunkName: "chart" */ '../views/vue-course/List.vue')
  },
  {
    path: '/detail',
    name: 'Detail',
    component: () => import(/* webpackChunkName: "chart" */ '../views/vue-course/Detail.vue')
  }
]

