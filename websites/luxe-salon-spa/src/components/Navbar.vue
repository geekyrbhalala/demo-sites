<template>
  <header class="navbar" :class="{ scrolled: isScrolled, 'menu-open': menuOpen }">
    <div class="navbar-inner container">
      <router-link to="/" class="logo" @click="menuOpen = false">
        <svg class="logo-icon" width="36" height="42" viewBox="0 0 100 120" fill="none">
          <path d="M50 10 C30 10 15 30 15 50 C15 70 30 85 50 85 C55 85 60 83 63 80 C55 82 45 75 45 60 C45 45 55 35 65 30 C60 18 55 10 50 10Z" fill="#b76e79" opacity="0.85"/>
          <path d="M55 15 C65 20 80 35 80 55 C80 70 70 82 58 85 C65 80 70 70 70 58 C70 40 60 25 55 15Z" fill="#2d4a3e" opacity="0.75"/>
        </svg>
        <div class="logo-text">
          <span class="logo-name">LUXE</span>
          <span class="logo-sub">salon &amp; spa</span>
        </div>
      </router-link>

      <nav class="nav-links" :class="{ open: menuOpen }">
        <router-link to="/" @click="menuOpen = false">Home</router-link>
        <router-link to="/services" @click="menuOpen = false">Services</router-link>
        <router-link to="/booking" @click="menuOpen = false">Booking</router-link>
        <router-link to="/gallery" @click="menuOpen = false">Gallery</router-link>
        <router-link to="/about" @click="menuOpen = false">About</router-link>
        <router-link to="/contact" @click="menuOpen = false">Contact</router-link>
        <router-link to="/login" class="nav-login" @click="menuOpen = false">Login</router-link>
        <router-link to="/booking" class="nav-book btn btn-primary" @click="menuOpen = false">Book Now</router-link>
      </nav>

      <button class="hamburger" :class="{ active: menuOpen }" @click="menuOpen = !menuOpen" aria-label="Toggle menu">
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isScrolled = ref(false)
const menuOpen = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
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
  padding: 20px 0;
  transition: all 0.3s ease;
  background: transparent;
}

.navbar.scrolled {
  background: rgba(254, 250, 246, 0.95);
  backdrop-filter: blur(10px);
  padding: 12px 0;
  box-shadow: 0 2px 20px rgba(44, 44, 44, 0.06);
}

.navbar-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo {
  display: flex;
  align-items: center;
  gap: 10px;
  z-index: 1001;
}

.logo-icon {
  transition: transform 0.3s ease;
}

.logo:hover .logo-icon {
  transform: rotate(-5deg) scale(1.05);
}

.logo-text {
  display: flex;
  flex-direction: column;
  line-height: 1;
}

.logo-name {
  font-family: var(--font-heading);
  font-size: 1.4rem;
  font-weight: 700;
  letter-spacing: 3px;
  color: var(--charcoal);
}

.logo-sub {
  font-family: var(--font-script);
  font-size: 1.1rem;
  color: var(--rose-gold);
  margin-top: 2px;
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 32px;
}

.nav-links a {
  font-size: 0.9rem;
  font-weight: 400;
  letter-spacing: 0.5px;
  color: var(--charcoal);
  position: relative;
}

.nav-links a::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 0;
  height: 1.5px;
  background: var(--rose-gold);
  transition: width 0.3s ease;
}

.nav-links a:hover::after,
.nav-links a.router-link-exact-active::after {
  width: 100%;
}

.nav-links a.router-link-exact-active {
  color: var(--rose-gold);
}

.nav-login {
  font-weight: 500 !important;
}

.nav-book {
  padding: 10px 24px !important;
  font-size: 0.8rem !important;
  letter-spacing: 1px !important;
}

.nav-book::after {
  display: none !important;
}

.hamburger {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  padding: 8px;
  z-index: 1001;
}

.hamburger span {
  width: 24px;
  height: 2px;
  background: var(--charcoal);
  transition: all 0.3s ease;
  display: block;
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

@media (max-width: 968px) {
  .hamburger {
    display: flex;
  }

  .nav-links {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: var(--warm-white);
    flex-direction: column;
    justify-content: center;
    gap: 24px;
    transform: translateX(100%);
    transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .nav-links.open {
    transform: translateX(0);
  }

  .nav-links a {
    font-size: 1.2rem;
  }

  .nav-book {
    margin-top: 16px;
  }
}
</style>
