'use client'

import Image from 'next/image'
import { cn, formatDate, truncate, getInitials } from '@/lib/utils'
import { PLATFORMS } from '@/lib/platform-logos'
import type { Testimonial, TestimonialStatus } from '@/types'

interface TestimonialCardProps {
  testimonial: Testimonial
  onApprove?: (id: string) => void
  onReject?: (id: string) => void
  onDelete?: (id: string) => void
}

const statusConfig: Record<TestimonialStatus, { label: string; className: string }> = {
  pending_verification: { label: 'Esperando verificación', className: 'bg-purple-50 text-purple-700' },
  pending: { label: 'Pendiente', className: 'bg-yellow-50 text-yellow-700' },
  approved: { label: 'Aprobado', className: 'bg-green-50 text-green-700' },
  rejected: { label: 'Rechazado', className: 'bg-red-50 text-red-700' },
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }, (_, i) => (
        <svg
          key={i}
          className={cn('h-4 w-4', i < rating ? 'text-yellow-400' : 'text-gray-200')}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

export default function TestimonialCard({
  testimonial,
  onApprove,
  onReject,
  onDelete,
}: TestimonialCardProps) {
  const status = statusConfig[testimonial.status]

  return (
    <div className={cn(
      'rounded-xl border border-gray-200 bg-white shadow-sm',
      testimonial.video_url ? 'overflow-hidden' : 'p-5'
    )}>
      {/* Video */}
      {testimonial.video_url && (
        <div className="aspect-video w-full bg-black">
          <video
            src={testimonial.video_url}
            controls
            preload="metadata"
            playsInline
            className="h-full w-full object-cover"
          />
        </div>
      )}

      <div className={testimonial.video_url ? 'p-5' : ''}>
      {/* Header */}
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-3">
          {testimonial.author_avatar_url ? (
            <Image
              src={testimonial.author_avatar_url}
              alt={testimonial.author_name}
              width={40}
              height={40}
              className="h-10 w-10 rounded-full object-cover"
            />
          ) : (
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-100 text-sm font-medium text-indigo-600">
              {getInitials(testimonial.author_name)}
            </div>
          )}
          <div>
            <p className="font-medium text-gray-900">{testimonial.author_name}</p>
            {(testimonial.author_role || testimonial.author_company) && (
              <p className="text-sm text-gray-500">
                {testimonial.author_role}
                {testimonial.author_role && testimonial.author_company && ' en '}
                {testimonial.author_company}
                {testimonial.is_company_verified && (
                  <span
                    className="ml-1 inline-flex items-center gap-0.5 rounded-full bg-green-50 px-1.5 py-0.5 text-xs font-medium text-green-700"
                    title="Empresa verificada"
                  >
                    <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    </svg>
                    Verificada
                  </span>
                )}
              </p>
            )}
          </div>
        </div>
        <span
          className={cn(
            'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium',
            status.className
          )}
        >
          {status.label}
        </span>
      </div>

      {/* Rating */}
      <div className="mt-3">
        <StarRating rating={testimonial.rating} />
      </div>

      {/* Content */}
      <p className="mt-3 text-sm leading-relaxed text-gray-700">
        {truncate(testimonial.content, 200)}
      </p>

      {/* Date & Source */}
      <div className="mt-3 flex items-center gap-2">
        <p className="text-xs text-gray-400">{formatDate(testimonial.created_at)}</p>
        {testimonial.source && testimonial.source !== 'form' && (
          <span
            className="inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-xs font-medium"
            style={{
              backgroundColor: (PLATFORMS[testimonial.source]?.color || '#6366f1') + '18',
              color: PLATFORMS[testimonial.source]?.color || '#6366f1',
            }}
          >
            <span
              className="inline-block h-3 w-3"
              dangerouslySetInnerHTML={{ __html: PLATFORMS[testimonial.source]?.icon || '' }}
            />
            {PLATFORMS[testimonial.source]?.name || testimonial.source}
          </span>
        )}
      </div>

      {/* Actions */}
      <div className="mt-4 flex items-center gap-2 border-t border-gray-100 pt-4">
        {onApprove && testimonial.status !== 'approved' && (
          <button
            onClick={() => onApprove(testimonial.id)}
            className="inline-flex items-center gap-1.5 rounded-lg bg-green-600 px-3 py-1.5 text-sm font-medium text-white transition-colors hover:bg-green-700"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
            </svg>
            Aprobar
          </button>
        )}
        {onReject && testimonial.status !== 'rejected' && (
          <button
            onClick={() => onReject(testimonial.id)}
            className="inline-flex items-center gap-1.5 rounded-lg bg-red-600 px-3 py-1.5 text-sm font-medium text-white transition-colors hover:bg-red-700"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
            Rechazar
          </button>
        )}
        {onDelete && (
          <button
            onClick={() => onDelete(testimonial.id)}
            className="ml-auto inline-flex items-center gap-1.5 rounded-lg border border-gray-300 px-3 py-1.5 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-50 hover:text-red-600"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
            </svg>
            Eliminar
          </button>
        )}
      </div>
      </div>
    </div>
  )
}
