<template>
  <Navbar v-if="$route.path !== '/admin'" />
  <router-view />
  <Footer v-if="$route.path !== '/admin'" />
</template>

<script setup>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
</script>
