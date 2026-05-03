import type { Metadata } from 'next'
import { Hero } from '@/components/sections/Hero'
import { FeatureSplit } from '@/components/sections/FeatureSplit'
import { UseCaseGrid } from '@/components/sections/UseCaseGrid'
import { MetricsRow } from '@/components/sections/MetricsRow'
import { IntegrationCloud } from '@/components/sections/IntegrationCloud'
import { FAQ } from '@/components/sections/FAQ'
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
    description: 'You\'re running comp strategy for 250+ employees with a spreadsheet and expired data cuts. Our agent gives back 95% of your time.',
    href: '#',
  },
  {
    icon: 'Users',
    title: 'Compensation leaders',
    description: 'Stop losing top performers to companies that moved faster on comp. Turn the annual cycle into a board-level retention narrative with real numbers behind it.',
    href: '#',
  },
  {
    icon: 'Cpu',
    title: 'HR Operations',
    description: 'Six weeks of cycle prep, calibration arguments, exception requests that flood your inbox. Let our agent handle the first draft, you handle edge cases.',
    href: '#',
  },
  {
    icon: 'BarChart2',
    title: 'Finance',
    description: 'Proactive budget optimization throughout the year, amortization can save 2% payroll costs annually.',
    href: '#',
  },
]

const metrics = [
  {
    value: '$300K',
    label: 'Labor savings per merit cycle',
    description: 'Returned to a 1,000-person company by eliminating weeks of manual cycle prep per manager — before the always-on agent savings kick in.',
    accent: 'mint' as const,
  },
  {
    value: '30 hrs',
    label: 'Per manager per cycle returned',
    description: 'Time managers spend building recommendations from scratch, eliminated by AI-drafted starting points grounded in data.',
    accent: 'brand' as const,
  },
  {
    value: '2%',
    label: 'Total payroll savings annually',
    description: 'Stop overpaying employees who didn\'t need a raise yet, while retaining the ones you would have lost. Paid back every year.',
    accent: 'mint' as const,
  },
  {
    value: '$2.5M+',
    label: 'Annual savings at 1,000 employees',
    description: 'For a 1,000-person tech company, 2% of total payroll means $2.5–3M saved every year, recurring — from the always-on agent alone.',
    accent: 'purple' as const,
  },
]

const faqItems = [
  {
    q: 'What does "AI-drafted merit cycle" actually mean?',
    a: 'Before your cycle opens, our AI generates a complete compensation recommendation for every employee — not a blank spreadsheet. Each recommendation is grounded in their performance data, current market position, internal equity relative to peers, retention risk signals, and your available budget. Managers and Rewards teams see a starting point with full justification instead of building from scratch. What used to take a team six weeks of prep takes a weekend.',
  },
  {
    q: 'How is this different from just improving benchmarking in our HRIS?',
    a: 'Benchmarking data tells you what the market pays. Our engine tells you what each individual employee should be paid, and when. It combines market data with performance signals, retention risk, internal equity, and budget pacing to generate actionable recommendations — not data for a human to interpret. And unlike a benchmarking survey, it runs continuously.',
  },
  {
    q: 'What ROI can I bring to leadership?',
    a: 'Productivity and cost: ~30 hours per manager per merit cycle returned, and roughly $300K in labor savings for a 1,000-person company — before the always-on agent which can save an additional ~2% of total payroll annually by making precise, timely raises instead of uniform merit budgets. Contact us for a demo and we will show you exactly how much you can save.',
  },
  {
    q: 'How does the always-on compensation agent work?',
    a: 'The agent monitors every employee — performance trends, retention signals, market shifts, and budget pacing in real time — and surfaces individual raise recommendations at the moment they should happen. Each recommendation includes full justification: market position, performance rating, peer benchmarks, recommended increase, and budget impact. You approve through your existing workflow.',
  },
  {
    q: 'How long until we\'re live?',
    a: 'The AI merit cycle product is designed to go live before your next cycle. Most customers connect their HRIS in days and are running a draft within two weeks, if required. The always-on agent follows once you\'ve run one cycle and the engine has learned your company\'s patterns.',
  },
  {
    q: 'Does this replace our HRIS or Comp tools?',
    a: 'No. Composable integrates with your existing HR stack — Workday, Rippling, BambooHR, and 80+ more. It sits alongside your HRIS, reads employee and performance data, and writes approved recommendations back automatically. We can replace your comp tools after you run the first cycle with us.',
  },
  {
    q: 'What does the design partner program involve?',
    a: 'Bi-weekly calls with the founding team. Direct input into the product roadmap. Early access to new capabilities before general release. Preferred pricing locked in before public launch.',
  },
]

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* Problem intro */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn>
            <div className="max-w-3xl">
              <p className="text-xs font-semibold tracking-widest text-brand-600 uppercase mb-4">
                The Problem
              </p>
              <h2 className="font-display text-4xl sm:text-5xl font-extrabold text-ink-950 mb-6 leading-tight">
                The annual merit cycle is{' '}
                <span className="grad-text">costing you talent and money.</span>
              </h2>
              <p className="text-xl text-ink-500 leading-relaxed">
                You still run compensation like it is the 1990's. Blank spreadsheets, stale data, rigid timelines, and calibration meetings full of arguments instead of data. Six weeks of Total Rewards prep for a process that&apos;s already 14 months out of date. The employees you wanted to keep{' '}
                <strong className="text-ink-800">already left</strong>. The overpays that didn&apos;t need to happen{' '}
                <strong className="text-ink-800">already happened</strong>.
              </p>
            </div>
          </AnimateIn>
        </div>
      </section>

      <FeatureSplit
        eyebrow="AI Compensation Intelligence"
        headline="Replace the spreadsheet before the cycle starts."
        description="Before your next merit cycle opens, Composable generates a complete AI-drafted recommendation for every employee — grounded in performance data, market position, internal equity, retention risk, and your available budget. Managers review, adjust, and approve instead of starting from a blank cell. Calibration meetings run on synthesized data instead of arguments."
        bullets={[
          'Complete first-draft for every employee before cycle opens',
          'Grounded in performance, market position, equity, and retention risk',
          'Real-time budget impact, equity gap detection, and outlier flags',
          '6 weeks of Total Rewards prep reduced to one weekend',
        ]}
        cta={{ label: 'See AI merit cycles', href: '/features/ai-merit-cycles' }}
        imageLabel="AI Merit Cycle Recommendations — 720×500"
        imageSrc="/mock-slack.png"
        imageWidth={720}
        imageHeight={500}
      />

      <FeatureSplit
        eyebrow="Proactive Compensation Partner"
        headline="From annual cycle to continuous, individualized raises."
        description="Once your company trusts our engine on the annual cycle, we flip you to continuous. Instead of one pool, one date, one 4% raise every March — our agent monitors every employee and recommends individual raises at the moment they should happen. Early enough to retain top talent. Not a day sooner."
        bullets={[
          'Monitors performance trends, retention signals, and market shifts in real time',
          'Surfaces recommendations with full justification and timing rationale',
          'Routes approvals through configured workflows, syncs back to HRIS',
          '~2% total payroll savings annually vs. uniform annual cycles',
        ]}
        cta={{ label: 'See the comp agent', href: '/features/comp-agent' }}
        imageLabel="Always-On Compensation Agent — 720×500"
        imageSrc="/mock-slack-auto.png"
        imageWidth={720}
        imageHeight={500}
        reverse
        accent
      />

      <MetricsRow
        eyebrow="Platform Impact"
        headline="The numbers behind the engine."
        subhead="Comp leaders are measured on retaining talent, winning offers, and maximizing value per comp dollar. Composable moves all three — with a business case you can take to the board."
        metrics={metrics}
      />

      {/* How it works */}
      <section id="how-it-works" className="py-20 md:py-28 bg-ink-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn>
            <div className="text-center mb-14">
              <p className="text-xs font-semibold tracking-widest text-mint-400 uppercase mb-4">
                How it works
              </p>
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white mb-4">
                Four things the engine learns. Two things it delivers.
              </h2>
              <p className="text-lg text-white/60 max-w-2xl mx-auto leading-relaxed">
                Composable plugs into your HRIS, performance system, and live market data. From that foundation, everything is automated.
              </p>
            </div>
          </AnimateIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
            {[
              {
                label: 'Your pay philosophy',
                desc: 'Target percentile, geo strategy, equity vs. cash mix, and performance differentials',
                accent: 'text-brand-400',
                num: '01',
              },
              {
                label: 'Your guardrails',
                desc: 'Budgets, salary bands, comp ratio limits, approval thresholds, and equity refresh rules',
                accent: 'text-mint-400',
                num: '02',
              },
              {
                label: 'Your people',
                desc: 'Performance history, comp ratio, tenure, retention risk signals, and current market position per employee',
                accent: 'text-purple-400',
                num: '03',
              },
              {
                label: 'Live market data',
                desc: 'Role, level, geography, and skill premium adjustments pulled continuously from current market sources',
                accent: 'text-mint-400',
                num: '04',
              },
            ].map((item, i) => (
              <AnimateIn key={item.label} delay={i * 0.07}>
                <div className="p-6 rounded-2xl border border-white/10 bg-white/5 h-full">
                  <p className={`font-display text-3xl font-extrabold mb-3 ${item.accent}`}>{item.num}</p>
                  <p className="font-semibold text-white text-sm mb-2">{item.label}</p>
                  <p className="text-xs text-white/40 leading-relaxed">{item.desc}</p>
                </div>
              </AnimateIn>
            ))}
          </div>

          <AnimateIn delay={0.3}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {[
                {
                  label: 'AI-drafted merit cycles',
                  desc: 'A complete, manager-ready recommendation for every employee before the cycle starts. Review, adjust, approve.',
                  accent: 'border-brand-500/40 bg-brand-500/5',
                  tag: 'Product 1',
                },
                {
                  label: 'Just-in-time raise recommendations',
                  desc: 'Individual, continuous, with full timing rationale. Syncs to HRIS and payroll on approval.',
                  accent: 'border-mint-500/40 bg-mint-500/5',
                  tag: 'Product 2',
                },
              ].map((item) => (
                <div key={item.label} className={`p-6 rounded-2xl border ${item.accent}`}>
                  <p className="text-xs font-semibold tracking-widest text-white/40 uppercase mb-3">{item.tag}</p>
                  <p className="font-display font-bold text-white text-xl mb-2">{item.label}</p>
                  <p className="text-sm text-white/60 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </AnimateIn>
        </div>
      </section>

      <FeatureSplit
        eyebrow="Unique to Composable:"
        headline="Introduce flexible compensation for your employees."
        description="Give employees real choice over how their compensation is structured. Salary, equity, RRSP/401(k), benefits — allocated within guardrails you define. Join organizations like Netflix, Shopify, and Coinbase in offering complete flexibility to your team."
        bullets={[
          'Self-allocation across salary, equity, retirement, and benefits',
          'Retain and acquire top talent through flexibility',
          'Employer-defined guardrails and approval workflows',
          'Branded always-on Total Rewards Statements',
        ]}
        cta={{ label: 'See flexible compensation', href: '/features/flex-comp-engine' }}
        imageLabel="Flexible Compensation Election Interface — 720×500"
        imageSrc="/mock-flex.png"
        imageWidth={720}
        imageHeight={500}
      />

      <UseCaseGrid
        eyebrow="Built for every comp team"
        headline="One intelligence, giving you scale."
        subhead="Whether you're a Total Rewards team of one or a large People ops function, Composable solves the problems that show up in attrition reports, offer rejection emails, and board budget conversations."
        cases={useCases}
      />

      <IntegrationCloud limit={12} showFilter={false} />

      <FAQ
        eyebrow="FAQ"
        headline="Common questions."
        items={faqItems}
      />

      <CTABanner
        headline="Your comp engine is still a spreadsheet. Ours isn't."
        subhead="Join the design partner cohort and build the future of compensation with us."
      />
    </>
  )
}
