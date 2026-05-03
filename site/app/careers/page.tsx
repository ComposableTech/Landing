import type { Metadata } from 'next'
import Link from 'next/link'
import { AnimateIn } from '@/components/ui/animate-in'
import { CTABanner } from '@/components/sections/CTABanner'

export const metadata: Metadata = {
  title: 'Careers — Composable',
  description: "We're a small team building infrastructure that changes how employees experience compensation. If that sounds interesting, let's talk.",
}

const openRoles = [
  {
    title: 'Senior Full-Stack Engineer',
    team: 'Engineering',
    location: 'Toronto / Remote (Canada)',
    type: 'Full-time',
    description: 'Build the core election infrastructure, real-time tax engine, and integration platform. You will own significant pieces of a product used by thousands of employees.',
  },
  {
    title: 'Product Designer',
    team: 'Product',
    location: 'Toronto / Remote (Canada)',
    type: 'Full-time',
    description: 'Design the employee election experience, employer admin console, and Total Rewards Statement builder. You will shape how compensation feels for everyone who touches Composable.',
  },
  {
    title: 'Customer Success Lead',
    team: 'Customer Success',
    location: 'Toronto (on-site preferred)',
    type: 'Full-time',
    description: 'Own the relationship with our design partner cohort. Run onboarding, guide configuration, and translate customer feedback into product insight for the founding team.',
  },
]

export default function CareersPage() {
  return (
    <>
      <section className="pt-20 pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn>
            <div className="max-w-3xl">
              <p className="text-xs font-semibold tracking-widest text-brand-600 uppercase mb-4">Careers</p>
              <h1 className="font-display text-5xl sm:text-6xl font-extrabold text-ink-950 mb-6 leading-tight">
                Help us change how{' '}
                <span className="grad-text">comp works.</span>
              </h1>
              <p className="text-xl text-ink-500 leading-relaxed mb-6">
                We are a small team — intentionally. Every person at Composable has direct impact on the product, the customers, and the direction of the company.
              </p>
              <p className="text-lg text-ink-500 leading-relaxed">
                We are not building a feature. We are building new infrastructure for a category that has not changed in decades. If that kind of scope interests you, read on.
              </p>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-ink-50 border-y border-ink-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
              {[
                { title: 'Remote-first', desc: 'Work from anywhere in Canada or the US. We optimize for async first, with occasional in-person for the things that matter.' },
                { title: 'Equity from day one', desc: 'Everyone at Composable holds meaningful equity. We use our own product to let people allocate their comp the way they want.' },
                { title: 'Direct impact', desc: 'No big company politics. You talk to customers. You ship features. You see the results directly.' },
              ].map((v) => (
                <div key={v.title} className="p-7 bg-white rounded-2xl border border-ink-200">
                  <h3 className="font-display font-bold text-ink-950 text-lg mb-3">{v.title}</h3>
                  <p className="text-sm text-ink-500 leading-relaxed">{v.desc}</p>
                </div>
              ))}
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Open roles */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn>
            <h2 className="font-display text-3xl font-extrabold text-ink-950 mb-10">Open roles.</h2>
          </AnimateIn>
          <div className="space-y-4">
            {openRoles.map((role, i) => (
              <AnimateIn key={role.title} delay={i * 0.07}>
                <div className="bg-white border border-ink-200 rounded-2xl p-7 hover:border-brand-200 hover:shadow-md transition-all duration-200">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex flex-wrap gap-2 mb-3">
                        <span className="text-xs font-semibold text-brand-600 bg-brand-50 border border-brand-100 rounded-full px-2.5 py-0.5">{role.team}</span>
                        <span className="text-xs text-ink-500 bg-ink-50 border border-ink-200 rounded-full px-2.5 py-0.5">{role.type}</span>
                        <span className="text-xs text-ink-500 bg-ink-50 border border-ink-200 rounded-full px-2.5 py-0.5">{role.location}</span>
                      </div>
                      <h3 className="font-display text-xl font-bold text-ink-950 mb-2">{role.title}</h3>
                      <p className="text-sm text-ink-500 leading-relaxed">{role.description}</p>
                    </div>
                    <Link
                      href={`/contact?role=${encodeURIComponent(role.title)}`}
                      className="shrink-0 inline-flex items-center gap-2 bg-brand-600 hover:bg-brand-700 text-white font-semibold px-5 py-2.5 rounded-xl text-sm transition-colors"
                    >
                      Apply now →
                    </Link>
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>

          <AnimateIn delay={0.3}>
            <div className="mt-8 p-6 bg-ink-50 rounded-2xl border border-ink-200 text-center">
              <p className="text-ink-600 mb-2">Don&apos;t see your role listed?</p>
              <Link href="/contact" className="text-brand-600 font-semibold hover:underline text-sm">
                Send us your background anyway →
              </Link>
            </div>
          </AnimateIn>
        </div>
      </section>

      <CTABanner
        headline="Build the future of compensation with us."
        subhead="Small team. Big problem. Real equity from day one."
        primaryCta={{ label: 'See open roles above', href: '#' }}
        secondaryCta={{ label: 'Email us directly', href: 'mailto:pat@getcomposable.com' }}
      />
    </>
  )
}
