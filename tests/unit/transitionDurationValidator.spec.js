import { validateTransitionDuration } from '../../src/assets/js/validator'
import { describe, it, expect } from 'vitest'

describe('Size validator', () => {
  it('can be equal to 0', () => {
    expect(validateTransitionDuration('0')).toBe(true);
  })

  it('can be equal to s value', () => {
    expect(validateTransitionDuration('10s')).toBe(true)
  })

  it('can not be "1s2" value', () => {
    expect(validateTransitionDuration('1s2')).toBe(false)
  })

  it('can be equal to ms value', () => {
    expect(validateTransitionDuration('10ms')).toBe(true)
  })

  it('can not be "1ms2" value', () => {
    expect(validateTransitionDuration('1ms2')).toBe(false)
  })
})
