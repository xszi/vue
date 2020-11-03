const Slot = () => import(/* webpackChunkName: "slot" */ '../views/slot/Parent.vue')
const Echart = () => import(/* webpackChunkName: "chart" */ '../views/echart/Index.vue')
const Checkbox = () => import(/* webpackChunkName: "chart" */ '../views/checkBox/Index.vue')

export enum RouteName{
    Slot = 'Slot',
    Echart = 'Echart',
    Checkbox = 'Checkbox'
}

export default [
    {
        path: '/slot',
        name: RouteName.Slot,
        component: Slot
    },
    {
        path: '/echart',
        name: RouteName.Echart,
        component: Echart
    },
    {
        path: '/checkbox',
        name: RouteName.Checkbox,
        component: Checkbox
    },
]