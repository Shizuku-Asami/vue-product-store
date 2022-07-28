import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import ProductComponent from "../components/ProductComponent.vue";
import ProductListView from "@/views/ProductListView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/products/:id",
    name: "product",
    component: ProductComponent,
  },
  {
    path: "/products",
    name: "product-list",
    component: ProductListView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
