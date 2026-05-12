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
      {/* Animated gradient background */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 animate-gradient-shift"
        style={{
          background:
            'linear-gradient(135deg, var(--color-brand-600) 0%, var(--color-intelligence-500) 50%, var(--color-accent-500) 100%)',
          backgroundSize: '200% 200%',
        }}
      />
      {/* Animated glow orbs */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/10 rounded-full blur-[120px] animate-pulse-glow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white/10 rounded-full blur-[120px] animate-pulse-glow" style={{ animationDelay: '1.5s' }}></div>
      </div>
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 -z-10 opacity-10 grid-pattern"></div>

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
