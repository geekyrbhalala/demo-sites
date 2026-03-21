<template>
  <div class="admin-layout">
    <!-- Sidebar -->
    <aside class="sidebar">
      <div class="sidebar-logo">
        <svg viewBox="0 0 40 40" width="32" height="32">
          <path d="M20 2C20 2 14 8 14 18C14 24 16 28 18 30C18 34 16 36 16 36C16 36 18 38 20 38C22 38 24 36 24 36C24 36 22 34 22 30C24 28 26 24 26 18C26 8 20 2 20 2Z" fill="currentColor" opacity="0.9"/>
          <circle cx="18" cy="32" r="3" fill="currentColor"/>
          <path d="M22 8V22" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round"/>
          <path d="M22 8C22 8 28 10 28 14C28 18 22 16 22 16" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round"/>
        </svg>
        <div>
          <span class="sidebar-name">Harmony</span>
          <span class="sidebar-sub">Admin Panel</span>
        </div>
      </div>

      <nav class="sidebar-nav">
        <a href="#" :class="{ active: activeTab === 'dashboard' }" @click.prevent="activeTab = 'dashboard'">
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/></svg>
          Dashboard
        </a>
        <a href="#" :class="{ active: activeTab === 'students' }" @click.prevent="activeTab = 'students'">
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
          Students
        </a>
        <a href="#" :class="{ active: activeTab === 'schedule' }" @click.prevent="activeTab = 'schedule'">
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
          Schedule
        </a>
        <a href="#" :class="{ active: activeTab === 'revenue' }" @click.prevent="activeTab = 'revenue'">
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
          Revenue
        </a>
        <a href="#" :class="{ active: activeTab === 'recitals' }" @click.prevent="activeTab = 'recitals'">
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
          Recitals
        </a>
      </nav>

      <div class="sidebar-footer">
        <router-link to="/" class="sidebar-back">
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>
          Back to Website
        </router-link>
      </div>
    </aside>

    <!-- Main Content -->
    <main class="admin-main">
      <div class="admin-header">
        <div>
          <h1>Dashboard</h1>
          <p class="admin-date">{{ currentDate }}</p>
        </div>
        <div class="admin-actions">
          <div class="search-box">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
            <input type="text" placeholder="Search students..." />
          </div>
          <div class="admin-profile">
            <div class="profile-avatar">EV</div>
            <span>Dr. Vasquez</span>
          </div>
        </div>
      </div>

      <!-- KPI Cards -->
      <div class="kpi-grid">
        <div v-for="kpi in kpis" :key="kpi.label" class="kpi-card">
          <div class="kpi-icon" :style="{ background: kpi.bg }" v-html="kpi.icon"></div>
          <div class="kpi-info">
            <span class="kpi-value">{{ kpi.value }}</span>
            <span class="kpi-label">{{ kpi.label }}</span>
          </div>
          <span class="kpi-trend" :class="kpi.trendClass">{{ kpi.trend }}</span>
        </div>
      </div>

      <div class="admin-grid">
        <!-- Student Enrollment Table -->
        <div class="admin-card table-card">
          <div class="card-header">
            <h3>Recent Enrollments</h3>
            <button class="btn btn-outline" style="font-size:0.8rem;padding:6px 14px;">View All</button>
          </div>
          <div class="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>Student</th>
                  <th>Instrument</th>
                  <th>Level</th>
                  <th>Instructor</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="student in students" :key="student.name">
                  <td>
                    <div class="student-cell">
                      <div class="student-avatar" :style="{ background: student.color }">{{ student.initials }}</div>
                      <div>
                        <strong>{{ student.name }}</strong>
                        <span>{{ student.email }}</span>
                      </div>
                    </div>
                  </td>
                  <td>{{ student.instrument }}</td>
                  <td><span class="level-badge">{{ student.level }}</span></td>
                  <td>{{ student.instructor }}</td>
                  <td><span class="status-badge" :class="student.statusClass">{{ student.status }}</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <!-- Revenue Chart -->
        <div class="admin-card chart-card">
          <div class="card-header">
            <h3>Revenue by Instrument</h3>
            <span class="chart-period">Monthly</span>
          </div>
          <div class="chart-area">
            <div v-for="bar in chartData" :key="bar.label" class="chart-bar-group">
              <div class="chart-bar-wrapper">
                <div class="chart-bar" :style="{ height: bar.height + '%', background: bar.color }">
                  <span class="chart-tooltip">{{ bar.value }}</span>
                </div>
              </div>
              <span class="chart-label">{{ bar.label }}</span>
            </div>
          </div>
        </div>
      </div>

      <div class="admin-grid bottom-grid">
        <!-- Lesson Schedule Overview -->
        <div class="admin-card">
          <div class="card-header">
            <h3>Today's Lessons</h3>
            <span class="card-badge">8 scheduled</span>
          </div>
          <div class="lessons-list">
            <div v-for="lesson in todayLessons" :key="lesson.time" class="lesson-row">
              <span class="lesson-time">{{ lesson.time }}</span>
              <div class="lesson-details">
                <strong>{{ lesson.student }}</strong>
                <span>{{ lesson.instrument }} with {{ lesson.instructor }}</span>
              </div>
              <span class="lesson-status" :class="lesson.statusClass">{{ lesson.status }}</span>
            </div>
          </div>
        </div>

        <!-- Upcoming Recital Registrations -->
        <div class="admin-card">
          <div class="card-header">
            <h3>Recital Registrations</h3>
            <span class="card-badge">Spring Recital</span>
          </div>
          <div class="recital-list">
            <div v-for="reg in recitalRegs" :key="reg.name" class="recital-row">
              <div class="recital-performer">
                <div class="performer-avatar" :style="{ background: reg.color }">{{ reg.initials }}</div>
                <div>
                  <strong>{{ reg.name }}</strong>
                  <span>{{ reg.piece }}</span>
                </div>
              </div>
              <span class="recital-instrument">{{ reg.instrument }}</span>
            </div>
          </div>
          <div class="recital-summary">
            <span>Total registered: <strong>32 performers</strong></span>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const activeTab = ref('dashboard')
const currentDate = new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })

const kpis = [
  {
    label: 'Active Students', value: '456', trend: '+12 this month', trendClass: 'positive',
    bg: 'rgba(74, 20, 140, 0.1)',
    icon: '<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="#4A148C" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>'
  },
  {
    label: 'Lessons This Week', value: '120', trend: '+8 vs last week', trendClass: 'positive',
    bg: 'rgba(255, 179, 0, 0.1)',
    icon: '<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="#FFB300" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>'
  },
  {
    label: 'Monthly Revenue', value: '$28,400', trend: '+5.2% growth', trendClass: 'positive',
    bg: 'rgba(67, 160, 71, 0.1)',
    icon: '<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="#43a047" stroke-width="2"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>'
  },
  {
    label: 'Instructor Utilization', value: '87%', trend: '+3% this month', trendClass: 'positive',
    bg: 'rgba(194, 24, 91, 0.1)',
    icon: '<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="#C2185B" stroke-width="2"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>'
  }
]

const students = [
  { name: 'Emily Parker', email: 'emily.p@mail.com', initials: 'EP', color: '#4A148C', instrument: 'Piano', level: 'Intermediate', instructor: 'Dr. Vasquez', status: 'Active', statusClass: 'active' },
  { name: 'James Nguyen', email: 'j.nguyen@mail.com', initials: 'JN', color: '#FFB300', instrument: 'Guitar', level: 'Beginner', instructor: 'Marcus Chen', status: 'Active', statusClass: 'active' },
  { name: 'Sophie Williams', email: 'sophie.w@mail.com', initials: 'SW', color: '#C2185B', instrument: 'Violin', level: 'Advanced', instructor: 'Sofia Andersson', status: 'Active', statusClass: 'active' },
  { name: 'Ethan Brooks', email: 'e.brooks@mail.com', initials: 'EB', color: '#37474F', instrument: 'Drums', level: 'Beginner', instructor: 'Jamal Wright', status: 'Trial', statusClass: 'trial' },
  { name: 'Mia Rodriguez', email: 'mia.r@mail.com', initials: 'MR', color: '#6A1B9A', instrument: 'Voice', level: 'Intermediate', instructor: 'Priya Kapoor', status: 'Active', statusClass: 'active' },
  { name: 'Oliver Kim', email: 'o.kim@mail.com', initials: 'OK', color: '#009688', instrument: 'Theory', level: 'Beginner', instructor: 'Dr. Vasquez', status: 'Pending', statusClass: 'pending' }
]

const chartData = [
  { label: 'Piano', value: '$8,200', height: 82, color: '#4A148C' },
  { label: 'Guitar', value: '$5,800', height: 58, color: '#FFB300' },
  { label: 'Violin', value: '$4,900', height: 49, color: '#C2185B' },
  { label: 'Drums', value: '$3,600', height: 36, color: '#37474F' },
  { label: 'Voice', value: '$4,200', height: 42, color: '#6A1B9A' },
  { label: 'Theory', value: '$1,700', height: 17, color: '#009688' }
]

const todayLessons = [
  { time: '9:00 AM', student: 'Emily Parker', instrument: 'Piano', instructor: 'Dr. Vasquez', status: 'Completed', statusClass: 'completed' },
  { time: '10:00 AM', student: 'James Nguyen', instrument: 'Guitar', instructor: 'Marcus Chen', status: 'Completed', statusClass: 'completed' },
  { time: '11:00 AM', student: 'Sophie Williams', instrument: 'Violin', instructor: 'Sofia Andersson', status: 'In Progress', statusClass: 'in-progress' },
  { time: '1:00 PM', student: 'Group Class', instrument: 'Drums', instructor: 'Jamal Wright', status: 'Upcoming', statusClass: 'upcoming' },
  { time: '2:00 PM', student: 'Mia Rodriguez', instrument: 'Voice', instructor: 'Priya Kapoor', status: 'Upcoming', statusClass: 'upcoming' },
  { time: '3:00 PM', student: 'Oliver Kim', instrument: 'Theory', instructor: 'Dr. Vasquez', status: 'Upcoming', statusClass: 'upcoming' },
  { time: '4:00 PM', student: 'Ava Thompson', instrument: 'Violin', instructor: 'Sofia Andersson', status: 'Upcoming', statusClass: 'upcoming' },
  { time: '5:00 PM', student: 'Lucas Martinez', instrument: 'Guitar', instructor: 'Marcus Chen', status: 'Upcoming', statusClass: 'upcoming' }
]

const recitalRegs = [
  { name: 'Emma Richardson', piece: 'Chopin Ballade No. 1', instrument: 'Piano', initials: 'ER', color: '#4A148C' },
  { name: 'Lucas Martinez', piece: 'Spanish Romance', instrument: 'Guitar', initials: 'LM', color: '#FFB300' },
  { name: 'Ava Thompson', piece: 'Vivaldi Concerto in A Minor', instrument: 'Violin', initials: 'AT', color: '#C2185B' },
  { name: 'Mia Rodriguez', piece: 'O Mio Babbino Caro', instrument: 'Voice', initials: 'MR', color: '#6A1B9A' },
  { name: 'Ethan Brooks', piece: 'YYZ - Rush', instrument: 'Drums', initials: 'EB', color: '#37474F' }
]
</script>

<style scoped>
.admin-layout {
  display: grid;
  grid-template-columns: 260px 1fr;
  min-height: 100vh;
  background: #f5f3f0;
}

/* Sidebar */
.sidebar {
  background: var(--charcoal);
  color: var(--text-on-dark);
  padding: 24px 0;
  display: flex;
  flex-direction: column;
  position: sticky;
  top: 0;
  height: 100vh;
}

.sidebar-logo {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 0 20px 24px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  margin-bottom: 24px;
  color: var(--secondary);
}

.sidebar-name {
  font-family: var(--font-heading);
  font-size: 1.1rem;
  font-weight: 700;
  letter-spacing: 1px;
  display: block;
  line-height: 1.1;
}

.sidebar-sub {
  font-size: 0.7rem;
  letter-spacing: 1px;
  opacity: 0.6;
  display: block;
}

.sidebar-nav {
  flex: 1;
  padding: 0 12px;
}

.sidebar-nav a {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 16px;
  border-radius: var(--radius);
  font-size: 0.92rem;
  color: rgba(255, 255, 255, 0.6);
  transition: all 0.2s ease;
  margin-bottom: 4px;
}

.sidebar-nav a:hover {
  background: rgba(255, 255, 255, 0.08);
  color: var(--white);
}

.sidebar-nav a.active {
  background: var(--primary);
  color: var(--white);
}

.sidebar-footer {
  padding: 16px 20px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.sidebar-back {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.5);
  transition: color 0.2s;
}

.sidebar-back:hover {
  color: var(--secondary);
}

/* Main Content */
.admin-main {
  padding: 32px;
  overflow-y: auto;
}

.admin-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 32px;
  flex-wrap: wrap;
  gap: 16px;
}

.admin-header h1 {
  font-size: 1.8rem;
  color: var(--primary);
}

.admin-date {
  font-size: 0.85rem;
  color: var(--text-light);
  font-family: var(--font-accent);
}

.admin-actions {
  display: flex;
  align-items: center;
  gap: 16px;
}

.search-box {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  background: var(--white);
  border-radius: var(--radius);
  border: 1.5px solid #e0e0e0;
}

.search-box input {
  border: none;
  background: none;
  font-size: 0.85rem;
  width: 180px;
  color: var(--text);
}

.search-box svg {
  color: var(--text-light);
}

.admin-profile {
  display: flex;
  align-items: center;
  gap: 10px;
}

.profile-avatar {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: var(--primary);
  color: var(--white);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.75rem;
  font-weight: 700;
  font-family: var(--font-accent);
}

.admin-profile span {
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--text);
}

/* KPI Cards */
.kpi-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  margin-bottom: 28px;
}

.kpi-card {
  background: var(--white);
  border-radius: var(--radius-lg);
  padding: 24px;
  display: flex;
  align-items: flex-start;
  gap: 16px;
  box-shadow: var(--shadow-sm);
  position: relative;
}

.kpi-icon {
  width: 48px;
  height: 48px;
  border-radius: var(--radius);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.kpi-value {
  display: block;
  font-family: var(--font-accent);
  font-size: 1.6rem;
  font-weight: 700;
  color: var(--text);
  line-height: 1;
}

.kpi-label {
  font-size: 0.8rem;
  color: var(--text-light);
  margin-top: 4px;
  display: block;
}

.kpi-trend {
  position: absolute;
  top: 16px;
  right: 16px;
  font-size: 0.72rem;
  font-family: var(--font-accent);
  padding: 2px 8px;
  border-radius: 10px;
}

.kpi-trend.positive {
  background: rgba(67, 160, 71, 0.1);
  color: #43a047;
}

/* Admin Grid */
.admin-grid {
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  gap: 20px;
  margin-bottom: 20px;
}

.bottom-grid {
  grid-template-columns: 1fr 1fr;
}

.admin-card {
  background: var(--white);
  border-radius: var(--radius-lg);
  padding: 24px;
  box-shadow: var(--shadow-sm);
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.card-header h3 {
  font-family: var(--font-heading);
  font-size: 1.1rem;
  color: var(--text);
}

.card-badge {
  font-size: 0.75rem;
  font-family: var(--font-accent);
  padding: 4px 10px;
  background: rgba(74, 20, 140, 0.08);
  color: var(--primary);
  border-radius: 12px;
  font-weight: 600;
}

.chart-period {
  font-size: 0.8rem;
  color: var(--text-light);
  font-family: var(--font-accent);
}

/* Table */
.table-wrapper {
  overflow-x: auto;
}

table {
  width: 100%;
  border-collapse: collapse;
}

th {
  text-align: left;
  padding: 10px 12px;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  color: var(--text-light);
  border-bottom: 2px solid #f0f0f0;
  font-family: var(--font-accent);
}

td {
  padding: 12px;
  font-size: 0.88rem;
  border-bottom: 1px solid #f5f5f5;
  color: var(--text);
}

.student-cell {
  display: flex;
  align-items: center;
  gap: 10px;
}

.student-avatar {
  width: 34px;
  height: 34px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--white);
  font-size: 0.7rem;
  font-weight: 700;
  font-family: var(--font-accent);
  flex-shrink: 0;
}

.student-cell strong {
  display: block;
  font-size: 0.88rem;
}

.student-cell span {
  font-size: 0.75rem;
  color: var(--text-light);
}

.level-badge {
  font-size: 0.75rem;
  padding: 2px 8px;
  border-radius: 10px;
  background: rgba(74, 20, 140, 0.08);
  color: var(--primary);
  font-weight: 500;
}

.status-badge {
  font-size: 0.75rem;
  padding: 3px 10px;
  border-radius: 10px;
  font-weight: 600;
  font-family: var(--font-accent);
}

.status-badge.active { background: rgba(67, 160, 71, 0.1); color: #43a047; }
.status-badge.trial { background: rgba(255, 179, 0, 0.15); color: #e6a100; }
.status-badge.pending { background: rgba(55, 71, 79, 0.1); color: var(--slate); }

/* Chart */
.chart-area {
  display: flex;
  align-items: flex-end;
  gap: 20px;
  height: 200px;
  padding-top: 20px;
}

.chart-bar-group {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
}

.chart-bar-wrapper {
  flex: 1;
  width: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: center;
}

.chart-bar {
  width: 36px;
  border-radius: 6px 6px 0 0;
  position: relative;
  transition: height 0.6s ease;
  min-height: 8px;
}

.chart-bar:hover .chart-tooltip {
  opacity: 1;
  transform: translateX(-50%) translateY(-4px);
}

.chart-tooltip {
  position: absolute;
  top: -28px;
  left: 50%;
  transform: translateX(-50%);
  background: var(--charcoal);
  color: var(--white);
  padding: 3px 8px;
  border-radius: 4px;
  font-size: 0.7rem;
  font-family: var(--font-accent);
  white-space: nowrap;
  opacity: 0;
  transition: all 0.2s ease;
}

.chart-label {
  margin-top: 8px;
  font-size: 0.72rem;
  color: var(--text-light);
  font-family: var(--font-accent);
}

/* Today's Lessons */
.lessons-list {
  display: flex;
  flex-direction: column;
}

.lesson-row {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 10px 0;
  border-bottom: 1px solid #f5f5f5;
}

.lesson-row:last-child {
  border-bottom: none;
}

.lesson-time {
  font-family: var(--font-accent);
  font-size: 0.8rem;
  color: var(--text-light);
  min-width: 65px;
}

.lesson-details {
  flex: 1;
}

.lesson-details strong {
  display: block;
  font-size: 0.88rem;
  color: var(--text);
}

.lesson-details span {
  font-size: 0.78rem;
  color: var(--text-light);
}

.lesson-status {
  font-size: 0.72rem;
  font-weight: 600;
  padding: 3px 8px;
  border-radius: 10px;
  font-family: var(--font-accent);
}

.lesson-status.completed { background: rgba(67, 160, 71, 0.1); color: #43a047; }
.lesson-status.in-progress { background: rgba(255, 179, 0, 0.15); color: #e6a100; }
.lesson-status.upcoming { background: rgba(74, 20, 140, 0.08); color: var(--primary); }

/* Recital Registrations */
.recital-list {
  display: flex;
  flex-direction: column;
}

.recital-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
  border-bottom: 1px solid #f5f5f5;
}

.recital-row:last-child {
  border-bottom: none;
}

.recital-performer {
  display: flex;
  align-items: center;
  gap: 10px;
}

.performer-avatar {
  width: 34px;
  height: 34px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--white);
  font-size: 0.7rem;
  font-weight: 700;
  font-family: var(--font-accent);
}

.recital-performer strong {
  display: block;
  font-size: 0.88rem;
  color: var(--text);
}

.recital-performer span {
  font-size: 0.75rem;
  color: var(--text-light);
  font-style: italic;
}

.recital-instrument {
  font-size: 0.78rem;
  font-family: var(--font-accent);
  color: var(--primary);
  font-weight: 500;
}

.recital-summary {
  padding-top: 16px;
  margin-top: 8px;
  border-top: 2px solid #f0f0f0;
  text-align: center;
  font-size: 0.85rem;
  color: var(--text-light);
}

.recital-summary strong {
  color: var(--primary);
}

/* Responsive */
@media (max-width: 768px) {
  .admin-layout {
    grid-template-columns: 1fr;
  }

  .sidebar {
    position: fixed;
    left: -260px;
    z-index: 100;
    transition: left 0.3s ease;
    height: 100vh;
  }

  .admin-main {
    padding: 20px;
  }

  .kpi-grid {
    grid-template-columns: 1fr 1fr;
  }

  .admin-grid,
  .bottom-grid {
    grid-template-columns: 1fr;
  }

  .admin-header {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>
