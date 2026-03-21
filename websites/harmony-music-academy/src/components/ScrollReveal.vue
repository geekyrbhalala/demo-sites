<template>
  <div ref="el" :class="[directionClass, { visible: isVisible }]" :style="{ transitionDelay: delay + 'ms' }">
    <slot />
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  delay: {
    type: Number,
    default: 0
  },
  direction: {
    type: String,
    default: 'up',
    validator: (val) => ['up', 'left', 'right'].includes(val)
  }
})

const el = ref(null)
const isVisible = ref(false)
let observer = null

const directionClass = computed(() => {
  if (props.direction === 'left') return 'reveal-left'
  if (props.direction === 'right') return 'reveal-right'
  return 'reveal'
})

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
  if (el.value) {
    observer.observe(el.value)
  }
})

onUnmounted(() => {
  if (observer) {
    observer.disconnect()
  }
})
</script>
