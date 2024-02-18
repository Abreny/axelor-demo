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

  const isEmpty = computed(() => {
    return products.value.length == 0
  })

  function checkout() {
    const data = products.value.map(line => ({
      product: line.id,
      quantity: line.quantity
    }))

    loading.value = true
    error.value = null
    axiosWrapper
      .post(CHECKOUT, {
        products: data
      })
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

  function deleteItem(product) {
    products.value = products.value.filter(p => p.id != product.id)
  }

  return {
    products,
    loading,
    totalCart,
    countCart,
    isEmpty,

    checkout,
    addProduct,
    deleteItem
  }
})
