import { createRouter } from "vue-router";
import { createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home Page",
    component: () => import("./pages/HomePage.vue")
  }
];

export const router = createRouter({
  history: createWebHistory(),
  routes
})