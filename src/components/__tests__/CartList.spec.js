import { vi, describe, it, expect, beforeEach } from 'vitest'
import { flushPromises, mount } from '@vue/test-utils'
import axiosWrapper from '@/stores/axios-wrapper'
import CardList from '../CardList.vue'
import { createPinia, setActivePinia } from 'pinia'

const mockProducts = [
  { id: 1, name: 'Mouse - Logitech MX Master 3S', price: 9220, quantity: 1 },
  { id: 2, name: 'Keyboard - Logitech MX Keys', price: 7990, quantity: 1 },
  {
    id: 3,
    name: 'WebCam - Logitech HD Pro Webcam C920',
    price: 6890,
    quantity: 1
  }
]

describe('CardList', () => {
  beforeEach(() => {
    vi.restoreAllMocks()
    setActivePinia(createPinia())
  })

  it('render product lists', async () => {
    const spy = vi.spyOn(axiosWrapper, 'get').mockResolvedValue(
      Promise.resolve({
        data: mockProducts
      })
    )
    const wrapper = mount(CardList)

    expect(spy).toHaveBeenCalledTimes(1)
    expect(spy).toBeCalledWith('products')

    await flushPromises()

    const productItems = wrapper.findAllComponents('[data-test="product-item"]')
    expect(productItems).toHaveLength(3)
  })
})
