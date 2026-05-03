'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { AnimateIn } from '@/components/ui/animate-in'
import { cn } from '@/lib/utils'

interface FAQItem {
  q: string
  a: string
}

interface FAQProps {
  eyebrow?: string
  headline?: string
  items: FAQItem[]
}

export function FAQ({ eyebrow, headline = 'Common questions.', items }: FAQProps) {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section className="py-20 md:py-28 bg-ink-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateIn>
          <div className="text-center mb-12">
            {eyebrow && (
              <p className="text-xs font-semibold tracking-widest text-brand-600 uppercase mb-4">
                {eyebrow}
              </p>
            )}
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-ink-950">
              {headline}
            </h2>
          </div>
        </AnimateIn>

        <div className="space-y-2">
          {items.map((item, i) => (
            <AnimateIn key={i} delay={i * 0.04}>
              <div className="bg-white rounded-2xl border border-ink-200 overflow-hidden">
                <button
                  className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 hover:bg-ink-50 transition-colors"
                  onClick={() => setOpen(open === i ? null : i)}
                  aria-expanded={open === i}
                >
                  <span className="font-semibold text-ink-900 text-base">{item.q}</span>
                  <ChevronDown
                    size={18}
                    className={cn(
                      'text-ink-400 shrink-0 transition-transform duration-200',
                      open === i && 'rotate-180'
                    )}
                  />
                </button>
                {open === i && (
                  <div className="px-6 pb-5">
                    <p className="text-ink-600 text-base leading-relaxed">{item.a}</p>
                  </div>
                )}
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  )
}
