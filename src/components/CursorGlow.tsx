import { useEffect, useRef } from 'react'

export default function CursorGlow() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const glowRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Detect touch device
    const isTouchDevice = () => {
      return (
        ('ontouchstart' in window) ||
        (navigator.maxTouchPoints > 0)
      )
    }

    if (isTouchDevice() || window.innerWidth < 768) return

    const handleMouseMove = (e: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = e.clientX + 'px'
        cursorRef.current.style.top = e.clientY + 'px'
      }
      if (glowRef.current) {
        glowRef.current.style.left = e.clientX + 'px'
        glowRef.current.style.top = e.clientY + 'px'
      }
    }

    const handleMouseLeave = () => {
      if (cursorRef.current) cursorRef.current.style.opacity = '0'
      if (glowRef.current) glowRef.current.style.opacity = '0'
    }

    const handleMouseEnter = () => {
      if (cursorRef.current) cursorRef.current.style.opacity = '1'
      if (glowRef.current) glowRef.current.style.opacity = '0.6'
    }

    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseleave', handleMouseLeave)
    document.addEventListener('mouseenter', handleMouseEnter)

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseleave', handleMouseLeave)
      document.removeEventListener('mouseenter', handleMouseEnter)
    }
  }, [])

  return (
    <>
      {/* Custom cursor */}
      <div
        ref={cursorRef}
        className="pointer-events-none fixed z-[9999] hidden sm:block"
        style={{
          width: '8px',
          height: '8px',
          backgroundColor: '#B9955B',
          borderRadius: '50%',
          transform: 'translate(-50%, -50%)',
          opacity: 0,
          transition: 'opacity 0.3s ease',
        }}
      />

      {/* Cursor glow */}
      <div
        ref={glowRef}
        className="pointer-events-none fixed z-[9998] hidden sm:block"
        style={{
          width: '40px',
          height: '40px',
          border: '1px solid rgba(185, 149, 91, 0.6)',
          borderRadius: '50%',
          transform: 'translate(-50%, -50%)',
          opacity: 0,
          transition: 'opacity 0.3s ease',
        }}
      />
    </>
  )
}
