<template>
  <ProductComponent
    v-for="product in products"
    v-bind:key="product.id"
    v-bind:product="product"
  />
</template>

<script lang="ts">
import { Product } from "@/models/product";
import axios from "axios";
import ProductComponent from "@/components/ProductComponent.vue";
const API_URL = "products/";
let products: Product | null = null;
export default {
  name: "ProductListView",
  data() {
    return {
      products: products,
    };
  },
  created() {
    this.listProducts();
  },
  methods: {
    listProducts(): void {
      axios.get(process.env.VUE_APP_BASE_URL + API_URL).then((response) => {
        console.log(response);
        this.products = response.data;
      });
    },
  },
  components: { ProductComponent },
};
</script>
