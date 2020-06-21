//有时候我们需要从 store 中的 state 中派生出一些状态，例如对列表进行过滤并计数。
//Vuex 允许我们在 store 中定义“getter”（可以认为是 store 的计算属性）。
//就像计算属性一样，getter 的返回值会根据它的依赖被缓存起来，且只有当它的依赖值发生了改变才会被重新计算。

// const currentCity = state => {
//     return state.city
// }

// export default {
//     currentCity
// }