<script setup>
defineProps({
  product: Object
})
defineEmits(['addToCart'])
</script>
<template>
  <div
    class="min-h-80 px-2 mt-11 w-80 transform overflow-hidden rounded-lg bg-white dark:bg-slate-800 shadow-md duration-300 hover:scale-105 hover:shadow-lg"
  >
    <img
      class="h-48 object-cover object-center mx-auto"
      src="@/assets/imgs/product-default.png"
      alt="Product Image"
    />
    <div class="p-4">
      <h2 class="mb-2 text-lg font-medium dark:text-white text-gray-900">{{ product.name }}</h2>
      <p class="mb-2 text-base dark:text-gray-300 text-gray-700 max-w-50 truncate">
        {{ product.description }}
      </p>
      <div class="flex items-center">
        <p class="mr-2 text-lg font-semibold text-gray-900 dark:text-white">&euro;{{ product.price }}</p>
        <button
          class="ml-auto text-base font-medium text-green-500 hover:text-green-700"
          @click="$emit('addToCart', product)"
        >
          + Add to cart
        </button>
      </div>
    </div>
  </div>
</template>
