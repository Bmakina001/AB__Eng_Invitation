import backdropImage from '../assets/backdrop.png'

export default function InvitationBackground() {
  return (
    <div
      className="fixed inset-0 pointer-events-none select-none overflow-hidden"
      style={{ zIndex: 0 }}
      aria-hidden="true"
    >
      {/* Layer 1: Full-page couple photograph — softly blurred, desaturated, visible as warm atmosphere */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${backdropImage})`,
          backgroundPosition: 'center 40%',
          filter: 'blur(6px) saturate(0.82) contrast(0.92)',
          opacity: 0.65,
          transform: 'scale(1.05)',
        }}
      />

      {/* Layer 2: Warm ivory translucent overlay — controls how much photo shows through */}
      <div
        className="absolute inset-0"
        style={{
          backgroundColor: 'rgba(255, 248, 239, 0.62)',
        }}
      />

      {/* Layer 3: Subtle warm vignette for editorial depth and readability focus */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse at center, transparent 30%, rgba(61, 48, 40, 0.08) 80%, rgba(61, 48, 40, 0.15) 100%)',
        }}
      />
    </div>
  )
}
