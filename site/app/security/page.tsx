import type { Metadata } from 'next'
import { Shield, Lock, Globe, FileCheck, Server, Eye } from 'lucide-react'
import { AnimateIn } from '@/components/ui/animate-in'
import { CTABanner } from '@/components/sections/CTABanner'

export const metadata: Metadata = {
  title: 'Security & Trust — Composable',
  description: 'How Composable secures employee compensation data. SOC 2 Type II, GDPR, CRA and IRS compliance, and enterprise-grade infrastructure.',
}

const pillars = [
  { icon: Shield, title: 'SOC 2 Type II', description: 'Annually audited by an independent third-party auditor. Our SOC 2 Type II report covers security, availability, and confidentiality.' },
  { icon: Lock, title: 'Encryption at rest and in transit', description: 'All data encrypted at rest using AES-256. All data in transit uses TLS 1.3. Encryption keys managed via AWS KMS with per-customer isolation.' },
  { icon: Globe, title: 'GDPR & PIPEDA compliant', description: 'Data Processing Agreements (DPAs) available for all enterprise customers. PIPEDA compliant for Canadian operations. CCPA compliant for California residents.' },
  { icon: FileCheck, title: 'CRA & IRS compliance', description: 'Tax calculation mechanics are reviewed by licensed tax professionals in Canada and the US. Compliance is a core feature, not an afterthought.' },
  { icon: Server, title: 'Infrastructure', description: 'Hosted on AWS in Canadian (ca-central-1) and US (us-east-1) regions. Custom data residency available for enterprise customers with specific jurisdictional requirements.' },
  { icon: Eye, title: 'Audit logging', description: 'Immutable audit log of every election, approval, configuration change, and admin action. Exportable for internal audit, external review, or regulatory examination.' },
]

export default function SecurityPage() {
  return (
    <>
      <section className="pt-20 pb-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn>
            <div className="max-w-3xl">
              <p className="text-xs font-semibold tracking-widest text-brand-600 uppercase mb-4">Security & Trust</p>
              <h1 className="font-display text-5xl sm:text-6xl font-extrabold text-ink-950 mb-6 leading-tight">
                Security is not a feature.{' '}
                <span className="grad-text">It&apos;s the foundation.</span>
              </h1>
              <p className="text-xl text-ink-500 leading-relaxed">
                We handle employee compensation data. That is a responsibility we take seriously. Here is exactly how we protect it.
              </p>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Compliance badges */}
      <section className="py-12 bg-ink-50 border-y border-ink-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn>
            <div className="flex flex-wrap justify-center gap-4">
              {['SOC 2 Type II', 'GDPR', 'PIPEDA', 'CRA Compliant', 'IRS Compliant', 'CCPA', 'AES-256 Encryption', 'TLS 1.3'].map((b) => (
                <div key={b} className="bg-white border border-ink-200 rounded-xl px-5 py-3 font-semibold text-ink-700 text-sm">
                  {b}
                </div>
              ))}
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Security pillars */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pillars.map((p, i) => (
              <AnimateIn key={p.title} delay={i * 0.07}>
                <div className="p-7 bg-ink-50 rounded-2xl border border-ink-200 hover:border-brand-200 transition-all">
                  <div className="w-11 h-11 rounded-xl bg-brand-50 flex items-center justify-center mb-5">
                    <p.icon size={20} className="text-brand-600" />
                  </div>
                  <h3 className="font-display text-lg font-bold text-ink-950 mb-3">{p.title}</h3>
                  <p className="text-sm text-ink-500 leading-relaxed">{p.description}</p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* Responsible disclosure */}
      <section className="py-16 bg-ink-50 border-y border-ink-200">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimateIn>
            <h2 className="font-display text-2xl font-extrabold text-ink-950 mb-4">Responsible disclosure.</h2>
            <p className="text-ink-500 leading-relaxed mb-6">
              If you discover a security vulnerability in Composable, please disclose it responsibly. We will respond within 24 hours and work with you to remediate the issue as quickly as possible.
            </p>
            <a href="mailto:security@getcomposable.com" className="inline-flex items-center gap-2 text-brand-600 font-semibold hover:underline">
              security@getcomposable.com
            </a>
          </AnimateIn>
        </div>
      </section>

      <CTABanner
        headline="Questions about security?"
        subhead="Our team is happy to discuss our security posture, share documentation, or answer audit questionnaires."
        primaryCta={{ label: 'Contact our security team', href: '/contact' }}
      />
    </>
  )
}
