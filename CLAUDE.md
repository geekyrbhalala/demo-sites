# CLAUDE.md — Demo Sites Monorepo

## Project Overview

This is a monorepo of production-quality demo websites for different business verticals. Each website is a standalone SPA (single-page application) built with Vite and deployed to AWS S3 as a static site. Infrastructure is managed with Terraform and deployments are automated via GitHub Actions with OIDC authentication.

## Commands

```bash
# Run any website locally
cd websites/<site-name> && npm run dev

# Build for production
cd websites/<site-name> && npm run build

# Preview production build
cd websites/<site-name> && npm run preview

# Terraform (from infrastructure/)
terraform init
terraform plan
terraform apply
terraform validate
```

## Repository Layout

```
websites/<site-name>/          # Each site is a standalone Vite project
infrastructure/                # Terraform configs + reusable S3 module
infrastructure/modules/        # Reusable Terraform modules
.github/workflows/deploy.yml   # Single CI/CD workflow for all sites
```

- React sites use `src/pages/` for page components
- Vue sites use `src/views/` for page components
- All sites use `src/components/` for shared components
- No shared code between websites — each is fully independent

## Key Architecture Decisions

- **No CSS frameworks.** Every site has hand-written CSS with CSS custom properties. This is intentional — each site must have a visually distinct identity.
- **No global state management.** All state is component-level (`useState` / `ref()`). These are static demos, not real apps.
- **No backend.** All forms validate client-side and show a success modal. No API calls.
- **SPA routing via error document.** S3 serves `index.html` for all routes (including 404s), so React Router / Vue Router handle routing client-side.
- **OIDC authentication.** CI/CD uses `aws-actions/configure-aws-credentials@v4` with role assumption — no static AWS keys stored as secrets.
- **Terraform remote state** is stored in `s3://terraform-state-geekyrbhalala/demo-sites/terraform.tfstate` (this bucket is NOT managed by Terraform).

---

## Current Websites (6 total)

| # | Website | Folder | Tech | S3 Bucket | Fonts (Heading / Body / Accent) |
|---|---------|--------|------|-----------|--------------------------------|
| 1 | Savoria Restaurant | `savoria-restaurant` | React 18 | `savoria-restaurant-demo` | Playfair Display / Raleway / Cormorant Garamond |
| 2 | Luxe Salon & Spa | `luxe-salon-spa` | Vue 3 | `luxe-salon-spa-demo` | Libre Baskerville / Jost / Sacramento |
| 3 | Crestview Financial | `crestview-financial` | React 18 | `crestview-financial-demo` | DM Serif Display / Source Sans 3 / IBM Plex Mono |
| 4 | Inkcraft Tattoo | `inkcraft-tattoo` | React 18 | `inkcraft-tattoo-demo` | Bebas Neue / Outfit / Syne |
| 5 | Apex Auto Detail | `apex-auto-detail` | Vue 3 | `apex-auto-detail-demo` | Rajdhani / Barlow / Orbitron |
| 6 | Zenflow Yoga | `zenflow-yoga` | React 18 | `zenflow-yoga-demo` | Fraunces / Nunito Sans / Caveat |

### Design System Reference (avoid collisions when adding new sites)

| Site | Theme Style | Primary | Secondary | Accent | Background |
|------|------------|---------|-----------|--------|------------|
| Savoria | Dark luxury, gold | `#0d0d0d` | `#1a1a1a` | `#c9a84c` (gold) | `#0d0d0d` (black) |
| Luxe | Soft botanical, rose gold | `#b76e79` | `#2d4a3e` | `#9cac8b` (sage) | `#fefaf6` (warm white) |
| Crestview | Corporate navy, clean | `#1a2744` | `#3a5a8c` | `#d4a843` (gold) | `#ffffff` (white) |
| Inkcraft | Dark brutalist, orange | `#0a0a0a` | `#1a1a2e` | `#c4622d` (burnt orange) | `#0a0a0a` (black) |
| Apex | Glossy automotive, blue | `#111111` | `#2d2d2d` | `#0066ff` (electric blue) | `#111111` (black) |
| Zenflow | Warm earthy zen | `#3b5340` | `#b8705a` | `#9e9585` (stone) | `#e8ddd3` (sand) |

**When adding a 7th+ site**: Pick a primary color family NOT already used (gold, rose, navy, orange, blue, green are taken). Pick 3 Google Fonts not used by any existing site. Choose a distinct aesthetic direction (dark/light, minimal/ornate, warm/cool).

### Pages Per Site

| Site | Pages | Business-Specific Routes |
|------|-------|------------------------|
| Savoria | 8 | `/menu`, `/reservations` |
| Luxe | 9 | `/services`, `/booking`, `/gallery` |
| Crestview | 8 | `/services`, `/calculator` |
| Inkcraft | 10 | `/portfolio`, `/artists`, `/booking`, `/piercing`, `/aftercare` |
| Apex | 10 | `/services`, `/packages`, `/booking`, `/gallery` |
| Zenflow | 10 | `/schedule`, `/classes`, `/instructors`, `/pricing`, `/workshops` |

### Terraform & CI/CD Reference

| Site | TF Module Name | TF Variable | CI/CD Job | Change Detection Output |
|------|---------------|-------------|-----------|------------------------|
| Savoria | `savoria_restaurant` | `savoria_bucket_name` | `deploy-savoria` | `site1_changed` |
| Luxe | `luxe_salon_spa` | `luxe_bucket_name` | `deploy-luxe` | `site2_changed` |
| Crestview | `crestview_financial` | `crestview_bucket_name` | `deploy-crestview` | `site3_changed` |
| Inkcraft | `inkcraft_tattoo` | `inkcraft_tattoo_bucket_name` | `deploy-inkcraft` | `site4_changed` |
| Apex | `apex_auto_detail` | `apex_auto_detail_bucket_name` | `deploy-apex` | `site5_changed` |
| Zenflow | `zenflow_yoga` | `zenflow_yoga_bucket_name` | `deploy-zenflow` | `site6_changed` |

---

## Conventions & Patterns

### Naming

| Thing | Convention | Example |
|-------|-----------|---------|
| Website folder | `kebab-case` | `websites/savoria-restaurant/` |
| S3 bucket | `kebab-case-demo` | `savoria-restaurant-demo` |
| Terraform module name | `snake_case` | `module "savoria_restaurant"` |
| Terraform variable | `snake_case` | `var.savoria_bucket_name` |
| React components | `PascalCase.jsx` + `PascalCase.css` | `Navbar.jsx`, `Navbar.css` |
| Vue components | `PascalCase.vue` (scoped styles) | `Navbar.vue` |
| Page files (React) | `PascalCase` in `src/pages/` | `pages/Home.jsx`, `pages/Home.css` |
| Page files (Vue) | `PascalCase` in `src/views/` | `views/Home.vue` |
| CSS variables | `--kebab-case` | `--primary-color`, `--font-heading` |
| CI/CD job names | `deploy-<site-slug>` | `deploy-savoria`, `deploy-luxe` |

### File Structure Per Website

Every website follows this structure (React example shown, Vue uses `.vue` files and `views/` instead of `pages/`):

```
website-name/
├── index.html              # Entry point — includes Google Fonts <link> tags
├── package.json            # type: "module", scripts: dev/build/preview
├── vite.config.js          # base: '/', framework plugin only
└── src/
    ├── main.jsx            # ReactDOM.createRoot or createApp
    ├── App.jsx             # Router setup, layout wrapper
    ├── App.css             # Global reset, CSS variables, shared animations
    ├── components/
    │   ├── Navbar.jsx      # Fixed header, scroll detection, hamburger menu
    │   ├── Navbar.css
    │   ├── Footer.jsx      # Multi-column footer with links
    │   ├── Footer.css
    │   ├── ScrollReveal.jsx # IntersectionObserver wrapper (fade-in on scroll)
    │   ├── Modal.jsx       # Success modal with animated checkmark
    │   └── Modal.css
    └── pages/
        ├── Home.jsx + Home.css
        ├── About.jsx + About.css
        ├── Contact.jsx + Contact.css
        ├── Login.jsx + Login.css
        ├── Register.jsx + Register.css
        ├── Admin.jsx + Admin.css
        └── [business-specific pages]
```

### Required Pages for Every Website

Every demo website must include these pages:

| Route | Page | Required Elements |
|-------|------|-------------------|
| `/` | Home | Hero section, services/features preview, testimonials, CTA, footer |
| `/about` | About | Business story, team grid, timeline or milestones |
| `/contact` | Contact | Contact form (name, email, phone, message) with validation, location info, hours |
| `/login` | Login | Email + password, floating labels, social login buttons (non-functional), link to register |
| `/register` | Register | Multi-field form, password strength indicator, terms checkbox, success animation |
| `/admin` | Admin | Sidebar nav, KPI stat cards, data table, chart (CSS/SVG), quick actions |
| *Business-specific* | Varies | At least 1-2 pages unique to the business (menu, services, booking, calculator, etc.) |

### CSS Pattern

Every site defines its design system as CSS custom properties in `App.css` or `main.css`:

```css
:root {
  /* Colors — unique per site */
  --primary: #...;
  --secondary: #...;
  --accent: #...;
  --bg: #...;
  --text: #...;

  /* Typography — 3 fonts per site (heading, body, accent) */
  --font-heading: 'Font Name', serif;
  --font-body: 'Font Name', sans-serif;
  --font-accent: 'Font Name', cursive;  /* or monospace for data-heavy sites */

  /* Shared utilities */
  --transition: 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  --shadow-sm: 0 2px 8px rgba(0,0,0,0.1);
  --shadow-lg: 0 8px 30px rgba(0,0,0,0.15);
  --radius: 8px;
  --max-width: 1200px;
  --header-height: 80px;
}
```

Global reset (every site):

```css
*, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }
html { scroll-behavior: smooth; }
body {
  font-family: var(--font-body);
  color: var(--text);
  background: var(--bg);
  line-height: 1.7;
  overflow-x: hidden;
  -webkit-font-smoothing: antialiased;
}
```

Responsive breakpoints (consistent across all sites):

```css
@media (max-width: 768px) { /* Tablet and below */ }
@media (max-width: 480px) { /* Mobile */ }
```

### Scroll Reveal Animation Pattern

Every site has a `ScrollReveal` component that wraps sections to animate them on scroll.

**React version** (`components/ScrollReveal.jsx`):
- Uses `useRef` + `useEffect` with `IntersectionObserver`
- Props: `children`, `className`, `delay` (ms), `direction` ('up'|'left'|'right')
- Adds `.visible` class when element enters viewport
- Auto-unobserves after triggering (one-time animation)
- Corresponding CSS classes: `.reveal`, `.reveal-left`, `.reveal-right` → `.visible`

**Vue version** (`components/ScrollReveal.vue`):
- Uses `ref()` + `onMounted` with `IntersectionObserver`
- Props: `delay` (Number, default 0)
- Toggles `isVisible` ref, binds `:class="{ visible: isVisible }"`
- Scoped styles handle the animation

### Navbar Pattern

Every Navbar implements:
1. **Scroll detection**: Background/padding changes when `window.scrollY > threshold`
2. **Mobile hamburger**: Toggle state for mobile menu, auto-close on route change
3. **Body scroll lock**: `document.body.style.overflow = 'hidden'` when mobile menu is open
4. **Active link highlighting**: Based on current route (`useLocation()` or `useRoute()`)
5. **SVG logo**: Inline SVG specific to the brand
6. **CTA button**: Right-aligned action button (Reserve, Book, Contact)

### Modal Pattern

Every site has a `Modal` component for success feedback:
- Props: `isOpen`, `onClose` (React) or `v-model` / emit (Vue)
- Locks body scroll when open
- Closes on overlay click (with `stopPropagation` on inner content)
- Animated SVG checkmark using stroke-dasharray animation
- Fade-in + scale-in CSS keyframes

### Form Validation Pattern

Every form follows this pattern:

```jsx
// State
const [form, setForm] = useState({ name: '', email: '', ... })
const [errors, setErrors] = useState({})
const [showModal, setShowModal] = useState(false)

// Validation function
const validate = () => {
  const errs = {}
  if (!form.name.trim()) errs.name = 'Required'
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = 'Invalid email'
  // ... more rules
  return errs
}

// Submit handler
const handleSubmit = (e) => {
  e.preventDefault()
  const errs = validate()
  if (Object.keys(errs).length > 0) { setErrors(errs); return }
  setShowModal(true)       // Show success
  setForm({ ... })         // Reset form
  setErrors({})
}

// Input change clears that field's error
const handleChange = (e) => {
  const { name, value } = e.target
  setForm(prev => ({ ...prev, [name]: value }))
  if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }))
}
```

Required validations:
- **Name**: Non-empty
- **Email**: Regex `^[^\s@]+@[^\s@]+\.[^\s@]+$`
- **Phone**: Optional, but if filled: `/^[\d\s\-\+\(\)]{7,}$/`
- **Password**: Min 6 chars, strength meter (length + uppercase + digit + special char)
- **Confirm password**: Must match password

### Routing Pattern

**React (App.jsx)**:
```jsx
<BrowserRouter>
  <Routes>
    <Route path="/admin" element={<Admin />} />   {/* No Navbar/Footer */}
    <Route path="*" element={
      <>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* ...other routes */}
        </Routes>
        <Footer />
      </>
    } />
  </Routes>
</BrowserRouter>
```

**Vue (App.vue + router/index.js)**:
- Navbar and Footer are always rendered in App.vue
- Admin page hides them conditionally via `v-if="$route.path !== '/admin'"`
- Router uses `createWebHistory()` with `scrollBehavior() { return { top: 0 } }`

Key: Admin route is always visually separate (no public Navbar/Footer).

### Admin Dashboard Pattern

Every admin page includes:
1. **Sidebar navigation** (dark or brand-colored) with icon + label links
2. **KPI stat cards** (3-4 cards): metric name, large number, trend or icon
3. **Data table**: 5-8 rows of fake data with status badges (color-coded)
4. **Chart**: CSS-only bar chart or SVG line chart with brand colors
5. **Quick actions**: Buttons or search input
6. Standalone layout — no public Navbar or Footer

### Google Fonts Pattern

Fonts are loaded in `index.html` via `<link>` tags (not CSS `@import`):

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Font+One&family=Font+Two&display=swap" rel="stylesheet">
```

Every site uses exactly 3 font families:
1. **Heading font** (usually serif or display)
2. **Body font** (usually sans-serif)
3. **Accent font** (script, monospace, or secondary serif)

### Images

All images are loaded directly from Unsplash URLs in `<img>` tags. No local image files. Format:
```
https://images.unsplash.com/photo-<ID>?w=<WIDTH>
```
- Hero images: `?w=1920`
- Section images: `?w=1200`
- Card/grid images: `?w=800`

### Vite Config

Identical across all sites (only the plugin changes):

```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'  // or vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [react()],  // or [vue()]
  base: '/'
})
```

### Package.json

```json
{
  "name": "site-name",
  "private": true,
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  }
}
```

Dependencies:
- React sites: `react`, `react-dom`, `react-router-dom` + dev: `@vitejs/plugin-react`, `vite`
- Vue sites: `vue`, `vue-router` + dev: `@vitejs/plugin-vue`, `vite`
- **No other dependencies.** No CSS frameworks, no UI libraries, no state management.

---

## Terraform Patterns

### Adding a New Website to Infrastructure

**1. Add module instance** in `infrastructure/main.tf`:

```hcl
module "your_site_name" {
  source      = "./modules/s3-website"
  bucket_name = var.your_site_bucket_name

  tags = {
    Project = "demo-sites"
    Website = "your-site-name"
  }
}
```

**2. Add variable** in `infrastructure/variables.tf`:

```hcl
variable "your_site_bucket_name" {
  description = "S3 bucket name for Your Site website"
  type        = string
  default     = "your-site-name-demo"
}
```

**3. Add output** in `infrastructure/outputs.tf`:

```hcl
output "your_site_website_url" {
  description = "Your Site website URL"
  value       = "http://${module.your_site_name.website_endpoint}"
}
```

### S3 Module Behavior

The `modules/s3-website/` module creates:
- S3 bucket with given name
- Static website hosting (`index.html` as index AND error document — critical for SPA routing)
- Public access unblocked + public-read bucket policy
- Versioning enabled

Do NOT modify the module for individual sites — it's meant to be generic. All sites use the same config.

---

## CI/CD Patterns

### Adding a New Website to the Pipeline

**1. Add path filter** in `detect-changes` job:

```yaml
filters: |
  # ... existing filters ...
  yoursite:
    - 'websites/your-site-name/**'
```

And add the output:

```yaml
outputs:
  # ... existing outputs ...
  site_yoursite_changed: ${{ steps.filter.outputs.yoursite }}
```

**2. Add deployment job** (copy an existing one and modify):

```yaml
deploy-yoursite:
  name: Deploy Your Site
  runs-on: ubuntu-latest
  needs: [detect-changes, deploy-infrastructure]
  if: |
    always() &&
    (needs.detect-changes.outputs.site_yoursite_changed == 'true' || needs.detect-changes.outputs.infra_changed == 'true') &&
    (needs.deploy-infrastructure.result == 'success' || needs.deploy-infrastructure.result == 'skipped')
  steps:
    - uses: actions/checkout@v4

    - name: Configure AWS Credentials
      uses: aws-actions/configure-aws-credentials@v4
      with:
        role-to-assume: ${{ env.AWS_ROLE_ARN }}
        aws-region: ${{ env.AWS_REGION }}

    - name: Setup Node.js
      uses: actions/setup-node@v4
      with:
        node-version: "20"
        cache: "npm"
        cache-dependency-path: websites/your-site-name/package-lock.json

    - name: Install Dependencies
      working-directory: websites/your-site-name
      run: npm ci

    - name: Build
      working-directory: websites/your-site-name
      run: npm run build

    - name: Deploy to S3
      working-directory: websites/your-site-name
      run: aws s3 sync dist/ s3://your-site-name-demo --delete --region $AWS_REGION
```

**3. Add to deployment-summary** job:

- Add `deploy-yoursite` to the `needs` array
- Add a row in the summary table generation
- Add the status variable

**4. Add to deployment-summary `needs`**:

```yaml
needs: [detect-changes, deploy-savoria, deploy-luxe, deploy-crestview, deploy-inkcraft, deploy-apex, deploy-zenflow, deploy-yoursite]
```

---

## Step-by-Step: Adding a New Website

This is the complete checklist for adding a 7th (or 8th, 9th...) website to the monorepo.

### 1. Scaffold the Project

```bash
cd websites
mkdir your-site-name && cd your-site-name

# React site:
npx --yes create-vite . --template react
npm install react-router-dom

# OR Vue site:
npx --yes create-vite . --template vue
npm install vue-router@4
```

### 2. Set Up index.html

- Add `<link rel="preconnect">` for Google Fonts
- Add the 3 chosen font families
- Set the `<title>` to the business name
- Root div: `<div id="root">` (React) or `<div id="app">` (Vue)

### 3. Set Up vite.config.js

```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'  // or vue

export default defineConfig({
  plugins: [react()],
  base: '/'
})
```

### 4. Create Global CSS (App.css or assets/main.css)

Define your design system:
- CSS custom properties for colors, fonts, shadows, transitions, radius
- Global reset (`*`, `html`, `body`, `a`, `img`, `ul`)
- Scroll reveal animation classes (`.reveal`, `.reveal.visible`)
- Shared button styles
- Responsive utility classes if needed

### 5. Create Shared Components

Copy the pattern from an existing site and restyle:

| Component | Purpose |
|-----------|---------|
| `Navbar` | Fixed header, scroll effect, hamburger, SVG logo, CTA |
| `Footer` | Multi-column, links, social icons, hours |
| `ScrollReveal` | IntersectionObserver wrapper for fade-in animations |
| `Modal` | Success feedback modal with animated checkmark |

### 6. Create All Required Pages

Minimum pages: Home, About, Contact, Login, Register, Admin, plus 1-2 business-specific pages.

Each page:
- Full content (no placeholders)
- Wrapped in ScrollReveal where appropriate
- Uses Unsplash images via URL
- Has its own CSS file (React) or scoped styles (Vue)
- Forms have validation + success modal

### 7. Set Up Routing

React (`App.jsx`):
```jsx
<BrowserRouter>
  <Routes>
    <Route path="/admin" element={<Admin />} />
    <Route path="*" element={<><Navbar /><Routes>...</Routes><Footer /></>} />
  </Routes>
</BrowserRouter>
```

Vue (`router/index.js`):
```js
const routes = [
  { path: '/', name: 'Home', component: Home },
  // ...all routes with names
]
```

### 8. Create README.md for the Website

Include: description, design choices (colors, fonts, aesthetic), tech stack, pages table (route + description), features list, local dev commands.

### 9. Test Locally

```bash
npm run dev    # Check all pages, responsive design, forms
npm run build  # Must succeed with zero errors
```

### 10. Add Terraform Infrastructure

Add to `infrastructure/main.tf`, `variables.tf`, `outputs.tf` (see templates above).

### 11. Add to CI/CD Workflow

Update `.github/workflows/deploy.yml` — path filter, deployment job, summary entry (see templates above).

### 12. Commit and Push

```bash
git add websites/your-site-name/ infrastructure/ .github/
git commit -m "Add your-site-name demo website"
git push origin main
```

The pipeline will automatically create the S3 bucket (via Terraform) and deploy the site.

---

## Common Pitfalls

- **Forgetting `base: '/'` in vite.config.js** → assets won't load on S3
- **Using `index_document` without `error_document = "index.html"`** → SPA routes return S3 404
- **Not adding `id-token: write`** permission → OIDC auth fails
- **Missing `package-lock.json`** → `npm ci` fails in CI, and node cache won't work
- **Importing CSS frameworks** → violates the custom-CSS-only rule; each site must be visually unique
- **Adding backend API calls** → these are static demos, all data is fake/hardcoded
- **Not testing the build** → always run `npm run build` before committing; Vite catches import errors at build time
