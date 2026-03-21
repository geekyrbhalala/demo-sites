<template>
  <div class="booking-page">
    <section class="page-hero">
      <div class="container">
        <span class="section-label">Book Online</span>
        <h1>Schedule Your<br>Cleaning</h1>
        <p>Get a free estimate in minutes. No commitment required.</p>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="booking-layout">
          <!-- Progress -->
          <div class="booking-progress">
            <div v-for="(s, i) in stepLabels" :key="i" class="progress-step" :class="{ active: step === i + 1, completed: step > i + 1 }">
              <div class="progress-dot">
                <svg v-if="step > i + 1" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg>
                <span v-else>{{ i + 1 }}</span>
              </div>
              <span class="progress-label">{{ s }}</span>
            </div>
          </div>

          <!-- Form -->
          <div class="booking-form-area">
            <div class="booking-card">
              <!-- Step 1: Service Type -->
              <div v-if="step === 1" class="booking-step">
                <h2>Select Service Type</h2>
                <p>Choose the type of cleaning you need.</p>
                <div class="option-grid">
                  <div v-for="s in serviceTypes" :key="s.value" class="option-card" :class="{ selected: form.serviceType === s.value }" @click="form.serviceType = s.value">
                    <div class="option-icon" v-html="s.icon"></div>
                    <h4>{{ s.label }}</h4>
                    <p>{{ s.desc }}</p>
                  </div>
                </div>
              </div>

              <!-- Step 2: Home Size -->
              <div v-if="step === 2" class="booking-step">
                <h2>Home Size</h2>
                <p>This helps us estimate the time and pricing.</p>
                <div class="option-grid cols-4">
                  <div v-for="s in homeSizes" :key="s.value" class="option-card compact" :class="{ selected: form.homeSize === s.value }" @click="form.homeSize = s.value">
                    <h4>{{ s.label }}</h4>
                    <p>{{ s.desc }}</p>
                  </div>
                </div>
              </div>

              <!-- Step 3: Frequency -->
              <div v-if="step === 3" class="booking-step">
                <h2>Cleaning Frequency</h2>
                <p>Recurring cleanings get you the best rates.</p>
                <div class="option-grid cols-4">
                  <div v-for="f in frequencies" :key="f.value" class="option-card compact" :class="{ selected: form.frequency === f.value }" @click="form.frequency = f.value">
                    <h4>{{ f.label }}</h4>
                    <span class="discount-tag" v-if="f.discount">{{ f.discount }}</span>
                  </div>
                </div>
              </div>

              <!-- Step 4: Add-ons -->
              <div v-if="step === 4" class="booking-step">
                <h2>Add-On Services</h2>
                <p>Customize your cleaning with optional extras.</p>
                <div class="addons-list">
                  <label v-for="a in addons" :key="a.value" class="addon-item" :class="{ checked: form.addons.includes(a.value) }">
                    <input type="checkbox" :value="a.value" v-model="form.addons" />
                    <div class="addon-info">
                      <strong>{{ a.label }}</strong>
                      <span>{{ a.desc }}</span>
                    </div>
                    <span class="addon-price">+${{ a.price }}</span>
                  </label>
                </div>
              </div>

              <!-- Step 5: Date/Time -->
              <div v-if="step === 5" class="booking-step">
                <h2>Preferred Date &amp; Time</h2>
                <p>Pick your ideal cleaning day and time slot.</p>
                <div class="form-row">
                  <div class="form-group">
                    <label>Preferred Date</label>
                    <input type="date" v-model="form.date" :min="minDate" :class="{ error: errors.date }" />
                    <span v-if="errors.date" class="error-msg">{{ errors.date }}</span>
                  </div>
                  <div class="form-group">
                    <label>Time Slot</label>
                    <select v-model="form.time" :class="{ error: errors.time }">
                      <option value="">Select a time</option>
                      <option value="8am-10am">8:00 AM - 10:00 AM</option>
                      <option value="10am-12pm">10:00 AM - 12:00 PM</option>
                      <option value="12pm-2pm">12:00 PM - 2:00 PM</option>
                      <option value="2pm-4pm">2:00 PM - 4:00 PM</option>
                      <option value="4pm-6pm">4:00 PM - 6:00 PM</option>
                    </select>
                    <span v-if="errors.time" class="error-msg">{{ errors.time }}</span>
                  </div>
                </div>
                <div class="form-group">
                  <label>Special Instructions (optional)</label>
                  <textarea v-model="form.notes" placeholder="Any special requests, access codes, pet info, etc." rows="3"></textarea>
                </div>
              </div>

              <!-- Step 6: Contact -->
              <div v-if="step === 6" class="booking-step">
                <h2>Your Information</h2>
                <p>How can we reach you to confirm your booking?</p>
                <div class="form-row">
                  <div class="form-group">
                    <label>Full Name</label>
                    <input type="text" v-model="form.name" :class="{ error: errors.name }" placeholder="Jane Smith" @input="clearError('name')" />
                    <span v-if="errors.name" class="error-msg">{{ errors.name }}</span>
                  </div>
                  <div class="form-group">
                    <label>Email</label>
                    <input type="email" v-model="form.email" :class="{ error: errors.email }" placeholder="jane@example.com" @input="clearError('email')" />
                    <span v-if="errors.email" class="error-msg">{{ errors.email }}</span>
                  </div>
                </div>
                <div class="form-row">
                  <div class="form-group">
                    <label>Phone</label>
                    <input type="tel" v-model="form.phone" :class="{ error: errors.phone }" placeholder="(415) 555-0000" @input="clearError('phone')" />
                    <span v-if="errors.phone" class="error-msg">{{ errors.phone }}</span>
                  </div>
                  <div class="form-group">
                    <label>Address</label>
                    <input type="text" v-model="form.address" :class="{ error: errors.address }" placeholder="123 Main St, San Francisco" @input="clearError('address')" />
                    <span v-if="errors.address" class="error-msg">{{ errors.address }}</span>
                  </div>
                </div>
              </div>

              <!-- Actions -->
              <div class="booking-actions">
                <button v-if="step > 1" class="btn btn-outline" @click="prevStep">Back</button>
                <button v-if="step < 6" class="btn btn-primary" @click="nextStep" :disabled="!canProceed">Continue</button>
                <button v-if="step === 6" class="btn btn-primary" @click="submitBooking">Confirm Booking</button>
              </div>
            </div>

            <!-- Running Total -->
            <div class="booking-summary">
              <h3>Booking Summary</h3>
              <div class="summary-row" v-if="form.serviceType">
                <span>Service</span>
                <span>{{ serviceTypeLabel }}</span>
              </div>
              <div class="summary-row" v-if="form.homeSize">
                <span>Size</span>
                <span>{{ homeSizeLabel }}</span>
              </div>
              <div class="summary-row" v-if="form.frequency">
                <span>Frequency</span>
                <span>{{ frequencyLabel }}</span>
              </div>
              <div class="summary-row" v-for="a in selectedAddons" :key="a.value">
                <span>{{ a.label }}</span>
                <span>+${{ a.price }}</span>
              </div>
              <div class="summary-row" v-if="form.date">
                <span>Date</span>
                <span>{{ form.date }}</span>
              </div>
              <div class="summary-row" v-if="form.time">
                <span>Time</span>
                <span>{{ form.time }}</span>
              </div>
              <div class="summary-divider"></div>
              <div class="summary-total">
                <span>Estimated Total</span>
                <span class="total-price">${{ estimatedTotal }}</span>
              </div>
              <p class="summary-note">Final price confirmed after consultation.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <Modal :isOpen="showModal" @close="showModal = false" title="Booking Confirmed!" message="Thank you! We'll contact you within 2 hours to confirm your cleaning appointment. Check your email for details." />
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import ScrollReveal from '../components/ScrollReveal.vue'
import Modal from '../components/Modal.vue'

const step = ref(1)
const showModal = ref(false)
const errors = ref({})

const form = ref({
  serviceType: '',
  homeSize: '',
  frequency: '',
  addons: [],
  date: '',
  time: '',
  notes: '',
  name: '',
  email: '',
  phone: '',
  address: ''
})

const stepLabels = ['Service', 'Size', 'Frequency', 'Add-ons', 'Schedule', 'Contact']

const serviceTypes = [
  { value: 'regular', label: 'Regular Cleaning', desc: 'Routine maintenance cleaning', icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>' },
  { value: 'deep', label: 'Deep Cleaning', desc: 'Thorough top-to-bottom clean', icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>' },
  { value: 'moveinout', label: 'Move In / Out', desc: 'For new or vacated spaces', icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="1" y="6" width="22" height="14" rx="2"/><path d="M1 10h22"/></svg>' },
  { value: 'commercial', label: 'Commercial', desc: 'Office & business cleaning', icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="4" y="2" width="16" height="20" rx="2"/><line x1="9" y1="6" x2="15" y2="6"/><line x1="9" y1="10" x2="15" y2="10"/><line x1="9" y1="14" x2="15" y2="14"/></svg>' }
]

const homeSizes = [
  { value: 'studio', label: 'Studio / 1BR', desc: 'Up to 700 sq ft' },
  { value: '2br', label: '2 Bedrooms', desc: '700-1,200 sq ft' },
  { value: '3br', label: '3 Bedrooms', desc: '1,200-2,000 sq ft' },
  { value: '4br', label: '4+ Bedrooms', desc: '2,000+ sq ft' }
]

const frequencies = [
  { value: 'weekly', label: 'Weekly', discount: '20% OFF' },
  { value: 'biweekly', label: 'Biweekly', discount: '10% OFF' },
  { value: 'monthly', label: 'Monthly', discount: '5% OFF' },
  { value: 'onetime', label: 'One-Time', discount: null }
]

const addons = [
  { value: 'fridge', label: 'Inside Fridge', desc: 'Deep clean shelves & drawers', price: 35 },
  { value: 'oven', label: 'Inside Oven', desc: 'Remove grease & residue', price: 40 },
  { value: 'laundry', label: 'Laundry (2 loads)', desc: 'Wash, dry, fold', price: 30 },
  { value: 'windows', label: 'Interior Windows', desc: 'Streak-free clean', price: 45 },
  { value: 'cabinets', label: 'Inside Cabinets', desc: 'Wipe & organize', price: 50 },
  { value: 'garage', label: 'Garage Sweep', desc: 'Sweep & tidy', price: 40 }
]

const today = new Date()
const minDate = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate() + 1).padStart(2, '0')}`

const serviceTypeLabel = computed(() => serviceTypes.find(s => s.value === form.value.serviceType)?.label || '')
const homeSizeLabel = computed(() => homeSizes.find(s => s.value === form.value.homeSize)?.label || '')
const frequencyLabel = computed(() => frequencies.find(f => f.value === form.value.frequency)?.label || '')
const selectedAddons = computed(() => addons.filter(a => form.value.addons.includes(a.value)))

const basePrice = computed(() => {
  const sizePrices = { studio: 79, '2br': 99, '3br': 149, '4br': 199 }
  const typeMultipliers = { regular: 1, deep: 1.5, moveinout: 1.75, commercial: 2 }
  const base = sizePrices[form.value.homeSize] || 99
  const mult = typeMultipliers[form.value.serviceType] || 1
  return Math.round(base * mult)
})

const discount = computed(() => {
  const discounts = { weekly: 0.2, biweekly: 0.1, monthly: 0.05, onetime: 0 }
  return discounts[form.value.frequency] || 0
})

const estimatedTotal = computed(() => {
  const addonsTotal = selectedAddons.value.reduce((sum, a) => sum + a.price, 0)
  const discounted = basePrice.value * (1 - discount.value)
  return Math.round(discounted + addonsTotal)
})

const canProceed = computed(() => {
  if (step.value === 1) return !!form.value.serviceType
  if (step.value === 2) return !!form.value.homeSize
  if (step.value === 3) return !!form.value.frequency
  return true
})

const clearError = (field) => {
  if (errors.value[field]) errors.value[field] = ''
}

const nextStep = () => {
  if (step.value === 5) {
    const errs = {}
    if (!form.value.date) errs.date = 'Please select a date'
    if (!form.value.time) errs.time = 'Please select a time'
    if (Object.keys(errs).length) { errors.value = errs; return }
  }
  errors.value = {}
  if (step.value < 6) step.value++
}

const prevStep = () => {
  errors.value = {}
  if (step.value > 1) step.value--
}

const submitBooking = () => {
  const errs = {}
  if (!form.value.name.trim()) errs.name = 'Name is required'
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.value.email)) errs.email = 'Valid email required'
  if (!/^[\d\s\-\+\(\)]{7,}$/.test(form.value.phone)) errs.phone = 'Valid phone required'
  if (!form.value.address.trim()) errs.address = 'Address is required'
  if (Object.keys(errs).length) { errors.value = errs; return }

  showModal.value = true
  step.value = 1
  form.value = { serviceType: '', homeSize: '', frequency: '', addons: [], date: '', time: '', notes: '', name: '', email: '', phone: '', address: '' }
  errors.value = {}
}
</script>

<style scoped>
.page-hero {
  background: linear-gradient(135deg, var(--secondary) 0%, #283593 100%);
  padding: 10rem 0 5rem;
  text-align: center;
}

.page-hero .section-label { color: var(--primary-light); }
.page-hero h1 { color: var(--white); margin-bottom: 1rem; }
.page-hero p { color: rgba(255,255,255,0.8); font-size: 1.1rem; max-width: 600px; margin: 0 auto; }

.booking-layout { max-width: 900px; margin: 0 auto; }

.booking-progress {
  display: flex;
  justify-content: space-between;
  margin-bottom: 3rem;
  position: relative;
}

.booking-progress::before {
  content: '';
  position: absolute;
  top: 18px;
  left: 5%;
  right: 5%;
  height: 2px;
  background: var(--border);
}

.progress-step {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  position: relative;
  z-index: 1;
}

.progress-dot {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: var(--white);
  border: 2px solid var(--border);
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--font-accent);
  font-size: 0.85rem;
  font-weight: 700;
  color: var(--text-muted);
  transition: all var(--transition);
}

.progress-step.active .progress-dot {
  border-color: var(--primary);
  background: var(--primary);
  color: var(--white);
}

.progress-step.completed .progress-dot {
  border-color: var(--success);
  background: var(--success);
  color: var(--white);
}

.progress-dot svg { width: 16px; height: 16px; }

.progress-label {
  font-size: 0.75rem;
  font-weight: 500;
  color: var(--text-muted);
}

.progress-step.active .progress-label { color: var(--primary); font-weight: 600; }
.progress-step.completed .progress-label { color: var(--success); }

.booking-form-area {
  display: grid;
  grid-template-columns: 1fr 300px;
  gap: 2rem;
  align-items: start;
}

.booking-card {
  background: var(--white);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  padding: 2.5rem;
}

.booking-step h2 {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
}

.booking-step > p {
  color: var(--text-muted);
  margin-bottom: 2rem;
}

.option-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}

.option-grid.cols-4 { grid-template-columns: repeat(4, 1fr); }

.option-card {
  border: 2px solid var(--border);
  border-radius: var(--radius);
  padding: 1.5rem;
  cursor: pointer;
  transition: all var(--transition-fast);
  text-align: center;
}

.option-card:hover { border-color: var(--primary-light); }
.option-card.selected { border-color: var(--primary); background: rgba(33, 150, 243, 0.05); }

.option-icon {
  width: 40px;
  height: 40px;
  margin: 0 auto 0.75rem;
  color: var(--primary);
}

.option-card h4 { font-size: 0.95rem; margin-bottom: 0.25rem; color: var(--secondary); }
.option-card p { font-size: 0.8rem; color: var(--text-muted); margin: 0; }
.option-card.compact { padding: 1rem; }

.discount-tag {
  display: inline-block;
  font-family: var(--font-accent);
  font-size: 0.7rem;
  color: var(--primary);
  background: var(--accent);
  padding: 0.15rem 0.5rem;
  border-radius: 50px;
  margin-top: 0.25rem;
}

.addons-list { display: flex; flex-direction: column; gap: 0.75rem; }

.addon-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem 1.25rem;
  border: 2px solid var(--border);
  border-radius: var(--radius);
  cursor: pointer;
  transition: all var(--transition-fast);
}

.addon-item:hover { border-color: var(--primary-light); }
.addon-item.checked { border-color: var(--primary); background: rgba(33, 150, 243, 0.05); }

.addon-item input { accent-color: var(--primary); width: 18px; height: 18px; }
.addon-info { flex: 1; }
.addon-info strong { display: block; font-size: 0.9rem; color: var(--secondary); }
.addon-info span { font-size: 0.8rem; color: var(--text-muted); }
.addon-price { font-family: var(--font-accent); font-size: 0.9rem; color: var(--primary); font-weight: 700; }

.form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; }

.booking-actions {
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;
  gap: 1rem;
}

.booking-actions .btn { min-width: 140px; }

/* Summary */
.booking-summary {
  background: var(--bg-light);
  border-radius: var(--radius-lg);
  padding: 2rem;
  position: sticky;
  top: calc(var(--header-height) + 2rem);
}

.booking-summary h3 {
  font-size: 1.1rem;
  margin-bottom: 1.5rem;
  padding-bottom: 0.75rem;
  border-bottom: 1px solid var(--border);
}

.summary-row {
  display: flex;
  justify-content: space-between;
  padding: 0.4rem 0;
  font-size: 0.85rem;
}

.summary-row span:first-child { color: var(--text-muted); }
.summary-row span:last-child { font-weight: 500; color: var(--text); }

.summary-divider { height: 1px; background: var(--border); margin: 1rem 0; }

.summary-total {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.summary-total span:first-child { font-weight: 600; font-size: 0.95rem; }
.total-price { font-family: var(--font-accent); font-size: 1.5rem; font-weight: 700; color: var(--primary); }

.summary-note { font-size: 0.75rem; color: var(--text-muted); margin-top: 0.75rem; margin-bottom: 0; }

@media (max-width: 768px) {
  .booking-form-area { grid-template-columns: 1fr; }
  .option-grid.cols-4 { grid-template-columns: 1fr 1fr; }
  .form-row { grid-template-columns: 1fr; }
  .booking-progress { overflow-x: auto; gap: 0.5rem; }
  .progress-label { font-size: 0.65rem; }
  .booking-summary { position: static; }
}

@media (max-width: 480px) {
  .option-grid { grid-template-columns: 1fr; }
  .option-grid.cols-4 { grid-template-columns: 1fr; }
  .booking-card { padding: 1.5rem; }
}
</style>
