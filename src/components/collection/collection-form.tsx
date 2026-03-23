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
import { getCollectionTexts, type CollectionLocale } from '@/lib/collection-translations'

interface CollectionFormProps {
  projectId: string
  brandColor: string
  onSuccess: (verificationPending: boolean) => void
  allowVideo?: boolean
  locale?: CollectionLocale
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
  locale = 'es',
}: CollectionFormProps) {
  const t = getCollectionTexts(locale)
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
        fieldErrors.rating = t.ratingError
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
        throw new Error(data?.error || t.submitError)
      }

      toast(t.submitSuccess, 'success')
      onSuccess(!!data?.verification_pending)
    } catch (err) {
      toast(
        err instanceof Error ? err.message : t.submitError,
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
          locale={locale}
        />
      </div>

      {/* Name */}
      <Input
        name="author_name"
        label={t.name}
        placeholder={t.namePlaceholder}
        value={formData.author_name}
        onChange={(e) => updateField('author_name', e.target.value)}
        error={errors.author_name}
        disabled={loading}
      />

      {/* Email */}
      <Input
        name="author_email"
        label={t.email}
        type="email"
        placeholder={t.emailPlaceholder}
        value={formData.author_email}
        onChange={(e) => updateField('author_email', e.target.value)}
        error={errors.author_email}
        helperText={t.emailHelper}
        disabled={loading}
      />

      {/* Company & Role row */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <Input
          name="author_company"
          label={t.company}
          placeholder={t.companyPlaceholder}
          value={formData.author_company}
          onChange={(e) => updateField('author_company', e.target.value)}
          error={errors.author_company}
          disabled={loading}
        />
        <Input
          name="author_role"
          label={t.role}
          placeholder={t.rolePlaceholder}
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
        locale={locale}
      />

      {/* Testimonial Content */}
      <Textarea
        name="content"
        label={t.content}
        placeholder={t.contentPlaceholder}
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
            {t.testimonialPhotoLabel}
          </p>
          <p className="text-xs text-gray-500">
            {t.testimonialPhotoSubtitle}
          </p>
        </div>
        {testimonialPhotoUrl ? (
          <div className="relative inline-block">
            <img
              src={testimonialPhotoUrl}
              alt={t.testimonialPhotoAlt}
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
            {t.testimonialPhotoSelect}
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
                  toast(t.testimonialPhotoUploadError, 'error')
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
              {t.audioLabel}
            </p>
            <p className="text-xs text-gray-500">
              {t.audioSubtitle}
            </p>
          </div>
          <AudioUpload
            value={audioUrl}
            onChange={setAudioUrl}
            brandColor={brandColor}
            locale={locale}
          />
        </div>
      )}

      {/* Video Recorder */}
      {allowVideo && !audioUrl && (
        <div className="space-y-2">
          <div>
            <p className="text-sm font-medium text-gray-700">
              {t.videoLabel}
            </p>
            <p className="text-xs text-gray-500">
              {t.videoSubtitle}
            </p>
          </div>
          <VideoUpload
            value={videoUrl}
            onChange={setVideoUrl}
            brandColor={brandColor}
            locale={locale}
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
        {loading ? t.submitting : t.submit}
      </Button>
    </form>
  )
}
