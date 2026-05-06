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
  const cardColors = ['brand', 'intelligence', 'accent', 'brand'] as const

  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-white to-ink-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-brand-100 rounded-full blur-[100px] opacity-30 pointer-events-none"></div>
      <div className="absolute bottom-20 left-10 w-64 h-64 bg-intelligence-100 rounded-full blur-[100px] opacity-30 pointer-events-none"></div>
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 relative">
          {cases.map((c, i) => {
            const Icon = iconMap[c.icon]
            const color = cardColors[i % cardColors.length]

            const colorClasses = {
              brand: {
                bg: 'bg-gradient-to-br from-brand-50 to-brand-100/50',
                border: 'border-brand-200',
                icon: 'text-brand-600',
                hover: 'group-hover:border-brand-300 group-hover:shadow-brand-500/20',
                title: 'group-hover:text-brand-700',
                link: 'text-brand-600',
              },
              intelligence: {
                bg: 'bg-gradient-to-br from-intelligence-50 to-intelligence-100/50',
                border: 'border-intelligence-200',
                icon: 'text-intelligence-600',
                hover: 'group-hover:border-intelligence-300 group-hover:shadow-intelligence-500/20',
                title: 'group-hover:text-intelligence-700',
                link: 'text-intelligence-600',
              },
              accent: {
                bg: 'bg-gradient-to-br from-accent-50 to-accent-100/50',
                border: 'border-accent-200',
                icon: 'text-accent-600',
                hover: 'group-hover:border-accent-300 group-hover:shadow-accent-500/20',
                title: 'group-hover:text-accent-700',
                link: 'text-accent-600',
              },
            }

            const classes = colorClasses[color]

            return (
              <AnimateIn key={c.title} delay={i * 0.07}>
                <Link
                  href={c.href}
                  className={`group flex flex-col p-6 bg-white rounded-2xl border ${classes.border} hover:shadow-xl ${classes.hover} transition-all duration-300 h-full hover:scale-105 relative overflow-hidden`}
                >
                  {/* Gradient accent on hover */}
                  <div className={`absolute inset-0 ${classes.bg} opacity-0 group-hover:opacity-50 transition-opacity duration-300`}></div>

                  <div className="relative">
                    <div className={`w-12 h-12 rounded-xl ${classes.bg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-sm`}>
                      {Icon ? (
                        <Icon size={20} className={classes.icon} />
                      ) : (
                        <div className={`w-5 h-5 rounded ${classes.icon}`} />
                      )}
                    </div>
                    <h3 className={`font-display text-lg font-bold text-ink-900 mb-2 ${classes.title} transition-colors`}>
                      {c.title}
                    </h3>
                    <p className="text-sm text-ink-600 leading-relaxed flex-1 mb-4">{c.description}</p>
                    <span className={`mt-auto flex items-center gap-1 text-sm font-semibold ${classes.link} group-hover:gap-2 transition-all`}>
                      Learn more <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </Link>
              </AnimateIn>
            )
          })}
        </div>
      </div>
    </section>
  )
}
