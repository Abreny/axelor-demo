<script setup>
import { RouterLink } from 'vue-router'
import { useCartStore } from '@/stores/cart'

const cartStore = useCartStore()
</script>

<template>
  <div class="flex justify-between items-center">
    <RouterLink to="/">Demo</RouterLink>
    <RouterLink
      to="/checkout"
      class="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white rounded-lg bg-blue-400 hover:bg-blue-600 focus:outline-none"
    >
      My cart
      <span
        class="inline-flex items-center justify-center w-4 h-4 ms-2 text-xs font-semibold text-blue-800 bg-blue-200 rounded-full"
      >
        {{ cartStore.countCart }}
      </span>
    </RouterLink>
  </div>
</template>
