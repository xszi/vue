<template>
  <div class="hello">
    <h1>keepalive路由缓存</h1>
    <h2>{{msg}}</h2>
      <input class="input-box" placeholder="输入框"/>
  </div>
</template>
 
<script>
export default{
props: [''],
 
components: {},
 
data(){
    return{
        msg: 'hello world'
    }
},
 
mounted(){},
 
methods: {},
 
}
</script>
 
<style lang='less' scoped>
 .hello{
   margin-top: 1rem;
   .input-box{
     width: 100px;
     height: 20px;
     border: solid 1px #ccc;
     border-radius: 5px;
     margin-top: 10px;
   }
 }
</style>
