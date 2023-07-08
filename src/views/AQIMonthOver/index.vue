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

      // 指定图表的配置项和数据
      var option = {
        title: {
          text: "过去十个月里，每个月的AQI浓度超标数量",
        },
        tooltip: {},
        legend: {
          data: ["数量"],
        },
        xAxis: {
          data: ["北京", "上海"],
        },
        yAxis: {},
        series: [
          {
            name: "数量",
            type: "bar",
            data: [50, 20, 36, 10, 10, 20],
          },
        ],
      };

      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
    },
  },
  mounted() {
    this.myEcharts();
    const h = this.$createElement;

    this.$notify({
      title: "过去十个月里，每个月的AQI浓度超标数量",
      message: h(
        "i",
        { style: "color: teal" },
        "注意：过去十个月，AQI三级以上（包含三级）即为超标"
      ),
    });
  },
};
</script>

<style></style>
