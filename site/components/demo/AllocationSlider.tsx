'use client'

import { useState, useEffect } from 'react'
import { DollarSign, TrendingUp, PiggyBank } from 'lucide-react'

interface AllocationSliderProps {
  label: string
  description: string
  value: number
  min: number
  max: number
  step?: number
  onChange: (value: number) => void
  color?: string
  icon?: 'salary' | 'equity' | 'retirement'
  taxLabel?: 'Taxable' | 'Non-Taxable' | 'Deferred'
}

const ICONS = {
  salary: DollarSign,
  equity: TrendingUp,
  retirement: PiggyBank,
}

const TAX_COLORS = {
  'Taxable': { bg: 'rgba(239,68,68,0.1)', text: '#ef4444' },
  'Non-Taxable': { bg: 'rgba(16,185,129,0.1)', text: '#10b981' },
  'Deferred': { bg: 'rgba(245,158,11,0.1)', text: '#f59e0b' },
} as const

function formatDollars(n: number) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(n)
}

export default function AllocationSlider({
  label,
  description,
  value,
  min,
  max,
  step = 1000,
  onChange,
  color = '#EF4444',
  icon,
  taxLabel,
}: AllocationSliderProps) {
  const pct = max > min ? ((value - min) / (max - min)) * 100 : 0
  const [inputText, setInputText] = useState(String(value))
  const [focused, setFocused] = useState(false)

  useEffect(() => {
    if (!focused) setInputText(String(value))
  }, [value, focused])

  const commit = (raw: string) => {
    const parsed = parseInt(raw.replace(/\D/g, ''), 10)
    if (!isNaN(parsed)) {
      const clamped = Math.max(min, Math.min(parsed, max))
      onChange(clamped)
      setInputText(String(clamped))
    } else {
      setInputText(String(value))
    }
  }

  const Icon = icon ? ICONS[icon] : null
  const badge = taxLabel ? TAX_COLORS[taxLabel] : null

  return (
    <div className="rounded-xl bg-white border border-ink-200 p-4 transition-all hover:border-brand-300 hover:shadow-sm">
      {/* Header */}
      <div className="flex items-start justify-between gap-3 mb-3">
        <div className="flex items-start gap-2.5 min-w-0">
          {Icon && (
            <div
              className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-lg"
              style={{ backgroundColor: `${color}18`, color }}
            >
              <Icon size={16} />
            </div>
          )}
          <div className="min-w-0">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="font-semibold text-sm text-ink-900">
                {label}
              </span>
              {badge && (
                <span
                  className="text-[9px] font-bold uppercase tracking-widest px-1.5 py-0.5 rounded-full leading-none"
                  style={{ backgroundColor: badge.bg, color: badge.text }}
                >
                  {taxLabel}
                </span>
              )}
            </div>
            <p className="mt-0.5 text-xs text-ink-500 leading-snug">
              {description}
            </p>
          </div>
        </div>

        {/* Value input */}
        <div className="relative shrink-0 w-28">
          <span className="absolute left-2.5 top-1/2 -translate-y-1/2 text-xs text-ink-400 select-none pointer-events-none">
            $
          </span>
          <input
            type="text"
            inputMode="numeric"
            value={inputText}
            onFocus={(e) => {
              setFocused(true)
              setInputText(String(value))
              e.currentTarget.style.borderColor = color
            }}
            onChange={(e) => setInputText(e.target.value)}
            onBlur={(e) => {
              e.currentTarget.style.borderColor = ''
              setFocused(false)
              commit(inputText)
            }}
            onKeyDown={(e) => e.key === 'Enter' && e.currentTarget.blur()}
            className="w-full pl-6 pr-2 py-1.5 text-sm tabular-nums text-right border border-ink-200 rounded-md bg-ink-50 text-ink-900 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all"
          />
        </div>
      </div>

      {/* Slider track */}
      <div className="relative flex items-center">
        <div className="absolute h-2 w-full overflow-hidden rounded-full pointer-events-none bg-ink-100">
          <div
            className="h-full rounded-full transition-all duration-300"
            style={{ width: `${pct}%`, backgroundColor: color }}
          />
        </div>
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className="relative w-full h-3 appearance-none bg-transparent cursor-pointer"
          style={{
            // @ts-ignore - CSS custom property
            '--thumb-color': color,
          }}
        />
      </div>

      <div className="flex justify-between mt-1.5 text-xs text-ink-400">
        <span>{formatDollars(min)}</span>
        <span>{formatDollars(max)}</span>
      </div>

      {/* CSS for custom slider thumb */}
      <style jsx>{`
        input[type='range']::-webkit-slider-thumb {
          appearance: none;
          width: 18px;
          height: 18px;
          border-radius: 50%;
          background: var(--thumb-color);
          cursor: pointer;
          border: 2px solid white;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }
        input[type='range']::-moz-range-thumb {
          width: 18px;
          height: 18px;
          border-radius: 50%;
          background: var(--thumb-color);
          cursor: pointer;
          border: 2px solid white;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }
      `}</style>
    </div>
  )
}
