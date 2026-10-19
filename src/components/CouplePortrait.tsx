import { motion } from 'motion/react'
import backdropImage from '../assets/backdrop.png'
import { engagement } from '../data/engagement'
import { FloralSeparator } from './Art'

export default function CouplePortrait() {
  const { person1, person2 } = engagement

  return (
    <section
      className="relative px-4 py-16 sm:py-24"
      aria-label="Couple Portrait"
    >
      <div className="relative w-full max-w-xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="editorial-card p-6 sm:p-10 rounded-sm"
        >
          {/* Subtle Inner Border */}
          <div className="pointer-events-none absolute inset-2.5 sm:inset-3 border border-[#B9955B]/25" />

          <p className="font-body text-xs uppercase tracking-[0.25em] text-[#8E6C36] mb-4">
            Together with Love
          </p>

          {/* Arched Framed Portrait of the Couple */}
          <div className="relative mx-auto w-full max-w-xs sm:max-w-sm aspect-[3/4] p-1.5 rounded-t-[110px] rounded-b-xl border border-[#B9955B]/70 shadow-lg bg-[#FAF4EB]/50 backdrop-blur-sm">
            <div className="relative w-full h-full rounded-t-[105px] rounded-b-lg overflow-hidden border border-[#D4B982]/60">
              <img
                src={backdropImage}
                alt={`${person1.en} and ${person2.en}`}
                className="w-full h-full object-cover object-[center_48%] select-none transition-transform duration-700 hover:scale-[1.02]"
                loading="lazy"
              />
            </div>
          </div>

          {/* Editorial Caption */}
          <div className="mt-6 space-y-1">
            <h3 className="font-display text-2xl sm:text-3xl font-medium text-[#702633]">
              {person1.short} &amp; {person2.short}
            </h3>
            <p className="font-script text-2xl sm:text-3xl text-[#B9955B] pt-1">
              Together, beginning our forever
            </p>
          </div>

          <FloralSeparator className="mt-5" />
        </motion.div>
      </div>
    </section>
  )
}

