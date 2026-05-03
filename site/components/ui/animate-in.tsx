'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { cn } from '@/lib/utils'

interface AnimateInProps {
  children: React.ReactNode
  className?: string
  delay?: number
  direction?: 'up' | 'left' | 'right' | 'none'
}

export function AnimateIn({
  children,
  className,
  delay = 0,
  direction = 'up',
}: AnimateInProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  const initial =
    direction === 'up'
      ? { opacity: 0, y: 28 }
      : direction === 'left'
      ? { opacity: 0, x: -28 }
      : direction === 'right'
      ? { opacity: 0, x: 28 }
      : { opacity: 0 }

  const animate = isInView
    ? { opacity: 1, y: 0, x: 0 }
    : initial

  return (
    <motion.div
      ref={ref}
      initial={initial}
      animate={animate}
      transition={{ duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98], delay }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  )
}
