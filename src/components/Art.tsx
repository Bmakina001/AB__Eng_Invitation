const GOLD = '#B9955B'
const GOLD_SOFT = '#D4B982'
const GOLD_DEEP = '#8E6C36'
const MAROON = '#702633'

/**
 * Elegant single lotus flower motif matching Reference Image 2 & 3
 */
export function Lotus({ className = '', size = 48 }: { className?: string; size?: number }) {
  return (
    <svg
      viewBox="0 0 100 56"
      width={size}
      height={Math.round((size * 56) / 100)}
      className={className}
      aria-hidden="true"
    >
      <g fill="none" stroke={GOLD} strokeWidth="1.3" strokeLinejoin="round" strokeLinecap="round">
        {/* Center petal */}
        <path d="M50 50 C40 36 40 14 50 4 C60 14 60 36 50 50Z" fill={GOLD_SOFT} fillOpacity="0.25" />
        {/* Inner side petals */}
        <path d="M50 50 C36 44 24 30 25 15 C38 18 47 32 50 50Z" />
        <path d="M50 50 C64 44 76 30 75 15 C62 18 53 32 50 50Z" />
        {/* Outer side petals */}
        <path d="M50 50 C30 50 12 42 6 28 C22 26 40 35 50 50Z" />
        <path d="M50 50 C70 50 88 42 94 28 C78 26 60 35 50 50Z" />
        {/* Base lotus pad / water ripples */}
        <path d="M26 53 C38 56 62 56 74 53" stroke={GOLD_DEEP} strokeWidth="1" />
      </g>
    </svg>
  )
}

/**
 * Editorial divider with antique-gold lines and central ornament
 */
export function Divider({ className = '' }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center gap-3 ${className}`} aria-hidden="true">
      <span className="h-px w-16 bg-gradient-to-r from-transparent via-[#B9955B]/40 to-[#B9955B] sm:w-28" />
      <svg viewBox="0 0 24 24" width="18" height="18" className="text-[#B9955B]">
        <path
          d="M12 2 L15.5 12 L12 22 L8.5 12Z M2 12 L12 8.5 L22 12 L12 15.5Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.1"
        />
        <circle cx="12" cy="12" r="1.8" fill="currentColor" />
      </svg>
      <span className="h-px w-16 bg-gradient-to-l from-transparent via-[#B9955B]/40 to-[#B9955B] sm:w-28" />
    </div>
  )
}

/**
 * Minimal floral motif divider
 */
export function FloralSeparator({ className = '' }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center gap-2 ${className}`} aria-hidden="true">
      <span className="h-px w-12 bg-gradient-to-r from-transparent to-[#B9955B]/60 sm:w-20" />
      <span className="text-xs text-[#B9955B]">❦</span>
      <span className="h-px w-12 bg-gradient-to-l from-transparent to-[#B9955B]/60 sm:w-20" />
    </div>
  )
}

/**
 * Traditional Indian architectural arch motif for Welcome section (Reference Image 2)
 */
export function TempleArch({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 340 480" className={className} aria-hidden="true" preserveAspectRatio="xMidYMin meet">
      <g fill="none" stroke={GOLD} strokeWidth="1.2" strokeLinecap="round">
        {/* Outer arch line */}
        <path d="M25 480 V220 C25 125 115 100 170 35 C225 100 315 125 315 220 V480" opacity="0.8" />
        {/* Inner parallel arch line */}
        <path d="M42 480 V226 C42 142 124 116 170 60 C216 116 298 142 298 226 V480" stroke={GOLD_SOFT} strokeWidth="0.8" opacity="0.9" />
        {/* Cusped arches at top apex */}
        <circle cx="170" cy="18" r="4.5" fill={GOLD} />
        <path d="M170 23 V35" stroke={GOLD} strokeWidth="1" />
        {/* Ornamental beads on pillars */}
        {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
          <g key={i}>
            <circle cx="33" cy="235 + i * 30" r="1.6" fill={GOLD_DEEP} opacity="0.7" />
            <circle cx="307" cy="235 + i * 30" r="1.6" fill={GOLD_DEEP} opacity="0.7" />
          </g>
        ))}
      </g>
    </svg>
  )
}

/**
 * Editorial corner ornament with antique-gold lines and maroon accent
 */
export function CornerOrnament({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 80 80" className={className} aria-hidden="true">
      <g fill="none" stroke={GOLD} strokeWidth="1.2">
        <path d="M2 78 V2 H78" />
        <path d="M8 72 V8 H72" stroke={GOLD_SOFT} strokeWidth="0.8" />
        <path d="M2 2 C18 7 28 17 32 36 C18 30 7 20 2 2Z" fill={GOLD_SOFT} fillOpacity="0.2" />
        <circle cx="16" cy="16" r="2.8" fill={MAROON} stroke="none" />
      </g>
    </svg>
  )
}

/**
 * Small ornamental heart flourish for love & forever accents
 */
export function HeartFlourish({ className = '' }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center gap-2 ${className}`} aria-hidden="true">
      <span className="h-px w-8 bg-gradient-to-r from-transparent to-[#B9955B]/60" />
      <svg viewBox="0 0 24 24" width="16" height="16" className="text-[#B87B7C]">
        <path
          d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.2"
        />
      </svg>
      <span className="h-px w-8 bg-gradient-to-l from-transparent to-[#B9955B]/60" />
    </div>
  )
}
