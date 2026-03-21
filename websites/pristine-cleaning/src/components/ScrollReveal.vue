<template>
  <div ref="el" :class="['reveal', { visible: isVisible }]" :style="{ transitionDelay: delay + 'ms' }">
    <slot />
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  delay: {
    type: Number,
    default: 0
  }
})

const el = ref(null)
const isVisible = ref(false)
let observer = null

onMounted(() => {
  observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        isVisible.value = true
        observer.unobserve(entry.target)
      }
    },
    { threshold: 0.15 }
  )
  if (el.value) observer.observe(el.value)
})

onUnmounted(() => {
  if (observer && el.value) observer.disconnect()
})
</script>
