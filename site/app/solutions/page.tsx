import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Award, Users, Cpu, BarChart2, type LucideIcon } from 'lucide-react'
import { AnimateIn } from '@/components/ui/animate-in'
import { CTABanner } from '@/components/sections/CTABanner'
import { solutions } from '@/lib/data/solutions'

export const metadata: Metadata = {
  title: 'Solutions — Composable',
  description: "Composable is purpose-built for every member of your comp team — whether you're a Total Rewards leader, CHRO, HR Ops, or Finance.",
}

const iconMap: Record<string, LucideIcon> = { Award, Users, Cpu, BarChart2 }

export default function SolutionsPage() {
  return (
    <>
      <section className="pt-20 pb-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn>
            <div className="max-w-3xl">
              <p className="text-xs font-semibold tracking-widest text-brand-600 uppercase mb-4">Solutions</p>
              <h1 className="font-display text-5xl sm:text-6xl font-extrabold text-ink-950 mb-6 leading-tight">
                Built for every person who touches{' '}
                <span className="grad-text">total rewards.</span>
              </h1>
              <p className="text-xl text-ink-500 leading-relaxed">
                Whether you own comp strategy, HR operations, or FP&amp;A, Composable has a workflow built for your specific job to be done.
              </p>
            </div>
          </AnimateIn>
        </div>
      </section>

      <section className="py-16 bg-ink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {solutions.map((sol, i) => {
              const Icon = iconMap[sol.icon]
              return (
                <AnimateIn key={sol.slug} delay={i * 0.08}>
                  <Link
                    href={`/solutions/${sol.slug}`}
                    className="group flex flex-col h-full bg-white rounded-2xl border border-ink-200 hover:border-brand-300 hover:shadow-lg hover:shadow-brand-500/5 transition-all duration-200 p-8"
                  >
                    <div className="w-12 h-12 rounded-xl bg-brand-50 flex items-center justify-center mb-5 group-hover:bg-brand-100 transition-colors">
                      {Icon ? <Icon size={22} className="text-brand-600" /> : null}
                    </div>
                    <p className="text-xs font-semibold tracking-widest text-brand-600 uppercase mb-2">
                      {sol.audience}
                    </p>
                    <h2 className="font-display text-xl font-bold text-ink-950 mb-3 group-hover:text-brand-700 transition-colors leading-snug">
                      {sol.headline}
                    </h2>
                    <p className="text-sm text-ink-500 leading-relaxed flex-1 mb-6">{sol.subhead}</p>
                    <div className="flex items-center gap-1 text-sm font-semibold text-brand-600 group-hover:gap-2 transition-all">
                      Explore solution <ArrowRight size={14} />
                    </div>
                  </Link>
                </AnimateIn>
              )
            })}
          </div>
        </div>
      </section>

      <CTABanner
        headline="Find the right solution for your team."
        subhead="Talk to us about your specific structure and we'll map Composable to your workflow."
      />
    </>
  )
}
