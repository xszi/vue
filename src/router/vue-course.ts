const DemoHome = () => import(/* webpackChunkName: "chart" */ '../views/vue-course/DemoHome.vue')
const List = () => import(/* webpackChunkName: "chart" */ '../views/vue-course/List.vue')
const Detail = () => import(/* webpackChunkName: "chart" */ '../views/vue-course/Detail.vue')

export enum RouteName {
  DemoHome = 'DemoHome',
  List = 'List',
  Detail = 'Detail'
} 

export default [
  {
    path: '/demohome',
    name: RouteName.DemoHome,
    component: DemoHome
  },
  {
    path: '/list',
    name: RouteName.List,
    component: List
  },
  {
    path: '/detail',
    name: RouteName.Detail,
    component: Detail
  }
]

