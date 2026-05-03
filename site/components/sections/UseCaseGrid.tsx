import Link from 'next/link'
import {
  Award, Users, Cpu, BarChart2, ArrowRight, type LucideIcon
} from 'lucide-react'
import { AnimateIn } from '@/components/ui/animate-in'

const iconMap: Record<string, LucideIcon> = {
  Award, Users, Cpu, BarChart2,
}

interface UseCase {
  icon: string
  title: string
  description: string
  href: string
}

interface UseCaseGridProps {
  eyebrow?: string
  headline: string
  subhead?: string
  cases: UseCase[]
}

export function UseCaseGrid({ eyebrow, headline, subhead, cases }: UseCaseGridProps) {
  return (
    <section className="py-20 md:py-28 bg-ink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateIn>
          <div className="text-center max-w-2xl mx-auto mb-14">
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {cases.map((c, i) => {
            const Icon = iconMap[c.icon]
            return (
              <AnimateIn key={c.title} delay={i * 0.07}>
                <Link
                  href={c.href}
                  className="group flex flex-col p-6 bg-white rounded-2xl border border-ink-200 hover:border-brand-200 hover:shadow-lg hover:shadow-brand-500/5 transition-all duration-200 h-full"
                >
                  <div className="w-10 h-10 rounded-xl bg-brand-50 flex items-center justify-center mb-4 group-hover:bg-brand-100 transition-colors">
                    {Icon ? (
                      <Icon size={18} className="text-brand-600" />
                    ) : (
                      <div className="w-4 h-4 rounded bg-brand-300" />
                    )}
                  </div>
                  <h3 className="font-display text-lg font-bold text-ink-900 mb-2 group-hover:text-brand-700 transition-colors">
                    {c.title}
                  </h3>
                  <p className="text-sm text-ink-500 leading-relaxed flex-1">{c.description}</p>
                  <span className="mt-4 flex items-center gap-1 text-sm font-semibold text-brand-600 group-hover:gap-2 transition-all">
                    Learn more <ArrowRight size={14} />
                  </span>
                </Link>
              </AnimateIn>
            )
          })}
        </div>
      </div>
    </section>
  )
}
