import {
  Sliders, Calculator, Shield, FileText, Plug, Wallet,
  type LucideIcon
} from 'lucide-react'
import { AnimateIn } from '@/components/ui/animate-in'

const iconMap: Record<string, LucideIcon> = {
  Sliders, Calculator, Shield, FileText, Plug, Wallet,
}

interface FeatureCard {
  icon: string
  title: string
  description: string
}

interface FeatureGridProps {
  eyebrow?: string
  headline: string
  subhead?: string
  features: FeatureCard[]
  cols?: 2 | 3 | 4
}

export function FeatureGrid({ eyebrow, headline, subhead, features, cols = 3 }: FeatureGridProps) {
  const colClass =
    cols === 2
      ? 'sm:grid-cols-2'
      : cols === 4
      ? 'sm:grid-cols-2 lg:grid-cols-4'
      : 'sm:grid-cols-2 lg:grid-cols-3'

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
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-ink-950 mb-4">
                {headline}
              </h2>
              {subhead && (
                <p className="text-lg text-ink-500 leading-relaxed">{subhead}</p>
              )}
            </div>
          </AnimateIn>
        )}

        <div className={`grid grid-cols-1 ${colClass} gap-6`}>
          {features.map((f, i) => {
            const Icon = iconMap[f.icon]
            return (
              <AnimateIn key={f.title} delay={i * 0.07}>
                <div className="group p-6 rounded-2xl border border-ink-200 hover:border-brand-200 hover:shadow-md hover:shadow-brand-500/5 transition-all duration-200 bg-white">
                  <div className="w-11 h-11 rounded-xl bg-brand-50 flex items-center justify-center mb-5 group-hover:bg-brand-100 transition-colors">
                    {Icon ? (
                      <Icon size={20} className="text-brand-600" />
                    ) : (
                      <div className="w-5 h-5 rounded bg-brand-300" />
                    )}
                  </div>
                  <h3 className="font-display text-lg font-bold text-ink-900 mb-2">{f.title}</h3>
                  <p className="text-sm text-ink-500 leading-relaxed">{f.description}</p>
                </div>
              </AnimateIn>
            )
          })}
        </div>
      </div>
    </section>
  )
}
