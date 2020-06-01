<template>
  <div class="home-recomend">
    <h3>推荐</h3>
    <div class="recommend-container">
      <div
        class="recommend-item"
        v-for="(item, index) in list"
        :key="item.text"
        @onClick="onClick(index)"
      >
        <img :src="item.image" />
        <span>{{item.text}}</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">

import { Component, Prop, Vue} from "vue-property-decorator"
import { HomeRecommendListItem } from "../../services/types"
import Service from '../../services/index'

@Component
export default class HomeRecommend extends Vue {

  list: HomeRecommendListItem[] = []

  onClick(index: number) {
    // todo 跳转到详情页
  }

  async created() {
    // 这个报错什么意思？
    this.list = await Service.getHomeRecommendList()
  }
}
</script>

<style lang="less" scoped>

</style>