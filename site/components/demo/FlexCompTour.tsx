'use client'

import { useState, useEffect, useRef } from 'react'
import Shepherd from 'shepherd.js'
import type { Tour } from 'shepherd.js'
import 'shepherd.js/dist/css/shepherd.css'
import { X, Play, DollarSign } from 'lucide-react'
import AllocationSlider from './AllocationSlider'
import ComparisonCard from './ComparisonCard'
import { useCountry } from '@/hooks/useCountry'

interface FlexCompTourProps {
  onClose: () => void
}

export default function FlexCompTour({ onClose }: FlexCompTourProps) {
  const country = useCountry()
  const totalComp = 150000 // Fixed total comp package (employer cost)
  const [retirement, setRetirement] = useState(0)
  const [equity, setEquity] = useState(0)
  const tourRef = useRef<Tour | null>(null)
  const [currentStep, setCurrentStep] = useState(0)

  // Country-specific labels
  const retirementLabel = country === 'CA' ? 'RRSP' : '401(k)'
  const retirementFull = country === 'CA' ? 'RRSP Contribution' : '401(k) Contribution'
  const currency = country === 'CA' ? 'CAD' : 'USD'

  // Calculate base salary as remainder
  const baseSalary = totalComp - retirement - equity

  // Calculate take-home and tax savings
  // Retirement reduces taxable income (pre-tax deduction)
  // Equity comes out post-tax (deferred compensation)
  const taxableIncome = totalComp - retirement // NOT baseSalary - retirement (would be double subtraction)
  const estimatedTax = Math.round(taxableIncome * 0.28)
  const takeHome = taxableIncome - estimatedTax - equity // After-tax, minus equity redirect
  const baselineTax = Math.round(totalComp * 0.28) // If everything was base salary
  const taxSavings = baselineTax - estimatedTax

  useEffect(() => {
    // Only create tour once on mount
    if (tourRef.current) return

    const tour = new Shepherd.Tour({
      useModalOverlay: true,
      defaultStepOptions: {
        classes: 'shepherd-theme-custom',
        scrollTo: false,
        cancelIcon: {
          enabled: true,
        },
      },
    })

    tour.addStep({
      id: 'intro',
      text: `
        <div class="shepherd-content-wrapper">
          <h3 class="shepherd-title">Meet Sarah</h3>
          <p class="shepherd-text">Sarah's employer provides <strong>$150K total compensation</strong>. She can allocate this across salary, retirement, and equity. Let's see how.</p>
        </div>
      `,
      buttons: [
        {
          text: 'Start Tour',
          action: tour.next,
          classes: 'shepherd-button-primary',
        },
      ],
    })

    tour.addStep({
      id: 'total-comp',
      text: `
        <div class="shepherd-content-wrapper">
          <h3 class="shepherd-title">Total Compensation</h3>
          <p class="shepherd-text">Sarah's employer commits <strong>$150,000</strong> in total compensation. Right now it's all base salary. Let's see what else she can do with it.</p>
        </div>
      `,
      attachTo: {
        element: '[data-tour="total-comp"]',
        on: 'bottom',
      },
      buttons: [
        {
          text: 'Back',
          action: tour.back,
          classes: 'shepherd-button-secondary',
        },
        {
          text: 'Next',
          action: tour.next,
          classes: 'shepherd-button-primary',
        },
      ],
    })

    tour.addStep({
      id: 'retirement-slider',
      text: `
        <div class="shepherd-content-wrapper">
          <h3 class="shepherd-title">${retirementFull}</h3>
          <p class="shepherd-text">Sarah allocates <strong>$20K to her ${retirementLabel}</strong>. Watch her base salary adjust automatically. This reduces taxable income, creating immediate tax savings.</p>
        </div>
      `,
      attachTo: {
        element: '[data-tour="retirement-slider"]',
        on: 'bottom',
      },
      buttons: [
        {
          text: 'Back',
          action: tour.back,
          classes: 'shepherd-button-secondary',
        },
        {
          text: 'Next',
          action: () => {
            // Auto-animate: add retirement contribution (base salary will auto-calculate)
            setRetirement(20000)
            setTimeout(() => tour.next(), 800)
          },
          classes: 'shepherd-button-primary',
        },
      ],
    })

    tour.addStep({
      id: 'equity-slider',
      text: `
        <div class="shepherd-content-wrapper">
          <h3 class="shepherd-title">Equity Allocation</h3>
          <p class="shepherd-text">She adds <strong>$30K in equity</strong> for long-term growth. The comparison card updates instantly with full tax implications.</p>
        </div>
      `,
      attachTo: {
        element: '[data-tour="equity-slider"]',
        on: 'bottom',
      },
      buttons: [
        {
          text: 'Back',
          action: tour.back,
          classes: 'shepherd-button-secondary',
        },
        {
          text: 'Next',
          action: () => {
            // Auto-animate: add equity (base salary auto-adjusts)
            setEquity(30000)
            setTimeout(() => tour.next(), 800)
          },
          classes: 'shepherd-button-primary',
        },
      ],
    })

    tour.addStep({
      id: 'comparison-card',
      text: `
        <div class="shepherd-content-wrapper">
          <h3 class="shepherd-title">Smart Guardrails</h3>
          <p class="shepherd-text">Every configuration is validated against compliance rules. Sarah sees her tax savings and take-home pay update instantly.</p>
        </div>
      `,
      attachTo: {
        element: '[data-tour="comparison-card"]',
        on: 'left',
      },
      buttons: [
        {
          text: 'Back',
          action: tour.back,
          classes: 'shepherd-button-secondary',
        },
        {
          text: 'Next',
          action: tour.next,
          classes: 'shepherd-button-primary',
        },
      ],
    })

    tour.addStep({
      id: 'final',
      text: `
        <div class="shepherd-content-wrapper">
          <h3 class="shepherd-title">This is Flexible Compensation</h3>
          <p class="shepherd-text">Employees get choice. Employers maintain control. Everyone saves on taxes. Ready to bring this to your team?</p>
        </div>
      `,
      buttons: [
        {
          text: 'Explore Freely',
          action: () => {
            tour.complete()
            setCurrentStep(5) // Free exploration mode
          },
          classes: 'shepherd-button-secondary',
        },
        {
          text: 'Schedule Demo',
          action: () => {
            window.location.href = '/contact'
          },
          classes: 'shepherd-button-primary',
        },
      ],
    })

    tour.on('show', (event) => {
      const stepIndex = tour.steps.indexOf(event.step)
      setCurrentStep(stepIndex)
    })

    tour.on('complete', () => {
      setCurrentStep(5) // Free exploration mode
    })

    tour.on('cancel', () => {
      onClose()
    })

    tourRef.current = tour

    // Auto-start the tour when modal opens
    setTimeout(() => tour.start(), 100)

    return () => {
      // Clean up - cancel the tour if active
      if (tourRef.current?.isActive()) {
        tourRef.current.cancel()
      }
    }
    // Empty deps - only create tour once on mount
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const startTour = () => {
    if (tourRef.current) {
      // Reset allocations (base salary auto-calculates)
      setRetirement(0)
      setEquity(0)
      setCurrentStep(0)
      tourRef.current.start()
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
      <div className="relative w-full max-w-6xl bg-white rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-ink-200 bg-gradient-to-r from-brand-50 to-accent-50">
          <div>
            <h2 className="font-display text-xl font-bold text-ink-900">
              Interactive Demo: Flexible Compensation
            </h2>
            <p className="text-sm text-ink-600 mt-0.5">
              {currentStep === 5
                ? 'Explore freely or schedule a full demo'
                : `Step ${currentStep + 1} of 6 — 2-minute guided tour`}
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-ink-100 transition-colors"
          >
            <X size={20} className="text-ink-500" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Left: Allocation sliders */}
            <div className="space-y-4">
              <div>
                <h3 className="font-display text-lg font-bold text-ink-900 mb-4">
                  Allocate Your Total Rewards
                </h3>
              </div>

              {/* Total Compensation Display */}
              <div data-tour="total-comp" className="rounded-xl bg-gradient-to-br from-brand-50 to-accent-50 border-2 border-brand-200 p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs font-semibold text-brand-600 uppercase tracking-wider mb-1">
                      Total Compensation
                    </p>
                    <p className="text-sm text-ink-600">
                      Fixed employer cost
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-ink-900 font-display tabular-nums">
                      ${totalComp.toLocaleString()}
                    </p>
                  </div>
                </div>
              </div>

              {/* Base Salary - Read-only display */}
              <div data-tour="base-salary" className="rounded-xl bg-white border border-ink-200 p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-start gap-2.5">
                    <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-lg bg-brand-50 text-brand-500">
                      <DollarSign size={16} />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-sm text-ink-900">Base Salary</span>
                        <span className="text-[9px] font-bold uppercase tracking-widest px-1.5 py-0.5 rounded-full leading-none bg-red-50 text-red-500">
                          Taxable
                        </span>
                      </div>
                      <p className="mt-0.5 text-xs text-ink-500 leading-snug">
                        Calculated as remainder after allocations
                      </p>
                    </div>
                  </div>
                  <span className="text-lg font-bold text-ink-900 tabular-nums">
                    ${baseSalary.toLocaleString()}
                  </span>
                </div>
                <div className="h-2 w-full bg-ink-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-brand-500 transition-all duration-500"
                    style={{ width: `${(baseSalary / totalComp) * 100}%` }}
                  />
                </div>
              </div>

              <div data-tour="retirement-slider">
                <AllocationSlider
                  label={retirementFull}
                  description="Pre-tax retirement savings"
                  value={retirement}
                  min={0}
                  max={Math.min(40000, totalComp - equity)}
                  step={1000}
                  onChange={setRetirement}
                  color="#10B981"
                  icon="retirement"
                  taxLabel="Non-Taxable"
                />
              </div>

              <div data-tour="equity-slider">
                <AllocationSlider
                  label="Equity Grant"
                  description="Stock options or RSUs"
                  value={equity}
                  min={0}
                  max={Math.min(60000, totalComp - retirement)}
                  step={1000}
                  onChange={setEquity}
                  color="#F59E0B"
                  icon="equity"
                  taxLabel="Deferred"
                />
              </div>
            </div>

            {/* Right: Comparison card */}
            <div data-tour="comparison-card">
              <h3 className="font-display text-lg font-bold text-ink-900 mb-4">
                Live Tax Calculation
              </h3>
              <ComparisonCard
                baseSalary={baseSalary}
                retirement={retirement}
                equity={equity}
                takeHome={takeHome}
                taxSavings={taxSavings}
                retirementLabel={retirementLabel}
                country={country}
              />
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between px-6 py-4 border-t border-ink-200 bg-ink-50">
          {currentStep === 0 ? (
            <button
              onClick={startTour}
              className="flex items-center gap-2 bg-brand-600 hover:bg-brand-700 text-white font-semibold px-6 py-2.5 rounded-lg transition-colors"
            >
              <Play size={16} />
              Start Guided Tour
            </button>
          ) : currentStep === 5 ? (
            <>
              <button
                onClick={startTour}
                className="text-sm text-ink-600 hover:text-ink-900 font-medium transition-colors"
              >
                Replay Tour
              </button>
              <a
                href="/contact"
                className="bg-brand-600 hover:bg-brand-700 text-white font-semibold px-6 py-2.5 rounded-lg transition-colors"
              >
                Schedule Full Demo
              </a>
            </>
          ) : (
            <div className="flex items-center gap-3">
              <div className="flex gap-1">
                {Array.from({ length: 6 }).map((_, i) => (
                  <div
                    key={i}
                    className={`h-1.5 w-8 rounded-full transition-all ${
                      i <= currentStep ? 'bg-brand-500' : 'bg-ink-200'
                    }`}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Custom Shepherd styles */}
      <style jsx global>{`
        .shepherd-modal-overlay-container {
          opacity: 0.4 !important;
        }

        .shepherd-element {
          max-width: 400px;
          z-index: 9999;
        }

        .shepherd-content {
          padding: 0;
          border-radius: 12px;
          overflow: hidden;
        }

        .shepherd-content-wrapper {
          padding: 20px;
        }

        .shepherd-title {
          font-family: var(--font-display);
          font-size: 18px;
          font-weight: 700;
          color: #18181b;
          margin: 0 0 12px 0;
        }

        .shepherd-text {
          font-size: 14px;
          line-height: 1.6;
          color: #52525b;
          margin: 0;
        }

        .shepherd-footer {
          padding: 16px 20px;
          background: #f9fafb;
          border-top: 1px solid #e5e7eb;
          display: flex;
          justify-content: flex-end;
          gap: 8px;
        }

        .shepherd-button {
          padding: 8px 16px;
          border-radius: 8px;
          font-size: 14px;
          font-weight: 600;
          border: none;
          cursor: pointer;
          transition: all 0.15s;
        }

        .shepherd-button-primary {
          background: #ef4444;
          color: white;
        }

        .shepherd-button-primary:hover {
          background: #dc2626;
        }

        .shepherd-button-secondary {
          background: white;
          color: #52525b;
          border: 1px solid #e5e7eb;
        }

        .shepherd-button-secondary:hover {
          background: #f9fafb;
        }

        .shepherd-cancel-icon {
          color: #9ca3af;
        }

        .shepherd-cancel-icon:hover {
          color: #52525b;
        }

        .shepherd-arrow::before {
          background: white;
        }
      `}</style>
    </div>
  )
}
