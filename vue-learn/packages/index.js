import iTreeTransfer from './tree-transfer/index'
import iTree from './tree/index'

const components = [
    iTreeTransfer,
    iTree
]

const install = function (Vue) {
    components.forEach(component => {
        Vue.component(component.name, component)
    })
}

if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue)
}

export default {
    install,
    iTreeTransfer,
    iTree
}
