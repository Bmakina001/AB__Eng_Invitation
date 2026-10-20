import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function useParallaxScroll(elementRef: React.RefObject<HTMLElement>, speed = 0.5) {
  useEffect(() => {
    const element = elementRef.current
    if (!element) return

    gsap.to(element, {
      scrollTrigger: { trigger: element, start: 'top center', end: 'bottom center', scrub: 1.2 },
      y: window.innerHeight * speed * 0.3,
      ease: 'none',
    })

    return () => ScrollTrigger.getAll().forEach(t => t.kill())
  }, [elementRef, speed])
}

export function useScrollReveal(containerRef: React.RefObject<HTMLElement>, stagger = 0.1) {
  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const children = container.querySelectorAll('[data-animate]')
    if (children.length === 0) return

    gsap.from(children, {
      scrollTrigger: { trigger: container, start: 'top 80%', end: 'top 20%', scrub: 0.5 },
      opacity: 0,
      y: 30,
      stagger: stagger,
      ease: 'power3.out',
    })

    return () => ScrollTrigger.getAll().forEach(t => t.kill())
  }, [containerRef, stagger])
}

export function useScrollScale(elementRef: React.RefObject<HTMLElement>, startScale = 0.8, endScale = 1) {
  useEffect(() => {
    const element = elementRef.current
    if (!element) return

    gsap.fromTo(element, { scale: startScale, opacity: 0 }, {
      scrollTrigger: { trigger: element, start: 'top 85%', end: 'top 40%', scrub: 0.5 },
      scale: endScale,
      opacity: 1,
      ease: 'power3.out',
    })

    return () => ScrollTrigger.getAll().forEach(t => t.kill())
  }, [elementRef, startScale, endScale])
}

export function prefersReducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}
