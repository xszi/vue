<template>
  <div>
    <div
      class="item"
      v-for="(item,index) of list"
      :key="index"
    >
      <div class="item-title">
        <span class="iconfont">&#xe632;</span>
        {{item.title}}
      </div>
      <div v-if="item.children" class="item-children">
        <detail-list :list="item.children"></detail-list>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailList',
  props: {
    list: Array
  }
}
</script>

<style lang="stylus" scoped>
  @import "~styles/varibles.styl"
  .item-title
    line-height: .8rem
    font-size: .36rem
    padding: 0 .2rem
  .item-children
    padding: 0 .4rem
</style>
