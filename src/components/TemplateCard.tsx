import { ArrowUpRight, Eye } from 'lucide-react'
import { motion } from 'motion/react'
import type { InvitationTemplate } from '../data/templates'
import InvitationArtwork from './InvitationArtwork'

type TemplateCardProps = {
  template: InvitationTemplate
  index: number
  selected: boolean
  onPreview: (template: InvitationTemplate) => void
}

export default function TemplateCard({ template, index, selected, onPreview }: TemplateCardProps) {
  return (
    <motion.article
      className={`template-card${selected ? ' is-selected' : ''}`}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.42, delay: (index % 4) * 0.055 }}
    >
      <button
        className="template-preview-button"
        type="button"
        onClick={() => onPreview(template)}
        aria-label={`Preview ${template.name} invitation`}
      >
        <InvitationArtwork template={template} compact />
        <span className="preview-overlay">
          <span><Eye size={15} /> Preview design</span>
        </span>
      </button>
      <div className="template-card-copy">
        <div className="template-title-row">
          <div>
            <span className="template-category">{template.category}</span>
            <h3>{template.name}</h3>
          </div>
          {selected && <span className="selected-label">Selected</span>}
          {!selected && <ArrowUpRight className="template-arrow" size={18} aria-hidden="true" />}
        </div>
        <p>{template.description}</p>
        <span className="template-language">{template.language}</span>
      </div>
    </motion.article>
  )
}
