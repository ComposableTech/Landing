import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Check, ArrowLeft, ArrowRight, Sparkles, Activity, Sliders, Shield, FileText, Plug, type LucideIcon } from 'lucide-react'
import { AnimateIn } from '@/components/ui/animate-in'
import { CTABanner } from '@/components/sections/CTABanner'
import { Placeholder } from '@/components/sections/Placeholder'
import { features, getFeatureBySlug } from '@/lib/data/features'

const iconMap: Record<string, LucideIcon> = { Sparkles, Activity, Sliders, Shield, FileText, Plug }

export async function generateStaticParams() {
  return features.map((f) => ({ slug: f.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const feature = getFeatureBySlug(slug)
  if (!feature) return {}
  return {
    title: `${feature.name} — Composable`,
    description: feature.description,
  }
}

export default async function FeatureDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const feature = getFeatureBySlug(slug)
  if (!feature) notFound()

  const Icon = iconMap[feature.icon]
  // Filter out current feature and hidden features (total-rewards-statements)
  const related = features
    .filter((f) => f.slug !== slug && f.slug !== 'total-rewards-statements')
    .slice(0, 3)

  return (
    <>
      {/* Back link */}
      <div className="bg-white border-b border-ink-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link href="/features" className="inline-flex items-center gap-2 text-sm text-ink-500 hover:text-ink-900 transition-colors">
            <ArrowLeft size={14} />
            All features
          </Link>
        </div>
      </div>

      {/* Hero */}
      <section className="pt-16 pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn>
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-brand-50 flex items-center justify-center">
                  {Icon ? <Icon size={22} className="text-brand-600" /> : null}
                </div>
                <span className="text-xs font-semibold tracking-widest text-brand-600 uppercase">
                  {feature.eyebrow}
                </span>
              </div>
              <h1 className="font-display text-4xl sm:text-5xl font-extrabold text-ink-950 mb-6 leading-tight">
                {feature.name}
              </h1>
              <p className="text-xl text-ink-500 leading-relaxed mb-8">
                {feature.description}
              </p>
              <ul className="space-y-3 mb-10">
                {feature.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-3 text-base text-ink-700">
                    <span className="mt-0.5 w-5 h-5 rounded-full bg-mint-400/15 flex items-center justify-center shrink-0">
                      <Check size={12} className="text-mint-600" />
                    </span>
                    {b}
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-brand-600 hover:bg-brand-700 text-white font-semibold px-6 py-3 rounded-xl transition-colors"
              >
                See it in action
                <ArrowRight size={16} />
              </Link>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Screenshot */}
      <section className="pb-20 bg-ink-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn>
            <div className="rounded-2xl border border-ink-200 overflow-hidden shadow-xl shadow-ink-900/5">
              <Placeholder label={`${feature.name} — 1100×680`} width={1100} height={680} />
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Deep dive copy */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn>
            <h2 className="font-display text-3xl font-extrabold text-ink-950 mb-6">
              Why {feature.name.toLowerCase()} matters.
            </h2>
            <div className="prose prose-lg prose-ink max-w-none text-ink-600">
              <p>
                Most total rewards platforms treat compensation as a static value. You configure it once — and employees live with whatever was decided for them.
              </p>
              <p>
                {feature.name} changes that dynamic. By giving employees structured agency over this dimension of their package, you increase perceived value without increasing cost. The research is consistent: when people choose their own mix, they value it more.
              </p>
              <p>
                Composable&apos;s {feature.name.toLowerCase()} is designed to work within your existing comp architecture — not replace it. Your bands, your ranges, your rules. We automate the rest.
              </p>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Related features */}
      <section className="py-16 bg-ink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn>
            <h2 className="font-display text-2xl font-extrabold text-ink-950 mb-8">Related features</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {related.map((f) => {
                const RelIcon = iconMap[f.icon]
                return (
                  <Link
                    key={f.slug}
                    href={`/features/${f.slug}`}
                    className="group bg-white rounded-2xl border border-ink-200 hover:border-brand-200 hover:shadow-md transition-all duration-200 p-6"
                  >
                    <div className="w-10 h-10 rounded-xl bg-brand-50 flex items-center justify-center mb-4 group-hover:bg-brand-100 transition-colors">
                      {RelIcon ? <RelIcon size={18} className="text-brand-600" /> : null}
                    </div>
                    <h3 className="font-display font-bold text-ink-900 mb-2 group-hover:text-brand-600 transition-colors">
                      {f.name}
                    </h3>
                    <p className="text-sm text-ink-500">{f.tagline}</p>
                  </Link>
                )
              })}
            </div>
          </AnimateIn>
        </div>
      </section>

      <CTABanner />
    </>
  )
}
