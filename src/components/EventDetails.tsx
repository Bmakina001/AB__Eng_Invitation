import { motion } from 'motion/react'
import { Calendar, CalendarPlus, Clock, MapPin, Sparkles } from 'lucide-react'
import { engagement, formattedDate } from '../data/engagement'
import { downloadIcs } from '../lib'
import { Divider, Lotus } from './Art'

export default function EventDetails() {
  const { event, venue } = engagement

  return (
    <section
      className="relative px-4 py-16 sm:py-24"
      aria-label="Event Details and Location"
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

          <Lotus className="mx-auto mb-3 text-[#B9955B]" size={40} />

          <p className="font-body text-xs uppercase tracking-[0.28em] text-[#8E6C36]">
            Ceremony &amp; Celebration
          </p>

          <h2 className="font-display text-3xl sm:text-4xl font-medium text-[#702633] mt-2">
            Event Details
          </h2>

          <Divider className="my-6" />

          {/* Details Grid / Stack */}
          <div className="divide-y divide-[#B9955B]/25 py-2">
            {/* Event Name */}
            <div className="py-5 flex flex-col items-center gap-1.5">
              <span className="text-[#8E6C36]">
                <Sparkles size={20} />
              </span>
              <span className="font-body text-xs uppercase tracking-[0.22em] text-[#8E6C36] font-medium">
                Event
              </span>
              <p className="font-display text-xl sm:text-2xl font-medium text-[#702633]">
                {event.titleEn}
              </p>
            </div>

            {/* Date */}
            <div className="py-5 flex flex-col items-center gap-1.5">
              <span className="text-[#8E6C36]">
                <Calendar size={20} />
              </span>
              <span className="font-body text-xs uppercase tracking-[0.22em] text-[#8E6C36] font-medium">
                Date
              </span>
              <p className="font-display text-xl sm:text-2xl font-medium text-[#702633]">
                {formattedDate()}
              </p>
            </div>

            {/* Time */}
            <div className="py-5 flex flex-col items-center gap-1.5">
              <span className="text-[#8E6C36]">
                <Clock size={20} />
              </span>
              <span className="font-body text-xs uppercase tracking-[0.22em] text-[#8E6C36] font-medium">
                Time
              </span>
              <p className="font-display text-xl sm:text-2xl font-medium text-[#702633]">
                {event.timeLabel}
              </p>
            </div>

            {/* Venue & Address */}
            <div className="py-5 flex flex-col items-center gap-1.5">
              <span className="text-[#8E6C36]">
                <MapPin size={20} />
              </span>
              <span className="font-body text-xs uppercase tracking-[0.22em] text-[#8E6C36] font-medium">
                Venue
              </span>
              <p className="font-body text-sm sm:text-base text-[#8C3A48] max-w-md mx-auto mt-1 leading-relaxed">
                {venue.address}
              </p>
            </div>
          </div>

          <Divider className="my-6" />

          {/* Action Buttons: Get Directions & Add to Calendar */}
          <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3">
            <a
              href={venue.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold"
              aria-label="Get Directions to Pallem Maneswari Nilayam on Google Maps"
            >
              <MapPin size={17} />
              <span>Get Directions</span>
            </a>

            <button
              type="button"
              onClick={downloadIcs}
              className="btn-outline-gold"
              aria-label="Add Engagement Ceremony to Calendar"
            >
              <CalendarPlus size={17} />
              <span>Add to Calendar</span>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

