<template>
  <div class="Echarts">
    <div id="main" style="width: 1000px; height: 600px"></div>
  </div>
</template>

<script>
import { getCount } from "@/apis/admin.js";
export default {
  name: "Echarts",

  data() {
    return {
      option: {
        title: {
          text: "以AQI六个等级为分组的每个等级的AQI分布数量",
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
      },
    };
  },
  methods: {
    myEcharts() {
      // 基于准备好的dom，初始化echarts实例
      var myChart = this.$echarts.init(document.getElementById("main"));

      // 指定图表的配置项和数据
      var option = this.option;

      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
    },
  },
  async mounted() {
    const data = await getCount();
    for (let i = 0; i < data.data.length; i++) {
      this.option.xAxis.data[i] = data.data[i].aqilevel;
      this.option.series[0].data[i] = data.data[i].cou;
    }
    // console.log(this.option);

    this.myEcharts();
    const h = this.$createElement;
    this.$notify({
      title: "以AQI六个等级为分组的每个等级的AQI分布数量",
      message: h(
        "i",
        { style: "color: teal" },
        "注意：AQI共有六级，以数据库中含有的数据进行动态显示）"
      ),
    });
  },
};
</script>

<style></style>
