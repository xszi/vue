<template>
<div>
    <div class="display">
        <p style="color: red">按F12查看打印台结果</p>
    </div>
    <div class="display">
        <p>未作处理</p>
        <p><input type="text" class="input-box" v-model="inputContent1" @keyup="getInput1"/></p>
    </div>
    <div class="display">
        <p>防抖处理</p>
        <p><input type="text" class="input-box" v-model="inputContent2" v-debounce="{'callback':getInput2, time: '500'}"/></p>
    </div>
    <div class="display">
        <p>节流处理</p>
        <p><input type="text" class="input-box" v-model="inputContent3" v-throttle="{'callback':getInput3, time: '1000'}"/></p>
    </div>
    <div class="display">
        <p @click="goTolink" style="color: red">点击查看文章链接</p>
    </div>
        <div class="display">
        <p @click="goDisplay" style="color: red">点击链接查看录屏效果</p>
    </div>
</div>
</template>
 
<script>
export default{
props: [''],
 
components: {},
 
data(){
    return{
        inputContent1: '',
        inputContent2: '',
        inputContent3: ''
    }
},

// directives: {
//     debounce: {
//         inserted: function (el, binding) {
//             console.log(binding.value, 'binding.value')
//             let timer
//             el.addEventListener('keyup', () => {
//             if (timer) {
//                 clearTimeout(timer)
//             }
//             timer = setTimeout(() => {
//                 binding.value()
//             }, 300)
//             })
//         }
//     }
// },
created() {
    debugger
},
mounted(){},
 
methods: {
    getInput1() {
        console.log(this.inputContent1, '-----')
    },
    getInput2() {
        console.log(this.inputContent2, '-----')
    },
    getInput3() {
        console.log(this.inputContent3, '-----')
    },
    goTolink() {
        window.location.href = 'https://juejin.im/post/5db6d7f7f265da4d4835c014'
    },
    goDisplay() {
        window.location.href = 'https://user-gold-cdn.xitu.io/2019/5/16/16ac0fba56ec1726?imageslim'
    }
},
 
}
</script>
 
<style lang='less' scoped>
.display{
    margin-top: 30px;
}
 .input-box{
     width: 200px;
     height: 30px;
     border: solid 1px #ccc;
 }
</style>
