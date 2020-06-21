<template>
  <div class="hello">
    <keepalive-child></keepalive-child>
    <p class="tip">可根据进入离开时activated和deactivated钩子函数来分析缓存过程</p>
    <p class="jump-link">
      <router-link to="/debounce">点击这里跳转再点浏览器返回</router-link>
    </p>
  </div>
</template>
 
<script>
import keepaliveChild from './child-components/keepalive-child' 
export default{
  // 设置keep-alive缓存时只有这里name属性才有效, 而路由配置index.js里面的路由设置无效，如：
  // <keep-alive exclude="keepalive">
  //   <router-view></router-view>
  // </keep-alive>
  // 此时当前组件keep-alive不会被缓存
name: 'keepalive',
props: [''],
 
components: {
  keepaliveChild
},
 
data(){
    return{
      msg: 'hello world'
    }
},
 
mounted(){
},

//只有设置keep-alive时才会触发
activated() {
},

//只有设置keep-alive时才会触发
deactivated() {

},

methods: {},
 
}
</script>
 
<style lang='less' scoped>
 .hello{
   margin-top: 1rem;
   .tip{
     margin-top: 30px;
     margin-bottom: 30px;
   }
  .jump-link{
    margin-top: 30px;
    a{
     color: red;
    }
   }
 }
</style>
