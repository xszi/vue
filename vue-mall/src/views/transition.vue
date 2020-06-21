<template>
<div class="transition-wrap">
    <div id="example-0" class="example">
        <button @click="show0 = !show0">
            Toggle
        </button>
        <transition name="fade">
            <p v-if="show0">hello</p>
        </transition>
    </div>
    <div id="example-1" class="example">
        <button @click="show1 = !show1">
            Toggle render
        </button>
        <transition name="slide-fade">
            <p v-if="show1">hello</p>
        </transition>
    </div>
    <div id="example-2" class="example">
        <button @click="show2 = !show2">Toggle show</button>
        <transition name="bounce">
            <p v-if="show2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris facilisis enim libero, at lacinia diam fermentum id. Pellentesque habitant morbi tristique senectus et netus.</p>
        </transition>
    </div>
    <div id="example-3" class="example">
        <button @click="show3 = !show3">
            Toggle render
        </button>
        <transition
            name="custom-classes-transition"
            enter-active-class="animated tada"
            leave-active-class="animated bounceOutRight"
        >
            <p v-if="show3">hello</p>
        </transition>
    </div>
    <div id="example-4">
  <button @click="show4 = !show4">
    Toggle
  </button>
  <transition
    v-on:before-enter="beforeEnter"
    v-on:enter="enter"
    v-on:leave="leave"
    v-bind:css="false"
  >
    <p v-if="show4">
      Demo
    </p>
  </transition>
</div>
</div>
</template>
 
<script>
export default{
props: [''],
 
components: {},
 
data(){
    return{
        show0: true,
        show1: true,
        show2: true,
        show3: true,
        show4: true,
    }
},
 
mounted(){},
 
methods: {
    beforeEnter: function (el) {
      el.style.opacity = 0
    },
    enter: function (el, done) {
      Velocity(el, { opacity: 1, fontSize: '1.4em' }, { duration: 300 })
      Velocity(el, { fontSize: '1em' }, { complete: done })
    },
    leave: function (el, done) {
      Velocity(el, { translateX: '15px', rotateZ: '50deg' }, { duration: 600 })
      Velocity(el, { rotateZ: '100deg' }, { loop: 2 })
      Velocity(el, {
        rotateZ: '45deg',
        translateY: '30px',
        translateX: '30px',
        opacity: 0
      }, { complete: done })
    }
},
 
}
</script>
 
<style lang='less' scoped>

.example{
    margin-bottom: 0.3rem;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active 在低于版本 2.1.8 中 */ {
  opacity: 0;
}


/* 进入和离开动画可以分别 */
/* 设置不同的持续时间(duration)和动画函数(timing function) */
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active 在低于 2.1.8 版本中 */ {
  transform: translateX(10px);
  opacity: 0;
}

.bounce-enter-active {
  animation: bounce-in .5s;
}
.bounce-leave-active {
  animation: bounce-in .5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}


</style>
