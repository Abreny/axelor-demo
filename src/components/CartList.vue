<script setup>
import { useCartStore } from '@/stores/cart'
import CartItem from './CartItem.vue'

const cartStore = useCartStore()

function increaseQuantity(product) {
  product.quantity += 1
}

function decreaseQuantity(product) {
  if (product.quantity > 0) {
    product.quantity -= 1
  }
}
</script>

<template>
  <div class="flex items-center justify-center dark:text-white min-h-screen">
    <div class="max-w-3xl w-full border border-gray-50 dark:border-gray-600 shadow-2xl rounded-md">
      <div class="text-4xl bg-gray-600 p-8 text-gray-200 flex justify-between">
        <h2>Shopping Cart</h2>
        <button v-if="!cartStore.isEmpty" class="bg-blue-400 hover:bg-blue-600 py-3 px-2 rounded-md" @click="cartStore.checkout()">Validate</button>
      </div>
      <ul class="dark:text-white p-8">
        <CartItem
          v-for="product in cartStore.products"
          :key="product.id"
          :product="product"
          @increase="increaseQuantity"
          @decrease="decreaseQuantity"
          @delete="cartStore.deleteItem($event)"
          data-test="product-item"
        />
      </ul>
      <p class="flex items-center justify-between text-3xl mt-4 p-8">
        <span>Total:</span>
        <span class="font-bold">&euro;{{ cartStore.totalCart.toFixed(2) }}</span>
      </p>
    </div>
  </div>
</template>
