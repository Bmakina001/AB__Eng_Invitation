import { useEffect } from 'react'
import { ArrowUpRight, Check, X } from 'lucide-react'
import { AnimatePresence, motion } from 'motion/react'
import type { InvitationTemplate } from '../data/templates'
import InvitationArtwork from './InvitationArtwork'

type TemplateDialogProps = {
  template: InvitationTemplate | null
  selectedId: string | null
  onClose: () => void
  onSelect: (template: InvitationTemplate) => void
}

export default function TemplateDialog({
  template,
  selectedId,
  onClose,
  onSelect,
}: TemplateDialogProps) {
  useEffect(() => {
    if (!template) return

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [template, onClose])

  return (
    <AnimatePresence>
      {template && (
        <motion.div
          className="dialog-backdrop"
          role="presentation"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) onClose()
          }}
        >
          <motion.section
            className="template-dialog"
            role="dialog"
            aria-modal="true"
            aria-labelledby="dialog-title"
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 14, scale: 0.98 }}
            transition={{ duration: 0.22 }}
          >
            <button className="dialog-close icon-button" type="button" onClick={onClose} aria-label="Close preview">
              <X size={20} />
            </button>
            <div className="dialog-art">
              <InvitationArtwork template={template} />
            </div>
            <div className="dialog-copy">
              <span className="eyebrow">{template.category} collection</span>
              <h2 id="dialog-title">{template.name}</h2>
              <p>{template.description}</p>
              <div className="dialog-detail"><span>Languages</span><strong>{template.language}</strong></div>
              <div className="dialog-detail"><span>Illustrative preview</span><strong>Personalize your details next</strong></div>
              <button className="button button-primary dialog-action" type="button" onClick={() => onSelect(template)}>
                {selectedId === template.id ? <><Check size={17} /> Design selected</> : <>Choose this design <ArrowUpRight size={17} /></>}
              </button>
              <span className="dialog-note">You can change your design at any time.</span>
            </div>
          </motion.section>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
