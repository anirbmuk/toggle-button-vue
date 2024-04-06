import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import ToggleButton from '../ToggleButton.vue'
import type { KeyValue } from '@/types/toggle'

const options = [
  {
    label: 'Centigrade',
    value: 'C'
  },
  {
    label: 'Fahrenheit',
    value: 'F'
  }
] satisfies KeyValue<string>[]

describe('ToggleButton', () => {
  it('renders properly', () => {
    const wrapper = mount(ToggleButton, { props: { options } })
    expect(wrapper).toBeTruthy()
  })
})
