export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  category: string
  author: string
  authorRole: string
  date: string
  readTime: string
  featured?: boolean
  content?: string
}

export const posts: BlogPost[] = [
  {
    slug: 'flexible-comp-beats-benchmarking-for-retention',
    title: 'Why flexible comp beats benchmarking for senior talent retention',
    excerpt:
      'Market data tells you what to pay. But it says nothing about why your best people leave — or how to stop them. The answer is agency, not dollars.',
    category: 'Strategy',
    author: 'Pat Grogan',
    authorRole: 'Founder, Composable',
    date: '2026-04-15',
    readTime: '7 min',
    featured: true,
    content: `
Senior attrition is rarely about base pay. When a top performer leaves, the exit interview almost never says "I wasn't paid enough." It says "I didn't feel valued" or "I had no control" or "the recruiter offered me equity I actually believe in."

Comp benchmarking is useful. Knowing you're in the 60th percentile for your market is important information. But it won't stop a VP of Engineering who wants to trade 10% of base for a larger equity stake from taking a call from your biggest competitor.

## The problem with static compensation

Traditional comp is binary: here is your package, take it or leave it. You can benchmark all day, but if the structure doesn't match what your employee needs at their specific life stage, you're leaving retention on the table.

A 28-year-old engineer with no dependents wants equity. A 45-year-old director with two kids in university wants base and RRSP room. A new grad wants learning budget and remote flexibility. One package cannot satisfy all three — but most comp architectures try anyway.

## What flexibility actually does

When employees can allocate their total rewards — even within a constrained budget — something interesting happens. They make choices that reflect their actual situation, which means the comp now *fits* them in a way a static package never could.

This is why perceived value is the real metric. A $200K package that an employee has optimized for their own situation has higher perceived value than a $220K package that doesn't fit. And higher perceived value means lower voluntary attrition.

Our early data from design partners shows a +40 eNPS point lift on total rewards satisfaction when employees have structured flexibility — even before a single dollar of additional budget is committed.

## The role of benchmarking

Comp benchmarking still matters. You need to know your ranges are competitive. But benchmarking is the floor, not the ceiling. Once you've established market-rate ranges, the next question is: what do you do within those ranges to maximize perceived value?

That's where flexibility becomes your competitive advantage. Not more money — more agency.

The companies that will win the next decade of talent competition are the ones that give employees the feeling of ownership over their own financial futures. That's not a budget question. It's an architecture question.
    `.trim(),
  },
  {
    slug: 'the-315k-mistake',
    title: "The $315K mistake: what a senior departure really costs",
    excerpt:
      'Most HR leaders can quote average replacement cost. Almost none of them have calculated the full loaded cost of a senior departure — including what it does to the team left behind.',
    category: 'Workforce Analytics',
    author: 'Pat Grogan',
    authorRole: 'Founder, Composable',
    date: '2026-03-28',
    readTime: '6 min',
    featured: false,
    content: `
The $315,000 figure surprises most people the first time they hear it. It's the average fully-loaded cost of a senior talent departure — and most HR leaders are dramatically underestimating it.

Let's break it down.

## The obvious costs

- **Recruiter fees**: 20–30% of first-year comp for a senior hire. On a $180K base, that's $36–54K.
- **Onboarding time to full productivity**: 6–12 months for senior individual contributors. At $180K all-in, that's $90–180K of partial-productivity cost.
- **Backfill salary premium**: The market moves. Your replacement likely costs 10–15% more than the person they're replacing.

Add those up and you're at $150–250K before you've accounted for anything invisible.

## The invisible costs

- **Institutional knowledge**: A senior engineer who leaves takes 3–7 years of context with them. That context lives in their head, not your documentation. Rebuilding it takes months.
- **Team disruption**: Research consistently shows that when a high performer leaves, adjacent team members become 30–40% more likely to leave within 12 months.
- **Customer relationship risk**: For client-facing roles, departure events trigger up to 15% of customer churn events in the 90-day window after the departure.
- **Manager time**: Recruiting, interviewing, and onboarding a senior hire consumes 150–300 hours of manager and leadership time.

## What this means for comp investment

If one senior departure costs $315K in expectation value, and your comp infrastructure is preventing one retention every two years for every 50 employees, the math is straightforward.

For a 200-person company with 40 senior ICs, preventing 2 senior departures per year generates $630K of value. A flexible comp platform should cost a fraction of that.

The question isn't whether you can afford flexibility infrastructure. It's whether you can afford not to have it.
    `.trim(),
  },
  {
    slug: 'real-time-tax-visibility',
    title: 'Real-time tax visibility: the new table stakes for total rewards',
    excerpt:
      "Employees make financial decisions about their total rewards without real financial data. That's not their fault — most platforms don't show it. Here's why that has to change.",
    category: 'Product',
    author: 'Pat Grogan',
    authorRole: 'Founder, Composable',
    date: '2026-03-10',
    readTime: '5 min',
    featured: false,
    content: `
Here's a scenario that plays out in every large company, every year.

Open enrollment opens. An employee looks at the benefits options, makes some rough calculations in their head, and picks the plan that seems right. Two months later, they realize their RRSP contribution is eating into take-home in a way they didn't expect, or their HSA election missed the deadline for their biggest medical expense.

This isn't negligence. It's information asymmetry. The employee is being asked to make consequential financial decisions without the financial modeling tools to understand the outcomes.

## The information gap in comp

Ask your HR team how many support tickets they get during open enrollment. The number is almost always higher than they expect, and the dominant question is some variation of: "If I choose X, what does that do to my paycheck?"

This is a solvable problem. Tax mechanics are deterministic. RRSP and 401(k) contributions follow predictable rules. Health savings account treatments are calculable. The reason employees can't see this information in real time isn't that it's complex — it's that existing platforms haven't built the calculator.

## Why it matters for perceived value

When an employee can see, in real time, that electing $500/month more into their RRSP only reduces their take-home by $310 (because of the tax shield), they're getting real financial value. Not hypothetical value — immediate, actionable value that changes how they experience their comp.

That's worth more than almost any other feature you can build into a total rewards platform. Not because it's technically impressive, but because it creates genuine financial clarity for real people making real decisions.

## What best-in-class looks like

The standard should be: an employee can open their election portal, move any slider, and see their estimated net take-home update within 500ms. Province and state-level tax rates. Registered account mechanics. Benefit premium cost mapping.

That's not a moonshot. It's engineering discipline applied to a problem that has been left unsolved for too long.

We built it because we were convinced it would be the single feature that employees talk about after their first election cycle. The data from our design partners confirms it.
    `.trim(),
  },
]

export function getPostBySlug(slug: string): BlogPost | undefined {
  return posts.find((p) => p.slug === slug)
}

export const categories = ['Strategy', 'Workforce Analytics', 'Product', 'Compliance', 'Case Studies']
