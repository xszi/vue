<template>
<div class="slot">
    <!-- 把父组件声明处里面定义的内容插入到子组件留有的插槽内 -->
    <!-- 普通插槽 -->
    <div class="father">
        <h3>这里是父组件</h3>
        <no-name-child>
            <div class="tmpl">
              <span>菜单1</span>
              <span>菜单2</span>
              <span>菜单3</span>
              <span>菜单4</span>
              <span>菜单5</span>
              <span>菜单6</span>
            </div>
        </no-name-child>
    </div>
</div>
</template>
 
<script>
import noNameChild from '../slot/no-name-child'
export default{
props: [''],
 
components: {
    noNameChild
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
        width: 1rem;
        height: 0.5rem;
        line-height: 0.5rem;
        background: #ccc;
     }

 }
</style>
