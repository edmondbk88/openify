'use client'

import { useRouter } from 'next/navigation'
import { CollectionForm } from '@/components/collection/collection-form'

interface CollectionPageClientProps {
  slug: string
  projectId: string
  brandColor: string
  allowVideo?: boolean
}

export function CollectionPageClient({
  slug,
  projectId,
  brandColor,
  allowVideo = false,
}: CollectionPageClientProps) {
  const router = useRouter()

  return (
    <CollectionForm
      projectId={projectId}
      brandColor={brandColor}
      allowVideo={allowVideo}
      onSuccess={(verificationPending) => {
        const params = verificationPending ? '?verificacion=pendiente' : ''
        router.push(`/p/${slug}/gracias${params}`)
      }}
    />
  )
}
