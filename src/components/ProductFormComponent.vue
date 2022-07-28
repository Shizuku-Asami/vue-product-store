<template>
  <div class="max-w-lg shadow-md bg-gray-100 border rounded-lg p-2 m-2">
    <form @submit="onSubmit">
      <h3 class="capitalize text-xl font-medium text-gray-900">
        {{ action }} product
      </h3>
      <div class="my-2">
        <label class="block mb-2 text-sm font-medium text-gray-900">Name</label>
        <input
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          type="text"
          v-model="name"
          name="name"
          placeholder="Product's name"
        />
      </div>
      <div class="my-2">
        <label class="block mb-2 text-sm font-medium text-gray-900"
          >Description</label
        >
        <textarea
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          v-model="description"
          name="description"
          placeholder="Product's Description"
        ></textarea>
      </div>
      <div class="my-2">
        <label class="block mb-2 text-sm font-medium text-gray-900"
          >Quantity</label
        >
        <input
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          type="number"
          v-model="quantity"
          name="quantity"
          placeholder="Product's quantity"
        />
      </div>
      <div class="my-2">
        <label class="block mb-2 text-sm font-medium text-gray-900"
          >Price</label
        >
        <input
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          type="number"
          step="0.01"
          min="0"
          v-model="price"
          name="price"
          placeholder="Product's price"
        />
      </div>
      <button
        class="capitalize w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
      >
        {{ action }} product
      </button>
    </form>
  </div>
</template>

<script lang="ts">
import { Product } from "@/models/product";
import { ProductService } from "@/services/product.service";

export default {
  name: "ProductFormComponent",
  props: {
    action: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      name: "",
      description: "",
      quantity: 1,
      price: "0",
    };
  },
  created() {
    if (this.$route.params.id) {
      ProductService.retrieveProduct(this.$route.params.id).then((response) => {
        this.name = response.data.name;
        this.description = response.data.description;
        this.quantity = response.data.quantity;
        this.price = response.data.price;
      });
    }
  },
  methods: {
    onSubmit(e: Event) {
      e.preventDefault();
      const product: Product = {
        name: this.name,
        description: this.description,
        quantity: this.quantity,
        price: this.price,
      };
      if (this.action == "create") {
        this.createProduct(product);
      }
      if (this.action == "update") {
        this.updateProduct(this.$route.params.id, product);
      }
    },
    createProduct(product: Product): void {
      ProductService.createProduct(product).then((response) => {
        console.log(response);
      });
    },
    updateProduct(id: number, product: Product): void {
      ProductService.updateProduct(id, product).then((response) => {
        console.log(response);
      });
    },
  },
};
</script>
