// actions.js
export default {
    // 可以调用context.commit提交一个 mutation。
    changeCity(ctx, city) {
        ctx.commit('changeCity', city)
    }
}