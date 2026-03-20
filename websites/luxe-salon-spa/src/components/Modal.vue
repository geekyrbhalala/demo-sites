<template>
  <teleport to="body">
    <div v-if="show" class="toast-overlay" @click.self="$emit('close')">
      <div class="toast-modal">
        <div class="checkmark">
          <svg viewBox="0 0 24 24">
            <path d="M5 12l5 5L20 7" />
          </svg>
        </div>
        <h3>{{ title }}</h3>
        <p>{{ message }}</p>
        <button class="btn btn-primary" @click="$emit('close')">{{ buttonText }}</button>
      </div>
    </div>
  </teleport>
</template>

<script setup>
defineProps({
  show: { type: Boolean, default: false },
  title: { type: String, default: 'Success!' },
  message: { type: String, default: 'Your request has been submitted successfully.' },
  buttonText: { type: String, default: 'Wonderful' }
})

defineEmits(['close'])
</script>

<style scoped>
.toast-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(44, 44, 44, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10000;
  animation: fadeIn 0.3s ease;
}

.toast-modal {
  background: white;
  border-radius: 16px;
  padding: 48px;
  max-width: 480px;
  width: 90%;
  text-align: center;
  box-shadow: 0 20px 60px rgba(44, 44, 44, 0.2);
  animation: scaleIn 0.3s ease;
}

.checkmark {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: #9cac8b;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 24px;
}

.checkmark svg {
  width: 40px;
  height: 40px;
  stroke: white;
  stroke-width: 3;
  fill: none;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-dasharray: 50;
  stroke-dashoffset: 50;
  animation: drawCheck 0.5s ease 0.3s forwards;
}

.toast-modal h3 {
  margin-bottom: 12px;
  color: #2d4a3e;
  font-size: 1.5rem;
}

.toast-modal p {
  color: #666;
  margin-bottom: 28px;
  line-height: 1.6;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes scaleIn {
  from { opacity: 0; transform: scale(0.9); }
  to { opacity: 1; transform: scale(1); }
}

@keyframes drawCheck {
  to { stroke-dashoffset: 0; }
}
</style>
