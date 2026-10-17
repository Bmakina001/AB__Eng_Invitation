import { Flower2 } from 'lucide-react'
import type { InvitationTemplate } from '../data/templates'

type InvitationArtworkProps = {
  template: InvitationTemplate
  compact?: boolean
}

export default function InvitationArtwork({ template, compact = false }: InvitationArtworkProps) {
  return (
    <div
      className={`invitation-artwork theme-${template.style}${compact ? ' artwork-compact' : ''}`}
      aria-label={`${template.name} invitation preview`}
    >
      <div className="artwork-frame">
        <div className="artwork-ornament" aria-hidden="true">
          <span />
          <Flower2 size={compact ? 15 : 19} strokeWidth={1.2} />
          <span />
        </div>
        <p className="artwork-overline">Together with their families</p>
        <p className="artwork-initials">{template.initials}</p>
        <p className="artwork-invite">invite you to celebrate</p>
        <p className="artwork-couple">{template.couple}</p>
        <span className="artwork-rule" />
        <p className="artwork-date">SATURDAY · THE WEDDING DAY</p>
        <p className="artwork-venue">{template.venue}</p>
      </div>
    </div>
  )
}
