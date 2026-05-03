import type { Metadata } from 'next'
import { AnimateIn } from '@/components/ui/animate-in'
import { CTABanner } from '@/components/sections/CTABanner'

export const metadata: Metadata = {
  title: 'About — Composable',
  description: "We're building the infrastructure layer that makes employee-directed compensation actually possible. Here's why.",
}

const values = [
  { title: 'Employee agency is non-negotiable', description: 'People should have real control over the comp decisions that affect their lives. Not the illusion of choice — actual, meaningful flexibility.' },
  { title: 'Employers deserve simplicity', description: "Flexibility shouldn't require an extra hire. We automate the hard parts so Total Rewards teams can focus on strategy, not spreadsheets." },
  { title: 'Trust is earned through compliance', description: 'CRA and IRS compliance, audit trails, and SOC 2 are not features — they are the foundation. We build for regulators from day one.' },
  { title: 'We\'re in it for the long game', description: 'We\'re not chasing growth metrics. We\'re building the infrastructure that will power the next decade of employee compensation.' },
]

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-20 pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn>
            <div className="max-w-3xl">
              <p className="text-xs font-semibold tracking-widest text-brand-600 uppercase mb-4">About</p>
              <h1 className="font-display text-5xl sm:text-6xl font-extrabold text-ink-950 mb-8 leading-tight">
                We&apos;re building the{' '}
                <span className="grad-text">infrastructure</span>{' '}
                that makes comp flexibility actually possible.
              </h1>
              <p className="text-xl text-ink-500 leading-relaxed mb-6">
                Compensation has not fundamentally changed in 40 years. It is still a number decided by someone else, handed down, take it or leave it.
              </p>
              <p className="text-xl text-ink-500 leading-relaxed">
                We started Composable because we believe that is wrong — and fixable. The technology to give employees real agency over their total rewards has existed for years. What was missing was the infrastructure layer that makes it operationally viable at scale, without adding headcount.
              </p>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Origin story */}
      <section className="py-20 bg-ink-50 border-y border-ink-200">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn>
            <h2 className="font-display text-3xl font-extrabold text-ink-950 mb-6">Why we started.</h2>
            <div className="space-y-5 text-ink-600 text-lg leading-relaxed">
              <p>
                The founding team at Composable spent years inside HR, finance, and people operations at companies ranging from 50-person startups to 5,000-person scale-ups. We saw the same pattern everywhere: Total Rewards leaders were spending 40% of their time on individual comp exception requests — and still losing senior talent anyway.
              </p>
              <p>
                Every senior IC wanted something different. One wanted more equity and less base. Another wanted a bigger RRSP contribution matched by the company. A third wanted to convert part of their bonus into a learning budget. All of these requests were legitimate. None of them were scalably addressable.
              </p>
              <p>
                We built Composable to make all of them possible — systematically, compliantly, and without a single additional HR headcount.
              </p>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn>
            <h2 className="font-display text-3xl font-extrabold text-ink-950 mb-12 text-center">
              What we believe.
            </h2>
          </AnimateIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((v, i) => (
              <AnimateIn key={v.title} delay={i * 0.08}>
                <div className="p-8 bg-ink-50 rounded-2xl border border-ink-200">
                  <h3 className="font-display text-xl font-bold text-ink-950 mb-3">{v.title}</h3>
                  <p className="text-ink-600 leading-relaxed">{v.description}</p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 bg-ink-50 border-y border-ink-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimateIn>
            <h2 className="font-display text-3xl font-extrabold text-ink-950 mb-4">Made in Canada.</h2>
            <p className="text-lg text-ink-500 max-w-2xl mx-auto leading-relaxed">
              Composable is headquartered in Toronto, with the team distributed across Canada and the US. We are early — and we are building this in public, with our design partners.
            </p>
            <p className="mt-6 text-ink-400 text-sm">
              Want to join us? <a href="/careers" className="text-brand-600 font-semibold hover:underline">See open roles →</a>
            </p>
          </AnimateIn>
        </div>
      </section>

      <CTABanner
        headline="Want to build this with us?"
        subhead="We&apos;re working closely with design partners to shape the product. Apply now."
      />
    </>
  )
}
