import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import ScrollReveal from '../components/ScrollReveal'
import './Calculator.css'

function Calculator() {
  const [purchasePrice, setPurchasePrice] = useState(500000)
  const [downPaymentPercent, setDownPaymentPercent] = useState(20)
  const [downPaymentAmount, setDownPaymentAmount] = useState(100000)
  const [interestRate, setInterestRate] = useState(6.5)
  const [amortization, setAmortization] = useState(30)
  const [frequency, setFrequency] = useState('monthly')
  const [results, setResults] = useState(null)
  const [animatedPayment, setAnimatedPayment] = useState(0)

  useEffect(() => {
    const dp = (purchasePrice * downPaymentPercent) / 100
    setDownPaymentAmount(Math.round(dp))
  }, [purchasePrice, downPaymentPercent])

  useEffect(() => {
    calculateMortgage()
  }, [purchasePrice, downPaymentPercent, interestRate, amortization, frequency])

  const handleDownPaymentAmountChange = (val) => {
    const amount = Number(val)
    setDownPaymentAmount(amount)
    if (purchasePrice > 0) {
      setDownPaymentPercent(Math.round((amount / purchasePrice) * 100 * 100) / 100)
    }
  }

  const calculateMortgage = () => {
    const principal = purchasePrice - (purchasePrice * downPaymentPercent / 100)
    if (principal <= 0) {
      setResults(null)
      return
    }

    const annualRate = interestRate / 100
    const monthlyRate = annualRate / 12
    const totalMonths = amortization * 12

    let monthlyPayment
    if (monthlyRate === 0) {
      monthlyPayment = principal / totalMonths
    } else {
      monthlyPayment = principal * (monthlyRate * Math.pow(1 + monthlyRate, totalMonths)) /
        (Math.pow(1 + monthlyRate, totalMonths) - 1)
    }

    const totalCost = monthlyPayment * totalMonths
    const totalInterest = totalCost - principal
    const interestPercent = (totalInterest / totalCost) * 100
    const principalPercent = (principal / totalCost) * 100

    let displayPayment = monthlyPayment
    let frequencyLabel = 'Monthly'
    if (frequency === 'biweekly') {
      displayPayment = monthlyPayment * 12 / 26
      frequencyLabel = 'Bi-Weekly'
    } else if (frequency === 'weekly') {
      displayPayment = monthlyPayment * 12 / 52
      frequencyLabel = 'Weekly'
    }

    setResults({
      payment: displayPayment,
      frequencyLabel,
      monthlyPayment,
      principal,
      totalCost,
      totalInterest,
      interestPercent,
      principalPercent
    })

    // Animate the payment number
    let start = 0
    const end = displayPayment
    const duration = 600
    const startTime = performance.now()

    const animate = (time) => {
      const progress = Math.min((time - startTime) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setAnimatedPayment(start + (end - start) * eased)
      if (progress < 1) requestAnimationFrame(animate)
    }
    requestAnimationFrame(animate)
  }

  return (
    <div className="calculator-page">
      {/* Hero */}
      <section className="calc-hero">
        <div className="container">
          <ScrollReveal>
            <span className="calc-hero-badge">Financial Tools</span>
            <h1>Mortgage Calculator</h1>
            <p className="calc-hero-desc">
              Calculate your mortgage payments with our comprehensive tool. Adjust parameters
              to explore different scenarios and find the right fit for your budget.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Calculator */}
      <section className="section calc-main-section">
        <div className="container">
          <div className="calc-layout">
            {/* Inputs */}
            <div className="calc-inputs">
              <ScrollReveal>
                <h3 className="calc-panel-title">Loan Parameters</h3>

                <div className="calc-form-group">
                  <label className="form-label">Purchase Price</label>
                  <div className="calc-input-with-prefix">
                    <span className="calc-prefix">$</span>
                    <input
                      type="number"
                      className="form-input"
                      value={purchasePrice}
                      onChange={(e) => setPurchasePrice(Number(e.target.value))}
                      min="0"
                      step="10000"
                    />
                  </div>
                  <input
                    type="range"
                    min="50000"
                    max="3000000"
                    step="10000"
                    value={purchasePrice}
                    onChange={(e) => setPurchasePrice(Number(e.target.value))}
                    className="calc-range"
                  />
                </div>

                <div className="calc-form-group">
                  <label className="form-label">Down Payment</label>
                  <div className="calc-dual-input">
                    <div className="calc-input-with-prefix">
                      <span className="calc-prefix">$</span>
                      <input
                        type="number"
                        className="form-input"
                        value={downPaymentAmount}
                        onChange={(e) => handleDownPaymentAmountChange(e.target.value)}
                        min="0"
                      />
                    </div>
                    <div className="calc-input-with-suffix">
                      <input
                        type="number"
                        className="form-input"
                        value={downPaymentPercent}
                        onChange={(e) => setDownPaymentPercent(Number(e.target.value))}
                        min="0"
                        max="100"
                        step="1"
                      />
                      <span className="calc-suffix">%</span>
                    </div>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="50"
                    step="1"
                    value={downPaymentPercent}
                    onChange={(e) => setDownPaymentPercent(Number(e.target.value))}
                    className="calc-range"
                  />
                </div>

                <div className="calc-form-group">
                  <label className="form-label">Interest Rate</label>
                  <div className="calc-input-with-suffix">
                    <input
                      type="number"
                      className="form-input"
                      value={interestRate}
                      onChange={(e) => setInterestRate(Number(e.target.value))}
                      min="0"
                      max="15"
                      step="0.1"
                    />
                    <span className="calc-suffix">%</span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="12"
                    step="0.1"
                    value={interestRate}
                    onChange={(e) => setInterestRate(Number(e.target.value))}
                    className="calc-range"
                  />
                </div>

                <div className="calc-form-group">
                  <label className="form-label">Amortization Period</label>
                  <div className="calc-input-with-suffix">
                    <input
                      type="number"
                      className="form-input"
                      value={amortization}
                      onChange={(e) => setAmortization(Number(e.target.value))}
                      min="5"
                      max="30"
                      step="5"
                    />
                    <span className="calc-suffix">Years</span>
                  </div>
                  <div className="calc-term-buttons">
                    {[10, 15, 20, 25, 30].map(yr => (
                      <button
                        key={yr}
                        className={`calc-term-btn ${amortization === yr ? 'active' : ''}`}
                        onClick={() => setAmortization(yr)}
                      >
                        {yr}yr
                      </button>
                    ))}
                  </div>
                </div>

                <div className="calc-form-group">
                  <label className="form-label">Payment Frequency</label>
                  <select
                    className="form-select"
                    value={frequency}
                    onChange={(e) => setFrequency(e.target.value)}
                  >
                    <option value="monthly">Monthly (12/year)</option>
                    <option value="biweekly">Bi-Weekly (26/year)</option>
                    <option value="weekly">Weekly (52/year)</option>
                  </select>
                </div>
              </ScrollReveal>
            </div>

            {/* Results */}
            <div className="calc-results">
              <ScrollReveal direction="right">
                <div className="calc-results-panel">
                  <h3 className="calc-panel-title">Your Payment</h3>

                  {results ? (
                    <>
                      <div className="calc-payment-display">
                        <span className="calc-payment-label">{results.frequencyLabel} Payment</span>
                        <span className="calc-payment-amount">
                          ${animatedPayment.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                        </span>
                      </div>

                      {/* Pie Chart */}
                      <div className="calc-chart-container">
                        <div
                          className="calc-pie-chart"
                          style={{
                            background: `conic-gradient(var(--navy) 0deg, var(--navy) ${results.principalPercent * 3.6}deg, var(--gold) ${results.principalPercent * 3.6}deg, var(--gold) 360deg)`
                          }}
                        >
                          <div className="calc-pie-center">
                            <span className="calc-pie-center-label">Loan Amount</span>
                            <span className="calc-pie-center-value">
                              ${results.principal.toLocaleString(undefined, { maximumFractionDigits: 0 })}
                            </span>
                          </div>
                        </div>
                        <div className="calc-chart-legend">
                          <div className="calc-legend-item">
                            <span className="calc-legend-color" style={{ background: 'var(--navy)' }} />
                            <span>Principal ({results.principalPercent.toFixed(1)}%)</span>
                          </div>
                          <div className="calc-legend-item">
                            <span className="calc-legend-color" style={{ background: 'var(--gold)' }} />
                            <span>Interest ({results.interestPercent.toFixed(1)}%)</span>
                          </div>
                        </div>
                      </div>

                      {/* Summary */}
                      <div className="calc-summary">
                        <div className="calc-summary-row">
                          <span>Loan Amount (Principal)</span>
                          <span className="calc-summary-value">
                            ${results.principal.toLocaleString(undefined, { maximumFractionDigits: 0 })}
                          </span>
                        </div>
                        <div className="calc-summary-row">
                          <span>Total Interest</span>
                          <span className="calc-summary-value">
                            ${results.totalInterest.toLocaleString(undefined, { maximumFractionDigits: 0 })}
                          </span>
                        </div>
                        <div className="calc-summary-row calc-summary-total">
                          <span>Total Cost of Mortgage</span>
                          <span className="calc-summary-value">
                            ${results.totalCost.toLocaleString(undefined, { maximumFractionDigits: 0 })}
                          </span>
                        </div>
                      </div>

                      <Link to="/contact" className="btn btn-primary btn-lg" style={{ width: '100%', marginTop: '24px' }}>
                        Speak to an Advisor
                      </Link>
                    </>
                  ) : (
                    <div className="calc-no-results">
                      <p>Adjust the parameters to calculate your payment.</p>
                    </div>
                  )}
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Calculator
