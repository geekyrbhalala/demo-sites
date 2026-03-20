# Crestview — Financial Advisors

A trusted mortgage brokerage and financial advisory firm website with navy blue authority and modern clarity.

## Design

- **Color Palette**: Navy blue (#1a2744), steel blue (#3a5a8c), white (#ffffff), light gray (#f7f8fa), gold accent (#d4a843), success green (#27ae60)
- **Typography**: DM Serif Display (headings), Source Sans 3 (body), IBM Plex Mono (numbers/data)
- **Aesthetic**: Corporate trust, clean authority, data-forward

## Tech Stack

- React 18
- React Router v6
- Vite (build tool)
- Custom CSS (no frameworks)
- Google Fonts

## Pages

| Route | Page | Description |
|-------|------|-------------|
| `/` | Home | Hero, trust stats with count-up, services, mortgage calculator widget, testimonials |
| `/services` | Services | Detailed service cards with accordion layout |
| `/calculator` | Calculator | Full mortgage calculator with pie chart and amortization |
| `/about` | About | Firm timeline, team profiles, certifications, community |
| `/contact` | Contact | Inquiry form, consultation booking, office info |
| `/login` | Login | Client portal login with 2FA mention |
| `/register` | Register | Client onboarding with Personal/Business toggle |
| `/admin` | Admin | KPIs, pipeline table, performance chart, client search |

## Features

- Number counting animations for statistics
- Interactive mortgage calculator with real-time results
- CSS/SVG pie chart for principal vs. interest breakdown
- SVG line chart for monthly performance
- Smooth section reveal animations
- Card hover effects with border animations
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
