<template>
  <div class="hello">
    <input class="input-box" placeholder="请输入"/>
    <p>可根据进入离开时activated和deactivated钩子函数来分析缓存过程</p>
    <p class="jump-link" @click="jump">点击这里跳转再点浏览器返回</p>
  </div>
</template>
 
<script>
export default{
props: [''],
 
components: {
},
 
data(){
    return{
      msg: 'hello world'
    }
},
 
mounted(){},

//只有设置keep-alive时才会触发
activated() {
  
},

//只有设置keep-alive时才会触发
deactivated() {
},

methods: {
  jump() {
    this.$router.push('/debounce')
  }
},
 
}
</script>
 
<style lang='less' scoped>
 .hello{
   background: #fff;
   margin-top: 1rem;
   .input-box{
     width: 200px;
     height: 30px;
     border: solid 1px #ccc;
     border-radius: 5px;
     margin-top: 10px;
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
