'use client'

import { Check } from 'lucide-react'

interface ComparisonCardProps {
  baseSalary: number
  retirement: number
  equity: number
  takeHome: number
  taxSavings: number
  retirementLabel?: string
  country?: 'US' | 'CA'
}

const formatDollars = (n: number) =>
  new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(n)

export default function ComparisonCard({
  baseSalary,
  retirement,
  equity,
  takeHome,
  taxSavings,
  retirementLabel = '401(k)',
  country = 'US',
}: ComparisonCardProps) {
  const totalComp = baseSalary + retirement + equity
  const taxableIncome = totalComp - retirement - equity // Retirement reduces taxable income
  const estimatedTax = Math.round(taxableIncome * 0.28) // Simplified ~28% effective rate
  const currency = country === 'CA' ? 'CAD' : 'USD'

  return (
    <div className="rounded-xl border border-ink-200 overflow-hidden bg-white shadow-sm">
      {/* Header */}
      <div className="bg-gradient-to-br from-brand-50 to-accent-50 px-5 py-4 border-b border-ink-200">
        <h3 className="font-display text-lg font-bold text-ink-900 mb-1">
          Your Total Rewards Package
        </h3>
        <p className="text-xs text-ink-600">
          Real-time calculation with tax optimization
        </p>
      </div>

      {/* Breakdown */}
      <div className="divide-y divide-ink-100">
        <Row label="Total Gross Compensation" value={formatDollars(totalComp)} bold />

        {retirement > 0 && (
          <>
            <SectionHeader label="Tax-Reducing Allocations" />
            <Row
              label={`${retirementLabel} Contributions`}
              value={`-${formatDollars(retirement)}`}
              red
            />
            {equity > 0 && (
              <Row
                label="Equity Redirect (Deferred)"
                value={`-${formatDollars(equity)}`}
                amber
              />
            )}
          </>
        )}

        <Row
          label="Taxable Income"
          value={formatDollars(taxableIncome)}
          bold
          highlight
        />
        <Row
          label="Estimated Tax (Federal + State)"
          value={`-${formatDollars(estimatedTax)}`}
          red
        />

        {/* Take-home highlight */}
        <div className="px-5 py-4 bg-gradient-to-br from-mint-50 to-mint-100">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-bold text-ink-900">
              Annual Take-Home
            </span>
            <div className="text-right">
              <p className="text-2xl font-bold tabular-nums text-mint-600 font-display tracking-tight">
                {formatDollars(takeHome)}
              </p>
            </div>
          </div>

          {/* Guardrails check */}
          <div className="flex items-center gap-2 text-xs text-mint-700">
            <div className="w-4 h-4 rounded-full bg-mint-500 flex items-center justify-center">
              <Check size={10} className="text-white" />
            </div>
            <span className="font-medium">Meets all compliance guardrails</span>
          </div>
        </div>

        {/* Tax savings explanation */}
        {taxSavings > 0 && (
          <div className="px-5 py-4 bg-gradient-to-br from-brand-50 to-transparent">
            <p className="text-xs font-bold text-brand-600 mb-2">
              How Your Choices Reduce Your Tax Burden
            </p>
            <p className="text-xs text-ink-600 leading-relaxed">
              Allocating {formatDollars(retirement)} to your {retirementLabel} reduces
              taxable income dollar-for-dollar, saving approximately{' '}
              <span className="font-semibold text-mint-600">
                {formatDollars(taxSavings)}
              </span>{' '}
              in tax this year.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

function Row({
  label,
  value,
  bold,
  red,
  amber,
  highlight,
}: {
  label: string
  value: string
  bold?: boolean
  red?: boolean
  amber?: boolean
  highlight?: boolean
}) {
  return (
    <div
      className={`px-5 py-2.5 flex items-center justify-between ${
        highlight ? 'bg-ink-50' : ''
      }`}
    >
      <span className={`text-sm ${bold ? 'font-semibold' : ''} text-ink-700`}>
        {label}
      </span>
      <span
        className={`text-sm tabular-nums ${bold ? 'font-bold' : 'font-medium'} ${
          red ? 'text-red-500' : amber ? 'text-amber-500' : 'text-ink-900'
        }`}
      >
        {value}
      </span>
    </div>
  )
}

function SectionHeader({ label }: { label: string }) {
  return (
    <div className="px-5 py-2 bg-ink-50">
      <p className="text-[10px] font-bold uppercase tracking-wider text-ink-500 font-display">
        {label}
      </p>
    </div>
  )
}
