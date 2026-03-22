'use client'

import { useEffect } from 'react'
import { formatDate } from '@/lib/utils'
import type { Project, Testimonial } from '@/types'

interface ExportClientProps {
  project: Project
  testimonials: Testimonial[]
}

function StarRating({ rating }: { rating: number }) {
  return (
    <span className="inline-flex gap-0.5">
      {Array.from({ length: 5 }, (_, i) => (
        <span key={i} style={{ color: i < rating ? '#f59e0b' : '#d1d5db', fontSize: '14px' }}>
          ★
        </span>
      ))}
    </span>
  )
}

export default function ExportClient({ project, testimonials }: ExportClientProps) {
  useEffect(() => {
    // Small delay to let styles render
    const timer = setTimeout(() => {
      window.print()
    }, 500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <style jsx global>{`
        @media print {
          body { margin: 0; padding: 0; }
          .no-print { display: none !important; }
          .print-page { padding: 20px; }
          .testimonial-card { break-inside: avoid; page-break-inside: avoid; }
        }
        @page {
          margin: 1.5cm;
        }
      `}</style>

      {/* Print button - hidden when printing */}
      <div className="no-print mb-6 flex items-center justify-between">
        <button
          onClick={() => window.history.back()}
          className="inline-flex items-center gap-1.5 rounded-lg border border-gray-300 bg-white px-3.5 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50"
        >
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
          </svg>
          Volver
        </button>
        <button
          onClick={() => window.print()}
          className="inline-flex items-center gap-1.5 rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-indigo-700"
        >
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
          </svg>
          Descargar PDF
        </button>
      </div>

      <div className="print-page">
        {/* Header */}
        <div className="mb-8 border-b border-gray-200 pb-6">
          <div className="flex items-center gap-3">
            <img
              src="/logo-opinafy.png?v=2"
              alt="Opinafy"
              className="h-8"
            />
          </div>
          <h1 className="mt-4 text-2xl font-bold text-gray-900">{project.name}</h1>
          <p className="mt-1 text-sm text-gray-500">
            {testimonials.length} testimonio{testimonials.length !== 1 ? 's' : ''} aprobado{testimonials.length !== 1 ? 's' : ''}
          </p>
        </div>

        {/* Testimonials */}
        {testimonials.length === 0 ? (
          <p className="text-center text-gray-500">No hay testimonios aprobados para exportar.</p>
        ) : (
          <div className="space-y-5">
            {testimonials.map((t) => (
              <div
                key={t.id}
                className={`testimonial-card rounded-lg border p-5 ${
                  t.is_featured ? 'border-amber-300 bg-amber-50/50' : 'border-gray-200 bg-white'
                }`}
              >
                <div className="flex items-start justify-between">
                  <div>
                    <p className="font-semibold text-gray-900">
                      {t.author_name}
                      {t.is_featured && (
                        <span className="ml-2 text-amber-500" title="Destacado">★</span>
                      )}
                    </p>
                    {(t.author_role || t.author_company) && (
                      <p className="text-sm text-gray-500">
                        {t.author_role}
                        {t.author_role && t.author_company && ' en '}
                        {t.author_company}
                        {t.is_company_verified && (
                          <span className="ml-1 text-green-600 text-xs">✓ Verificada</span>
                        )}
                      </p>
                    )}
                  </div>
                  <StarRating rating={t.rating} />
                </div>
                <p className="mt-3 text-sm leading-relaxed text-gray-700">{t.content}</p>
                <p className="mt-3 text-xs text-gray-400">{formatDate(t.created_at)}</p>
              </div>
            ))}
          </div>
        )}

        {/* Footer */}
        <div className="mt-8 border-t border-gray-200 pt-4 text-center text-xs text-gray-400">
          Generado con Opinafy &bull; opinafy.com
        </div>
      </div>
    </>
  )
}
