import { validateTransitionDuration } from '../../src/assets/js/validator'

describe('Size validator', () => {
  it('can be equal to 0', () => {
    expect(validateTransitionDuration('0')).toBeTruthy();
  })

  it('can be equal to s value', () => {
    expect(validateTransitionDuration('10s')).toBeTruthy()
  })

  it('can not be "1s2" value', () => {
    expect(validateTransitionDuration('1s2')).toBeFalsy()
  })

  it('can be equal to ms value', () => {
    expect(validateTransitionDuration('10ms')).toBeTruthy()
  })

  it('can not be "1ms2" value', () => {
    expect(validateTransitionDuration('1ms2')).toBeFalsy()
  })
})