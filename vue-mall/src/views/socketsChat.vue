<!-- 利用socket.io实现简单的实时聊天-->
<template>
  <div class="card mt-3" >
      <div class="card-body" v-if="messages.length&&messages.length>0">
          <div class="card-title">
              <h3>Chat Group</h3>
              <hr>
          </div>
          <div class="card-body">
              <ul class="messages" v-for="(msg, index) in messages" :key="index">
                  <li><span class="user">{{ msg.user }}: </span> <span class="message">{{ msg.message }}</span></li>
              </ul>
          </div>
      </div>
      <div class="card-footer">
          <form @submit.prevent="sendMessage">
              <div class="gorm-group">
                  <label for="user">User:</label>
                  <input type="text" v-model="user" class="form-control">
              </div>
              <div class="gorm-group pb-3">
                  <label for="message">Message:</label>
                  <input type="text" v-model="message" class="form-control">
              </div>
              <button type="submit" class="btn btn-success">Send</button>
          </form>
      </div>
  </div>
</template>

<script>
// 下一步要做：
// 1. 写输入验证；
// 2. 发送成功提示图标；
import io from 'socket.io-client';
export default {
    data() {
        return {
            user: '', // 用户
            message: '', //所发信息
            messages: [], //信息数组
            socket : io('localhost:3001') //页面加载后就与后台建立socket连接
        }
    },
    methods: {
        // 发送信息
        sendMessage(e) {
            e.preventDefault();
            // 通过socket发送信息到服务端
            this.socket.emit('SEND_MESSAGE', {
                user: this.user,
                message: this.message
            });
            // 清空输入信息
            this.message = ''
        }
    },
    mounted() {
        // 与后台建立socket连接，并监听后台返回的信息
        this.socket.on('MESSAGE', (data) => {
            this.messages = [...this.messages, data];
            // you can also do this.messages.push(data)
            console.log( this.messages, 'this.messages')
        });
    }
}
</script>

<style lang="less" scoped>
    .card-title{
        text-align: center;
    }
    .card-body{
        width: 6rem;
        margin: 0.2rem auto;
        text-align: left;
        .messages{
            padding: 0.2rem 0.4rem;
            font-size: 0.5rem;
            .user{
                display: inline-block;
                width: 1.5rem;
                font-weight: bolder;
                text-align: right;
            }
            .user{
                display: inline-block;
            }
        }
    }
    .gorm-group{
        height: 0.5rem;
        line-height: 0.5rem;
        margin-top: 0.4rem;
        input{
            width: 5rem;
            height: 0.5rem;
            border: solid 1px #f5f5f5;
            border-radius: 0.1rem;
        }
        label{
            display: inline-block;
            width: 2rem;
        }
    }
    .pb-3{
        margin-top: 0.2rem;
    }
    .btn{
        margin: 0.2rem auto;
        width: 1.2rem;
        height: 0.5rem;
        border-radius: 0.1rem;
        background: burlywood;
        color: #fff;
    }
</style>
