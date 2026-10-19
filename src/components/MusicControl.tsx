import { Volume2, VolumeX } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { engagement } from '../data/engagement'

export default function MusicControl() {
  const [isPlaying, setIsPlaying] = useState(true)
  const [hasError, setHasError] = useState(false)
  const audioRef = useRef<HTMLAudioElement>(null)

  const hasAudio = Boolean(engagement.music && engagement.music.trim() !== '')

  useEffect(() => {
    const audio = audioRef.current
    if (!audio || !hasAudio) return

    const handlePlay = () => setIsPlaying(true)
    const handlePause = () => setIsPlaying(false)
    const handleError = () => setHasError(true)

    audio.addEventListener('play', handlePlay)
    audio.addEventListener('pause', handlePause)
    audio.addEventListener('error', handleError)

    // Attempt to autoplay after a short delay
    const playAttempt = setTimeout(() => {
      audio.play().catch(() => {
        // Browser blocked autoplay - that's okay, user can click button
        setIsPlaying(false)
      })
    }, 500)

    return () => {
      clearTimeout(playAttempt)
      audio.removeEventListener('play', handlePlay)
      audio.removeEventListener('pause', handlePause)
      audio.removeEventListener('error', handleError)
    }
  }, [hasAudio])

  const toggle = () => {
    const audio = audioRef.current
    if (!audio || !hasAudio) return

    if (isPlaying) {
      audio.pause()
    } else {
      audio.play().catch(() => {
        setHasError(true)
      })
    }
  }

  if (!hasAudio || hasError) return null

  return (
    <>
      <audio ref={audioRef} src={engagement.music} loop preload="metadata" />
      <button
        type="button"
        onClick={toggle}
        aria-label={isPlaying ? 'Pause background music' : 'Play traditional background music'}
        title={isPlaying ? 'Pause Music' : 'Play Music (Sita Kalyanam)'}
        className="fixed bottom-5 left-5 z-40 flex items-center gap-2 px-3.5 py-2 rounded-full border border-[#B9955B]/60 bg-[#FFF8EF]/90 text-[#702633] shadow-md backdrop-blur-sm hover:bg-[#FAF4EB] hover:border-[#B9955B] hover:text-[#8C3A48] transition-all cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B9955B]"
      >
        {isPlaying ? (
          <>
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#B9955B] opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#8E6C36]" />
            </span>
            <Volume2 size={16} className="text-[#8E6C36]" />
            <span className="font-body text-xs tracking-wider uppercase font-medium hidden sm:inline">
              Music Playing
            </span>
          </>
        ) : (
          <>
            <VolumeX size={16} className="text-[#8C3A48]/70" />
            <span className="font-body text-xs tracking-wider uppercase font-medium hidden sm:inline">
              Play Music
            </span>
          </>
        )}
      </button>
    </>
  )
}
