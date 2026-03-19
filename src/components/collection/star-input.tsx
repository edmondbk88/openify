'use client'

import { StarRating } from '@/components/ui/star-rating'

interface StarInputProps {
  value: number
  onChange: (value: number) => void
  error?: string
}

export function StarInput({ value, onChange, error }: StarInputProps) {
  return (
    <div className="w-full">
      <label className="mb-1.5 block text-sm font-medium text-gray-700">
        ¿Cómo calificarías tu experiencia?
      </label>
      <div className="py-2">
        <StarRating
          value={value}
          onChange={onChange}
          size="lg"
          className="gap-2"
        />
      </div>
      {error && (
        <p className="mt-1 text-sm text-red-600">{error}</p>
      )}
    </div>
  )
}
