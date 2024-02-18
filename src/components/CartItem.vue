<script setup>
defineProps({
  product: Object
})
defineEmits(['increase', 'decrease', "delete"])
</script>

<template>
  <li :key="product.id" class="flex flex-col my-2 w-full odd:bg-gray-100 odd:dark:bg-gray-700 p-4">
    <span class="flex items-center justify-between w-full space-x-3">
      <span data-test="product-name" class="w-1/3 truncate">{{ product.name }}</span>
      <span data-test="product-price">&euro;{{ product.price }}</span>
      <span class="inline-flex items-center justify-between space-x-3">
        <button
          class="bg-blue-400 hover:bg-blue-600 py-1 px-2 rounded-md"
          @click="$emit('decrease', product)"
          data-test="product-decrease"
        >
          -
        </button>
        <span class="w-12 text-center" data-test="product-quantity">{{ product.quantity }}</span>
        <button
          class="bg-blue-400 hover:bg-blue-600 py-1 px-2 rounded-md"
          @click="$emit('increase', product)"
          data-test="product-increase"
        >
          +
        </button>
      </span>
      <span class="w-16 text-right" data-test="product-amount">
        &euro;{{ Number(product.price * product.quantity).toFixed(2) }}
      </span>
      <span>
        <button
          class="bg-red-300 hover:bg-red-600 py-1 px-2 rounded-md"
          @click="$emit('delete', product)"
          data-test="product-delete"
        >
          x
        </button>
      </span>
    </span>
  </li>
</template>
