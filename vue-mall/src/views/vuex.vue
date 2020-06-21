<template>
<div class="container">
    <input v-model="message" class="input">
</div>
</template>
 
<script>
import { mapState } from 'vuex'
export default{
props: [''],
 
components: {},
 
data(){
    return{
        // message: ''
    }
},

computed: {
    // ...mapState(['message', 'city'])
    message: { 
        get () { 
            return this.$store.state.message 
        }, 
        set (value) { 
            this.$store.commit('updateMessage', value) 
        }
    }
},

mounted(){},
 
methods: {},
 
}
</script>
 
<style lang='less' scoped>
 .container{
    height: 100px;
    .input{
        display: inline-block;
        width: 100%;
        height: 60px;
        border: solid 1px #ccc;
        border-radius: 10px;
        margin: auto 0;
    }
 }
</style>
