# Business Demo Websites — Showcase Platform

A monorepo containing production-quality demo websites for different business verticals, with Terraform infrastructure for AWS S3 static hosting and GitHub Actions CI/CD with smart change detection and OIDC authentication.

## Architecture

```
┌─────────────────┐       ┌────────────────────────────────────┐
│                  │       │        GitHub Actions CI/CD         │
│   GitHub Repo    │──────▶│                                    │
│   (push to main) │       │  ┌──────────────┐                 │
│                  │       │  │ 1. Detect     │  paths-filter   │
└─────────────────┘       │  │    Changes    │─────────────┐   │
                          │  └──────┬───────┘             │   │
                          │         │                      │   │
                          │  ┌──────▼───────┐             │   │
                          │  │ 2. Terraform  │ (if infra/) │   │
                          │  │    Apply      │             │   │
                          │  └──────┬───────┘             │   │
                          │         │                      │   │
                          │  ┌──────▼───────────────────┐  │   │
                          │  │ 3. Build & Deploy Sites   │  │   │
                          │  │    (parallel per site)    │◀─┘   │
                          │  └──────┬───────────────────┘      │
                          │         │                           │
                          │  ┌──────▼───────┐                  │
                          │  │ 4. Summary    │                  │
                          │  └──────────────┘                  │
                          └────────────┬───────────────────────┘
                                       │ AWS OIDC
                                       ▼
               ┌───────────────────────────────────────────────┐
               │              AWS S3 (us-east-1)               │
               │                                               │
               │  ┌─────────────────────────────────────────┐  │
               │  │ savoria-restaurant-demo    (React+Vite)  │  │
               │  │ luxe-salon-spa-demo        (Vue 3+Vite)  │  │
               │  │ crestview-financial-demo   (React+Vite)  │  │
               │  │ inkcraft-tattoo-demo       (React+Vite)  │  │
               │  │ apex-auto-detail-demo      (Vue 3+Vite)  │  │
               │  │ zenflow-yoga-demo          (React+Vite)  │  │
               │  │ pristine-cleaning-demo     (Vue 3+Vite)  │  │
               │  │ spice-bazaar-grocery-demo  (React+Vite)  │  │
               │  │ harmony-music-academy-demo (Vue 3+Vite)  │  │
               │  │ evergreen-landscaping-demo (React+Vite)  │  │
               │  │ northgate-law-demo         (React+Vite)  │  │
               │  └─────────────────────────────────────────┘  │
               │                                               │
               │  ┌─────────────────────────────────────────┐  │
               │  │ terraform-state-geekyrbhalala/demo-sites │  │
               │  │ (Terraform remote state)                 │  │
               │  └─────────────────────────────────────────┘  │
               └───────────────────────────────────────────────┘
```

## Websites

| # | Website | Business Type | Tech Stack | Pages |
|---|---------|--------------|------------|-------|
| 1 | **Savoria Restaurant** | Fine Dining Restaurant | React 18 + Vite | 8 |
| 2 | **Luxe Salon & Spa** | Hair Salon & Day Spa | Vue 3 + Vite | 9 |
| 3 | **Crestview Financial** | Mortgage & Financial Advisory | React 18 + Vite | 8 |
| 4 | **Inkcraft Tattoo** | Tattoo & Piercing Studio | React 18 + Vite | 10 |
| 5 | **Apex Auto Detail** | Car Detailing Business | Vue 3 + Vite | 10 |
| 6 | **Zenflow Yoga** | Yoga & Wellness Studio | React 18 + Vite | 10 |
| 7 | **Pristine Cleaning** | Residential & Commercial Cleaning | Vue 3 + Vite | 10 |
| 8 | **Spice Bazaar Grocery** | Artisanal Indian Grocery | React 18 + Vite | 10 |
| 9 | **Harmony Music Academy** | Music School & Lessons | Vue 3 + Vite | 10 |
| 10 | **Evergreen Landscaping** | Landscaping & Outdoor Design | React 18 + Vite | 10 |
| 11 | **Northgate Law** | Law Firm & Legal Services | React 18 + Vite | 10 |

> **Note:** Live deployment URLs are available in the GitHub Actions deployment summary (not published here for privacy).

### What Each Website Includes

- **8-10 fully routed pages**: Home, Services/Menu, Booking/Reservations/Calculator, About, Contact, Login, Register, Admin Dashboard, plus business-specific pages
- **Custom CSS**: Unique design system per site — no CSS frameworks (no Tailwind, Bootstrap, etc.)
- **Responsive design**: Optimized for mobile (375px), tablet (768px), and desktop (1440px+)
- **Scroll animations**: IntersectionObserver-based reveal effects on all sections
- **Form validation**: Every form has client-side validation with animated error states and success modals
- **Admin dashboard**: Fake data with stat cards, tables, charts, and quick actions
- **SVG brand logos**: Custom logo for each business
- **Google Fonts**: Three distinct font families per site for headings, body, and accents

### Design Systems

| Site | Theme | Primary Colors | Fonts |
|------|-------|---------------|-------|
| Savoria | Dark luxury, gold accents | `#0d0d0d` `#1a1a1a` `#c9a84c` `#f5f0e8` `#6b2737` | Playfair Display, Cormorant Garamond, Raleway |
| Luxe | Soft botanical, rose gold | `#fefaf6` `#f4e4de` `#b76e79` `#2d4a3e` `#9cac8b` | Libre Baskerville, Jost, Sacramento |
| Crestview | Corporate navy, clean authority | `#1a2744` `#3a5a8c` `#ffffff` `#d4a843` `#27ae60` | DM Serif Display, Source Sans 3, IBM Plex Mono |
| Inkcraft | Dark brutalist, burnt orange | `#0a0a0a` `#f0ece2` `#c4622d` `#a0522d` `#1a1a2e` | Bebas Neue, Syne, Outfit |
| Apex | Glossy automotive, electric blue | `#111111` `#0066ff` `#2d2d2d` `#ffffff` `#ffd700` | Rajdhani, Barlow, Orbitron |
| Zenflow | Warm earthy zen, moss green | `#e8ddd3` `#3b5340` `#b8705a` `#2b2b2b` `#f5f2ee` | Fraunces, Nunito Sans, Caveat |
| Pristine | Clean minimal, fresh blue | `#ffffff` `#2196F3` `#1a237e` `#f5f5f5` `#e0f2f1` | Poppins, Inter, Space Mono |
| Spice Bazaar | Warm vibrant, saffron | `#E65100` `#B71C1C` `#FFF8E1` `#5D4037` `#2E7D32` | Cormorant Infant, Karla, Fira Code |
| Harmony | Musical elegance, purple/gold | `#4A148C` `#FFB300` `#FFFDE7` `#37474F` `#C2185B` | Lora, Rubik, JetBrains Mono |
| Evergreen | Natural earthy, forest green | `#1B5E20` `#795548` `#8BC34A` `#F1F8E9` `#FF6D00` | Merriweather, Open Sans, Inconsolata |
| Northgate | Prestigious dark, burgundy/gold | `#1a1a2e` `#800020` `#C9B037` `#FAFAF0` `#607D8B` | Crimson Pro, Work Sans, Courier Prime |

## Prerequisites

- **AWS Account** with OIDC identity provider configured for GitHub Actions
- **IAM Role** with S3 permissions, trusted by `token.actions.githubusercontent.com`
- **Terraform** >= 1.5.0 (for local runs; CI uses `hashicorp/setup-terraform@v3`)
- **Node.js** >= 20.0.0
- **npm** >= 9.0.0

## Quick Start

### 1. Clone the Repository

```bash
git clone https://github.com/geekyrbhalala/demo-sites.git
cd demo-sites
```

### 2. Run Any Website Locally

```bash
cd websites/savoria-restaurant   # or luxe-salon-spa or crestview-financial
npm install
npm run dev      # starts at http://localhost:5173
```

### 3. Build for Production

```bash
npm run build    # outputs to dist/
npm run preview  # preview production build locally
```

### 4. Deploy Infrastructure (if running Terraform locally)

```bash
cd infrastructure
terraform init
terraform plan
terraform apply
```

### 5. Configure GitHub for CI/CD

Add this secret to your GitHub repository (Settings > Secrets and variables > Actions):

| Secret | Description |
|--------|-------------|
| `AWS_ROLE_ARN` | ARN of the IAM role for OIDC (e.g. `arn:aws:iam::123456789:role/github-oidc-role`) |

The workflow uses `aws-actions/configure-aws-credentials@v4` with OIDC — no static access keys needed.

### 6. Push to Deploy

```bash
git push origin main
```

The CI/CD pipeline automatically detects what changed and only builds/deploys affected sites.

## Infrastructure

### Terraform State

State is stored remotely in an **existing** S3 bucket:

| Setting | Value |
|---------|-------|
| Bucket | `terraform-state-geekyrbhalala` |
| Key | `demo-sites/terraform.tfstate` |
| Region | `us-east-1` |
| Encryption | AES256 |

This bucket is **not** managed by Terraform — it must exist before `terraform init`.

### Reusable S3 Website Module

The `infrastructure/modules/s3-website/` module creates a fully configured S3 static website:

1. Creates S3 bucket with the given name
2. Enables static website hosting (`index.html` as both index and error document for SPA routing)
3. Disables public access blocks
4. Attaches public-read bucket policy for `s3:GetObject`
5. Enables bucket versioning

The module is instantiated once per website in `infrastructure/main.tf`:

```hcl
module "savoria_restaurant" {
  source      = "./modules/s3-website"
  bucket_name = var.savoria_bucket_name
  tags        = { Project = "demo-sites", Website = "savoria-restaurant" }
}
```

### Adding Infrastructure for a New Website

1. Add a module instance in `infrastructure/main.tf`
2. Add a variable with default bucket name in `infrastructure/variables.tf`
3. Add an output for the URL in `infrastructure/outputs.tf`
4. Run `terraform apply`

See [CLAUDE.md](CLAUDE.md) for the exact templates.

## CI/CD Pipeline

### Authentication

The workflow uses **AWS OIDC** (OpenID Connect) — no static credentials. Each job that needs AWS access includes:

```yaml
- uses: aws-actions/configure-aws-credentials@v4
  with:
    role-to-assume: ${{ env.AWS_ROLE_ARN }}
    aws-region: us-east-1
```

Required IAM role trust policy:

```json
{
  "Effect": "Allow",
  "Principal": {
    "Federated": "arn:aws:iam::<ACCOUNT_ID>:oidc-provider/token.actions.githubusercontent.com"
  },
  "Action": "sts:AssumeRoleWithWebIdentity",
  "Condition": {
    "StringEquals": {
      "token.actions.githubusercontent.com:aud": "sts.amazonaws.com"
    },
    "StringLike": {
      "token.actions.githubusercontent.com:sub": "repo:geekyrbhalala/demo-sites:*"
    }
  }
}
```

### Smart Change Detection

Uses `dorny/paths-filter@v3` to only deploy what changed:

| Path Pattern | Triggers |
|-------------|----------|
| `infrastructure/**` | Terraform plan + apply |
| `websites/savoria-restaurant/**` | Build and deploy Savoria |
| `websites/luxe-salon-spa/**` | Build and deploy Luxe |
| `websites/crestview-financial/**` | Build and deploy Crestview |
| `websites/inkcraft-tattoo/**` | Build and deploy Inkcraft |
| `websites/apex-auto-detail/**` | Build and deploy Apex |
| `websites/zenflow-yoga/**` | Build and deploy Zenflow |
| `websites/pristine-cleaning/**` | Build and deploy Pristine |
| `websites/spice-bazaar-grocery/**` | Build and deploy Spice Bazaar |
| `websites/harmony-music-academy/**` | Build and deploy Harmony |
| `websites/evergreen-landscaping/**` | Build and deploy Evergreen |
| `websites/northgate-law/**` | Build and deploy Northgate |

Infrastructure changes also trigger all site deployments (in case bucket config changed).

### Pipeline Jobs

```
detect-changes ──┬── deploy-infrastructure (if infra changed)
                 │
                 ├── deploy-savoria      ─┐
                 ├── deploy-luxe          │
                 ├── deploy-crestview     │
                 ├── deploy-inkcraft      │
                 ├── deploy-apex          │
                 ├── deploy-zenflow       ├── deployment-summary
                 ├── deploy-pristine      │
                 ├── deploy-spice-bazaar  │
                 ├── deploy-harmony       │
                 ├── deploy-evergreen     │
                 └── deploy-northgate    ─┘
```

- Website jobs run **in parallel**
- Each job: checkout → OIDC auth → Node 20 setup → `npm ci` → `npm run build` → `aws s3 sync dist/ s3://BUCKET --delete`
- Summary job writes a markdown table to `$GITHUB_STEP_SUMMARY`

## Adding a New Website

Detailed step-by-step instructions are in [CLAUDE.md](CLAUDE.md) under "Step-by-Step: Adding a New Website". In summary:

1. Scaffold the site in `websites/your-site-name/` using Vite (React or Vue)
2. Follow the established patterns for components (Navbar, Footer, ScrollReveal, Modal)
3. Add Terraform module instance + variable + output
4. Add path filter + deployment job + summary entry in the GitHub Actions workflow
5. Push to main

## Individual Website READMEs

Each website has its own README with design choices, page list, and local dev instructions:

- [Savoria Restaurant](websites/savoria-restaurant/README.md) — Dark luxury fine dining
- [Luxe Salon & Spa](websites/luxe-salon-spa/README.md) — Soft botanical spa
- [Crestview Financial](websites/crestview-financial/README.md) — Corporate financial advisory
- [Inkcraft Tattoo](websites/inkcraft-tattoo/README.md) — Edgy tattoo & piercing studio
- [Apex Auto Detail](websites/apex-auto-detail/README.md) — Premium car detailing
- [Zenflow Yoga](websites/zenflow-yoga/README.md) — Serene yoga & wellness studio
- [Pristine Cleaning](websites/pristine-cleaning/README.md) — Fresh minimal cleaning service
- [Spice Bazaar Grocery](websites/spice-bazaar-grocery/README.md) — Warm vibrant Indian grocery
- [Harmony Music Academy](websites/harmony-music-academy/README.md) — Elegant music school
- [Evergreen Landscaping](websites/evergreen-landscaping/README.md) — Natural landscaping & outdoor design
- [Northgate Law](websites/northgate-law/README.md) — Prestigious law firm

## Project Structure

```
demo-sites/
├── README.md                           # This file
├── CLAUDE.md                           # Patterns, conventions, and guide for adding websites
├── .gitignore                          # node_modules, dist, .terraform, etc.
│
├── infrastructure/
│   ├── main.tf                         # Module instances (one per website)
│   ├── variables.tf                    # Bucket names and region
│   ├── outputs.tf                      # Website URLs
│   ├── providers.tf                    # AWS provider + version constraints
│   ├── backend.tf                      # S3 remote state config
│   ├── bootstrap.sh                    # One-time state bucket creation (not used here)
│   └── modules/
│       └── s3-website/                 # Reusable S3 static hosting module
│           ├── main.tf
│           ├── variables.tf
│           └── outputs.tf
│
├── websites/
│   ├── savoria-restaurant/             # React 18 + Vite
│   │   ├── index.html                  # Google Fonts: Playfair Display, Cormorant Garamond, Raleway
│   │   ├── package.json
│   │   ├── vite.config.js
│   │   └── src/
│   │       ├── main.jsx
│   │       ├── App.jsx                 # BrowserRouter with routes
│   │       ├── App.css                 # Global styles + CSS variables
│   │       ├── components/             # Navbar, Footer, ScrollReveal, Modal
│   │       └── pages/                  # Home, Menu, Reservations, About, Contact, Login, Register, Admin
│   │
│   ├── luxe-salon-spa/                 # Vue 3 + Vite
│   │   ├── index.html                  # Google Fonts: Libre Baskerville, Jost, Sacramento
│   │   ├── package.json
│   │   ├── vite.config.js
│   │   └── src/
│   │       ├── main.js
│   │       ├── App.vue                 # Router-view with transitions
│   │       ├── assets/main.css         # Global styles + CSS variables
│   │       ├── router/index.js         # Vue Router config
│   │       ├── components/             # Navbar, Footer, ScrollReveal, Modal, StarRating
│   │       └── views/                  # Home, Services, Booking, Gallery, About, Contact, Login, Register, Admin
│   │
│   ├── crestview-financial/            # React 18 + Vite
│   │   ├── index.html                  # Google Fonts: DM Serif Display, Source Sans 3, IBM Plex Mono
│   │   ├── package.json
│   │   ├── vite.config.js
│   │   └── src/
│   │       ├── main.jsx
│   │       ├── App.jsx                 # BrowserRouter with routes
│   │       ├── App.css                 # Global styles + CSS variables
│   │       ├── components/             # Navbar, Footer, ScrollReveal, Modal, CountUp
│   │       └── pages/                  # Home, Services, Calculator, About, Contact, Login, Register, Admin
│   │
│   ├── inkcraft-tattoo/                # React 18 + Vite
│   │   ├── index.html                  # Google Fonts: Bebas Neue, Syne, Outfit
│   │   ├── package.json
│   │   ├── vite.config.js
│   │   └── src/
│   │       ├── components/             # Navbar, Footer, ScrollReveal, Modal
│   │       └── pages/                  # Home, Portfolio, Artists, Booking, Piercing, Aftercare, Contact, Login, Register, Admin
│   │
│   ├── apex-auto-detail/               # Vue 3 + Vite
│   │   └── src/views/                  # Home, Services, Packages, Booking, Gallery, About, Contact, Login, Register, Admin
│   │
│   ├── zenflow-yoga/                   # React 18 + Vite
│   │   └── src/pages/                  # Home, Schedule, Classes, Instructors, Pricing, Workshops, Contact, Login, Register, Admin
│   │
│   ├── pristine-cleaning/              # Vue 3 + Vite
│   │   └── src/views/                  # Home, Services, Pricing, Booking, Gallery, About, Contact, Login, Register, Admin
│   │
│   ├── spice-bazaar-grocery/           # React 18 + Vite
│   │   └── src/pages/                  # Home, Products, Deals, Recipes, About, Catering, Contact, Login, Register, Admin
│   │
│   ├── harmony-music-academy/          # Vue 3 + Vite
│   │   └── src/views/                  # Home, Programs, Instructors, Schedule, Recitals, About, Contact, Login, Register, Admin
│   │
│   ├── evergreen-landscaping/          # React 18 + Vite
│   │   └── src/pages/                  # Home, Services, Portfolio, Estimates, Seasonal, About, Contact, Login, Register, Admin
│   │
│   └── northgate-law/                  # React 18 + Vite
│       └── src/pages/                  # Home, PracticeAreas, Attorneys, Results, Resources, About, Contact, Login, Register, Admin
│
└── .github/
    └── workflows/
        └── deploy.yml                  # CI/CD with OIDC, change detection, parallel deploy
```

## Cost Estimation

S3 static hosting costs for demo sites are minimal:

| Resource | Cost |
|----------|------|
| S3 Storage | ~$0.023/GB/month (first 50 TB) |
| S3 Requests | ~$0.004/10,000 GET requests |
| Data Transfer | First 100 GB/month free |

For demo sites with light traffic, **total cost is essentially $0/month** within AWS Free Tier. Even outside free tier, expect less than $1/month for all eleven sites combined.
