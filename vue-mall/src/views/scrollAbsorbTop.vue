<template>
  <div class="container" ref="container">
    <div class="header"></div>
    <div class="middle">
      <div :class="[navLeftFixed ? 'center_box_left_wrap':'' ]">
        <div
            :class="[navLeftFixed ? 'center_box_left_fixed':'center_box_left', navLeftAbsolute ? 'center_box_left_absolute': '' ]"
          id="center_box_lefts"
        >
          <span
            v-for="(item, index) in tab_list"
            :key="item.id"
            :class="[curIndex==index ? 'active':'' ]"
            @click="selectTab(index)"
          >{{item.title}}</span>
        </div>
      </div>
      <div :class="[navLeftFixed ? 'center_box_right_100':'center_box_right' ]">
        <div></div>
      </div>
    </div>
    <div class="bottom"></div>
  </div>
</template>
 
<script>
export default {
  props: [""],

  components: {},

  data() {
    return {
      navLeftFixed: false, //侧边导航吸顶
      navLeftAbsolute: false,
      curIndex: 0, // 当前index
      containerScrollTop: "",
      tab_list: [
        {
          title: "衣服",
          id: "1001"
        },
        {
          title: "水果",
          id: "1002"
        },
        {
          title: "书籍",
          id: "1003"
        },
        {
          title: "音乐",
          id: "1004"
        },
        {
          title: "体育",
          id: "1005"
        },
        {
          title: "百货",
          val: "1006"
        }
      ] //侧边数据
    };
  },

  mounted() {
    let container = this.$refs.container;
    container.onscroll = e => {
      let containerScrollTop = e.target.scrollTop;
      console.log(containerScrollTop);
      let offsetTop = document.querySelector("#center_box_lefts").offsetTop;
      if (containerScrollTop > 200 && containerScrollTop > offsetTop) {
        this.navLeftFixed = true;
      } else {
        this.navLeftFixed = false;
      }
      if( containerScrollTop > 665) {
        this.navLeftAbsolute= true
      }else{
        this.navLeftAbsolute= false
        
      }
    };
  },

  methods: {
    selectTab(index) {
      this.curIndex = index;
    }
  }
};
</script>
 
<style lang='less' scoped>
.active {
  background: #f5f5f5;
  color: red;
}
.container {
  width: 100%;
  height: 100%;
  -webkit-overflow-scrolling: touch;
  .header {
    width: 100%;
    height: 200px;
    background: rgb(204, 204, 204);
  }
  .middle {
    width: 100%;
    height: 1200px;
    background: #aedcf7;
    display: flex;
    .center_box_left_wrap{
        height: 100%;
        position: relative;
    }
  }
  .bottom {
    width: 100%;
    height: 300px;
    background: #ccc;
  }
}
.center_box_left {
  display: flex;
  flex-direction: column;
  width: 100px;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-bottom: solid 1px #ccc;
  span {
    display: block;
    width: 100px;
    height: 54px;
    line-height: 54px;
    font-family: MicrosoftYaHei;
    font-size: 18px;
    font-weight: normal;
    font-stretch: normal;
    letter-spacing: 0px;
    color: #055caa;
    border-bottom: 1px solid #ccc;
    // text-indent: 43px;
    text-align: center;
  }
  span:first-child {
    width: 100px;
    height: 78px;
    font-family: MicrosoftYaHei-Bold;
    font-size: 24px;
    font-weight: normal;
    font-stretch: normal;
    letter-spacing: 0px;
    text-align: center;
    line-height: 68px;
  }
  span:last-child {
    border: none;
    padding-bottom: 20px;
  }
}

.center_box_left_fixed {
  position: fixed;
  top: 0;
  width: 100px;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  span {
    display: block;
    width: 100px;
    height: 54px;
    line-height: 54px;
    font-family: MicrosoftYaHei;
    font-size: 18px;
    font-weight: normal;
    font-stretch: normal;
    letter-spacing: 0px;
    border-bottom: 1px solid #dddddd;
  }
  span:first-child {
    width: 100px;
    height: 78px;
    font-family: MicrosoftYaHei-Bold;
    font-size: 24px;
    font-weight: normal;
    font-stretch: normal;
    letter-spacing: 0px;
    text-align: center;
    line-height: 68px;
    border: none;
  }
  span:last-child {
    border: none;
    padding-bottom: 20px;
  }
}

.center_box_left_absolute{
    position: absolute;
    bottom: 100px;
    top: auto;
}
.center_box_right {
  width: 80%;
  height: 1200px;
  background: #999;
}
.center_box_right_100 {
  width: 80%;
  height: 1200px;
  background: #999;
  margin-left: 100px;
}
</style>
