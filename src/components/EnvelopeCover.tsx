import { motion, useReducedMotion } from 'motion/react'
import { useEffect, useRef, useState } from 'react'
import envelopeCover from '../assets/envelope-cover.png'
import backdropImage from '../assets/backdrop.png'

interface EnvelopeCoverProps {
  onOpened: () => void
}

type AnimationStage = 'idle' | 'pressed' | 'opening' | 'revealing'

export default function EnvelopeCover({ onOpened }: EnvelopeCoverProps) {
  const [stage, setStage] = useState<AnimationStage>('idle')
  const buttonRef = useRef<HTMLButtonElement>(null)
  const shouldReduceMotion = useReducedMotion()

  useEffect(() => {
    // Focus seal button for keyboard navigation accessibility
    buttonRef.current?.focus()
    // Lock scrolling while cover is active
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = ''
    }
  }, [])

  const handleOpen = () => {
    if (stage !== 'idle') return

    if (shouldReduceMotion) {
      setStage('revealing')
      setTimeout(() => {
        onOpened()
      }, 350)
      return
    }

    // Phase 1: Seal tactile response
    setStage('pressed')

    // Phase 2: Envelope unsealing & parting
    setTimeout(() => {
      setStage('opening')
    }, 280)

    // Phase 3: Invitation reveal completion
    setTimeout(() => {
      setStage('revealing')
    }, 950)

    // Phase 4: Settle into document flow
    setTimeout(() => {
      onOpened()
    }, 1450)
  }

  const handleSkip = () => {
    onOpened()
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-[#1E1714]"
      role="dialog"
      aria-modal="true"
      aria-label="Engagement Invitation Envelope Cover"
    >
      {/* Desktop cinematic ambient background extension */}
      <div
        className="pointer-events-none absolute inset-0 hidden sm:block bg-cover bg-center opacity-40 blur-2xl scale-110"
        style={{ backgroundImage: `url(${backdropImage})` }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 hidden sm:block bg-gradient-to-b from-[#1E1714]/70 via-transparent to-[#1E1714]/80"
        aria-hidden="true"
      />

      {/* Main Envelope Poster Container */}
      <motion.div
        className="relative flex items-center justify-center w-full h-[100dvh] max-h-[100dvh] overflow-hidden"
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{
          opacity: stage === 'opening' || stage === 'revealing' ? 0 : 1,
          scale: stage === 'opening' ? 1.04 : 1,
          filter:
            stage === 'pressed'
              ? 'brightness(0.93)'
              : stage === 'opening'
              ? 'blur(6px) brightness(1.05)'
              : 'none',
        }}
        transition={{
          duration: stage === 'opening' ? 0.75 : 0.6,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        {/* Poster Wrapper with preserved 768:1365 aspect ratio */}
        <div className="relative h-full max-h-[100dvh] aspect-[768/1365] max-w-full flex items-center justify-center shadow-2xl sm:rounded-xl sm:border sm:border-[#B9955B]/40 sm:max-h-[94vh] sm:my-auto overflow-hidden">
          {/* Edge-to-edge original poster */}
          <img
            src={envelopeCover}
            alt="Bhargav and Abhizna Engagement Save The Date Envelope Poster"
            className="w-full h-full object-contain object-center select-none"
            draggable={false}
          />

          {/* Interactive "TAP TO OPEN" Wax Seal Button */}
          <div
            className="absolute z-20"
            style={{
              top: '72.6%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '28%',
              aspectRatio: '1 / 1',
            }}
          >
            <motion.button
              ref={buttonRef}
              type="button"
              onClick={handleOpen}
              disabled={stage !== 'idle'}
              aria-label="Tap to open the engagement invitation"
              className="relative w-full h-full rounded-full cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B9955B] focus-visible:ring-offset-4 focus-visible:ring-offset-[#FAF4EB]"
              style={{
                background: 'transparent',
                border: 'none',
                padding: 0,
              }}
              whileHover={
                stage === 'idle'
                  ? {
                      scale: 1.04,
                      boxShadow: '0 0 25px rgba(185, 149, 91, 0.55)',
                    }
                  : {}
              }
              whileTap={stage === 'idle' ? { scale: 0.94 } : {}}
              animate={
                stage === 'pressed'
                  ? { scale: 0.93, opacity: 0.95 }
                  : stage === 'opening'
                  ? { scale: 1.15, opacity: 0 }
                  : { scale: 1, opacity: 1 }
              }
              transition={{
                duration: stage === 'pressed' ? 0.22 : 0.6,
                ease: 'easeOut',
              }}
            >
              {/* Subtle pulsing touch cue to guide the visitor without distraction */}
              {stage === 'idle' && !shouldReduceMotion && (
                <motion.span
                  className="absolute inset-0 rounded-full border border-[#B9955B]/60 pointer-events-none"
                  animate={{
                    scale: [1, 1.12, 1],
                    opacity: [0.4, 0.8, 0.4],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                />
              )}
            </motion.button>
          </div>
        </div>
      </motion.div>

      {/* Elegant Envelope Unfolding Transition Layer */}
      {stage === 'opening' && !shouldReduceMotion && (
        <motion.div
          className="fixed inset-0 z-30 pointer-events-none flex items-center justify-center bg-[#FFF8EF]"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.6, 1] }}
          transition={{ duration: 0.65, ease: 'easeInOut' }}
        />
      )}

      {/* Accessible Skip Button for screen readers or instant navigation */}
      <motion.button
        type="button"
        onClick={handleSkip}
        className="absolute bottom-4 sm:bottom-6 text-[0.7rem] uppercase tracking-[0.22em] text-[#E9D4B5]/80 hover:text-[#FFF8EF] transition-colors z-30 px-3 py-1.5 focus:outline-none focus-visible:ring-1 focus-visible:ring-[#B9955B]"
        initial={{ opacity: 0 }}
        animate={{ opacity: stage === 'idle' ? 0.85 : 0 }}
        transition={{ delay: 0.8 }}
      >
        Skip to Invitation
      </motion.button>
    </div>
  )
}

