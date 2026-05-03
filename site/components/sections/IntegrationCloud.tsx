'use client'

import { useState } from 'react'
import Link from 'next/link'
import { AnimateIn } from '@/components/ui/animate-in'
import { cn } from '@/lib/utils'
import { integrations, integrationCategories } from '@/lib/data/integrations'

interface IntegrationCloudProps {
  limit?: number
  showFilter?: boolean
}

export function IntegrationCloud({ limit, showFilter = false }: IntegrationCloudProps) {
  const [active, setActive] = useState('All')

  const filtered = active === 'All' ? integrations : integrations.filter((i) => i.category === active)
  const displayed = limit ? filtered.slice(0, limit) : filtered

  return (
    <section className="py-20 md:py-28 bg-ink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateIn>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-xs font-semibold tracking-widest text-brand-600 uppercase mb-4">
              Integrations
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-ink-950 mb-4">
              80+ integrations, handled by our team.
            </h2>
            <p className="text-lg text-ink-500 leading-relaxed">
              Composable connects to your existing HR tech stack. Employee data flows in, intelligence flows out - securely.
            </p>
          </div>
        </AnimateIn>

        {showFilter && (
          <AnimateIn delay={0.1}>
            <div className="flex flex-wrap justify-center gap-2 mb-10">
              {integrationCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActive(cat)}
                  className={cn(
                    'px-4 py-2 rounded-full text-sm font-medium transition-all',
                    active === cat
                      ? 'bg-brand-600 text-white shadow-sm'
                      : 'bg-white border border-ink-200 text-ink-600 hover:border-brand-300 hover:text-brand-600'
                  )}
                >
                  {cat}
                </button>
              ))}
            </div>
          </AnimateIn>
        )}

        <AnimateIn delay={0.15}>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3">
            {displayed.map((integration) => (
              <div
                key={integration.name}
                className="group bg-white border border-ink-200 rounded-xl p-4 flex flex-col items-center gap-2 hover:border-brand-300 hover:shadow-md transition-all duration-200"
              >
                {/* Logo placeholder circle */}
                <div className="w-10 h-10 rounded-lg bg-ink-100 flex items-center justify-center text-xs font-bold text-ink-400">
                  {integration.name.slice(0, 2).toUpperCase()}
                </div>
                <div className="text-center">
                  <p className="text-xs font-semibold text-ink-900 leading-tight">{integration.name}</p>
                  <p className="text-xs text-ink-400 mt-0.5">{integration.category}</p>
                </div>
              </div>
            ))}
          </div>
        </AnimateIn>

        {limit && filtered.length > limit && (
          <AnimateIn delay={0.2}>
            <div className="text-center mt-8">
              <Link href="/integrations" className="text-sm font-semibold text-brand-600 hover:text-brand-700 inline-flex items-center gap-1">
                View all {filtered.length} integrations →
              </Link>
            </div>
          </AnimateIn>
        )}
      </div>
    </section>
  )
}
