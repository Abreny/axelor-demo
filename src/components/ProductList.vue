<script setup>
import ProductCard from './ProductCard.vue'
import { useProductStore } from '@/stores/products'
import { useCartStore } from '@/stores/cart'

const productStore = useProductStore()
const cartStore = useCartStore()
</script>

<template>
  <div class="container mx-auto w-full">
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 dark:text-white w-full">
      <ProductCard
        v-for="product in productStore.products"
        :key="product.id"
        :product="product"
        data-test="product-card-item"
        @add-to-cart="cartStore.addProduct(product)"
      />
    </div>
  </div>
</template>
