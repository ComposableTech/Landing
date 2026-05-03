import { cn } from '@/lib/utils'

interface PlaceholderProps {
  label: string
  width: number
  height: number
  className?: string
}

export function Placeholder({ label, width, height, className }: PlaceholderProps) {
  const ratio = (height / width) * 100

  return (
    <div
      className={cn('relative w-full bg-ink-50', className)}
      style={{ paddingBottom: `${ratio}%` }}
      role="img"
      aria-label={label}
    >
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-6">
        {/* Mock UI skeleton */}
        <div className="w-full max-w-lg space-y-3 opacity-40">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-brand-100 shrink-0" />
            <div className="flex-1 space-y-1.5">
              <div className="h-3 bg-ink-200 rounded-full w-40" />
              <div className="h-2 bg-ink-100 rounded-full w-24" />
            </div>
          </div>
          <div className="h-2 bg-brand-100 rounded-full w-full" />
          <div className="h-2 bg-ink-100 rounded-full w-5/6" />
          <div className="grid grid-cols-3 gap-2 pt-2">
            <div className="h-16 bg-ink-100 rounded-xl" />
            <div className="h-16 bg-brand-50 rounded-xl border border-brand-100" />
            <div className="h-16 bg-ink-100 rounded-xl" />
          </div>
        </div>
        <p className="text-xs text-ink-400 font-mono mt-2 text-center">
          {label}
        </p>
      </div>
    </div>
  )
}
