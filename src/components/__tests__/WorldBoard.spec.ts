import { mount } from '@vue/test-utils'
import WordleBoard from '../WordleBoard.vue'

describe('WordleBoard', () => {
  it('renders properly', () => {
    const wrapper = mount(WordleBoard, {})
    expect(wrapper.text()).toContain('Wordle Works !')
  })
})
