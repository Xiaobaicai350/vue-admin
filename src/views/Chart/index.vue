<template>
  <div class="Echarts">
    <div id="main" style="width: 1000px; height: 600px"></div>
  </div>
</template>

<script>
export default {
  name: "Echarts",
  methods: {
    myEcharts() {
      // 基于准备好的dom，初始化echarts实例
      var myChart = this.$echarts.init(document.getElementById("main"));
      const data = require("./json/beijing.json");
      // 指定图表的配置项和数据
      var option = {
        title: {
          text: "Beijing AQI",
          left: "1%",
        },
        tooltip: {
          trigger: "axis",
        },
        grid: {
          left: "5%",
          right: "15%",
          bottom: "10%",
        },
        xAxis: {
          data: data.map(function (item) {
            return item[0];
          }),
        },
        yAxis: {},
        toolbox: {
          right: 10,
          feature: {
            dataZoom: {
              yAxisIndex: "none",
            },
            restore: {},
            saveAsImage: {},
          },
        },
        dataZoom: [
          {
            startValue: "2014-06-01",
          },
          {
            type: "inside",
          },
        ],
        visualMap: {
          top: 50,
          right: 10,
          pieces: [
            {
              gt: 0,
              lte: 50,
              color: "#93CE07",
            },
            {
              gt: 50,
              lte: 100,
              color: "#FBDB0F",
            },
            {
              gt: 100,
              lte: 150,
              color: "#FC7D02",
            },
            {
              gt: 150,
              lte: 200,
              color: "#FD0100",
            },
            {
              gt: 200,
              lte: 300,
              color: "#AA069F",
            },
            {
              gt: 300,
              color: "#AC3B2A",
            },
          ],
          outOfRange: {
            color: "#999",
          },
        },
        series: {
          name: "Beijing AQI",
          type: "line",
          data: data.map(function (item) {
            return item[1];
          }),
          markLine: {
            silent: true,
            lineStyle: {
              color: "#333",
            },
            data: [
              {
                yAxis: 50,
              },
              {
                yAxis: 100,
              },
              {
                yAxis: 150,
              },
              {
                yAxis: 200,
              },
              {
                yAxis: 300,
              },
            ],
          },
        },
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
