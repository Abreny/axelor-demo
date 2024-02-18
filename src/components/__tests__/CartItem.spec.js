import { test, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import CartItem from '../CartItem.vue'

test('render product item', () => {
  const wrapper = mount(CartItem, {
    props: {
      product: {
        name: 'Product Name Test',
        price: 12.99,
        quantity: 0,
        maxQuantity: 100
      }
    }
  })
  expect(wrapper.get('[data-test="product-name"]').text()).toContain('Product Name Test')
  expect(wrapper.get('[data-test="product-price"]').text()).toContain('$12.99')
  expect(wrapper.get('[data-test="product-quantity"]').text()).toContain('0')
  expect(wrapper.get('[data-test="product-amount"]').text()).toContain('$0.00')
})
