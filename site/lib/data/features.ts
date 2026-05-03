export interface Feature {
  slug: string
  name: string
  tagline: string
  description: string
  icon: string
  bullets: string[]
  eyebrow: string
}

export const features: Feature[] = [
  {
    slug: 'ai-merit-cycles',
    name: 'AI Merit Cycles',
    tagline: 'A complete first-draft for every employee before the cycle starts',
    eyebrow: 'Core Platform',
    description:
      'Before your next merit cycle opens, Composable generates AI-drafted compensation recommendations for every employee — grounded in performance data, market position, internal equity, retention risk, and your budget. Managers review and approve instead of starting from a blank cell.',
    icon: 'Sparkles',
    bullets: [
      'AI-drafted recommendation for every employee before cycle opens',
      'Grounded in performance, market data, equity, and retention risk',
      'Real-time budget impact, equity gap detection, and outlier flags',
      '6 weeks of Total Rewards prep reduced to a weekend',
    ],
  },
  {
    slug: 'comp-agent',
    name: 'Compensation Agent',
    tagline: 'Continuous, individualized pay decisions — no more annual cycles',
    eyebrow: 'Core Platform',
    description:
      'Once your company trusts our engine on the annual cycle, flip to continuous. Our agent monitors every employee and surfaces just-in-time raise recommendations at the moment they should happen — early enough to retain top talent, not a day sooner. Full justification, budget impact, and approval routing included.',
    icon: 'Activity',
    bullets: [
      'Monitors performance trends, retention signals, and market shifts in real time',
      'Individual recommendations with full reasoning and timing rationale',
      'Routes approvals through configured workflows, syncs back to HRIS',
      '~2% total payroll savings annually by eliminating unnecessary raises',
    ],
  },
  {
    slug: 'flex-comp-engine',
    name: 'Flexible Compensation',
    tagline: 'Employee-directed allocation across every comp dimension',
    eyebrow: 'Employee Experience',
    description:
      'Let employees self-allocate their total rewards across base salary, RRSP/401(k), equity, benefits, and perks — within the guardrails you define. The infrastructure behind Shopify\'s FlexComp, available to every company.',
    icon: 'Sliders',
    bullets: [
      '10+ configurable comp dimensions',
      'Annual or quarterly election cycles',
      'Real-time take-home preview as employees configure',
      'Fully auditable election history',
    ],
  },
  {
    slug: 'total-rewards-statements',
    name: 'Total Rewards Statements',
    tagline: 'Branded statements that explain why the raise happened now',
    eyebrow: 'Communications',
    description:
      'Communicate comp changes to employees through personalized total-rewards statements — showing base pay, equity fair value, retirement, and the full context behind every decision. Delivered automatically after every cycle or agent recommendation.',
    icon: 'FileText',
    bullets: [
      'Your brand, colors, and logo',
      'Explains timing and reasoning for every change',
      'Equity fair value + unvested value shown in real terms',
      'PDF and interactive web versions',
    ],
  },
  {
    slug: 'smart-guardrails',
    name: 'Pay Intelligence & Guardrails',
    tagline: 'Live market data, bands, budgets, and approval chains — encoded once',
    eyebrow: 'Compliance & Control',
    description:
      'Composable learns your pay philosophy, encodes your guardrails, and keeps every recommendation within policy before a manager sees it. Salary bands, comp ratios, approval thresholds, equity refresh rules — configured once, enforced automatically.',
    icon: 'Shield',
    bullets: [
      'Real-time salary benchmarking by role, level, and geography',
      'Budget, band, and comp ratio enforcement',
      'Automated approval workflows with full audit trail',
      'Pay equity analysis with concrete remediation paths',
    ],
  },
  {
    slug: 'hris-integrations',
    name: 'HRIS & Payroll Integrations',
    tagline: '80+ integrations — no migration required',
    eyebrow: 'Integrations',
    description:
      'Composable plugs into your existing HR stack. Employee data, performance scores, and comp history flow in. Approved recommendations sync back to your HRIS and payroll automatically. No new system of record, no manual data entry.',
    icon: 'Plug',
    bullets: [
      'Workday, BambooHR, Rippling, ADP, UKG, SAP',
      'Ceridian, Paylocity, Gusto, Paychex',
      'Bidirectional sync with your HRIS',
      'Automatic payroll sync on approval',
    ],
  },
]

export function getFeatureBySlug(slug: string): Feature | undefined {
  return features.find((f) => f.slug === slug)
}
