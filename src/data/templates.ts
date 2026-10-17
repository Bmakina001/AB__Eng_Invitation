export type TemplateCategory = 'Classic' | 'Floral' | 'Regional' | 'Modern' | 'Minimal'

export type InvitationTemplate = {
  id: string
  name: string
  category: TemplateCategory
  description: string
  language: string
  style: string
  couple: string
  initials: string
  venue: string
}

export const templates: InvitationTemplate[] = [
  { id: 'saffron-vows', name: 'Saffron Vows', category: 'Classic', description: 'A timeless celebration wrapped in temple gold.', language: 'English · తెలుగు', style: 'saffron', couple: 'Ananya & Arjun', initials: 'A · A', venue: 'Hyderabad, Telangana' },
  { id: 'gulabi-garden', name: 'Gulabi Garden', category: 'Floral', description: 'Blush blooms and soft edges for a garden wedding.', language: 'English · हिन्दी', style: 'gulabi', couple: 'Meera & Rohan', initials: 'M · R', venue: 'Jaipur, Rajasthan' },
  { id: 'deccan-pearl', name: 'Deccan Pearl', category: 'Regional', description: 'A modern ode to the grace of the Deccan.', language: 'తెలుగు', style: 'deccan', couple: 'Saanvi & Karthik', initials: 'స · కా', venue: 'Vijayawada, Andhra Pradesh' },
  { id: 'midnight-mehfil', name: 'Midnight Mehfil', category: 'Modern', description: 'Deep jewel tones made for an after-dark affair.', language: 'English · हिन्दी', style: 'midnight', couple: 'Zara & Kabir', initials: 'Z · K', venue: 'Udaipur, Rajasthan' },
  { id: 'mango-season', name: 'Mango Season', category: 'Floral', description: 'Sun-warmed mango hues with playful botanical details.', language: 'English · తెలుగు', style: 'mango', couple: 'Isha & Dev', initials: 'I · D', venue: 'Mysuru, Karnataka' },
  { id: 'temple-bells', name: 'Temple Bells', category: 'Regional', description: 'Inspired by carved pillars and South Indian ceremonies.', language: 'తెలుగు · English', style: 'temple', couple: 'Lakshmi & Varun', initials: 'ల · వ', venue: 'Chennai, Tamil Nadu' },
  { id: 'ivory-heirloom', name: 'Ivory Heirloom', category: 'Classic', description: 'Quietly elegant ivory, ink, and heirloom detailing.', language: 'English · हिन्दी', style: 'ivory', couple: 'Diya & Aarav', initials: 'D · A', venue: 'New Delhi' },
  { id: 'monsoon-romance', name: 'Monsoon Romance', category: 'Floral', description: 'Rain-washed greens meet a little rose-pink romance.', language: 'English · తెలుగు', style: 'monsoon', couple: 'Nila & Aditya', initials: 'N · A', venue: 'Kochi, Kerala' },
  { id: 'marigold-mantra', name: 'Marigold Mantra', category: 'Regional', description: 'A joyful burst of marigold for a bright beginning.', language: 'हिन्दी', style: 'marigold', couple: 'Aditi & Vivaan', initials: 'अ · वि', venue: 'Lucknow, Uttar Pradesh' },
  { id: 'new-chapter', name: 'The New Chapter', category: 'Minimal', description: 'Beautifully simple, with room for your story.', language: 'English', style: 'chapter', couple: 'Tara & Neil', initials: 'T · N', venue: 'Mumbai, Maharashtra' },
  { id: 'lotus-lace', name: 'Lotus & Lace', category: 'Classic', description: 'A delicate lotus motif with a touch of old-world charm.', language: 'English · हिन्दी', style: 'lotus', couple: 'Priya & Siddharth', initials: 'P · S', venue: 'Kolkata, West Bengal' },
  { id: 'afterglow', name: 'Afterglow', category: 'Modern', description: 'Sunset gradients for a celebration that feels like you.', language: 'English · తెలుగు', style: 'afterglow', couple: 'Avani & Reyansh', initials: 'A · R', venue: 'Goa, India' },
]

export const categories: Array<'All styles' | TemplateCategory> = [
  'All styles',
  'Classic',
  'Floral',
  'Regional',
  'Modern',
  'Minimal',
]
