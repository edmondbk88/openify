'use client'

import { useState } from 'react'
import { cn } from '@/lib/utils'

const sizes = {
  sm: 'h-4 w-4',
  md: 'h-5 w-5',
  lg: 'h-7 w-7',
} as const

export interface StarRatingProps {
  value: number
  onChange?: (value: number) => void
  size?: keyof typeof sizes
  readonly?: boolean
  className?: string
  max?: number
}

function StarIcon({ filled, className }: { filled: boolean; className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={className}
      fill={filled ? 'currentColor' : 'none'}
      stroke="currentColor"
      strokeWidth={filled ? 0 : 1.5}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.562.562 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.562.562 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
      />
    </svg>
  )
}

export function StarRating({
  value,
  onChange,
  size = 'md',
  readonly = false,
  className,
  max = 5,
}: StarRatingProps) {
  const [hoverValue, setHoverValue] = useState(0)

  const displayValue = hoverValue || value

  return (
    <div
      className={cn('inline-flex items-center gap-0.5', className)}
      role={readonly ? 'img' : 'radiogroup'}
      aria-label={`${value} de ${max} estrellas`}
    >
      {Array.from({ length: max }, (_, i) => {
        const starValue = i + 1
        const filled = starValue <= displayValue

        if (readonly) {
          return (
            <StarIcon
              key={i}
              filled={filled}
              className={cn(sizes[size], filled ? 'text-yellow-400' : 'text-gray-300')}
            />
          )
        }

        return (
          <button
            key={i}
            type="button"
            onClick={() => onChange?.(starValue)}
            onMouseEnter={() => setHoverValue(starValue)}
            onMouseLeave={() => setHoverValue(0)}
            className={cn(
              'cursor-pointer transition-colors',
              sizes[size],
              filled ? 'text-yellow-400' : 'text-gray-300',
              'hover:text-yellow-400'
            )}
            aria-label={`${starValue} estrella${starValue > 1 ? 's' : ''}`}
          >
            <StarIcon filled={filled} className="h-full w-full" />
          </button>
        )
      })}
    </div>
  )
}
