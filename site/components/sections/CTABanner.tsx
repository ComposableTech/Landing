import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { AnimateIn } from '@/components/ui/animate-in'

interface CTABannerProps {
  headline?: string
  subhead?: string
  primaryCta?: { label: string; href: string }
  secondaryCta?: { label: string; href: string }
}

export function CTABanner({
  headline = 'The flexibility your best employees are looking for.',
  subhead = 'Now you can unlock it for everyone. Easily.',
  primaryCta = { label: 'Apply to be a design partner', href: '/contact' },
  secondaryCta,
}: CTABannerProps) {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      {/* Gradient background */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background:
            'linear-gradient(135deg, #4338CA 0%, #6366F1 50%, #2DD4BF 100%)',
        }}
      />
      {/* Subtle noise texture overlay */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 opacity-20"
        style={{
          backgroundImage:
            'radial-gradient(circle at 20% 50%, rgba(255,255,255,0.3) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(255,255,255,0.1) 0%, transparent 50%)',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <AnimateIn>
          <h2 className="font-display text-4xl sm:text-5xl font-extrabold text-white mb-5 max-w-3xl mx-auto leading-tight">
            {headline}
          </h2>
          <p className="text-xl text-white/80 mb-10 max-w-xl mx-auto leading-relaxed">
            {subhead}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button
              size="lg"
              className="bg-white text-brand-700 hover:bg-ink-50 shadow-lg"
              asChild
            >
              <Link href={primaryCta.href}>{primaryCta.label}</Link>
            </Button>
            {secondaryCta && (
              <Button
                size="lg"
                className="bg-transparent text-white border border-white/40 hover:bg-white/10"
                asChild
              >
                <Link href={secondaryCta.href}>{secondaryCta.label}</Link>
              </Button>
            )}
          </div>
        </AnimateIn>
      </div>
    </section>
  )
}
