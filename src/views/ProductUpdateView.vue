<template>
  <ProductFormComponent :action="'update'" />
</template>

<script lang="ts">
import ProductFormComponent from "@/components/ProductFormComponent.vue";
export default {
  name: "ProductUpdateView",
  components: { ProductFormComponent },
};
</script>
