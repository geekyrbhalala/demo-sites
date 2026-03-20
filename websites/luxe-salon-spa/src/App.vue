<template>
  <div id="luxe-app">
    <!-- Floating botanical decorations -->
    <div class="botanical-decor botanical-1" aria-hidden="true">
      <svg width="60" height="80" viewBox="0 0 60 80" fill="none">
        <path d="M30 80 C30 80 10 50 10 30 C10 10 30 0 30 0 C30 0 50 10 50 30 C50 50 30 80 30 80Z" fill="#9cac8b" opacity="0.12"/>
      </svg>
    </div>
    <div class="botanical-decor botanical-2" aria-hidden="true">
      <svg width="40" height="60" viewBox="0 0 40 60" fill="none">
        <path d="M20 60 C20 60 5 35 5 20 C5 5 20 0 20 0 C20 0 35 5 35 20 C35 35 20 60 20 60Z" fill="#b76e79" opacity="0.08"/>
      </svg>
    </div>
    <div class="botanical-decor botanical-3" aria-hidden="true">
      <svg width="50" height="70" viewBox="0 0 50 70" fill="none">
        <ellipse cx="25" cy="35" rx="22" ry="32" fill="#9cac8b" opacity="0.06"/>
      </svg>
    </div>

    <Navbar />
    <main>
      <router-view v-slot="{ Component }">
        <transition name="page" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>
    <Footer />
  </div>
</template>

<script setup>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
</script>

<style>
#luxe-app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  position: relative;
}

#luxe-app main {
  flex: 1;
}

.botanical-decor {
  position: fixed;
  pointer-events: none;
  z-index: 0;
  animation: float 8s ease-in-out infinite;
}

.botanical-1 {
  top: 15%;
  right: 3%;
  animation-delay: 0s;
}

.botanical-2 {
  top: 55%;
  left: 2%;
  animation-delay: 2s;
}

.botanical-3 {
  bottom: 20%;
  right: 5%;
  animation-delay: 4s;
}

@media (max-width: 768px) {
  .botanical-decor {
    display: none;
  }
}
</style>
