/**
 * Single source of truth for the invitation.
 * Edit this file only. Leave optional fields empty ('' / null / []) to hide them.
 */
import musicFile from '../assets/music/Sita kalyanaaa music.mp3'
export interface EngagementConfig {
  person1: { en: string; short: string }
  person2: { en: string; short: string }
  event: {
    titleEn: string
    /** ISO date (YYYY-MM-DD) */
    date: string
    /** 24h "HH:mm" local event time, or '' if not yet decided (date-based countdown to 00:00 is used). */
    time: string
    /** Display text for the time, e.g. "11:00 AM". Leave '' to hide. */
    timeLabel: string
    /** IANA time zone used for calendar events and labels. */
    timeZone: string
    /** Fixed UTC offset matching timeZone on the event date (India has no DST). */
    utcOffset: string
    /** Approximate duration used for the calendar entry, in hours. */
    durationHours: number
  }
  venue: {  address: string; mapUrl: string }
  messages: {
    openingBlessing: string
    tagline: string
    announceIntro: string
    announceOutro: string
    familyHeading: string
    familyGeneral: string
    closing1: string
    closing2: string
    closingWith: string
    afterEvent: string
    onEventDay: string
  }
  /** Optional family details. Shown only when provided. */
  families: { label: string; names: string }[]
  /** Photos live in src/assets/gallery. List the file name and a description. */
  gallery: { file: string; alt: string }[]
  /** Optional social-sharing image path relative to site root (e.g. "/og.jpg"). */
  shareImage: string
  /** Optional audio path (never autoplays). */
  music: string
  theme: Record<string, string>
  seo: { title: string; description: string }
}

export const engagement: EngagementConfig = {
  person1: { en: 'Bhargav Makina', short: 'Bhargav' },
  person2: { en: 'Abhizna Lankoji', short: 'Abhizna' },
  event: {
    titleEn: 'Engagement Ceremony',
    date: '2026-10-30',
    time: '19:00',
    timeLabel: '7:00 PM',
    timeZone: 'Asia/Kolkata',
    utcOffset: '+05:30',
    durationHours: 3,
  },
  venue: {
    address: '41-1/3-44, 2nd Line, Dwarakanagar, Krishna Lanka, Vijayawada, Andhra Pradesh 520013',
    mapUrl: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent('Pallem Maneswari Nilayam, 41-1/3-44, 2nd Line, Dwarakanagar, Krishna Lanka, Vijayawada, Andhra Pradesh 520013')}`
  },
  messages: {
    openingBlessing: 'With the blessings of our families',
    tagline: 'Two families, one beautiful beginning',
    announceIntro:
      'Some stories begin with a glance,some with a smile,and some with two hearts finding their way to each other.\n♡\nWith hearts full of happiness and families wrapped in love, we invite you to join us as we turn a beautiful \n “you and me” into a joyful “we.”', // i wantto seperate the line after teh heart symbol
      
    announceOutro:
      "Two smiles, two families, a thousand blessings, and a brand-new story waiting to unfold. Come share our laughter,bless our beginning, and make our special day a memory we’ll cherish forever.\n♡\nWith love in our hearts and smiles all around,we can’t wait to celebrate with you!",
    familyHeading: 'With love and blessings from our families',
    familyGeneral:
      'Our special day would be even more beautiful with the love, warmth, and blessings of our family and friends. As we begin this beautiful new chapter together, we look forward to celebrating this joyful moment surrounded by the people who mean the most to us. Your presence, love, and heartfelt wishes will make our engagement truly unforgettable.',
    closing1: 'We are looking forward to celebrating this special moment with you.',
    closing2: 'Your presence and blessings will make our celebration even more memorable.',
    closingWith: 'With love,',
    afterEvent: 'A beautiful beginning has taken place.',
    onEventDay: 'Today is our engagement. Thank you for your blessings!',
  },
  families: [],
  gallery: [],
  shareImage: '',
  music: musicFile,
  theme: {
    ivory: '#FFF9F0',
    paper: '#F5EBDD',
    gold: '#B08D57',
    maroon: '#641E2B',
    maroonSoft: '#873C49',
    goldSoft: '#D8BD83',
    green: '#4E624B',
  },
  seo: {
    title: 'Bhargav & Abhizna | Engagement Invitation',
    description:
      'You are invited to the engagement ceremony of Bhargav Makina and Abhizna Lankoji on 30 October 2026.',
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

export const hasVenue = (): boolean => Boolean(engagement.venue.address.trim())
