<template>
  <header class="navbar" :class="{ scrolled, 'menu-open': menuOpen }">
    <div class="navbar-inner">
      <router-link to="/" class="logo" @click="closeMenu">
        <svg class="logo-icon" viewBox="0 0 40 40" width="40" height="40">
          <path d="M20 2C20 2 14 8 14 18C14 24 16 28 18 30C18 34 16 36 16 36C16 36 18 38 20 38C22 38 24 36 24 36C24 36 22 34 22 30C24 28 26 24 26 18C26 8 20 2 20 2Z" fill="currentColor" opacity="0.9"/>
          <circle cx="18" cy="32" r="3" fill="currentColor"/>
          <path d="M22 8V22" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round"/>
          <path d="M22 8C22 8 28 10 28 14C28 18 22 16 22 16" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round"/>
          <line x1="8" y1="14" x2="32" y2="14" stroke="currentColor" stroke-width="0.5" opacity="0.3"/>
          <line x1="8" y1="18" x2="32" y2="18" stroke="currentColor" stroke-width="0.5" opacity="0.3"/>
          <line x1="8" y1="22" x2="32" y2="22" stroke="currentColor" stroke-width="0.5" opacity="0.3"/>
        </svg>
        <div class="logo-text">
          <span class="logo-name">HARMONY</span>
          <span class="logo-sub">MUSIC ACADEMY</span>
        </div>
      </router-link>

      <nav class="nav-links" :class="{ open: menuOpen }">
        <router-link to="/" @click="closeMenu" :class="{ active: $route.path === '/' }">Home</router-link>
        <router-link to="/programs" @click="closeMenu" :class="{ active: $route.path === '/programs' }">Programs</router-link>
        <router-link to="/instructors" @click="closeMenu" :class="{ active: $route.path === '/instructors' }">Instructors</router-link>
        <router-link to="/schedule" @click="closeMenu" :class="{ active: $route.path === '/schedule' }">Schedule</router-link>
        <router-link to="/recitals" @click="closeMenu" :class="{ active: $route.path === '/recitals' }">Recitals</router-link>
        <router-link to="/about" @click="closeMenu" :class="{ active: $route.path === '/about' }">About</router-link>
        <router-link to="/contact" @click="closeMenu" class="btn btn-secondary nav-cta">Enroll Now</router-link>
      </nav>

      <button class="hamburger" :class="{ open: menuOpen }" @click="toggleMenu" aria-label="Toggle menu">
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

const scrolled = ref(false)
const menuOpen = ref(false)
const route = useRoute()

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
  document.body.style.overflow = ''
})
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  padding: 16px 0;
  transition: all var(--transition);
  background: transparent;
}

.navbar.scrolled {
  background: rgba(255, 253, 231, 0.95);
  backdrop-filter: blur(10px);
  box-shadow: var(--shadow-sm);
  padding: 8px 0;
}

.navbar-inner {
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 0 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo {
  display: flex;
  align-items: center;
  gap: 12px;
  color: var(--primary);
  z-index: 1001;
}

.logo-icon {
  color: var(--primary);
}

.logo-text {
  display: flex;
  flex-direction: column;
}

.logo-name {
  font-family: var(--font-heading);
  font-size: 1.25rem;
  font-weight: 700;
  letter-spacing: 2px;
  line-height: 1.1;
  color: var(--primary);
}

.logo-sub {
  font-family: var(--font-body);
  font-size: 0.65rem;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: var(--text-light);
  font-weight: 500;
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 28px;
}

.nav-links a {
  font-size: 0.95rem;
  font-weight: 500;
  color: var(--text);
  position: relative;
  transition: color var(--transition);
}

.nav-links a:not(.nav-cta)::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 0;
  height: 2px;
  background: var(--secondary);
  transition: width var(--transition);
}

.nav-links a:not(.nav-cta):hover::after,
.nav-links a:not(.nav-cta).active::after {
  width: 100%;
}

.nav-links a:not(.nav-cta):hover,
.nav-links a:not(.nav-cta).active {
  color: var(--primary);
}

.nav-cta {
  padding: 10px 24px !important;
  font-size: 0.9rem !important;
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
  width: 28px;
  height: 2.5px;
  background: var(--primary);
  border-radius: 2px;
  transition: all 0.3s ease;
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
    right: 0;
    bottom: 0;
    background: var(--bg);
    flex-direction: column;
    justify-content: center;
    gap: 24px;
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.3s ease;
  }

  .nav-links.open {
    opacity: 1;
    pointer-events: all;
  }

  .nav-links a {
    font-size: 1.25rem;
  }
}
</style>
