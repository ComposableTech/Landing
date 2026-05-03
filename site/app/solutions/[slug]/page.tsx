import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Check, ArrowLeft, ArrowRight } from 'lucide-react'
import { AnimateIn } from '@/components/ui/animate-in'
import { CTABanner } from '@/components/sections/CTABanner'
import { solutions, getSolutionBySlug } from '@/lib/data/solutions'

export async function generateStaticParams() {
  return solutions.map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const sol = getSolutionBySlug(slug)
  if (!sol) return {}
  return {
    title: `${sol.audience} — Composable`,
    description: sol.subhead,
  }
}

export default async function SolutionDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const sol = getSolutionBySlug(slug)
  if (!sol) notFound()

  return (
    <>
      {/* Back link */}
      <div className="bg-white border-b border-ink-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link href="/solutions" className="inline-flex items-center gap-2 text-sm text-ink-500 hover:text-ink-900 transition-colors">
            <ArrowLeft size={14} />
            All solutions
          </Link>
        </div>
      </div>

      {/* Hero */}
      <section className="pt-16 pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn>
            <div className="max-w-3xl">
              <p className="text-xs font-semibold tracking-widest text-brand-600 uppercase mb-4">
                For {sol.audience}
              </p>
              <h1 className="font-display text-4xl sm:text-5xl font-extrabold text-ink-950 mb-6 leading-tight">
                {sol.headline}
              </h1>
              <p className="text-xl text-ink-500 leading-relaxed mb-8">{sol.subhead}</p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-brand-600 hover:bg-brand-700 text-white font-semibold px-6 py-3 rounded-xl transition-colors"
              >
                Book a demo <ArrowRight size={16} />
              </Link>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Problem/Solution splits */}
      <section className="py-16 bg-ink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn>
            <h2 className="font-display text-3xl font-extrabold text-ink-950 mb-10">
              Your biggest comp challenges. Solved.
            </h2>
          </AnimateIn>
          <div className="space-y-5">
            {sol.problems.map((p, i) => (
              <AnimateIn key={p.title} delay={i * 0.08}>
                <div className="bg-white rounded-2xl border border-ink-200 p-7 grid md:grid-cols-2 gap-6">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-red-50 border border-red-100 flex items-center justify-center shrink-0 mt-0.5">
                      <span className="text-red-400 text-sm font-bold">✗</span>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-ink-400 uppercase tracking-wider mb-1.5">The problem</p>
                      <p className="font-semibold text-ink-900">{p.title}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-mint-400/15 border border-mint-400/30 flex items-center justify-center shrink-0 mt-0.5">
                      <Check size={14} className="text-mint-600" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-brand-600 uppercase tracking-wider mb-1.5">With Composable</p>
                      <p className="text-ink-700 text-sm leading-relaxed">{p.solution}</p>
                    </div>
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn>
            <blockquote className="text-center">
              <p className="font-display text-2xl font-semibold text-ink-900 leading-relaxed mb-8">
                &ldquo;{sol.testimonialQuote}&rdquo;
              </p>
              <footer>
                <p className="font-semibold text-ink-900">{sol.testimonialName}</p>
                <p className="text-sm text-ink-500 mt-1">{sol.testimonialRole}</p>
              </footer>
            </blockquote>
          </AnimateIn>
        </div>
      </section>

      {/* Checklist */}
      <section className="py-16 bg-ink-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn>
            <h2 className="font-display text-2xl font-extrabold text-ink-950 mb-8">
              What you&apos;ll be able to do.
            </h2>
            <ul className="space-y-4">
              {sol.checklist.map((item, i) => (
                <li key={i} className="flex items-start gap-4 bg-white rounded-xl border border-ink-200 p-4">
                  <span className="w-6 h-6 rounded-full bg-brand-600 flex items-center justify-center shrink-0 mt-0.5">
                    <Check size={13} className="text-white" />
                  </span>
                  <p className="text-ink-700 font-medium">{item}</p>
                </li>
              ))}
            </ul>
          </AnimateIn>
        </div>
      </section>

      <CTABanner
        headline={`Ready to see Composable in action for ${sol.audience}?`}
        subhead="Book a 30-minute demo tailored to your team's specific workflow."
        primaryCta={{ label: 'Book a demo', href: '/contact' }}
      />
    </>
  )
}
