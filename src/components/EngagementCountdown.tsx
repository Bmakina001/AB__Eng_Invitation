import { motion } from 'motion/react'
import { useEffect, useState } from 'react'
import { engagement, eventStart, formattedDate } from '../data/engagement'
import { Divider, Lotus } from './Art'

export default function EngagementCountdown() {
  const [now, setNow] = useState(() => new Date())

  useEffect(() => {
    const timer = setInterval(() => {
      setNow(new Date())
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  const targetTime = eventStart().getTime()
  const diffMs = targetTime - now.getTime()
  const isStarted = diffMs <= 0

  const totalSeconds = Math.max(0, Math.floor(diffMs / 1000))
  const days = Math.floor(totalSeconds / 86400)
  const hours = Math.floor((totalSeconds % 86400) / 3600)
  const minutes = Math.floor((totalSeconds % 3600) / 60)
  const seconds = totalSeconds % 60

  const units = [
    { label: 'Days', value: days },
    { label: 'Hours', value: hours },
    { label: 'Minutes', value: minutes },
    { label: 'Seconds', value: seconds },
  ]

  return (
    <section
      className="relative px-4 py-16 sm:py-24"
      aria-label="Engagement Date and Countdown"
    >
      <div className="relative w-full max-w-2xl mx-auto text-center">
        <motion.div
          className="editorial-card relative p-8 sm:p-12 text-center rounded-sm overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Inner border */}
          <div className="pointer-events-none absolute inset-3 border border-[#B9955B]/25" />

          <Lotus className="mx-auto mb-3 text-[#B9955B]" size={36} />

          <p className="font-body text-xs uppercase tracking-[0.28em] text-[#8E6C36]">
            Save The Sacred Date
          </p>

          <h2 className="font-display text-3xl sm:text-5xl font-medium text-[#702633] mt-3 tracking-tight">
            {formattedDate()}
          </h2>

          <p className="font-script text-2xl sm:text-3xl text-[#B9955B] mt-2 mb-6">
            Counting every moment until we begin forever
          </p>

          <Divider className="my-6" />

          {/* Live Countdown Display */}
          {isStarted ? (
            <div className="py-6 px-4" role="status">
              <p className="font-display text-2xl sm:text-3xl text-[#702633] italic">
                {engagement.messages.afterEvent}
              </p>
            </div>
          ) : (
            <div>
              <p className="sr-only" role="timer">
                {days} days, {hours} hours, {minutes} minutes, {seconds} seconds until our engagement ceremony
              </p>

              <div
                className="grid grid-cols-4 gap-2 sm:gap-4 max-w-lg mx-auto"
                aria-hidden="true"
              >
                {units.map((unit) => (
                  <div
                    key={unit.label}
                    className="flex flex-col items-center justify-center p-3 sm:p-5 rounded-sm bg-[#FFF8EF]/70 backdrop-blur-sm border border-[#B9955B]/40 shadow-sm"
                  >
                    <span className="font-display text-3xl sm:text-5xl font-semibold tabular-nums text-[#8E6C36] leading-none">
                      {String(unit.value).padStart(2, '0')}
                    </span>
                    <span className="font-body text-[0.62rem] sm:text-xs uppercase tracking-[0.18em] text-[#702633] mt-2 font-medium">
                      {unit.label}
                    </span>
                  </div>
                ))}
              </div>

              <p className="font-body text-xs text-[#8C3A48] mt-6 tracking-wide">
                Timezone: Asia/Kolkata (IST)
              </p>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  )
}

