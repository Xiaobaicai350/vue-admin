import Vue from "vue";
import VueRouter from "vue-router";
import Layout from "@/views/Layout/index.vue";
import Home from "@/views/Home/index.vue";
import ListAssign from "@/views/ListAssign/index.vue";
import ListTesting from "@/views/ListTesting/index.vue";
import ListExInformation from "@/views/ListExInformation/index.vue";
import Login from "@/views/Login/index.vue";
import Chart from "@/views/Chart/index.vue";
import AQIDistribution from "@/views/AQIDistribution/index.vue";
import AQIRadarChart from "@/views/AQIRadarChart/index.vue";
import AQIBubbleChart from "@/views/AQIBubbleChart/index.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Layout",
    component: Layout,
    children: [
      {
        path: "",
        name: "Home",
        component: Home,
      },
      {
        path: "/ListAssign",
        name: "ListAssign",
        component: ListAssign,
      },
      {
        path: "/ListTesting",
        name: "ListTesting",
        component: ListTesting,
      },
      {
        path: "/ListExInformation",
        name: "ListExInformation",
        component: ListExInformation,
      },
      {
        path: "/Chart",
        name: "Chart",
        component: Chart,
      },
      {
        path: "/AQIDistribution",
        name: "AQIDistribution",
        component: AQIDistribution,
      },
      {
        path: "/AQIRadarChart",
        name: "AQIRadarChart",
        component: AQIRadarChart,
      },
      {
        path: "/AQIBubbleChart",
        name: "AQIBubbleChart",
        component: AQIBubbleChart,
      },
    ],
  },
  {
    path: "/Login",
    name: "Login",
    component: Login,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
