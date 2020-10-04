import Flip from '../../src/components/Flip.vue'
import { shallowMount, mount } from '@vue/test-utils'
import { ref } from 'vue'

describe('Flip.vue', () => {
  it('has height', () => {
    const wrapper = shallowMount(Flip, {
      props: {
        width: '100px',
        height: '100px'
      }
    })

    expect(wrapper.attributes('style')).toContain('height: 100px')
  })

  it('has width', () => {
    const wrapper = shallowMount(Flip, {
      props: {
        width: '100px',
        height: '100px'
      }
    })

    expect(wrapper.attributes('style')).toContain('width: 100px')
  })

  it('has active-hover class when activeHover props is set to true', () => {
    const wrapper = shallowMount(Flip, {
      props: {
        width: '100px',
        height: '100px',
        activeHover: true
      }
    })

    expect(wrapper.classes()).toContain('active-hover')
  })

  it('does not have active-hover class when activeHover props is set to false', () => {
    const wrapper = shallowMount(Flip, {
      props: {
        width: '100px',
        height: '100px',
        activeHover: false
      }
    })

    expect(wrapper.classes()).not.toContain('active-hover')
  })

  it('has default transition', () => {
    const wrapper = shallowMount(Flip, {
      props: {
        width: '100px',
        height: '100px'
      }
    })

    expect(wrapper.find('.flipper').attributes('style')).toContain('transition-duration: 0.5s')
  })

  it('has custom transition', () => {
    const wrapper = shallowMount(Flip, {
      props: {
        width: '100px',
        height: '100px',
        transition: '1s'
      }
    })

    expect(wrapper.find('.flipper').attributes('style')).toContain('transition-duration: 1s')
  })

  it('has empty default front slot', () => {
    const wrapper = shallowMount(Flip, {
      props: {
        width: '100px',
        height: '100px'
      }
    })

    expect(wrapper.find('.front').text()).toBe('')
  })

  it('set front slot in front element', () => {
    const wrapper = mount(Flip, {
      props: {
        width: '100px',
        height: '100px'
      },
      slots: {
        front: '<div>front slot</div>'
      }
    })

    expect(wrapper.find('.front').text()).toBe('front slot')
  })

  it('has empty default back slot', () => {
    const wrapper = shallowMount(Flip, {
      props: {
        width: '100px',
        height: '100px'
      }
    })

    expect(wrapper.find('.back').text()).toBe('')
  })

  it('set back slot in front element', () => {
    const wrapper = mount(Flip, {
      props: {
        width: '100px',
        height: '100px'
      },
      slots: {
        back: '<div>back slot</div>'
      }
    })

    expect(wrapper.find('.back').text()).toBe('back slot')
  })

  it('flips card on a click when activeClick is set to true', () => {
    const wrapper = shallowMount(Flip, {
      props: {
        width: '100px',
        height: '100px',
        activeClick: true
      }
    })

    expect(wrapper.vm.$data.hover).toBe(false)

    wrapper.trigger('click')
    expect(wrapper.vm.$data.hover).toBe(true)
  })

  it('does not flip card on a click when activeClick is set to false', () => {
    const wrapper = shallowMount(Flip, {
      props: {
        width: '100px',
        height: '100px',
        activeClick: false
      }
    })

    expect(wrapper.vm.$data.hover).toBe(false)

    wrapper.trigger('click')
    expect(wrapper.vm.$data.hover).toBe(false)
  })

  it('update modelValue on a mouseenter event when activeHover is set to true', async () => {
    const wrapper = shallowMount(Flip, {
      props: {
        width: '100px',
        height: '100px',
        activeHover: true
      }
    })

    expect(wrapper.vm.$data.hover).toBe(false)

    wrapper.trigger('mouseenter')
    await wrapper.vm.$nextTick()
    expect(wrapper.emitted()['update:modelValue']).toBeTruthy()

    wrapper.trigger('mouseleave')
    await wrapper.vm.$nextTick()
    expect(wrapper.emitted()['update:modelValue']).toEqual([[true], [false]])
  })

  it('does not update modelValue on a click when activeHover is set to false', async () => {
    const wrapper = shallowMount(Flip, {
      props: {
        width: '100px',
        height: '100px',
        activeHover: false
      }
    })

    expect(wrapper.vm.$data.hover).toBe(false)

    wrapper.trigger('mouseover')
    await wrapper.vm.$nextTick()
    expect(wrapper.emitted()['update:modelValue']).toBeFalsy()

    wrapper.trigger('mouseout')
    await wrapper.vm.$nextTick()
    expect(wrapper.emitted()['update:modelValue']).toBeFalsy()
  })

  it('show back card when v-model is set to true', () => {
    const wrapper = shallowMount(Flip, {
      props: {
        width: '100px',
        height: '100px',
        modelValue: true
      }
    })

    expect(wrapper.vm.$data.hover).toBe(true)
  })

  it('show back card when v-model is set to true', async () => {
    const value = ref(false)
    const wrapper = shallowMount(Flip, {
      props: {
        width: '100px',
        height: '100px',
        modelValue: value
      }
    })

    expect(wrapper.vm.hover).toBe(false)
    value.value = true
    await wrapper.vm.$nextTick()
    expect(wrapper.vm.hover).toBe(true)
  })
})