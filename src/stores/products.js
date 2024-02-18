import { onMounted, ref } from 'vue'
import { defineStore } from 'pinia'
import axiosWrapper from './axios-wrapper'
import { PRODUCT } from './api-url'

export const useProductStore = defineStore('products', () => {
  const products = ref([])
  const loading = ref(false)
  const error = ref(null)

  function getAllProducts() {
    loading.value = true
    error.value = null
    axiosWrapper
      .get(PRODUCT)
      .then((res) => {
        products.value = res.data
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
    getAllProducts
  }
})
