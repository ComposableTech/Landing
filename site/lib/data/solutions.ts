export interface SolutionProblem {
  title: string
  solution: string
}

export interface Solution {
  slug: string
  audience: string
  headline: string
  subhead: string
  icon: string
  problems: SolutionProblem[]
  testimonialQuote: string
  testimonialName: string
  testimonialRole: string
  checklist: string[]
}

export const solutions: Solution[] = [
  {
    slug: 'total-rewards-leaders',
    audience: 'Total Rewards Leaders',
    headline: 'Stop running comp on spreadsheets. Start running it on AI.',
    subhead:
      "You're doing the work of a ten-person team with a spreadsheet and Slack. Our engine generates the first draft. You review, adjust, and approve.",
    icon: 'Award',
    problems: [
      {
        title: 'Six weeks of cycle prep before you can even start',
        solution:
          'Composable generates a complete AI-drafted recommendation for every employee before the cycle opens. What used to take six weeks of prep takes a weekend.',
      },
      {
        title: 'Calibration meetings built on guesswork, not data',
        solution:
          'Every recommendation comes with full justification: performance data, market position, internal equity, retention risk, and budget impact. Calibration runs on synthesis, not arguments.',
      },
      {
        title: 'Top performers leaving before comp cycles catch up',
        solution:
          'The always-on agent monitors every employee and surfaces individual raise recommendations at the moment they should happen — early enough to retain, not a day sooner.',
      },
    ],
    testimonialQuote:
      "Our top talent kept leaving before our annual cycle caught up with the market. Composable surfaces the recommendation before I even knew there was a risk.",
    testimonialName: 'Head of Total Rewards',
    testimonialRole: 'Series C technology company, 800 employees',
    checklist: [
      'AI-drafted merit recommendations for every employee before cycle opens',
      'Full justification: performance, market, equity, retention risk, budget',
      'Always-on agent surfaces individual raises at the right moment',
      'Automatic sync to HRIS and payroll on approval',
      'Total Rewards Statements that explain why each raise happened now',
    ],
  },
  {
    slug: 'chros',
    audience: 'CHROs & Chief People Officers',
    headline: 'Turn compensation from a fire-fighting exercise into a retention engine.',
    subhead:
      'Give your board a real story: AI-powered comp infrastructure, measurable attrition reduction, and a business case with numbers.',
    icon: 'Users',
    problems: [
      {
        title: 'Senior talent leaving for companies that moved faster on comp',
        solution:
          'The always-on compensation agent monitors every employee and recommends raises at the moment they matter. You stop losing people to comp decisions that came three months too late.',
      },
      {
        title: "Board asking for comp ROI you can't prove",
        solution:
          '~2% total payroll savings annually and ~$300K in labor savings per merit cycle. We model both against your headcount and payroll during onboarding — so you have the numbers before your next board conversation.',
      },
      {
        title: 'Annual cycle creates retention cliffs and overpay at the same time',
        solution:
          'Continuous, individualized raises replace the one-size-fits-all 4% pool. You retain the people who needed a raise and stop overpaying those who didn\'t.',
      },
    ],
    testimonialQuote:
      "This isn't an improvement on the annual cycle. It's the end of it. We finally have comp infrastructure that runs like the rest of our tech stack.",
    testimonialName: 'Chief People Officer',
    testimonialRole: 'Growth-stage SaaS company, 1,200 employees',
    checklist: [
      'Replace the annual cycle with continuous, individualized pay decisions',
      '~2% total payroll savings annually from just-in-time raises',
      'AI-drafted merit recommendations that remove weeks of manual prep',
      'Board-ready impact reporting with real numbers',
      'Deploy without replacing any existing HR systems',
    ],
  },
  {
    slug: 'hr-operations',
    audience: 'HR Operations',
    headline: 'Automate the merit cycle. Reclaim your quarter.',
    subhead: 'Stop managing spreadsheets and exception requests. Start managing strategy.',
    icon: 'Cpu',
    problems: [
      {
        title: 'Merit cycle takes months of manual work to prep',
        solution:
          'Composable generates the first draft for every employee automatically. You configure the engine once — it handles the rest each cycle.',
      },
      {
        title: 'Exception requests flooding your inbox mid-cycle',
        solution:
          'Every recommendation is already within policy before a manager sees it. Guardrails enforce budgets, bands, and approval thresholds automatically.',
      },
      {
        title: 'Syncing approved changes back to HRIS and payroll',
        solution:
          'Approved recommendations sync back to your HRIS and payroll automatically. One source of truth. No manual entry.',
      },
    ],
    testimonialQuote:
      'The first time we ran the cycle with Composable, I got my October back. Every manager started from a recommendation, not a blank cell.',
    testimonialName: 'VP, HR Operations',
    testimonialRole: 'Mid-market technology company',
    checklist: [
      'AI-drafted first draft eliminates blank-cell prep for every manager',
      'Guardrails enforce budgets, bands, and comp ratios automatically',
      'Full audit trail for every recommendation, edit, and approval',
      'Automatic HRIS and payroll sync on approval',
      'Employee self-service reduces comp support tickets',
    ],
  },
  {
    slug: 'finance-fpa',
    audience: 'Finance & FP&A',
    headline: 'Real-time budget pacing. No end-of-cycle surprises.',
    subhead: "Model the cost of every compensation decision before it's approved. Maintain budget certainty across every cycle.",
    icon: 'BarChart2',
    problems: [
      {
        title: "Can't model total payroll impact until the cycle closes",
        solution:
          'Real-time budget impact is visible from the moment AI-drafted recommendations are generated — before managers touch a single number.',
      },
      {
        title: 'Annual cycle creates unpredictable payroll variance',
        solution:
          'Always-on agent recommendations pace against your budget continuously. No end-of-cycle budget surprises. No post-approval scrambling.',
      },
      {
        title: 'No visibility into which raises are driving attrition risk',
        solution:
          'Every recommendation includes retention risk signals. Finance sees exactly which comp decisions are investments in retention vs. routine maintenance.',
      },
    ],
    testimonialQuote:
      'Knowing the full payroll impact before the cycle opens changed how we plan headcount. The FP&A visibility alone justified the investment.',
    testimonialName: 'VP Finance',
    testimonialRole: 'Mid-market SaaS company',
    checklist: [
      'Real-time budget impact visible before managers review recommendations',
      'Always-on agent paces raises against budget throughout the year',
      'Retention risk signals on every recommendation',
      'Equity gap detection and remediation cost modeling',
      'Automatic HRIS and payroll sync maps to your GL structure',
    ],
  },
]

export function getSolutionBySlug(slug: string): Solution | undefined {
  return solutions.find((s) => s.slug === slug)
}
