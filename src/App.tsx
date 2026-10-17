import { useMemo, useState } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import {
  ArrowDown,
  ArrowRight,
  Check,
  ChevronDown,
  Flower2,
  Heart,
  Menu,
  Search,
  Sparkles,
  X,
} from 'lucide-react'
import { AnimatePresence, motion } from 'motion/react'
import TemplateCard from './components/TemplateCard'
import TemplateDialog from './components/TemplateDialog'
import { categories, templates, type InvitationTemplate } from './data/templates'

function StudioPage() {
  const [activeCategory, setActiveCategory] = useState<(typeof categories)[number]>('All styles')
  const [search, setSearch] = useState('')
  const [previewTemplate, setPreviewTemplate] = useState<InvitationTemplate | null>(null)
  const [selectedId, setSelectedId] = useState<string | null>(null)
  const [selectionMessage, setSelectionMessage] = useState('')
  const [menuOpen, setMenuOpen] = useState(false)

  const visibleTemplates = useMemo(() => {
    const normalizedSearch = search.trim().toLocaleLowerCase()
    return templates.filter((template) => {
      const matchesCategory = activeCategory === 'All styles' || template.category === activeCategory
      const matchesSearch =
        !normalizedSearch ||
        `${template.name} ${template.description} ${template.language} ${template.category}`
          .toLocaleLowerCase()
          .includes(normalizedSearch)
      return matchesCategory && matchesSearch
    })
  }, [activeCategory, search])

  const selectedTemplate = templates.find((template) => template.id === selectedId)

  const selectTemplate = (template: InvitationTemplate) => {
    setSelectedId(template.id)
    setSelectionMessage(`${template.name} is selected. Your invitation will start with this design.`)
    setPreviewTemplate(null)
  }

  return (
    <div className="site-shell">
      <div className="demo-banner">
        <span className="demo-dot" />
        DEMO MODE <span className="demo-divider">·</span> Explore all the designs, no account needed
      </div>
      <header className="site-header">
        <Link className="brand" to="/" aria-label="Vivaha Studio home">
          <span className="brand-mark"><Flower2 size={21} strokeWidth={1.45} /></span>
          <span>vivaha<span className="brand-light"> studio</span></span>
        </Link>
        <button className="menu-toggle icon-button" type="button" onClick={() => setMenuOpen((open) => !open)} aria-label={menuOpen ? 'Close navigation' : 'Open navigation'} aria-expanded={menuOpen}>
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
        <nav className={`main-nav${menuOpen ? ' nav-open' : ''}`} aria-label="Main navigation">
          <a href="#gallery" onClick={() => setMenuOpen(false)}>Invitation designs</a>
          <a href="#how-it-works" onClick={() => setMenuOpen(false)}>How it works</a>
          <a href="#about" onClick={() => setMenuOpen(false)}>Our story</a>
          <Link className="button button-dark nav-cta" to="/templates#gallery" onClick={() => setMenuOpen(false)}>
            Find your design <ArrowRight size={15} />
          </Link>
        </nav>
      </header>

      <main>
        <section className="hero-section">
          <div className="hero-copy">
            <div className="eyebrow hero-eyebrow"><span className="eyebrow-line" /> Made for your kind of forever</div>
            <h1>A little invite.<br /><em>A lot of</em> <span className="hero-scribble">meaning.</span></h1>
            <p className="hero-description">
              Your wedding story deserves more than a forwarded message. Create a beautiful digital invitation made with your traditions, your people, your kind of love.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#gallery">Explore the designs <ArrowRight size={17} /></a>
              <a className="text-link" href="#how-it-works">See how it works <ArrowDown size={15} /></a>
            </div>
            <div className="hero-footnote"><span className="avatar-stack"><i>A</i><i>R</i><i>♡</i></span><span>Made for meaningful beginnings</span></div>
          </div>
          <div className="hero-art">
            <div className="hero-stamp"><span>DESIGNED<br />WITH LOVE</span><Heart size={15} /></div>
            <motion.div
              className="hero-invitation-wrap"
              initial={{ opacity: 0, y: 24, rotate: 1.5 }}
              animate={{ opacity: 1, y: 0, rotate: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              <div className="hero-invitation-paper">
                <div className="hero-flower"><Flower2 size={24} strokeWidth={1} /></div>
                <span className="hero-invitation-kicker">With blessings from our families</span>
                <div className="hero-names">Ananya <span>&</span><br />Arjun</div>
                <div className="hero-invite-rule"><i /><Heart size={12} /><i /></div>
                <span className="hero-invitation-line">request the pleasure of your company</span>
                <div className="hero-wedding-date">12 · 02 · 2026</div>
                <span className="hero-invitation-location">Hyderabad, India</span>
                <div className="hero-flower-bottom"><Flower2 size={19} strokeWidth={1} /></div>
              </div>
            </motion.div>
            <div className="hero-note"><span className="note-star">✳</span><span>Yours, in every detail</span></div>
            <div className="hero-small-card"><span className="small-card-flower">✿</span><span>Telugu, Hindi<br />& English ready</span></div>
          </div>
          <span className="hero-vertical-label">CELEBRATE YOUR WAY — EST. WITH LOVE</span>
        </section>

        <section className="intro-strip" aria-label="Invitation highlights">
          <span>Rooted in tradition</span><i /><span>Made for every love story</span><i /><span>Easy to share, lovely to keep</span>
        </section>

        <section className="gallery-section section-pad" id="gallery">
          <div className="section-heading gallery-heading">
            <div>
              <span className="eyebrow"><span className="eyebrow-line" /> The invitation edit</span>
              <h2>Find the feeling<br />that feels like <em>you.</em></h2>
            </div>
            <p>Twelve original starting points, inspired by the colors, rituals, and little in-between moments that make an Indian wedding yours.</p>
          </div>

          {selectedTemplate && (
            <div className="selection-notice" role="status">
              <span className="selection-check"><Check size={16} /></span>
              <span><strong>{selectedTemplate.name}</strong> is your chosen starting point. {selectionMessage}</span>
              <button type="button" onClick={() => setSelectedId(null)} aria-label="Clear selected design"><X size={16} /></button>
            </div>
          )}

          <div className="gallery-toolbar">
            <div className="category-filters" aria-label="Filter invitation templates">
              {categories.map((category) => (
                <button
                  className={`filter-chip${activeCategory === category ? ' active' : ''}`}
                  key={category}
                  type="button"
                  aria-pressed={activeCategory === category}
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                  {category === 'All styles' && <span className="filter-count">{templates.length}</span>}
                </button>
              ))}
            </div>
            <label className="template-search">
              <Search size={16} aria-hidden="true" />
              <input type="search" value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Find a style" aria-label="Search invitation templates" />
            </label>
          </div>

          {visibleTemplates.length > 0 ? (
            <div className="template-grid">
              {visibleTemplates.map((template, index) => (
                <TemplateCard
                  key={template.id}
                  template={template}
                  index={index}
                  selected={selectedId === template.id}
                  onPreview={setPreviewTemplate}
                />
              ))}
            </div>
          ) : (
            <div className="empty-state">
              <Flower2 size={26} />
              <h3>No invitations found</h3>
              <p>Try another name or choose a different style.</p>
              <button className="text-link" type="button" onClick={() => { setSearch(''); setActiveCategory('All styles') }}>Show all invitations <ArrowRight size={15} /></button>
            </div>
          )}
          <div className="gallery-bottom"><span>Showing {visibleTemplates.length} of {templates.length} designs</span><a href="#how-it-works">What happens next? <ArrowRight size={14} /></a></div>
        </section>

        <section className="why-section section-pad" id="how-it-works">
          <div className="why-decoration" aria-hidden="true"><Flower2 size={205} strokeWidth={0.55} /></div>
          <div className="why-copy">
            <span className="eyebrow"><span className="eyebrow-line" /> Thoughtful by design</span>
            <h2>A wedding invite<br />should feel like <em>coming home.</em></h2>
            <p>We believe the best celebrations make room for every generation, every language, and every way of saying “we’re so glad you’re here.”</p>
            <a className="button button-dark" href="#gallery">Find your starting point <ArrowRight size={16} /></a>
          </div>
          <div className="values-grid">
            <article className="value-card">
              <span className="value-number">01</span><span className="value-icon"><Flower2 size={21} /></span>
              <h3>Made for your rituals</h3><p>From the first haldi to the final dance, your traditions belong in the story.</p>
            </article>
            <article className="value-card">
              <span className="value-number">02</span><span className="value-icon"><Heart size={20} /></span>
              <h3>Every language, welcome</h3><p>Say it in Telugu, Hindi, English—or the words that feel like home.</p>
            </article>
            <article className="value-card">
              <span className="value-number">03</span><span className="value-icon"><Sparkles size={20} /></span>
              <h3>Lovely, not complicated</h3><p>A beautiful place for your details, ready to share with your favorite people.</p>
            </article>
          </div>
        </section>

        <section className="closing-section section-pad" id="about">
          <span className="closing-flower closing-flower-left" aria-hidden="true">✿</span>
          <span className="eyebrow">A little more you. A little less ordinary.</span>
          <h2>Let’s make something<br /><em>worth keeping.</em></h2>
          <a className="button button-primary" href="#gallery">Start with a design <ArrowRight size={16} /></a>
          <span className="closing-flower closing-flower-right" aria-hidden="true">✳</span>
        </section>
      </main>

      <footer className="site-footer">
        <Link className="brand footer-brand" to="/">
          <span className="brand-mark"><Flower2 size={20} strokeWidth={1.45} /></span>
          <span>vivaha<span className="brand-light"> studio</span></span>
        </Link>
        <span>Made with care for your once-in-a-lifetime kind of love.</span>
        <a href="#top" onClick={(event) => { event.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}>Back to top <ChevronDown size={14} className="back-to-top-icon" /></a>
      </footer>

      <TemplateDialog
        template={previewTemplate}
        selectedId={selectedId}
        onClose={() => setPreviewTemplate(null)}
        onSelect={selectTemplate}
      />
      <AnimatePresence>
        {selectionMessage && selectedTemplate && (
          <motion.div className="selection-toast" role="status" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 12 }}>
            <span><Check size={16} /></span>
            <span>{selectedTemplate.name} selected</span>
            <button type="button" onClick={() => setSelectionMessage('')} aria-label="Dismiss selection message"><X size={15} /></button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<StudioPage />} />
      <Route path="/templates" element={<StudioPage />} />
      <Route path="*" element={<StudioPage />} />
    </Routes>
  )
}
