<template>
<div class="user-login-wrap">
    <div class="Box">
         <!--登录成功-->
        <div class="LRSBox" v-if="isSuccessLoginPage">
            <div class="title"><span>用户信息</span></div>
            <p><span class="colHeader">{{userInfo.username}}！</span></p>
            <p v-if="userInfo.username=='waltz'">
                <span class="colManager">您好，管理员！</span>
                <router-link to="/textP">进入管理</router-link>
            </p>
            <p v-else><span class="colHeader">您好，欢迎来到我的博客！</span></p>
            <p><span class="colHeader" @click="loginOut">退出</span></p>
        </div>

        <!--登录-->
        <div class="LRSBox" v-if="isShowLoginPage">
            <div class="title"><span>登录</span></div>
            <div class="inputBox">
                <span class="colHeader">用户名：</span>
                <input type="text" v-model="username"/>
            </div>
            <div class="inputBox">
                <span class="colHeader">密码：</span>
                <input type="password" v-model="password"/>
            </div>
            <p v-if="isShowMessage" class="warning textCenter">{{message}}</p>
            <div class="inputBox">
                <span class="colHeader" @click="toLogin">登录</span>
                <a @click="toRegisterPage">立即注册</a>
            </div>
        </div>

        <!--注册-->
        <div class="LRSBox" v-if="isShowRegisterPage">
            <div class="title"><span>注册</span></div>
            <div class="inputBox">
                <span class="colHeader">用户名：</span><input class="input" type="text" v-model="username"/>
            </div>
            <div class="inputBox">
                <span class="colHeader">密码：</span><input class="input" type="password" v-model="password"/>
            </div>
            <div class="inputBox">
                <span class="colHeader">密码：</span><input class="input" type="password" v-model="repassword"/>
            </div>
            <p v-if="isShowMessage" class="warning textCenter">{{message}}</p>
            <div class="inputBox">
                <span class="colHeader"  @click="toRegister">注册</span>
                <a @click="toLoginPage">立即登录</a>
            </div>
        </div>
    </div>
</div>
</template>
 
<script>
import axios from 'axios'
export default{
    props: [''],
    components: {
    },
    
    data() {
        return {
            username: '', //用户名
            password: '', //密码
            repassword: '', //重复密码
            userInfo: '', //用户信息
            message: '', //返回提示信息
            isShowRegisterPage: false, //是否显示注册页面
            isShowLoginPage: true, //是否显示登陆页面
            isSuccessLoginPage: false, //是否显示成功登陆页面
            isShowMessage: false, //是否显示提示信息
        }
    },
    
    mounted(){
        this.checkLogin();
    },
    
    methods: {
        // 验证是否已经登录
        checkLogin() {
            let url = tripDoc.api + tripDoc.activeAPI.check_login;
            axios.post(url, {}).then((res) => {
                if(res.data.code == 0) {
                    this.userInfo = res.data.userInfo;
                    this.message = res.data.message
                    if(this.message == '登录成功') {
                        this.isSuccessLoginPage = true;
                        this.isShowLoginPage = false;
                    }
                }else{
                    this.isShowMessage = true;
                    this.message = res.data.message;
                }
            })
        },

        // 到注册页面
        toRegisterPage() {
            this.isShowRegisterPage = true;
            this.isShowLoginPage = false;
            this.isShowMessage = false
        },

        // 到登录页面
        toLoginPage() {
            this.isShowRegisterPage = false;
            this.isShowLoginPage = true;
            this.isShowMessage = false
        },

        // 登陆
        toLogin() {
            let url = tripDoc.api + tripDoc.activeAPI.login_post;
            axios.post(url, {
                username: this.username,
                password: this.password
            })
            .then( (res) => {
                if(res.data.code == 0) {
                    this.userInfo = res.data.userInfo;
                    this.message = res.data.message;
                    if(this.message == '登录成功') {
                        this.isSuccessLoginPage = true;
                        this.isShowLoginPage = false;
                    }
                }else{
                    this.isShowMessage = true;
                    this.message = res.data.message;
                }
            })
            .catch( (err) => {
                console.log(err)
            })
        },

        // 注册新用户
        toRegister() {
            let url = tripDoc.api + tripDoc.activeAPI.register_post;
            let data = {
                username: this.username,
                password: this.password,
                repassword: this.repassword
            }
            axios.post(url, data).then( (res) => {
                if(res.data.code == 0) {
                    this.userInfo = res.data.userInfo;
                    if(res.data.message == '注册成功') {
                        this.isShowRegisterPage = false;
                        this.isShowLoginPage = true;
                        this.isShowMessage = false;
                    }
                }else{
                    this.isShowMessage = true;
                    this.message = res.data.message;
                }
            })
            .catch( (err) => {
                console.log(err)
            })
        },

        // 退出登陆
        loginOut() {
            let url = tripDoc.api + tripDoc.activeAPI.loginOut_get;
            axios.get(url, {}).then( (res) => {
                // 清理缓存之后刷新页面
                if(!res.code){
                    window.location.reload();
                }
            })
            .catch( (err) => {
                console.log(err)
            })
        }
    },
    
    }
</script>
 
<style lang='less' scoped>
    .Box{
        width: 8.2rem;
        height: 8rem;
        background: #f5f5f5;
        margin: .625rem auto;
        padding-top: 0.2rem;
        .LRSBox{
            width: 8rem;
            height: 4rem;
            margin: 1rem auto;
            .title{
                height: 1rem;
                line-height: 1rem;
            }
            .inputBox{
                height: 1.1rem;
                line-height: 1.1rem;
                .colHeader{
                    width: 1.5rem;
                    display: inline-block;
                    text-align: right;
                }
                .input{
                    height: 0.9rem;
                    line-height: 0.9rem;
                }
            }
        }
    }
</style>
