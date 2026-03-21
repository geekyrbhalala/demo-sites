<template>
  <main class="schedule-page">
    <!-- Hero -->
    <section class="page-hero">
      <div class="page-hero-overlay"></div>
      <div class="page-hero-content container">
        <h1>Class Schedule</h1>
        <p>Find the perfect time for your lessons. Filter by instrument and view weekly availability.</p>
      </div>
    </section>

    <!-- Schedule Section -->
    <section class="section">
      <div class="container">
        <ScrollReveal>
          <div class="schedule-header">
            <div class="semester-info">
              <h3>Spring Semester 2026</h3>
              <p>January 12 - May 29, 2026</p>
            </div>
            <div class="filter-bar">
              <label>Filter by Instrument:</label>
              <div class="filter-buttons">
                <button
                  v-for="f in filters"
                  :key="f"
                  class="filter-btn"
                  :class="{ active: activeFilter === f }"
                  @click="activeFilter = f"
                >{{ f }}</button>
              </div>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal :delay="100">
          <div class="calendar-wrapper">
            <div class="calendar-grid">
              <!-- Header Row -->
              <div class="cal-header time-col">Time</div>
              <div v-for="day in days" :key="day" class="cal-header">{{ day }}</div>

              <!-- Time Slots -->
              <template v-for="time in timeSlots" :key="time">
                <div class="cal-time">{{ time }}</div>
                <div v-for="day in days" :key="day + time" class="cal-cell">
                  <div
                    v-for="lesson in getLessons(day, time)"
                    :key="lesson.id"
                    class="lesson-block"
                    :class="[lesson.colorClass, { booked: lesson.booked }]"
                    @click="openDetail(lesson)"
                  >
                    <span class="lesson-name">{{ lesson.instrument }}</span>
                    <span class="lesson-type">{{ lesson.type }}</span>
                  </div>
                </div>
              </template>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal :delay="200">
          <div class="legend">
            <h4>Legend</h4>
            <div class="legend-items">
              <div class="legend-item"><span class="legend-dot piano"></span>Piano</div>
              <div class="legend-item"><span class="legend-dot guitar"></span>Guitar</div>
              <div class="legend-item"><span class="legend-dot violin"></span>Violin</div>
              <div class="legend-item"><span class="legend-dot drums"></span>Drums</div>
              <div class="legend-item"><span class="legend-dot voice"></span>Voice</div>
              <div class="legend-item"><span class="legend-dot theory"></span>Theory</div>
              <div class="legend-item"><span class="legend-dot booked-dot"></span>Booked</div>
              <div class="legend-item"><span class="legend-dot available-dot"></span>Available</div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>

    <!-- Detail Modal -->
    <Teleport to="body">
      <Transition name="modal">
        <div v-if="showDetail" class="detail-overlay" @click="showDetail = false">
          <div class="detail-modal" @click.stop>
            <button class="detail-close" @click="showDetail = false">&times;</button>
            <div class="detail-color-bar" :class="selectedLesson?.colorClass"></div>
            <h3>{{ selectedLesson?.instrument }} - {{ selectedLesson?.type }}</h3>
            <div class="detail-info">
              <p><strong>Day:</strong> {{ selectedLesson?.day }}</p>
              <p><strong>Time:</strong> {{ selectedLesson?.time }}</p>
              <p><strong>Instructor:</strong> {{ selectedLesson?.instructor }}</p>
              <p><strong>Level:</strong> {{ selectedLesson?.level }}</p>
              <p><strong>Duration:</strong> {{ selectedLesson?.duration }}</p>
              <p><strong>Status:</strong>
                <span :class="selectedLesson?.booked ? 'status-booked' : 'status-available'">
                  {{ selectedLesson?.booked ? 'Booked' : 'Available' }}
                </span>
              </p>
            </div>
            <router-link v-if="!selectedLesson?.booked" to="/contact" class="btn btn-primary" @click="showDetail = false">Book This Slot</router-link>
            <p v-else class="booked-note">This slot is currently booked. <router-link to="/contact">Contact us</router-link> for waitlist options.</p>
          </div>
        </div>
      </Transition>
    </Teleport>
  </main>
</template>

<script setup>
import { ref, computed } from 'vue'
import ScrollReveal from '../components/ScrollReveal.vue'

const activeFilter = ref('All')
const showDetail = ref(false)
const selectedLesson = ref(null)

const filters = ['All', 'Piano', 'Guitar', 'Violin', 'Drums', 'Voice', 'Theory']
const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
const timeSlots = ['9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM', '6:00 PM', '7:00 PM']

const allLessons = [
  { id: 1, day: 'Monday', time: '9:00 AM', instrument: 'Piano', type: 'Private', instructor: 'Dr. Elena Vasquez', level: 'Intermediate', duration: '60 min', booked: true, colorClass: 'piano' },
  { id: 2, day: 'Monday', time: '10:00 AM', instrument: 'Guitar', type: 'Group', instructor: 'Marcus Chen', level: 'Beginner', duration: '60 min', booked: false, colorClass: 'guitar' },
  { id: 3, day: 'Monday', time: '2:00 PM', instrument: 'Voice', type: 'Private', instructor: 'Priya Kapoor', level: 'Advanced', duration: '60 min', booked: true, colorClass: 'voice' },
  { id: 4, day: 'Monday', time: '4:00 PM', instrument: 'Violin', type: 'Private', instructor: 'Sofia Andersson', level: 'Beginner', duration: '30 min', booked: false, colorClass: 'violin' },
  { id: 5, day: 'Monday', time: '6:00 PM', instrument: 'Theory', type: 'Group', instructor: 'Dr. Elena Vasquez', level: 'Beginner', duration: '60 min', booked: false, colorClass: 'theory' },
  { id: 6, day: 'Tuesday', time: '9:00 AM', instrument: 'Violin', type: 'Private', instructor: 'Sofia Andersson', level: 'Advanced', duration: '60 min', booked: true, colorClass: 'violin' },
  { id: 7, day: 'Tuesday', time: '11:00 AM', instrument: 'Piano', type: 'Group', instructor: 'Dr. Elena Vasquez', level: 'Beginner', duration: '60 min', booked: false, colorClass: 'piano' },
  { id: 8, day: 'Tuesday', time: '1:00 PM', instrument: 'Drums', type: 'Private', instructor: 'Jamal Wright', level: 'Intermediate', duration: '60 min', booked: false, colorClass: 'drums' },
  { id: 9, day: 'Tuesday', time: '3:00 PM', instrument: 'Guitar', type: 'Private', instructor: 'Marcus Chen', level: 'Advanced', duration: '60 min', booked: true, colorClass: 'guitar' },
  { id: 10, day: 'Tuesday', time: '5:00 PM', instrument: 'Voice', type: 'Group', instructor: 'Priya Kapoor', level: 'Beginner', duration: '60 min', booked: false, colorClass: 'voice' },
  { id: 11, day: 'Wednesday', time: '10:00 AM', instrument: 'Piano', type: 'Private', instructor: 'Dr. Elena Vasquez', level: 'Advanced', duration: '60 min', booked: true, colorClass: 'piano' },
  { id: 12, day: 'Wednesday', time: '12:00 PM', instrument: 'Drums', type: 'Group', instructor: 'Jamal Wright', level: 'Beginner', duration: '60 min', booked: false, colorClass: 'drums' },
  { id: 13, day: 'Wednesday', time: '2:00 PM', instrument: 'Guitar', type: 'Private', instructor: 'Marcus Chen', level: 'Intermediate', duration: '60 min', booked: false, colorClass: 'guitar' },
  { id: 14, day: 'Wednesday', time: '4:00 PM', instrument: 'Theory', type: 'Group', instructor: 'Dr. Elena Vasquez', level: 'Intermediate', duration: '60 min', booked: false, colorClass: 'theory' },
  { id: 15, day: 'Wednesday', time: '7:00 PM', instrument: 'Voice', type: 'Private', instructor: 'Priya Kapoor', level: 'Intermediate', duration: '60 min', booked: true, colorClass: 'voice' },
  { id: 16, day: 'Thursday', time: '9:00 AM', instrument: 'Violin', type: 'Group', instructor: 'Sofia Andersson', level: 'Beginner', duration: '60 min', booked: false, colorClass: 'violin' },
  { id: 17, day: 'Thursday', time: '11:00 AM', instrument: 'Piano', type: 'Private', instructor: 'Dr. Elena Vasquez', level: 'Beginner', duration: '30 min', booked: false, colorClass: 'piano' },
  { id: 18, day: 'Thursday', time: '1:00 PM', instrument: 'Guitar', type: 'Group', instructor: 'Marcus Chen', level: 'Intermediate', duration: '60 min', booked: true, colorClass: 'guitar' },
  { id: 19, day: 'Thursday', time: '3:00 PM', instrument: 'Drums', type: 'Private', instructor: 'Jamal Wright', level: 'Advanced', duration: '60 min', booked: true, colorClass: 'drums' },
  { id: 20, day: 'Thursday', time: '5:00 PM', instrument: 'Voice', type: 'Private', instructor: 'Priya Kapoor', level: 'Advanced', duration: '60 min', booked: false, colorClass: 'voice' },
  { id: 21, day: 'Friday', time: '10:00 AM', instrument: 'Violin', type: 'Private', instructor: 'Sofia Andersson', level: 'Intermediate', duration: '60 min', booked: false, colorClass: 'violin' },
  { id: 22, day: 'Friday', time: '12:00 PM', instrument: 'Theory', type: 'Group', instructor: 'Dr. Elena Vasquez', level: 'Advanced', duration: '60 min', booked: false, colorClass: 'theory' },
  { id: 23, day: 'Friday', time: '2:00 PM', instrument: 'Piano', type: 'Private', instructor: 'Dr. Elena Vasquez', level: 'Intermediate', duration: '60 min', booked: true, colorClass: 'piano' },
  { id: 24, day: 'Friday', time: '4:00 PM', instrument: 'Drums', type: 'Private', instructor: 'Jamal Wright', level: 'Beginner', duration: '60 min', booked: false, colorClass: 'drums' },
  { id: 25, day: 'Saturday', time: '9:00 AM', instrument: 'Piano', type: 'Group', instructor: 'Dr. Elena Vasquez', level: 'Beginner', duration: '60 min', booked: false, colorClass: 'piano' },
  { id: 26, day: 'Saturday', time: '10:00 AM', instrument: 'Guitar', type: 'Group', instructor: 'Marcus Chen', level: 'Beginner', duration: '60 min', booked: false, colorClass: 'guitar' },
  { id: 27, day: 'Saturday', time: '11:00 AM', instrument: 'Violin', type: 'Group', instructor: 'Sofia Andersson', level: 'Intermediate', duration: '60 min', booked: true, colorClass: 'violin' },
  { id: 28, day: 'Saturday', time: '1:00 PM', instrument: 'Voice', type: 'Group', instructor: 'Priya Kapoor', level: 'All Levels', duration: '90 min', booked: false, colorClass: 'voice' },
  { id: 29, day: 'Saturday', time: '3:00 PM', instrument: 'Drums', type: 'Group', instructor: 'Jamal Wright', level: 'All Levels', duration: '60 min', booked: false, colorClass: 'drums' },
]

const filteredLessons = computed(() => {
  if (activeFilter.value === 'All') return allLessons
  return allLessons.filter(l => l.instrument === activeFilter.value)
})

const getLessons = (day, time) => {
  return filteredLessons.value.filter(l => l.day === day && l.time === time)
}

const openDetail = (lesson) => {
  selectedLesson.value = lesson
  showDetail.value = true
}
</script>

<style scoped>
.page-hero {
  position: relative;
  padding: 160px 0 100px;
  background: url('https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=1920') center/cover no-repeat;
  color: var(--white);
  text-align: center;
}

.page-hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(74, 20, 140, 0.85), rgba(55, 71, 79, 0.85));
}

.page-hero-content {
  position: relative;
  z-index: 2;
}

.page-hero h1 {
  font-size: 3.5rem;
  margin-bottom: 16px;
}

.page-hero p {
  font-size: 1.2rem;
  opacity: 0.9;
  max-width: 560px;
  margin: 0 auto;
}

.schedule-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  flex-wrap: wrap;
  gap: 20px;
  margin-bottom: 32px;
}

.semester-info h3 {
  font-size: 1.4rem;
  color: var(--primary);
}

.semester-info p {
  font-family: var(--font-accent);
  font-size: 0.85rem;
  color: var(--text-light);
}

.filter-bar label {
  display: block;
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--text-light);
  margin-bottom: 8px;
}

.filter-buttons {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}

.filter-btn {
  padding: 6px 16px;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 500;
  background: var(--white);
  color: var(--text);
  border: 1.5px solid #e0e0e0;
  cursor: pointer;
  transition: all var(--transition);
}

.filter-btn:hover {
  border-color: var(--primary);
  color: var(--primary);
}

.filter-btn.active {
  background: var(--primary);
  color: var(--white);
  border-color: var(--primary);
}

.calendar-wrapper {
  overflow-x: auto;
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-sm);
  background: var(--white);
}

.calendar-grid {
  display: grid;
  grid-template-columns: 100px repeat(6, 1fr);
  min-width: 900px;
}

.cal-header {
  padding: 14px 8px;
  font-weight: 700;
  font-size: 0.85rem;
  text-align: center;
  background: var(--primary);
  color: var(--white);
  font-family: var(--font-body);
  border-right: 1px solid rgba(255, 255, 255, 0.15);
}

.cal-header.time-col {
  font-family: var(--font-accent);
  font-size: 0.8rem;
}

.cal-time {
  padding: 10px 8px;
  font-family: var(--font-accent);
  font-size: 0.75rem;
  color: var(--text-light);
  text-align: center;
  border-bottom: 1px solid #f0f0f0;
  border-right: 1px solid #f0f0f0;
  background: #fafafa;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 52px;
}

.cal-cell {
  padding: 4px;
  border-bottom: 1px solid #f0f0f0;
  border-right: 1px solid #f0f0f0;
  min-height: 52px;
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.lesson-block {
  padding: 4px 8px;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s ease;
  border-left: 3px solid;
  font-size: 0.75rem;
}

.lesson-block:hover {
  transform: scale(1.02);
  box-shadow: var(--shadow-sm);
}

.lesson-block.piano { background: rgba(74, 20, 140, 0.1); border-color: var(--primary); }
.lesson-block.guitar { background: rgba(255, 179, 0, 0.12); border-color: var(--secondary); }
.lesson-block.violin { background: rgba(194, 24, 91, 0.1); border-color: var(--accent); }
.lesson-block.drums { background: rgba(55, 71, 79, 0.1); border-color: var(--slate); }
.lesson-block.voice { background: rgba(106, 27, 154, 0.1); border-color: var(--primary-light); }
.lesson-block.theory { background: rgba(0, 150, 136, 0.1); border-color: #009688; }

.lesson-block.booked {
  opacity: 0.55;
}

.lesson-name {
  display: block;
  font-weight: 600;
  font-size: 0.72rem;
}

.lesson-type {
  font-size: 0.65rem;
  opacity: 0.7;
}

.legend {
  margin-top: 24px;
  padding: 20px;
  background: var(--white);
  border-radius: var(--radius);
  box-shadow: var(--shadow-sm);
}

.legend h4 {
  font-size: 0.9rem;
  color: var(--text);
  margin-bottom: 12px;
}

.legend-items {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
}

.legend-item {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 0.82rem;
  color: var(--text-light);
}

.legend-dot {
  width: 12px;
  height: 12px;
  border-radius: 3px;
}

.legend-dot.piano { background: var(--primary); }
.legend-dot.guitar { background: var(--secondary); }
.legend-dot.violin { background: var(--accent); }
.legend-dot.drums { background: var(--slate); }
.legend-dot.voice { background: var(--primary-light); }
.legend-dot.theory { background: #009688; }
.legend-dot.booked-dot { background: #ccc; }
.legend-dot.available-dot { background: #4caf50; }

/* Detail Modal */
.detail-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  padding: 20px;
  backdrop-filter: blur(4px);
}

.detail-modal {
  background: var(--white);
  border-radius: var(--radius-lg);
  padding: 32px;
  max-width: 400px;
  width: 100%;
  position: relative;
  animation: scaleIn 0.3s ease;
}

.detail-close {
  position: absolute;
  top: 12px;
  right: 12px;
  background: none;
  border: none;
  font-size: 1.5rem;
  color: var(--text-light);
  cursor: pointer;
}

.detail-color-bar {
  height: 4px;
  border-radius: 2px;
  margin-bottom: 20px;
}

.detail-color-bar.piano { background: var(--primary); }
.detail-color-bar.guitar { background: var(--secondary); }
.detail-color-bar.violin { background: var(--accent); }
.detail-color-bar.drums { background: var(--slate); }
.detail-color-bar.voice { background: var(--primary-light); }
.detail-color-bar.theory { background: #009688; }

.detail-modal h3 {
  font-family: var(--font-heading);
  font-size: 1.3rem;
  color: var(--primary);
  margin-bottom: 16px;
}

.detail-info p {
  font-size: 0.92rem;
  color: var(--text);
  margin-bottom: 8px;
}

.detail-info p strong {
  color: var(--text);
  min-width: 90px;
  display: inline-block;
}

.status-available {
  color: #4caf50;
  font-weight: 600;
}

.status-booked {
  color: var(--accent);
  font-weight: 600;
}

.detail-info {
  margin-bottom: 24px;
}

.booked-note {
  font-size: 0.9rem;
  color: var(--text-light);
  text-align: center;
  margin-top: 8px;
}

.booked-note a {
  color: var(--primary);
  font-weight: 600;
}

.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

@media (max-width: 768px) {
  .page-hero {
    padding: 120px 0 60px;
  }

  .page-hero h1 {
    font-size: 2.5rem;
  }

  .schedule-header {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>
