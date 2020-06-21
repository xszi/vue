import Vue from 'vue'
// 注册
Vue.directive('throttle', {
    // 只调用一次，指令第一次绑定到元素时调用。在这里可以进行一次性的初始化设置。
    bind: function () {},
    // 被绑定元素插入父节点时调用 (仅保证父节点存在，但不一定已被插入文档中)
    inserted: function (el, binding) {
      const { callback, time } = binding.value
      el.callback = callback
      el.time = time
      el.addEventListener('keyup', () => {
        const nowTime = + new Date()
        if (!el.preTime || nowTime - el.preTime > el.time) {
          el.preTime = nowTime
          el.callback()
        }
      })
    },
    // 所在组件的 VNode 更新时调用，但是可能发生在其子 VNode 更新之前。指令的值可能发生了改变，也可能没有。但是你可以通过比较更新前后的值来忽略不必要的模板更新
    update: function (el, binding) {
    //   console.log('update')
      const { callback, time } = binding.value
      el.callback = callback
      el.time = time
    },
    // 指令所在组件的 VNode 及其子 VNode 全部更新后调用。
    componentUpdated: function () {},
    // 只调用一次，指令与元素解绑时调用。
    unbind: function () {}
  }),
  
  Vue.directive('debounce', {
    bind: function (el, binding, vnode) {
    },
    inserted: function (el, binding) {
      const { callback, time } = binding.value
      el.callback = callback
      el.time = time
      el.timeCall = null
      el.addEventListener('keyup', () => {
        clearTimeout(el.timeCall)
        el.timeCall = setTimeout( () => {
          el.callback()
        }, el.time || 500) 
      })
    },
    update: function (el, binding) {
    //   console.log('update')
      const { callback, time } = binding.value
      el.callback = callback
      el.time = time
    },
    componentUpdated: function () {},
    unbind: function () {}
  })

//   “节流”与“防抖”的本质
// 这两个东西都以闭包的形式存在。
// 它们通过对事件对应的回调函数进行包裹、以自由变量的形式缓存时间信息，最后用 setTimeout 来控制事件的触发频率。

//   function debounce(fn) {
//     let timeout = null; // 创建一个标记用来存放定时器的返回值
//     return function () {
//       clearTimeout(timeout); // 每当用户输入的时候把前一个 setTimeout clear 掉
//       timeout = setTimeout(() => { // 然后又创建一个新的 setTimeout, 这样就能保证输入字符后的 interval 间隔内如果还有字符输入的话，就不会执行 fn 函数
//         fn.apply(this, arguments);
//       }, 500);
//     };
//   }

  function throttle(fn) {
    let canRun = true; // 通过闭包保存一个标记
    return function () {
      if (!canRun) return; // 在函数开头判断标记是否为true，不为true则return
      canRun = false; // 立即设置为false
      setTimeout(() => { // 将外部传入的函数的执行放在setTimeout中
        fn.apply(this, arguments);
        // 最后在setTimeout执行完毕后再把标记设置为true(关键)表示可以执行下一次循环了。当定时器没有执行的时候标记永远是false，在开头被return掉
        canRun = true;
      }, 500);
    };
  }