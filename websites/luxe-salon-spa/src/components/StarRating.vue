<template>
  <div class="star-rating">
    <svg
      v-for="i in 5"
      :key="i"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      :fill="i <= rating ? '#b76e79' : 'none'"
      :stroke="i <= rating ? '#b76e79' : '#ccc'"
      stroke-width="1.5"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  </div>
</template>

<script setup>
defineProps({
  rating: { type: Number, default: 5 }
})
</script>

<style scoped>
.star-rating {
  display: flex;
  gap: 3px;
}
</style>
