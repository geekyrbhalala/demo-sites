<template>
  <div class="gallery-page">
    <!-- Page Header -->
    <section class="page-header">
      <div class="container">
        <span class="script-accent header-script">Our portfolio</span>
        <h1>Gallery</h1>
        <p>A curated collection of our finest work. Each image tells a story of transformation, artistry, and beauty.</p>
      </div>
    </section>

    <!-- Gallery Section -->
    <section class="section gallery-section">
      <div class="container">
        <!-- Filters -->
        <div class="gallery-filters">
          <button
            v-for="cat in filterCategories"
            :key="cat"
            class="filter-btn"
            :class="{ active: activeFilter === cat }"
            @click="activeFilter = cat"
          >
            {{ cat }}
          </button>
        </div>

        <!-- Masonry Grid -->
        <div class="masonry-grid">
          <div
            v-for="(img, i) in filteredImages"
            :key="img.src + i"
            class="masonry-item"
            :class="img.size"
            @click="openLightbox(img)"
          >
            <img :src="img.src" :alt="img.alt" loading="lazy" />
            <div class="masonry-overlay">
              <span class="masonry-cat">{{ img.category }}</span>
              <h4>{{ img.title }}</h4>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Lightbox -->
    <teleport to="body">
      <transition name="lightbox">
        <div v-if="lightboxImage" class="lightbox" @click.self="closeLightbox">
          <button class="lightbox-close" @click="closeLightbox" aria-label="Close lightbox">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2">
              <path d="M18 6L6 18M6 6l12 12"/>
            </svg>
          </button>
          <button class="lb-nav lb-prev" @click.stop="navigateLightbox(-1)">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><path d="M15 18l-6-6 6-6"/></svg>
          </button>
          <div class="lightbox-content">
            <img :src="lightboxImage.src" :alt="lightboxImage.alt" />
            <div class="lightbox-info">
              <h3>{{ lightboxImage.title }}</h3>
              <p>{{ lightboxImage.category }}</p>
            </div>
          </div>
          <button class="lb-nav lb-next" @click.stop="navigateLightbox(1)">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><path d="M9 18l6-6-6-6"/></svg>
          </button>
        </div>
      </transition>
    </teleport>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const activeFilter = ref('All')
const lightboxImage = ref(null)
const lightboxIndex = ref(0)

const filterCategories = ['All', 'Hair', 'Nails', 'Spa', 'Makeup']

const galleryImages = [
  { src: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?w=800', alt: 'Hair styling', title: 'Balayage Perfection', category: 'Hair', size: 'tall' },
  { src: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=800', alt: 'Nail art', title: 'Botanical Nail Art', category: 'Nails', size: '' },
  { src: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800', alt: 'Facial treatment', title: 'Radiance Facial', category: 'Spa', size: '' },
  { src: 'https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=800', alt: 'Hair color', title: 'Rose Gold Highlights', category: 'Hair', size: 'wide' },
  { src: 'https://images.unsplash.com/photo-1457972729786-0411a3b2b626?w=800', alt: 'Spa atmosphere', title: 'Relaxation Suite', category: 'Spa', size: '' },
  { src: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=800', alt: 'Salon interior', title: 'Our Elegant Space', category: 'Spa', size: 'tall' },
  { src: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=1200', alt: 'Hair styling session', title: 'Precision Cut & Style', category: 'Hair', size: '' },
  { src: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800', alt: 'Massage therapy', title: 'Hot Stone Therapy', category: 'Spa', size: 'wide' },
  { src: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=800', alt: 'Beauty products', title: 'Premium Products', category: 'Makeup', size: '' },
  { src: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1920', alt: 'Salon view', title: 'Studio Ambiance', category: 'Hair', size: '' },
  { src: 'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?w=1200', alt: 'Spa environment', title: 'Botanical Spa Room', category: 'Spa', size: '' },
  { src: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=800', alt: 'Makeup artist', title: 'Bridal Glam Look', category: 'Makeup', size: 'tall' },
]

const filteredImages = computed(() => {
  if (activeFilter.value === 'All') return galleryImages
  return galleryImages.filter(img => img.category === activeFilter.value)
})

const openLightbox = (img) => {
  lightboxImage.value = img
  lightboxIndex.value = filteredImages.value.indexOf(img)
  document.body.style.overflow = 'hidden'
}

const closeLightbox = () => {
  lightboxImage.value = null
  document.body.style.overflow = ''
}

const navigateLightbox = (dir) => {
  const imgs = filteredImages.value
  lightboxIndex.value = (lightboxIndex.value + dir + imgs.length) % imgs.length
  lightboxImage.value = imgs[lightboxIndex.value]
}
</script>

<style scoped>
.page-header {
  padding: 160px 0 80px;
  background: linear-gradient(135deg, var(--blush) 0%, var(--warm-white) 100%);
  text-align: center;
}

.header-script {
  font-size: 2rem;
  display: block;
  margin-bottom: 8px;
}

.page-header h1 {
  font-size: 3rem;
  margin-bottom: 16px;
}

.page-header p {
  max-width: 600px;
  margin: 0 auto;
  color: #666;
}

/* Filters */
.gallery-filters {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-bottom: 48px;
  flex-wrap: wrap;
}

.filter-btn {
  padding: 10px 28px;
  border-radius: 50px;
  background: white;
  color: var(--charcoal);
  font-size: 0.9rem;
  font-weight: 500;
  border: 2px solid #eee;
  cursor: pointer;
  transition: all 0.3s ease;
}

.filter-btn.active {
  background: var(--rose-gold);
  color: white;
  border-color: var(--rose-gold);
}

.filter-btn:hover:not(.active) {
  border-color: var(--rose-gold-light);
}

/* Masonry */
.masonry-grid {
  columns: 3;
  column-gap: 20px;
}

.masonry-item {
  break-inside: avoid;
  margin-bottom: 20px;
  border-radius: 12px;
  overflow: hidden;
  position: relative;
  cursor: pointer;
  animation: fadeInUp 0.5s ease both;
}

.masonry-item img {
  width: 100%;
  display: block;
  transition: transform 0.5s ease;
}

.masonry-item:hover img {
  transform: scale(1.05);
}

.masonry-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(44, 44, 44, 0.8), transparent 60%);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 24px;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.masonry-item:hover .masonry-overlay {
  opacity: 1;
}

.masonry-cat {
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  color: var(--rose-gold-light);
  margin-bottom: 4px;
}

.masonry-overlay h4 {
  color: white;
  font-size: 1.1rem;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Lightbox */
.lightbox {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.92);
  z-index: 10000;
  display: flex;
  align-items: center;
  justify-content: center;
}

.lightbox-enter-active,
.lightbox-leave-active {
  transition: opacity 0.3s ease;
}

.lightbox-enter-from,
.lightbox-leave-to {
  opacity: 0;
}

.lightbox-close {
  position: absolute;
  top: 24px;
  right: 24px;
  background: none;
  color: white;
  z-index: 10;
  padding: 8px;
}

.lightbox-close:hover {
  transform: rotate(90deg);
}

.lb-nav {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.1);
  width: 48px;
  height: 48px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
  transition: background 0.3s;
}

.lb-nav:hover {
  background: rgba(255, 255, 255, 0.2);
}

.lb-prev {
  left: 24px;
}

.lb-next {
  right: 24px;
}

.lightbox-content {
  max-width: 80vw;
  max-height: 85vh;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.lightbox-content img {
  max-width: 100%;
  max-height: 75vh;
  object-fit: contain;
  border-radius: 8px;
}

.lightbox-info {
  text-align: center;
  margin-top: 16px;
}

.lightbox-info h3 {
  color: white;
  font-size: 1.2rem;
  margin-bottom: 4px;
}

.lightbox-info p {
  color: var(--rose-gold-light);
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 1px;
}

@media (max-width: 768px) {
  .masonry-grid {
    columns: 2;
    column-gap: 12px;
  }

  .masonry-item {
    margin-bottom: 12px;
  }

  .lb-prev { left: 8px; }
  .lb-next { right: 8px; }

  .lightbox-content {
    max-width: 95vw;
  }
}

@media (max-width: 480px) {
  .masonry-grid {
    columns: 1;
  }
}
</style>
