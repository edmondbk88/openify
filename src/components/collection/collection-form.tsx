'use client'

import { useState } from 'react'
import { testimonialSchema } from '@/lib/validations'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { useToast } from '@/components/ui/toast'
import { StarInput } from './star-input'
import { PhotoUpload } from './photo-upload'

interface CollectionFormProps {
  projectId: string
  brandColor: string
  onSuccess: () => void
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
}: CollectionFormProps) {
  const { toast } = useToast()
  const [loading, setLoading] = useState(false)
  const [photoUrl, setPhotoUrl] = useState<string | undefined>()
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
        }),
      })

      if (!res.ok) {
        const data = await res.json().catch(() => null)
        throw new Error(data?.error || 'Error al enviar el testimonio')
      }

      toast('¡Testimonio enviado con éxito! Gracias.', 'success')
      onSuccess()
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
