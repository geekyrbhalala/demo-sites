<script setup>
import { ref, onMounted, onUnmounted, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()
const scrolled = ref(false)
const menuOpen = ref(false)

function handleScroll() {
  scrolled.value = window.scrollY > 50
}

function toggleMenu() {
  menuOpen.value = !menuOpen.value
  document.body.style.overflow = menuOpen.value ? 'hidden' : ''
}

function closeMenu() {
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
  document.body.style.overflow = ''
})

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/services', label: 'Services' },
  { path: '/packages', label: 'Packages' },
  { path: '/gallery', label: 'Gallery' },
  { path: '/about', label: 'About' },
  { path: '/contact', label: 'Contact' }
]
</script>

<template>
  <header class="navbar" :class="{ scrolled, 'menu-open': menuOpen }">
    <div class="navbar-inner container">
      <router-link to="/" class="logo" @click="closeMenu">
        <svg class="logo-icon" viewBox="0 0 50 40" fill="none">
          <polygon points="25,2 48,38 2,38" stroke="#0066ff" stroke-width="2.5" fill="none" stroke-linejoin="round"/>
          <line x1="10" y1="26" x2="40" y2="26" stroke="#0066ff" stroke-width="1.5"/>
          <line x1="16" y1="32" x2="34" y2="32" stroke="#0066ff" stroke-width="1"/>
        </svg>
        <div class="logo-text">
          <span class="logo-apex">APEX</span>
          <span class="logo-detail">AUTO DETAIL</span>
        </div>
      </router-link>

      <nav class="nav-links" :class="{ open: menuOpen }">
        <router-link
          v-for="link in navLinks"
          :key="link.path"
          :to="link.path"
          class="nav-link"
          :class="{ active: route.path === link.path }"
          @click="closeMenu"
        >
          {{ link.label }}
        </router-link>
        <router-link to="/booking" class="btn btn-primary nav-cta" @click="closeMenu">
          Book Now
        </router-link>
      </nav>

      <button class="hamburger" :class="{ open: menuOpen }" @click="toggleMenu" aria-label="Toggle menu">
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>
  </header>
</template>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  padding: 20px 0;
  transition: var(--transition);
  background: transparent;
}

.navbar.scrolled {
  background: rgba(10, 10, 10, 0.95);
  backdrop-filter: blur(10px);
  padding: 12px 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
}

.navbar-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo {
  display: flex;
  align-items: center;
  gap: 12px;
  z-index: 1001;
}

.logo-icon {
  width: 42px;
  height: 34px;
}

.logo-text {
  display: flex;
  flex-direction: column;
  line-height: 1;
}

.logo-apex {
  font-family: var(--font-heading);
  font-weight: 700;
  font-size: 1.4rem;
  color: var(--white);
  letter-spacing: 4px;
}

.logo-detail {
  font-family: var(--font-body);
  font-weight: 300;
  font-size: 0.65rem;
  color: var(--primary);
  letter-spacing: 3px;
  text-transform: uppercase;
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 32px;
}

.nav-link {
  font-family: var(--font-heading);
  font-size: 0.95rem;
  font-weight: 500;
  color: var(--silver);
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: color 0.2s;
  position: relative;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 0;
  height: 2px;
  background: var(--primary);
  transition: width 0.3s;
}

.nav-link:hover,
.nav-link.active {
  color: var(--white);
}

.nav-link.active::after,
.nav-link:hover::after {
  width: 100%;
}

.nav-cta {
  padding: 10px 24px;
  font-size: 0.85rem;
}

.hamburger {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  z-index: 1001;
  padding: 4px;
}

.hamburger span {
  display: block;
  width: 28px;
  height: 2px;
  background: var(--white);
  transition: var(--transition);
  transform-origin: center;
}

.hamburger.open span:nth-child(1) {
  transform: rotate(45deg) translate(5px, 5px);
}

.hamburger.open span:nth-child(2) {
  opacity: 0;
}

.hamburger.open span:nth-child(3) {
  transform: rotate(-45deg) translate(5px, -5px);
}

@media (max-width: 768px) {
  .hamburger {
    display: flex;
  }

  .nav-links {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: rgba(10, 10, 10, 0.98);
    flex-direction: column;
    justify-content: center;
    gap: 24px;
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.3s;
  }

  .nav-links.open {
    opacity: 1;
    pointer-events: all;
  }

  .nav-link {
    font-size: 1.3rem;
  }

  .nav-cta {
    margin-top: 16px;
    font-size: 1rem;
    padding: 14px 32px;
  }
}
</style>
