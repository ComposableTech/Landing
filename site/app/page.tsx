import type { Metadata } from 'next'
import { Hero } from '@/components/sections/Hero'
import { FeatureSplit } from '@/components/sections/FeatureSplit'
import { UseCaseGrid } from '@/components/sections/UseCaseGrid'
import { MetricsRow } from '@/components/sections/MetricsRow'
import { CTABanner } from '@/components/sections/CTABanner'
import { ChaosToClarity } from '@/components/sections/ChaosToClarity'
import { MeritCycleDashboard } from '@/components/mockups/MeritCycleDashboard'
import { CompAgentMonitor } from '@/components/mockups/CompAgentMonitor'

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
    numericValue: 300,
    prefix: '$',
    suffix: 'K',
    label: 'Labor savings per merit cycle',
    description: 'AI Merit Cycles — labor cost recovered per cycle at 1,000 employees, by eliminating manual prep work for every manager.',
    accent: 'accent' as const,
    icon: 'dollar' as const,
  },
  {
    value: '10 hrs',
    numericValue: 10,
    suffix: ' hrs',
    label: 'Per manager per cycle eliminated',
    description: 'Hours managers spend building recommendations from scratch, replaced by AI-drafted starting points grounded in data.',
    accent: 'brand' as const,
    icon: 'clock' as const,
  },
  {
    value: '2%',
    numericValue: 2,
    suffix: '%',
    label: 'Total payroll savings annually',
    description: 'Compensation Agent — annual payroll savings from just-in-time raises. Right amount, right person, right moment.',
    accent: 'accent' as const,
    icon: 'trending' as const,
  },
  {
    value: '$2.5M+',
    numericValue: 2.5,
    prefix: '$',
    suffix: 'M+',
    label: 'Annual recurring savings',
    description: 'Compensation Agent at 1,000 employees. 2% of total payroll, saved every year — from eliminating unnecessary raises alone.',
    accent: 'purple' as const,
    icon: 'zap' as const,
  },
]

export default function HomePage() {
  return (
    <>

      <Hero />

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
        customComponent={<MeritCycleDashboard />}
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
        customComponent={<CompAgentMonitor />}
        reverse
        accent
      />

      <ChaosToClarity />

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
