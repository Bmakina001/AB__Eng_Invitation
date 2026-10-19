import { ArrowUp, CalendarPlus, Check, Copy, MapPin, Share2, MessageCircle, Clock } from 'lucide-react'
import { useEffect, useState } from 'react'
import { engagement, formattedDate, hasVenue } from './data/engagement'
import { copyLink, downloadIcs, nativeShare, whatsappUrl, type ShareResult } from './lib'
import { CornerOrnament, Divider, JasmineGarland, Lotus, Toranam } from './components/Art'
import Countdown from './components/Countdown'
import Gallery from './components/Gallery'
import MusicControl from './components/MusicControl'
import Opening from './components/Opening'
import Reveal from './components/Reveal'

const { person1, person2, messages, event, venue } = engagement

function Section({ children, className = '', labelledBy }: { children: React.ReactNode; className?: string; labelledBy?: string }) {
  return (
    <section className={`px-5 py-20 sm:py-28 ${className}`} aria-labelledby={labelledBy}>
      <div className="mx-auto max-w-3xl text-center">{children}</div>
    </section>
  )
}

function Announcement() {
  return (
    <Section labelledBy="announce-h">
      <Reveal>
        <div className="frame px-5 py-14 sm:px-14">
          <CornerOrnament className="absolute -left-1 -top-1 w-12 sm:w-16" />
          <CornerOrnament className="absolute -right-1 -top-1 w-12 -scale-x-100 sm:w-16" />
          <CornerOrnament className="absolute -bottom-1 -left-1 w-12 -scale-y-100 sm:w-16" />
          <CornerOrnament className="absolute -bottom-1 -right-1 w-12 -scale-100 sm:w-16" />
          <Lotus className="mx-auto mb-4 w-16" />
          <h2 id="announce-h" className="display text-2xl font-semibold text-maroon sm:text-3xl">Engagement Celebration</h2>
          <Divider className="my-6" />
          <p className="display mx-auto max-w-xl whitespace-pre-line text-xl text-maroon sm:text-2xl">{messages.announceIntro}</p>
          <p className="display mt-6 text-4xl font-medium text-maroon sm:text-5xl">{person1.en}</p>
          <p className="display my-1 text-2xl italic text-gold">&amp;</p>
          <p className="display text-4xl font-medium text-maroon sm:text-5xl">{person2.en}</p>
          <Divider className="my-6" />
          <p className="display mx-auto max-w-xl whitespace-pre-line text-lg italic text-maroon-soft sm:text-xl">{messages.announceOutro}</p>
        </div>
      </Reveal>
    </Section>
  )
}

function CountdownSection() {
  return (
    <Section labelledBy="count-h">
      <Reveal>
        <h2 id="count-h" className="display mb-8 text-3xl text-maroon sm:text-4xl">Until Our Engagement</h2>
        <Countdown />
      </Reveal>
    </Section>
  )
}

function Row({ icon, label, children }: { icon: React.ReactNode; label: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col items-center gap-1 py-5">
      <span className="text-gold-deep">{icon}</span>
      <p className="eyebrow">{label}</p>
      <div className="display text-xl text-maroon sm:text-2xl">{children}</div>
    </div>
  )
}

function Details() {
  const showVenue = hasVenue()
  return (
    <section className="bg-paper px-5 py-20 sm:py-28" aria-labelledby="details-h">
      <Reveal className="mx-auto max-w-xl text-center">
        <h2 id="details-h" className="display text-4xl text-maroon sm:text-5xl">Event Details</h2>
        <div className="frame mt-8 divide-y divide-gold/30 px-5 py-4">
          <Row icon={<Lotus className="w-10" />} label="Event">
            <span className="block text-lg text-maroon">{event.titleEn}</span>
          </Row>
          <Row icon={<CalendarPlus size={20} />} label="Date">
            {formattedDate()}
          </Row>
          {event.timeLabel && (
            <Row icon={<Clock size={20} />} label="Time">{event.timeLabel}</Row>
          )}
          {showVenue && (
            <Row icon={<MapPin size={20} />} label="Venue">
              <span className="block font-sans text-base text-maroon-soft">{venue.address}</span>
            </Row>
          )}
        </div>
        {!showVenue && (
          <p className="mt-4 text-sm italic text-maroon-soft">Time and venue details will be shared soon.</p>
        )}
        {import.meta.env.DEV && !showVenue && (
          <p className="mt-2 text-xs text-maroon">[dev] Fill in venue.name and venue.address in src/data/engagement.ts</p>
        )}
        <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row">
          {venue.mapUrl && (
            <a className="btn btn-primary" href={venue.mapUrl} target="_blank" rel="noopener noreferrer">
              <MapPin size={16} /> Get Directions
            </a>
          )}
          <button type="button" className="btn btn-ghost" onClick={downloadIcs}>
            <CalendarPlus size={16} /> Add to Calendar
          </button>
        </div>
      </Reveal>
    </section>
  )
}

function Blessings() {
  const fams = engagement.families.filter((f) => f.names.trim())
  return (
    <Section labelledBy="bless-h">
      <Reveal>
        <div className="frame px-6 py-14 sm:px-14">
          <Lotus className="mx-auto mb-4 w-14" />
          <h2 id="bless-h" className="display text-3xl text-maroon sm:text-4xl">Family Blessings</h2>
          <Divider className="my-6" />
          {fams.length > 0 ? (
            <div className="grid gap-6 sm:grid-cols-2">
              {fams.map((f) => (
                <div key={f.label}>
                  <p className="eyebrow">{f.label}</p>
                  <p className="display mt-1 text-xl text-maroon">{f.names}</p>
                </div>
              ))}
            </div>
          ) : (
            <p className="display mx-auto max-w-lg text-lg italic text-maroon-soft sm:text-xl">{messages.familyGeneral}</p>
          )}
        </div>
      </Reveal>
    </Section>
  )
}

function Closing() {
  const [status, setStatus] = useState<ShareResult | null>(null)
  const canShare = typeof navigator !== 'undefined' && typeof navigator.share === 'function'
  useEffect(() => {
    if (!status) return
    const t = setTimeout(() => setStatus(null), 4000)
    return () => clearTimeout(t)
  }, [status])
  const run = async (fn: () => Promise<ShareResult>) => {
    const r = await fn()
    if (r.message) setStatus(r)
  }
  return (
    <section className="paper relative overflow-hidden px-5 pb-24 pt-20 sm:pt-28" aria-labelledby="closing-h">
      <Toranam className="absolute inset-x-0 top-0 mx-auto w-full max-w-md opacity-90" />
      <Reveal className="relative mx-auto mt-14 max-w-2xl text-center">
        <div className="frame px-6 py-14 sm:px-12">
          <JasmineGarland className="absolute -left-2 -top-3 w-24 sm:w-32" count={4} />
          <JasmineGarland className="absolute -right-2 -top-3 w-24 sm:w-32" count={4} />
          <h2 id="closing-h" className="display text-2xl text-maroon sm:text-3xl">Join Us in Celebrating</h2>
          <p className="display mt-4 text-lg italic text-maroon-soft sm:text-xl">{messages.closing2}</p>
          <Divider className="my-6" />
          <p className="display text-xl italic text-gold-deep">{messages.closingWith}</p>
          <p className="display mt-1 text-3xl font-medium text-maroon sm:text-4xl">{person1.short} &amp; {person2.short}</p>
          <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:flex-wrap">
            {canShare && (
              <button type="button" className="btn btn-primary" onClick={() => run(nativeShare)}>
                <Share2 size={16} /> Share Our Invitation
              </button>
            )}
            <a className={`btn ${canShare ? 'btn-ghost' : 'btn-primary'}`} href={whatsappUrl()} target="_blank" rel="noopener noreferrer">
              <MessageCircle size={16} /> {canShare ? 'WhatsApp' : 'Share on WhatsApp'}
            </a>
            <button type="button" className="btn btn-ghost" onClick={() => run(copyLink)}>
              <Copy size={16} /> Copy Link
            </button>
            <MusicControl />
          </div>
          <p role="status" aria-live="polite" className={`mt-4 min-h-6 text-sm ${status?.ok ? 'text-sage' : 'text-maroon'}`}>
            {status && (<>{status.ok && <Check size={14} className="mr-1 inline" />}{status.message}</>)}
          </p>
        </div>
      </Reveal>
    </section>
  )
}

export default function App() {
  const [opened, setOpened] = useState(false)
  const [showTop, setShowTop] = useState(false)

  useEffect(() => {
    const r = document.documentElement.style
    const t = engagement.theme
    r.setProperty('--color-ivory', t.ivory)
    r.setProperty('--color-paper', t.paper)
    r.setProperty('--color-gold', t.gold)
    r.setProperty('--color-gold-soft', t.goldSoft)
    r.setProperty('--color-maroon', t.maroon)
    r.setProperty('--color-maroon-soft', t.maroonSoft)
    r.setProperty('--color-sage', t.green)
  }, [])

  useEffect(() => {
    const on = () => setShowTop(window.scrollY > 700)
    window.addEventListener('scroll', on, { passive: true })
    return () => window.removeEventListener('scroll', on)
  }, [])

  return (
    <>
      {!opened && <Opening onOpened={() => { setOpened(true); window.scrollTo(0, 0) }} />}
      {opened && (
        <main className="paper">
          <Announcement />
          <CountdownSection />
          <Details />
          <Blessings />
          <Gallery />
          <Closing />
          <footer className="bg-maroon px-5 py-6 text-center text-xs tracking-widest text-gold-soft">
            {person1.short} &amp; {person2.short} · {formattedDate()}
          </footer>
          {showTop && (
            <button type="button" aria-label="Back to top" className="fixed bottom-4 right-4 z-40 grid size-12 place-items-center rounded-full border border-gold bg-ivory text-maroon shadow-lg"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <ArrowUp size={20} />
            </button>
          )}
        </main>
      )}
    </>
  )
}
