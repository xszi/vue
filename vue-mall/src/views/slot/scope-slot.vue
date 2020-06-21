<template>
<div>
    <h3>这里是父组件</h3>
    <!--第一次使用：用flex展示数据-->
    <scope-child>
      <template slot-scope="user">
        <div class="tmpl">
          <span v-for="(item,index) in user.data" :key="index">{{item}}</span>
        </div>
      </template>
    </scope-child>
</div>
</template>
 
<script>
import scopeChild from '../slot/scope-child'
export default{
props: [''],
 
components: {
    scopeChild
},
 
data(){
    return{

    }
},
 
mounted(){},
 
methods: {},
 
}
</script>
 
<style lang='less' scoped>
 .tmpl{
     margin-top: 0.3rem;
     span{
        display: inline-block;
        width: 1.4rem;
        height: 0.5rem;
        line-height: 0.5rem;
        background: #ccc;
        margin-left: 0.1rem;
     }

 }
</style>
