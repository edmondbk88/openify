'use client'

import { useRouter } from 'next/navigation'
import { CollectionForm } from '@/components/collection/collection-form'
import type { CollectionLocale } from '@/lib/collection-translations'

interface CollectionPageClientProps {
  username: string
  slug: string
  projectId: string
  brandColor: string
  allowVideo?: boolean
  locale: CollectionLocale
}

export function CollectionPageClient({
  username,
  slug,
  projectId,
  brandColor,
  allowVideo = false,
  locale,
}: CollectionPageClientProps) {
  const router = useRouter()

  return (
    <CollectionForm
      projectId={projectId}
      brandColor={brandColor}
      allowVideo={allowVideo}
      locale={locale}
      onSuccess={(verificationPending) => {
        const params = verificationPending ? '?verificacion=pendiente' : ''
        router.push(`/p/${username}/${slug}/gracias${params}`)
      }}
    />
  )
}
