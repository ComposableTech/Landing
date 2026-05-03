import { AnimateIn } from '@/components/ui/animate-in'

interface Metric {
  value: string
  label: string
  description: string
  accent?: 'brand' | 'mint' | 'purple'
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
    mint: 'text-mint-600',
    purple: 'text-purple-500',
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
          {metrics.map((m, i) => (
            <AnimateIn key={m.value + m.label} delay={i * 0.08}>
              <div className="p-6 rounded-2xl border border-ink-200 bg-white hover:border-brand-200 hover:shadow-md transition-all duration-200">
                <p
                  className={`font-display text-4xl font-extrabold mb-2 ${
                    m.accent ? accentClass[m.accent] : 'text-brand-600'
                  }`}
                >
                  {m.value}
                </p>
                <p className="font-semibold text-ink-900 text-sm mb-1">{m.label}</p>
                <p className="text-xs text-ink-500 leading-relaxed">{m.description}</p>
              </div>
            </AnimateIn>
          ))}
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
