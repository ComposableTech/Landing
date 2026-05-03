import { AnimateIn } from '@/components/ui/animate-in'

interface Testimonial {
  quote: string
  name: string
  role: string
  initials: string
  featured?: boolean
}

interface TestimonialBlockProps {
  eyebrow?: string
  headline?: string
  testimonials: Testimonial[]
}

export function TestimonialBlock({ eyebrow, headline, testimonials }: TestimonialBlockProps) {
  const featured = testimonials.find((t) => t.featured) ?? testimonials[0]
  const rest = testimonials.filter((t) => t !== featured).slice(0, 2)

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {(eyebrow || headline) && (
          <AnimateIn>
            <div className="text-center max-w-2xl mx-auto mb-14">
              {eyebrow && (
                <p className="text-xs font-semibold tracking-widest text-brand-600 uppercase mb-4">
                  {eyebrow}
                </p>
              )}
              {headline && (
                <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-ink-950">
                  {headline}
                </h2>
              )}
            </div>
          </AnimateIn>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Featured testimonial */}
          <AnimateIn className="lg:col-span-2" direction="left">
            <div className="h-full p-8 rounded-2xl bg-brand-600 text-white flex flex-col justify-between">
              <blockquote>
                <p className="text-xl font-medium leading-relaxed mb-8 opacity-95">
                  &ldquo;{featured.quote}&rdquo;
                </p>
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center font-display font-bold text-base">
                  {featured.initials}
                </div>
                <div>
                  <p className="font-semibold text-white">{featured.name}</p>
                  <p className="text-sm text-white/70">{featured.role}</p>
                </div>
              </div>
            </div>
          </AnimateIn>

          {/* Secondary testimonials */}
          <AnimateIn className="flex flex-col gap-6" direction="right" delay={0.1}>
            {rest.map((t) => (
              <div
                key={t.name}
                className="flex-1 p-6 rounded-2xl border border-ink-200 bg-white flex flex-col justify-between"
              >
                <blockquote>
                  <p className="text-base text-ink-700 leading-relaxed mb-6">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </blockquote>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-brand-50 flex items-center justify-center font-display font-bold text-sm text-brand-700">
                    {t.initials}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-ink-900">{t.name}</p>
                    <p className="text-xs text-ink-500">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </AnimateIn>
        </div>
      </div>
    </section>
  )
}
