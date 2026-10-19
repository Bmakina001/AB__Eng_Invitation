import { motion } from 'motion/react'
import { engagement } from '../data/engagement'
import { Divider, Lotus } from './Art'

export default function InvitationMessage() {
  const { messages } = engagement

  return (
    <section
      className="relative px-4 py-16 sm:py-24"
      aria-label="Romantic Invitation Message"
    >
      <div className="relative w-full max-w-2xl mx-auto">
        <motion.div
          className="editorial-card relative p-8 sm:p-14 text-center rounded-sm overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Inner border */}
          <div className="pointer-events-none absolute inset-3 border border-[#B9955B]/25" />

          {/* Central Lotus Motif */}
          <Lotus className="mx-auto mb-4 text-[#B9955B]" size={42} />

          <h2 className="font-display text-2xl sm:text-3xl font-medium text-[#702633] tracking-wide">
            Our Forever Begins
          </h2>

          <Divider className="my-6" />

          {/* Romantic Copy in short, well-spaced paragraphs */}
          <div className="space-y-6 text-[#702633] leading-relaxed">
            <p className="font-display text-lg sm:text-xl font-normal italic text-[#8C3A48]">
              “{messages.romanticP1}”
            </p>

            <div className="flex items-center justify-center">
              <span className="text-[#B9955B]/70 text-xs tracking-widest">✦ &nbsp; ✦ &nbsp; ✦</span>
            </div>

            <p className="font-display text-lg sm:text-xl font-normal">
              {messages.romanticP2}
            </p>

            <div className="flex items-center justify-center">
              <span className="text-[#B9955B]/70 text-xs tracking-widest">✦ &nbsp; ✦ &nbsp; ✦</span>
            </div>

            <p className="font-display text-lg sm:text-xl font-normal">
              {messages.romanticP3}
            </p>

            <p className="font-display text-lg sm:text-xl font-medium italic text-[#702633] pt-2">
              {messages.romanticP4}
            </p>
          </div>

          <Divider className="mt-8 mb-2" />

          <p className="font-script text-2xl sm:text-3xl text-[#B9955B] pt-4">
            With love in our hearts
          </p>
        </motion.div>
      </div>
    </section>
  )
}

