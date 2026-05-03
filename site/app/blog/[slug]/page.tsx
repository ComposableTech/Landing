import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { AnimateIn } from '@/components/ui/animate-in'
import { CTABanner } from '@/components/sections/CTABanner'
import { posts, getPostBySlug } from '@/lib/data/blog'

export async function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) return {}
  return {
    title: `${post.title} — Composable Blog`,
    description: post.excerpt,
  }
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) notFound()

  const related = posts.filter((p) => p.slug !== slug).slice(0, 2)

  return (
    <>
      <div className="bg-white border-b border-ink-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link href="/blog" className="inline-flex items-center gap-2 text-sm text-ink-500 hover:text-ink-900 transition-colors">
            <ArrowLeft size={14} />
            All posts
          </Link>
        </div>
      </div>

      <article className="pt-16 pb-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn>
            <header className="mb-10">
              <span className="text-xs font-semibold text-brand-600 uppercase tracking-wider">{post.category}</span>
              <h1 className="font-display text-4xl sm:text-5xl font-extrabold text-ink-950 mt-3 mb-5 leading-tight">
                {post.title}
              </h1>
              <p className="text-xl text-ink-500 leading-relaxed mb-6">{post.excerpt}</p>
              <div className="flex items-center gap-4 text-sm text-ink-400 pb-8 border-b border-ink-200">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-full bg-brand-50 flex items-center justify-center text-xs font-bold text-brand-700">
                    {post.author.split(' ').map((n) => n[0]).join('')}
                  </div>
                  <span>{post.author}</span>
                </div>
                <span>·</span>
                <span>{post.readTime} read</span>
                <span>·</span>
                <time dateTime={post.date}>{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</time>
              </div>
            </header>

            {post.content && (
              <div className="prose prose-lg prose-ink max-w-none">
                {post.content.split('\n\n').map((block, i) => {
                  if (block.startsWith('## ')) {
                    return (
                      <h2 key={i} className="font-display text-2xl font-extrabold text-ink-950 mt-10 mb-4">
                        {block.slice(3)}
                      </h2>
                    )
                  }
                  return (
                    <p key={i} className="text-ink-600 text-lg leading-relaxed mb-5">
                      {block}
                    </p>
                  )
                })}
              </div>
            )}
          </AnimateIn>
        </div>
      </article>

      {/* Related posts */}
      {related.length > 0 && (
        <section className="py-16 bg-ink-50 border-t border-ink-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimateIn>
              <h2 className="font-display text-2xl font-extrabold text-ink-950 mb-8">More from the blog</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {related.map((p) => (
                  <Link
                    key={p.slug}
                    href={`/blog/${p.slug}`}
                    className="group bg-white border border-ink-200 rounded-2xl p-6 hover:border-brand-200 hover:shadow-md transition-all"
                  >
                    <span className="text-xs font-semibold text-brand-600 uppercase tracking-wider">{p.category}</span>
                    <h3 className="font-display font-bold text-ink-900 mt-2 mb-3 group-hover:text-brand-700 transition-colors leading-snug">
                      {p.title}
                    </h3>
                    <p className="text-sm text-ink-500 line-clamp-2">{p.excerpt}</p>
                  </Link>
                ))}
              </div>
            </AnimateIn>
          </div>
        </section>
      )}

      <CTABanner />
    </>
  )
}
