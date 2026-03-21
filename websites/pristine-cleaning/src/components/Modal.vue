<template>
  <Teleport to="body">
    <Transition name="modal">
      <div v-if="isOpen" class="modal-overlay" @click="$emit('close')">
        <div class="modal-content" @click.stop>
          <button class="modal-close" @click="$emit('close')">&times;</button>
          <div class="modal-icon">
            <svg viewBox="0 0 52 52" class="checkmark">
              <circle class="checkmark-circle" cx="26" cy="26" r="25" fill="none" />
              <path class="checkmark-check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" />
            </svg>
          </div>
          <h3 class="modal-title">{{ title || 'Success!' }}</h3>
          <p class="modal-message">{{ message || 'Your request has been submitted successfully.' }}</p>
          <button class="btn btn-primary" @click="$emit('close')">Got it</button>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
import { watch } from 'vue'

const props = defineProps({
  isOpen: Boolean,
  title: String,
  message: String
})

const emit = defineEmits(['close'])

watch(() => props.isOpen, (val) => {
  document.body.style.overflow = val ? 'hidden' : ''
})
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10000;
  backdrop-filter: blur(4px);
}

.modal-content {
  background: var(--white);
  border-radius: var(--radius-lg);
  padding: 3rem 2.5rem;
  max-width: 420px;
  width: 90%;
  text-align: center;
  position: relative;
  box-shadow: var(--shadow-xl);
}

.modal-close {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  font-size: 1.5rem;
  color: var(--text-muted);
  cursor: pointer;
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: all var(--transition-fast);
}

.modal-close:hover {
  background: var(--bg-light);
  color: var(--text);
}

.modal-icon {
  margin: 0 auto 1.5rem;
  width: 72px;
  height: 72px;
}

.checkmark {
  width: 72px;
  height: 72px;
}

.checkmark-circle {
  stroke: var(--success);
  stroke-width: 2;
  stroke-dasharray: 166;
  stroke-dashoffset: 166;
  animation: stroke 0.6s cubic-bezier(0.65, 0, 0.45, 1) forwards;
}

.checkmark-check {
  stroke: var(--success);
  stroke-width: 3;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-dasharray: 48;
  stroke-dashoffset: 48;
  animation: stroke 0.4s cubic-bezier(0.65, 0, 0.45, 1) 0.4s forwards;
}

@keyframes stroke {
  100% { stroke-dashoffset: 0; }
}

.modal-title {
  font-family: var(--font-heading);
  font-size: 1.5rem;
  color: var(--secondary);
  margin-bottom: 0.75rem;
}

.modal-message {
  color: var(--text-light);
  font-size: 1rem;
  margin-bottom: 2rem;
  line-height: 1.6;
}

.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s ease;
}

.modal-enter-active .modal-content,
.modal-leave-active .modal-content {
  transition: transform 0.3s ease, opacity 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

.modal-enter-from .modal-content,
.modal-leave-to .modal-content {
  transform: scale(0.9);
  opacity: 0;
}
</style>
