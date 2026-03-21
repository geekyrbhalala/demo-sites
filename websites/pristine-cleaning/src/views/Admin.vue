<template>
  <div class="admin-page">
    <!-- Sidebar -->
    <aside class="admin-sidebar">
      <div class="sidebar-logo">
        <svg viewBox="0 0 40 40" fill="none">
          <path d="M20 2L22 12L32 10L24 18L34 22L24 24L28 34L20 26L12 34L16 24L6 22L16 18L8 10L18 12L20 2Z" fill="#2196F3"/>
          <circle cx="20" cy="20" r="4" fill="#ffffff"/>
        </svg>
        <div>
          <span class="sidebar-brand">PRISTINE</span>
          <span class="sidebar-sub">Admin Panel</span>
        </div>
      </div>

      <nav class="sidebar-nav">
        <a href="#" class="sidebar-link active">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>
          Dashboard
        </a>
        <a href="#" class="sidebar-link">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
          Schedule
        </a>
        <a href="#" class="sidebar-link">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>
          Clients
        </a>
        <a href="#" class="sidebar-link">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="8.5" cy="7" r="4"/><polyline points="17 11 19 13 23 9"/></svg>
          Team
        </a>
        <a href="#" class="sidebar-link">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/></svg>
          Revenue
        </a>
        <a href="#" class="sidebar-link">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"/><path d="M12 1v6m0 6v6m-7-3.5l5.196-3m1.608-.928L17 3.5M1 12h6m6 0h6m-3.5 7l-5.196-3m-1.608-.928L6.5 19"/></svg>
          Settings
        </a>
      </nav>

      <div class="sidebar-footer">
        <router-link to="/" class="sidebar-link">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>
          Back to Site
        </router-link>
      </div>
    </aside>

    <!-- Main Content -->
    <main class="admin-main">
      <header class="admin-header">
        <div>
          <h1>Dashboard</h1>
          <p>Welcome back, Maya. Here's your overview for today.</p>
        </div>
        <div class="header-actions">
          <div class="admin-search">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
            <input type="text" placeholder="Search jobs, clients..." />
          </div>
          <button class="btn btn-primary" @click="showQuickSchedule = !showQuickSchedule">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:16px;height:16px"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
            New Job
          </button>
        </div>
      </header>

      <!-- KPI Cards -->
      <div class="kpi-grid">
        <div v-for="kpi in kpis" :key="kpi.label" class="kpi-card">
          <div class="kpi-icon" :style="{ background: kpi.bg }" v-html="kpi.icon"></div>
          <div class="kpi-info">
            <span class="kpi-label">{{ kpi.label }}</span>
            <span class="kpi-value">{{ kpi.value }}</span>
            <span class="kpi-trend" :class="kpi.trendType">{{ kpi.trend }}</span>
          </div>
        </div>
      </div>

      <!-- Chart and Quick Schedule -->
      <div class="admin-grid">
        <!-- Revenue Chart -->
        <div class="admin-card chart-card">
          <h3>Monthly Revenue</h3>
          <div class="chart-container">
            <div class="chart-bars">
              <div v-for="bar in chartData" :key="bar.month" class="chart-bar-group">
                <div class="chart-bar" :style="{ height: bar.height + '%' }">
                  <span class="chart-value">${{ bar.value }}</span>
                </div>
                <span class="chart-label">{{ bar.month }}</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Quick Schedule -->
        <div class="admin-card">
          <h3>Quick Schedule</h3>
          <div v-if="showQuickSchedule" class="quick-form">
            <div class="form-group">
              <label>Client</label>
              <select><option>Sarah Mitchell</option><option>David Chen</option><option>Emily Rodriguez</option></select>
            </div>
            <div class="form-group">
              <label>Service</label>
              <select><option>Regular Cleaning</option><option>Deep Cleaning</option><option>Move In/Out</option></select>
            </div>
            <div class="form-group">
              <label>Date</label>
              <input type="date" />
            </div>
            <button class="btn btn-primary" style="width:100%" @click="showQuickSchedule = false">Schedule Job</button>
          </div>
          <div v-else class="upcoming-jobs">
            <h4>Today's Schedule</h4>
            <div v-for="job in todayJobs" :key="job.time" class="job-item">
              <div class="job-time">{{ job.time }}</div>
              <div class="job-detail">
                <strong>{{ job.client }}</strong>
                <span>{{ job.service }}</span>
              </div>
              <span class="job-status" :class="job.status">{{ job.statusLabel }}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Jobs Table -->
      <div class="admin-card">
        <div class="table-header">
          <h3>Recent Jobs</h3>
          <div class="table-actions">
            <select class="table-filter">
              <option>All Status</option>
              <option>Completed</option>
              <option>In Progress</option>
              <option>Scheduled</option>
            </select>
          </div>
        </div>
        <div class="table-wrapper">
          <table class="admin-table">
            <thead>
              <tr>
                <th>Job ID</th>
                <th>Client</th>
                <th>Service</th>
                <th>Date</th>
                <th>Amount</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="job in jobs" :key="job.id">
                <td><span class="job-id">{{ job.id }}</span></td>
                <td>{{ job.client }}</td>
                <td>{{ job.service }}</td>
                <td>{{ job.date }}</td>
                <td class="amount">${{ job.amount }}</td>
                <td><span class="status-badge" :class="job.status">{{ job.statusLabel }}</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const showQuickSchedule = ref(false)

const kpis = [
  {
    label: "Today's Jobs",
    value: '6',
    trend: '+2 vs yesterday',
    trendType: 'up',
    bg: 'rgba(33, 150, 243, 0.1)',
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="#2196F3" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>'
  },
  {
    label: 'Active Clients',
    value: '234',
    trend: '+12 this month',
    trendType: 'up',
    bg: 'rgba(76, 175, 80, 0.1)',
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="#4caf50" stroke-width="2"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>'
  },
  {
    label: 'Monthly Revenue',
    value: '$18,200',
    trend: '+8.3% vs last month',
    trendType: 'up',
    bg: 'rgba(26, 35, 126, 0.1)',
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="#1a237e" stroke-width="2"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/></svg>'
  },
  {
    label: 'Avg Rating',
    value: '4.8',
    trend: '98% satisfaction',
    trendType: 'neutral',
    bg: 'rgba(255, 152, 0, 0.1)',
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="#ff9800" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>'
  }
]

const chartData = [
  { month: 'Jul', value: '12.4k', height: 62 },
  { month: 'Aug', value: '14.1k', height: 71 },
  { month: 'Sep', value: '13.6k', height: 68 },
  { month: 'Oct', value: '15.8k', height: 79 },
  { month: 'Nov', value: '16.5k', height: 83 },
  { month: 'Dec', value: '14.9k', height: 75 },
  { month: 'Jan', value: '17.2k', height: 86 },
  { month: 'Feb', value: '16.8k', height: 84 },
  { month: 'Mar', value: '18.2k', height: 91 }
]

const todayJobs = [
  { time: '8:00 AM', client: 'Sarah Mitchell', service: 'Regular - 3BR', status: 'completed', statusLabel: 'Done' },
  { time: '10:30 AM', client: 'James Lee', service: 'Deep Clean - 2BR', status: 'progress', statusLabel: 'In Progress' },
  { time: '1:00 PM', client: 'Maria Garcia', service: 'Regular - Studio', status: 'scheduled', statusLabel: 'Upcoming' },
  { time: '3:00 PM', client: 'Tom Wilson', service: 'Move Out - 1BR', status: 'scheduled', statusLabel: 'Upcoming' },
  { time: '4:30 PM', client: 'Chen Wei', service: 'Office - Suite 200', status: 'scheduled', statusLabel: 'Upcoming' },
  { time: '6:00 PM', client: 'Alex Park', service: 'Regular - 2BR', status: 'scheduled', statusLabel: 'Upcoming' }
]

const jobs = [
  { id: 'PC-2847', client: 'Sarah Mitchell', service: 'Regular Cleaning', date: 'Mar 21, 2026', amount: '149', status: 'completed', statusLabel: 'Completed' },
  { id: 'PC-2846', client: 'David Chen', service: 'Office Cleaning', date: 'Mar 21, 2026', amount: '299', status: 'progress', statusLabel: 'In Progress' },
  { id: 'PC-2845', client: 'Emily Rodriguez', service: 'Move Out', date: 'Mar 20, 2026', amount: '249', status: 'completed', statusLabel: 'Completed' },
  { id: 'PC-2844', client: 'Lisa Park', service: 'Deep Cleaning', date: 'Mar 20, 2026', amount: '199', status: 'completed', statusLabel: 'Completed' },
  { id: 'PC-2843', client: 'James Wilson', service: 'Regular Cleaning', date: 'Mar 19, 2026', amount: '99', status: 'completed', statusLabel: 'Completed' },
  { id: 'PC-2842', client: 'Maria Garcia', service: 'Post-Construction', date: 'Mar 19, 2026', amount: '349', status: 'completed', statusLabel: 'Completed' },
  { id: 'PC-2841', client: 'Tom Brown', service: 'Regular Cleaning', date: 'Mar 18, 2026', amount: '149', status: 'cancelled', statusLabel: 'Cancelled' },
  { id: 'PC-2840', client: 'Anna Kim', service: 'Carpet Cleaning', date: 'Mar 18, 2026', amount: '149', status: 'completed', statusLabel: 'Completed' }
]
</script>

<style scoped>
.admin-page {
  display: flex;
  min-height: 100vh;
  background: var(--bg-light);
}

/* Sidebar */
.admin-sidebar {
  width: 260px;
  background: var(--secondary);
  color: var(--white);
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  z-index: 100;
}

.sidebar-logo {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1.5rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.sidebar-logo svg { width: 32px; height: 32px; }

.sidebar-brand {
  font-family: var(--font-heading);
  font-weight: 800;
  font-size: 1rem;
  letter-spacing: 0.08em;
  display: block;
}

.sidebar-sub {
  font-size: 0.7rem;
  color: var(--primary-light);
  letter-spacing: 0.1em;
}

.sidebar-nav {
  flex: 1;
  padding: 1rem 0;
  overflow-y: auto;
}

.sidebar-link {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem 1.5rem;
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.6);
  transition: all var(--transition-fast);
}

.sidebar-link:hover { color: var(--white); background: rgba(255, 255, 255, 0.05); }
.sidebar-link.active { color: var(--white); background: rgba(255, 255, 255, 0.1); border-right: 3px solid var(--primary); }
.sidebar-link svg { width: 20px; height: 20px; flex-shrink: 0; }

.sidebar-footer {
  padding: 1rem 0;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

/* Main */
.admin-main {
  flex: 1;
  margin-left: 260px;
  padding: 2rem;
}

.admin-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 2rem;
  flex-wrap: wrap;
  gap: 1rem;
}

.admin-header h1 {
  font-size: 1.75rem;
  margin-bottom: 0.25rem;
}

.admin-header p {
  font-size: 0.9rem;
  color: var(--text-muted);
  margin: 0;
}

.header-actions {
  display: flex;
  gap: 1rem;
  align-items: center;
}

.admin-search {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: var(--white);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 0.5rem 1rem;
}

.admin-search svg { width: 18px; height: 18px; color: var(--text-muted); }
.admin-search input { border: none; outline: none; font-family: var(--font-body); font-size: 0.9rem; width: 200px; }

/* KPI */
.kpi-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.kpi-card {
  background: var(--white);
  border-radius: var(--radius-lg);
  padding: 1.5rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  box-shadow: var(--shadow-sm);
}

.kpi-icon {
  width: 52px;
  height: 52px;
  border-radius: var(--radius);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  padding: 12px;
}

.kpi-label { display: block; font-size: 0.8rem; color: var(--text-muted); margin-bottom: 0.25rem; }
.kpi-value { display: block; font-family: var(--font-accent); font-size: 1.75rem; font-weight: 700; color: var(--secondary); line-height: 1.2; }
.kpi-trend { font-size: 0.75rem; color: var(--text-muted); }
.kpi-trend.up { color: var(--success); }

/* Grid */
.admin-grid {
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.admin-card {
  background: var(--white);
  border-radius: var(--radius-lg);
  padding: 1.5rem;
  box-shadow: var(--shadow-sm);
}

.admin-card h3 {
  font-size: 1.1rem;
  margin-bottom: 1.5rem;
}

/* Chart */
.chart-container { padding: 0.5rem 0; }

.chart-bars {
  display: flex;
  align-items: flex-end;
  gap: 0.75rem;
  height: 220px;
  padding-bottom: 1.5rem;
}

.chart-bar-group {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  justify-content: flex-end;
}

.chart-bar {
  width: 100%;
  max-width: 48px;
  background: linear-gradient(180deg, var(--primary) 0%, var(--primary-light) 100%);
  border-radius: 6px 6px 0 0;
  position: relative;
  transition: height 0.6s ease;
  min-height: 20px;
}

.chart-value {
  position: absolute;
  top: -22px;
  left: 50%;
  transform: translateX(-50%);
  font-family: var(--font-accent);
  font-size: 0.65rem;
  color: var(--text-muted);
  white-space: nowrap;
}

.chart-label {
  font-size: 0.75rem;
  color: var(--text-muted);
  margin-top: 0.5rem;
}

/* Quick form */
.quick-form .form-group { margin-bottom: 1rem; }
.quick-form label { font-size: 0.85rem; }
.quick-form select, .quick-form input { padding: 0.6rem 0.75rem; font-size: 0.85rem; }

/* Today's schedule */
.upcoming-jobs h4 {
  font-size: 0.9rem;
  margin-bottom: 1rem;
  color: var(--text);
}

.job-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.6rem 0;
  border-bottom: 1px solid var(--border);
}

.job-item:last-child { border-bottom: none; }

.job-time {
  font-family: var(--font-accent);
  font-size: 0.75rem;
  color: var(--text-muted);
  min-width: 60px;
}

.job-detail { flex: 1; }
.job-detail strong { display: block; font-size: 0.85rem; color: var(--text); }
.job-detail span { font-size: 0.75rem; color: var(--text-muted); }

.job-status {
  font-size: 0.7rem;
  font-weight: 600;
  padding: 0.2rem 0.6rem;
  border-radius: 50px;
}

.job-status.completed { background: rgba(76, 175, 80, 0.1); color: var(--success); }
.job-status.progress { background: rgba(33, 150, 243, 0.1); color: var(--primary); }
.job-status.scheduled { background: rgba(255, 152, 0, 0.1); color: var(--warning); }

/* Table */
.table-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.table-header h3 { margin: 0; }

.table-filter {
  padding: 0.4rem 0.75rem;
  border: 1px solid var(--border);
  border-radius: var(--radius);
  font-family: var(--font-body);
  font-size: 0.85rem;
  color: var(--text);
  background: var(--white);
  outline: none;
}

.table-wrapper { overflow-x: auto; }

.admin-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 0.9rem;
}

.admin-table th {
  text-align: left;
  padding: 0.75rem 1rem;
  font-family: var(--font-heading);
  font-weight: 600;
  font-size: 0.8rem;
  color: var(--text-muted);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  border-bottom: 2px solid var(--border);
}

.admin-table td {
  padding: 0.75rem 1rem;
  border-bottom: 1px solid var(--border);
  color: var(--text);
}

.job-id {
  font-family: var(--font-accent);
  font-size: 0.8rem;
  color: var(--primary);
}

.amount {
  font-family: var(--font-accent);
  font-weight: 700;
}

.status-badge {
  font-size: 0.75rem;
  font-weight: 600;
  padding: 0.25rem 0.75rem;
  border-radius: 50px;
  white-space: nowrap;
}

.status-badge.completed { background: rgba(76, 175, 80, 0.1); color: var(--success); }
.status-badge.progress { background: rgba(33, 150, 243, 0.1); color: var(--primary); }
.status-badge.scheduled { background: rgba(255, 152, 0, 0.1); color: var(--warning); }
.status-badge.cancelled { background: rgba(244, 67, 54, 0.1); color: var(--danger); }

@media (max-width: 768px) {
  .admin-sidebar {
    width: 60px;
    overflow: hidden;
  }
  .sidebar-logo div, .sidebar-link span, .sidebar-brand, .sidebar-sub { display: none; }
  .sidebar-logo { justify-content: center; padding: 1rem; }
  .sidebar-link { justify-content: center; padding: 0.75rem; }
  .admin-main { margin-left: 60px; padding: 1rem; }
  .kpi-grid { grid-template-columns: 1fr 1fr; }
  .admin-grid { grid-template-columns: 1fr; }
  .header-actions { flex-wrap: wrap; }
  .admin-search input { width: 120px; }
}

@media (max-width: 480px) {
  .kpi-grid { grid-template-columns: 1fr; }
}
</style>
