import { computed, onMounted, ref } from 'vue'
import { defineStore } from 'pinia'
import axiosWrapper from './axios-wrapper'
import { PRODUCT } from './api-url'

export const useProductStore = defineStore('products', () => {
  const products = ref([])
  const loading = ref(false)
  const error = ref(null)

  const totalCart = computed(() => {
    return products.value.reduce((acc, product) => acc + product.quantity * product.price, 0)
  })

  function getAllProducts() {
    loading.value = true
    error.value = null
    axiosWrapper
      .get(PRODUCT)
      .then((res) => {
        products.value = res.data.map((pro) => ({
          ...pro,
          maxQuantity: pro.quantity,
          quantity: 0
        }))
      })
      .catch((err) => {
        error.value = err
      })
      .finally(() => {
        loading.value = false
      })
  }

  onMounted(() => {
    getAllProducts()
  })

  return {
    products,
    loading,
    totalCart,
    getAllProducts
  }
})
