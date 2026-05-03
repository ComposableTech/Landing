import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const badgeVariants = cva(
  'inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold tracking-wide transition-colors',
  {
    variants: {
      variant: {
        brand: 'bg-brand-50 text-brand-700 border border-brand-200',
        mint: 'bg-mint-400/10 text-mint-600 border border-mint-400/30',
        neutral: 'bg-ink-100 text-ink-700 border border-ink-200',
        outline: 'border border-ink-300 text-ink-600 bg-transparent',
        dot: 'bg-brand-50 text-brand-700 border border-brand-200',
      },
    },
    defaultVariants: { variant: 'brand' },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {
  dot?: boolean
}

function Badge({ className, variant, dot, children, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props}>
      {dot && (
        <span className="w-1.5 h-1.5 rounded-full bg-brand-400 animate-pulse" />
      )}
      {children}
    </div>
  )
}

export { Badge, badgeVariants }
