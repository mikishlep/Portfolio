'use client'

import { useEffect, type ReactNode } from 'react'
import Lenis from 'lenis'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { setSmoothScroll } from '@/lib/smoothScroll'
import 'lenis/dist/lenis.css'

export default function SmoothScroll({ children }: { children: ReactNode }) {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const lenis = new Lenis({
      duration: 1.05,
      smoothWheel: true,
      anchors: true,
      stopInertiaOnNavigate: true,
    })
    setSmoothScroll(lenis)

    const updateScrollTrigger = () => ScrollTrigger.update()
    const updateLenis = (time: number) => lenis.raf(time * 1000)

    lenis.on('scroll', updateScrollTrigger)
    gsap.ticker.add(updateLenis)
    gsap.ticker.lagSmoothing(0)

    return () => {
      lenis.off('scroll', updateScrollTrigger)
      gsap.ticker.remove(updateLenis)
      lenis.destroy()
      setSmoothScroll(null)
    }
  }, [])

  return children
}
