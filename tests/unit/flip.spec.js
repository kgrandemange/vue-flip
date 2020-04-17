import { shallowMount } from '@vue/test-utils'
import Flip from '@/components/Flip.vue'

describe('Flip.vue', () => {
  it('has height', () => {
    const wrapper = shallowMount(Flip, {
      propsData: {
        width: '100px',
        height: '100px'
      }
    })

    expect(wrapper.attributes('style')).toContain('height: 100px')
  })

  it('has width', () => {
    const wrapper = shallowMount(Flip, {
      propsData: {
        width: '100px',
        height: '100px'
      }
    })

    expect(wrapper.attributes('style')).toContain('width: 100px')
  })

  it('has active-hover class when activeHover props is set to true', () => {
    const wrapper = shallowMount(Flip, {
      propsData: {
        width: '100px',
        height: '100px',
        activeHover: true
      }
    })

    expect(wrapper.classes()).toContain('active-hover')
  })

  it('does not have active-hover class when activeHover props is set to true', () => {
    const wrapper = shallowMount(Flip, {
      propsData: {
        width: '100px',
        height: '100px',
        activeHover: false
      }
    })

    expect(wrapper.classes()).not.toContain('active-hover')
  })

  it('has default transition', () => {
    const wrapper = shallowMount(Flip, {
      propsData: {
        width: '100px',
        height: '100px'
      }
    })

    expect(wrapper.find('.flipper').attributes('style')).toContain('transition: 0.5s')
  })

  it('has custom transition', () => {
    const wrapper = shallowMount(Flip, {
      propsData: {
        width: '100px',
        height: '100px',
        transition: '1s'
      }
    })

    expect(wrapper.find('.flipper').attributes('style')).toContain('transition: 1s')
  })

  it('has empty default front slot', () => {
    const wrapper = shallowMount(Flip, {
      propsData: {
        width: '100px',
        height: '100px'
      }
    })

    expect(wrapper.find('.front').text()).toBe('')
  })

  it('set front slot in front element', () => {
    const wrapper = shallowMount(Flip, {
      propsData: {
        width: '100px',
        height: '100px'
      },
      scopedSlots: {
        front: '<div>front slot</div>'
      }
    })

    expect(wrapper.find('.front').text()).toBe('front slot')
  })

  it('has empty default back slot', () => {
    const wrapper = shallowMount(Flip, {
      propsData: {
        width: '100px',
        height: '100px'
      }
    })

    expect(wrapper.find('.back').text()).toBe('')
  })

  it('set back slot in front element', () => {
    const wrapper = shallowMount(Flip, {
      propsData: {
        width: '100px',
        height: '100px'
      },
      scopedSlots: {
        back: '<div>back slot</div>'
      }
    })

    expect(wrapper.find('.back').text()).toBe('back slot')
  })

  it('flips card on a click when activeClick is set to true', () => {
    const wrapper = shallowMount(Flip, {
      propsData: {
        width: '100px',
        height: '100px',
        activeClick: true
      }
    })

    wrapper.trigger('click')

    expect(wrapper.vm.$data.hover).toBe(true)
  })

  it('does not flip card on a click when activeClick is set to true', () => {
    const wrapper = shallowMount(Flip, {
      propsData: {
        width: '100px',
        height: '100px',
        activeClick: false
      }
    })

    wrapper.trigger('click')

    expect(wrapper.vm.$data.hover).toBe(false)
  })
})