import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, Check } from 'lucide-react'
import { AnimateIn } from '@/components/ui/animate-in'
import { ComparisonTable } from '@/components/sections/ComparisonTable'
import { CTABanner } from '@/components/sections/CTABanner'
import { competitors, getCompetitorBySlug } from '@/lib/data/competitors'

export async function generateStaticParams() {
  return competitors.map((c) => ({ competitor: c.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ competitor: string }> }): Promise<Metadata> {
  const { competitor } = await params
  const c = getCompetitorBySlug(competitor)
  if (!c) return {}
  return {
    title: `${c.headline} — Composable`,
    description: c.subhead,
  }
}

const reasons = [
  'True comp flexibility across all dimensions — not just benefits',
  'Real-time tax calculator built in, no addon required',
  'Zero incremental HR FTEs to administer',
]

export default async function CompetitorPage({ params }: { params: Promise<{ competitor: string }> }) {
  const { competitor } = await params
  const c = getCompetitorBySlug(competitor)
  if (!c) notFound()

  return (
    <>
      <div className="bg-white border-b border-ink-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link href="/" className="inline-flex items-center gap-2 text-sm text-ink-500 hover:text-ink-900 transition-colors">
            <ArrowLeft size={14} />
            Back
          </Link>
        </div>
      </div>

      {/* Hero */}
      <section className="pt-16 pb-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn>
            <div className="max-w-3xl">
              <p className="text-xs font-semibold tracking-widest text-brand-600 uppercase mb-4">
                Composable vs. {c.name}
              </p>
              <h1 className="font-display text-4xl sm:text-5xl font-extrabold text-ink-950 mb-6 leading-tight">
                {c.headline}
              </h1>
              <p className="text-xl text-ink-500 leading-relaxed mb-8">{c.subhead}</p>
              <div className="flex flex-wrap gap-3 mb-6">
                <div className="bg-ink-50 border border-ink-200 rounded-xl px-4 py-2.5">
                  <p className="text-xs font-medium text-ink-400 mb-0.5">{c.name} focus</p>
                  <p className="text-sm font-semibold text-ink-700">{c.theirPitch}</p>
                </div>
                <div className="bg-brand-50 border border-brand-200 rounded-xl px-4 py-2.5">
                  <p className="text-xs font-medium text-brand-500 mb-0.5">Composable focus</p>
                  <p className="text-sm font-semibold text-brand-700">{c.ourPitch}</p>
                </div>
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Comparison table */}
      <section className="py-16 bg-ink-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn>
            <h2 className="font-display text-2xl font-extrabold text-ink-950 mb-8">
              Feature-by-feature comparison
            </h2>
          </AnimateIn>
          <ComparisonTable rows={c.rows} themName={c.name} />
        </div>
      </section>

      {/* 3 reasons */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn>
            <h2 className="font-display text-2xl font-extrabold text-ink-950 mb-8">
              Why Total Rewards leaders choose Composable.
            </h2>
          </AnimateIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {reasons.map((r, i) => (
              <AnimateIn key={r} delay={i * 0.08}>
                <div className="flex gap-4 bg-ink-50 rounded-2xl border border-ink-200 p-6">
                  <span className="w-6 h-6 rounded-full bg-brand-600 flex items-center justify-center shrink-0 mt-0.5">
                    <Check size={13} className="text-white" />
                  </span>
                  <p className="font-medium text-ink-800">{r}</p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* Switcher quote — commented out until customer reference is confirmed
      <section className="py-16 bg-ink-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn>
            <blockquote className="text-center">
              <p className="font-display text-xl font-semibold text-ink-900 leading-relaxed mb-6">
                &ldquo;{c.switcherQuote}&rdquo;
              </p>
              <footer>
                <p className="font-semibold text-ink-900">{c.switcherName}</p>
                <p className="text-sm text-ink-500 mt-1">{c.switcherRole}</p>
              </footer>
            </blockquote>
          </AnimateIn>
        </div>
      </section>
      */}

      <CTABanner
        headline={`Switching from ${c.name}? We'll make it easy.`}
        subhead="Most customers are live with Composable in 4–8 weeks, running on top of their existing stack."
        primaryCta={{ label: 'Start the conversation', href: '/contact' }}
        secondaryCta={{ label: 'View pricing', href: '/pricing' }}
      />
    </>
  )
}
