'use client'

import { StarRating } from '@/components/ui/star-rating'
import { getCollectionTexts, type CollectionLocale } from '@/lib/collection-translations'

interface StarInputProps {
  value: number
  onChange: (value: number) => void
  error?: string
  locale?: CollectionLocale
}

export function StarInput({ value, onChange, error, locale = 'es' }: StarInputProps) {
  const t = getCollectionTexts(locale)

  return (
    <div className="w-full">
      <label className="mb-1.5 block text-sm font-medium text-gray-700">
        {t.rating}
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
