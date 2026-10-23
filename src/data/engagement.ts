/**
 * Single source of truth for the engagement invitation.
 * Bhargav  & Abhizna 
 * Friday, 30 October 2026 · Vijayawada, Andhra Pradesh
 */
import musicFile from '../assets/music/Sita kalyanaaa music.mp3'

export interface EngagementConfig {
  person1: { en: string; short: string }
  person2: { en: string; short: string }
  event: {
    titleEn: string
    date: string
    time: string
    timeLabel: string
    timeZone: string
    utcOffset: string
    durationHours: number
  }
  venue: {
    address: string
    mapUrl: string
  }
  messages: {
    welcomeBadge: string
    openingBlessing: string
    tagline: string
    romanticP1: string
    romanticP2: string
    romanticP3: string
    romanticP4: string
    closingP1: string
    closingP2: string
    closingP3: string
    closingWith: string
    afterEvent: string
    onEventDay: string
  }
  gallery: { file: string; alt: string }[]
  music: string
  theme: {
    ivory: string
    champagne: string
    paper: string
    gold: string
    goldDeep: string
    goldSoft: string
    maroon: string
    maroonSoft: string
    rose: string
    charcoal: string
  }
  seo: {
    title: string
    description: string
  }
}

export const engagement: EngagementConfig = {
  person1: { en: 'Bhargav ', short: 'Bhargav' },
  person2: { en: 'Abhizna ', short: 'Abhizna' },
  event: {
    titleEn: 'Engagement Ceremony and Lunch',
    date: '2026-10-30',
    time: '09:30',
    timeLabel: '9:30 AM onwards',
    timeZone: 'Asia/Kolkata',
    utcOffset: '+05:30',
    durationHours: 4,
  },
  venue: {
    address: 'AVIRA Banquets & Stays (Nilaya) 4th Floor,\n 40-20-15 Opposite Vajra Grounds\nBrindavan Colony, Pragathi Nagar, Labbipet\nVijayawada, Andhra Pradesh 520010',
    mapUrl: 'https://www.google.com/maps/place/AVIRA+Banquets+%26+Stays/@16.4959535,80.6459396,698m/data=!3m1!1e3!4m10!3m9!1s0x3a35fb003a046767:0x3890307ad094be98!5m3!1s2026-10-23!4m1!1i2!8m2!3d16.4959535!4d80.6485145!16s%2Fg%2F11zk3dwjp4?entry=ttu&g_ep=EgoyMDI2MTAyMC4wIKXMDSoASAFQAw%3D%3D',
  },
  messages: {
    welcomeBadge: 'Auspicious Beginnings',
    openingBlessing: 'With the blessings of our families',
    tagline: 'Two families, one beautiful beginning',
    romanticP1:
      'Some stories begin with a glance, some with a smile, and some with two hearts finding their way to each other.',
    romanticP2:
      'With hearts full of happiness and families wrapped in love, we invite you to join us as we turn a beautiful ‘you and me’ into a joyful ‘we.’',
    romanticP3:
      'Two smiles, two families, a thousand blessings, and a brand-new story waiting to unfold.',
    romanticP4:
      'Come share our laughter, bless our beginning, and make this special day a memory we will cherish forever.',
    closingP1:
      'Two hearts begin a new chapter, surrounded by the love of two families.',
    closingP2:
      'Your presence and blessings will make this beginning even more beautiful.',
    closingP3:
      'With love, joy, and grateful hearts, we look forward to celebrating with you.',
    closingWith: 'With love & blessings,',
    afterEvent: 'The celebration has begun! Wishing Bhargav & Abhizna a lifetime of joy and togetherness.',
    onEventDay: 'Today is our engagement day! We eagerly look forward to welcoming you.',
  },
  gallery: [],
  music: musicFile,
  theme: {
    ivory: '#FFF8EF',
    champagne: '#E9D4B5',
    paper: '#FAF4EB',
    gold: '#B9955B',
    goldDeep: '#8E6C36',
    goldSoft: '#D4B982',
    maroon: '#702633',
    maroonSoft: '#8C3A48',
    rose: '#B87B7C',
    charcoal: '#3D3028',
  },
  seo: {
    title: 'Bhargav & Abhizna — Engagement Invitation',
    description:
      'With the blessings of our families, you are warmly invited to celebrate the engagement ceremony of Bhargav  and Abhizna  on Friday, 30 October 2026 in Vijayawada.',
  },
}

export const eventStart = (): Date => {
  const { date, time, utcOffset } = engagement.event
  return new Date(`${date}T${time || '00:00'}:00${utcOffset}`)
}

export const formattedDate = (): string =>
  new Intl.DateTimeFormat('en-IN', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: engagement.event.timeZone,
  }).format(eventStart())
