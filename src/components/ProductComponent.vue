<template>
  <div
    class="max-w-lg shadow-sm bg-gray-100 border rounded-lg p-2 m-2"
    v:if="getProduct"
  >
    <div class="flex flex-row">
      <router-link :to="{ name: 'product', params: { id: getProduct.id } }">
        <h3 class="text-xl text-blue-500">{{ getProduct.name }}</h3>
      </router-link>
    </div>
    <p class="text-gray-700">{{ getProduct.description }}</p>
    <div class="flex flex-row justify-between items-center my-2 p-2">
      <div>${{ getProduct.price }}</div>
    </div>
  </div>
</template>

<script lang="ts">
import { Product } from "../models/product";
import { ProductService } from "@/services/product.service";

let product: Product | null = null;

export default {
  props: ["product"],
  data: function () {
    return {
      product_: product,
    };
  },
  created() {
    if (this.$route.params.id) {
      this.retrieveProduct(this.$route.params.id);
    }
  },
  methods: {
    retrieveProduct(id: number): void {
      ProductService.retrieveProduct(id).then((response) => {
        console.log(response);
        this.product_ = response.data;
      });
    },
    deleteProduct(id: number): void {
      ProductService.deleteProduct(id).then((response) => {
        console.log(response);
      });
    },
  },
  computed: {
    isAvailable() {
      return this.product.quantity > 0 ? "Available" : "Out of Stock";
    },
    getProduct() {
      return this.product_ !== null ? this.product_ : this.product;
    },
  },
  inheritAttrs: false,
};
</script>

<style></style>
