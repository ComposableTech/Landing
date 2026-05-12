export interface Product {
  slug: string
  name: string
  tagline: string
  description: string
  icon: string
  eyebrow: string
  image: string
  features: ProductFeature[]
}

export interface ProductFeature {
  name: string
  description: string
  icon: string
}

export const products: Product[] = [
  {
    slug: 'compensation-agent-merit-cycles',
    name: 'Compensation Agent for Merit Cycles',
    tagline: 'A compensation intelligence engine that replaces spreadsheets',
    eyebrow: 'Core Platform',
    description:
      'The complete compensation intelligence platform. Data driven merit cycles and continuous just-in-time recommendations powered by your live data. Replaces annual cycles with precision, real-time pay decisions.',
    icon: 'Activity',
    image: '/mock-recommendations.png',
    features: [
      {
        name: 'Merit Cycle Recommendations',
        description: 'Complete data driven recommendations for every individual employee before the cycle begins',
        icon: 'Sparkles',
      },
      {
        name: 'Compensation Agent',
        description: 'Continuous monitoring and just-in-time raise recommendations',
        icon: 'Activity',
      },
      {
        name: 'Pay Intelligence & Guardrails',
        description: 'Live market data, pay bands, budgets, and approval chains protecting every decision',
        icon: 'Shield',
      },
      {
        name: 'HRIS & Payroll Integrations',
        description: '80+ integrations — bidirectional sync with your existing stack',
        icon: 'Plug',
      },
    ],
  },
  {
    slug: 'flexible-compensation-infrastructure',
    name: 'Flexible Compensation Infrastructure',
    tagline: 'Employee-directed total rewards allocation',
    eyebrow: 'Employee Experience',
    description:
      'Enterprise-grade infrastructure for employee choice. Let employees self-allocate their total rewards across base salary, equity, retirement, and benefits — within your guardrails.',
    icon: 'Sliders',
    image: '/mock-flex.png',
    features: [
      {
        name: 'Flexible Compensation',
        description: 'Employee-directed allocation across whichever total rewards components you choose to offer',
        icon: 'Sliders',
      },
      {
        name: 'Total Rewards Statements',
        description: 'Branded statements that provide full detail behind each employee’s total rewards package',
        icon: 'FileText',
      },
      {
        name: 'Smart Guardrails',
        description: 'Policy enforcement and compliance built into every election',
        icon: 'Shield',
      },
    ],
  },
]

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug)
}
