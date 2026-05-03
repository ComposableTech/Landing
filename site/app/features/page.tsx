import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Sparkles, Activity, Sliders, Shield, FileText, Plug, type LucideIcon } from 'lucide-react'
import { AnimateIn } from '@/components/ui/animate-in'
import { CTABanner } from '@/components/sections/CTABanner'
import { features } from '@/lib/data/features'

export const metadata: Metadata = {
  title: 'Features — Composable',
  description: 'Every capability in the Composable compensation engine — from AI-drafted merit cycles and the always-on agent to flexible comp, Total Rewards Statements, and 80+ integrations.',
}

const iconMap: Record<string, LucideIcon> = { Sparkles, Activity, Sliders, Shield, FileText, Plug }

export default function FeaturesPage() {
  return (
    <>
      {/* Header hero */}
      <section className="pt-20 pb-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn>
            <div className="max-w-3xl">
              <p className="text-xs font-semibold tracking-widest text-brand-600 uppercase mb-4">Platform</p>
              <h1 className="font-display text-5xl sm:text-6xl font-extrabold text-ink-950 mb-6 leading-tight">
                The full compensation engine,{' '}
                <span className="grad-text">capability by capability.</span>
              </h1>
              <p className="text-xl text-ink-500 leading-relaxed">
                Composable is AI infrastructure for compensation — from AI-drafted merit cycles and the always-on agent to flexible comp, Total Rewards Statements, and 80+ HRIS integrations.
              </p>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Features grid */}
      <section className="py-16 bg-ink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, i) => {
              const Icon = iconMap[feature.icon]
              return (
                <AnimateIn key={feature.slug} delay={i * 0.06}>
                  <Link
                    href={`/features/${feature.slug}`}
                    className="group flex flex-col h-full bg-white rounded-2xl border border-ink-200 hover:border-brand-300 hover:shadow-lg hover:shadow-brand-500/5 transition-all duration-200 p-7"
                  >
                    <div className="flex items-start justify-between mb-5">
                      <div className="w-12 h-12 rounded-xl bg-brand-50 flex items-center justify-center group-hover:bg-brand-100 transition-colors">
                        {Icon ? <Icon size={22} className="text-brand-600" /> : null}
                      </div>
                      <span className="text-xs font-semibold text-brand-600 bg-brand-50 border border-brand-100 rounded-full px-2.5 py-1">
                        {feature.eyebrow}
                      </span>
                    </div>
                    <h2 className="font-display text-xl font-bold text-ink-950 mb-3 group-hover:text-brand-700 transition-colors">
                      {feature.name}
                    </h2>
                    <p className="text-sm text-ink-500 leading-relaxed mb-5 flex-1">{feature.description}</p>
                    <div className="flex items-center gap-1 text-sm font-semibold text-brand-600 group-hover:gap-2 transition-all">
                      Learn more <ArrowRight size={14} />
                    </div>
                  </Link>
                </AnimateIn>
              )
            })}
          </div>
        </div>
      </section>

      <CTABanner
        headline="Your comp cycle is still running on a spreadsheet. Ours isn't."
        subhead="Join our design partner program and build the future of compensation with us."
      />
    </>
  )
}
