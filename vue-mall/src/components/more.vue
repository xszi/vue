<template>
  <section class="more-main" :class="{'margin-bottom-clear' : !$store.state.isShowFooter}">
    <p v-show="isMore == 2">上拉加载更多……</p>
    <p v-show="isMore == 3">抱歉，没有更多了</p>
    <div class="has-bottom" v-show="isMore == 4">
      <p ><span></span><i>&nbsp;我是有底线的&nbsp;</i><span></span></p>
    </div>
    <!-- <p v-show="isMore == 4">网络繁忙，请稍后试试吧</p> -->
  </section>
</template>
<script>
module.exports = {
  name:'more',
  props: ["isMore"], //1 未加载；2 加载中 ；3 没有更多了；4 出错了
  data: function() {
    return {
    };
  },
  mounted () {
    console.log(this.isMore);
  }
};
</script>
<style lang="less">
.more-main {
  width: 100%;
  font-size: 0.3rem;
  color: #9C9C9C;
  text-align: center;
  padding: 0.25rem 0;
  padding-bottom: 0.4rem;
  font-weight: 600;
  .has-bottom{
    width: 4rem;
    margin: 0 auto;
    p{
      display: flex;
      margin-bottom: 0.05rem;
      text-align: center;
      span{
        width: 1rem;
        height: 0.02rem;
        background-color: #C7C7C7;
        margin-top: 0.1867rem;
      }
    }
  }
}
.margin-bottom-clear {
    margin-bottom: 0!important;
}
</style>