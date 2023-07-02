<template>
  <div class="Echarts">
    <div id="main" style="width: 600px; height: 400px"></div>
  </div>
</template>

<script>
export default {
  name: "Echarts",
  methods: {
    myEcharts() {
      // 基于准备好的dom，初始化echarts实例
      var myChart = this.$echarts.init(document.getElementById("main"));

      // 指定图表的配置项和数据
      var option = {
        title: {
          text: "AQI检测员检测数量",
        },
        tooltip: {},
        legend: {
          data: ["数量"],
        },
        xAxis: {
          data: [
            "检测员1",
            "检测员2",
            "检测员3",
            "检测员4",
            "检测员5",
            "检测员6",
          ],
        },
        yAxis: {},
        series: [
          {
            name: "数量",
            type: "bar",
            data: [5, 20, 36, 10, 10, 20],
          },
        ],
      };

      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
    },
  },
  mounted() {
    this.myEcharts();
  },
};
</script>

<style></style>
