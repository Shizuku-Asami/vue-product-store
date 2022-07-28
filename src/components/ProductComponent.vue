<template>
  <div>{{ product }}</div>
</template>

<script lang="ts">
import axios from "axios";
import { Product } from "../models/product";

const API_URL = "products/";
let product: Product | null = null;

export default {
  name: "ProductComponent",
  props: ["product"],
  data: function () {
    return {
      product_: product,
    };
  },
  mounted() {
    if (this.$route.params.id) {
      this.retrieveProduct(this.$route.params.id);
    }
  },
  methods: {
    retrieveProduct(id: number): void {
      console.log(process.env.VUE_APP_BASE_URL + API_URL + `${id}/`);
      axios
        .get(process.env.VUE_APP_BASE_URL + API_URL + `${id}/`)
        .then((response) => {
          console.log(response);
          this.product_ = response.data;
        });
    },
    deleteProduct(id: number): void {
      axios
        .delete(process.env.VUE_APP_BASE_URL + API_URL + `${id}/`)
        .then((response) => {
          console.log(response);
        });
    },
  },
};
</script>

<style></style>
