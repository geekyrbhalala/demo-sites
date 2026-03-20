import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Admin.css'

const kpis = [
  { label: "Today's Appointments", value: '8', change: '+2 from yesterday', icon: 'calendar' },
  { label: 'Walk-ins Available', value: '3', change: '2 slots remaining today', icon: 'walk' },
  { label: 'Monthly Revenue', value: '$18,450', change: '+12% from last month', icon: 'revenue' },
  { label: 'Total Clients', value: '2,340', change: '+28 this month', icon: 'clients' },
]

const sessions = [
  { id: 'INK-2847', client: 'Jordan Rivers', artist: 'Marcus Chen', type: 'Geometric Sleeve', time: '11:00 AM', duration: '3h', status: 'In Progress' },
  { id: 'INK-2848', client: 'Priya Mehta', artist: 'Elena Vasquez', type: 'Portrait Realism', time: '12:00 PM', duration: '4h', status: 'Upcoming' },
  { id: 'INK-2849', client: 'Alex Thompson', artist: 'Kai Takahashi', type: 'Japanese Half Sleeve', time: '2:00 PM', duration: '5h', status: 'Upcoming' },
  { id: 'INK-2850', client: 'Sam Wilder', artist: 'Luna Park', type: 'Fine Line Botanical', time: '3:30 PM', duration: '1.5h', status: 'Upcoming' },
  { id: 'INK-2851', client: 'Casey Morris', artist: 'Devon Blake', type: 'Septum Piercing', time: '4:00 PM', duration: '30m', status: 'Upcoming' },
  { id: 'INK-2846', client: 'Maya Singh', artist: 'Marcus Chen', type: 'Blackwork Band', time: '9:00 AM', duration: '2h', status: 'Completed' },
  { id: 'INK-2845', client: 'Drew Patterson', artist: 'Elena Vasquez', type: 'Watercolor Hummingbird', time: '9:30 AM', duration: '2.5h', status: 'Completed' },
]

const artistSchedule = [
  { name: 'Marcus Chen', status: 'Busy', current: 'Geometric Sleeve - Jordan R.', next: 'Available at 2:30 PM', bookings: 3 },
  { name: 'Elena Vasquez', status: 'Available', current: '-', next: 'Portrait Realism at 12:00 PM', bookings: 2 },
  { name: 'Kai Takahashi', status: 'Off', current: '-', next: 'Japanese Half Sleeve at 2:00 PM', bookings: 1 },
  { name: 'Luna Park', status: 'Available', current: '-', next: 'Fine Line at 3:30 PM', bookings: 2 },
  { name: 'Devon Blake', status: 'Available', current: '-', next: 'Septum Piercing at 4:00 PM', bookings: 3 },
]

const recentBookings = [
  { name: 'Taylor Kim', type: 'New Tattoo', artist: 'Marcus Chen', date: 'Mar 21', time: '2 hours ago' },
  { name: 'Jordan Lee', type: 'Consultation', artist: 'Elena Vasquez', date: 'Mar 22', time: '4 hours ago' },
  { name: 'Morgan Chase', type: 'Touch-up', artist: 'Kai Takahashi', date: 'Mar 20', time: '6 hours ago' },
  { name: 'Quinn Davis', type: 'Piercing', artist: 'Devon Blake', date: 'Mar 19', time: '1 day ago' },
  { name: 'Avery Brooks', type: 'New Tattoo', artist: 'Luna Park', date: 'Mar 23', time: '1 day ago' },
]

function Admin() {
  const [activeTab, setActiveTab] = useState('overview')

  return (
    <div className="admin-page">
      {/* Sidebar */}
      <aside className="admin-sidebar">
        <Link to="/" className="admin-logo">
          <svg width="32" height="32" viewBox="0 0 100 100" fill="none">
            <path d="M50 5 L62 42 L56 42 L56 85 L44 85 L44 42 L38 42 Z" fill="var(--burnt-orange)"/>
            <path d="M44 80 L50 92 L56 80" fill="none" stroke="var(--burnt-orange)" strokeWidth="2.5"/>
            <circle cx="50" cy="38" r="3" fill="var(--off-white)"/>
          </svg>
          <div>
            <span className="admin-logo-main">INKCRAFT</span>
            <span className="admin-logo-sub">ADMIN PANEL</span>
          </div>
        </Link>

        <nav className="admin-nav">
          <button className={activeTab === 'overview' ? 'active' : ''} onClick={() => setActiveTab('overview')}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>
            Dashboard
          </button>
          <button className={activeTab === 'sessions' ? 'active' : ''} onClick={() => setActiveTab('sessions')}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
            Sessions
          </button>
          <button className={activeTab === 'artists' ? 'active' : ''} onClick={() => setActiveTab('artists')}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
            Artists
          </button>
          <button className={activeTab === 'bookings' ? 'active' : ''} onClick={() => setActiveTab('bookings')}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>
            Bookings
          </button>
        </nav>

        <div className="admin-sidebar-footer">
          <Link to="/" className="admin-back-link">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>
            Back to Website
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="admin-main">
        <header className="admin-header">
          <div>
            <h1 className="admin-title">
              {activeTab === 'overview' && 'Dashboard'}
              {activeTab === 'sessions' && "Today's Sessions"}
              {activeTab === 'artists' && 'Artist Schedule'}
              {activeTab === 'bookings' && 'Recent Bookings'}
            </h1>
            <p className="admin-date">Wednesday, March 19, 2026</p>
          </div>
          <div className="admin-user">
            <span>Marcus Chen</span>
            <div className="admin-avatar">MC</div>
          </div>
        </header>

        {/* KPI Cards */}
        {(activeTab === 'overview' || activeTab === 'sessions') && (
          <div className="kpi-grid">
            {kpis.map((kpi, i) => (
              <div key={i} className="kpi-card">
                <div className="kpi-icon">
                  {kpi.icon === 'calendar' && <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--burnt-orange)" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>}
                  {kpi.icon === 'walk' && <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--burnt-orange)" strokeWidth="2"><circle cx="12" cy="5" r="2"/><path d="m9 20 3-6 3 6"/><path d="m6 15 3-3 3 3 3-3 3 3"/></svg>}
                  {kpi.icon === 'revenue' && <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--burnt-orange)" strokeWidth="2"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>}
                  {kpi.icon === 'clients' && <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--burnt-orange)" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>}
                </div>
                <div className="kpi-info">
                  <span className="kpi-label">{kpi.label}</span>
                  <span className="kpi-value">{kpi.value}</span>
                  <span className="kpi-change">{kpi.change}</span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Sessions Table */}
        {(activeTab === 'overview' || activeTab === 'sessions') && (
          <div className="admin-card">
            <div className="admin-card-header">
              <h2>Today&apos;s Sessions</h2>
              <span className="admin-card-count">{sessions.length} sessions</span>
            </div>
            <div className="admin-table-wrap">
              <table className="admin-table">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Client</th>
                    <th>Artist</th>
                    <th>Service</th>
                    <th>Time</th>
                    <th>Duration</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {sessions.map(s => (
                    <tr key={s.id}>
                      <td className="session-id">{s.id}</td>
                      <td>{s.client}</td>
                      <td>{s.artist}</td>
                      <td>{s.type}</td>
                      <td>{s.time}</td>
                      <td>{s.duration}</td>
                      <td>
                        <span className={`status-badge status-${s.status.toLowerCase().replace(' ', '-')}`}>
                          {s.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Artist Schedule */}
        {(activeTab === 'overview' || activeTab === 'artists') && (
          <div className="admin-card">
            <div className="admin-card-header">
              <h2>Artist Schedule</h2>
              <span className="admin-card-count">Today</span>
            </div>
            <div className="artist-schedule-grid">
              {artistSchedule.map(a => (
                <div key={a.name} className="schedule-card">
                  <div className="schedule-header">
                    <h3>{a.name}</h3>
                    <span className={`status-dot status-${a.status.toLowerCase()}`}>{a.status}</span>
                  </div>
                  <div className="schedule-detail">
                    <span className="schedule-label">Current</span>
                    <span>{a.current}</span>
                  </div>
                  <div className="schedule-detail">
                    <span className="schedule-label">Next</span>
                    <span>{a.next}</span>
                  </div>
                  <div className="schedule-bookings">
                    {a.bookings} bookings today
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Recent Bookings */}
        {(activeTab === 'overview' || activeTab === 'bookings') && (
          <div className="admin-card">
            <div className="admin-card-header">
              <h2>Recent Bookings</h2>
              <span className="admin-card-count">Last 48 hours</span>
            </div>
            <div className="bookings-feed">
              {recentBookings.map((b, i) => (
                <div key={i} className="booking-feed-item">
                  <div className="booking-feed-dot"></div>
                  <div className="booking-feed-content">
                    <div className="booking-feed-main">
                      <strong>{b.name}</strong> booked a <span className="booking-type-tag">{b.type}</span> with {b.artist}
                    </div>
                    <div className="booking-feed-meta">
                      <span>Scheduled: {b.date}</span>
                      <span>{b.time}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>
    </div>
  )
}

export default Admin
