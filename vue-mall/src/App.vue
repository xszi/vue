<template>
  <div id="app" @touchend="touchEnd" @touchstart="touchStart">
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view>
    <!-- <keep-alive $route.me="keepalive">
      <router-view include='aliveInput'></router-view>
      <transition :name="moveName" mode="in-out">
        <router-view class="child-view"></router-view>
      </transition>
    </keep-alive> -->
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return{
      moveName: 'slide-left',
      transitionFlag: false    
    }
  },
  watch: {
    $route(to, from) {
      if (!from.name) {
        this.moveName = ''
      }
      if (to.meta.grade < from.meta.grade) {
        this.moveName = this.transitionFlag ? 'slide-left' : ''
      }else {
        this.moveName = this.transitionFlag ? 'slide-right' : ''
      }
    }
  },
  created() {
    //  ios 左滑事件打开，事件写在第一次加载页面 0 关闭 1打开
    window.webkit && window.webkit.messageHandlers.allowsGestureBack.postMessage(1)  
  },
  methods: {
    // 触摸开始，关闭动画
    touchStart(e) {
      this.transitionFlag = false
    },

    // 触摸离开 判断是否右滑，不是的话打开动画
    touchEnd(e) {
      if (e.changedTouches[0].clientX < 0) {
        this.transitionFlag = false
      }else {
        this.transitionFlag = true
        // 因为头部是app自己的 所以要加定时器关上
        // setTimeout(function(){
        //   vm.transitionFlag = false
        // }, 300)
      }
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.child-view {
  width: 100%;
  height: auto;
  position: fixed;
  top: 0;
  bottom: 0;
  margin: 0 auto;
  overflow-y: auto;
  overflow-x: hidden;
}
/* 路由切换动画 */
.slide-left-enter{
  position:absolute !important;
  top:0;
  left:0;
  -webkit-transform: translate(100%, 0);
  transform: translate(100%, 0);
  z-index: 1000;
}

.slide-move-leave-active{
  position:absolute !important;
  top:0;
  left:0;
  transition: 0s ease;
  -webkit-transform: translate(0, 0);
  transform: translate(0, 0);
  z-index: 2000;
}

.slide-move-enter{
  position:absolute !important;
  top:0;
  left:0;
  transition: 0s ease;
  -webkit-transform: translate(0, 0);
  transform: translate(0, 0);
  z-index: 3000;
}

.slide-left-leave-active{
  position:absolute !important;
  top:0;
  left:0;
  transition: 0s .2s ease;
  -webkit-transform: translate(-100%, 0);
  transform: translate(-100%, 0);
  z-index: 2000;
}

.slide-right-leave-active{
  position:absolute !important;
  top:0;
  left:0;
  -webkit-transform: translate(100%, 0);
  transform: translate(100%, 0);
  transition: 0s .2s ease;
  z-index: 2000;
}

.slide-right-enter {
  position:absolute !important;
  top:0;
  left:0;
  -webkit-transform: translate(-100%, 0);
  transform: translate(-100%, 0);
  z-index: 1000;
}
</style>
