export interface PricingTier {
  name: string
  tagline: string
  price: { monthly: string; annual: string }
  cta: string
  ctaHref: string
  featured: boolean
  features: string[]
}

export interface ComparisonFeature {
  category: string
  features: { name: string; starter: string | boolean; growth: string | boolean; enterprise: string | boolean }[]
}

export interface PricingProduct {
  id: string
  name: string
  tagline: string
  tiers: PricingTier[]
  comparison: ComparisonFeature[]
}

export const pricingProducts: PricingProduct[] = [
  {
    id: 'ai-merit-cycles',
    name: 'AI Merit Cycles',
    tagline: 'AI-drafted compensation recommendations for every employee before your cycle starts. Replace the spreadsheet with a first draft grounded in data.',
    tiers: [
      {
        name: 'Launch',
        tagline: 'For teams running their first AI-assisted cycle',
        price: { monthly: 'Custom', annual: 'Custom' },
        cta: 'Talk to us',
        ctaHref: '/contact',
        featured: false,
        features: [
          'Up to 300 employees',
          'AI-drafted merit recommendations',
          'Performance + market data integration',
          'Manager review & approval workflow',
          'Real-time budget impact dashboard',
          'Core HRIS integrations (Rippling, BambooHR)',
          'CRA + IRS compliance',
          'Email support',
        ],
      },
      {
        name: 'Scale',
        tagline: 'For mid-market TR teams with complex comp structures',
        price: { monthly: 'Custom', annual: 'Custom' },
        cta: 'Book a demo',
        ctaHref: '/contact',
        featured: true,
        features: [
          'Up to 2,000 employees',
          'All Launch features',
          'Pay equity analysis + remediation paths',
          'Retention risk scoring per employee',
          'Calibration session support with synthesized data',
          '80+ HRIS & payroll integrations',
          'Branded Total Rewards Statements',
          'Approval hierarchy engine',
          'Dedicated onboarding',
          'Priority support (< 4hr)',
        ],
      },
      {
        name: 'Enterprise',
        tagline: 'For large orgs with multi-entity and multi-jurisdiction complexity',
        price: { monthly: 'Custom', annual: 'Custom' },
        cta: 'Contact enterprise',
        ctaHref: '/contact',
        featured: false,
        features: [
          'Unlimited employees',
          'All Scale features',
          'Multi-entity and multi-jurisdiction',
          'Custom approval hierarchies',
          'Custom pay philosophy encoding',
          'SOC 2 Type II documentation',
          'Custom data residency',
          'Dedicated customer success manager',
          'SLA-backed uptime (99.9%)',
        ],
      },
    ],
    comparison: [
      {
        category: 'AI Recommendations',
        features: [
          { name: 'Employees covered', starter: 'Up to 300', growth: 'Up to 2,000', enterprise: 'Unlimited' },
          { name: 'Performance data integration', starter: true, growth: true, enterprise: true },
          { name: 'Live market benchmarking', starter: true, growth: true, enterprise: true },
          { name: 'Retention risk scoring', starter: false, growth: true, enterprise: true },
          { name: 'Pay equity analysis', starter: false, growth: true, enterprise: true },
        ],
      },
      {
        category: 'Cycle Management',
        features: [
          { name: 'Manager review & approval', starter: true, growth: true, enterprise: true },
          { name: 'Real-time budget impact', starter: true, growth: true, enterprise: true },
          { name: 'Calibration data synthesis', starter: false, growth: true, enterprise: true },
          { name: 'Multi-entity support', starter: false, growth: false, enterprise: true },
        ],
      },
      {
        category: 'Integrations & Compliance',
        features: [
          { name: 'HRIS integrations', starter: 'Core (5)', growth: '80+', enterprise: 'Custom' },
          { name: 'HRIS write-back on approval', starter: true, growth: true, enterprise: true },
          { name: 'CRA + IRS compliance', starter: true, growth: true, enterprise: true },
          { name: 'SOC 2 Type II', starter: false, growth: false, enterprise: true },
          { name: 'Full audit trail', starter: true, growth: true, enterprise: true },
        ],
      },
      {
        category: 'Support',
        features: [
          { name: 'Onboarding', starter: 'Self-serve', growth: 'Dedicated', enterprise: 'White-glove' },
          { name: 'Support SLA', starter: 'Email', growth: '< 4hr', enterprise: '< 1hr + CSM' },
          { name: 'Total Rewards Statements', starter: false, growth: 'Branded', enterprise: 'Branded' },
        ],
      },
    ],
  },

  {
    id: 'comp-agent',
    name: 'Compensation Agent',
    tagline: 'Always-on monitoring and just-in-time raise recommendations — individual, continuous, and synced to your HRIS and payroll automatically.',
    tiers: [
      {
        name: 'Agent',
        tagline: 'For companies that have run one AI-assisted cycle',
        price: { monthly: 'Custom', annual: 'Custom' },
        cta: 'Get started',
        ctaHref: '/contact',
        featured: false,
        features: [
          'Continuous employee monitoring',
          'Performance trend & retention signal detection',
          'Individual raise recommendations with timing rationale',
          'Full justification for every recommendation',
          'Manager approval workflow',
          'HRIS + payroll sync on approval',
          'Priority support (< 4hr)',
        ],
      },
      {
        name: 'Agent Pro',
        tagline: 'For active comp strategy management at scale',
        price: { monthly: 'Custom', annual: 'Custom' },
        cta: 'Talk to us',
        ctaHref: '/contact',
        featured: true,
        features: [
          'All Agent features',
          'Budget pacing dashboard across org',
          'Pay compression detection',
          'Equity gap monitoring',
          'Total Rewards Statements on every raise',
          'Custom approval hierarchies',
          'Bi-weekly advisory calls',
          'Dedicated onboarding',
        ],
      },
      {
        name: 'Agent Enterprise',
        tagline: 'For organizations where comp is a board-level topic',
        price: { monthly: 'Custom', annual: 'Custom' },
        cta: 'Contact enterprise',
        ctaHref: '/contact',
        featured: false,
        features: [
          'All Agent Pro features',
          'Multi-entity and multi-jurisdiction',
          'Custom comp philosophy encoding',
          'Executive compensation monitoring',
          'Board-ready comp reporting',
          'Dedicated AI consultant',
          'SLA-backed uptime (99.9%)',
          'Custom data residency',
        ],
      },
    ],
    comparison: [
      {
        category: 'Monitoring',
        features: [
          { name: 'Performance trend monitoring', starter: true, growth: true, enterprise: true },
          { name: 'Retention risk signals', starter: true, growth: true, enterprise: true },
          { name: 'Market shift detection', starter: true, growth: true, enterprise: true },
          { name: 'Pay compression detection', starter: false, growth: true, enterprise: true },
          { name: 'Equity gap monitoring', starter: false, growth: true, enterprise: true },
        ],
      },
      {
        category: 'Recommendations',
        features: [
          { name: 'Individual raise recommendations', starter: true, growth: true, enterprise: true },
          { name: 'Full timing rationale', starter: true, growth: true, enterprise: true },
          { name: 'Budget impact per recommendation', starter: true, growth: true, enterprise: true },
          { name: 'Budget pacing dashboard', starter: false, growth: true, enterprise: true },
        ],
      },
      {
        category: 'Integrations & Reporting',
        features: [
          { name: 'HRIS + payroll sync on approval', starter: true, growth: true, enterprise: true },
          { name: 'Total Rewards Statements', starter: false, growth: 'Branded', enterprise: 'Branded' },
          { name: 'Board-ready reporting', starter: false, growth: false, enterprise: true },
          { name: 'Multi-entity support', starter: false, growth: false, enterprise: true },
        ],
      },
      {
        category: 'Advisory',
        features: [
          { name: 'Advisory calls', starter: false, growth: 'Bi-weekly', enterprise: 'Weekly' },
          { name: 'Dedicated consultant', starter: false, growth: false, enterprise: true },
          { name: 'Support SLA', starter: '< 4hr', growth: '< 4hr', enterprise: '< 1hr + CSM' },
        ],
      },
    ],
  },

  {
    id: 'flex-comp',
    name: 'Flexible Compensation',
    tagline: 'Employee-directed allocation across salary, retirement, equity, and benefits — within guardrails you define.',
    tiers: [
      {
        name: 'Starter',
        tagline: 'For teams piloting flex comp',
        price: { monthly: 'Custom', annual: 'Custom' },
        cta: 'Talk to us',
        ctaHref: '/contact',
        featured: false,
        features: [
          'Up to 200 employees',
          '3 comp dimensions',
          'Annual election cycles',
          'Core HRIS integrations',
          'Real-time take-home preview',
          'CRA + IRS compliance',
          'Email support',
        ],
      },
      {
        name: 'Growth',
        tagline: 'For mid-market teams with complex needs',
        price: { monthly: 'Custom', annual: 'Custom' },
        cta: 'Book a demo',
        ctaHref: '/contact',
        featured: true,
        features: [
          'Up to 2,000 employees',
          'All 10+ comp dimensions',
          'Annual + quarterly elections',
          '80+ HRIS & payroll integrations',
          'Branded Total Rewards Statements',
          'Real-time tax calculator',
          'FP&A cost modeling dashboard',
          'Approval workflow engine',
          'Dedicated onboarding',
          'Priority support (< 4hr)',
        ],
      },
      {
        name: 'Enterprise',
        tagline: 'For large orgs with multi-jurisdiction complexity',
        price: { monthly: 'Custom', annual: 'Custom' },
        cta: 'Contact enterprise',
        ctaHref: '/contact',
        featured: false,
        features: [
          'Unlimited employees',
          'All Growth features',
          'Multi-entity and multi-jurisdiction',
          'Custom approval hierarchies',
          'SOC 2 Type II documentation',
          'Custom data residency',
          'Dedicated customer success manager',
          'SLA-backed uptime (99.9%)',
        ],
      },
    ],
    comparison: [
      {
        category: 'Comp Flexibility',
        features: [
          { name: 'Comp dimensions', starter: '3', growth: '10+', enterprise: 'Unlimited' },
          { name: 'Election cycles', starter: 'Annual', growth: 'Annual + quarterly', enterprise: 'Custom' },
          { name: 'Real-time tax calculator', starter: false, growth: true, enterprise: true },
          { name: 'Employee self-service portal', starter: true, growth: true, enterprise: true },
        ],
      },
      {
        category: 'Administration',
        features: [
          { name: 'Approval workflow engine', starter: false, growth: true, enterprise: true },
          { name: 'FP&A cost modeling', starter: false, growth: true, enterprise: true },
          { name: 'Multi-entity support', starter: false, growth: false, enterprise: true },
          { name: 'Custom data residency', starter: false, growth: false, enterprise: true },
        ],
      },
      {
        category: 'Integrations & Compliance',
        features: [
          { name: 'HRIS integrations', starter: 'Core (5)', growth: '80+', enterprise: 'Custom' },
          { name: 'CRA + IRS compliance', starter: true, growth: true, enterprise: true },
          { name: 'SOC 2 Type II', starter: false, growth: false, enterprise: true },
          { name: 'Audit trail', starter: true, growth: true, enterprise: true },
        ],
      },
      {
        category: 'Support',
        features: [
          { name: 'Onboarding', starter: 'Self-serve', growth: 'Dedicated', enterprise: 'White-glove' },
          { name: 'Support SLA', starter: 'Email', growth: '< 4hr', enterprise: '< 1hr + CSM' },
          { name: 'Total Rewards Statements', starter: false, growth: 'Branded', enterprise: 'Branded' },
        ],
      },
    ],
  },
]

export const pricingFAQ = [
  {
    q: 'Do I need to run a full merit cycle before I can use the Compensation Agent?',
    a: "Yes — the agent is designed to follow the AI merit cycle product. Running one AI-assisted cycle lets the engine learn your company's pay philosophy, guardrails, and people patterns before it makes continuous recommendations. Most customers go live with the agent after one full cycle.",
  },
  {
    q: 'Can I use just one product, or do I need all three?',
    a: "Each product is available independently. Most customers start with AI Merit Cycles, then add the Compensation Agent after their first cycle. Flexible Compensation is available as a standalone or add-on.",
  },
  {
    q: 'How is pricing calculated?',
    a: 'All products are priced per employee per year, custom-quoted based on headcount, configuration complexity, and support requirements. No hidden fees or per-module add-ons.',
  },
  {
    q: 'Does this replace our HRIS?',
    a: 'No. Composable integrates with your existing HR stack — Workday, Rippling, BambooHR, and 80+ more. It reads employee and performance data, and writes approved recommendations back automatically.',
  },
  {
    q: 'Is Composable CRA and IRS compliant?',
    a: 'Yes. All payroll mechanics, RRSP, 401(k), HSA, and FSA treatment are built to CRA and IRS standards. Compliance is a core product feature, not an afterthought.',
  },
  {
    q: 'What does the design partner program involve?',
    a: 'Bi-weekly calls with the founding team. Direct input into the product roadmap. Early access to new capabilities before general release. Preferred pricing locked in before public launch.',
  },
]

// Legacy export for backward compatibility
export const tiers = pricingProducts[2].tiers
export const comparisonFeatures = pricingProducts[2].comparison
