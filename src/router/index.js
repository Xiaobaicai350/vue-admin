import Vue from "vue";
import VueRouter from "vue-router";
import Layout from "@/views/Layout/index.vue";
import Home from "@/views/Home/index.vue";

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
    ],
  },
];

const router = new VueRouter({
  routes,
});

export default router;
