'use client'

import { ReactNode } from 'react'

interface AnimatedGradientBorderProps {
  children: ReactNode
  className?: string
  borderClassName?: string
}

export function AnimatedGradientBorder({
  children,
  className = '',
  borderClassName = '',
}: AnimatedGradientBorderProps) {
  return (
    <div className={`relative group ${className}`}>
      <div
        className={`absolute -inset-[1px] bg-gradient-to-r from-brand-400 via-intelligence-400 to-accent-400 rounded-2xl opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-500 ${borderClassName}`}
        style={{
          background: 'linear-gradient(90deg, var(--color-brand-400), var(--color-intelligence-400), var(--color-accent-400))',
          backgroundSize: '200% 100%',
          animation: 'gradientShift 3s ease infinite',
        }}
      />
      {children}
    </div>
  )
}
