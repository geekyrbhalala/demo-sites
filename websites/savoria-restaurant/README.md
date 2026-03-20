# Savoria — Fine Dining Restaurant

An upscale Italian-French fusion fine dining restaurant website with a dark, moody, luxurious aesthetic and gold accents.

## Design

- **Color Palette**: Deep charcoal (#1a1a1a), rich black (#0d0d0d), warm gold (#c9a84c), cream (#f5f0e8), muted burgundy (#6b2737)
- **Typography**: Playfair Display (headings), Cormorant Garamond (subheadings), Raleway (body)
- **Aesthetic**: Dark luxury, editorial/magazine feel with Michelin-star elegance

## Tech Stack

- React 18
- React Router v6
- Vite (build tool)
- Custom CSS (no frameworks)
- Google Fonts

## Pages

| Route | Page | Description |
|-------|------|-------------|
| `/` | Home | Hero with parallax, philosophy section, featured dishes, testimonials, gallery |
| `/menu` | Menu | Categorized menu with tabs (Starters, Mains, Desserts, Wine & Cocktails) |
| `/reservations` | Reservations | Booking form with date/time picker and confirmation modal |
| `/about` | About | Chef's story, team, awards, timeline |
| `/contact` | Contact | Contact form, map, hours, social links |
| `/login` | Login | Dark login form with social auth buttons |
| `/register` | Register | Registration with password strength indicator |
| `/admin` | Admin Dashboard | Reservations, customers, revenue stats, charts |

## Features

- Smooth scroll reveal animations (Intersection Observer)
- Parallax effect on hero section
- Staggered menu item reveals
- Hover zoom effects on images
- Navigation background opacity change on scroll
- Full form validation with visual feedback
- Responsive design (mobile, tablet, desktop)
- Hamburger menu on mobile

## Running Locally

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Screenshots

*Screenshots placeholder — run `npm run dev` and visit http://localhost:5173 to see the live site.*
