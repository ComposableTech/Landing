import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { Check, ArrowLeft, ArrowRight, Sparkles, Activity, Sliders, Shield, FileText, Plug, Play, type LucideIcon } from 'lucide-react'
import { AnimateIn } from '@/components/ui/animate-in'
import { CTABanner } from '@/components/sections/CTABanner'
import { products, getProductBySlug } from '@/lib/data/products'
import { InteractiveDemoTrigger } from '@/components/demo/InteractiveDemoTrigger'

const iconMap: Record<string, LucideIcon> = { Sparkles, Activity, Sliders, Shield, FileText, Plug }

export async function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const product = getProductBySlug(slug)
  if (!product) return {}
  return {
    title: `${product.name} — Composable`,
    description: product.description,
  }
}

export default async function ProductDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const product = getProductBySlug(slug)
  if (!product) notFound()

  const Icon = iconMap[product.icon]
  const otherProducts = products.filter((p) => p.slug !== slug)

  return (
    <>
      {/* Back link */}
      <div className="bg-white border-b border-ink-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link href="/" className="inline-flex items-center gap-2 text-sm text-ink-500 hover:text-ink-900 transition-colors">
            <ArrowLeft size={14} />
            Back to home
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
                  {product.eyebrow}
                </span>
              </div>
              <h1 className="font-display text-4xl sm:text-5xl font-extrabold text-ink-950 mb-6 leading-tight">
                {product.name}
              </h1>
              <p className="text-xl text-ink-500 leading-relaxed mb-10">
                {product.description}
              </p>
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

      {/* Screenshot or Interactive Demo */}
      <section className="pb-20 bg-ink-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn>
            {product.slug === 'flexible-compensation-infrastructure' ? (
              <InteractiveDemoTrigger />
            ) : (
              <div className="rounded-2xl border border-ink-200 overflow-hidden shadow-xl shadow-ink-900/5">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={1100}
                  height={680}
                  className="w-full h-auto"
                />
              </div>
            )}
          </AnimateIn>
        </div>
      </section>

      {/* Features included */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn>
            <h2 className="font-display text-3xl font-extrabold text-ink-950 mb-4">
              What&apos;s included
            </h2>
            <p className="text-lg text-ink-600 mb-10 max-w-2xl">
              Everything you need to {product.slug === 'compensation-agent-merit-cycles' ? 'replace annual cycles with intelligent, just-in-time compensation' : 'give employees choice over their total rewards package'}.
            </p>
          </AnimateIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {product.features.map((feature, i) => {
              const FeatureIcon = iconMap[feature.icon]
              return (
                <AnimateIn key={feature.name} delay={i * 0.1}>
                  <div className="p-6 rounded-2xl border border-ink-200 bg-white hover:border-brand-200 hover:shadow-md transition-all duration-200">
                    <div className="w-10 h-10 rounded-xl bg-brand-50 flex items-center justify-center mb-4">
                      {FeatureIcon ? <FeatureIcon size={18} className="text-brand-600" /> : null}
                    </div>
                    <h3 className="font-display text-lg font-bold text-ink-900 mb-2">
                      {feature.name}
                    </h3>
                    <p className="text-sm text-ink-500 leading-relaxed">{feature.description}</p>
                  </div>
                </AnimateIn>
              )
            })}
          </div>
        </div>
      </section>

      {/* Deep dive copy */}
      {/* <section className="py-20 bg-ink-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn>
            <h2 className="font-display text-3xl font-extrabold text-ink-950 mb-6">
              Why {product.name.toLowerCase()} matters.
            </h2>
            <div className="prose prose-lg prose-ink max-w-none text-ink-600">
              <p>
                Most total rewards platforms treat compensation as a static value. You configure it once — and employees live with whatever was decided for them.
              </p>
              <p>
                {product.name} changes that dynamic. By giving you the infrastructure to modernize how compensation decisions are made, you increase efficiency without increasing cost. The research is consistent: intelligent, timely decisions drive better outcomes.
              </p>
              <p>
                Composable&apos;s platform is designed to work within your existing comp architecture — not replace it. Your bands, your ranges, your rules. We automate the rest.
              </p>
            </div>
          </AnimateIn>
        </div>
      </section> */}

      {/* Other products */}
      {otherProducts.length > 0 && (
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimateIn>
              <h2 className="font-display text-2xl font-extrabold text-ink-950 mb-8">
                Other products
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {otherProducts.map((p) => {
                  const ProductIcon = iconMap[p.icon]
                  return (
                    <Link
                      key={p.slug}
                      href={`/products/${p.slug}`}
                      className="group bg-white rounded-2xl border border-ink-200 hover:border-brand-200 hover:shadow-md transition-all duration-200 p-6"
                    >
                      <div className="w-10 h-10 rounded-xl bg-brand-50 flex items-center justify-center mb-4 group-hover:bg-brand-100 transition-colors">
                        {ProductIcon ? <ProductIcon size={18} className="text-brand-600" /> : null}
                      </div>
                      <h3 className="font-display font-bold text-ink-900 mb-2 group-hover:text-brand-600 transition-colors">
                        {p.name}
                      </h3>
                      <p className="text-sm text-ink-500">{p.tagline}</p>
                    </Link>
                  )
                })}
              </div>
            </AnimateIn>
          </div>
        </section>
      )}

      <CTABanner />
    </>
  )
}
