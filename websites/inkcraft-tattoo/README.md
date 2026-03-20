# Inkcraft — Tattoo Studio

A premium tattoo and piercing studio website with an edgy, bold, artistic aesthetic. Industrial gallery meets fine art — moody but refined, elevating tattoo to art.

## Design

- **Color Palette**: Jet black (#0a0a0a), off-white/bone (#f0ece2), burnt orange (#c4622d), muted terracotta (#a0522d), warm gray (#3a3a3a), ink blue-black (#1a1a2e)
- **Typography**: Bebas Neue (display headings), Syne (subheadings), Outfit (body)
- **Aesthetic**: Brutalist elements — raw grid layouts, oversized typography, high contrast, grain textures

## Tech Stack

- React 18
- React Router v6
- Vite (build tool)
- Custom CSS (no frameworks)
- Google Fonts

## Pages

| Route | Page | Description |
|-------|------|-------------|
| `/` | Home | Hero with staggered letter animation, artist spotlight, style gallery, process timeline, pricing, FAQ |
| `/portfolio` | Portfolio | Masonry gallery with category filters and lightbox |
| `/artists` | Artists | Artist profiles with specialties, bios, and booking CTAs |
| `/booking` | Booking | 5-step booking form (service type, style, artist, reference, details) |
| `/piercing` | Piercing | Piercing types grid with prices, jewelry showcase, aftercare |
| `/aftercare` | Aftercare | Timeline-based care instructions, do's/don'ts, product recommendations |
| `/contact` | Contact | Contact form, studio location, walk-in vs appointment hours |
| `/login` | Login | Dark moody login with burnt orange accents |
| `/register` | Register | Registration with age verification and newsletter opt-in |
| `/admin` | Admin | Sessions dashboard, artist schedules, booking management |

## Features

- Staggered letter-by-letter hero animation
- Grain texture overlay on hero section
- Grayscale-to-color hover transitions on gallery images
- Clip-path wipe animation reveals
- Brutalist thick-border input styling
- Multi-step booking with edgy progress bar
- Full form validation with visual feedback
- Responsive design (mobile, tablet, desktop)
- Hamburger menu on mobile

## Running Locally

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build
npm run preview  # preview build
```

## Screenshots

*Run `npm run dev` and visit http://localhost:5173 to see the live site.*
