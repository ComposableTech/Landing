'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { Check, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { AnimateIn } from '@/components/ui/animate-in'
import { cn } from '@/lib/utils'
import { pricingProducts } from '@/lib/data/pricing'

export function PricingTable() {
  const [annual, setAnnual] = useState(true)
  const [activeProduct, setActiveProduct] = useState(pricingProducts[0].id)

  const product = pricingProducts.find((p) => p.id === activeProduct) ?? pricingProducts[0]

  return (
    <div>
      {/* Product tabs */}
      <AnimateIn>
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-2 mb-10">
          {pricingProducts.map((p) => (
            <button
              key={p.id}
              onClick={() => setActiveProduct(p.id)}
              className={cn(
                'px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-150 text-left sm:text-center',
                activeProduct === p.id
                  ? 'bg-brand-600 text-white shadow-sm'
                  : 'bg-ink-100 text-ink-600 hover:bg-ink-200 hover:text-ink-900'
              )}
            >
              {p.name}
            </button>
          ))}
        </div>
      </AnimateIn>

      {/* Product description */}
      <AnimateIn>
        <p className="text-center text-ink-500 text-base max-w-2xl mx-auto mb-10 leading-relaxed">
          {product.tagline}
        </p>
      </AnimateIn>

      {/* Annual / Monthly toggle */}
      <AnimateIn>
        <div className="flex items-center justify-center gap-4 mb-12">
          <span className={cn('text-sm font-medium', !annual ? 'text-ink-900' : 'text-ink-400')}>Monthly</span>
          <button
            onClick={() => setAnnual((v) => !v)}
            className={cn(
              'relative w-12 h-6 rounded-full transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500',
              annual ? 'bg-brand-600' : 'bg-ink-200'
            )}
            aria-label="Toggle annual billing"
          >
            <span
              className={cn(
                'absolute top-1 w-4 h-4 rounded-full bg-white shadow transition-transform duration-200',
                annual ? 'translate-x-7' : 'translate-x-1'
              )}
            />
          </button>
          <span className={cn('text-sm font-medium', annual ? 'text-ink-900' : 'text-ink-400')}>
            Annual
            <span className="ml-2 text-xs font-semibold text-mint-600 bg-mint-400/10 border border-mint-400/20 rounded-full px-2 py-0.5">
              Save 20%
            </span>
          </span>
        </div>
      </AnimateIn>

      {/* Tier cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
        {product.tiers.map((tier, i) => (
          <AnimateIn key={tier.name} delay={i * 0.08}>
            <div
              className={cn(
                'relative flex flex-col p-8 rounded-2xl border transition-all h-full',
                tier.featured
                  ? 'border-brand-500 shadow-xl shadow-brand-500/15 bg-brand-600 text-white'
                  : 'border-ink-200 bg-white'
              )}
            >
              {tier.featured && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="bg-mint-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                    Most popular
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3 className={cn('font-display text-xl font-bold mb-1', tier.featured ? 'text-white' : 'text-ink-950')}>
                  {tier.name}
                </h3>
                <p className={cn('text-sm', tier.featured ? 'text-white/70' : 'text-ink-500')}>
                  {tier.tagline}
                </p>
              </div>

              <div className="mb-6">
                <p className={cn('font-display text-3xl font-extrabold', tier.featured ? 'text-white' : 'text-ink-950')}>
                  {annual ? tier.price.annual : tier.price.monthly}
                </p>
                <p className={cn('text-xs mt-1', tier.featured ? 'text-white/60' : 'text-ink-400')}>
                  per employee / year — custom quote
                </p>
              </div>

              <Button
                className={cn(
                  'w-full mb-8',
                  tier.featured ? 'bg-white text-brand-700 hover:bg-ink-50' : ''
                )}
                variant={tier.featured ? 'primary' : 'secondary'}
                asChild
              >
                <Link href={tier.ctaHref}>{tier.cta}</Link>
              </Button>

              <ul className="space-y-3 flex-1">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm">
                    <Check
                      size={16}
                      className={cn('mt-0.5 shrink-0', tier.featured ? 'text-mint-300' : 'text-mint-500')}
                    />
                    <span className={tier.featured ? 'text-white/90' : 'text-ink-700'}>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          </AnimateIn>
        ))}
      </div>

      {/* Comparison table */}
      <AnimateIn>
        <h3 className="font-display text-2xl font-extrabold text-ink-950 text-center mb-8">
          Full feature comparison
        </h3>
        <div className="overflow-x-auto rounded-2xl border border-ink-200">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-ink-200 bg-ink-50">
                <th className="text-left px-6 py-4 text-ink-500 font-medium">Feature</th>
                {product.tiers.map((tier) => (
                  <th
                    key={tier.name}
                    className={cn(
                      'px-5 py-4 text-center font-semibold min-w-[110px]',
                      tier.featured ? 'font-bold text-brand-600 bg-brand-50' : 'text-ink-700'
                    )}
                  >
                    {tier.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {product.comparison.map((section) => (
                <React.Fragment key={section.category}>
                  <tr className="bg-ink-50 border-y border-ink-200">
                    <td colSpan={4} className="px-6 py-2.5 text-xs font-bold text-ink-500 uppercase tracking-wider">
                      {section.category}
                    </td>
                  </tr>
                  {section.features.map((f, i) => (
                    <tr key={f.name} className={i % 2 === 0 ? 'bg-white' : 'bg-ink-50/40'}>
                      <td className="px-6 py-3.5 text-ink-800 font-medium">{f.name}</td>
                      <td className="px-5 py-3.5 text-center"><CellVal v={f.starter} /></td>
                      <td className="px-5 py-3.5 text-center bg-brand-50/40"><CellVal v={f.growth} /></td>
                      <td className="px-5 py-3.5 text-center"><CellVal v={f.enterprise} /></td>
                    </tr>
                  ))}
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>
      </AnimateIn>
    </div>
  )
}

function CellVal({ v }: { v: boolean | string }) {
  if (v === true) return <Check size={16} className="text-mint-600 mx-auto" />
  if (v === false) return <X size={16} className="text-ink-300 mx-auto" />
  return <span className="text-ink-600">{v}</span>
}
