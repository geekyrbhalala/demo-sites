<script setup>
import { ref, computed } from 'vue'
import Modal from '../components/Modal.vue'
import ScrollReveal from '../components/ScrollReveal.vue'

const step = ref(1)
const showModal = ref(false)
const referenceNumber = ref('')

const vehicleTypes = [
  { id: 'sedan', label: 'Sedan', icon: 'M4,16 L4,12 C4,10 6,8 10,8 L14,6 C16,4 22,4 24,6 L28,8 C32,8 34,10 34,12 L34,16 M8,16 A2,2 0 1,0 12,16 A2,2 0 1,0 8,16 M26,16 A2,2 0 1,0 30,16 A2,2 0 1,0 26,16' },
  { id: 'suv', label: 'SUV', icon: 'M4,16 L4,10 C4,8 6,6 10,6 L14,4 C16,2 22,2 24,4 L28,6 C32,6 34,8 34,10 L34,16 M8,16 A2.5,2.5 0 1,0 13,16 A2.5,2.5 0 1,0 8,16 M25,16 A2.5,2.5 0 1,0 30,16 A2.5,2.5 0 1,0 25,16' },
  { id: 'truck', label: 'Truck', icon: 'M2,16 L2,10 L18,10 L18,6 C18,4 20,2 22,2 L30,2 C32,2 34,4 34,6 L34,16 M6,16 A2,2 0 1,0 10,16 A2,2 0 1,0 6,16 M28,16 A2,2 0 1,0 32,16 A2,2 0 1,0 28,16' },
  { id: 'van', label: 'Van', icon: 'M4,16 L4,8 C4,6 6,4 8,4 L24,4 C28,4 32,6 34,10 L34,16 M8,16 A2,2 0 1,0 12,16 A2,2 0 1,0 8,16 M26,16 A2,2 0 1,0 30,16 A2,2 0 1,0 26,16' },
  { id: 'luxury', label: 'Luxury', icon: 'M3,16 L3,12 C3,10 5,8 9,8 L13,5 C16,3 22,3 25,5 L29,8 C33,8 35,10 35,12 L35,16 M7,16 A2,2 0 1,0 11,16 A2,2 0 1,0 7,16 M27,16 A2,2 0 1,0 31,16 A2,2 0 1,0 27,16 M15,8 L15,12 M23,8 L23,12' }
]

const packageOptions = [
  { id: 'essential', name: 'Essential', price: 49 },
  { id: 'premium', name: 'Premium', price: 149 },
  { id: 'ultimate', name: 'Ultimate Ceramic', price: 399 }
]

const addOnOptions = [
  { id: 'trim', name: 'Trim Restoration', price: 30 },
  { id: 'rain', name: 'Rain Repellent', price: 25 },
  { id: 'tire', name: 'Tire Dressing', price: 15 },
  { id: 'door', name: 'Door Jamb Detail', price: 20 },
  { id: 'exhaust', name: 'Exhaust Tip Polish', price: 25 },
  { id: 'odor', name: 'Odor Elimination', price: 75 }
]

const form = ref({
  vehicleType: '',
  selectedPackage: '',
  addOns: [],
  serviceType: 'mobile',
  address: '',
  date: '',
  time: '',
  name: '',
  email: '',
  phone: '',
  carMake: '',
  carModel: '',
  carYear: '',
  carColor: ''
})

const errors = ref({})

const selectedPackagePrice = computed(() => {
  const pkg = packageOptions.find(p => p.id === form.value.selectedPackage)
  return pkg ? pkg.price : 0
})

const addOnsTotal = computed(() => {
  return form.value.addOns.reduce((sum, id) => {
    const addon = addOnOptions.find(a => a.id === id)
    return sum + (addon ? addon.price : 0)
  }, 0)
})

const totalPrice = computed(() => {
  let base = selectedPackagePrice.value
  if (form.value.vehicleType === 'suv' || form.value.vehicleType === 'truck') base += 20
  if (form.value.vehicleType === 'van') base += 30
  if (form.value.vehicleType === 'luxury') base += 40
  return base + addOnsTotal.value
})

function toggleAddOn(id) {
  const idx = form.value.addOns.indexOf(id)
  if (idx > -1) {
    form.value.addOns.splice(idx, 1)
  } else {
    form.value.addOns.push(id)
  }
}

function validateStep() {
  const errs = {}
  if (step.value === 1 && !form.value.vehicleType) {
    errs.vehicleType = 'Please select a vehicle type'
  }
  if (step.value === 2 && !form.value.selectedPackage) {
    errs.selectedPackage = 'Please select a package'
  }
  if (step.value === 4 && form.value.serviceType === 'mobile' && !form.value.address.trim()) {
    errs.address = 'Please enter your address'
  }
  if (step.value === 5) {
    if (!form.value.date) errs.date = 'Please select a date'
    if (!form.value.time) errs.time = 'Please select a time'
  }
  if (step.value === 6) {
    if (!form.value.name.trim()) errs.name = 'Name is required'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.value.email)) errs.email = 'Invalid email'
    if (!form.value.phone.trim() || !/^[\d\s\-\+\(\)]{7,}$/.test(form.value.phone)) errs.phone = 'Valid phone required'
    if (!form.value.carMake.trim()) errs.carMake = 'Car make is required'
    if (!form.value.carModel.trim()) errs.carModel = 'Car model is required'
  }
  errors.value = errs
  return Object.keys(errs).length === 0
}

function nextStep() {
  if (validateStep()) {
    if (step.value < 6) {
      step.value++
    } else {
      referenceNumber.value = 'APX-' + Math.random().toString(36).substring(2, 8).toUpperCase()
      showModal.value = true
    }
  }
}

function prevStep() {
  if (step.value > 1) step.value--
}

function closeModal() {
  showModal.value = false
  step.value = 1
  form.value = {
    vehicleType: '', selectedPackage: '', addOns: [], serviceType: 'mobile',
    address: '', date: '', time: '', name: '', email: '', phone: '',
    carMake: '', carModel: '', carYear: '', carColor: ''
  }
}

const timeSlots = [
  '8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM',
  '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM'
]
</script>

<template>
  <main class="booking-page">
    <section class="page-hero">
      <div class="page-hero-bg">
        <img src="https://images.unsplash.com/photo-1601362840469-51e4d8d58785?w=1920" alt="Car detail" />
        <div class="page-hero-overlay"></div>
      </div>
      <div class="page-hero-content container">
        <h1>Book Your Detail</h1>
        <p>Schedule your appointment in just a few steps</p>
      </div>
    </section>

    <section class="section">
      <div class="container booking-layout">
        <div class="booking-main">
          <!-- Progress -->
          <div class="progress-bar">
            <div v-for="s in 6" :key="s" class="progress-step" :class="{ active: s <= step, current: s === step }">
              <div class="step-circle">{{ s }}</div>
              <span class="step-label">{{ ['Vehicle', 'Package', 'Add-Ons', 'Location', 'Schedule', 'Details'][s - 1] }}</span>
            </div>
          </div>

          <!-- Step 1: Vehicle Type -->
          <div v-if="step === 1" class="step-content">
            <h2>Select Your Vehicle Type</h2>
            <p class="step-desc">Vehicle type affects pricing. Larger vehicles require more time and materials.</p>
            <div class="vehicle-grid">
              <button
                v-for="vt in vehicleTypes"
                :key="vt.id"
                class="vehicle-btn glossy-card"
                :class="{ selected: form.vehicleType === vt.id }"
                @click="form.vehicleType = vt.id; errors.vehicleType = ''"
              >
                <svg viewBox="0 0 38 20" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                  <path :d="vt.icon" />
                </svg>
                <span>{{ vt.label }}</span>
              </button>
            </div>
            <span v-if="errors.vehicleType" class="error-message">{{ errors.vehicleType }}</span>
          </div>

          <!-- Step 2: Package -->
          <div v-if="step === 2" class="step-content">
            <h2>Choose Your Package</h2>
            <p class="step-desc">Select the level of service for your vehicle.</p>
            <div class="package-select-grid">
              <button
                v-for="pkg in packageOptions"
                :key="pkg.id"
                class="package-select-card glossy-card"
                :class="{ selected: form.selectedPackage === pkg.id }"
                @click="form.selectedPackage = pkg.id; errors.selectedPackage = ''"
              >
                <h3>{{ pkg.name }}</h3>
                <span class="price pkg-sel-price">${{ pkg.price }}</span>
              </button>
            </div>
            <span v-if="errors.selectedPackage" class="error-message">{{ errors.selectedPackage }}</span>
          </div>

          <!-- Step 3: Add-Ons -->
          <div v-if="step === 3" class="step-content">
            <h2>Select Add-Ons</h2>
            <p class="step-desc">Optional extras to enhance your detail. Skip if none needed.</p>
            <div class="addons-check-grid">
              <label
                v-for="addon in addOnOptions"
                :key="addon.id"
                class="addon-check glossy-card"
                :class="{ selected: form.addOns.includes(addon.id) }"
              >
                <input type="checkbox" :checked="form.addOns.includes(addon.id)" @change="toggleAddOn(addon.id)" />
                <span class="addon-check-name">{{ addon.name }}</span>
                <span class="addon-check-price price">+${{ addon.price }}</span>
              </label>
            </div>
          </div>

          <!-- Step 4: Location -->
          <div v-if="step === 4" class="step-content">
            <h2>Service Location</h2>
            <p class="step-desc">Choose between mobile service at your location or drop-off at our shop.</p>
            <div class="location-toggle">
              <button
                class="loc-btn"
                :class="{ active: form.serviceType === 'mobile' }"
                @click="form.serviceType = 'mobile'"
              >
                <span class="loc-icon">&#128663;</span>
                Mobile Service
              </button>
              <button
                class="loc-btn"
                :class="{ active: form.serviceType === 'dropoff' }"
                @click="form.serviceType = 'dropoff'"
              >
                <span class="loc-icon">&#127970;</span>
                Drop-Off at Shop
              </button>
            </div>
            <div v-if="form.serviceType === 'mobile'" class="form-group" style="margin-top: 24px;">
              <label>Your Address</label>
              <input
                type="text"
                v-model="form.address"
                placeholder="Enter your full address"
                :class="{ error: errors.address }"
                @input="errors.address = ''"
              />
              <span v-if="errors.address" class="error-message">{{ errors.address }}</span>
            </div>
            <div v-else class="shop-info">
              <h3>Apex Auto Detail Shop</h3>
              <p>1234 Motor Drive, Suite 100<br/>Autoville, CA 90210</p>
              <p class="shop-note">Drop your car off during business hours. We will text you when it is ready.</p>
            </div>
          </div>

          <!-- Step 5: Date & Time -->
          <div v-if="step === 5" class="step-content">
            <h2>Pick Date & Time</h2>
            <p class="step-desc">Select your preferred appointment date and time slot.</p>
            <div class="datetime-grid">
              <div class="form-group">
                <label>Preferred Date</label>
                <input
                  type="date"
                  v-model="form.date"
                  :class="{ error: errors.date }"
                  @input="errors.date = ''"
                />
                <span v-if="errors.date" class="error-message">{{ errors.date }}</span>
              </div>
              <div class="form-group">
                <label>Preferred Time</label>
                <select
                  v-model="form.time"
                  :class="{ error: errors.time }"
                  @change="errors.time = ''"
                >
                  <option value="" disabled>Select a time</option>
                  <option v-for="t in timeSlots" :key="t" :value="t">{{ t }}</option>
                </select>
                <span v-if="errors.time" class="error-message">{{ errors.time }}</span>
              </div>
            </div>
          </div>

          <!-- Step 6: Personal Info -->
          <div v-if="step === 6" class="step-content">
            <h2>Your Details</h2>
            <p class="step-desc">Almost done. Tell us about yourself and your vehicle.</p>
            <div class="details-form">
              <div class="form-row">
                <div class="form-group">
                  <label>Full Name *</label>
                  <input type="text" v-model="form.name" :class="{ error: errors.name }" @input="errors.name = ''" placeholder="John Doe" />
                  <span v-if="errors.name" class="error-message">{{ errors.name }}</span>
                </div>
                <div class="form-group">
                  <label>Email *</label>
                  <input type="email" v-model="form.email" :class="{ error: errors.email }" @input="errors.email = ''" placeholder="john@example.com" />
                  <span v-if="errors.email" class="error-message">{{ errors.email }}</span>
                </div>
              </div>
              <div class="form-group">
                <label>Phone *</label>
                <input type="tel" v-model="form.phone" :class="{ error: errors.phone }" @input="errors.phone = ''" placeholder="(555) 123-4567" />
                <span v-if="errors.phone" class="error-message">{{ errors.phone }}</span>
              </div>
              <h3 class="sub-heading">Vehicle Information</h3>
              <div class="form-row">
                <div class="form-group">
                  <label>Make *</label>
                  <input type="text" v-model="form.carMake" :class="{ error: errors.carMake }" @input="errors.carMake = ''" placeholder="BMW" />
                  <span v-if="errors.carMake" class="error-message">{{ errors.carMake }}</span>
                </div>
                <div class="form-group">
                  <label>Model *</label>
                  <input type="text" v-model="form.carModel" :class="{ error: errors.carModel }" @input="errors.carModel = ''" placeholder="M4 Competition" />
                  <span v-if="errors.carModel" class="error-message">{{ errors.carModel }}</span>
                </div>
              </div>
              <div class="form-row">
                <div class="form-group">
                  <label>Year</label>
                  <input type="text" v-model="form.carYear" placeholder="2024" />
                </div>
                <div class="form-group">
                  <label>Color</label>
                  <input type="text" v-model="form.carColor" placeholder="Black Sapphire Metallic" />
                </div>
              </div>
            </div>
          </div>

          <!-- Navigation Buttons -->
          <div class="step-nav">
            <button v-if="step > 1" class="btn btn-outline" @click="prevStep">Back</button>
            <div v-else></div>
            <button class="btn btn-primary" @click="nextStep">
              {{ step === 6 ? 'Confirm Booking' : 'Next Step' }}
            </button>
          </div>
        </div>

        <!-- Sidebar -->
        <aside class="booking-sidebar">
          <div class="sidebar-card glossy-card">
            <h3 class="sidebar-title">Booking Summary</h3>
            <div class="summary-item" v-if="form.vehicleType">
              <span>Vehicle</span>
              <span>{{ vehicleTypes.find(v => v.id === form.vehicleType)?.label }}</span>
            </div>
            <div class="summary-item" v-if="form.selectedPackage">
              <span>Package</span>
              <span>{{ packageOptions.find(p => p.id === form.selectedPackage)?.name }}</span>
            </div>
            <div class="summary-item" v-if="form.selectedPackage">
              <span>Base Price</span>
              <span class="price">${{ selectedPackagePrice }}</span>
            </div>
            <div class="summary-item" v-if="form.vehicleType === 'suv' || form.vehicleType === 'truck'">
              <span>Size Surcharge</span>
              <span class="price">+$20</span>
            </div>
            <div class="summary-item" v-if="form.vehicleType === 'van'">
              <span>Size Surcharge</span>
              <span class="price">+$30</span>
            </div>
            <div class="summary-item" v-if="form.vehicleType === 'luxury'">
              <span>Luxury Surcharge</span>
              <span class="price">+$40</span>
            </div>
            <div v-for="addon in form.addOns" :key="addon" class="summary-item">
              <span>{{ addOnOptions.find(a => a.id === addon)?.name }}</span>
              <span class="price">+${{ addOnOptions.find(a => a.id === addon)?.price }}</span>
            </div>
            <div class="summary-item" v-if="form.serviceType">
              <span>Service Type</span>
              <span>{{ form.serviceType === 'mobile' ? 'Mobile' : 'Drop-Off' }}</span>
            </div>
            <div class="summary-item" v-if="form.date">
              <span>Date</span>
              <span>{{ form.date }}</span>
            </div>
            <div class="summary-item" v-if="form.time">
              <span>Time</span>
              <span>{{ form.time }}</span>
            </div>
            <div class="summary-total" v-if="form.selectedPackage">
              <span>Total</span>
              <span class="total-price price">${{ totalPrice }}</span>
            </div>
          </div>
        </aside>
      </div>
    </section>

    <Modal
      :isOpen="showModal"
      title="Booking Confirmed!"
      :message="'Your reference number is ' + referenceNumber + '. We will send a confirmation to your email shortly.'"
      @close="closeModal"
    />
  </main>
</template>

<style scoped>
.page-hero {
  position: relative;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.page-hero-bg {
  position: absolute;
  inset: 0;
}

.page-hero-bg img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.page-hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.85) 100%);
}

.page-hero-content {
  position: relative;
  text-align: center;
  z-index: 2;
}

.page-hero-content h1 {
  font-size: 3.5rem;
  text-transform: uppercase;
  letter-spacing: 4px;
  margin-bottom: 12px;
}

.page-hero-content p {
  color: var(--silver);
  font-size: 1.2rem;
}

.booking-layout {
  display: grid;
  grid-template-columns: 1fr 320px;
  gap: 40px;
  align-items: start;
}

.progress-bar {
  display: flex;
  justify-content: space-between;
  margin-bottom: 48px;
  position: relative;
}

.progress-bar::before {
  content: '';
  position: absolute;
  top: 18px;
  left: 30px;
  right: 30px;
  height: 2px;
  background: var(--border);
}

.progress-step {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  position: relative;
  z-index: 1;
}

.step-circle {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: var(--carbon);
  border: 2px solid var(--border);
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--font-accent);
  font-size: 0.8rem;
  color: var(--text-muted);
  transition: var(--transition);
}

.progress-step.active .step-circle {
  background: var(--primary);
  border-color: var(--primary);
  color: var(--white);
}

.progress-step.current .step-circle {
  box-shadow: 0 0 15px rgba(0, 102, 255, 0.5);
}

.step-label {
  font-size: 0.7rem;
  color: var(--text-muted);
  text-transform: uppercase;
  letter-spacing: 0.5px;
  font-family: var(--font-heading);
}

.progress-step.active .step-label {
  color: var(--silver);
}

.step-content h2 {
  font-size: 1.8rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-bottom: 8px;
}

.step-desc {
  color: var(--text-muted);
  margin-bottom: 28px;
}

.vehicle-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 12px;
}

.vehicle-btn {
  padding: 24px 12px;
  text-align: center;
  cursor: pointer;
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  color: var(--silver);
  transition: var(--transition);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
}

.vehicle-btn svg {
  width: 60px;
  height: 32px;
  color: var(--silver);
  transition: color 0.2s;
}

.vehicle-btn span {
  font-family: var(--font-heading);
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.vehicle-btn.selected,
.vehicle-btn:hover {
  border-color: var(--primary);
  box-shadow: var(--shadow-glow);
}

.vehicle-btn.selected svg {
  color: var(--primary);
}

.package-select-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
}

.package-select-card {
  padding: 28px 20px;
  text-align: center;
  cursor: pointer;
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  color: var(--white);
  transition: var(--transition);
}

.package-select-card h3 {
  font-size: 1.1rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 8px;
}

.pkg-sel-price {
  font-size: 2rem;
  font-weight: 700;
  color: var(--silver);
}

.package-select-card.selected,
.package-select-card:hover {
  border-color: var(--primary);
  box-shadow: var(--shadow-glow);
}

.package-select-card.selected .pkg-sel-price {
  color: var(--primary);
}

.addons-check-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
}

.addon-check {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px 20px;
  cursor: pointer;
  transition: var(--transition);
}

.addon-check input {
  width: 18px;
  height: 18px;
  accent-color: var(--primary);
  cursor: pointer;
}

.addon-check-name {
  flex: 1;
  color: var(--silver);
  font-size: 0.9rem;
}

.addon-check-price {
  color: var(--primary);
  font-size: 0.85rem;
}

.addon-check.selected {
  border-color: var(--primary);
}

.location-toggle {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
}

.loc-btn {
  padding: 28px 20px;
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  color: var(--silver);
  font-family: var(--font-heading);
  font-size: 1rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  cursor: pointer;
  transition: var(--transition);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
}

.loc-icon {
  font-size: 2rem;
}

.loc-btn:hover,
.loc-btn.active {
  border-color: var(--primary);
  box-shadow: var(--shadow-glow);
  color: var(--white);
}

.shop-info {
  margin-top: 24px;
  padding: 24px;
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius);
}

.shop-info h3 {
  margin-bottom: 8px;
  font-size: 1.1rem;
}

.shop-info p {
  color: var(--text-muted);
  line-height: 1.6;
}

.shop-note {
  margin-top: 12px;
  color: var(--primary) !important;
  font-size: 0.85rem;
}

.datetime-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}

.details-form .sub-heading {
  font-size: 1.1rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin: 24px 0 16px;
  padding-top: 24px;
  border-top: 1px solid var(--border);
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
}

.step-nav {
  display: flex;
  justify-content: space-between;
  margin-top: 36px;
  padding-top: 24px;
  border-top: 1px solid var(--border);
}

.error-message {
  color: #ff4444;
  font-size: 0.8rem;
  margin-top: 8px;
  display: block;
}

/* Sidebar */
.sidebar-card {
  padding: 28px 24px;
  position: sticky;
  top: 100px;
}

.sidebar-title {
  font-size: 1.1rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 20px;
  padding-bottom: 12px;
  border-bottom: 1px solid var(--border);
}

.summary-item {
  display: flex;
  justify-content: space-between;
  padding: 8px 0;
  font-size: 0.9rem;
  color: var(--text-muted);
}

.summary-item span:last-child {
  color: var(--silver);
  font-weight: 500;
}

.summary-total {
  display: flex;
  justify-content: space-between;
  padding: 16px 0 0;
  margin-top: 12px;
  border-top: 1px solid var(--border);
  font-weight: 600;
  font-size: 1rem;
  color: var(--white);
}

.total-price {
  font-size: 1.4rem;
  color: var(--primary);
}

@media (max-width: 768px) {
  .page-hero { height: 280px; }
  .page-hero-content h1 { font-size: 2.2rem; }

  .booking-layout {
    grid-template-columns: 1fr;
  }

  .booking-sidebar {
    order: -1;
  }

  .sidebar-card {
    position: static;
  }

  .vehicle-grid {
    grid-template-columns: repeat(3, 1fr);
  }

  .package-select-grid {
    grid-template-columns: 1fr;
  }

  .addons-check-grid {
    grid-template-columns: 1fr;
  }

  .progress-bar {
    overflow-x: auto;
    gap: 4px;
    padding-bottom: 8px;
  }

  .step-label {
    font-size: 0.6rem;
    white-space: nowrap;
  }

  .form-row {
    grid-template-columns: 1fr;
  }

  .datetime-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 480px) {
  .page-hero-content h1 { font-size: 1.8rem; }

  .vehicle-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .location-toggle {
    grid-template-columns: 1fr;
  }
}
</style>
