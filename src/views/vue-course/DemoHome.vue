<template>
  <div class="demo-home">
      <slider @onTabChange="onTabChange"/>
      <banner :src="bannerSrc" />
      <home-recommend/>
  </div>
</template>

<script lang="ts">

import { Component, Prop, Vue} from "vue-property-decorator"
import Slider from '../../components/vue-course/Slider.vue'
import Banner from '../../components/vue-course/Banner.vue'
import HomeRecommend from '../../components/vue-course/HomeRecommend.vue'

@Component({
    components: {
        Slider,
        Banner,
        HomeRecommend
    }
})
export default class DemoHome extends Vue {

    readonly BANNER_LIST = [
        "https://img.tukuppt.com//ad_preview/00/11/13/5c9940242bf11.jpg!/fw/780",
        "https://img.tukuppt.com//ad_preview/00/03/56/5c98abb074bdd.jpg!/fw/780",
        "https://img.tukuppt.com//ad_preview/00/10/15/5c992911709f7.jpg!/fw/780",
        "https://img.tukuppt.com//ad_preview/00/19/70/5c9a0504de105.jpg!/fw/780",
        "http://pic.616pic.com/bg_w1180/00/14/61/bjDQ7hTsKA.jpg!/fw/1120",
        "https://img.tukuppt.com//ad_preview/00/10/15/5c992911709f7.jpg!/fw/780",
        "https://img.tukuppt.com//ad_preview/00/19/70/5c9a0504de105.jpg!/fw/780",
        "http://pic.616pic.com/bg_w1180/00/14/61/bjDQ7hTsKA.jpg!/fw/1120"
    ]
    bannerSrc: string = this.BANNER_LIST[0]

    onTabChange(index: number) {
        this.bannerSrc = this.BANNER_LIST[index]
    }
    
}
</script>