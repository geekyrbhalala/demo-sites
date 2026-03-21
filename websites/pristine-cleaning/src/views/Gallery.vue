<template>
  <div class="gallery-page">
    <section class="page-hero">
      <div class="container">
        <span class="section-label">Our Work</span>
        <h1>Before &amp; After<br>Gallery</h1>
        <p>See the Pristine difference for yourself. Real results from real clients.</p>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <!-- Filters -->
        <ScrollReveal>
          <div class="gallery-filters">
            <button v-for="cat in categories" :key="cat.value" class="filter-btn" :class="{ active: activeFilter === cat.value }" @click="activeFilter = cat.value">
              {{ cat.label }}
            </button>
          </div>
        </ScrollReveal>

        <!-- Grid -->
        <div class="gallery-grid">
          <ScrollReveal v-for="(item, i) in filteredItems" :key="item.id" :delay="i * 80">
            <div class="gallery-card" @click="openLightbox(item)">
              <div class="gallery-image">
                <img :src="item.image" :alt="item.title" loading="lazy" />
                <div class="gallery-overlay">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/></svg>
                </div>
              </div>
              <div class="gallery-info">
                <h4>{{ item.title }}</h4>
                <span class="gallery-tag">{{ item.category }}</span>
              </div>
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal v-if="filteredItems.length === 0">
          <div class="no-results">
            <p>No items match this filter. Try selecting a different category.</p>
          </div>
        </ScrollReveal>
      </div>
    </section>

    <!-- Lightbox -->
    <Teleport to="body">
      <Transition name="lightbox">
        <div v-if="lightboxItem" class="lightbox-overlay" @click="lightboxItem = null">
          <div class="lightbox-content" @click.stop>
            <button class="lightbox-close" @click="lightboxItem = null">&times;</button>
            <img :src="lightboxItem.image" :alt="lightboxItem.title" />
            <div class="lightbox-caption">
              <h3>{{ lightboxItem.title }}</h3>
              <p>{{ lightboxItem.description }}</p>
            </div>
          </div>
        </div>
      </Transition>
    </Teleport>

    <!-- CTA -->
    <section class="cta-section">
      <div class="container">
        <ScrollReveal>
          <div class="cta-content">
            <h2>Want Results Like These?</h2>
            <p>Book your cleaning today and experience the Pristine difference.</p>
            <router-link to="/booking" class="btn btn-white btn-lg">Book Your Cleaning</router-link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue'
import ScrollReveal from '../components/ScrollReveal.vue'

const activeFilter = ref('all')
const lightboxItem = ref(null)

const categories = [
  { value: 'all', label: 'All' },
  { value: 'Kitchen', label: 'Kitchen' },
  { value: 'Living Room', label: 'Living Room' },
  { value: 'Bathroom', label: 'Bathroom' },
  { value: 'Bedroom', label: 'Bedroom' },
  { value: 'Office', label: 'Office' }
]

const items = [
  { id: 1, title: 'Modern Kitchen Deep Clean', category: 'Kitchen', image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800', description: 'Complete kitchen overhaul including inside appliances, degreasing range hood, and sanitizing all surfaces.' },
  { id: 2, title: 'Living Room Transformation', category: 'Living Room', image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800', description: 'Deep vacuuming, upholstery cleaning, baseboard scrubbing, and window cleaning made this room shine.' },
  { id: 3, title: 'Master Bathroom Refresh', category: 'Bathroom', image: 'https://images.unsplash.com/photo-1527515637462-cee1cc71c82e?w=800', description: 'Tile grout cleaning, fixture polishing, and hospital-grade sanitization for a sparkling bathroom.' },
  { id: 4, title: 'Minimalist Bedroom Clean', category: 'Bedroom', image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=800', description: 'Dust-free surfaces, fresh linens, vacuumed carpets, and organized closet space.' },
  { id: 5, title: 'Executive Office Suite', category: 'Office', image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800', description: 'Professional office cleaning including desk sanitization, floor care, and common area maintenance.' },
  { id: 6, title: 'Gourmet Kitchen Shine', category: 'Kitchen', image: 'https://images.unsplash.com/photo-1556909172-54557c7e4fb7?w=800', description: 'Stainless steel polishing, countertop deep clean, and organized pantry for a chef-ready kitchen.' },
  { id: 7, title: 'Cozy Living Space', category: 'Living Room', image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800', description: 'Carpet shampooing, furniture polishing, and thorough dusting brought this room back to life.' },
  { id: 8, title: 'Spa-Like Bathroom', category: 'Bathroom', image: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800', description: 'Glass shower cleaning, natural stone care, and luxury finish detailing.' },
  { id: 9, title: 'Open Plan Office', category: 'Office', image: 'https://images.unsplash.com/photo-1497215842964-222b430dc094?w=800', description: 'Complete workspace sanitization, kitchen deep clean, and restroom maintenance for a 50-person office.' }
]

const filteredItems = computed(() => {
  if (activeFilter.value === 'all') return items
  return items.filter(item => item.category === activeFilter.value)
})

const openLightbox = (item) => {
  lightboxItem.value = item
  document.body.style.overflow = 'hidden'
}

watch(lightboxItem, (val) => {
  if (!val) document.body.style.overflow = ''
})
</script>

<style scoped>
.page-hero {
  background: linear-gradient(135deg, var(--secondary) 0%, #283593 100%);
  padding: 10rem 0 5rem;
  text-align: center;
}

.page-hero .section-label { color: var(--primary-light); }
.page-hero h1 { color: var(--white); margin-bottom: 1rem; }
.page-hero p { color: rgba(255,255,255,0.8); font-size: 1.1rem; max-width: 600px; margin: 0 auto; }

.gallery-filters {
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-bottom: 3rem;
  flex-wrap: wrap;
}

.filter-btn {
  padding: 0.6rem 1.5rem;
  border: 2px solid var(--border);
  border-radius: 50px;
  background: var(--white);
  font-family: var(--font-body);
  font-weight: 500;
  font-size: 0.9rem;
  color: var(--text);
  cursor: pointer;
  transition: all var(--transition-fast);
}

.filter-btn:hover { border-color: var(--primary); color: var(--primary); }
.filter-btn.active { background: var(--primary); color: var(--white); border-color: var(--primary); }

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
}

.gallery-card {
  border-radius: var(--radius-lg);
  overflow: hidden;
  cursor: pointer;
  transition: all var(--transition);
  background: var(--white);
  border: 1px solid var(--border);
}

.gallery-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-md);
}

.gallery-image {
  position: relative;
  height: 250px;
  overflow: hidden;
}

.gallery-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform var(--transition);
}

.gallery-card:hover .gallery-image img {
  transform: scale(1.05);
}

.gallery-overlay {
  position: absolute;
  inset: 0;
  background: rgba(26, 35, 126, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity var(--transition);
}

.gallery-card:hover .gallery-overlay { opacity: 1; }

.gallery-overlay svg {
  width: 40px;
  height: 40px;
  color: var(--white);
}

.gallery-info {
  padding: 1.25rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.gallery-info h4 { font-size: 0.95rem; }

.gallery-tag {
  font-size: 0.75rem;
  color: var(--primary);
  background: var(--accent);
  padding: 0.2rem 0.6rem;
  border-radius: 50px;
  font-weight: 500;
  white-space: nowrap;
}

.no-results {
  text-align: center;
  padding: 4rem 0;
  color: var(--text-muted);
}

/* Lightbox */
.lightbox-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10000;
  padding: 2rem;
}

.lightbox-content {
  max-width: 900px;
  width: 100%;
  position: relative;
}

.lightbox-close {
  position: absolute;
  top: -40px;
  right: 0;
  background: none;
  border: none;
  color: var(--white);
  font-size: 2rem;
  cursor: pointer;
}

.lightbox-content img {
  width: 100%;
  border-radius: var(--radius-lg);
  max-height: 70vh;
  object-fit: cover;
}

.lightbox-caption {
  padding: 1.5rem 0;
}

.lightbox-caption h3 {
  color: var(--white);
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
}

.lightbox-caption p {
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.95rem;
}

.lightbox-enter-active, .lightbox-leave-active { transition: opacity 0.3s; }
.lightbox-enter-from, .lightbox-leave-to { opacity: 0; }

/* CTA */
.cta-section {
  background: linear-gradient(135deg, var(--secondary) 0%, #283593 100%);
  padding: 6rem 0;
}

.cta-content { text-align: center; }
.cta-content h2 { color: var(--white); margin-bottom: 1rem; }
.cta-content p { color: rgba(255,255,255,0.8); font-size: 1.1rem; margin-bottom: 2rem; }

@media (max-width: 768px) {
  .gallery-grid { grid-template-columns: 1fr 1fr; }
}

@media (max-width: 480px) {
  .gallery-grid { grid-template-columns: 1fr; }
  .gallery-filters { gap: 0.4rem; }
  .filter-btn { padding: 0.5rem 1rem; font-size: 0.8rem; }
}
</style>
