<template>
  <div class="demo-home">
      这里是vue实战
  </div>
</template>

<script lang="ts">

import { Component, Prop, Vue} from "vue-property-decorator"
import Slider from '../../components/vue-course/Slider.vue'
import Banner from '../../components/vue-course/Banner.vue'

@Component({
    components: {
        Slider,
        Banner
    }
})
export default class DemoHome extends Vue {
    // tabs: string[] = ["推荐"]
    // activeTab = 0

    // changeActiveTab(index: number) {
    //     this.activeTab = index
    // }
    
}
</script>