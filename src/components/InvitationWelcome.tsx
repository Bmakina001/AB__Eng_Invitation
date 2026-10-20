import { motion } from 'motion/react'
import { engagement, formattedDate } from '../data/engagement'
import { CornerOrnament, Divider, TempleArch } from './Art'

export default function InvitationWelcome() {
  const { person1, person2, messages } = engagement

  return (
    <section
      className="relative min-h-[92vh] flex items-center justify-center px-4 py-16 sm:py-24"
      aria-label="Engagement Invitation Welcome"
    >
      <div className="relative w-full max-w-2xl mx-auto">
        {/* Subtle Architectural Temple Arch in Background */}
        <div className="absolute inset-x-0 -top-6 bottom-0 flex items-center justify-center opacity-35 pointer-events-none">
          <TempleArch className="w-full max-w-md h-full object-contain" />
        </div>

        {/* Refined Ivory Editorial Card with Antique Gold Borders */}
        <motion.div
          className="editorial-card relative z-10 p-6 sm:p-14 text-center rounded-sm overflow-hidden"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Inner border */}
          <div className="pointer-events-none absolute inset-2.5 sm:inset-4 border border-[#B9955B]/30" />

          {/* Corner ornaments */}
          <CornerOrnament className="absolute left-2 top-2 w-10 sm:w-14" />
          <CornerOrnament className="absolute right-2 top-2 w-10 -scale-x-100 sm:w-14" />
          <CornerOrnament className="absolute bottom-2 left-2 w-10 -scale-y-100 sm:w-14" />
          <CornerOrnament className="absolute bottom-2 right-2 w-10 -scale-100 sm:w-14" />

          {/* Header Badge */}
          <p className="font-display text-2xl sm:text-3xl font-semibold tracking-wide text-[#702633]">
            {messages.welcomeBadge}
          </p>

          <p className="font-display mt-2 text-base sm:text-lg italic text-[#8C3A48]">
            {messages.openingBlessing}
          </p>

          {/* Event Category Tag */}
          <div className="mt-6 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-[#B9955B]/60" />
            <span className="font-body text-xs uppercase tracking-[0.3em] font-semibold text-[#8E6C36]">
              Engagement Ceremony
            </span>
            <span className="h-px w-8 bg-[#B9955B]/60" />
          </div>

          <Divider className="my-6" />

          {/* Couple's Names as the Typographic Focal Point */}
          <div className="my-6 space-y-1 sm:space-y-2">
            <h1 className="font-display text-3xl sm:text-5xl md:text-6xl font-medium tracking-tight text-[#702633] leading-tight">
              {person1.en}
            </h1>
            <p className="font-script text-3xl sm:text-4xl text-[#B9955B] my-1" aria-label="and">
              &amp;
            </p>
            <h2 className="font-display text-3xl sm:text-5xl md:text-6xl font-medium tracking-tight text-[#702633] leading-tight">
              {person2.en}
            </h2>
          </div>

          <Divider className="my-6" />

          {/* Invitation Copy */}
          <p className="font-display text-base sm:text-lg text-[#702633]">
            A warm invitation to our engagement ceremony
          </p>

          <p className="font-script text-2xl sm:text-3xl text-[#B9955B] mt-2 mb-4">
            {messages.tagline}
          </p>

          {/* Event Date */}
          <div className="mt-4 pt-4 border-t border-[#B9955B]/30 inline-block px-6">
            <p className="font-body text-xs sm:text-sm uppercase tracking-[0.22em] font-semibold text-[#702633]">
              {formattedDate()}
            </p>
          </div>
        </motion.div>

        {/* Scroll to Discover Cue */}
        <motion.div
          className="mt-8 flex flex-col items-center justify-center gap-1.5 text-center cursor-default select-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <span className="font-body text-[0.68rem] uppercase tracking-[0.25em] text-[#8E6C36]">
            Scroll to discover
          </span>
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="text-[#B9955B]"
          >
            <svg
              viewBox="0 0 24 24"
              width="16"
              height="16"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M6 9l6 6 6-6" />
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

