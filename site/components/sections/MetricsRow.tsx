import { AnimateIn } from '@/components/ui/animate-in'
import { Counter } from '@/components/ui/counter'
import { TrendingDown, Clock, DollarSign, Zap } from 'lucide-react'

interface Metric {
  value: string
  label: string
  description: string
  accent?: 'brand' | 'mint' | 'purple' | 'accent'
  icon?: 'dollar' | 'clock' | 'trending' | 'zap'
  numericValue?: number
  prefix?: string
  suffix?: string
}

interface MetricsRowProps {
  eyebrow?: string
  headline?: string
  subhead?: string
  metrics: Metric[]
}

export function MetricsRow({ eyebrow, headline, subhead, metrics }: MetricsRowProps) {
  const accentClass = {
    brand: 'text-brand-600',
    mint: 'text-accent-600',
    purple: 'text-intelligence-500',
    accent: 'text-accent-600',
  }

  const borderClass = {
    brand: 'border-brand-200 bg-gradient-to-br from-brand-50 to-brand-100/50',
    mint: 'border-accent-200 bg-gradient-to-br from-accent-50 to-accent-100/50',
    purple: 'border-intelligence-200 bg-gradient-to-br from-intelligence-50 to-intelligence-100/50',
    accent: 'border-accent-200 bg-gradient-to-br from-accent-50 to-accent-100/50',
  }

  const iconMap = {
    dollar: DollarSign,
    clock: Clock,
    trending: TrendingDown,
    zap: Zap,
  }

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {(eyebrow || headline || subhead) && (
          <AnimateIn>
            <div className="text-center max-w-2xl mx-auto mb-16">
              {eyebrow && (
                <p className="text-xs font-semibold tracking-widest text-brand-600 uppercase mb-4">
                  {eyebrow}
                </p>
              )}
              {headline && (
                <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-ink-950 mb-4">
                  {headline}
                </h2>
              )}
              {subhead && (
                <p className="text-lg text-ink-500 leading-relaxed">{subhead}</p>
              )}
            </div>
          </AnimateIn>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((m, i) => {
            const Icon = m.icon ? iconMap[m.icon] : null
            const accent = m.accent || 'brand'
            return (
              <AnimateIn key={m.value + m.label} delay={i * 0.08}>
                <div className={`group p-6 rounded-2xl border ${borderClass[accent]} hover:shadow-xl hover:scale-105 transition-all duration-300 relative overflow-hidden`}>
                  {/* Animated gradient border on hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className={`absolute inset-[1px] rounded-2xl ${borderClass[accent]}`}></div>
                  </div>

                  <div className="relative">
                    {/* Icon */}
                    {Icon && (
                      <div className={`w-10 h-10 rounded-lg ${borderClass[accent]} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}>
                        <Icon className={`w-5 h-5 ${accentClass[accent]}`} />
                      </div>
                    )}

                    {/* Value with counter */}
                    <p className={`font-display text-4xl font-extrabold mb-2 ${accentClass[accent]}`}>
                      {m.numericValue !== undefined ? (
                        <Counter
                          end={m.numericValue}
                          duration={2000}
                          prefix={m.prefix}
                          suffix={m.suffix}
                          decimals={m.suffix === '%' ? 0 : 0}
                        />
                      ) : (
                        m.value
                      )}
                    </p>
                    <p className="font-semibold text-ink-900 text-sm mb-1">{m.label}</p>
                    <p className="text-xs text-ink-500 leading-relaxed">{m.description}</p>
                  </div>
                </div>
              </AnimateIn>
            )
          })}
        </div>

        <AnimateIn delay={0.3}>
          <p className="mt-8 text-center text-xs text-ink-400 italic">
            * Metrics from customer discovery and early design partner data. Results are illustrative.
          </p>
        </AnimateIn>
      </div>
    </section>
  )
}
