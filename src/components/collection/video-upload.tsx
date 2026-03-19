'use client'

import { useCallback, useRef, useState } from 'react'
import { cn } from '@/lib/utils'
import { Spinner } from '@/components/ui/spinner'

const ACCEPTED_TYPES = ['video/mp4', 'video/webm']
const MAX_SIZE_BYTES = 50 * 1024 * 1024 // 50MB

interface VideoUploadProps {
  value?: string
  onChange: (url: string | undefined) => void
  brandColor?: string
}

export function VideoUpload({ value, onChange, brandColor }: VideoUploadProps) {
  const inputRef = useRef<HTMLInputElement>(null)
  const [uploading, setUploading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [dragOver, setDragOver] = useState(false)
  const [fileName, setFileName] = useState<string | null>(null)

  const handleFile = useCallback(
    async (file: File) => {
      setError(null)

      if (!ACCEPTED_TYPES.includes(file.type)) {
        setError('Formato no soportado. Usa MP4 o WebM.')
        return
      }

      if (file.size > MAX_SIZE_BYTES) {
        setError('El vídeo no puede superar los 50MB.')
        return
      }

      setUploading(true)
      setFileName(file.name)

      try {
        const formData = new FormData()
        formData.append('file', file)
        formData.append('type', 'video')

        const res = await fetch('/api/upload', {
          method: 'POST',
          body: formData,
        })

        if (!res.ok) {
          const data = await res.json().catch(() => null)
          throw new Error(data?.error || 'Error al subir el vídeo')
        }

        const data = await res.json()
        onChange(data.url)
      } catch (err) {
        setError(
          err instanceof Error ? err.message : 'Error al subir el vídeo'
        )
        setFileName(null)
      } finally {
        setUploading(false)
      }
    },
    [onChange]
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
    setFileName(null)
    if (inputRef.current) inputRef.current.value = ''
  }

  return (
    <div className="w-full">
      <label className="mb-1.5 block text-sm font-medium text-gray-700">
        Vídeo testimonio (opcional)
      </label>

      {value ? (
        <div className="space-y-2">
          <video
            src={value}
            controls
            className="w-full max-h-48 rounded-lg border border-gray-200"
          />
          <div className="flex items-center justify-between">
            {fileName && (
              <span className="text-xs text-gray-500 truncate max-w-[200px]">
                {fileName}
              </span>
            )}
            <button
              type="button"
              onClick={handleRemove}
              className="text-sm text-red-600 hover:text-red-700 underline"
            >
              Eliminar vídeo
            </button>
          </div>
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
            'flex cursor-pointer flex-col items-center justify-center gap-2 rounded-lg border-2 border-dashed p-6 transition-colors',
            dragOver
              ? 'border-current bg-gray-50'
              : 'border-gray-300 hover:border-gray-400',
            uploading && 'pointer-events-none opacity-60'
          )}
          style={dragOver && brandColor ? { borderColor: brandColor } : undefined}
          aria-label="Subir vídeo"
        >
          {uploading ? (
            <div className="flex flex-col items-center gap-2">
              <Spinner className="h-6 w-6 text-gray-400" />
              <span className="text-xs text-gray-500">
                Subiendo {fileName}...
              </span>
            </div>
          ) : (
            <>
              <svg
                className="h-8 w-8 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z"
                />
              </svg>
              <span className="text-sm text-gray-500">
                Arrastra o haz clic para subir un vídeo
              </span>
              <span className="text-xs text-gray-400">
                MP4 o WebM, máximo 50MB
              </span>
            </>
          )}
        </div>
      )}

      <input
        ref={inputRef}
        type="file"
        accept="video/mp4,video/webm"
        onChange={handleInputChange}
        className="hidden"
        aria-hidden="true"
      />

      {error && (
        <p className="mt-2 text-sm text-red-600">{error}</p>
      )}
    </div>
  )
}
