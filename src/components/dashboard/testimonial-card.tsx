'use client'

import { useState } from 'react'
import Image from 'next/image'
import { cn, formatDate, truncate, getInitials } from '@/lib/utils'
import { PLATFORMS } from '@/lib/platform-logos'
import { useLocale } from '@/components/dashboard/locale-context'
import { t } from '@/lib/i18n'
import type { Testimonial, TestimonialStatus } from '@/types'

interface TestimonialCardProps {
  testimonial: Testimonial
  onApprove?: (id: string) => void
  onReject?: (id: string) => void
  onDelete?: (id: string) => void
  onToggleFeatured?: (id: string, isFeatured: boolean) => void
  onReply?: (id: string, reply: string | null) => void
}

const statusClassNames: Record<TestimonialStatus, string> = {
  pending_verification: 'bg-purple-50 text-purple-700',
  pending: 'bg-yellow-50 text-yellow-700',
  approved: 'bg-green-50 text-green-700',
  rejected: 'bg-red-50 text-red-700',
}

const statusKeys: Record<TestimonialStatus, string> = {
  pending_verification: 'testimonials.pendingVerificationStatus',
  pending: 'testimonials.pending',
  approved: 'testimonials.approved',
  rejected: 'testimonials.rejected',
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
  onToggleFeatured,
  onReply,
}: TestimonialCardProps) {
  const locale = useLocale()
  const statusClassName = statusClassNames[testimonial.status]
  const statusLabel = t(statusKeys[testimonial.status], locale)
  const [showReplyForm, setShowReplyForm] = useState(false)
  const [replyText, setReplyText] = useState(testimonial.owner_reply || '')
  const [isSaving, setIsSaving] = useState(false)

  return (
    <div className={cn(
      'rounded-xl border bg-white shadow-sm',
      testimonial.is_featured ? 'border-amber-300 ring-1 ring-amber-200' : 'border-gray-200',
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
                {testimonial.author_role && testimonial.author_company && t('testimonials.atCompany', locale)}
                {testimonial.author_company}
                {testimonial.is_company_verified && (
                  <span
                    className="ml-1 inline-flex items-center gap-0.5 rounded-full bg-green-50 px-1.5 py-0.5 text-xs font-medium text-green-700"
                    title={t('testimonials.verifiedCompany', locale)}
                  >
                    <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    </svg>
                    {t('testimonials.verified', locale)}
                  </span>
                )}
              </p>
            )}
          </div>
        </div>
        <div className="flex items-center gap-1.5">
          {onToggleFeatured && (
            <button
              onClick={() => onToggleFeatured(testimonial.id, !testimonial.is_featured)}
              className={cn(
                'rounded-lg p-1 transition-colors',
                testimonial.is_featured
                  ? 'text-amber-500 hover:text-amber-600'
                  : 'text-gray-300 hover:text-amber-400'
              )}
              title={testimonial.is_featured ? t('testimonials.unfeatureTestimonial', locale) : t('testimonials.featureTestimonial', locale)}
            >
              <svg className="h-5 w-5" fill={testimonial.is_featured ? 'currentColor' : 'none'} viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
              </svg>
            </button>
          )}
          <span
            className={cn(
              'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium',
              statusClassName
            )}
          >
            {statusLabel}
          </span>
        </div>
      </div>

      {/* Rating */}
      <div className="mt-3">
        <StarRating rating={testimonial.rating} />
      </div>

      {/* Content */}
      <p className="mt-3 text-sm leading-relaxed text-gray-700">
        {truncate(testimonial.content, 200)}
      </p>

      {/* Sentiment Indicator */}
      {testimonial.sentiment_score != null && (
        <div className="mt-3 flex items-center gap-2">
          <span
            className="inline-flex items-center gap-1 text-sm"
            title={testimonial.ai_summary || ''}
          >
            {testimonial.sentiment_score > 0.3 ? (
              <svg className="h-4 w-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.536-4.464a.75.75 0 10-1.072-1.072A3.5 3.5 0 0110 13.5a3.5 3.5 0 01-2.464-1.036.75.75 0 00-1.072 1.072A5 5 0 0010 15a5 5 0 003.536-1.464zM9 8.5a1 1 0 11-2 0 1 1 0 012 0zm4 0a1 1 0 11-2 0 1 1 0 012 0z" clipRule="evenodd" />
              </svg>
            ) : testimonial.sentiment_score < -0.3 ? (
              <svg className="h-4 w-4 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm-3.536-3.536a.75.75 0 001.072 1.072A3.5 3.5 0 0110 14.5a3.5 3.5 0 012.464 1.036.75.75 0 101.072-1.072A5 5 0 0010 13a5 5 0 00-3.536 1.464zM9 8.5a1 1 0 11-2 0 1 1 0 012 0zm4 0a1 1 0 11-2 0 1 1 0 012 0z" clipRule="evenodd" />
              </svg>
            ) : (
              <svg className="h-4 w-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9.5a1 1 0 112 0 1 1 0 01-2 0zm5-1a1 1 0 100 2 1 1 0 000-2zm-5.5 5a.75.75 0 000 1.5h7a.75.75 0 000-1.5h-7z" clipRule="evenodd" />
              </svg>
            )}
            <span className="text-xs text-gray-500">
              {testimonial.sentiment_label === 'muy_positivo' ? t('testimonials.sentimentVeryPositive', locale) :
               testimonial.sentiment_label === 'positivo' ? t('testimonials.sentimentPositive', locale) :
               testimonial.sentiment_label === 'neutral' ? t('testimonials.sentimentNeutral', locale) :
               testimonial.sentiment_label === 'negativo' ? t('testimonials.sentimentNegative', locale) :
               testimonial.sentiment_label === 'muy_negativo' ? t('testimonials.sentimentVeryNegative', locale) : ''}
            </span>
            <span className="ml-1 rounded-full bg-amber-100 px-1.5 py-0.5 text-[9px] font-bold uppercase text-amber-700">Beta</span>
          </span>
          {testimonial.ai_summary && (
            <p className="text-xs text-gray-400 italic">{testimonial.ai_summary}</p>
          )}
        </div>
      )}

      {/* Owner Reply */}
      {testimonial.owner_reply && !showReplyForm && (
        <div className="mt-3 ml-4 rounded-lg border border-indigo-100 bg-indigo-50/50 p-3">
          <p className="mb-1 text-xs font-semibold text-indigo-700">{t('testimonials.ownerReply', locale)}</p>
          <p className="text-sm text-gray-700">{testimonial.owner_reply}</p>
          {testimonial.owner_reply_at && (
            <p className="mt-1 text-xs text-gray-400">{formatDate(testimonial.owner_reply_at)}</p>
          )}
        </div>
      )}

      {/* Reply Form */}
      {showReplyForm && (
        <div className="mt-3 ml-4 rounded-lg border border-gray-200 bg-gray-50 p-3">
          <textarea
            value={replyText}
            onChange={(e) => setReplyText(e.target.value)}
            placeholder={t('testimonials.replyPlaceholder', locale)}
            rows={3}
            className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-700 placeholder-gray-400 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
          />
          <div className="mt-2 flex items-center gap-2">
            <button
              onClick={async () => {
                if (!replyText.trim()) return
                setIsSaving(true)
                try {
                  const res = await fetch(`/api/testimonials/${testimonial.id}`, {
                    method: 'PATCH',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ owner_reply: replyText.trim() }),
                  })
                  if (res.ok) {
                    onReply?.(testimonial.id, replyText.trim())
                    setShowReplyForm(false)
                  }
                } finally {
                  setIsSaving(false)
                }
              }}
              disabled={isSaving || !replyText.trim()}
              className="inline-flex items-center gap-1.5 rounded-lg bg-indigo-600 px-3 py-1.5 text-sm font-medium text-white transition-colors hover:bg-indigo-700 disabled:opacity-50"
            >
              {isSaving ? t('testimonials.savingReply', locale) : t('testimonials.saveReply', locale)}
            </button>
            {testimonial.owner_reply && (
              <button
                onClick={async () => {
                  setIsSaving(true)
                  try {
                    const res = await fetch(`/api/testimonials/${testimonial.id}`, {
                      method: 'PATCH',
                      headers: { 'Content-Type': 'application/json' },
                      body: JSON.stringify({ owner_reply: null }),
                    })
                    if (res.ok) {
                      onReply?.(testimonial.id, null)
                      setReplyText('')
                      setShowReplyForm(false)
                    }
                  } finally {
                    setIsSaving(false)
                  }
                }}
                disabled={isSaving}
                className="inline-flex items-center gap-1.5 rounded-lg border border-red-300 px-3 py-1.5 text-sm font-medium text-red-600 transition-colors hover:bg-red-50 disabled:opacity-50"
              >
                {t('testimonials.deleteReply', locale)}
              </button>
            )}
            <button
              onClick={() => {
                setShowReplyForm(false)
                setReplyText(testimonial.owner_reply || '')
              }}
              className="inline-flex items-center gap-1.5 rounded-lg border border-gray-300 px-3 py-1.5 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-50"
            >
              {t('testimonials.cancel', locale)}
            </button>
          </div>
        </div>
      )}

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
      <div className="mt-4 flex flex-wrap items-center gap-2 border-t border-gray-100 pt-4">
        {/* Reply button */}
        <button
          onClick={() => setShowReplyForm(!showReplyForm)}
          className={cn(
            'inline-flex items-center gap-1.5 rounded-lg border px-3 py-1.5 text-sm font-medium transition-colors',
            testimonial.owner_reply
              ? 'border-indigo-200 bg-indigo-50 text-indigo-700 hover:bg-indigo-100'
              : 'border-gray-300 text-gray-600 hover:bg-gray-50 hover:text-indigo-600'
          )}
        >
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
          </svg>
          {testimonial.owner_reply ? t('testimonials.editReply', locale) : t('testimonials.reply', locale)}
        </button>

        {/* Share button */}
        {testimonial.status === 'approved' && (
          <a
            href={`/compartir/${testimonial.id}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-lg border border-indigo-200 bg-indigo-50 px-3 py-1.5 text-sm font-medium text-indigo-700 transition-colors hover:bg-indigo-100"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z" />
            </svg>
            {t('testimonials.share', locale)}
          </a>
        )}
        {onApprove && testimonial.status !== 'approved' && (
          <button
            onClick={() => onApprove(testimonial.id)}
            className="inline-flex items-center gap-1.5 rounded-lg bg-green-600 px-3 py-1.5 text-sm font-medium text-white transition-colors hover:bg-green-700"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
            </svg>
            {t('testimonials.approve', locale)}
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
            {t('testimonials.reject', locale)}
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
            {t('testimonials.delete', locale)}
          </button>
        )}
      </div>
      </div>
    </div>
  )
}
