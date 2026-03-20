# Zenflow — Yoga & Wellness

A boutique yoga and wellness studio website with a serene, spacious, grounding aesthetic. Japanese zen garden meets Scandinavian simplicity — sophisticated earthy minimalism.

## Design

- **Color Palette**: Warm sand (#e8ddd3), deep moss green (#3b5340), clay/terracotta (#b8705a), charcoal (#2b2b2b), pure white (#ffffff), stone (#9e9585), soft mist (#f5f2ee)
- **Typography**: Fraunces (headings — warm organic serif), Nunito Sans (body — friendly, airy), Caveat (handwritten accents)
- **Aesthetic**: Wabi-sabi meets hygge — generous whitespace, organic blob shapes, warm earth tones, natural textures

## Tech Stack

- React 18
- React Router v6
- Vite (build tool)
- Custom CSS (no frameworks)
- Google Fonts

## Pages

| Route | Page | Description |
|-------|------|-------------|
| `/` | Home | Hero with "Find Your Flow", today's classes, 6 class types, instructor spotlights, pricing, workshops |
| `/schedule` | Schedule | Weekly calendar grid with class blocks, filters by type and level, detail modals |
| `/classes` | Classes | Detailed class descriptions, workshops, private sessions, corporate wellness |
| `/instructors` | Instructors | Team profiles with certifications, teaching styles, personal quotes |
| `/pricing` | Pricing | 4 membership tiers, feature comparison, student discounts, first-week-free promo |
| `/workshops` | Workshops | Events timeline, categories (workshops, retreats, community), past events |
| `/contact` | Contact | Warm contact form, studio location, parking/transit, "New to yoga?" section |
| `/login` | Login | Serene login with "Welcome Back to Your Practice" and Caveat "namaste" |
| `/register` | Register | "Begin Your Journey" with experience level, health info, interest checkboxes |
| `/admin` | Admin | Class schedule, student stats, membership tracking, workshop registrations |

## Features

- Breathing-inspired animations (gentle scale pulse like inhale/exhale)
- Organic blob SVG decorative elements
- Slow, graceful scroll reveals (800ms+ transitions)
- Weekly class schedule with color-coded blocks
- Class detail modals with booking
- Soft border-radius morphing on hover
- Handwritten Caveat font for quotes and accents
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
