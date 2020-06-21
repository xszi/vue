<template>
<div>
    <!-- 具名插槽 -->
    <h3>这里是父组件</h3>
    <has-name-child>
        <div class="tmpl" slot="up">
            <span>上面的</span>
            <span>上面的</span>
            <span>上面的</span>
            <span>上面的</span>
            <span>上面的</span>
            <span>上面的</span>
        </div>
        <div class="tmpl" slot="middle">
            <span>中间的</span>
            <span>中间的</span>
            <span>中间的</span>
            <span>中间的</span>
            <span>中间的</span>
            <span>中间的</span>
        </div>
        <div class="tmpl" slot="bottom">
            <span>底部的</span>
            <span>底部的</span>
            <span>底部的</span>
            <span>底部的</span>
            <span>底部的</span>
            <span>底部的</span>
        </div>
    </has-name-child>
</div>
</template>
 
<script>
import hasNameChild from '../slot/has-name-child'
export default{
    
props: [''],
 
components: {
    hasNameChild
},
 
data(){
    return {
        
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
        width: 1rem;
        height: 0.5rem;
        line-height: 0.5rem;
        background: #ccc;
     }

 }
</style>
