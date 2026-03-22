'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useToast } from '@/components/ui/toast'
import TestimonialCard from '@/components/dashboard/testimonial-card'
import type { Testimonial, TestimonialStatus } from '@/types'

interface TestimonialListClientProps {
  initialTestimonials: Testimonial[]
}

const filterTabs: { label: string; value: TestimonialStatus | 'all' }[] = [
  { label: 'Todos', value: 'all' },
  { label: 'Verificación', value: 'pending_verification' },
  { label: 'Pendientes', value: 'pending' },
  { label: 'Aprobados', value: 'approved' },
  { label: 'Rechazados', value: 'rejected' },
]

export default function TestimonialListClient({
  initialTestimonials,
}: TestimonialListClientProps) {
  const router = useRouter()
  const { toast } = useToast()
  const [testimonials, setTestimonials] =
    useState<Testimonial[]>(initialTestimonials)
  const [activeFilter, setActiveFilter] = useState<
    TestimonialStatus | 'all'
  >('all')
  const [loadingId, setLoadingId] = useState<string | null>(null)

  const filtered =
    activeFilter === 'all'
      ? testimonials
      : testimonials.filter((t) => t.status === activeFilter)

  async function handleApprove(id: string) {
    setLoadingId(id)
    try {
      const res = await fetch(`/api/testimonials/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: 'approved' }),
      })
      if (!res.ok) throw new Error('Error al aprobar el testimonio')
      setTestimonials((prev) =>
        prev.map((t) => (t.id === id ? { ...t, status: 'approved' } : t))
      )
      toast('Testimonio aprobado', 'success')
      router.refresh()
    } catch (err: unknown) {
      toast(err instanceof Error ? err.message : 'Error inesperado', 'error')
    } finally {
      setLoadingId(null)
    }
  }

  async function handleReject(id: string) {
    setLoadingId(id)
    try {
      const res = await fetch(`/api/testimonials/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: 'rejected' }),
      })
      if (!res.ok) throw new Error('Error al rechazar el testimonio')
      setTestimonials((prev) =>
        prev.map((t) => (t.id === id ? { ...t, status: 'rejected' } : t))
      )
      toast('Testimonio rechazado', 'success')
      router.refresh()
    } catch (err: unknown) {
      toast(err instanceof Error ? err.message : 'Error inesperado', 'error')
    } finally {
      setLoadingId(null)
    }
  }

  async function handleToggleFeatured(id: string, isFeatured: boolean) {
    setLoadingId(id)
    try {
      const res = await fetch(`/api/testimonials/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ is_featured: isFeatured }),
      })
      if (!res.ok) throw new Error('Error al actualizar testimonio')
      setTestimonials((prev) =>
        prev.map((t) => (t.id === id ? { ...t, is_featured: isFeatured } : t))
      )
      toast(isFeatured ? 'Testimonio destacado' : 'Testimonio sin destacar', 'success')
      router.refresh()
    } catch (err: unknown) {
      toast(err instanceof Error ? err.message : 'Error inesperado', 'error')
    } finally {
      setLoadingId(null)
    }
  }

  async function handleDelete(id: string) {
    if (!confirm('¿Estás seguro de que quieres eliminar este testimonio? Esta acción no se puede deshacer.')) {
      return
    }
    setLoadingId(id)
    try {
      const res = await fetch(`/api/testimonials/${id}`, {
        method: 'DELETE',
      })
      if (!res.ok) throw new Error('Error al eliminar el testimonio')
      setTestimonials((prev) => prev.filter((t) => t.id !== id))
      toast('Testimonio eliminado', 'success')
      router.refresh()
    } catch (err: unknown) {
      toast(err instanceof Error ? err.message : 'Error inesperado', 'error')
    } finally {
      setLoadingId(null)
    }
  }

  return (
    <div>
      {/* Filter Tabs */}
      <div className="flex gap-1 rounded-lg bg-gray-100 p-1">
        {filterTabs.map((tab) => (
          <button
            key={tab.value}
            onClick={() => setActiveFilter(tab.value)}
            className={`flex-1 rounded-md px-3 py-2 text-sm font-medium transition-colors ${
              activeFilter === tab.value
                ? 'bg-white text-gray-900 shadow-sm'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            {tab.label}
            <span className="ml-1.5 text-xs text-gray-400">
              (
              {tab.value === 'all'
                ? testimonials.length
                : testimonials.filter((t) => t.status === tab.value).length}
              )
            </span>
          </button>
        ))}
      </div>

      {/* Testimonials */}
      {filtered.length === 0 ? (
        <div className="mt-8 rounded-xl border border-dashed border-gray-300 bg-white p-12 text-center">
          <svg
            className="mx-auto h-12 w-12 text-gray-300"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1}
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 0 1 1.037-.443 48.282 48.282 0 0 0 5.399-.498c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"
            />
          </svg>
          <h3 className="mt-3 text-sm font-semibold text-gray-900">
            No hay testimonios
          </h3>
          <p className="mt-1 text-sm text-gray-500">
            {activeFilter === 'all'
              ? 'Aún no se han recibido testimonios para este proyecto.'
              : `No hay testimonios con estado "${filterTabs.find((t) => t.value === activeFilter)?.label}".`}
          </p>
        </div>
      ) : (
        <div className="mt-4 grid grid-cols-1 gap-4 lg:grid-cols-2">
          {filtered.map((testimonial) => (
            <div
              key={testimonial.id}
              className={loadingId === testimonial.id ? 'opacity-50 pointer-events-none' : ''}
            >
              <TestimonialCard
                testimonial={testimonial}
                onApprove={handleApprove}
                onReject={handleReject}
                onDelete={handleDelete}
                onToggleFeatured={handleToggleFeatured}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
