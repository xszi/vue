<template>
  <div class="home-recommend">
    <h3>推荐</h3>
    <div class="recommend-container">
      <div
        class="recommend-item"
        v-for="(item, index) in list"
        :key="item.text"
        :class="{'recommend-hover': activeIndex === index}"
        @click="handleClick(index)"
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
import { RouteName } from '../../router/vue-course'

@Component
export default class HomeRecommend extends Vue {

  activeIndex: number = -1
  list: HomeRecommendListItem[] = []

  async created() {
    // 这个报错什么意思？
    this.list = await Service.getHomeRecommendList()
  }

  handleClick(index: number) {
    // todo 跳转到详情页
    this.activeIndex = index
    setTimeout(() => {
      this.$router.push({
        name: RouteName.List
      })
    }, 200)
  }
}
</script>

<style lang="less" scoped>

.recommend-hover {
  transform: translate3d(1px, 1px, 0);
}

h3 {
  font-size: 1.6rem;
  font-weight: bold;
}

.recommend-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  .recommend-item {
    width: 10.6rem;
    height: 10.6rem;
    margin-bottom: 3rem;

    background: gray;
    border-radius: 0.5rem;

    box-shadow: 0.2rem 0.3rem 0.3rem #ccc;

    img {
      border-radius: 0.5rem;
      width: 100%;
      height: 100%;
    }
  }
}
</style>