import { createRouter } from "vue-router";
import { createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home Page",
    component: () => import("./pages/HomePage.vue")
  },
  {
    path: "/write",
    name: "Write Article",
    component: () => import("./pages/Write.vue")
  }
];

export const router = createRouter({
  history: createWebHistory(),
  routes
})