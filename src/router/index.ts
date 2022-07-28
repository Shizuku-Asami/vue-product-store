import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import ProductComponent from "../components/ProductComponent.vue";
import ProductListView from "@/views/ProductListView.vue";
import ProductCreateView from "@/views/ProductCreateView.vue";
import ProductUpdateView from "@/views/ProductUpdateView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/products/:id",
    name: "product",
    component: ProductComponent,
    props: true,
  },
  {
    path: "/products/create",
    name: "product-create",
    component: ProductCreateView,
  },
  {
    path: "/products/update/:id",
    name: "product-update",
    component: ProductUpdateView,
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
