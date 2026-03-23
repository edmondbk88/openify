'use client'

import { useCallback, useRef, useState } from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils'
import { Spinner } from '@/components/ui/spinner'
import { getCollectionTexts, type CollectionLocale } from '@/lib/collection-translations'

const ACCEPTED_TYPES = ['image/jpeg', 'image/png', 'image/webp']
const MAX_SIZE_BYTES = 5 * 1024 * 1024 // 5MB

interface PhotoUploadProps {
  value?: string
  onChange: (url: string | undefined) => void
  brandColor?: string
  locale?: CollectionLocale
}

export function PhotoUpload({ value, onChange, brandColor, locale = 'es' }: PhotoUploadProps) {
  const t = getCollectionTexts(locale)
  const inputRef = useRef<HTMLInputElement>(null)
  const [uploading, setUploading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [dragOver, setDragOver] = useState(false)

  const handleFile = useCallback(
    async (file: File) => {
      setError(null)

      if (!ACCEPTED_TYPES.includes(file.type)) {
        setError(t.photoFormatError)
        return
      }

      if (file.size > MAX_SIZE_BYTES) {
        setError(t.photoSizeError)
        return
      }

      setUploading(true)

      try {
        const formData = new FormData()
        formData.append('file', file)

        const res = await fetch('/api/upload', {
          method: 'POST',
          body: formData,
        })

        if (!res.ok) {
          const data = await res.json().catch(() => null)
          throw new Error(data?.error || t.photoUploadError)
        }

        const data = await res.json()
        onChange(data.url)
      } catch (err) {
        setError(
          err instanceof Error ? err.message : t.photoUploadError
        )
      } finally {
        setUploading(false)
      }
    },
    [onChange, t]
  )

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) handleFile(file)
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    setDragOver(false)
    const file = e.dataTransfer.files?.[0]
    if (file) handleFile(file)
  }

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
    setDragOver(true)
  }

  const handleDragLeave = () => {
    setDragOver(false)
  }

  const handleRemove = () => {
    onChange(undefined)
    if (inputRef.current) inputRef.current.value = ''
  }

  return (
    <div className="w-full">
      <label className="mb-1.5 block text-sm font-medium text-gray-700">
        {t.photoLabel}
      </label>

      {value ? (
        <div className="flex items-center gap-4">
          <div className="relative h-20 w-20 overflow-hidden rounded-full border-2 border-gray-200">
            <Image
              src={value}
              alt={t.photoAlt}
              width={80}
              height={80}
              className="h-full w-full object-cover"
            />
          </div>
          <button
            type="button"
            onClick={handleRemove}
            className="text-sm text-red-600 hover:text-red-700 underline"
          >
            {t.photoRemove}
          </button>
        </div>
      ) : (
        <div
          role="button"
          tabIndex={0}
          onClick={() => inputRef.current?.click()}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault()
              inputRef.current?.click()
            }
          }}
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          className={cn(
            'mx-auto flex h-24 w-24 cursor-pointer flex-col items-center justify-center',
            'rounded-full border-2 border-dashed transition-colors',
            dragOver
              ? 'border-current bg-gray-50'
              : 'border-gray-300 hover:border-gray-400',
            uploading && 'pointer-events-none opacity-60'
          )}
          style={dragOver && brandColor ? { borderColor: brandColor } : undefined}
          aria-label={t.photoAriaLabel}
        >
          {uploading ? (
            <Spinner className="h-6 w-6 text-gray-400" />
          ) : (
            <>
              <svg
                className="h-6 w-6 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0z"
                />
              </svg>
              <span className="mt-1 text-xs text-gray-500">{t.photoUpload}</span>
            </>
          )}
        </div>
      )}

      <input
        ref={inputRef}
        type="file"
        accept="image/jpeg,image/png,image/webp"
        onChange={handleInputChange}
        className="hidden"
        aria-hidden="true"
      />

      {error && (
        <p className="mt-2 text-center text-sm text-red-600">{error}</p>
      )}
    </div>
  )
}
