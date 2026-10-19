import { motion } from 'motion/react'
import { useEffect, useRef, useState } from 'react'
import envelopeCover from '../assets/envelope-cover.png'

export default function Opening({ onOpened }: { onOpened: () => void }) {
  const [isOpen, setIsOpen] = useState(false)
  const btnRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    btnRef.current?.focus()
    document.body.style.overflow = 'hidden'
    document.documentElement.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = ''
      document.documentElement.style.overflow = ''
    }
  }, [])

  const handleOpen = () => {
    setIsOpen(true)
    setTimeout(() => {
      onOpened()
    }, 300)
  }

  return (
    <motion.div
      className="fixed inset-0 z-50 bg-black"
      style={{
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        width: '100vw',
        height: '100vh',
        margin: 0,
        padding: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
      }}
      animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      {/* Envelope container - responsive with aspect ratio */}
      <div
        style={{
          position: 'relative',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: 0,
          padding: 0,
        }}
      >
        {/* Envelope image - fills entire container */}
        <motion.img
          src={envelopeCover}
          alt="Engagement invitation envelope"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            margin: 0,
            padding: 0,
            display: 'block',
          }}
          animate={isOpen ? { opacity: 0, scale: 0.95 } : { opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
        />

        {/* Tap button - responsive and centered on seal */}
        {!isOpen && (
          <motion.button
            ref={btnRef}
            type="button"
            onClick={handleOpen}
            style={{
              position: 'absolute',
              top: '68%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: 'clamp(60px, 12vw, 120px)',
              height: 'clamp(60px, 12vw, 120px)',
              borderRadius: '50%',
              background: 'transparent',
              border: 'none',
              padding: 0,
              cursor: 'pointer',
              zIndex: 10,
              outline: 'none',
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Tap to open invitation"
          />
        )}
      </div>

      {/* Skip button - responsive positioning */}
      {!isOpen && (
        <motion.button
          type="button"
          onClick={handleOpen}
          style={{
            position: 'absolute',
            bottom: 'clamp(20px, 5vh, 60px)',
            left: '50%',
            transform: 'translateX(-50%)',
            background: 'transparent',
            border: 'none',
            padding: '8px 16px',
            cursor: 'pointer',
            fontSize: 'clamp(10px, 2.5vw, 14px)',
            letterSpacing: '0.2em',
            color: 'rgba(185, 149, 91, 0.7)',
            textTransform: 'uppercase',
            zIndex: 20,
            outline: 'none',
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = 'rgba(185, 149, 91, 1)'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = 'rgba(185, 149, 91, 0.7)'
          }}
        >
          Skip
        </motion.button>
      )}
    </motion.div>
  )
}
