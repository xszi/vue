<template>
  <div class="Parent">

    <!-- 默认插槽 -->
    <!-- <div class="default-slot">
      <p>这是父组件</p>
      <child>
        <p>父组件要在子组件显示的部分</p>
      </child>
    </div> -->

    <!-- 具名插槽 -->
    <!-- <div class="name-slot">
      <p>这是父组件</p>
        <template v-slot:header><p>这是头部</p></template>
        <template v-slot:content><p>这是正文内容</p></template>
        <template v-slot:footer><p>这是底部</p></template>
      </child>
    </div> -->

    <!-- 作用域插槽 -->
    <div class="name-slot">
      <p>这是父组件</p>
      <!--第一次使用：用flex展示数据-->
      <child>
        <template slot-scope="user">
          <div class="tmpl">
            <span v-for="(item, index) in user.data" :key="index">{{item}}</span>
          </div>
        </template>
      </child>

      <!--第二次使用：用列表展示数据-->
      <child>
        <template slot-scope="user">
          <ul>
            <li v-for="(item, index) in user.data" :key="index">{{item}}</li>
          </ul>
        </template>
      </child>

      <!--第三次使用：直接显示数据-->
      <child>
        <template slot-scope="user">
          {{user.data}}
        </template>
      </child>

      <!--第四次使用：不使用其提供的数据, 作用域插槽退变成匿名插槽-->
      <child>
        我就是模板
      </child>
    </div>
  </div>
</template>

<script>
import Child  from './Child'
export default {
  name: 'Parent',
  components: {
    Child
  }
}
</script>

<style lang='less' scoped>
.tmpl{
    span{
      display: inline-block;
      margin-left: 20px;
      color: blue;
    }
} 

</style>
