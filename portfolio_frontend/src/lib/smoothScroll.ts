import type Lenis from 'lenis'

let smoothScroll: Lenis | null = null

export function setSmoothScroll(instance: Lenis | null) {
  smoothScroll = instance
}

export function getSmoothScroll() {
  return smoothScroll
}
