<template>
  <div class="carousel">
    <swiper class="swiper_container" :options="swiperOption" ref="mySwiper">
      <!-- slides -->
      <swiper-slide class="swiper_item" v-for="(item, index) in imgList" :key="index"><img v-lazy="item" alt=""/></swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination" slot="pagination"></div>
      <!-- <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
      <div class="swiper-scrollbar" slot="scrollbar"></div> -->
    </swiper>
    <div>hahhahaha{{this.$store.state.city}}</div>
  </div>
</template>
<script>
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";
import axios from 'axios';
export default {
  name: "carousel",
  components: {
    swiper,
    swiperSlide
  },
  data() {
    return {
      imgList: [], //轮播图片
      swiperOption: {
        // some swiper options/callbacks
        // 所有的参数同 swiper 官方 api 参数
        pagination: {
          el: ".swiper-pagination",
          dynamicBullets: true
        },
        // autoplay: {
        //   delay: 2500,
        //   disableOnInteraction: false
        // }
      }
    };
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    }
  },
  mounted() {
    // current swiper instance
    // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
    console.log("this is current swiper instance object", this.swiper);
    this.swiper.slideTo(3, 1000, false);
    this.getSwiperData();
  },
  methods: {
    getSwiperData() {
      axios
      .get("/api/index.json ")
      .then((res) => {
        console.log(res)
        this.imgList = res.data.swiper;
      })
      .catch((err) => {
        console.log(err)
      })
    }
  }
};
</script>

<style lang="less" scoped>
.carousel {
  .swiper_container {
    width: 100%;
    height: 180px;
    //  /deep/ 深度作用选择器
    /deep/ .swiper-pagination-bullet-active{
        background: #fff;
    }
    .swiper_item {
      img {
        width: 100%;
        height: 100%;
      }
      img[lazy="loading"] {
        display: block;
        width: 0.5rem;
        height: 0.5rem;
        margin: 1.8rem auto;
      }
    }
  }
}
</style>