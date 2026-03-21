<template>
  <Teleport to="body">
    <Transition name="modal">
      <div v-if="isOpen" class="modal-overlay" @click="$emit('close')">
        <div class="modal-content" @click.stop>
          <button class="modal-close" @click="$emit('close')" aria-label="Close">&times;</button>
          <div class="modal-icon">
            <svg class="checkmark" viewBox="0 0 52 52" width="64" height="64">
              <circle class="checkmark-circle" cx="26" cy="26" r="25" fill="none" stroke="var(--primary)" stroke-width="2"/>
              <path class="checkmark-check" fill="none" stroke="var(--primary)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" d="M14.1 27.2l7.1 7.2 16.7-16.8"/>
            </svg>
          </div>
          <h3 class="modal-title">{{ title || 'Success!' }}</h3>
          <p class="modal-message">{{ message || 'Your submission has been received.' }}</p>
          <button class="btn btn-primary modal-btn" @click="$emit('close')">{{ buttonText || 'Continue' }}</button>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
import { watch, onUnmounted } from 'vue'

const props = defineProps({
  isOpen: {
    type: Boolean,
    default: false
  },
  title: String,
  message: String,
  buttonText: String
})

defineEmits(['close'])

watch(() => props.isOpen, (val) => {
  document.body.style.overflow = val ? 'hidden' : ''
})

onUnmounted(() => {
  document.body.style.overflow = ''
})
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  padding: 20px;
  backdrop-filter: blur(4px);
}

.modal-content {
  background: var(--white);
  border-radius: var(--radius-lg);
  padding: 48px 40px;
  max-width: 420px;
  width: 100%;
  text-align: center;
  position: relative;
  animation: scaleIn 0.3s ease;
}

.modal-close {
  position: absolute;
  top: 16px;
  right: 16px;
  background: none;
  border: none;
  font-size: 1.5rem;
  color: var(--text-light);
  cursor: pointer;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: all var(--transition);
}

.modal-close:hover {
  background: rgba(0, 0, 0, 0.05);
  color: var(--text);
}

.modal-icon {
  margin-bottom: 24px;
}

.checkmark-circle {
  stroke-dasharray: 166;
  stroke-dashoffset: 166;
  animation: drawCheck 0.6s ease forwards;
}

.checkmark-check {
  stroke-dasharray: 48;
  stroke-dashoffset: 48;
  animation: drawCheck 0.4s 0.4s ease forwards;
}

.modal-title {
  font-family: var(--font-heading);
  font-size: 1.5rem;
  color: var(--primary);
  margin-bottom: 12px;
}

.modal-message {
  color: var(--text-light);
  font-size: 1rem;
  margin-bottom: 28px;
  line-height: 1.6;
}

.modal-btn {
  min-width: 160px;
}

.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

@media (max-width: 480px) {
  .modal-content {
    padding: 36px 24px;
  }
}
</style>
