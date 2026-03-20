<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  delay: { type: Number, default: 0 },
  direction: { type: String, default: 'up' }
})

const el = ref(null)
const isVisible = ref(false)
let observer = null

onMounted(() => {
  observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          isVisible.value = true
        }, props.delay)
        observer.unobserve(entry.target)
      }
    },
    { threshold: 0.1 }
  )
  if (el.value) {
    observer.observe(el.value)
  }
})

onUnmounted(() => {
  if (observer) observer.disconnect()
})

const className = props.direction === 'left'
  ? 'reveal-left'
  : props.direction === 'right'
    ? 'reveal-right'
    : 'reveal'
</script>

<template>
  <div ref="el" :class="[className, { visible: isVisible }]">
    <slot />
  </div>
</template>
