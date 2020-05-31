
export default [
    {
        path: '/slot',
        name: 'Slot',
        component: () => import(/* webpackChunkName: "slot" */ '../views/slot/Parent.vue')
    },
    {
        path: '/echart',
        name: 'Echart',
        component: () => import(/* webpackChunkName: "chart" */ '../views/echart/Index.vue')
    }
]