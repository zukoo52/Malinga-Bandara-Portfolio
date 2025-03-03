import homeRoute from "./modules/home";
import OtherPageRoutes from "./modules/Otherpages";


import { createRouter, createWebHistory } from "vue-router";


const routes = [
  ...homeRoute,
  ...OtherPageRoutes,


];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
