import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { AnimateIn } from '@/components/ui/animate-in'
import { CTABanner } from '@/components/sections/CTABanner'
import { posts, categories } from '@/lib/data/blog'

export const metadata: Metadata = {
  title: 'Blog — Composable',
  description: 'Insights on flexible compensation, total rewards strategy, and the future of employee-directed comp from the Composable team.',
}

export default function BlogPage() {
  const featured = posts.find((p) => p.featured)
  const rest = posts.filter((p) => !p.featured)

  return (
    <>
      <section className="pt-20 pb-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn>
            <div className="max-w-3xl">
              <p className="text-xs font-semibold tracking-widest text-brand-600 uppercase mb-4">Blog</p>
              <h1 className="font-display text-5xl sm:text-6xl font-extrabold text-ink-950 mb-6 leading-tight">
                Insights on comp,{' '}
                <span className="grad-text">from comp people.</span>
              </h1>
              <p className="text-xl text-ink-500 leading-relaxed">
                Strategy, data, and product thinking for Total Rewards leaders navigating the future of employee compensation.
              </p>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Featured post */}
      {featured && (
        <section className="pb-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimateIn>
              <Link
                href={`/blog/${featured.slug}`}
                className="group grid md:grid-cols-2 gap-8 bg-ink-50 border border-ink-200 rounded-2xl overflow-hidden hover:border-brand-200 hover:shadow-xl hover:shadow-brand-500/5 transition-all duration-200"
              >
                <div className="aspect-video bg-brand-50 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="font-display text-3xl font-extrabold text-brand-600 mb-2">
                      {featured.category}
                    </div>
                    <div className="text-sm text-brand-400">Featured article</div>
                  </div>
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <span className="text-xs font-semibold text-brand-600 uppercase tracking-wider mb-3">{featured.category}</span>
                  <h2 className="font-display text-2xl font-bold text-ink-950 mb-4 group-hover:text-brand-700 transition-colors leading-snug">
                    {featured.title}
                  </h2>
                  <p className="text-ink-500 leading-relaxed mb-6">{featured.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-ink-400">
                      {featured.author} · {featured.readTime}
                    </div>
                    <span className="text-brand-600 group-hover:translate-x-1 transition-transform">
                      <ArrowRight size={16} />
                    </span>
                  </div>
                </div>
              </Link>
            </AnimateIn>
          </div>
        </section>
      )}

      {/* Other posts */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((post, i) => (
              <AnimateIn key={post.slug} delay={i * 0.07}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="group flex flex-col h-full bg-white border border-ink-200 rounded-2xl overflow-hidden hover:border-brand-200 hover:shadow-lg hover:shadow-brand-500/5 transition-all duration-200"
                >
                  <div className="aspect-video bg-ink-50 flex items-center justify-center">
                    <div className="font-display text-2xl font-extrabold text-ink-200">
                      {post.category}
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <span className="text-xs font-semibold text-brand-600 uppercase tracking-wider mb-3">{post.category}</span>
                    <h2 className="font-display text-lg font-bold text-ink-950 mb-3 group-hover:text-brand-700 transition-colors leading-snug flex-1">
                      {post.title}
                    </h2>
                    <p className="text-sm text-ink-500 leading-relaxed mb-5 line-clamp-3">{post.excerpt}</p>
                    <div className="flex items-center justify-between pt-4 border-t border-ink-100">
                      <span className="text-xs text-ink-400">{post.author} · {post.readTime}</span>
                      <ArrowRight size={14} className="text-brand-600 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        headline="Stay ahead on total rewards strategy."
        subhead="Get new articles in your inbox. No noise — just signal."
        primaryCta={{ label: 'Subscribe to the newsletter', href: '/contact' }}
      />
    </>
  )
}
