import Link from 'next/link'
import Image from 'next/image'
import { Check, ArrowRight } from 'lucide-react'
import { AnimateIn } from '@/components/ui/animate-in'
import { Placeholder } from '@/components/sections/Placeholder'

interface FeatureSplitProps {
  eyebrow: string
  headline: string
  description: string
  bullets?: string[]
  cta?: { label: string; href: string }
  imageLabel: string
  imageSrc?: string
  imageWidth?: number
  imageHeight?: number
  reverse?: boolean
  accent?: boolean
}

export function FeatureSplit({
  eyebrow,
  headline,
  description,
  bullets,
  cta,
  imageLabel,
  imageSrc,
  imageWidth = 720,
  imageHeight = 500,
  reverse = false,
  accent = false,
}: FeatureSplitProps) {
  return (
    <section className={accent ? 'bg-ink-50 py-20 md:py-28' : 'bg-white py-20 md:py-28'}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`flex flex-col gap-12 lg:gap-20 lg:items-center ${
            reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'
          }`}
        >
          {/* Text block */}
          <AnimateIn
            className="flex-1 max-w-xl"
            direction={reverse ? 'right' : 'left'}
          >
            <p className="text-xs font-semibold tracking-widest text-brand-600 uppercase mb-4">
              {eyebrow}
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-ink-950 mb-5 leading-tight">
              {headline}
            </h2>
            <p className="text-lg text-ink-500 leading-relaxed mb-6">
              {description}
            </p>
            {bullets && bullets.length > 0 && (
              <ul className="space-y-3 mb-8">
                {bullets.map((b) => (
                  <li key={b} className="flex items-start gap-3 text-ink-700 text-base">
                    <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-mint-400/15 flex items-center justify-center">
                      <Check size={12} className="text-mint-600" />
                    </span>
                    {b}
                  </li>
                ))}
              </ul>
            )}
            {cta && (
              <Link
                href={cta.href}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-brand-200 bg-brand-50 text-brand-700 font-semibold hover:bg-brand-100 hover:border-brand-300 transition-all text-sm"
              >
                {cta.label}
                <ArrowRight size={14} />
              </Link>
            )}
          </AnimateIn>

          {/* Screenshot block */}
          <AnimateIn
            className="flex-1 w-full max-w-xl lg:max-w-none"
            direction={reverse ? 'left' : 'right'}
            delay={0.1}
          >
            <div className="rounded-2xl border border-ink-200 overflow-hidden shadow-xl shadow-ink-900/5">
              {imageSrc ? (
                <Image
                  src={imageSrc}
                  alt={imageLabel}
                  width={imageWidth}
                  height={imageHeight}
                  className="w-full h-auto"
                />
              ) : (
                <Placeholder label={imageLabel} width={imageWidth} height={imageHeight} />
              )}
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  )
}
