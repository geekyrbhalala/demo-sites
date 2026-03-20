# Apex — Auto Detail

A premium mobile and shop-based car detailing website with a sleek, high-performance, automotive-obsessed aesthetic. Glossy, reflective, speed-inspired — automotive showroom meets tech brand.

## Design

- **Color Palette**: Gloss black (#111111), electric blue (#0066ff), carbon fiber gray (#2d2d2d), bright white (#ffffff), silver metallic (#c0c0c0), warning yellow (#ffd700)
- **Typography**: Rajdhani (headings — angular, speed), Barlow (body — clean automotive), Orbitron (numbers/prices — futuristic)
- **Aesthetic**: Tesla website meets F1 pit lane — glossy surfaces, gradient reflections, geometric speed lines

## Tech Stack

- Vue 3 (Composition API)
- Vue Router 4
- Vite (build tool)
- Custom CSS (no frameworks)
- Google Fonts

## Pages

| Route | Page | Description |
|-------|------|-------------|
| `/` | Home | Hero with glossy car, stats counters, 3 package cards, before/after slider, testimonials |
| `/services` | Services | Exterior, interior, and specialty services with pricing |
| `/packages` | Packages | Tiered pricing cards with comparison table and add-ons |
| `/booking` | Booking | 6-step booking (vehicle, package, add-ons, location, date, info) with running total |
| `/gallery` | Gallery | Vehicle gallery with filters, lightbox, before/after pairs |
| `/about` | About | Founder story, certifications, team profiles, shop tour |
| `/contact` | Contact | Quick quote form, phone CTA, service area, hours |
| `/login` | Login | Dark sleek login with "Access Your Garage" tagline |
| `/register` | Register | Registration with optional vehicle info and notification preferences |
| `/admin` | Admin | Booking queue, revenue chart, vehicle schedule, stock alerts |

## Features

- Glossy shimmer effect on cards (CSS animated gradient)
- Before/after image slider with drag interaction
- Animated stat counters (5,000+ cars, 10+ years, etc.)
- Real-time booking total that updates with selections
- Speed-line decorative elements
- Blue glow border hover effects
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
