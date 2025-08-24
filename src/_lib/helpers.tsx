export const hexToRgbStr = (hex: string): string => {
  let returnString = ''

  let cleanHex = hex.startsWith('#') ? hex.slice(1) : hex

  if (cleanHex.length === 3) {
    cleanHex = cleanHex
      .split('')
      .map((char) => char + char)
      .join('')
  }

  const validHex = /^[0-9A-Fa-f]{6}$/.test(cleanHex)
  if (validHex) {
    const r = parseInt(cleanHex.substring(0, 2), 16)
    const g = parseInt(cleanHex.substring(2, 4), 16)
    const b = parseInt(cleanHex.substring(4, 6), 16)

    returnString = `${r}, ${g}, ${b}`
  }

  return returnString
}

export const scrollToSection = (sectionId: string, callback?: () => void) => {
  const element = document.getElementById(sectionId)
  if (element) {
    const paddingTop = 64
    const boundingClientRect = element.getBoundingClientRect()
    const currentPostion =
      window.pageYOffset || document.documentElement.scrollTop
    const elementPosition = boundingClientRect.top + currentPostion - paddingTop

    if (sectionId === 'home' || sectionId === 'welcome') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      })
    } else {
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth',
      })
    }

    if (callback) {
      callback()
    }
  }
}
