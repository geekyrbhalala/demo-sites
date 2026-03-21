import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Admin.css'

const kpis = [
  { label: 'Active Cases', value: '342', trend: '+12 this week', icon: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="24" height="24">
      <rect x="3" y="3" width="18" height="18" rx="2" /><line x1="9" y1="9" x2="15" y2="9" />
      <line x1="9" y1="13" x2="15" y2="13" /><line x1="9" y1="17" x2="12" y2="17" />
    </svg>
  )},
  { label: 'New Consultations', value: '18', trend: '+5 from last week', icon: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="24" height="24">
      <circle cx="12" cy="8" r="5" /><path d="M3 21c0-4.97 4.03-9 9-9s9 4.03 9 9" />
    </svg>
  )},
  { label: 'Monthly Billing', value: '$285K', trend: '+8% vs last month', icon: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="24" height="24">
      <line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
    </svg>
  )},
  { label: 'Win Rate', value: '98%', trend: 'Consistent', icon: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="24" height="24">
      <path d="M22 11.08V12a10 10 0 11-5.93-9.14" /><path d="M22 4L12 14.01l-3-3" />
    </svg>
  )},
]

const cases = [
  { id: 'NGL-2024-0342', client: 'Montgomery Industries', type: 'Corporate', attorney: 'V. Ashford', status: 'Negotiation', date: '2026-03-20' },
  { id: 'NGL-2024-0341', client: 'Chen Family Trust', type: 'Family Law', attorney: 'M. Gonzalez', status: 'Discovery', date: '2026-03-19' },
  { id: 'NGL-2024-0340', client: 'Whitfield Capital', type: 'Corporate', attorney: 'C. Blake', status: 'Intake', date: '2026-03-18' },
  { id: 'NGL-2024-0339', client: 'Torres, Michael', type: 'Criminal', attorney: 'M. Williams', status: 'Trial', date: '2026-03-17' },
  { id: 'NGL-2024-0338', client: 'Patel Properties LLC', type: 'Real Estate', attorney: 'D. Harrington', status: 'Settled', date: '2026-03-16' },
  { id: 'NGL-2024-0337', client: 'Ramirez, Elena', type: 'Immigration', attorney: 'R. Patel', status: 'Negotiation', date: '2026-03-15' },
  { id: 'NGL-2024-0336', client: 'Warren Estate', type: 'Estate', attorney: 'E. Warren-Park', status: 'Discovery', date: '2026-03-14' },
  { id: 'NGL-2024-0335', client: 'Apex Holdings Inc.', type: 'Corporate', attorney: 'V. Ashford', status: 'Intake', date: '2026-03-13' },
]

const billingData = [
  { area: 'Corporate', amount: 95, color: 'var(--accent)' },
  { area: 'Real Estate', amount: 65, color: 'var(--secondary)' },
  { area: 'Family', amount: 42, color: '#607D8B' },
  { area: 'Criminal', amount: 38, color: '#4a6fa5' },
  { area: 'Estate', amount: 28, color: '#8e6c3f' },
  { area: 'Immigration', amount: 17, color: '#6a7b47' },
]

const courtDates = [
  { date: 'Mar 22', case: 'Torres v. State', court: 'SDNY', type: 'Motion Hearing' },
  { date: 'Mar 25', case: 'Chen v. Chen', court: 'Family Court', type: 'Custody Hearing' },
  { date: 'Mar 28', case: 'Montgomery v. TechCo', court: 'Supreme Court', type: 'Deposition' },
  { date: 'Apr 1', case: 'Ramirez Immigration', court: 'Immigration Court', type: 'USCIS Interview' },
  { date: 'Apr 3', case: 'Warren Estate', court: 'Surrogate Court', type: 'Probate Hearing' },
]

const statusColors = {
  Intake: '#4a6fa5',
  Discovery: '#C9B037',
  Negotiation: '#607D8B',
  Trial: '#800020',
  Settled: '#2e7d32',
}

const sidebarLinks = [
  { label: 'Dashboard', icon: 'grid', active: true },
  { label: 'Cases', icon: 'folder' },
  { label: 'Clients', icon: 'users' },
  { label: 'Calendar', icon: 'calendar' },
  { label: 'Billing', icon: 'dollar' },
  { label: 'Documents', icon: 'file' },
  { label: 'Reports', icon: 'chart' },
  { label: 'Settings', icon: 'gear' },
]

function SidebarIcon({ icon }) {
  const icons = {
    grid: <><rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect x="3" y="14" width="7" height="7" /><rect x="14" y="14" width="7" height="7" /></>,
    folder: <><path d="M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z" /></>,
    users: <><circle cx="9" cy="7" r="4" /><path d="M3 21v-2a4 4 0 014-4h4a4 4 0 014 4v2" /><circle cx="19" cy="7" r="3" /><path d="M21 21v-1.5a3 3 0 00-2-2.83" /></>,
    calendar: <><rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></>,
    dollar: <><line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" /></>,
    file: <><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" /><polyline points="14 2 14 8 20 8" /></>,
    chart: <><line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" /></>,
    gear: <><circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 01-2.83 2.83l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z" /></>,
  }
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20" strokeLinecap="round" strokeLinejoin="round">
      {icons[icon]}
    </svg>
  )
}

export default function Admin() {
  const [searchQuery, setSearchQuery] = useState('')
  const maxBilling = Math.max(...billingData.map(d => d.amount))

  return (
    <div className="admin-layout">
      {/* Sidebar */}
      <aside className="admin-sidebar">
        <Link to="/" className="admin-sidebar-logo">
          <svg viewBox="0 0 48 48" width="32" height="32">
            <rect x="4" y="38" width="40" height="4" fill="var(--accent)" rx="1" />
            <rect x="8" y="14" width="4" height="24" fill="var(--ivory)" rx="1" />
            <rect x="22" y="14" width="4" height="24" fill="var(--ivory)" rx="1" />
            <rect x="36" y="14" width="4" height="24" fill="var(--ivory)" rx="1" />
            <path d="M2 14 L24 4 L46 14 Z" fill="var(--ivory)" />
            <circle cx="24" cy="10" r="2" fill="var(--accent)" />
          </svg>
          <span>NORTHGATE</span>
        </Link>

        <nav className="admin-sidebar-nav">
          {sidebarLinks.map((link) => (
            <button
              key={link.label}
              className={`admin-sidebar-link ${link.active ? 'active' : ''}`}
            >
              <SidebarIcon icon={link.icon} />
              <span>{link.label}</span>
            </button>
          ))}
        </nav>

        <div className="admin-sidebar-user">
          <div className="sidebar-user-avatar">VA</div>
          <div className="sidebar-user-info">
            <strong>Victoria Ashford</strong>
            <span>Senior Partner</span>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="admin-main">
        {/* Header */}
        <header className="admin-header">
          <div>
            <h1 className="admin-title">Dashboard</h1>
            <span className="admin-date">Friday, March 21, 2026</span>
          </div>
          <div className="admin-header-actions">
            <div className="admin-search">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
              <input
                type="text"
                placeholder="Search cases, clients..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <button className="btn btn-gold admin-new-case">+ New Case</button>
          </div>
        </header>

        {/* KPIs */}
        <section className="admin-kpis">
          {kpis.map((kpi, i) => (
            <div key={i} className="admin-kpi-card">
              <div className="kpi-icon">{kpi.icon}</div>
              <div className="kpi-info">
                <span className="kpi-value">{kpi.value}</span>
                <span className="kpi-label">{kpi.label}</span>
                <span className="kpi-trend">{kpi.trend}</span>
              </div>
            </div>
          ))}
        </section>

        {/* Main Grid */}
        <div className="admin-grid">
          {/* Case Pipeline */}
          <section className="admin-card admin-cases">
            <div className="admin-card-header">
              <h2>Case Pipeline</h2>
              <button className="admin-card-action">View All</button>
            </div>
            <div className="admin-table-wrap">
              <table className="admin-table">
                <thead>
                  <tr>
                    <th>Case ID</th>
                    <th>Client</th>
                    <th>Type</th>
                    <th>Attorney</th>
                    <th>Status</th>
                    <th>Date</th>
                  </tr>
                </thead>
                <tbody>
                  {cases.map((c) => (
                    <tr key={c.id}>
                      <td className="case-id">{c.id}</td>
                      <td>{c.client}</td>
                      <td>{c.type}</td>
                      <td>{c.attorney}</td>
                      <td>
                        <span
                          className="status-badge"
                          style={{ background: `${statusColors[c.status]}20`, color: statusColors[c.status] }}
                        >
                          {c.status}
                        </span>
                      </td>
                      <td className="case-date">{c.date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Billing by Practice Area */}
          <section className="admin-card admin-billing">
            <div className="admin-card-header">
              <h2>Billing by Practice Area</h2>
              <span className="admin-card-period">This Month</span>
            </div>
            <div className="billing-chart">
              {billingData.map((d, i) => (
                <div key={i} className="billing-row">
                  <span className="billing-label">{d.area}</span>
                  <div className="billing-bar-track">
                    <div
                      className="billing-bar-fill"
                      style={{ width: `${(d.amount / maxBilling) * 100}%`, background: d.color }}
                    ></div>
                  </div>
                  <span className="billing-amount">${d.amount}K</span>
                </div>
              ))}
            </div>
          </section>

          {/* Attorney Utilization */}
          <section className="admin-card admin-utilization">
            <div className="admin-card-header">
              <h2>Attorney Utilization</h2>
              <span className="admin-card-period">This Week</span>
            </div>
            <div className="utilization-chart">
              {[
                { name: 'Ashford', hours: 42, max: 45 },
                { name: 'Harrington', hours: 38, max: 45 },
                { name: 'Gonzalez', hours: 40, max: 45 },
                { name: 'Williams', hours: 44, max: 45 },
                { name: 'Warren-Park', hours: 32, max: 45 },
                { name: 'Patel', hours: 36, max: 45 },
                { name: 'Blake', hours: 41, max: 45 },
                { name: "O'Brien", hours: 39, max: 45 },
              ].map((a, i) => (
                <div key={i} className="util-bar-group">
                  <div className="util-bar-track">
                    <div
                      className="util-bar-fill"
                      style={{ height: `${(a.hours / a.max) * 100}%` }}
                    ></div>
                  </div>
                  <span className="util-hours">{a.hours}h</span>
                  <span className="util-name">{a.name}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Court Dates */}
          <section className="admin-card admin-court-dates">
            <div className="admin-card-header">
              <h2>Upcoming Court Dates</h2>
              <button className="admin-card-action">Calendar</button>
            </div>
            <div className="court-dates-list">
              {courtDates.map((cd, i) => (
                <div key={i} className="court-date-item">
                  <div className="court-date-badge">
                    <span>{cd.date}</span>
                  </div>
                  <div className="court-date-info">
                    <strong>{cd.case}</strong>
                    <span>{cd.court} &mdash; {cd.type}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}
