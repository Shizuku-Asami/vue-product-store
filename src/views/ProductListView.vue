<template>
  <div>
    <ProductComponent
      v-for="product in products || []"
      v-bind:key="product.id"
      v-bind:product="product"
    />
  </div>
</template>

<script lang="ts">
import { Product } from "@/models/product";
import ProductComponent from "@/components/ProductComponent.vue";
import { ProductService } from "@/services/product.service";
let products: Product | null = null;
export default {
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
      ProductService.listProducts().then((response) => {
        console.log(response);
        this.products = response.data;
      });
    },
  },
  components: { ProductComponent },
};
</script>
