import type { Metadata } from 'next'
import { Hero } from '@/components/sections/Hero'
import { FeatureSplit } from '@/components/sections/FeatureSplit'
import { UseCaseGrid } from '@/components/sections/UseCaseGrid'
import { MetricsRow } from '@/components/sections/MetricsRow'
import { CTABanner } from '@/components/sections/CTABanner'
import { AnimateIn } from '@/components/ui/animate-in'

export const metadata: Metadata = {
  title: 'Composable — AI infrastructure for compensation',
  description:
    'Composable is the just-in-time compensation engine. AI-drafted merit cycles that replace the spreadsheet, and an always-on agent that replaces the annual cycle entirely.',
}

const useCases = [
  {
    icon: 'Award',
    title: 'The team of one',
    description: 'Running comp strategy for 250+ employees means spreadsheets, stale surveys, and weeks of prep each cycle. Composable generates the first draft. You review and approve.',
    href: '#',
  },
  {
    icon: 'Users',
    title: 'Compensation leaders',
    description: 'Continuous monitoring surfaces a retention risk before it becomes a resignation. Turn comp into a board-level story with real numbers behind it.',
    href: '#',
  },
  {
    icon: 'Cpu',
    title: 'HR Operations',
    description: 'Every recommendation lands within your guardrails before a manager sees it. No blank cells, no exception requests, no manual HRIS entry after approval.',
    href: '#',
  },
  {
    icon: 'BarChart2',
    title: 'Finance',
    description: 'Real-time budget impact visible before any raise is approved. Just-in-time raises pace against your budget year-round — no end-of-cycle surprises.',
    href: '#',
  },
]

const metrics = [
  {
    value: '$300K',
    label: 'Labor savings per merit cycle',
    description: 'AI Merit Cycles — labor cost recovered per cycle at 1,000 employees, by eliminating manual prep work for every manager.',
    accent: 'mint' as const,
  },
  {
    value: '30 hrs',
    label: 'Per manager per cycle eliminated',
    description: 'Hours managers spend building recommendations from scratch, replaced by AI-drafted starting points grounded in data.',
    accent: 'brand' as const,
  },
  {
    value: '2%',
    label: 'Total payroll savings annually',
    description: 'Compensation Agent — annual payroll savings from just-in-time raises. Right amount, right person, right moment.',
    accent: 'mint' as const,
  },
  {
    value: '$2.5M+',
    label: 'Annual recurring savings',
    description: 'Compensation Agent at 1,000 employees. 2% of total payroll, saved every year — from eliminating unnecessary raises alone.',
    accent: 'purple' as const,
  },
]

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* Problem section */}
      <section className="py-20 md:py-28 relative overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 -z-10"
          style={{
            background: 'linear-gradient(135deg, #4338CA 0%, #6366F1 50%, #2DD4BF 100%)',
          }}
        />
        <div
          aria-hidden
          className="absolute inset-0 -z-10 opacity-20"
          style={{
            backgroundImage:
              'radial-gradient(circle at 20% 50%, rgba(255,255,255,0.3) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(255,255,255,0.1) 0%, transparent 50%)',
          }}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn>
            <div className="max-w-2xl mb-12">
              <p className="text-xs font-semibold tracking-widest text-white/60 uppercase mb-4">
                The problem
              </p>
              <h2 className="font-display text-4xl sm:text-5xl font-extrabold text-white leading-tight">
                Annual cycles are a retention liability.
              </h2>
            </div>
          </AnimateIn>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {[
              {
                num: '01',
                text: 'Six weeks of prep for a cycle already 14 months out of date when it opens.',
              },
              {
                num: '02',
                text: 'A 4% pool distributed uniformly — overpaying half the team and underpaying the other.',
              },
              {
                num: '03',
                text: 'The employees you needed to retain didn\'t wait for your next cycle date.',
              },
            ].map((item, i) => (
              <AnimateIn key={item.num} delay={i * 0.08}>
                <div className="p-6 rounded-2xl border border-white/20 bg-white/10 h-full">
                  <p className="font-display text-3xl font-extrabold text-white/30 mb-3">{item.num}</p>
                  <p className="text-white/90 text-base leading-relaxed">{item.text}</p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      <FeatureSplit
        eyebrow="AI Merit Cycles"
        headline="A complete first draft for every employee before the cycle opens"
        bullets={[
          'Complete AI-drafted recommendation for every employee before cycle opens',
          'Grounded in performance, market benchmarks, internal equity, and retention risk',
          'Real-time budget impact, equity gap detection, and outlier flags',
          '6 weeks of cycle prep compressed to a weekend',
        ]}
        cta={{ label: 'See AI merit cycles', href: '/features/ai-merit-cycles' }}
        imageLabel="AI Merit Cycle Recommendations"
        imageSrc="/mock-slack.png"
        imageWidth={720}
        imageHeight={500}
      />

      <FeatureSplit
        eyebrow="Compensation Agent"
        headline="The right raise, for the right person, at the right time"
        bullets={[
          'Monitors every employee for performance trends, retention signals, and market shifts',
          'Individual recommendations with full timing rationale — not a pool allocation',
          'Approval-routed, HRIS-synced, and audit-trailed automatically',
          '~2% total payroll savings annually vs uniform annual cycles',
        ]}
        cta={{ label: 'See the comp agent', href: '/features/comp-agent' }}
        imageLabel="Always-On Compensation Agent"
        imageSrc="/mock-slack-auto.png"
        imageWidth={720}
        imageHeight={500}
        reverse
        bgClass="bg-brand-50"
      />

      <MetricsRow
        eyebrow="By the numbers"
        headline="The ROI is measurable"
        subhead="From customer discovery and early design partner engagements."
        metrics={metrics}
      />

      <UseCaseGrid
        eyebrow="Built for the full comp team"
        headline="One engine, every role"
        subhead="From Total Rewards professionals to Finance and HR Operations — Composable fits where compensation decisions get made."
        cases={useCases}
      />

      <CTABanner
        headline="Your comp engine is still a spreadsheet. Ours isn't."
        subhead="Bi-weekly calls with the founding team. Direct input on the roadmap. Preferred pricing locked before public launch."
      />
    </>
  )
}
