export interface Customer {
  slug: string
  company: string
  industry: string
  size: string
  logoText: string
  heroQuote: string
  contactName: string
  contactRole: string
  contactInitials: string
  challenge: string
  solution: string
  results: { metric: string; description: string }[]
  fullStory: string
}

export const customers: Customer[] = [
  {
    slug: 'pinnacle-insurance',
    company: 'Pinnacle Insurance Group',
    industry: 'Insurance & Financial Services',
    size: '420 employees',
    logoText: 'PINNACLE',
    heroQuote:
      'Between the flexibility and the upfront tax visibility, Composable will upend an industry that has not changed in decades.',
    contactName: 'James Whitmore',
    contactRole: 'Managing Partner',
    contactInitials: 'JW',
    challenge:
      'Pinnacle was losing senior advisors to fintech firms offering equity and flexible comp structures. Their traditional fixed-salary model made it impossible to match what early-stage companies could offer without massively increasing their comp budget.',
    solution:
      'Composable gave Pinnacle the infrastructure to offer salary-equity trade-offs to senior advisors, flex RRSP contributions tied to tenure, and a structured perks pool — all within a budget envelope approved by the management committee.',
    results: [
      { metric: '+22%', description: 'Improvement in senior advisor retention rate in year one' },
      { metric: '$0', description: 'Increase in total comp budget — same spend, higher perceived value' },
      { metric: '4 days', description: 'Time from configuration to first employee election cycle going live' },
    ],
    fullStory:
      'The insurance industry has a retention problem that compensation benchmarking cannot solve. Senior advisors with books of business in the $5–10M AUM range are exactly the people that fintech and wealth management startups recruit aggressively — and they offer equity upside, signing bonuses, and comp flexibility that traditional insurers cannot match dollar-for-dollar.\n\nPinnacle had tried blanket salary increases and enhanced bonus structures. Both helped at the margin but neither addressed the core issue: their best advisors wanted agency over how their comp was structured, not just more of the same structure.\n\nAfter a 90-day implementation with the Composable founding team, Pinnacle launched their first flexible election cycle. Senior advisors could allocate between base, RRSP contributions, and a profit-participation pool. The response was immediate — participation was near-universal, and the NPS on the total rewards experience jumped 38 points in the first quarter.',
  },
  {
    slug: 'atlas-technologies',
    company: 'Atlas Technologies',
    industry: 'Series C SaaS',
    size: '580 employees',
    logoText: 'ATLAS',
    heroQuote:
      'Our top talent kept demanding more every cycle. This is the first solution that offers real upside without ever-expanding costs we could not justify.',
    contactName: 'Sarah Chen',
    contactRole: 'VP of Total Rewards',
    contactInitials: 'SC',
    challenge:
      'Atlas was burning significant equity to retain senior engineers and product managers. Their comp exception process was consuming 40% of the HR team\'s time. Voluntary attrition in the senior IC layer was running at 18% annually.',
    solution:
      'Composable replaced Atlas\'s annual comp exception process with structured quarterly elections. Senior ICs could self-allocate between base, equity refresh grants, and learning budget — within ranges approved by finance at the start of each fiscal year.',
    results: [
      { metric: '−80%', description: 'Reduction in comp exception requests in the first cycle' },
      { metric: '−6pts', description: 'Reduction in voluntary senior IC attrition rate year-over-year' },
      { metric: '+40', description: 'eNPS lift on total rewards satisfaction in first six months' },
    ],
    fullStory:
      'Atlas\'s comp problem was not unique — it\'s the problem every Series C company faces when they try to compete with Series A and Series B companies that can offer outsized equity.\n\nThe VP of Total Rewards at Atlas spent roughly two weeks every quarter managing individual comp exceptions. Every request was legitimate. An engineering lead wanted to front-load equity. A PM wanted to convert bonus potential into base. A senior designer wanted to trade base for a larger learning stipend. None of these requests were unreasonable — but the process of evaluating, escalating, and approving each one individually was unsustainable.\n\nComposable systematized these exceptions into structured choices. The result was not just time savings — it was a fundamentally different relationship between Atlas and its senior talent. People who had previously felt they needed to negotiate individually now had a process that respected their individual needs at scale.',
  },
  {
    slug: 'meridian-consulting',
    company: 'Meridian Consulting Group',
    industry: 'Professional Services',
    size: '1,100 employees',
    logoText: 'MERIDIAN',
    heroQuote:
      'This creates a new dynamic for employees across their entire total rewards. I do not see us going back to the old way of doing things.',
    contactName: 'Alexandra Foster',
    contactRole: 'CHRO',
    contactInitials: 'AF',
    challenge:
      'Meridian\'s workforce spanned five provinces and three US states, each with different tax implications for comp elections. Running consistent elections while accounting for regulatory variation was impossible with manual processes.',
    solution:
      'Composable\'s built-in CRA and IRS compliance, combined with province-and-state-level tax calculations, made it possible for Meridian to run simultaneous elections across all jurisdictions. Employees saw accurate estimated take-home regardless of location.',
    results: [
      { metric: '100%', description: 'Of elections CRA and IRS compliant — zero exceptions or retroactive corrections' },
      { metric: '12 weeks', description: 'Saved in annual comp cycle administration across the HR team' },
      { metric: '+15%', description: 'Improvement in offer acceptance rate attributed to flex comp option at offer stage' },
    ],
    fullStory:
      'Running a compliant comp election across five Canadian provinces and three US states simultaneously is not a theoretical problem for Meridian — it was their annual reality, and it was painful.\n\nThe previous process involved a spreadsheet for each jurisdiction, a tax advisor review for anything unusual, and a reconciliation step at the end that caught errors approximately one quarter in three. The CHRO had flagged this as a regulatory risk at the board level two years running.\n\nComposable\'s jurisdiction-aware tax calculator resolved this completely. For the first time, Meridian could offer consistent election flexibility to all employees regardless of location — with tax estimates accurate enough that the team eliminated the post-election reconciliation step entirely.',
  },
]

export function getCustomerBySlug(slug: string): Customer | undefined {
  return customers.find((c) => c.slug === slug)
}
