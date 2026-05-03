import type { Metadata } from 'next'
import Link from 'next/link'
import { Check } from 'lucide-react'
import { AnimateIn } from '@/components/ui/animate-in'
import { FAQ } from '@/components/sections/FAQ'
import { CTABanner } from '@/components/sections/CTABanner'
import { pricingFAQ, pricingProducts } from '@/lib/data/pricing'

export const metadata: Metadata = {
  title: 'Pricing — Composable',
  description: 'Flexible Compensation, AI Comp Consulting, and Payroll Services — each available independently, all priced per employee per year. Custom quotes with no hidden fees.',
}

export default function PricingPage() {
  return (
    <>
      {/* Header */}
      <section className="pt-20 pb-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimateIn>
            <p className="text-xs font-semibold tracking-widest text-brand-600 uppercase mb-4">Pricing</p>
            <h1 className="font-display text-5xl sm:text-6xl font-extrabold text-ink-950 mb-6 leading-tight">
              Three products.{' '}
              <span className="grad-text">One platform.</span>
            </h1>
            <p className="text-xl text-ink-500 max-w-2xl mx-auto leading-relaxed">
              Use each product independently or together. All priced per employee per year — no hidden fees, no per-module add-ons.
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* Three product columns */}
      <section className="pb-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pricingProducts.map((product, i) => (
              <AnimateIn key={product.id} delay={i * 0.08}>
                <div className="flex flex-col h-full rounded-2xl border border-ink-200 bg-white p-8">
                  <div className="mb-6">
                    <p className="text-xs font-semibold uppercase tracking-widest mb-2 text-brand-600">
                      Product {i + 1}
                    </p>
                    <h2 className="font-display text-2xl font-extrabold mb-3 leading-tight text-ink-950">
                      {product.name}
                    </h2>
                    <p className="text-sm leading-relaxed text-ink-500">
                      {product.tagline}
                    </p>
                  </div>

                  <div className="rounded-xl px-5 py-4 mb-6 bg-ink-50 border border-ink-200">
                    <p className="font-display text-3xl font-extrabold text-ink-950">
                      Custom
                    </p>
                    <p className="text-xs mt-1 text-ink-400">
                      per employee / year — quoted to your headcount
                    </p>
                  </div>

                  <ul className="space-y-2.5 mb-8 flex-1">
                    {product.tiers[1].features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-sm">
                        <Check size={15} className="mt-0.5 shrink-0 text-mint-500" />
                        <span className="text-ink-700">{f}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="/contact"
                    className="block text-center font-semibold px-6 py-3 rounded-xl text-sm transition-colors bg-brand-600 text-white hover:bg-brand-700"
                  >
                    Talk to us →
                  </Link>
                </div>
              </AnimateIn>
            ))}
          </div>

          <AnimateIn delay={0.2}>
            <p className="text-center text-sm text-ink-400 mt-8">
              All products available independently. Bundle pricing available — ask us.
            </p>
          </AnimateIn>
        </div>
      </section>

      <FAQ
        eyebrow="Pricing FAQ"
        headline="Everything you need to know."
        items={pricingFAQ}
      />

      <CTABanner
        headline="Ready to get a quote?"
        subhead="Tell us about your headcount and we'll put together a custom proposal within 24 hours."
        primaryCta={{ label: 'Request a quote', href: '/contact' }}
        secondaryCta={{ label: 'Talk to us', href: '/contact' }}
      />
    </>
  )
}
