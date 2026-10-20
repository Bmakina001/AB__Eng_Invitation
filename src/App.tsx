import { ArrowUp } from 'lucide-react'
import { useEffect, useState } from 'react'
import { engagement, formattedDate } from './data/engagement'
import EnvelopeCover from './components/EnvelopeCover'
import InvitationBackground from './components/InvitationBackground'
import InvitationWelcome from './components/InvitationWelcome'
import InvitationMessage from './components/InvitationMessage'
import CouplePortrait from './components/CouplePortrait'
import EngagementCountdown from './components/EngagementCountdown'
import EventDetails from './components/EventDetails'
import ClosingBlessing from './components/ClosingBlessing'
import InvitationShareButton from './components/InvitationShareButton'
import MusicControl from './components/MusicControl'
import CursorGlow from './components/CursorGlow'

export default function App() {
  const [opened, setOpened] = useState(false)
  const [showScrollTop, setShowScrollTop] = useState(false)

  // Synchronize CSS custom properties with theme
  useEffect(() => {
    const root = document.documentElement.style
    const t = engagement.theme
    root.setProperty('--color-ivory', t.ivory)
    root.setProperty('--color-champagne', t.champagne)
    root.setProperty('--color-paper', t.paper)
    root.setProperty('--color-gold', t.gold)
    root.setProperty('--color-gold-deep', t.goldDeep)
    root.setProperty('--color-gold-soft', t.goldSoft)
    root.setProperty('--color-maroon', t.maroon)
    root.setProperty('--color-maroon-soft', t.maroonSoft)
    root.setProperty('--color-rose', t.rose)
    root.setProperty('--color-charcoal', t.charcoal)
  }, [])

  // Show "Back to top" button when scrolled down
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 600)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleEnvelopeOpened = () => {
    setOpened(true)
    window.scrollTo({ top: 0, behavior: 'instant' })
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      {/* Cursor glow effect */}
      <CursorGlow />

      {/* Full-screen Cinematic Envelope Cover with Interactive Wax Seal */}
      {!opened && <EnvelopeCover onOpened={handleEnvelopeOpened} />}

      {/* Main Invitation Experience */}
      {opened && (
        <div className="relative min-h-screen text-[#702633]">
          {/* Softly blurred atmospheric background poster layer */}
          <InvitationBackground />

          {/* Clean, unblurred foreground invitation document flow */}
          <main className="relative z-10 w-full overflow-hidden">
            {/* Section 1: Invitation Welcome */}
            <InvitationWelcome />

            {/* Section 2: Romantic Invitation Message */}
            <InvitationMessage />

            {/* Section 3: Couple Portrait */}
            <CouplePortrait />

            {/* Section 4: Engagement Date & Countdown */}
            <EngagementCountdown />

            {/* Section 5: Event Details & Location */}
            <EventDetails />

            {/* Section 6: Closing Blessing */}
            <ClosingBlessing />

            {/* Section 7: Share Invitation */}
            <InvitationShareButton />

            {/* Editorial Footer */}
            <footer className="relative z-10 border-t border-[#B9955B]/30 bg-[#702633]/92 backdrop-blur-md px-4 py-8 text-center text-[#FAF4EB]">
              <p className="font-display text-lg sm:text-xl font-medium tracking-wide">
                {engagement.person1.short} &amp; {engagement.person2.short}
              </p>
              <p className="font-body text-xs uppercase tracking-[0.22em] text-[#E9D4B5] mt-1">
                {formattedDate()} · Vijayawada, Andhra Pradesh
              </p>
              <p className="font-script text-lg sm:text-xl text-[#D4B982] mt-2">
                With the blessings of our families
              </p>
            </footer>

            {/* Ambient Background Music Control */}
            <MusicControl />

            {/* Back to Top Button */}
            {showScrollTop && (
              <button
                type="button"
                onClick={scrollToTop}
                aria-label="Back to top"
                className="fixed bottom-5 right-5 z-40 grid size-11 place-items-center rounded-full border border-[#B9955B] bg-[#FFF8EF]/90 text-[#702633] shadow-lg backdrop-blur-sm transition-all hover:bg-[#FAF4EB] hover:scale-105 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B9955B]"
              >
                <ArrowUp size={18} />
              </button>
            )}
          </main>
        </div>
      )}
    </>
  )
}
