import Link from 'next/link'
import Image from 'next/image'
import { Check } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

const proofPoints = [
  'Plugs into Rippling, HiBob, BambooHR & 80+ more',
  'AI-drafted recommendations for every employee',
  'Immediate headache relief',
]

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-white pt-20 pb-0">
      {/* Subtle gradient background */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 50% -10%, rgba(99,102,241,0.08) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto pb-16">
          {/* Badge */}
          <div className="flex justify-center mb-8">
            <Badge variant="dot" dot>
              Now accepting limited design partners in US &amp; Canada
            </Badge>
          </div>

          {/* Headline */}
          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-none tracking-tight text-ink-950 mb-7">
            Just-in-time{' '}
            <span className="grad-text">compensation intelligence</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl sm:text-2xl text-ink-500 leading-relaxed max-w-2xl mx-auto mb-10">
            Composable plugs into your existing data to 10x your compensation intelligence overnight — smart and diligent pay recommendations, at scale.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
            <Button size="lg" variant="primary" asChild>
              <Link href="/contact">Become a design partner</Link>
            </Button>
            <Button size="lg" variant="secondary" asChild>
              <Link href="#how-it-works">See how it works →</Link>
            </Button>
          </div>

          {/* Trust microcopy */}
          <div className="flex flex-wrap items-center justify-center gap-6">
            {proofPoints.map((p) => (
              <span key={p} className="flex items-center gap-2 text-sm text-ink-500">
                <Check size={15} className="text-mint-500 shrink-0" />
                {p}
              </span>
            ))}
          </div>
        </div>

        {/* Hero product screenshot */}
        <div className="relative mx-auto max-w-5xl">
          <div className="rounded-2xl border border-ink-200 overflow-hidden shadow-2xl shadow-brand-500/10">
            <Image
              src="/mock-recommendations.png"
              alt="Composable AI compensation recommendations"
              width={2418}
              height={1274}
              className="w-full"
              priority
            />
          </div>
          {/* Glow under card */}
          <div
            aria-hidden
            className="absolute -bottom-12 left-1/2 -translate-x-1/2 w-3/4 h-16 rounded-full blur-3xl opacity-30 pointer-events-none"
            style={{ background: 'linear-gradient(90deg, #A855F7, #2DD4BF)' }}
          />
        </div>
      </div>
    </section>
  )
}
