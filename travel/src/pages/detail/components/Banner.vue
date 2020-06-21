<template>
  <div>
    <div
      class="banner"
      @click="handleBannerClick">
      <img class="banner-img" src="http://img1.qunarzz.com/sight/p0/1805/6f/6f885ea8b30c67bca3.water.jpg_600x330_f2f668e4.jpg"/>
      <div class="banner-info">
        <div class="banner-number">
          <span class="iconfont">&#xe632;</span>
          39
        </div>
        <div class="banner-title">世界之窗(AAAAA景区)</div>
      </div>
    </div>
    <common-gallery
      :imgs="imgs"
      v-show="showGallery"
      @close="handleGalleryClose"
    >
    </common-gallery>
  </div>
</template>

<script>
import CommonGallery from 'common/gallery/Gallery'
export default {
  name: 'DetailBanner',
  data () {
    return {
      showGallery: false,
      imgs: ['http://img1.qunarzz.com/sight/p0/1412/30/f0e17266e0803e74fde93826f1852e08.water.jpg_r_800x800_c81a0e5f.jpg', 'http://img1.qunarzz.com/sight/p0/1412/78/49fb0c50360fd0dfe213fca285fe43b7.water.jpg_r_800x800_869000eb.jpg']
    }
  },
  methods: {
    handleBannerClick () {
      this.showGallery = true
    },
    handleGalleryClose () {
      this.showGallery = false
    }
  },
  //  局部组件
  components: {
    CommonGallery
  }
}
</script>

<style lang="stylus" scoped>
  .banner
    position: relative
    overflow: hidden
    height: 0
    padding-bottom: 55%
    .banner-img
      width: 100%
    .banner-info
      display: flex
      flex-direction: column
      position: absolute
      left: 0
      right: 0
      bottom: 0
      line-height: .6rem
      color: #fff
      background-image: linear-gradient(top, rgba(0,0,0,0), rgba(0,0,0,0.8))
      .banner-title
        flex: 1;
        font-size: .36rem
        padding: 0 .2rem .2rem .2rem
      .banner-number
        margin: 0 .2rem
        padding: 0 .4rem
        width: .8rem
        height: .4rem
        line-height: .4rem
        border-radius: .2rem
        background: rgba(0,0,0,.6)
</style>
