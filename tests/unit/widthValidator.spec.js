import { validateSize } from '../../src/assets/js/validator'

describe('Size validator', () => {
  it('can be equal to max-content', () => {
    expect(validateSize('max-content')).toBe(true);
  })

  it('can be equal to min-content', () => {
    expect(validateSize('min-content')).toBe(true);
  })

  it('can be equal to available', () => {
    expect(validateSize('available')).toBe(true);
  })

  it('can be equal to fit-content', () => {
    expect(validateSize('fit-content')).toBe(true);
  })

  it('can be equal to auto', () => {
    expect(validateSize('auto')).toBe(true);
  })

  it('can be equal to inherit', () => {
    expect(validateSize('inherit')).toBe(true);
  })

  it('can be equal to initial', () => {
    expect(validateSize('initial')).toBe(true);
  })

  it('can be equal to unset', () => {
    expect(validateSize('unset')).toBe(true);
  })

  it('can be equal to % value', () => {
    expect(validateSize('10%')).toBe(true)
  })

  it('can not be "1%2" value', () => {
    expect(validateSize('1%2')).toBe(false)
  })

  it('can be equal to px value', () => {
    expect(validateSize('10px')).toBe(true)
  })

  it('can not be "1px2" value', () => {
    expect(validateSize('1px2')).toBe(false)
  })

  it('can be equal to cm value', () => {
    expect(validateSize('10cm')).toBe(true)
  })

  it('can not be "1cm2" value', () => {
    expect(validateSize('1cm2')).toBe(false)
  })

  it('can be equal to mm value', () => {
    expect(validateSize('10mm')).toBe(true)
  })

  it('can not be "1mm2" value', () => {
    expect(validateSize('1mm2')).toBe(false)
  })

  it('can be equal to Q (quarter-millimeters) value', () => {
    expect(validateSize('10Q')).toBe(true)
  })

  it('can not be "1Q2" value', () => {
    expect(validateSize('1Q2')).toBe(false)
  })

  it('can be equal to in (inches) value', () => {
    expect(validateSize('10in')).toBe(true)
  })

  it('can not be "1in2" value', () => {
    expect(validateSize('1in2')).toBe(false)
  })

  it('can be equal to pc (picas) value', () => {
    expect(validateSize('10pc')).toBe(true)
  })

  it('can not be "1pc2" value', () => {
    expect(validateSize('1pc2')).toBe(false)
  })

  it('can be equal to pt (points) value', () => {
    expect(validateSize('10pt')).toBe(true)
  })

  it('can not be "1pt2" value', () => {
    expect(validateSize('1pt2')).toBe(false)
  })

  it('can be equal to em value', () => {
    expect(validateSize('10em')).toBe(true)
  })

  it('can not be "1em2" value', () => {
    expect(validateSize('1em2')).toBe(false)
  })

  it('can be equal to ex value', () => {
    expect(validateSize('10ex')).toBe(true)
  })

  it('can not be "1ex2" value', () => {
    expect(validateSize('1ex2')).toBe(false)
  })

  it('can be equal to ch value', () => {
    expect(validateSize('10ch')).toBe(true)
  })

  it('can not be "1ch2" value', () => {
    expect(validateSize('1ch2')).toBe(false)
  })

  it('can be equal to rem value', () => {
    expect(validateSize('10rem')).toBe(true)
  })

  it('can not be "1rem2" value', () => {
    expect(validateSize('1rem2')).toBe(false)
  })

  it('can be equal to lh value', () => {
    expect(validateSize('10lh')).toBe(true)
  })
  it('can not be "1lh2" value', () => {
    expect(validateSize('1lh2')).toBe(false)
  })

  it('can be equal to vh value', () => {
    expect(validateSize('10vh')).toBe(true)
  })

  it('can not be "1vh2" value', () => {
    expect(validateSize('1vh2')).toBe(false)
  })

  it('can be equal to vw value', () => {
    expect(validateSize('10vw')).toBe(true)
  })

  it('can not be "1vw2" value', () => {
    expect(validateSize('1vw2')).toBe(false)
  })

  it('can be equal to vmin value', () => {
    expect(validateSize('10vmin')).toBe(true)
  })

  it('can not be "1vmin2" value', () => {
    expect(validateSize('1vmin2')).toBe(false)
  })

  it('can be equal to vmax value', () => {
    expect(validateSize('10vmax')).toBe(true)
  })

  it('can not be "1vmax2" value', () => {
    expect(validateSize('1vmax2')).toBe(false)
  })

  it('can not be a value without unit', () => {
    expect(validateSize('100')).toBe(false)
  })
})