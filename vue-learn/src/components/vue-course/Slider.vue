<template>
  <div class="slider">
    <span v-for="(tab, index) in tabs"
      :key="tab + index"
      class="tab-item"
      :class="{ active: activeTab === index }"
      @click="changeActiveTab(index)">
      {{tab}}
    </span>
  </div>
</template>

<script lang="ts">

import { Component, Prop, Vue} from "vue-property-decorator"

@Component
export default class Slider extends Vue {

  tabs: string[] = ['推荐', '视频', '文章', '发现', '我的', '娱乐', '交友']
  activeTab = 0

  changeActiveTab(index: number) {
    this.activeTab = index
    this.$emit('onTabChange', index)
  }
}
</script>

<style lang="less" scoped>
.slider {
  margin: 2rem 0;
  display: flex;
  align-items: center;
  overflow: scroll;

  &::-webkit-scrollbar {
    width: 0;
  }

  .tab-item {
    flex: 0 0 25%;
    color: #353535;
    text-align: center;
    line-height: 2.6rem;
    transition: all 0.3s ease-in-out;

    &.active {
      transform: scale(1.2);
      font-weight: bold;
      color: #3a3a3a;
    }
  }
}
</style>