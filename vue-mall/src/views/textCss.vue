<template>
<div class="parent">
    <div class="child1">
        <p>I am child1</p>
        <p>I am child1</p>
        <p>I am child1</p>
        <p>I am child1</p>
    </div>
    <div class="child2">
        <p>I am child2</p>
        <p>I am child2</p>
        <p>I am child2</p>
        <p>I am child2</p>
    </div>
</div>
</template>
 
<style lang='less' scoped>
//这样引入会报错
// @import "@/assets/css/variables.less";

//这样引入会报错
@import "~@/assets/css/variables.less";
.parent{
    width: 8.25rem;
    height: 6.25rem;
    background: #f5f5f5;
    display: flex;
    flex-direction: column;
    .child1{
        // width: 4rem;
        // height: 4rem;
        background: #ccc;
        display: flex;
    }
    .child2{
        // width: 4rem;
        // height: 4rem;
        background: #ffc;
        display: flex;
    }
}
</style>
