<template>
  <div class="chart">
    <div class="chart-view" ref="chart"></div>
  </div>
</template>

<script>
import Echarts from 'echarts'
export default {
  name: 'Chart',
  data() {
    return{
      chartObj: null,
      options: {
        title: {
            text: '第一个 ECharts 实例'
        },
        tooltip: {},
        legend: {
            data:['销量']
        },
        xAxis: {
            data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
        },
        yAxis: {},
        series: [{
            name: '销量',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20]
        }]
      }
    }
  },
  mounted() {
    this.chartObj = Echarts.init(this.$refs['chart'])
    this.chartObj.setOption(this.options, true)
    window.addEventListener('resize', this.chartObj.resize())
  }
}
</script>

<style scoped>
.chart-view{
  width: 600px;
  height: 300px;
}
</style>
