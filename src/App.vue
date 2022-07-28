<template>
  <nav class="flex flex-row justify-center gap-4">
    <router-link
      :to="{ name: 'product-list' }"
      class="text-cyan-700 hover:text-cyan-500"
      >Product List</router-link
    >
    <router-link
      :to="{ name: 'product-create' }"
      class="text-cyan-700 hover:text-cyan-500"
      >Create Product</router-link
    >
  </nav>
  <div class="flex items-center justify-center h-screen w-full">
    <router-view />
  </div>
</template>

<style></style>
