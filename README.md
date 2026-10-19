# Bhargav & Abhizna — Cinematic Engagement Envelope Invitation Website

A luxury, bespoke digital engagement invitation website for **Bhargav ** and **Abhizna **, combining cinematic Indian engagement aesthetics with modern editorial web design.

---

## Experience Overview

### 1. Full-Screen Interactive Luxury Envelope Cover
The invitation opens directly into the original **“SAVE THE DATE”** envelope poster, framed edge-to-edge on mobile and elegantly letterboxed in a cinematic ambient room on desktop.
- Retains the couple's photograph, floral chandeliers, October 2026 calendar (with Oct 30 highlighted with a heart), and champagne gold envelope folds.
- Features an accessible, interactive central wax seal button (**“TAP TO OPEN”**) with subtle breathing hover cues, keyboard focus states, and tactile click response.

### 2. Multi-Phase Cinematic Envelope Opening Transition
Clicking or pressing the seal triggers a smooth 4-phase transition:
- **Phase 1 — Seal Response (~250ms):** Tactile press feedback, gentle golden radiance, and subtle ambient dimming.
- **Phase 2 — Envelope Opening (~700ms):** Restrained physical opening sensation where the envelope parts and the ivory invitation card glides up into full view.
- **Phase 3 — Invitation Reveal (~500ms):** The original artwork dissolves into a fixed, softly blurred atmospheric background layer, and the welcome card sharpens with staged typographic reveals.
- **Phase 4 — Natural Scroll Flow:** The full-screen overlay seamlessly yields to natural vertical document scrolling without scroll hijacking or repeated triggers.

### 3. Dedicated Atmospheric Background Layer
- Uses the authentic portrait background softly blurred (~7px) with low opacity (~18%) and a warm ivory translucent overlay (`rgba(255, 248, 239, 0.82)`).
- Never blurs foreground text or cards, keeping all typography razor-sharp and legible.

### 4. Continuous Vertically Scrollable Invitation (7 Editorial Sections)
1. **Section 1 — Invitation Welcome:** Refined ivory invitation card with architectural temple arch motif, “Auspicious Beginnings”, “With the blessings of our families”, “ENGAGEMENT CEREMONY”, high-contrast serif couple names, and subtle “Scroll to discover” cue.
2. **Section 2 — Romantic Invitation Message:** Center-aligned editorial copy with antique-gold lines and lotus motif:
   *“Some stories begin with a glance, some with a smile, and some with two hearts finding their way to each other…”*
3. **Section 3 — Couple Portrait:** Framed editorial portrait of Bhargav & Abhizna in an arched gold border against the ambient floral garden.
4. **Section 4 — Engagement Date & Live Countdown:** **Friday, 30 October 2026** with real-time countdown in `Asia/Kolkata` (IST) timezone and graceful celebration fallback after event start.
5. **Section 5 — Event Details:**
   - **Event:** Engagement Ceremony and Dinner
   - **Date:** Friday, 30 October 2026
   - **Time:** 7:30 PM onwards
   - **Venue:** Pallem Maneswari Nilayam
   - **Address:** 41-1/3-44, 2nd Line, Dwarakanagar, Krishna Lanka, Vijayawada, Andhra Pradesh 520013
   - One-click **Get Directions** (Google Maps) and **Add to Calendar** (.ics file download).
6. **Section 6 — Closing Blessing:** Heartfelt blessing copy with couple sign-off and lotus ornament.
7. **Section 7 — Share Invitation:** Minimal WhatsApp sharing with prefilled invitation message and live URL, plus copy-to-clipboard and native device sharing.

### 5. Traditional Sita Kalyanam Instrumental Music
- Subtle, accessible floating audio controller in the corner to enjoy traditional wedding/engagement instrumental music without obtrusive autoplays.

---

## Technical Architecture

- **Framework:** React 19 + TypeScript + Vite 8
- **Styling:** Tailwind CSS v4 (`@tailwindcss/vite`) with custom luxury color palette:
  - Warm Ivory: `#FFF8EF`
  - Soft Champagne: `#E9D4B5`
  - Antique Gold: `#B9955B`
  - Deep Maroon: `#702633`
  - Muted Rose: `#B87B7C`
  - Warm Charcoal: `#3D3028`
- **Typography:** Google Fonts:
  - High-Contrast Display Serif: *Cormorant Garamond*
  - Delicate Romantic Script: *Allura*
  - Clean Readable Body: *DM Sans*
- **Animation:** `motion/react` with strict `prefers-reduced-motion` compliance.

---

## Setup & Running Locally

### Installation
```bash
npm install
```

### Development Server
```bash
npm run dev
```
Open `http://localhost:5173` in your browser.

### Production Build & Preview
```bash
npm run build
npm run preview
```
Runs on `http://localhost:4173`.

---

## Deployment to Cloudflare Pages / Vercel

1. Push the code to GitHub:
   ```bash
   git add .
   git commit -m "feat: cinematic engagement envelope website with elegant scroll experience"
   git push origin main
   ```
2. Connect repository to **Cloudflare Pages** or **Vercel**:
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
3. The deployed website URL will automatically populate the WhatsApp sharing feature.

---

**Crafted with love for Bhargav  & Abhizna .**
