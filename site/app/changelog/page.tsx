import type { Metadata } from 'next'
import { AnimateIn } from '@/components/ui/animate-in'

export const metadata: Metadata = {
  title: 'Changelog — Composable',
  description: "What we've shipped, when we shipped it. A running log of Composable product updates.",
}

const changelog = [
  {
    version: '0.4.0',
    date: '2026-04-01',
    label: 'Beta',
    headline: 'Real-time tax calculator — live in Canada',
    updates: [
      'Province-level CRA tax calculations now update within 300ms as employees adjust their elections',
      'RRSP contribution mechanics with employer match modeling',
      'HSA and FSA amount treatment for US employees (beta)',
      'Take-home pay preview redesigned to show gross-to-net waterfall',
    ],
  },
  {
    version: '0.3.5',
    date: '2026-03-15',
    label: 'Beta',
    headline: 'Approval workflow engine',
    updates: [
      'Multi-level approval chains for elections above defined thresholds',
      'Email and Slack notification triggers for pending approvals',
      'Bulk approve/reject with audit comment required',
      'Delegation: approvers can assign backups during OOO periods',
    ],
  },
  {
    version: '0.3.0',
    date: '2026-02-20',
    label: 'Beta',
    headline: 'Total Rewards Statements — first release',
    updates: [
      'Personalized Total Rewards Statements generated per-employee each cycle',
      'Full equity fair value + unvested value integration via Carta',
      'PDF export with your logo, brand colors, and custom message',
      'Shareable web link with access-controlled view for individual employees',
    ],
  },
  {
    version: '0.2.0',
    date: '2026-01-10',
    label: 'Alpha',
    headline: 'HRIS integrations — first wave',
    updates: [
      'BambooHR, Rippling, and Workday bidirectional sync live',
      'Employee data import: name, role, band, comp components',
      'Election results export: payroll-ready file per payroll system',
      'Webhook support for real-time sync on employee record changes',
    ],
  },
  {
    version: '0.1.0',
    date: '2025-11-01',
    label: 'Alpha',
    headline: 'Private alpha launch with design partners',
    updates: [
      'Core election engine: 6 comp dimensions configurable',
      'Employer guardrail configuration: min/max ranges per dimension per band',
      'Employee election portal: responsive, accessible, mobile-ready',
      'Admin dashboard: election overview, pending approvals, cycle management',
    ],
  },
]

export default function ChangelogPage() {
  return (
    <>
      <section className="pt-20 pb-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn>
            <div className="max-w-3xl">
              <p className="text-xs font-semibold tracking-widest text-brand-600 uppercase mb-4">Changelog</p>
              <h1 className="font-display text-5xl sm:text-6xl font-extrabold text-ink-950 mb-6 leading-tight">
                What we&apos;ve shipped.
              </h1>
              <p className="text-xl text-ink-500 leading-relaxed">
                A running log of Composable product updates — what changed, when, and why.
              </p>
            </div>
          </AnimateIn>
        </div>
      </section>

      <section className="pb-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-6 top-0 bottom-0 w-px bg-ink-200" />

            <div className="space-y-12">
              {changelog.map((entry, i) => (
                <AnimateIn key={entry.version} delay={i * 0.07}>
                  <div className="relative flex gap-6">
                    {/* Timeline dot */}
                    <div className="relative z-10 shrink-0 w-12 h-12 rounded-full bg-white border-2 border-brand-500 flex items-center justify-center">
                      <div className="w-3 h-3 rounded-full bg-brand-500" />
                    </div>

                    <div className="flex-1 pb-2">
                      <div className="flex flex-wrap items-center gap-3 mb-3">
                        <span className="font-display font-bold text-ink-950">v{entry.version}</span>
                        <span className="text-xs font-semibold text-brand-600 bg-brand-50 border border-brand-100 rounded-full px-2.5 py-0.5">
                          {entry.label}
                        </span>
                        <time className="text-sm text-ink-400">
                          {new Date(entry.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                        </time>
                      </div>

                      <h2 className="font-display text-xl font-bold text-ink-950 mb-4">{entry.headline}</h2>

                      <ul className="space-y-2">
                        {entry.updates.map((u, j) => (
                          <li key={j} className="flex items-start gap-3 text-sm text-ink-600">
                            <span className="text-brand-400 mt-0.5 shrink-0">→</span>
                            {u}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </AnimateIn>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
