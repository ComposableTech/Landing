import type { Metadata } from 'next'
import { AnimateIn } from '@/components/ui/animate-in'
import { IntegrationCloud } from '@/components/sections/IntegrationCloud'
import { CTABanner } from '@/components/sections/CTABanner'

export const metadata: Metadata = {
  title: 'Integrations — Composable',
  description: '80+ HRIS, payroll, benefits, SSO, and equity integrations. Connect Composable to your existing HR stack with no migration required.',
}

export default function IntegrationsPage() {
  return (
    <>
      <section className="pt-20 pb-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn>
            <div className="max-w-3xl">
              <p className="text-xs font-semibold tracking-widest text-brand-600 uppercase mb-4">Integrations</p>
              <h1 className="font-display text-5xl sm:text-6xl font-extrabold text-ink-950 mb-6 leading-tight">
                Your HR stack. <span className="grad-text">No migration.</span>
              </h1>
              <p className="text-xl text-ink-500 leading-relaxed">
                Composable sits on top of your existing systems. Employee data flows in, election results flow out. One-click payroll exports every cycle.
              </p>
            </div>
          </AnimateIn>
        </div>
      </section>

      <IntegrationCloud showFilter />

      <CTABanner
        headline="Don't see your system?"
        subhead="We're always adding new integrations. Tell us what you're running and we'll prioritize it."
        primaryCta={{ label: 'Request an integration', href: '/contact' }}
      />
    </>
  )
}
