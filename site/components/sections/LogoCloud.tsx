import { AnimateIn } from '@/components/ui/animate-in'

const logos = [
  'Canada Goose',
  'Wealthsimple',
  'Float',
  'Clearco',
  'Clio',
  'TouchBistro',
  'League',
  'Jobber',
]

export function LogoCloud() {
  return (
    <section className="py-14 border-y border-ink-200 bg-ink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateIn>
          <p className="text-center text-xs font-semibold tracking-widest text-ink-400 uppercase mb-8">
            Trusted by Total Rewards leaders at
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-5">
            {logos.map((name) => (
              <span
                key={name}
                className="font-display font-bold text-base text-ink-300 hover:text-ink-400 transition-colors tracking-tight select-none"
              >
                {name}
              </span>
            ))}
          </div>
        </AnimateIn>
      </div>
    </section>
  )
}
