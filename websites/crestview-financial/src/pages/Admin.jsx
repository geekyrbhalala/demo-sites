import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import './Admin.css'

function Admin() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [animatedKPIs, setAnimatedKPIs] = useState({ clients: 0, pipeline: 0, mortgages: 0, revenue: 0 })
  const chartRef = useRef(null)
  const [chartAnimated, setChartAnimated] = useState(false)

  // Animate KPIs on mount
  useEffect(() => {
    const targets = { clients: 342, pipeline: 12.4, mortgages: 89, revenue: 187 }
    const duration = 1500
    const start = performance.now()

    const animate = (time) => {
      const progress = Math.min((time - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setAnimatedKPIs({
        clients: Math.floor(targets.clients * eased),
        pipeline: parseFloat((targets.pipeline * eased).toFixed(1)),
        mortgages: Math.floor(targets.mortgages * eased),
        revenue: Math.floor(targets.revenue * eased)
      })
      if (progress < 1) requestAnimationFrame(animate)
    }
    requestAnimationFrame(animate)
  }, [])

  // Animate chart on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setChartAnimated(true)
          observer.disconnect()
        }
      },
      { threshold: 0.3 }
    )

    if (chartRef.current) observer.observe(chartRef.current)
    return () => observer.disconnect()
  }, [])

  const kpis = [
    {
      label: 'Active Clients',
      value: animatedKPIs.clients,
      format: (v) => v.toString(),
      change: '+12',
      changeLabel: 'this month',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4-4v2"/>
          <circle cx="9" cy="7" r="4"/>
          <path d="M23 21v-2a4 4 0 00-3-3.87"/>
          <path d="M16 3.13a4 4 0 010 7.75"/>
        </svg>
      )
    },
    {
      label: 'Pipeline Value',
      value: animatedKPIs.pipeline,
      format: (v) => `$${v}M`,
      change: '+$2.1M',
      changeLabel: 'vs last month',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <line x1="12" y1="1" x2="12" y2="23"/>
          <path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/>
        </svg>
      )
    },
    {
      label: 'Mortgages Closed',
      value: animatedKPIs.mortgages,
      format: (v) => v.toString(),
      change: '+8',
      changeLabel: 'this quarter',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/>
          <polyline points="9 22 9 12 15 12 15 22"/>
        </svg>
      )
    },
    {
      label: 'Monthly Revenue',
      value: animatedKPIs.revenue,
      format: (v) => `$${v}K`,
      change: '+15%',
      changeLabel: 'vs last month',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/>
          <polyline points="17 6 23 6 23 12"/>
        </svg>
      )
    }
  ]

  const pipeline = [
    { id: 'APP-2024-001', client: 'James & Linda Morrison', type: 'Residential Purchase', amount: '$680,000', status: 'Funded', date: '2024-03-15' },
    { id: 'APP-2024-002', client: 'TechVentures LLC', type: 'Commercial Mortgage', amount: '$2,400,000', status: 'Approved', date: '2024-03-12' },
    { id: 'APP-2024-003', client: 'Maria Santos', type: 'Refinance', amount: '$425,000', status: 'Under Review', date: '2024-03-10' },
    { id: 'APP-2024-004', client: 'David Park', type: 'Residential Purchase', amount: '$550,000', status: 'Submitted', date: '2024-03-08' },
    { id: 'APP-2024-005', client: 'Greenfield Realty Group', type: 'Commercial Mortgage', amount: '$3,800,000', status: 'Under Review', date: '2024-03-05' },
    { id: 'APP-2024-006', client: 'Emily & Tom Watson', type: 'Residential Purchase', amount: '$375,000', status: 'Approved', date: '2024-03-01' }
  ]

  const filteredPipeline = pipeline.filter(p =>
    p.client.toLowerCase().includes(searchQuery.toLowerCase()) ||
    p.id.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const statusColors = {
    'Funded': { bg: 'rgba(39, 174, 96, 0.1)', color: '#27ae60' },
    'Approved': { bg: 'rgba(52, 152, 219, 0.1)', color: '#3498db' },
    'Under Review': { bg: 'rgba(243, 156, 18, 0.1)', color: '#f39c12' },
    'Submitted': { bg: 'rgba(149, 165, 166, 0.1)', color: '#95a5a6' }
  }

  // Chart data - 6 months of performance
  const chartData = [
    { month: 'Oct', value: 142 },
    { month: 'Nov', value: 158 },
    { month: 'Dec', value: 135 },
    { month: 'Jan', value: 168 },
    { month: 'Feb', value: 175 },
    { month: 'Mar', value: 187 }
  ]

  const chartMax = Math.max(...chartData.map(d => d.value))
  const chartMin = Math.min(...chartData.map(d => d.value)) - 20
  const chartHeight = 200
  const chartWidth = 500
  const padding = 40

  const getY = (value) => {
    return chartHeight - padding - ((value - chartMin) / (chartMax - chartMin)) * (chartHeight - 2 * padding)
  }

  const getX = (index) => {
    return padding + (index / (chartData.length - 1)) * (chartWidth - 2 * padding)
  }

  const linePath = chartData.map((d, i) => {
    const x = getX(i)
    const y = getY(d.value)
    return `${i === 0 ? 'M' : 'L'} ${x} ${y}`
  }).join(' ')

  const areaPath = linePath + ` L ${getX(chartData.length - 1)} ${chartHeight - padding} L ${getX(0)} ${chartHeight - padding} Z`

  return (
    <div className="admin-page">
      {/* Sidebar */}
      <aside className={`admin-sidebar ${sidebarOpen ? 'open' : ''}`}>
        <div className="admin-sidebar-header">
          <Link to="/" className="admin-sidebar-logo">
            <svg width="32" height="32" viewBox="0 0 40 40" fill="none">
              <path d="M20 4L6 28H14L20 16L26 28H34L20 4Z" fill="var(--white)" />
              <path d="M20 16L14 28H26L20 16Z" fill="var(--gold)" opacity="0.8" />
            </svg>
            <span>CRESTVIEW</span>
          </Link>
        </div>

        <nav className="admin-sidebar-nav">
          <a href="#" className="admin-nav-item active">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="3" width="7" height="7"/>
              <rect x="14" y="3" width="7" height="7"/>
              <rect x="3" y="14" width="7" height="7"/>
              <rect x="14" y="14" width="7" height="7"/>
            </svg>
            <span>Dashboard</span>
          </a>
          <a href="#" className="admin-nav-item">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4-4v2"/>
              <circle cx="9" cy="7" r="4"/>
              <path d="M23 21v-2a4 4 0 00-3-3.87"/>
              <path d="M16 3.13a4 4 0 010 7.75"/>
            </svg>
            <span>Clients</span>
          </a>
          <a href="#" className="admin-nav-item">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/>
              <polyline points="14 2 14 8 20 8"/>
            </svg>
            <span>Applications</span>
          </a>
          <a href="#" className="admin-nav-item">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/>
              <polyline points="17 6 23 6 23 12"/>
            </svg>
            <span>Analytics</span>
          </a>
          <a href="#" className="admin-nav-item">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="3"/>
              <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z"/>
            </svg>
            <span>Settings</span>
          </a>
        </nav>

        <div className="admin-sidebar-footer">
          <Link to="/" className="admin-nav-item">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4"/>
              <polyline points="16 17 21 12 16 7"/>
              <line x1="21" y1="12" x2="9" y2="12"/>
            </svg>
            <span>Sign Out</span>
          </Link>
        </div>
      </aside>

      {/* Mobile sidebar overlay */}
      {sidebarOpen && <div className="admin-overlay" onClick={() => setSidebarOpen(false)} />}

      {/* Main Content */}
      <main className="admin-main">
        {/* Top Bar */}
        <header className="admin-topbar">
          <button className="admin-menu-btn" onClick={() => setSidebarOpen(!sidebarOpen)}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="3" y1="6" x2="21" y2="6"/>
              <line x1="3" y1="12" x2="21" y2="12"/>
              <line x1="3" y1="18" x2="21" y2="18"/>
            </svg>
          </button>
          <h1 className="admin-page-title">Dashboard</h1>
          <div className="admin-topbar-right">
            <div className="admin-search">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8"/>
                <line x1="21" y1="21" x2="16.65" y2="16.65"/>
              </svg>
              <input
                type="text"
                placeholder="Search clients..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="admin-search-input"
              />
            </div>
            <div className="admin-user">
              <div className="admin-user-avatar">JB</div>
              <span className="admin-user-name">J. Blake</span>
            </div>
          </div>
        </header>

        {/* KPI Cards */}
        <div className="admin-kpis">
          {kpis.map((kpi, i) => (
            <div key={i} className="admin-kpi-card" style={{ animationDelay: `${i * 100}ms` }}>
              <div className="admin-kpi-header">
                <div className="admin-kpi-icon">{kpi.icon}</div>
                <div className="admin-kpi-change">
                  <span className="admin-kpi-change-value">{kpi.change}</span>
                  <span className="admin-kpi-change-label">{kpi.changeLabel}</span>
                </div>
              </div>
              <div className="admin-kpi-value">{kpi.format(kpi.value)}</div>
              <div className="admin-kpi-label">{kpi.label}</div>
            </div>
          ))}
        </div>

        {/* Chart and Pipeline */}
        <div className="admin-content-grid">
          {/* Chart */}
          <div className="admin-chart-card" ref={chartRef}>
            <div className="admin-card-header">
              <h3>Monthly Revenue</h3>
              <span className="admin-card-badge">Last 6 months</span>
            </div>
            <div className="admin-chart-wrap">
              <svg viewBox={`0 0 ${chartWidth} ${chartHeight}`} className="admin-chart-svg">
                {/* Grid lines */}
                {[0, 1, 2, 3, 4].map(i => {
                  const val = chartMin + ((chartMax - chartMin) / 4) * i
                  const y = getY(val)
                  return (
                    <g key={i}>
                      <line x1={padding} y1={y} x2={chartWidth - padding} y2={y} stroke="var(--medium-gray)" strokeWidth="1" strokeDasharray="4 4" />
                      <text x={padding - 8} y={y + 4} textAnchor="end" fill="var(--text-gray)" fontSize="10" fontFamily="var(--font-mono)">
                        ${Math.round(val)}K
                      </text>
                    </g>
                  )
                })}

                {/* X-axis labels */}
                {chartData.map((d, i) => (
                  <text key={i} x={getX(i)} y={chartHeight - 10} textAnchor="middle" fill="var(--text-gray)" fontSize="11" fontFamily="var(--font-body)">
                    {d.month}
                  </text>
                ))}

                {/* Area fill */}
                <path
                  d={areaPath}
                  fill="url(#chartGradient)"
                  opacity={chartAnimated ? 0.15 : 0}
                  style={{ transition: 'opacity 0.8s ease' }}
                />

                {/* Line */}
                <path
                  d={linePath}
                  fill="none"
                  stroke="var(--gold)"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeDasharray={chartAnimated ? 'none' : '1000'}
                  strokeDashoffset={chartAnimated ? 0 : 1000}
                  style={{ transition: 'stroke-dashoffset 1.2s ease' }}
                />

                {/* Data points */}
                {chartData.map((d, i) => (
                  <g key={i}>
                    <circle
                      cx={getX(i)}
                      cy={getY(d.value)}
                      r={chartAnimated ? 5 : 0}
                      fill="var(--navy)"
                      stroke="var(--gold)"
                      strokeWidth="2.5"
                      style={{ transition: `r 0.3s ease ${i * 100 + 600}ms` }}
                    />
                    <text
                      x={getX(i)}
                      y={getY(d.value) - 14}
                      textAnchor="middle"
                      fill="var(--navy)"
                      fontSize="11"
                      fontWeight="700"
                      fontFamily="var(--font-mono)"
                      opacity={chartAnimated ? 1 : 0}
                      style={{ transition: `opacity 0.3s ease ${i * 100 + 800}ms` }}
                    >
                      ${d.value}K
                    </text>
                  </g>
                ))}

                <defs>
                  <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="var(--gold)" />
                    <stop offset="100%" stopColor="var(--gold)" stopOpacity="0" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>

          {/* Pipeline Table */}
          <div className="admin-pipeline-card">
            <div className="admin-card-header">
              <h3>Application Pipeline</h3>
              <span className="admin-card-badge">{pipeline.length} active</span>
            </div>
            <div className="admin-table-wrap">
              <table className="admin-table">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Client</th>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredPipeline.map((item, i) => (
                    <tr key={i}>
                      <td className="admin-table-id">{item.id}</td>
                      <td className="admin-table-client">{item.client}</td>
                      <td>{item.type}</td>
                      <td className="admin-table-amount">{item.amount}</td>
                      <td>
                        <span
                          className="admin-status-badge"
                          style={{
                            background: statusColors[item.status]?.bg,
                            color: statusColors[item.status]?.color
                          }}
                        >
                          {item.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                  {filteredPipeline.length === 0 && (
                    <tr>
                      <td colSpan="5" style={{ textAlign: 'center', padding: '32px', color: 'var(--text-gray)' }}>
                        No matching applications found.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Admin
