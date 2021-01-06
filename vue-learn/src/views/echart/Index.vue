<template>
  <div>
    <div class="line-clamp">vue你好vue你好vue你好vue你好vue你好vue你好vue你好vue你好vue你好vue你好vue你好vue你好vue你好vue你好vue你好vue你好vue你好vue你好vue你好vue你好vue你好vue你好</div>
    <div class="chart chart-month">
      <div class="chart-view" ref="chart-month"></div>
    </div>
    <div class="chart chart-week">
      <div class="chart-view" ref="chart-week"></div>
    </div>
  </div>
</template>

<script>
import Echarts from "echarts";
export default {
  name: "Chart",
  data() {
    return {
      chartObjMonth: null,
      chartObjWeek: null,
      turnOverMonth: 46227,
      turnOverWeek: 10520,
      roonNum: [
        40,
        11,
        10,
        5,
        12,
        5,
        11,
        21,
        9,
        17,
        15,
        13,
        12,
        35,
        43,
        22,
        21,
        33,
        32,
        16,
        31,
        41,
        17,
      ],
      optionsMonth: {
        title: {
          text: "八月房间销量",
          subtext: "营业额: 46227元",
          subtextStyle: {
            color: "red",
            fontSize: "16",
          },
        },
        tooltip: {},
        legend: {
          data: ["开房数量"],
        },
        xAxis: {
          name: "日期",
          data: [
            "1",
            "2",
            "3",
            "4*",
            "5*",
            "6",
            "7",
            "8",
            "9",
            "10",
            "11*",
            "12*",
            "13",
            "14",
            "15",
            "16",
            "17",
            "18*",
            "19*",
            "20",
            "21",
            "22",
            "23",
          ],
        },
        yAxis: {
          max: 50,
        },
        series: [
          {
            name: "开房数量",
            type: "bar",
            itemStyle: {
              normal: {
                label: {
                  show: true,
                  position: "top",
                  textStyle: {
                    color: "#000",
                  },
                },
              },
            },
            data: [
              40,
              11,
              10,
              5,
              12,
              5,
              11,
              21,
              9,
              17,
              15,
              13,
              12,
              35,
              43,
              22,
              21,
              33,
              32,
              16,
              31,
              41,
              17,
            ],
          },
        ],
      },
      optionsWeek: {
        title: {
          text: "上周房间销量（7/20~7/26）",
          fontSize: "16",
          subtext: "营业额: 10520元",
          subtextStyle: {
            color: "red",
            fontSize: "16",
          },
        },
        tooltip: {},
        legend: {
          data: ["开房数量"],
        },
        xAxis: {
          name: "日期",
          data: ["7-20", "7-21", "7-22", "7-23", "7-24", "7-25", "7-26"],
        },
        yAxis: {
          max: 50,
        },
        series: [
          {
            name: "开房数量",
            type: "bar",
            itemStyle: {
              normal: {
                label: {
                  show: true,
                  position: "top",
                  textStyle: {
                    color: "#000",
                  },
                },
              },
            },
            data: [8, 8, 9, 18, 39, 21, 13],
          },
        ],
      },
    };
  },
  mounted() {
    this.chartObjMonth = Echarts.init(this.$refs["chart-month"]);
    this.chartObjWeek = Echarts.init(this.$refs["chart-week"]);
    this.chartObjMonth.setOption(this.optionsMonth, true);
    this.chartObjWeek.setOption(this.optionsWeek, true);
    window.addEventListener("resize", this.chartObjMonth.resize());
    window.addEventListener("resize", this.chartObjWeek.resize());
  },
};
</script>

<style scoped>
.line-clamp {
    width: 50%;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
}
.chart {
  margin-top: 30px;
  position: relative;
}
.chart-view {
  width: 1200px;
  height: 600px;
}

.turn-over {
  position: absolute;
  top: 10px;
  left: 50%;
}
.turn-over span {
  color: red;
  font-weight: bold;
}
</style>
