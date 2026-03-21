<template>
  <header class="navbar" :class="{ scrolled, 'menu-open': menuOpen }">
    <div class="navbar-inner container">
      <router-link to="/" class="navbar-logo" @click="closeMenu">
        <svg class="logo-icon" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 2L22 12L32 10L24 18L34 22L24 24L28 34L20 26L12 34L16 24L6 22L16 18L8 10L18 12L20 2Z" :fill="scrolled ? '#2196F3' : '#2196F3'" stroke="none"/>
          <circle cx="20" cy="20" r="4" :fill="scrolled ? '#1a237e' : '#1a237e'"/>
        </svg>
        <div class="logo-text">
          <span class="logo-pristine">PRISTINE</span>
          <span class="logo-cleaning">CLEANING CO.</span>
        </div>
      </router-link>

      <nav class="navbar-nav" :class="{ open: menuOpen }">
        <router-link to="/" @click="closeMenu">Home</router-link>
        <router-link to="/services" @click="closeMenu">Services</router-link>
        <router-link to="/pricing" @click="closeMenu">Pricing</router-link>
        <router-link to="/gallery" @click="closeMenu">Gallery</router-link>
        <router-link to="/about" @click="closeMenu">About</router-link>
        <router-link to="/contact" @click="closeMenu">Contact</router-link>
        <router-link to="/booking" class="btn btn-primary nav-cta" @click="closeMenu">Book Now</router-link>
      </nav>

      <button class="hamburger" :class="{ active: menuOpen }" @click="toggleMenu" aria-label="Toggle menu">
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted, watch } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const scrolled = ref(false)
const menuOpen = ref(false)

const handleScroll = () => {
  scrolled.value = window.scrollY > 50
}

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value
  document.body.style.overflow = menuOpen.value ? 'hidden' : ''
}

const closeMenu = () => {
  menuOpen.value = false
  document.body.style.overflow = ''
}

watch(() => route.path, () => {
  closeMenu()
})

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  handleScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  padding: 1rem 0;
  transition: all var(--transition);
  background: transparent;
}

.navbar.scrolled {
  background: rgba(255, 255, 255, 0.98);
  box-shadow: var(--shadow-sm);
  padding: 0.5rem 0;
  backdrop-filter: blur(10px);
}

.navbar-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.navbar-logo {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  z-index: 1001;
}

.logo-icon {
  width: 36px;
  height: 36px;
}

.logo-text {
  display: flex;
  flex-direction: column;
  line-height: 1;
}

.logo-pristine {
  font-family: var(--font-heading);
  font-weight: 800;
  font-size: 1.15rem;
  color: var(--secondary);
  letter-spacing: 0.08em;
}

.logo-cleaning {
  font-family: var(--font-body);
  font-weight: 300;
  font-size: 0.65rem;
  color: var(--primary);
  letter-spacing: 0.2em;
  text-transform: uppercase;
}

.navbar-nav {
  display: flex;
  align-items: center;
  gap: 2rem;
}

.navbar-nav a {
  font-family: var(--font-body);
  font-weight: 500;
  font-size: 0.9rem;
  color: var(--text);
  position: relative;
  transition: color var(--transition-fast);
}

.navbar-nav a:not(.nav-cta)::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 0;
  height: 2px;
  background: var(--primary);
  transition: width var(--transition);
}

.navbar-nav a:not(.nav-cta):hover::after,
.navbar-nav a:not(.nav-cta).router-link-exact-active::after {
  width: 100%;
}

.navbar-nav a:not(.nav-cta):hover,
.navbar-nav a:not(.nav-cta).router-link-exact-active {
  color: var(--primary);
}

.nav-cta {
  padding: 0.6rem 1.5rem !important;
  font-size: 0.85rem !important;
}

.nav-cta::after {
  display: none !important;
}

.hamburger {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  z-index: 1001;
}

.hamburger span {
  display: block;
  width: 24px;
  height: 2px;
  background: var(--text);
  transition: all 0.3s ease;
  border-radius: 2px;
}

.hamburger.active span:nth-child(1) {
  transform: rotate(45deg) translate(5px, 5px);
}

.hamburger.active span:nth-child(2) {
  opacity: 0;
}

.hamburger.active span:nth-child(3) {
  transform: rotate(-45deg) translate(5px, -5px);
}

@media (max-width: 768px) {
  .hamburger {
    display: flex;
  }

  .navbar-nav {
    position: fixed;
    top: 0;
    right: -100%;
    width: 80%;
    max-width: 360px;
    height: 100vh;
    background: var(--white);
    flex-direction: column;
    justify-content: center;
    gap: 1.5rem;
    padding: 2rem;
    box-shadow: var(--shadow-xl);
    transition: right 0.4s ease;
  }

  .navbar-nav.open {
    right: 0;
  }

  .navbar-nav a {
    font-size: 1.1rem;
  }

  .nav-cta {
    width: 100%;
    text-align: center;
    margin-top: 1rem;
  }
}
</style>
