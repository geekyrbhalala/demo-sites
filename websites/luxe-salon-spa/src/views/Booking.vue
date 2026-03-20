<template>
  <div class="booking-page">
    <!-- Page Header -->
    <section class="page-header">
      <div class="container">
        <span class="script-accent header-script">Reserve your time</span>
        <h1>Book Your Experience</h1>
        <p>Schedule your appointment in just a few simple steps. We look forward to pampering you.</p>
      </div>
    </section>

    <section class="section booking-section">
      <div class="container">
        <div class="booking-layout" v-if="!confirmed">
          <!-- Progress Steps -->
          <div class="progress-bar">
            <div v-for="(s, i) in stepLabels" :key="i" class="progress-step" :class="{ active: currentStep >= i + 1, done: currentStep > i + 1 }">
              <div class="step-circle">
                <span v-if="currentStep <= i + 1">{{ i + 1 }}</span>
                <svg v-else width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="3"><path d="M5 12l5 5L20 7"/></svg>
              </div>
              <span class="step-label">{{ s }}</span>
            </div>
            <div class="progress-line">
              <div class="progress-fill" :style="{ width: ((currentStep - 1) / 3) * 100 + '%' }"></div>
            </div>
          </div>

          <div class="booking-main">
            <!-- Step Content -->
            <div class="step-content">
              <transition :name="slideDirection" mode="out-in">
                <!-- Step 1: Service -->
                <div v-if="currentStep === 1" key="step1" class="step-panel">
                  <h2>Select Your Service</h2>
                  <p class="step-desc">Choose a category and then select your desired treatment.</p>

                  <div class="category-chips">
                    <button
                      v-for="cat in serviceCategories"
                      :key="cat.name"
                      class="chip"
                      :class="{ selected: selectedCategory === cat.name }"
                      @click="selectedCategory = cat.name; selectedService = null"
                    >
                      {{ cat.name }}
                    </button>
                  </div>

                  <div class="service-options" v-if="selectedCategory">
                    <div
                      v-for="svc in currentServices"
                      :key="svc.name"
                      class="service-option"
                      :class="{ selected: selectedService?.name === svc.name }"
                      @click="selectedService = svc"
                    >
                      <div class="so-info">
                        <h4>{{ svc.name }}</h4>
                        <p>{{ svc.duration }}</p>
                      </div>
                      <span class="so-price">{{ svc.price }}</span>
                    </div>
                  </div>

                  <p v-if="errors.service" class="error-msg">Please select a service to continue.</p>
                </div>

                <!-- Step 2: Stylist -->
                <div v-else-if="currentStep === 2" key="step2" class="step-panel">
                  <h2>Choose Your Artist</h2>
                  <p class="step-desc">Select your preferred stylist or therapist.</p>

                  <div class="stylist-grid">
                    <div
                      v-for="stylist in stylists"
                      :key="stylist.name"
                      class="stylist-card"
                      :class="{ selected: selectedStylist?.name === stylist.name }"
                      @click="selectedStylist = stylist"
                    >
                      <div class="stylist-photo">
                        <img :src="stylist.photo" :alt="stylist.name" />
                      </div>
                      <h4>{{ stylist.name }}</h4>
                      <p>{{ stylist.role }}</p>
                      <span class="stylist-rating">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="#b76e79" stroke="#b76e79" stroke-width="1"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                        {{ stylist.rating }}
                      </span>
                    </div>
                  </div>

                  <p v-if="errors.stylist" class="error-msg">Please select a stylist to continue.</p>
                </div>

                <!-- Step 3: Date & Time -->
                <div v-else-if="currentStep === 3" key="step3" class="step-panel">
                  <h2>Select Date & Time</h2>
                  <p class="step-desc">Pick your preferred appointment date and time slot.</p>

                  <div class="calendar-section">
                    <div class="calendar-header">
                      <button class="cal-nav" @click="changeWeek(-1)">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M15 18l-6-6 6-6"/></svg>
                      </button>
                      <h3>{{ monthYearLabel }}</h3>
                      <button class="cal-nav" @click="changeWeek(1)">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 18l6-6-6-6"/></svg>
                      </button>
                    </div>

                    <div class="calendar-days">
                      <div
                        v-for="day in weekDays"
                        :key="day.date"
                        class="cal-day"
                        :class="{ selected: selectedDate === day.date, today: day.isToday, disabled: day.isPast }"
                        @click="!day.isPast && (selectedDate = day.date)"
                      >
                        <span class="cal-weekday">{{ day.weekday }}</span>
                        <span class="cal-number">{{ day.number }}</span>
                      </div>
                    </div>
                  </div>

                  <div class="time-slots" v-if="selectedDate">
                    <h4>Available Times</h4>
                    <div class="slots-grid">
                      <button
                        v-for="slot in timeSlots"
                        :key="slot"
                        class="time-slot"
                        :class="{ selected: selectedTime === slot }"
                        @click="selectedTime = slot"
                      >
                        {{ slot }}
                      </button>
                    </div>
                  </div>

                  <p v-if="errors.datetime" class="error-msg">Please select both a date and time.</p>
                </div>

                <!-- Step 4: Details -->
                <div v-else-if="currentStep === 4" key="step4" class="step-panel">
                  <h2>Your Details</h2>
                  <p class="step-desc">Please provide your contact information to confirm the booking.</p>

                  <form @submit.prevent class="details-form">
                    <div class="form-group" :class="{ error: errors.name, filled: form.name }">
                      <input type="text" v-model="form.name" id="b-name" required />
                      <label for="b-name">Full Name</label>
                    </div>
                    <div class="form-group" :class="{ error: errors.email, filled: form.email }">
                      <input type="email" v-model="form.email" id="b-email" required />
                      <label for="b-email">Email Address</label>
                    </div>
                    <div class="form-group" :class="{ error: errors.phone, filled: form.phone }">
                      <input type="tel" v-model="form.phone" id="b-phone" required />
                      <label for="b-phone">Phone Number</label>
                    </div>
                    <div class="form-group" :class="{ filled: form.notes }">
                      <textarea v-model="form.notes" id="b-notes" rows="3"></textarea>
                      <label for="b-notes">Special Requests or Notes</label>
                    </div>
                  </form>

                  <p v-if="errors.name" class="error-msg">Please enter your full name.</p>
                  <p v-if="errors.email" class="error-msg">Please enter a valid email address.</p>
                  <p v-if="errors.phone" class="error-msg">Please enter a valid phone number.</p>
                </div>
              </transition>

              <!-- Navigation -->
              <div class="step-nav">
                <button v-if="currentStep > 1" class="btn btn-secondary" @click="prevStep">Back</button>
                <div v-else></div>
                <button v-if="currentStep < 4" class="btn btn-primary" @click="nextStep">Continue</button>
                <button v-else class="btn btn-primary" @click="submitBooking">Confirm Booking</button>
              </div>
            </div>

            <!-- Sidebar Summary -->
            <aside class="booking-summary">
              <h3>Booking Summary</h3>
              <div class="summary-content">
                <div class="summary-item" v-if="selectedService">
                  <span class="summary-label">Service</span>
                  <span class="summary-value">{{ selectedService.name }}</span>
                  <span class="summary-sub">{{ selectedService.price }} &middot; {{ selectedService.duration }}</span>
                </div>
                <div class="summary-item" v-if="selectedStylist">
                  <span class="summary-label">Artist</span>
                  <span class="summary-value">{{ selectedStylist.name }}</span>
                  <span class="summary-sub">{{ selectedStylist.role }}</span>
                </div>
                <div class="summary-item" v-if="selectedDate">
                  <span class="summary-label">Date</span>
                  <span class="summary-value">{{ formattedDate }}</span>
                  <span class="summary-sub" v-if="selectedTime">{{ selectedTime }}</span>
                </div>
                <div class="summary-item" v-if="form.name">
                  <span class="summary-label">Client</span>
                  <span class="summary-value">{{ form.name }}</span>
                  <span class="summary-sub" v-if="form.email">{{ form.email }}</span>
                </div>
              </div>
              <div class="summary-empty" v-if="!selectedService">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#ccc" stroke-width="1"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>
                <p>Start selecting your services to see your booking summary here.</p>
              </div>
            </aside>
          </div>
        </div>

        <!-- Confirmation -->
        <div v-else class="confirmation">
          <div class="confirm-card">
            <div class="confirm-check">
              <svg viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <path d="M5 12l5 5L20 7"/>
              </svg>
            </div>
            <span class="script-accent" style="font-size: 2rem;">Wonderful!</span>
            <h2>Booking Confirmed</h2>
            <p>Your appointment has been successfully booked. We've sent a confirmation to <strong>{{ form.email }}</strong>.</p>

            <div class="confirm-details">
              <div class="cd-row">
                <span>Service</span>
                <strong>{{ selectedService?.name }}</strong>
              </div>
              <div class="cd-row">
                <span>Artist</span>
                <strong>{{ selectedStylist?.name }}</strong>
              </div>
              <div class="cd-row">
                <span>Date</span>
                <strong>{{ formattedDate }}</strong>
              </div>
              <div class="cd-row">
                <span>Time</span>
                <strong>{{ selectedTime }}</strong>
              </div>
            </div>

            <div class="confirm-actions">
              <router-link to="/" class="btn btn-primary">Back to Home</router-link>
              <button class="btn btn-secondary" @click="resetBooking">Book Another</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed, reactive } from 'vue'

const currentStep = ref(1)
const slideDirection = ref('slide-left')
const confirmed = ref(false)

const selectedCategory = ref(null)
const selectedService = ref(null)
const selectedStylist = ref(null)
const selectedDate = ref(null)
const selectedTime = ref(null)
const weekOffset = ref(0)

const form = reactive({ name: '', email: '', phone: '', notes: '' })
const errors = reactive({ service: false, stylist: false, datetime: false, name: false, email: false, phone: false })

const stepLabels = ['Service', 'Artist', 'Date & Time', 'Your Details']

const serviceCategories = [
  {
    name: 'Hair',
    services: [
      { name: 'Signature Haircut & Style', price: '$85', duration: '60 min' },
      { name: 'Balayage & Highlights', price: '$195', duration: '2-3 hrs' },
      { name: 'Full Color Treatment', price: '$150', duration: '90 min' },
      { name: 'Keratin Smoothing', price: '$250', duration: '2.5 hrs' }
    ]
  },
  {
    name: 'Skin & Facial',
    services: [
      { name: 'Signature Luxe Facial', price: '$120', duration: '60 min' },
      { name: 'Anti-Aging Collagen Boost', price: '$165', duration: '75 min' },
      { name: 'Botanical Brightening Peel', price: '$140', duration: '45 min' },
      { name: 'Hydrafacial Deluxe', price: '$195', duration: '60 min' }
    ]
  },
  {
    name: 'Nails',
    services: [
      { name: 'Classic Manicure', price: '$40', duration: '30 min' },
      { name: 'Gel Manicure', price: '$55', duration: '45 min' },
      { name: 'Luxury Spa Pedicure', price: '$70', duration: '60 min' },
      { name: 'Dip Powder Manicure', price: '$60', duration: '45 min' }
    ]
  },
  {
    name: 'Massage',
    services: [
      { name: 'Swedish Relaxation', price: '$95', duration: '60 min' },
      { name: 'Deep Tissue Therapy', price: '$120', duration: '60 min' },
      { name: 'Hot Stone Experience', price: '$140', duration: '75 min' },
      { name: 'Aromatherapy Journey', price: '$115', duration: '60 min' }
    ]
  }
]

const stylists = [
  { name: 'Isabella Rossi', role: 'Master Stylist', rating: '4.9', photo: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=800' },
  { name: 'Sophia Chen', role: 'Skin Specialist', rating: '4.8', photo: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=800' },
  { name: 'Emma Laurent', role: 'Massage Therapist', rating: '5.0', photo: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=800' }
]

const timeSlots = ['9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM', '1:00 PM', '1:30 PM', '2:00 PM', '2:30 PM', '3:00 PM', '3:30 PM', '4:00 PM', '4:30 PM', '5:00 PM']

const currentServices = computed(() => {
  const cat = serviceCategories.find(c => c.name === selectedCategory.value)
  return cat ? cat.services : []
})

const weekDays = computed(() => {
  const today = new Date()
  const startOfWeek = new Date(today)
  startOfWeek.setDate(today.getDate() - today.getDay() + 1 + weekOffset.value * 7)

  return Array.from({ length: 7 }, (_, i) => {
    const d = new Date(startOfWeek)
    d.setDate(startOfWeek.getDate() + i)
    const dateStr = d.toISOString().split('T')[0]
    return {
      date: dateStr,
      weekday: d.toLocaleDateString('en-US', { weekday: 'short' }),
      number: d.getDate(),
      isToday: dateStr === today.toISOString().split('T')[0],
      isPast: d < new Date(today.getFullYear(), today.getMonth(), today.getDate())
    }
  })
})

const monthYearLabel = computed(() => {
  if (weekDays.value.length === 0) return ''
  const first = new Date(weekDays.value[0].date)
  const last = new Date(weekDays.value[6].date)
  const opts = { month: 'long', year: 'numeric' }
  if (first.getMonth() === last.getMonth()) {
    return first.toLocaleDateString('en-US', opts)
  }
  return `${first.toLocaleDateString('en-US', { month: 'short' })} - ${last.toLocaleDateString('en-US', opts)}`
})

const formattedDate = computed(() => {
  if (!selectedDate.value) return ''
  const d = new Date(selectedDate.value + 'T12:00:00')
  return d.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' })
})

const changeWeek = (dir) => { weekOffset.value += dir }

const clearErrors = () => {
  Object.keys(errors).forEach(k => errors[k] = false)
}

const nextStep = () => {
  clearErrors()
  if (currentStep.value === 1 && !selectedService.value) { errors.service = true; return }
  if (currentStep.value === 2 && !selectedStylist.value) { errors.stylist = true; return }
  if (currentStep.value === 3 && (!selectedDate.value || !selectedTime.value)) { errors.datetime = true; return }
  slideDirection.value = 'slide-left'
  currentStep.value++
}

const prevStep = () => {
  clearErrors()
  slideDirection.value = 'slide-right'
  currentStep.value--
}

const submitBooking = () => {
  clearErrors()
  let valid = true
  if (!form.name.trim()) { errors.name = true; valid = false }
  if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) { errors.email = true; valid = false }
  if (!form.phone.trim() || form.phone.trim().length < 7) { errors.phone = true; valid = false }
  if (!valid) return
  confirmed.value = true
}

const resetBooking = () => {
  currentStep.value = 1
  confirmed.value = false
  selectedCategory.value = null
  selectedService.value = null
  selectedStylist.value = null
  selectedDate.value = null
  selectedTime.value = null
  form.name = ''
  form.email = ''
  form.phone = ''
  form.notes = ''
}
</script>

<style scoped>
.page-header {
  padding: 160px 0 80px;
  background: linear-gradient(135deg, var(--blush) 0%, var(--warm-white) 100%);
  text-align: center;
}

.header-script {
  font-size: 2rem;
  display: block;
  margin-bottom: 8px;
}

.page-header h1 {
  font-size: 3rem;
  margin-bottom: 16px;
}

.page-header p {
  max-width: 600px;
  margin: 0 auto;
  color: #666;
}

/* Progress Bar */
.progress-bar {
  display: flex;
  justify-content: space-between;
  position: relative;
  margin-bottom: 48px;
  padding: 0 20px;
}

.progress-step {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  z-index: 2;
}

.step-circle {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #e8e8e8;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 0.9rem;
  color: #999;
  transition: all 0.3s ease;
}

.progress-step.active .step-circle {
  background: var(--rose-gold);
  color: white;
}

.progress-step.done .step-circle {
  background: var(--sage);
  color: white;
}

.step-label {
  font-size: 0.8rem;
  color: #999;
  font-weight: 500;
}

.progress-step.active .step-label {
  color: var(--rose-gold);
}

.progress-step.done .step-label {
  color: var(--sage);
}

.progress-line {
  position: absolute;
  top: 20px;
  left: 60px;
  right: 60px;
  height: 2px;
  background: #e8e8e8;
  z-index: 1;
}

.progress-fill {
  height: 100%;
  background: var(--sage);
  transition: width 0.4s ease;
}

/* Layout */
.booking-main {
  display: grid;
  grid-template-columns: 1fr 320px;
  gap: 40px;
  align-items: start;
}

/* Step Panels */
.step-content {
  min-height: 400px;
}

.step-panel h2 {
  font-size: 1.6rem;
  margin-bottom: 8px;
}

.step-desc {
  color: #888;
  margin-bottom: 28px;
}

/* Slide transitions */
.slide-left-enter-active,
.slide-left-leave-active,
.slide-right-enter-active,
.slide-right-leave-active {
  transition: all 0.3s ease;
}

.slide-left-enter-from { opacity: 0; transform: translateX(40px); }
.slide-left-leave-to { opacity: 0; transform: translateX(-40px); }
.slide-right-enter-from { opacity: 0; transform: translateX(-40px); }
.slide-right-leave-to { opacity: 0; transform: translateX(40px); }

/* Step 1 */
.category-chips {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  margin-bottom: 24px;
}

.chip {
  padding: 10px 24px;
  border-radius: 50px;
  background: var(--blush);
  color: var(--charcoal);
  font-size: 0.9rem;
  font-weight: 500;
  border: 2px solid transparent;
  cursor: pointer;
  transition: all 0.3s ease;
}

.chip.selected {
  background: var(--rose-gold);
  color: white;
  border-color: var(--rose-gold);
}

.chip:hover:not(.selected) {
  border-color: var(--rose-gold-light);
}

.service-options {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.service-option {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 18px 24px;
  background: white;
  border: 2px solid #eee;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.service-option.selected {
  border-color: var(--rose-gold);
  background: rgba(183, 110, 121, 0.05);
}

.service-option:hover:not(.selected) {
  border-color: var(--rose-gold-light);
}

.so-info h4 {
  font-size: 1rem;
  margin-bottom: 2px;
}

.so-info p {
  font-size: 0.85rem;
  color: #888;
}

.so-price {
  font-family: var(--font-heading);
  font-weight: 700;
  color: var(--rose-gold);
  font-size: 1.1rem;
}

/* Step 2 */
.stylist-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.stylist-card {
  text-align: center;
  padding: 24px 16px;
  background: white;
  border: 2px solid #eee;
  border-radius: 16px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.stylist-card.selected {
  border-color: var(--rose-gold);
  box-shadow: var(--shadow-rose);
}

.stylist-card:hover:not(.selected) {
  border-color: var(--rose-gold-light);
}

.stylist-photo {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  overflow: hidden;
  margin: 0 auto 14px;
}

.stylist-photo img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.stylist-card h4 {
  font-size: 1rem;
  margin-bottom: 4px;
}

.stylist-card p {
  font-size: 0.85rem;
  color: #888;
  margin-bottom: 8px;
}

.stylist-rating {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--rose-gold);
}

/* Step 3 */
.calendar-section {
  margin-bottom: 28px;
}

.calendar-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
}

.calendar-header h3 {
  font-size: 1.1rem;
}

.cal-nav {
  background: var(--blush);
  width: 36px;
  height: 36px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--charcoal);
}

.cal-nav:hover {
  background: var(--rose-gold);
  color: white;
}

.calendar-days {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 8px;
}

.cal-day {
  text-align: center;
  padding: 14px 8px;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s ease;
  border: 2px solid transparent;
  background: white;
}

.cal-day:hover:not(.disabled) {
  border-color: var(--rose-gold-light);
}

.cal-day.selected {
  background: var(--rose-gold);
  color: white;
  border-color: var(--rose-gold);
}

.cal-day.selected .cal-weekday {
  color: rgba(255, 255, 255, 0.8);
}

.cal-day.today {
  border-color: var(--sage);
}

.cal-day.disabled {
  opacity: 0.35;
  cursor: not-allowed;
}

.cal-weekday {
  display: block;
  font-size: 0.75rem;
  color: #999;
  margin-bottom: 4px;
  text-transform: uppercase;
}

.cal-number {
  font-weight: 600;
  font-size: 1.1rem;
}

.time-slots h4 {
  margin-bottom: 14px;
  font-size: 1rem;
}

.slots-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 8px;
}

.time-slot {
  padding: 10px;
  border: 2px solid #eee;
  border-radius: 10px;
  background: white;
  font-size: 0.85rem;
  font-weight: 500;
  color: var(--charcoal);
  transition: all 0.3s ease;
}

.time-slot.selected {
  background: var(--rose-gold);
  color: white;
  border-color: var(--rose-gold);
}

.time-slot:hover:not(.selected) {
  border-color: var(--rose-gold-light);
}

/* Step 4 */
.details-form {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.form-group {
  position: relative;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 18px 20px 8px;
  border: 2px solid #e8e8e8;
  border-radius: 12px;
  font-size: 1rem;
  background: white;
  color: var(--charcoal);
}

.form-group label {
  position: absolute;
  top: 50%;
  left: 20px;
  transform: translateY(-50%);
  font-size: 0.95rem;
  color: #999;
  pointer-events: none;
  transition: all 0.2s ease;
}

.form-group textarea ~ label {
  top: 18px;
  transform: none;
}

.form-group input:focus,
.form-group textarea:focus {
  border-color: var(--rose-gold);
}

.form-group input:focus ~ label,
.form-group.filled input ~ label,
.form-group textarea:focus ~ label,
.form-group.filled textarea ~ label {
  top: 8px;
  transform: none;
  font-size: 0.72rem;
  color: var(--rose-gold);
}

.form-group.error input,
.form-group.error textarea {
  border-color: #e74c3c;
}

.error-msg {
  color: #e74c3c;
  font-size: 0.85rem;
  margin-top: 8px;
}

/* Nav */
.step-nav {
  display: flex;
  justify-content: space-between;
  margin-top: 36px;
  padding-top: 24px;
  border-top: 1px solid #eee;
}

/* Summary */
.booking-summary {
  background: white;
  border-radius: 16px;
  padding: 28px;
  box-shadow: var(--shadow-soft);
  position: sticky;
  top: 120px;
}

.booking-summary h3 {
  font-size: 1.1rem;
  margin-bottom: 20px;
  padding-bottom: 16px;
  border-bottom: 1px solid #eee;
}

.summary-item {
  margin-bottom: 18px;
  padding-bottom: 18px;
  border-bottom: 1px solid #f5f5f5;
}

.summary-label {
  display: block;
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: #999;
  margin-bottom: 4px;
}

.summary-value {
  display: block;
  font-weight: 600;
  font-size: 0.95rem;
}

.summary-sub {
  display: block;
  font-size: 0.85rem;
  color: var(--rose-gold);
}

.summary-empty {
  text-align: center;
  padding: 20px 0;
}

.summary-empty svg {
  margin-bottom: 12px;
}

.summary-empty p {
  font-size: 0.85rem;
  color: #999;
}

/* Confirmation */
.confirmation {
  max-width: 560px;
  margin: 0 auto;
}

.confirm-card {
  text-align: center;
  background: white;
  padding: 60px 48px;
  border-radius: 20px;
  box-shadow: var(--shadow-medium);
}

.confirm-check {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: var(--sage);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 24px;
  animation: scaleIn 0.5s ease;
}

.confirm-check svg {
  width: 36px;
  height: 36px;
  stroke-dasharray: 50;
  stroke-dashoffset: 50;
  animation: drawCheck 0.5s ease 0.3s forwards;
}

@keyframes scaleIn {
  from { transform: scale(0); }
  to { transform: scale(1); }
}

@keyframes drawCheck {
  to { stroke-dashoffset: 0; }
}

.confirm-card h2 {
  margin: 8px 0 12px;
}

.confirm-card > p {
  color: #666;
  margin-bottom: 28px;
}

.confirm-details {
  background: var(--blush);
  border-radius: 12px;
  padding: 24px;
  margin-bottom: 28px;
}

.cd-row {
  display: flex;
  justify-content: space-between;
  padding: 8px 0;
}

.cd-row span {
  color: #888;
  font-size: 0.9rem;
}

.cd-row strong {
  font-size: 0.9rem;
}

.confirm-actions {
  display: flex;
  gap: 12px;
  justify-content: center;
}

@media (max-width: 968px) {
  .booking-main {
    grid-template-columns: 1fr;
  }

  .booking-summary {
    position: static;
  }

  .stylist-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .slots-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 600px) {
  .progress-bar {
    padding: 0;
  }

  .step-label {
    font-size: 0.7rem;
  }

  .calendar-days {
    gap: 4px;
  }

  .cal-day {
    padding: 10px 4px;
  }

  .slots-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .stylist-grid {
    grid-template-columns: 1fr;
  }

  .confirm-card {
    padding: 40px 24px;
  }

  .confirm-actions {
    flex-direction: column;
  }
}
</style>
