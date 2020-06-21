<template>
<div class="mycv">
    <p>hahaha</p>
    <div class="containner" :class="[isShow===true? 'changed': '']">
        <p>显示不显示</p>
    </div>
    <div>
        <button @click="toClick">点我</button>
    </div>
</div>
</template>
<script>
export default {
   data() {
       return{
           isShow: false
       }
   },
   methods: {
       toClick() {
           debugger
           let containner = document.querySelector('.containner')
           console.log(containner.className)
           this.isShow = true
           console.log(containner.className)
           setTimeout( () => {
            console.log(containner.className)
           }, 0)
       }
   } 
}
</script>

<style lang="less" scoped>
.mycv{
    .containner{
        visibility: hidden;
    }
}
</style>
