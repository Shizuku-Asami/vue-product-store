<template>
  <ProductFormComponent :action="'create'" />
</template>

<script lang="ts">
import ProductFormComponent from "@/components/ProductFormComponent.vue";
export default {
  name: "ProductCreateView",
  components: { ProductFormComponent },
};
</script>
