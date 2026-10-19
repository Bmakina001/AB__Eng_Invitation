import { useState } from 'react'
import { motion } from 'motion/react'
import { Check, Copy, MessageCircle, Share2 } from 'lucide-react'
import { engagement } from '../data/engagement'

export default function InvitationShareButton() {
  const [copyFeedback, setCopyFeedback] = useState(false)
  const canNativeShare = typeof navigator !== 'undefined' && typeof navigator.share === 'function'

  const getShareUrl = () => {
    return typeof window !== 'undefined' ? window.location.href : 'https://engagement-invitation.pages.dev'
  }

  const getShareMessage = () => {
    const url = getShareUrl()
    return `With the blessings of our families, you are warmly invited to celebrate the Engagement Ceremony of Bhargav  & Abhizna  on Friday, 30 October 2026 in Vijayawada! ✨\n\nView our wedding invitation: ${url}`
  }

  const handleCopy = async () => {
    const url = getShareUrl()
    try {
      await navigator.clipboard.writeText(url)
      setCopyFeedback(true)
      setTimeout(() => setCopyFeedback(false), 3000)
    } catch {
      // Fallback for browsers with strict clipboard permissions
      const textarea = document.createElement('textarea')
      textarea.value = url
      textarea.style.position = 'fixed'
      textarea.style.opacity = '0'
      document.body.appendChild(textarea)
      textarea.select()
      document.execCommand('copy')
      textarea.remove()
      setCopyFeedback(true)
      setTimeout(() => setCopyFeedback(false), 3000)
    }
  }

  const handleNativeShare = async () => {
    try {
      await navigator.share({
        title: engagement.seo.title,
        text: getShareMessage(),
        url: getShareUrl(),
      })
    } catch (err) {
      if (err instanceof DOMException && err.name === 'AbortError') return
      // Fallback to copy or WhatsApp
      window.open(`https://wa.me/?text=${encodeURIComponent(getShareMessage())}`, '_blank')
    }
  }

  const whatsappHref = `https://wa.me/?text=${encodeURIComponent(getShareMessage())}`

  return (
    <section
      className="relative px-4 pb-20 pt-8"
      aria-label="Share Invitation"
    >
      <div className="relative w-full max-w-xl mx-auto text-center">
        <motion.div
          className="editorial-card p-6 sm:p-10 rounded-sm"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6 }}
        >
          {/* Inner border */}
          <div className="pointer-events-none absolute inset-2.5 sm:inset-3 border border-[#B9955B]/25" />

          <p className="font-body text-xs uppercase tracking-[0.25em] text-[#8E6C36]">
            Spread The Joy
          </p>

          <h3 className="font-display text-2xl sm:text-3xl font-medium text-[#702633] mt-2 mb-6">
            Share Our Invitation
          </h3>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            {/* WhatsApp Share Button */}
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold w-full sm:w-auto"
              aria-label="Share invitation on WhatsApp"
            >
              <MessageCircle size={18} />
              <span>Share on WhatsApp</span>
            </a>

            {/* Native Share if available on mobile */}
            {canNativeShare && (
              <button
                type="button"
                onClick={handleNativeShare}
                className="btn-outline-gold w-full sm:w-auto"
                aria-label="Share via device options"
              >
                <Share2 size={17} />
                <span>Share</span>
              </button>
            )}

            {/* Copy Link Button */}
            <button
              type="button"
              onClick={handleCopy}
              className="btn-outline-gold w-full sm:w-auto"
              aria-label="Copy invitation link to clipboard"
            >
              {copyFeedback ? <Check size={20} className="text-emerald-700" /> : <Copy size={20} />}
              <span>{copyFeedback ? 'Link Copied!' : 'Copy Link'}</span>
            </button>
          </div>

          {/* Feedback message for screen readers and visual confirmation */}
          <p
            role="status"
            aria-live="polite"
            className="font-body text-xs text-[#8E6C36] mt-4 min-h-[1.2rem] transition-opacity"
          >
            {copyFeedback ? '✓ Invitation link copied to your clipboard.' : ''}
          </p>
        </motion.div>
      </div>
    </section>
  )
}

