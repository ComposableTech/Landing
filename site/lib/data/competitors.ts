export interface ComparisonRow {
  feature: string
  us: boolean | string
  them: boolean | string
}

export interface Competitor {
  slug: string
  name: string
  headline: string
  subhead: string
  theirPitch: string
  ourPitch: string
  rows: ComparisonRow[]
  switcherQuote: string
  switcherName: string
  switcherRole: string
}

export const competitors: Competitor[] = [
  {
    slug: 'pave',
    name: 'Pave',
    headline: 'Composable vs. Pave',
    subhead:
      'Pave tells you what to pay. Composable gives employees the flexibility to make that pay go further.',
    theirPitch: 'Market intelligence and comp benchmarking',
    ourPitch: 'Flexible comp infrastructure with employee self-allocation',
    rows: [
      { feature: 'Employee-directed comp allocation', us: true, them: false },
      { feature: 'Real-time tax impact calculator', us: true, them: false },
      { feature: 'Flex benefits pool', us: true, them: false },
      { feature: 'Branded Total Rewards Statements', us: true, them: 'Addon' },
      { feature: 'Market comp benchmarking', us: false, them: true },
      { feature: 'Band & range modeling', us: 'Basic', them: true },
      { feature: '80+ HRIS integrations', us: true, them: true },
      { feature: 'One-click payroll export', us: true, them: false },
      { feature: 'Approval workflow engine', us: true, them: false },
      { feature: 'FP&A cost ceiling controls', us: true, them: 'Limited' },
    ],
    switcherQuote:
      'We used Pave for benchmarking and loved the data. But it couldn\'t help employees feel ownership over their package. Composable fills that gap completely.',
    switcherName: 'Director of Total Rewards',
    switcherRole: 'Series B fintech, 350 employees',
  },
  {
    slug: 'benepass',
    name: 'Benepass',
    headline: 'Composable vs. Benepass',
    subhead:
      'Benepass handles perks spending accounts. Composable handles the other 95% of total rewards.',
    theirPitch: 'Flexible benefits and lifestyle spending accounts',
    ourPitch: 'Full total rewards flexibility — base, equity, retirement, and benefits in one platform',
    rows: [
      { feature: 'Base salary flexibility', us: true, them: false },
      { feature: 'Equity vesting adjustments', us: true, them: false },
      { feature: 'RRSP / 401(k) flex allocation', us: true, them: false },
      { feature: 'Benefits and perks flex pool', us: true, them: true },
      { feature: 'Lifestyle spending accounts', us: true, them: true },
      { feature: 'Real-time tax calculator', us: true, them: false },
      { feature: 'Total Rewards Statements', us: true, them: false },
      { feature: '80+ HRIS integrations', us: true, them: 'Limited' },
      { feature: 'One-click payroll export', us: true, them: false },
      { feature: 'FP&A cost ceiling controls', us: true, them: false },
    ],
    switcherQuote:
      "Benepass was great for perks. But we needed flexibility across the whole package — base, equity, retirement. Composable was the only platform that did all of it.",
    switcherName: 'VP of People',
    switcherRole: 'Growth-stage tech company, 500 employees',
  },
  {
    slug: 'tedy',
    name: 'Tedy',
    headline: 'Composable vs. Tedy',
    subhead:
      'Tedy administers your existing benefits. Composable reimagines what benefits and comp can be.',
    theirPitch: 'Benefits administration and open enrollment',
    ourPitch: 'Flexible comp infrastructure across all dimensions of total rewards',
    rows: [
      { feature: 'Benefits enrollment', us: 'Via integrations', them: true },
      { feature: 'Employee-directed comp allocation', us: true, them: false },
      { feature: 'Flex salary exchange', us: true, them: false },
      { feature: 'Real-time tax visibility', us: true, them: false },
      { feature: 'Branded Total Rewards Statements', us: true, them: false },
      { feature: '80+ HRIS integrations', us: true, them: true },
      { feature: 'One-click payroll export', us: true, them: 'Limited' },
      { feature: 'Approval workflow engine', us: true, them: 'Basic' },
      { feature: 'FP&A cost modeling', us: true, them: false },
      { feature: 'Equity management', us: true, them: false },
    ],
    switcherQuote:
      "Tedy handled our enrollment fine. But employees still had no agency. When we added Composable, engagement with total rewards doubled in the first quarter.",
    switcherName: 'CHRO',
    switcherRole: 'Professional services firm, 800 employees',
  },
]

export function getCompetitorBySlug(slug: string): Competitor | undefined {
  return competitors.find((c) => c.slug === slug)
}
