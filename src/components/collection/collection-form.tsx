'use client'

import { useState } from 'react'
import { testimonialSchema } from '@/lib/validations'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { useToast } from '@/components/ui/toast'
import { StarInput } from './star-input'
import { PhotoUpload } from './photo-upload'
import { VideoUpload } from './video-upload'
import { AudioUpload } from './audio-upload'

interface CollectionFormProps {
  projectId: string
  brandColor: string
  onSuccess: (verificationPending: boolean) => void
  allowVideo?: boolean
}

interface FormData {
  author_name: string
  author_email: string
  author_company: string
  author_role: string
  rating: number
  content: string
}

interface FieldErrors {
  author_name?: string
  author_email?: string
  author_company?: string
  author_role?: string
  rating?: string
  content?: string
}

export function CollectionForm({
  projectId,
  brandColor,
  onSuccess,
  allowVideo = false,
}: CollectionFormProps) {
  const { toast } = useToast()
  const [loading, setLoading] = useState(false)
  const [photoUrl, setPhotoUrl] = useState<string | undefined>()
  const [testimonialPhotoUrl, setTestimonialPhotoUrl] = useState<string | undefined>()
  const [videoUrl, setVideoUrl] = useState<string | undefined>()
  const [audioUrl, setAudioUrl] = useState<string | undefined>()
  const [errors, setErrors] = useState<FieldErrors>({})
  const [formData, setFormData] = useState<FormData>({
    author_name: '',
    author_email: '',
    author_company: '',
    author_role: '',
    rating: 0,
    content: '',
  })

  const updateField = <K extends keyof FormData>(
    field: K,
    value: FormData[K]
  ) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    if (errors[field as keyof FieldErrors]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setErrors({})

    const payload = {
      project_id: projectId,
      author_name: formData.author_name.trim(),
      author_email: formData.author_email.trim() || '',
      author_company: formData.author_company.trim() || '',
      author_role: formData.author_role.trim() || '',
      rating: formData.rating,
      content: formData.content.trim(),
    }

    const result = testimonialSchema.safeParse(payload)

    if (!result.success) {
      const fieldErrors: FieldErrors = {}
      for (const issue of result.error.issues) {
        const field = issue.path[0] as keyof FieldErrors
        if (field && !fieldErrors[field]) {
          fieldErrors[field] = issue.message
        }
      }
      if (formData.rating === 0) {
        fieldErrors.rating = 'Selecciona una calificación'
      }
      setErrors(fieldErrors)
      return
    }

    setLoading(true)

    try {
      const res = await fetch('/api/testimonials', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...payload,
          author_avatar_url: photoUrl || null,
          video_url: videoUrl || audioUrl || null,
          photo_url: testimonialPhotoUrl || null,
        }),
      })

      const data = await res.json().catch(() => null)

      if (!res.ok) {
        throw new Error(data?.error || 'Error al enviar el testimonio')
      }

      toast('¡Testimonio enviado con éxito! Gracias.', 'success')
      onSuccess(!!data?.verification_pending)
    } catch (err) {
      toast(
        err instanceof Error ? err.message : 'Error al enviar el testimonio',
        'error'
      )
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      {/* Photo */}
      <div className="flex justify-center">
        <PhotoUpload
          value={photoUrl}
          onChange={setPhotoUrl}
          brandColor={brandColor}
        />
      </div>

      {/* Name */}
      <Input
        name="author_name"
        label="Tu nombre *"
        placeholder="Ej: María García"
        value={formData.author_name}
        onChange={(e) => updateField('author_name', e.target.value)}
        error={errors.author_name}
        disabled={loading}
      />

      {/* Email */}
      <Input
        name="author_email"
        label="Email"
        type="email"
        placeholder="tu@email.com"
        value={formData.author_email}
        onChange={(e) => updateField('author_email', e.target.value)}
        error={errors.author_email}
        helperText="No se mostrará públicamente"
        disabled={loading}
      />

      {/* Company & Role row */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <Input
          name="author_company"
          label="Empresa"
          placeholder="Ej: Acme S.L."
          value={formData.author_company}
          onChange={(e) => updateField('author_company', e.target.value)}
          error={errors.author_company}
          disabled={loading}
        />
        <Input
          name="author_role"
          label="Cargo"
          placeholder="Ej: CEO"
          value={formData.author_role}
          onChange={(e) => updateField('author_role', e.target.value)}
          error={errors.author_role}
          disabled={loading}
        />
      </div>

      {/* Star Rating */}
      <StarInput
        value={formData.rating}
        onChange={(val) => updateField('rating', val)}
        error={errors.rating}
      />

      {/* Testimonial Content */}
      <Textarea
        name="content"
        label="Tu testimonio *"
        placeholder="Cuéntanos sobre tu experiencia..."
        rows={4}
        value={formData.content}
        onChange={(e) => updateField('content', e.target.value)}
        error={errors.content}
        disabled={loading}
      />

      {/* Testimonial Photo Upload */}
      <div className="space-y-2">
        <div>
          <p className="text-sm font-medium text-gray-700">
            Quieres anadir una foto?
          </p>
          <p className="text-xs text-gray-500">
            Sube una foto del producto, experiencia o resultado (opcional)
          </p>
        </div>
        {testimonialPhotoUrl ? (
          <div className="relative inline-block">
            <img
              src={testimonialPhotoUrl}
              alt="Foto del testimonio"
              className="h-32 w-auto rounded-lg border border-gray-200 object-cover"
            />
            <button
              type="button"
              onClick={() => setTestimonialPhotoUrl(undefined)}
              className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-red-500 text-xs text-white hover:bg-red-600"
            >
              X
            </button>
          </div>
        ) : (
          <label
            className="flex cursor-pointer items-center gap-2 rounded-lg border border-dashed border-gray-300 px-4 py-3 text-sm text-gray-600 transition-colors hover:border-gray-400 hover:bg-gray-50"
          >
            <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0 0 22.5 18.75V5.25A2.25 2.25 0 0 0 20.25 3H3.75A2.25 2.25 0 0 0 1.5 5.25v13.5A2.25 2.25 0 0 0 3.75 21Z" />
            </svg>
            Seleccionar foto
            <input
              type="file"
              accept="image/*"
              className="hidden"
              disabled={loading}
              onChange={async (e) => {
                const file = e.target.files?.[0]
                if (!file) return
                const formData = new FormData()
                formData.append('file', file)
                formData.append('type', 'avatar')
                try {
                  const res = await fetch('/api/upload', { method: 'POST', body: formData })
                  const data = await res.json()
                  if (data.url) setTestimonialPhotoUrl(data.url)
                } catch {
                  toast('Error al subir la foto', 'error')
                }
              }}
            />
          </label>
        )}
      </div>

      {/* Audio Recorder - available for all plans */}
      {!videoUrl && (
        <div className="space-y-2">
          <div>
            <p className="text-sm font-medium text-gray-700">
              ¿Prefieres grabar un audio?
            </p>
            <p className="text-xs text-gray-500">
              Graba un audio de hasta 3 minutos compartiendo tu experiencia
            </p>
          </div>
          <AudioUpload
            value={audioUrl}
            onChange={setAudioUrl}
            brandColor={brandColor}
          />
        </div>
      )}

      {/* Video Recorder */}
      {allowVideo && !audioUrl && (
        <div className="space-y-2">
          <div>
            <p className="text-sm font-medium text-gray-700">
              ¿Quieres grabar un video testimonio?
            </p>
            <p className="text-xs text-gray-500">
              Graba un video de hasta 2 minutos compartiendo tu experiencia
            </p>
          </div>
          <VideoUpload
            value={videoUrl}
            onChange={setVideoUrl}
            brandColor={brandColor}
          />
        </div>
      )}

      {/* Submit */}
      <Button
        type="submit"
        size="lg"
        loading={loading}
        className="w-full"
        style={{ backgroundColor: brandColor }}
      >
        Enviar testimonio
      </Button>
    </form>
  )
}
