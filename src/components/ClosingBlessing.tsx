import { motion } from 'motion/react'
import { engagement, formattedDate } from '../data/engagement'
import { Divider, HeartFlourish, Lotus } from './Art'

export default function ClosingBlessing() {
  const { person1, person2, messages } = engagement

  return (
    <section
      className="relative px-4 py-16 sm:py-24"
      aria-label="Closing Blessing"
    >
      <div className="relative w-full max-w-2xl mx-auto text-center">
        <motion.div
          className="editorial-card relative p-8 sm:p-14 text-center rounded-sm overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Inner border */}
          <div className="pointer-events-none absolute inset-3 border border-[#B9955B]/25" />

          <Lotus className="mx-auto mb-4 text-[#B9955B]" size={44} />

          <h2 className="font-display text-2xl sm:text-3xl font-medium text-[#702633]">
            With Grateful Hearts
          </h2>

          <Divider className="my-6" />

          {/* Closing Blessing Paragraphs */}
          <div className="space-y-4 max-w-lg mx-auto text-[#702633] leading-relaxed">
            <p className="font-display text-lg sm:text-xl font-normal italic text-[#8C3A48]">
              {messages.closingP1}
            </p>
            <p className="font-display text-lg sm:text-xl font-normal">
              {messages.closingP2}
            </p>
            <p className="font-display text-lg sm:text-xl font-medium pt-2">
              {messages.closingP3}
            </p>
          </div>

          <HeartFlourish className="my-6" />

          {/* Couple's Sign-off */}
          <p className="font-script text-2xl sm:text-3xl text-[#B9955B]">
            {messages.closingWith}
          </p>

          <p className="font-display text-2xl sm:text-4xl font-medium text-[#702633] mt-2 tracking-wide">
            {person1.en} &amp; {person2.en}
          </p>

          <p className="font-body text-xs uppercase tracking-[0.22em] text-[#8E6C36] mt-3">
            {formattedDate()}
          </p>
        </motion.div>
      </div>
    </section>
  )
}

