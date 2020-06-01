<template>
  <img :src="src" alt="banner" class="banner-image" />
</template>

<script lang="ts">

import { Component, Prop, Vue} from "vue-property-decorator"

@Component
export default class Home extends Vue {
    @Prop({
        type: String,
        default: ""
    })
    src!: string
}
</script>

<style lang="less" scoped>
.banner-image {
  width: 100%;
  height: 14rem;
  border-radius: 0.5rem;
}
</style>