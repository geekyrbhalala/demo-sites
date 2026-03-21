import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Admin.css'

function Admin() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  const [activeNav, setActiveNav] = useState('dashboard')

  const kpis = [
    { label: 'Active Projects', value: '12', change: '+3', trend: 'up', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg> },
    { label: 'Total Clients', value: '567', change: '+24', trend: 'up', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg> },
    { label: 'Monthly Revenue', value: '$42,300', change: '+12%', trend: 'up', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/></svg> },
    { label: 'Crew Utilization', value: '92%', change: '+5%', trend: 'up', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg> },
  ]

  const projects = [
    { id: 'PRJ-001', client: 'Sarah Mitchell', service: 'Garden Design', status: 'In Progress', crew: 'Team Alpha', date: 'Mar 15', amount: '$4,800' },
    { id: 'PRJ-002', client: 'David Chen', service: 'Lawn Maintenance', status: 'Active', crew: 'Team Beta', date: 'Ongoing', amount: '$350/mo' },
    { id: 'PRJ-003', client: 'Amanda Ross', service: 'Hardscaping', status: 'In Progress', crew: 'Team Alpha', date: 'Mar 8', amount: '$12,500' },
    { id: 'PRJ-004', client: 'Tech Park LLC', service: 'Commercial Maint.', status: 'Active', crew: 'Team Gamma', date: 'Ongoing', amount: '$2,100/mo' },
    { id: 'PRJ-005', client: 'Robert Kim', service: 'Tree Removal', status: 'Scheduled', crew: 'Team Beta', date: 'Mar 22', amount: '$950' },
    { id: 'PRJ-006', client: 'Lisa Patel', service: 'Irrigation Install', status: 'Pending', crew: 'Unassigned', date: 'TBD', amount: '$3,200' },
    { id: 'PRJ-007', client: 'Oak Heights HOA', service: 'Spring Cleanup', status: 'Completed', crew: 'Team Gamma', date: 'Mar 10', amount: '$1,800' },
  ]

  const revenueData = [
    { month: 'Oct', value: 28 },
    { month: 'Nov', value: 18 },
    { month: 'Dec', value: 12 },
    { month: 'Jan', value: 15 },
    { month: 'Feb', value: 32 },
    { month: 'Mar', value: 42 },
  ]

  const maxRevenue = Math.max(...revenueData.map(d => d.value))

  const alerts = [
    { type: 'warning', message: 'Mower #3 — oil change due (250 hrs)', time: '2 hours ago' },
    { type: 'info', message: 'New estimate request from Janet Park', time: '4 hours ago' },
    { type: 'success', message: 'PRJ-003 hardscape phase 1 completed', time: '1 day ago' },
    { type: 'warning', message: 'Irrigation trailer — tire pressure low', time: '2 days ago' },
  ]

  const statusColor = (status) => {
    switch (status) {
      case 'Active': return '#1B5E20'
      case 'In Progress': return '#FF6D00'
      case 'Scheduled': return '#1976D2'
      case 'Pending': return '#FFC107'
      case 'Completed': return '#4CAF50'
      default: return '#999'
    }
  }

  return (
    <div className="admin-page">
      <aside className="admin-sidebar">
        <Link to="/" className="admin-brand">
          <svg viewBox="0 0 48 48" className="admin-logo" aria-hidden="true">
            <path d="M24 4c-3 4-10 14-10 22a10 10 0 0020 0C34 18 27 8 24 4z" fill="#8BC34A" opacity="0.9"/>
            <path d="M24 34v10" stroke="#fff" strokeWidth="2.5" strokeLinecap="round"/>
            <path d="M20 44h8" stroke="#fff" strokeWidth="2" strokeLinecap="round"/>
          </svg>
          <div>
            <span className="admin-brand-name">EVERGREEN</span>
            <span className="admin-brand-sub">Admin Panel</span>
          </div>
        </Link>

        <nav className="admin-nav">
          <button className={activeNav === 'dashboard' ? 'active' : ''} onClick={() => setActiveNav('dashboard')}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/></svg>
            Dashboard
          </button>
          <button className={activeNav === 'projects' ? 'active' : ''} onClick={() => setActiveNav('projects')}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z"/></svg>
            Projects
          </button>
          <button className={activeNav === 'clients' ? 'active' : ''} onClick={() => setActiveNav('clients')}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/></svg>
            Clients
          </button>
          <button className={activeNav === 'schedule' ? 'active' : ''} onClick={() => setActiveNav('schedule')}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>
            Schedule
          </button>
          <button className={activeNav === 'equipment' ? 'active' : ''} onClick={() => setActiveNav('equipment')}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"/></svg>
            Equipment
          </button>
          <button className={activeNav === 'reports' ? 'active' : ''} onClick={() => setActiveNav('reports')}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 20V10M12 20V4M6 20v-6"/></svg>
            Reports
          </button>
        </nav>

        <div className="admin-sidebar-footer">
          <Link to="/" className="admin-back-link">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
            Back to Website
          </Link>
        </div>
      </aside>

      <main className="admin-main">
        <header className="admin-header">
          <div>
            <h1>Dashboard</h1>
            <p>Welcome back, Marcus. Here is your overview for March 2026.</p>
          </div>
          <div className="admin-header-actions">
            <div className="admin-search">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
              <input type="text" placeholder="Search projects, clients..." />
            </div>
            <button className="btn btn-primary admin-action-btn">+ New Project</button>
          </div>
        </header>

        <div className="admin-kpis">
          {kpis.map((kpi, i) => (
            <div key={i} className="kpi-card">
              <div className="kpi-icon">{kpi.icon}</div>
              <div className="kpi-info">
                <span className="kpi-label">{kpi.label}</span>
                <span className="kpi-value">{kpi.value}</span>
                <span className={`kpi-change ${kpi.trend}`}>{kpi.change} this month</span>
              </div>
            </div>
          ))}
        </div>

        <div className="admin-grid">
          <div className="admin-card admin-table-card">
            <div className="admin-card-header">
              <h3>Project Pipeline</h3>
              <select className="admin-filter">
                <option>All Statuses</option>
                <option>Active</option>
                <option>In Progress</option>
                <option>Scheduled</option>
                <option>Pending</option>
              </select>
            </div>
            <div className="admin-table-wrapper">
              <table className="admin-table">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Client</th>
                    <th>Service</th>
                    <th>Status</th>
                    <th>Crew</th>
                    <th>Date</th>
                    <th>Amount</th>
                  </tr>
                </thead>
                <tbody>
                  {projects.map((p, i) => (
                    <tr key={i}>
                      <td className="table-id">{p.id}</td>
                      <td>{p.client}</td>
                      <td>{p.service}</td>
                      <td>
                        <span className="status-badge" style={{ background: `${statusColor(p.status)}15`, color: statusColor(p.status) }}>
                          {p.status}
                        </span>
                      </td>
                      <td>{p.crew}</td>
                      <td>{p.date}</td>
                      <td className="table-amount">{p.amount}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="admin-side-cards">
            <div className="admin-card">
              <div className="admin-card-header">
                <h3>Seasonal Revenue</h3>
                <span className="admin-card-subtitle">Last 6 months ($K)</span>
              </div>
              <div className="revenue-chart">
                {revenueData.map((d, i) => (
                  <div key={i} className="chart-bar-group">
                    <div className="chart-bar-container">
                      <div
                        className="chart-bar"
                        style={{ height: `${(d.value / maxRevenue) * 100}%` }}
                      >
                        <span className="chart-value">${d.value}K</span>
                      </div>
                    </div>
                    <span className="chart-label">{d.month}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="admin-card">
              <div className="admin-card-header">
                <h3>Alerts & Notifications</h3>
              </div>
              <div className="alerts-list">
                {alerts.map((alert, i) => (
                  <div key={i} className={`alert-item alert-${alert.type}`}>
                    <div className="alert-dot"></div>
                    <div className="alert-content">
                      <p>{alert.message}</p>
                      <span className="alert-time">{alert.time}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="admin-card crew-card">
              <div className="admin-card-header">
                <h3>Crew Schedule</h3>
              </div>
              <div className="crew-list">
                <div className="crew-item">
                  <div className="crew-avatar" style={{ background: '#1B5E20' }}>A</div>
                  <div className="crew-info">
                    <strong>Team Alpha</strong>
                    <span>Garden Design — Mitchell Residence</span>
                  </div>
                  <span className="crew-status active">On Site</span>
                </div>
                <div className="crew-item">
                  <div className="crew-avatar" style={{ background: '#FF6D00' }}>B</div>
                  <div className="crew-info">
                    <strong>Team Beta</strong>
                    <span>Lawn Maint. — Cedar Heights Route</span>
                  </div>
                  <span className="crew-status active">On Route</span>
                </div>
                <div className="crew-item">
                  <div className="crew-avatar" style={{ background: '#1976D2' }}>G</div>
                  <div className="crew-info">
                    <strong>Team Gamma</strong>
                    <span>Spring Cleanup — Oak Heights HOA</span>
                  </div>
                  <span className="crew-status break">Break</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Admin
