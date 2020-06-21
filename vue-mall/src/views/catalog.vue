<template>
<div class="catalog-wrap">
    <p class="catalog"><router-link to="/debounce">防抖和节流</router-link></p>
    <p class="catalog"><router-link to="/transition">transition动画(vue)</router-link></p>
    <p class="catalog"><router-link to="/keepalive">keepalive(无缓存)</router-link></p>
    <p class="catalog"><router-link to="/aliveInput">aliveInput(有缓存)</router-link></p>
    <p class="catalog"><router-link to="/scrollList">页面某个div上拉加载更多</router-link></p>
    <p class="catalog"><router-link to="/scroll">滚动侧面导航吸顶</router-link></p>

    <!-- <router-link class="catalog"><router-link to="/noNameSlot">默认插槽(vue)</router-link></p> -->
    <!-- <router-link class="catalog"><router-link to="/hasNameSlot">具名插槽(vue)</router-link></p> -->
    <!-- <router-link class="catalog"><router-link to="/scopeSlot">作用域插槽(vue)</router-link></p> -->
    <!-- <router-link class="catalog"><router-link to="/slide">模拟手指滑动问题</router-link></p> -->
    <router-link to="/mycv">我的简历</router-link>
    <!-- <router-link class="catalog"><router-link to="/vuex">vuex与v-model是否有冲突？</router-link></p> -->
    <!-- <router-link class="catalog"><router-link to="/socket">socket.io聊天(node)</router-link></p> -->
</div>
</template>
 
<script>
export default{
props: [''],
 
components: {},
 
data(){
    return {

    }
},
 
mounted(){},
 
methods: {},
 
}
</script>
 
<style lang='less' scoped>
.catalog-wrap{
    height: 100%;
    background: #fff;
    .catalog{
        padding-top: 0.5rem;
        a{
            color: #75caf1
        }
    }
}
</style>
