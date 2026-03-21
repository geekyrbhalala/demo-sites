<template>
  <div class="services-page">
    <!-- Hero -->
    <section class="page-hero">
      <div class="container">
        <span class="section-label">Our Services</span>
        <h1>Professional Cleaning<br>Solutions</h1>
        <p>Comprehensive cleaning services for homes and businesses. Every service includes eco-friendly products and our satisfaction guarantee.</p>
      </div>
    </section>

    <!-- Residential -->
    <section class="section">
      <div class="container">
        <ScrollReveal>
          <div class="section-header" style="text-align: left">
            <span class="section-label">Residential</span>
            <h2>Home Cleaning Services</h2>
            <p style="margin: 0">Your home is your sanctuary. We help keep it spotless.</p>
          </div>
        </ScrollReveal>

        <div class="service-detail-grid">
          <ScrollReveal v-for="(s, i) in residential" :key="i" :delay="i * 100">
            <div class="service-detail-card">
              <div class="service-detail-header">
                <h3>{{ s.title }}</h3>
                <span class="service-price">From {{ s.price }}</span>
              </div>
              <p>{{ s.description }}</p>
              <h4>What's Included:</h4>
              <ul class="checklist">
                <li v-for="item in s.includes" :key="item">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>
                  {{ item }}
                </li>
              </ul>
              <router-link to="/booking" class="btn btn-primary" style="margin-top: auto">Book This Service</router-link>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>

    <!-- Commercial -->
    <section class="section" style="background: var(--bg-light)">
      <div class="container">
        <ScrollReveal>
          <div class="section-header" style="text-align: left">
            <span class="section-label">Commercial</span>
            <h2>Business Cleaning Services</h2>
            <p style="margin: 0">Keep your workplace healthy, productive, and presentable.</p>
          </div>
        </ScrollReveal>

        <div class="service-detail-grid">
          <ScrollReveal v-for="(s, i) in commercial" :key="i" :delay="i * 100">
            <div class="service-detail-card">
              <div class="service-detail-header">
                <h3>{{ s.title }}</h3>
                <span class="service-price">From {{ s.price }}</span>
              </div>
              <p>{{ s.description }}</p>
              <h4>What's Included:</h4>
              <ul class="checklist">
                <li v-for="item in s.includes" :key="item">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>
                  {{ item }}
                </li>
              </ul>
              <router-link to="/contact" class="btn btn-secondary" style="margin-top: auto">Request Quote</router-link>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>

    <!-- Specialty -->
    <section class="section">
      <div class="container">
        <ScrollReveal>
          <div class="section-header" style="text-align: left">
            <span class="section-label">Specialty</span>
            <h2>Specialty Cleaning</h2>
            <p style="margin: 0">One-time services for special situations and unique needs.</p>
          </div>
        </ScrollReveal>

        <div class="service-detail-grid">
          <ScrollReveal v-for="(s, i) in specialty" :key="i" :delay="i * 100">
            <div class="service-detail-card">
              <div class="service-detail-header">
                <h3>{{ s.title }}</h3>
                <span class="service-price">From {{ s.price }}</span>
              </div>
              <p>{{ s.description }}</p>
              <h4>What's Included:</h4>
              <ul class="checklist">
                <li v-for="item in s.includes" :key="item">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>
                  {{ item }}
                </li>
              </ul>
              <router-link to="/booking" class="btn btn-primary" style="margin-top: auto">Book This Service</router-link>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>

    <!-- Add-ons -->
    <section class="section" style="background: var(--bg-light)">
      <div class="container">
        <ScrollReveal>
          <div class="section-header">
            <span class="section-label">Extras</span>
            <h2>Add-On Services</h2>
            <p>Customize your cleaning with these popular extras.</p>
          </div>
        </ScrollReveal>

        <div class="addons-grid">
          <ScrollReveal v-for="(addon, i) in addons" :key="i" :delay="i * 80">
            <div class="addon-card">
              <span class="addon-price">+{{ addon.price }}</span>
              <h4>{{ addon.title }}</h4>
              <p>{{ addon.description }}</p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import ScrollReveal from '../components/ScrollReveal.vue'

const residential = [
  {
    title: 'Regular Cleaning',
    price: '$99',
    description: 'Consistent, scheduled cleaning to maintain your home. Ideal for busy households that want to stay on top of daily grime.',
    includes: ['Dusting all surfaces & furniture', 'Vacuuming carpets & rugs', 'Mopping hard floors', 'Kitchen countertop & sink cleaning', 'Bathroom sanitization', 'Trash removal', 'Bed making']
  },
  {
    title: 'Deep Cleaning',
    price: '$199',
    description: 'A comprehensive top-to-bottom cleaning that tackles built-up grime. Perfect as a first-time cleaning or seasonal reset.',
    includes: ['Everything in Regular', 'Inside oven & microwave', 'Inside refrigerator', 'Baseboard scrubbing', 'Light fixture cleaning', 'Window sill & track cleaning', 'Cabinet exterior wiping', 'Door & frame cleaning']
  },
  {
    title: 'Spring Cleaning',
    price: '$299',
    description: 'The ultimate annual refresh. We deep clean every corner of your home, including areas often overlooked in routine cleanings.',
    includes: ['Everything in Deep Clean', 'Inside all cabinets & closets', 'Wall washing', 'Ceiling fan cleaning', 'Vent & register cleaning', 'Garage sweeping', 'Patio / balcony cleaning', 'Organizing assistance']
  }
]

const commercial = [
  {
    title: 'Office Cleaning',
    price: '$199/visit',
    description: 'Keep your workspace productive and inviting. Flexible scheduling including evenings and weekends to avoid disrupting your team.',
    includes: ['Desk & workstation cleaning', 'Common area sanitization', 'Kitchen / breakroom cleaning', 'Restroom deep cleaning', 'Floor vacuuming & mopping', 'Trash & recycling removal', 'Window & glass cleaning']
  },
  {
    title: 'Retail Cleaning',
    price: '$249/visit',
    description: 'First impressions matter. We keep your retail space looking its best for customers with thorough, regular cleaning.',
    includes: ['Display area dusting', 'Floor care & polishing', 'Fitting room sanitization', 'Entrance & window cleaning', 'Restroom maintenance', 'Checkout area cleaning', 'After-hours scheduling']
  },
  {
    title: 'Medical Facility',
    price: '$399/visit',
    description: 'Specialized sanitization for healthcare environments. Our team follows strict protocols to maintain the highest hygiene standards.',
    includes: ['Hospital-grade disinfection', 'Waiting room cleaning', 'Exam room sanitization', 'Restroom deep cleaning', 'Biohazard protocols', 'Floor strip & wax', 'Compliance documentation']
  }
]

const specialty = [
  {
    title: 'Post-Construction',
    price: '$349',
    description: 'Renovation dust and debris everywhere? We specialize in removing construction residue to reveal your beautiful new space.',
    includes: ['Heavy dust removal', 'Paint splatter cleanup', 'Window cleaning', 'Floor scrubbing & polishing', 'Fixture & hardware cleaning', 'Debris removal', 'HVAC vent cleaning']
  },
  {
    title: 'Move In / Move Out',
    price: '$249',
    description: 'Get your full deposit back or start fresh in your new home with our thorough move-in/move-out cleaning service.',
    includes: ['Inside all cabinets & drawers', 'Inside all appliances', 'Wall spot cleaning', 'Light fixture cleaning', 'Closet cleaning', 'Baseboard & trim cleaning', 'Garage sweeping']
  },
  {
    title: 'Carpet & Upholstery',
    price: '$149',
    description: 'Professional carpet and upholstery cleaning to remove stains, allergens, and odors. Extends the life of your furnishings.',
    includes: ['Pre-treatment of stains', 'Hot water extraction', 'Deodorizing treatment', 'Quick-dry technology', 'Furniture moving & replacing', 'Spot treatment', 'Protection application']
  }
]

const addons = [
  { title: 'Inside Fridge', price: '$35', description: 'Deep clean shelves, drawers, and door compartments.' },
  { title: 'Inside Oven', price: '$40', description: 'Remove grease and baked-on residue from oven interior.' },
  { title: 'Laundry Service', price: '$30', description: 'Wash, dry, and fold up to 2 loads of laundry.' },
  { title: 'Interior Windows', price: '$45', description: 'Streak-free cleaning of all accessible interior windows.' },
  { title: 'Organize Pantry', price: '$50', description: 'Declutter and organize your pantry shelves and items.' },
  { title: 'Garage Sweep', price: '$40', description: 'Sweep, dust, and tidy your garage space.' }
]
</script>

<style scoped>
.page-hero {
  background: linear-gradient(135deg, var(--secondary) 0%, #283593 100%);
  padding: 10rem 0 5rem;
  text-align: center;
}

.page-hero .section-label {
  color: var(--primary-light);
}

.page-hero h1 {
  color: var(--white);
  margin-bottom: 1rem;
}

.page-hero p {
  color: rgba(255, 255, 255, 0.8);
  font-size: 1.1rem;
  max-width: 600px;
  margin: 0 auto;
}

.service-detail-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: 2.5rem;
}

.service-detail-card {
  background: var(--white);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  padding: 2.5rem 2rem;
  display: flex;
  flex-direction: column;
  transition: all var(--transition);
}

.service-detail-card:hover {
  box-shadow: var(--shadow-md);
  transform: translateY(-4px);
}

.service-detail-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1rem;
  gap: 1rem;
}

.service-detail-header h3 {
  font-size: 1.25rem;
}

.service-price {
  font-family: var(--font-accent);
  font-size: 0.9rem;
  color: var(--primary);
  white-space: nowrap;
  background: var(--accent);
  padding: 0.25rem 0.75rem;
  border-radius: 50px;
}

.service-detail-card > p {
  font-size: 0.9rem;
  margin-bottom: 1.5rem;
}

.service-detail-card h4 {
  font-size: 0.85rem;
  color: var(--text);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 0.75rem;
}

.checklist {
  margin-bottom: 1.5rem;
}

.checklist li {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.35rem 0;
  font-size: 0.88rem;
  color: var(--text-light);
}

.checklist svg {
  width: 16px;
  height: 16px;
  color: var(--success);
  flex-shrink: 0;
}

.addons-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
}

.addon-card {
  background: var(--white);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 1.75rem;
  text-align: center;
  transition: all var(--transition);
}

.addon-card:hover {
  box-shadow: var(--shadow-sm);
  border-color: var(--primary-light);
}

.addon-price {
  display: inline-block;
  font-family: var(--font-accent);
  font-size: 0.85rem;
  color: var(--primary);
  background: var(--accent);
  padding: 0.25rem 0.75rem;
  border-radius: 50px;
  margin-bottom: 0.75rem;
}

.addon-card h4 {
  font-size: 1rem;
  margin-bottom: 0.5rem;
  color: var(--secondary);
}

.addon-card p {
  font-size: 0.85rem;
  margin: 0;
}

@media (max-width: 768px) {
  .service-detail-grid {
    grid-template-columns: 1fr;
  }
  .addons-grid {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 480px) {
  .addons-grid {
    grid-template-columns: 1fr;
  }
}
</style>
