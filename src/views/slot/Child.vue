<template>
  <div class="child">
    <!-- 默认插槽 -->
    <!--<div class="default-slot">
      <p>这是子组件</p>
      <slot></slot>
    </div>-->
    <!-- 具名插槽 -->
    <!--<div class="name-slot">
      <p>这是子组件</p>
      <slot name="footer"></slot>
      <slot name="header"></slot>
      <slot name="content"></slot>
    </div>-->
    <div class="scope-slot">
      <p>这是子组件</p>
      <!-- 作用域插槽 -->
      <slot :data="data"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Child',
  data() {
    return {
      data: ['zhangsan','lisi','wanwu','zhaoliu','tianqi','xiaoba']
    }
  }
}
</script>
