const Slot = () => import(/* webpackChunkName: "slot" */ '../views/slot/Parent.vue')
const Echart = () => import(/* webpackChunkName: "chart" */ '../views/echart/Index.vue')

export enum RouteName{
    Slot = 'Slot',
    Echart = 'Echart'
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
    }
]