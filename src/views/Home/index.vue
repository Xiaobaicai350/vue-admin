<template>
  <v-chart class="chart" :option="option" autoresize />
</template>

<script>
import VChart from "vue-echarts";
import { ref, defineComponent } from "vue";

export default defineComponent({
  name: "HelloWorld",
  components: {
    VChart,
  },

  setup() {
    const option = ref({
      title: {
        text: "您最近的提交工程量",
        subtext: "Fake Data",
        left: "center",
      },

      legend: {
        left: "center",
        top: "bottom",
        data: [
          "rose1",
          "rose2",
          "rose3",
          "rose4",
          "rose5",
          "rose6",
          "rose7",
          "rose8",
        ],
      },
      toolbox: {
        show: true,
        feature: {
          mark: { show: true },
          dataView: { show: true, readOnly: false },
          restore: { show: true },
          saveAsImage: { show: true },
        },
      },
      series: [
        // 第一个图片
        {
          name: "Radius Mode",
          type: "pie",
          radius: [20, 140],
          center: ["25%", "50%"],
          roseType: "radius",
          itemStyle: {
            borderRadius: 5,
          },
          label: {
            show: false,
          },
          emphasis: {
            label: {
              show: true,
            },
          },
          data: [
            { value: 40, name: "rose 1" },
            { value: 33, name: "rose 2" },
            { value: 28, name: "rose 3" },
            { value: 22, name: "rose 4" },
            { value: 20, name: "rose 5" },
            { value: 15, name: "rose 6" },
            { value: 12, name: "rose 7" },
            { value: 10, name: "rose 8" },
          ],
        },
        // 第二个
        {
          name: "Area Mode",
          type: "pie",
          radius: [20, 140],
          center: ["75%", "50%"],
          roseType: "area",
          itemStyle: {
            borderRadius: 5,
          },
          data: [
            { value: 30, name: "rose 1" },
            { value: 28, name: "rose 2" },
            { value: 26, name: "rose 3" },
            { value: 24, name: "rose 4" },
            { value: 22, name: "rose 5" },
            { value: 20, name: "rose 6" },
            { value: 18, name: "rose 7" },
            { value: 16, name: "rose 8" },
          ],
        },
      ],
    });

    return { option };
  },
});
</script>

<style scoped>
.chart {
  height: 100vh;
}
</style>
