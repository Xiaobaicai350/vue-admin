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
          text: "AQI检测员检测数量",
        },
        tooltip: {},
        legend: {
          data: ["数量"],
        },
        xAxis: {
          data: ["胥天昊", "李子衿", "王弈超", "许振宇", "王祎铭", "吴志鹏"],
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
      title: "欢迎来到管理员端",
      message: h(
        "i",
        { style: "color: teal" },
        "近年来，为了促进生态环境保护行业的发展，我国陆续发布了一系列相关政策。并且鼓励公众参与，强化社会监督，依法监测各类生态环境超标行为，持续改善环境质量。基于此背景，建设环保公众监督系统。本系统致力于建立环保公众监督平台，拓宽监督渠道，增加环保工作透明度，不断完善公众监督机制，切实增强环境保护实效。"
      ),
    });
  },
};
</script>

<style></style>
