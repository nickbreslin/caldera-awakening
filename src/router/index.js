import { createRouter, createWebHistory } from "vue-router";
import Main from "@/views/MainView.vue";

const routes = [
  {
    path: "/",
    name: "Main",
    component: Main
  }
];

const router = createRouter({
  mode: "history",
  linkExactActiveClass: "active",
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
