export function validateSize (width: string): boolean {
  if ((/(%|Q)$/i).test(width)) {
    return !isNaN(parseFloat(width.slice(0, -1)))
  }

  if ((/(px|cm|mm|in|pc|pt|em|ex|ch|lh|vh|vw)$/i).test(width)) {
    return !isNaN(parseFloat(width.slice(0, -2)))
  }

  if ((/(rem|vmin|vmax)$/i).test(width)) {
    return !isNaN(parseFloat(width.slice(0, -3)))
  }

  return ['max-content', 'min-content', 'available', 'fit-content', 'auto', 'inherit', 'initial', 'unset'].includes(width)
}

export function validateWidth(width: string): boolean {
  return validateSize(width)
}

export function validateHeight(width: string): boolean {
  return validateSize(width)
}

export function validateTransitionDuration(time: string) {
  if ((/[0-9]s$/i).test(time)) {
    return !isNaN(parseFloat(time.slice(0, -1)))
  }

  if ((/(ms)$/i).test(time)) {
    return !isNaN(parseFloat(time.slice(0, -2)))
  }
  return time === '0'
}