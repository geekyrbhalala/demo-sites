<script setup>
import { watch } from 'vue'

const props = defineProps({
  isOpen: { type: Boolean, default: false },
  title: { type: String, default: 'Success!' },
  message: { type: String, default: 'Your request has been submitted successfully.' }
})

const emit = defineEmits(['close'])

watch(() => props.isOpen, (val) => {
  document.body.style.overflow = val ? 'hidden' : ''
})

function handleOverlayClick() {
  emit('close')
}

function handleContentClick(e) {
  e.stopPropagation()
}
</script>

<template>
  <Teleport to="body">
    <div v-if="isOpen" class="modal-overlay" @click="handleOverlayClick">
      <div class="modal-content" @click="handleContentClick">
        <button class="modal-close" @click="emit('close')">&times;</button>
        <div class="modal-checkmark">
          <svg viewBox="0 0 80 80">
            <circle class="checkmark-circle" cx="40" cy="40" r="36" fill="none" stroke="#0066ff" stroke-width="3" />
            <path class="checkmark-check" d="M24 42 L34 52 L56 30" fill="none" stroke="#0066ff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </div>
        <h3 class="modal-title">{{ title }}</h3>
        <p class="modal-message">{{ message }}</p>
        <button class="btn btn-primary modal-btn" @click="emit('close')">Got It</button>
      </div>
    </div>
  </Teleport>
</template>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10000;
  animation: fadeIn 0.3s ease;
  padding: 20px;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

.modal-content {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  padding: 48px 40px;
  max-width: 420px;
  width: 100%;
  text-align: center;
  position: relative;
  animation: scaleIn 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
}

@keyframes scaleIn {
  from { transform: scale(0.8); opacity: 0; }
  to { transform: scale(1); opacity: 1; }
}

.modal-close {
  position: absolute;
  top: 16px;
  right: 16px;
  background: none;
  border: none;
  color: var(--text-muted);
  font-size: 1.8rem;
  cursor: pointer;
  line-height: 1;
  transition: color 0.2s;
}

.modal-close:hover {
  color: var(--white);
}

.modal-checkmark {
  width: 80px;
  height: 80px;
  margin: 0 auto 24px;
}

.modal-checkmark svg {
  width: 100%;
  height: 100%;
}

.checkmark-circle {
  stroke-dasharray: 226;
  stroke-dashoffset: 226;
  animation: drawCircle 0.6s 0.2s ease forwards;
}

@keyframes drawCircle {
  to { stroke-dashoffset: 0; }
}

.checkmark-check {
  stroke-dasharray: 60;
  stroke-dashoffset: 60;
  animation: drawCheck 0.4s 0.7s ease forwards;
}

@keyframes drawCheck {
  to { stroke-dashoffset: 0; }
}

.modal-title {
  font-family: var(--font-heading);
  font-size: 1.8rem;
  color: var(--white);
  margin-bottom: 8px;
}

.modal-message {
  color: var(--text-muted);
  margin-bottom: 28px;
  line-height: 1.6;
}

.modal-btn {
  min-width: 160px;
}
</style>
