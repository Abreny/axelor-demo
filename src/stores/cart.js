import { computed, ref } from 'vue'
import { defineStore } from 'pinia'
import axiosWrapper from './axios-wrapper'
import { CHECKOUT } from './api-url'

export const useCartStore = defineStore('cart', () => {
  const products = ref([])
  const loading = ref(false)
  const error = ref(null)

  const totalCart = computed(() => {
    return products.value.reduce((acc, product) => acc + product.quantity * product.price, 0)
  })

  const countCart = computed(() => {
    return products.value.reduce((acc, product) => acc + product.quantity, 0)
  })

  function checkout() {
    loading.value = true
    error.value = null
    axiosWrapper
      .get(CHECKOUT)
      .then(() => {
        products.value = []
      })
      .catch((err) => {
        error.value = err
      })
      .finally(() => {
        loading.value = false
      })
  }

  function addProduct(productItem) {
    const product = products.value.find((p) => p.id === productItem.id)
    if (product) {
      product.quantity++
    } else {
      products.value.push({
        ...productItem,
        quantity: 1
      })
    }
  }

  return {
    products,
    loading,
    totalCart,
    countCart,

    checkout,
    addProduct
  }
})
