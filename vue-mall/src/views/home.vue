<template>
<div class="home-wrap">
    <router-link to="/catalog">demo目录</router-link>
    <router-link to="/userLogin">项目登录，注册(node)</router-link>
    <div class="list" @click="toMyResume">我的简历</div>
    <div class="list" @click="toMyLottory">彩票选择</div>
    <div class="list" @click="toMyTravel">仿去哪儿</div>
</div>
</template>
 
<script>
import carousel from '../components/carousel'
import axios from 'axios'
export default{
    props: [''],
    components: {
        carousel,
    },
    
    data() {
        return {
            username: '', 
            password: '',
            repassword: '',
            userInfo: '',
            isShowRegisterPage: false, //是否显示注册页面
            isShowLoginPage: true, //是否显示登陆页面
            isSuccessLoginPage: false, //是否显示成功登陆页面
            link1: 'http://wangjiuhua.com/resume/index.html',
            link2: 'http://wangjiuhua.com:3000/',
            link3: 'http://wangjiuhua.com/travel/index.html'
        }
    },
    
    mounted(){
        // this.initData();
    },
    
    methods: {
        toMyResume() {
            window.location.href = this.link1
        },
        toMyLottory() {
            window.location.href = this.link2
        },
        toMyTravel() {
            window.location.href = this.link3
        }
    }
}
</script>
 
<style lang='less' scoped>
    .home-wrap{
        padding-top: 1rem;
        background: #fff;
        display: flex;
        flex-direction: column;
        font-size: 18px;
        a{
            margin-top: 20px;
            color: #000;
        }
        .list{
            margin-top: 20px;
        }
    }

</style>
