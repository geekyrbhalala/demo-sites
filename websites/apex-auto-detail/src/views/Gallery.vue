<script setup>
import { ref, computed } from 'vue'
import ScrollReveal from '../components/ScrollReveal.vue'

const activeFilter = ref('all')

const filters = [
  { id: 'all', label: 'All' },
  { id: 'sedans', label: 'Sedans' },
  { id: 'suvs', label: 'SUVs' },
  { id: 'trucks', label: 'Trucks' },
  { id: 'luxury', label: 'Luxury' },
  { id: 'interior', label: 'Interior' },
  { id: 'beforeafter', label: 'Before & After' }
]

const images = [
  { src: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800', category: 'luxury', title: 'Porsche 911 GT3', desc: 'Full ceramic coating & paint correction' },
  { src: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800', category: 'luxury', title: 'Corvette C8 Stingray', desc: 'Premium exterior detail package' },
  { src: 'https://images.unsplash.com/photo-1525609004556-c46c6c5104b8?w=800', category: 'sedans', title: 'Mercedes-AMG C63', desc: 'Paint correction & ceramic coating' },
  { src: 'https://images.unsplash.com/photo-1494976388531-d1058494ceb8?w=800', category: 'luxury', title: 'Lamborghini Huracan', desc: 'Full detail with ceramic coating' },
  { src: 'https://images.unsplash.com/photo-1542362567-b07e54358753?w=800', category: 'suvs', title: 'Range Rover Sport', desc: 'Complete interior & exterior restoration' },
  { src: 'https://images.unsplash.com/photo-1489824904134-891ab64532f1?w=800', category: 'interior', title: 'BMW Interior Detail', desc: 'Full leather conditioning & fabric protection' },
  { src: 'https://images.unsplash.com/photo-1507136566006-cfc505b114fc?w=800', category: 'suvs', title: 'Tesla Model X', desc: 'Ceramic coating & paint protection' },
  { src: 'https://images.unsplash.com/photo-1601362840469-51e4d8d58785?w=800', category: 'sedans', title: 'BMW M4 Competition', desc: 'Premium detail with wax finish' },
  { src: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=800', category: 'luxury', title: 'Aston Martin DB11', desc: 'Show prep detail & ceramic coat' },
  { src: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=800', category: 'sedans', title: 'Audi RS5 Sportback', desc: 'Full paint correction & detail' },
  { src: 'https://images.unsplash.com/photo-1606016159991-dfe4f2746ad5?w=800', category: 'trucks', title: 'Ford F-150 Raptor', desc: 'Exterior wash & ceramic coating' },
  { src: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?w=800', category: 'interior', title: 'Luxury Interior', desc: 'Deep clean & leather conditioning' }
]

const filteredImages = computed(() => {
  if (activeFilter.value === 'all') return images
  if (activeFilter.value === 'beforeafter') return images.slice(0, 4)
  return images.filter(img => img.category === activeFilter.value)
})

const lightboxOpen = ref(false)
const lightboxIndex = ref(0)

function openLightbox(index) {
  lightboxIndex.value = index
  lightboxOpen.value = true
  document.body.style.overflow = 'hidden'
}

function closeLightbox() {
  lightboxOpen.value = false
  document.body.style.overflow = ''
}

function nextImage() {
  lightboxIndex.value = (lightboxIndex.value + 1) % filteredImages.value.length
}

function prevImage() {
  lightboxIndex.value = (lightboxIndex.value - 1 + filteredImages.value.length) % filteredImages.value.length
}

const baSliderPos = ref([50, 50])
const baDragging = ref(-1)

const baPairs = [
  { before: 'https://images.unsplash.com/photo-1489824904134-891ab64532f1?w=800', after: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800', label: 'Exterior Detail' },
  { before: 'https://images.unsplash.com/photo-1525609004556-c46c6c5104b8?w=800', after: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800', label: 'Paint Correction' }
]

function startBaDrag(index, event) {
  event.preventDefault()
  baDragging.value = index
}

function onBaDrag(index, event) {
  if (baDragging.value !== index) return
  const rect = event.currentTarget.getBoundingClientRect()
  const clientX = event.touches ? event.touches[0].clientX : event.clientX
  let x = ((clientX - rect.left) / rect.width) * 100
  x = Math.max(5, Math.min(95, x))
  baSliderPos.value[index] = x
}

function stopBaDrag() {
  baDragging.value = -1
}
</script>

<template>
  <main class="gallery-page">
    <section class="page-hero">
      <div class="page-hero-bg">
        <img src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1920" alt="Car gallery" />
        <div class="page-hero-overlay"></div>
      </div>
      <div class="page-hero-content container">
        <h1>Our Gallery</h1>
        <p>Showcasing our finest work</p>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="filter-bar">
          <button
            v-for="f in filters"
            :key="f.id"
            class="filter-btn"
            :class="{ active: activeFilter === f.id }"
            @click="activeFilter = f.id"
          >
            {{ f.label }}
          </button>
        </div>

        <div v-if="activeFilter !== 'beforeafter'" class="gallery-grid">
          <ScrollReveal v-for="(img, i) in filteredImages" :key="img.src + i" :delay="i * 60">
            <div class="gallery-item" @click="openLightbox(i)">
              <img :src="img.src" :alt="img.title" loading="lazy" />
              <div class="gallery-overlay">
                <h4>{{ img.title }}</h4>
                <p>{{ img.desc }}</p>
              </div>
            </div>
          </ScrollReveal>
        </div>

        <div v-else class="ba-section-gallery">
          <ScrollReveal v-for="(pair, i) in baPairs" :key="i" :delay="i * 150">
            <div
              class="ba-slider"
              @mousemove="onBaDrag(i, $event)"
              @touchmove="onBaDrag(i, $event)"
              @mouseup="stopBaDrag"
              @mouseleave="stopBaDrag"
              @touchend="stopBaDrag"
            >
              <div class="ba-before">
                <img :src="pair.before" :alt="'Before ' + pair.label" />
                <span class="ba-label ba-label-before">Before</span>
              </div>
              <div class="ba-after" :style="{ clipPath: 'inset(0 0 0 ' + baSliderPos[i] + '%)' }">
                <img :src="pair.after" :alt="'After ' + pair.label" />
                <span class="ba-label ba-label-after">After</span>
              </div>
              <div
                class="ba-handle"
                :style="{ left: baSliderPos[i] + '%' }"
                @mousedown="startBaDrag(i, $event)"
                @touchstart="startBaDrag(i, $event)"
              >
                <div class="ba-handle-line"></div>
                <div class="ba-handle-circle">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <polyline points="8,4 4,12 8,20" /><polyline points="16,4 20,12 16,20" />
                  </svg>
                </div>
                <div class="ba-handle-line"></div>
              </div>
              <span class="ba-pair-label">{{ pair.label }}</span>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>

    <!-- Lightbox -->
    <Teleport to="body">
      <div v-if="lightboxOpen" class="lightbox" @click="closeLightbox">
        <button class="lightbox-close" @click="closeLightbox">&times;</button>
        <button class="lightbox-nav lightbox-prev" @click.stop="prevImage">&lsaquo;</button>
        <div class="lightbox-content" @click.stop>
          <img :src="filteredImages[lightboxIndex]?.src" :alt="filteredImages[lightboxIndex]?.title" />
          <div class="lightbox-info">
            <h3>{{ filteredImages[lightboxIndex]?.title }}</h3>
            <p>{{ filteredImages[lightboxIndex]?.desc }}</p>
          </div>
        </div>
        <button class="lightbox-nav lightbox-next" @click.stop="nextImage">&rsaquo;</button>
      </div>
    </Teleport>
  </main>
</template>

<style scoped>
.page-hero {
  position: relative;
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.page-hero-bg {
  position: absolute;
  inset: 0;
}

.page-hero-bg img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.page-hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.85) 100%);
}

.page-hero-content {
  position: relative;
  text-align: center;
  z-index: 2;
}

.page-hero-content h1 {
  font-size: 3.5rem;
  text-transform: uppercase;
  letter-spacing: 4px;
  margin-bottom: 12px;
}

.page-hero-content p {
  color: var(--silver);
  font-size: 1.2rem;
}

.filter-bar {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  margin-bottom: 40px;
  justify-content: center;
}

.filter-btn {
  padding: 10px 20px;
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: 30px;
  color: var(--text-muted);
  font-family: var(--font-heading);
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  cursor: pointer;
  transition: var(--transition);
}

.filter-btn:hover,
.filter-btn.active {
  background: var(--primary);
  border-color: var(--primary);
  color: var(--white);
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
}

.gallery-item {
  position: relative;
  border-radius: var(--radius);
  overflow: hidden;
  cursor: pointer;
  aspect-ratio: 4 / 3;
}

.gallery-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s;
}

.gallery-item:hover img {
  transform: scale(1.05);
}

.gallery-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, transparent 40%, rgba(0, 0, 0, 0.85) 100%);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 20px;
  opacity: 0;
  transition: opacity 0.3s;
}

.gallery-item:hover .gallery-overlay {
  opacity: 1;
}

.gallery-overlay h4 {
  font-size: 1rem;
  color: var(--white);
  margin-bottom: 4px;
}

.gallery-overlay p {
  color: var(--silver);
  font-size: 0.8rem;
}

/* Before/After in gallery */
.ba-section-gallery {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
}

.ba-slider {
  position: relative;
  border-radius: var(--radius-lg);
  overflow: hidden;
  cursor: ew-resize;
  aspect-ratio: 4 / 3;
  user-select: none;
}

.ba-before, .ba-after {
  position: absolute;
  inset: 0;
}

.ba-before img, .ba-after img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.ba-before img {
  filter: grayscale(0.5) brightness(0.7);
}

.ba-label {
  position: absolute;
  bottom: 12px;
  padding: 4px 12px;
  background: rgba(0,0,0,0.7);
  color: var(--white);
  font-size: 0.75rem;
  font-family: var(--font-heading);
  text-transform: uppercase;
  letter-spacing: 1px;
  border-radius: 4px;
}

.ba-label-before { left: 12px; }
.ba-label-after { right: 12px; }

.ba-handle {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 4px;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 5;
}

.ba-handle-line {
  flex: 1;
  width: 2px;
  background: var(--primary);
}

.ba-handle-circle {
  width: 40px;
  height: 40px;
  background: var(--primary);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--white);
  flex-shrink: 0;
  box-shadow: 0 0 15px rgba(0,102,255,0.5);
}

.ba-handle-circle svg {
  width: 20px;
  height: 20px;
}

.ba-pair-label {
  position: absolute;
  top: 12px;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(0,0,0,0.7);
  color: var(--white);
  padding: 4px 16px;
  border-radius: 4px;
  font-family: var(--font-heading);
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  z-index: 6;
}

/* Lightbox */
.lightbox {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.95);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10000;
  padding: 60px;
}

.lightbox-close {
  position: absolute;
  top: 20px;
  right: 24px;
  background: none;
  border: none;
  color: var(--white);
  font-size: 2.5rem;
  cursor: pointer;
  z-index: 10001;
  line-height: 1;
}

.lightbox-nav {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0, 102, 255, 0.2);
  border: 1px solid rgba(0, 102, 255, 0.5);
  color: var(--white);
  font-size: 3rem;
  width: 50px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-radius: var(--radius);
  transition: var(--transition);
  line-height: 1;
}

.lightbox-nav:hover {
  background: var(--primary);
}

.lightbox-prev { left: 20px; }
.lightbox-next { right: 20px; }

.lightbox-content {
  max-width: 900px;
  width: 100%;
  text-align: center;
}

.lightbox-content img {
  max-width: 100%;
  max-height: 70vh;
  border-radius: var(--radius);
  margin: 0 auto;
}

.lightbox-info {
  margin-top: 20px;
}

.lightbox-info h3 {
  font-size: 1.3rem;
  margin-bottom: 4px;
}

.lightbox-info p {
  color: var(--text-muted);
}

@media (max-width: 768px) {
  .page-hero { height: 300px; }
  .page-hero-content h1 { font-size: 2.2rem; }

  .gallery-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .ba-section-gallery {
    grid-template-columns: 1fr;
  }

  .lightbox {
    padding: 20px;
  }
}

@media (max-width: 480px) {
  .page-hero-content h1 { font-size: 1.8rem; }

  .gallery-grid {
    grid-template-columns: 1fr;
  }

  .filter-bar {
    gap: 6px;
  }

  .filter-btn {
    padding: 8px 14px;
    font-size: 0.75rem;
  }
}
</style>
