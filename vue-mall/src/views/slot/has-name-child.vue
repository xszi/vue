<template>
<div>
    <p>这里是子组件</p>
    <slot name="middle"></slot>
    <slot name="up"></slot>
    <slot name="bottom"></slot>
</div>
</template>
 
<script>
export default{
props: [''],
 
components: {},
 
data(){
    return{

    }
},
 
mounted(){},
 
methods: {},
 
}
</script>
 
<style lang='less' scoped>
 
</style>
