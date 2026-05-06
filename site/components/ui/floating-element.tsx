'use client'

import { ReactNode } from 'react'

interface FloatingElementProps {
  children: ReactNode
  delay?: number
  duration?: number
  className?: string
}

export function FloatingElement({
  children,
  delay = 0,
  duration = 3,
  className = '',
}: FloatingElementProps) {
  return (
    <div
      className={`animate-float ${className}`}
      style={{
        animationDelay: `${delay}s`,
        animationDuration: `${duration}s`,
      }}
    >
      {children}
    </div>
  )
}
