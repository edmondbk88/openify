'use client'

import Image from 'next/image'
import { cn } from '@/lib/utils'
import { getInitials } from '@/lib/utils'

const sizes = {
  sm: 'h-8 w-8 text-xs',
  md: 'h-10 w-10 text-sm',
  lg: 'h-14 w-14 text-lg',
} as const

export interface AvatarProps {
  src?: string | null
  alt?: string
  name?: string
  size?: keyof typeof sizes
  className?: string
}

export function Avatar({
  src,
  alt = '',
  name = '',
  size = 'md',
  className,
}: AvatarProps) {
  const initials = name ? getInitials(name) : '?'

  if (src) {
    return (
      <div
        className={cn(
          'relative shrink-0 overflow-hidden rounded-full',
          sizes[size],
          className
        )}
      >
        <Image
          src={src}
          alt={alt || name}
          fill
          className="object-cover"
        />
      </div>
    )
  }

  return (
    <div
      className={cn(
        'inline-flex shrink-0 items-center justify-center rounded-full bg-indigo-100 font-medium text-indigo-700',
        sizes[size],
        className
      )}
      aria-label={alt || name}
    >
      {initials}
    </div>
  )
}
